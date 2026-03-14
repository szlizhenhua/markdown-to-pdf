import { NextResponse } from 'next/server'
import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer-core'
import type { Page } from 'puppeteer-core'
import { getPdfFontCss } from '@/lib/pdf-fonts'
import { generatePDFHTML } from '@/lib/pdf-styles'

export const runtime = 'nodejs'
export const maxDuration = 60

const CONTENT_TIMEOUT_MS = 15000
const FONT_TIMEOUT_MS = 5000
const IMAGE_TIMEOUT_MS = 8000

async function waitForDocumentAndFonts(page: Page, fontFamilies: string[]) {
  await page.evaluate(
    async ({ fontTimeoutMs, fontFamilies }) => {
      const raceWithTimeout = <T,>(promise: Promise<T>, timeoutMs: number) =>
        Promise.race([
          promise,
          new Promise<null>((resolve) => setTimeout(() => resolve(null), timeoutMs)),
        ])

      await raceWithTimeout(
        new Promise<void>((resolve) => {
          if (document.readyState === 'interactive' || document.readyState === 'complete') {
            resolve()
            return
          }

          document.addEventListener('DOMContentLoaded', () => resolve(), { once: true })
        }),
        2000
      )

      if (!('fonts' in document)) {
        return
      }

      const fontCandidates = Array.from(
        new Set([
          ...fontFamilies.flatMap((family) => [`400 12pt "${family}"`, `700 12pt "${family}"`]),
          '400 12pt "Noto Color Emoji"',
          '400 12pt "KaTeX_Main"',
          '400 12pt "KaTeX_Math"',
        ])
      )

      await Promise.allSettled(
        fontCandidates.map((font) =>
          raceWithTimeout(document.fonts.load(font), fontTimeoutMs)
        )
      )

      await raceWithTimeout(document.fonts.ready, fontTimeoutMs)
    },
    { fontTimeoutMs: FONT_TIMEOUT_MS, fontFamilies }
  )
}

async function waitForImages(page: Page) {
  const imageSummary = await page.evaluate(
    async ({ imageTimeoutMs }) => {
      const images = Array.from(document.images)

      for (const image of images) {
        image.loading = 'eager'
        image.decoding = 'sync'
      }

      const waitForSingleImage = (image: HTMLImageElement) =>
        new Promise<'loaded' | 'failed' | 'timeout'>((resolve) => {
          if (image.complete) {
            resolve(image.naturalWidth > 0 ? 'loaded' : 'failed')
            return
          }

          let settled = false
          const finalize = (status: 'loaded' | 'failed' | 'timeout') => {
            if (settled) return
            settled = true
            clearTimeout(timer)
            image.removeEventListener('load', handleLoad)
            image.removeEventListener('error', handleError)
            resolve(status)
          }

          const handleLoad = () => finalize('loaded')
          const handleError = () => finalize('failed')
          const timer = window.setTimeout(() => finalize('timeout'), imageTimeoutMs)

          image.addEventListener('load', handleLoad, { once: true })
          image.addEventListener('error', handleError, { once: true })
        })

      const results = await Promise.all(images.map((image) => waitForSingleImage(image)))

      return {
        total: images.length,
        loaded: results.filter((status) => status === 'loaded').length,
        failed: results.filter((status) => status === 'failed').length,
        timedOut: results.filter((status) => status === 'timeout').length,
      }
    },
    { imageTimeoutMs: IMAGE_TIMEOUT_MS }
  )

  if (imageSummary.failed > 0 || imageSummary.timedOut > 0) {
    console.warn('PDF export image wait summary:', imageSummary)
  }
}

