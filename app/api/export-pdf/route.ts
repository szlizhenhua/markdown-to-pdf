import { NextResponse } from 'next/server'
import chromium from '@sparticuz/chromium'
import puppeteer from 'puppeteer-core'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(request: Request) {
  let browser = null

  try {
    const { htmlContent, fileName = 'document.pdf', theme = 'default', paperSize = 'a4', fontSize = '12', language = 'en' } = await request.json()

    // 确保文件名只包含ASCII字符，避免编码问题
    const safeFileName = fileName.replace(/[^a-zA-Z0-9\-._]/g, '_');

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
        '--enable-pixel-hit-testing',
        '--enable-font-antialiasing',
        '--enable-subpixel-font-rendering',
        '--force-color-profile=srgb',
        '--disable-gpu-driver-bug-workarounds'
      ]
    } else {
      // 本地开发环境，查找系统安装的 Chrome
      const { execSync } = require('child_process')
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
          '--enable-subpixel-font-rendering',
          '--force-color-profile=srgb'
        ]
      } catch (error) {
        throw new Error('本地开发需要安装 Chrome/Chromium。请安装后重试。')
      }
    }

    browser = await puppeteer.launch({
      args,
      executablePath,
      headless: true,
      defaultViewport: { width: 1280, height: 800 }
    })

    const page = await browser.newPage()
    
    // 根据主题选择代码高亮样式
    const highlightTheme = theme === 'academic' || theme === 'default'
      ? 'github.min.css'
      : 'atom-one-dark.min.css';

    // 设置HTML内容，增强对中文的支持
    await page.setContent(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          ${language === 'zh' ? `
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@400;700&family=Noto+Color+Emoji&display=swap" rel="stylesheet">
          ` : `
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Color+Emoji&display=swap" rel="stylesheet">
          `}
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/${highlightTheme}">
          <style>
            body {
              font-family: ${language === 'zh'
                ? '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Heiti SC", "SimSun", "STHeiti", "Arial Unicode MS", "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", sans-serif'
                : '"Inter", "Helvetica Neue", "Arial", "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", sans-serif'};
              padding: 20px;
              line-height: 1.6;
              color: #24292e;
              background: white;
              font-size: ${fontSize}pt;
              word-wrap: break-word;
              overflow-wrap: break-word;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
              font-weight: 400;
            }

            /* 确保中文字符正确显示 */
            * {
              font-synthesis: none;
              -webkit-font-variant-ligatures: no-common-ligatures;
              font-variant-ligatures: no-common-ligatures;
            }

            /* 优化 emoji 显示 */
            .emoji {
              font-family: "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "EmojiSymbols", sans-serif;
              font-style: normal;
              font-weight: normal;
              line-height: 1;
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }

            /* 全局 emoji 支持 */
            body, .hljs, code, pre {
              font-variant-emoji: emoji;
            }

            /* 中文标点符号优化 */
            .chinese {
              text-align: justify;
              letter-spacing: 0.05em;
            }

            /* 中英文混排优化 */
            .mixed-text {
              letter-spacing: 0.02em;
            }

            /* 代码块样式 */
            .hljs {
              display: block;
              overflow-x: auto;
              padding: 1em;
              background: #282c34;
              color: #abb2bf;
              border-radius: 6px;
              font-family: ${language === 'zh'
                ? '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", monospace'
                : '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", monospace'};
              font-size: ${Math.max(0.8, parseInt(fontSize) * 0.08)}em;
              line-height: 1.5;
              margin: 1em 0;
            }

            /* 代码块容器样式 */
            .code-block-container {
              margin: 1.5em 0;
              page-break-inside: avoid;
            }

            /* 确保代码块中的中文正确显示 */
            .code-block-container pre,
            .code-block-container code,
            .hljs {
              font-synthesis: none !important;
              -webkit-font-variant-ligatures: no-common-ligatures !important;
              font-variant-ligatures: no-common-ligatures !important;
              text-rendering: optimizeLegibility !important;
            }

            /* 针对代码块中的中文注释特殊处理 */
            .hljs-comment,
            .hljs-string,
            .hljs-title {
              ${language === 'zh' ? `
                font-family: "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", monospace !important;
                letter-spacing: 0.02em;
              ` : ''}
            }

            .code-block-header {
              background: #21252b;
              color: #9ca3af;
              padding: 0.5em 1em;
              border-radius: 6px 6px 0 0;
              font-size: 0.8em;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              border: 1px solid #3d424d;
              border-bottom: none;
            }

            .code-block-container pre {
              margin: 0;
              border-radius: 0 0 6px 6px;
              border: 1px solid #3d424d;
              border-top: none;
            }

            /* 根据主题应用不同的代码高亮样式 */
            ${theme === 'academic' || theme === 'default' ? `
              /* GitHub 浅色主题 */
              .hljs {
                background: #f6f8fa;
                color: #24292e;
                border: 1px solid #e1e4e8;
              }

              .code-block-header {
                background: #f1f3f4;
                color: #586069;
                border: 1px solid #e1e4e8;
                border-bottom: none;
              }

              .code-block-container pre {
                border: 1px solid #e1e4e8;
                border-top: none;
              }

              .hljs-comment,
              .hljs-quote {
                color: #6a737d;
              }

              .hljs-keyword,
              .hljs-selector-tag,
              .hljs-subst {
                color: #d73a49;
              }

              .hljs-number,
              .hljs-literal,
              .hljs-variable,
              .hljs-template-variable,
              .hljs-tag .hljs-attr {
                color: #005cc5;
              }

              .hljs-string,
              .hljs-doctag {
                color: #032f62;
              }

              .hljs-title,
              .hljs-section,
              .hljs-selector-id {
                color: #6f42c1;
              }

              .hljs-type,
              .hljs-class .hljs-title {
                color: #22863a;
              }

              .hljs-tag,
              .hljs-name,
              .hljs-attribute {
                color: #22863a;
              }

              .hljs-regexp,
              .hljs-link {
                color: #e36209;
              }

              .hljs-symbol,
              .hljs-bullet {
                color: #22863a;
              }

              .hljs-built_in,
              .hljs-builtin-name {
                color: #e36209;
              }

              .hljs-meta {
                color: #005cc5;
              }

              .hljs-deletion {
                background: #ffeef0;
                color: #b31d28;
              }

              .hljs-addition {
                background: #e6ffed;
                color: #22863a;
              }
            ` : `
              /* Atom One Dark 深色主题 */
              .hljs-comment,
              .hljs-quote {
                color: #5c6370;
                font-style: italic;
              }

              .hljs-keyword,
              .hljs-selector-tag,
              .hljs-subst {
                color: #c678dd;
              }

              .hljs-number,
              .hljs-literal,
              .hljs-variable,
              .hljs-template-variable,
              .hljs-tag .hljs-attr {
                color: #d19a66;
              }

              .hljs-string,
              .hljs-doctag {
                color: #98c379;
              }

              .hljs-title,
              .hljs-section,
              .hljs-selector-id {
                color: #61afef;
              }

              .hljs-type,
              .hljs-class .hljs-title {
                color: #e5c07b;
              }

              .hljs-tag,
              .hljs-name,
              .hljs-attribute {
                color: #e06c75;
                font-weight: normal;
              }

              .hljs-regexp,
              .hljs-link {
                color: #56b6c2;
              }

              .hljs-symbol,
              .hljs-bullet {
                color: #61afef;
              }

              .hljs-built_in,
              .hljs-builtin-name {
                color: #e6c07b;
              }

              .hljs-meta {
                color: #abb2bf;
              }

              .hljs-deletion {
                background: #722c2e;
                color: #ffffff;
              }

              .hljs-addition {
                background: #2e5f35;
                color: #ffffff;
              }
            `}

            .hljs-emphasis {
              font-style: italic;
            }

            .hljs-strong {
              font-weight: bold;
            }

            /* 行内代码样式 */
            code {
              font-family: ${language === 'zh'
                ? '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", "SFMono-Regular", Consolas, "Liberation Mono", Menlo, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", monospace'
                : '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", monospace'};
              font-size: 85%;
              background-color: rgba(175, 184, 193, 0.2);
              padding: 0.2em 0.4em;
              border-radius: 3px;
              color: #e06c75;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }

            /* 表格样式 */
            table {
              border-collapse: collapse;
              width: 100%;
              margin: 1em 0;
              page-break-inside: avoid;
            }

            th, td {
              border: 1px solid #ddd;
              padding: 8px 12px;
              text-align: left;
            }

            th {
              background-color: #f6f8fa;
              font-weight: 600;
            }

            /* KaTeX 样式 */
            .katex {
              font-size: 1.1em;
            }

            .katex-display {
              margin: 1em 0;
              text-align: center;
            }

            /* Mermaid 图表样式 */
            .mermaid-container {
              margin: 1em 0;
              text-align: center;
              page-break-inside: avoid;
            }

            .mermaid-diagram svg {
              max-width: 100%;
              height: auto;
            }

            /* 段落样式优化 */
            p {
              margin: 1.2em 0;
              line-height: 1.7;
              text-align: justify;
              text-indent: 2em;
              position: relative;
              orphans: 3;
              widows: 3;
            }

            /* 首段不缩进 */
            p:first-of-type,
            p:first-child {
              text-indent: 0;
            }

            /* 标题后的段落不缩进 */
            h1 + p,
            h2 + p,
            h3 + p,
            h4 + p,
            h5 + p,
            h6 + p {
              text-indent: 0;
            }

            /* 特殊元素后的段落不缩进 */
            ul + p,
            ol + p,
            pre + p,
            blockquote + p,
            table + p,
            hr + p {
              text-indent: 0;
            }

            /* 段落标识符 - 根据主题调整颜色 */
            p::before {
              content: '';
              position: absolute;
              left: 0.5em;
              top: 0.6em;
              width: 3px;
              height: 3px;
              ${theme === 'academic' ? 'background: #586069;' :
                theme === 'modern' ? 'background: #e06c75;' :
                theme === 'minimal' ? 'background: #abb2bf;' :
                'background: #54c18a;'}
              border-radius: 50%;
              opacity: 0.7;
            }

            /* 首段不显示标识符 */
            p:first-of-type::before,
            p:first-child::before,
            h1 + p::before,
            h2 + p::before,
            h3 + p::before,
            h4 + p::before,
            h5 + p::before,
            h6 + p::before {
              display: none;
            }

            /* 段落间距调整 */
            p + p {
              margin-top: 1.5em;
            }

            /* 确保行内元素不破坏缩进 */
            p code,
            p strong,
            p em,
            p a {
              text-indent: 0;
            }

            /* 标题样式 */
            h1, h2, h3, h4, h5, h6 {
              color: #24292e;
              font-weight: 600;
              line-height: 1.25;
              margin-top: 1.5em;
              margin-bottom: 0.5em;
              page-break-after: avoid;
            }

            h1 { font-size: 2em; border-bottom: 1px solid #e1e4e8; padding-bottom: 0.3em; }
            h2 { font-size: 1.5em; border-bottom: 1px solid #e1e4e8; padding-bottom: 0.3em; }
            h3 { font-size: 1.25em; }
            h4 { font-size: 1em; }
            h5 { font-size: 0.875em; }
            h6 { font-size: 0.85em; color: #6a737d; }

            /* 链接样式 */
            a {
              color: #0366d6;
              text-decoration: none;
            }

            a:hover {
              text-decoration: underline;
            }

            /* 引用样式 */
            blockquote {
              margin: 0 0 1em 0;
              padding: 0 1em;
              color: #6a737d;
              border-left: 0.25em solid #dfe2e5;
            }

            /* 列表样式 */
            ul, ol {
              margin-bottom: 1em;
              padding-left: 2em;
            }

            li {
              margin-bottom: 0.25em;
            }

            /* 水平分割线 */
            hr {
              height: 0.25em;
              padding: 0;
              margin: 24px 0;
              background-color: #e1e4e8;
              border: 0;
            }

            /* 避免分页断行 */
            pre, code, table, img, .katex, .mermaid-container {
              page-break-inside: avoid;
            }
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `)

    // 等待页面加载完成，特别是确保字体加载完成
    await page.waitForNetworkIdle({ idleTime: 1000 })

    // 等待字体加载完成（对中文和emoji特别重要）
    await page.evaluate(() => {
      return document.fonts.ready
    })

    // 额外等待时间确保 emoji 字体完全加载
    await new Promise(resolve => setTimeout(resolve, 500))

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
      format: pdfFormat as any, // A4, LETTER, LEGAL
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
        'Content-Disposition': `attachment; filename="${safeFileName}"`,
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