export async function POST(request: Request) {
  let browser = null

  try {
    const {
      htmlContent,
      fileName = 'document.pdf',
      theme = 'default',
      paperSize = 'a4',
      fontSize = '12',
      language = 'en',
    } = await request.json()

    const normalizedFileName = fileName && fileName.trim().length > 0 ? fileName.trim() : 'document.pdf'
    const fallbackFileName = normalizedFileName
      .replace(/[^\x20-\x7E]/g, '')
      .replace(/[^a-zA-Z0-9\-._]/g, '_') || 'document.pdf'
    const encodedFileName = encodeURIComponent(normalizedFileName)

    // 调试信息
    //console.log('PDF API 调试信息:');
    //console.log('- 语言:', language);
    //console.log('- HTML内容长度:', htmlContent?.length || 0);
    //console.log('- 原始文件名:', fileName);
    //console.log('- 安全文件名:', safeFileName);
    //console.log('- 主题:', theme);

    // 启动浏览器 - 使用 puppeteer-core + @sparticuz/chromium
    let executablePath = undefined
    let args = []

    // 在 Vercel 环境中使用 Spartacuz 的 Chromium
    if (process.env.VERCEL) {
      executablePath = await chromium.executablePath()
      args = [
        ...chromium.args,
        '--font-render-hinting=medium',
        '--disable-lcd-text-aa',
        '--enable-font-antialiasing',
        '--force-color-profile=srgb'
      ]
    } else {
      // 本地开发环境，查找系统安装的 Chrome
      const { execSync } = await import('child_process')
      try {
        // 尝试查找 Chrome/Chromium 的路径
        const possiblePaths = [
          '/usr/bin/google-chrome-stable',
          '/usr/bin/google-chrome',
          '/usr/bin/chromium-browser',
          '/usr/bin/chromium',
          '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
          '/Applications/Chromium.app/Contents/MacOS/Chromium',
        ]

        for (const path of possiblePaths) {
          try {
            execSync(`test -x "${path}"`)
            executablePath = path
            break
          } catch {
            // 继续尝试下一个路径
          }
        }

        if (!executablePath) {
          throw new Error('找不到 Chrome/Chromium 可执行文件')
        }

        args = [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--font-render-hinting=medium',
          '--enable-font-antialiasing',
          '--force-color-profile=srgb'
        ]
      } catch {
        throw new Error('本地开发需要安装 Chrome/Chromium。请安装后重试。')
      }
    }

    browser = await puppeteer.launch({
      args,
      executablePath,
      headless: process.env.VERCEL ? 'shell' : true,
      defaultViewport: { width: 1280, height: 800 }
    })

    const page = await browser.newPage()
    page.setDefaultTimeout(20000)
    page.setDefaultNavigationTimeout(20000)
    page.on('requestfailed', (failedRequest) => {
      const url = failedRequest.url()
      if (url.startsWith('data:')) {
        return
      }

      console.warn('PDF resource request failed:', {
        url,
        method: failedRequest.method(),
        errorText: failedRequest.failure()?.errorText ?? 'unknown',
      })
    })

    // 设置 HTML 内容。不要等待 networkidle0，否则远程图片或慢资源会直接拖垮导出。
    const { css: fontCss, fontFamilies } = await getPdfFontCss(htmlContent, language)
    const html = generatePDFHTML(htmlContent, {
      fontSize,
      theme,
      highlightTheme: '',
      language,
      fontCss,
    })
    await page.setContent(html, {
      waitUntil: 'domcontentloaded',
      timeout: CONTENT_TIMEOUT_MS,
    })

    try {
      await waitForDocumentAndFonts(page, fontFamilies)
    } catch (fontError) {
      console.warn('字体等待超时，继续生成 PDF:', fontError)
    }

    try {
      await waitForImages(page)
    } catch (imageError) {
      console.warn('图片等待超时，继续生成 PDF:', imageError)
    }

    await new Promise(resolve => setTimeout(resolve, 300))

    // 验证字体是否已正确加载
    await page.evaluate(() => {
      const testElement = document.createElement('div');
      testElement.style.fontFamily = '"Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji"';
      testElement.style.position = 'absolute';
      testElement.style.visibility = 'hidden';
      testElement.textContent = '😀';
      document.body.appendChild(testElement);

      const computedStyle = window.getComputedStyle(testElement);
      const fontFamily = computedStyle.fontFamily;

      document.body.removeChild(testElement);

      console.log('Font families loaded:', fontFamily);
      return fontFamily;
    })

    // 生成PDF - 支持不同的纸张尺寸
    const pdfFormat = paperSize.toUpperCase();
    //console.log('开始生成PDF，格式:', pdfFormat);

    const pdf = await page.pdf({
      format: pdfFormat as 'A4' | 'LETTER' | 'LEGAL',
      margin: {
        top: '20mm',
        right: '20mm',
        bottom: '20mm',
        left: '20mm'
      },
      printBackground: true,
      preferCSSPageSize: true,
      // 添加字体相关选项
      scale: 1.0,
      displayHeaderFooter: false,
      headerTemplate: '',
      footerTemplate: ''
    })

    //console.log('PDF生成成功，大小:', pdf.length, 'bytes');

    await browser.close()
    
    // 返回PDF文件
    return new NextResponse(new Uint8Array(pdf), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fallbackFileName}"; filename*=UTF-8''${encodedFileName}`,
      },
    })
  } catch (error) {
    console.error('PDF生成错误:', error)

    // 确保浏览器资源被正确释放
    try {
      if (browser) {
        await browser.close()
      }
    } catch (closeError) {
      console.error('关闭浏览器时出错:', closeError)
    }

    // 返回详细的错误信息
    const errorMessage = error instanceof Error ? error.message : '未知错误'
    console.error('详细错误信息:', errorMessage)

    return NextResponse.json(
      {
        error: 'PDF生成失败',
        details: errorMessage,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
