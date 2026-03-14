import { existsSync, readFileSync } from 'node:fs'
import { dirname, extname, resolve } from 'node:path'

export interface PDFStyleOptions {
  fontSize: string
  theme: string
  highlightTheme: string
}

let cachedKatexCss: string | null = null
const localFontCssCache = new Map<string, string>()
const LOCAL_KATEX_DIR = resolve(process.cwd(), 'assets/katex')
const LOCAL_NOTO_SANS_DIR = resolve(process.cwd(), 'assets/fonts/noto-sans')
const LOCAL_NOTO_SANS_SC_DIR = resolve(process.cwd(), 'assets/fonts/noto-sans-sc')
const LOCAL_NOTO_SANS_TC_DIR = resolve(process.cwd(), 'assets/fonts/noto-sans-tc')
const LOCAL_NOTO_SANS_JP_DIR = resolve(process.cwd(), 'assets/fonts/noto-sans-jp')
const LOCAL_NOTO_SANS_KR_DIR = resolve(process.cwd(), 'assets/fonts/noto-sans-kr')
const LOCAL_NOTO_SANS_ARABIC_DIR = resolve(process.cwd(), 'assets/fonts/noto-sans-arabic')
const LOCAL_NOTO_SANS_DEVANAGARI_DIR = resolve(process.cwd(), 'assets/fonts/noto-sans-devanagari')
const LOCAL_NOTO_COLOR_EMOJI_DIR = resolve(process.cwd(), 'assets/fonts/noto-color-emoji')
const PDF_SANS_FONT_STACK = '"Noto Sans", "Noto Sans SC", "Noto Sans TC", "Noto Sans JP", "Noto Sans KR", "Noto Sans Arabic", "Noto Sans Devanagari", "Helvetica Neue", "Arial", "Inter", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "WenQuanYi Micro Hei", "Heiti SC", "Noto Serif SC", "SimSun", "STHeiti", "Arial Unicode MS", "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", sans-serif'
const PDF_MONO_FONT_STACK = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, "Noto Sans", "Noto Sans SC", "Noto Sans TC", "Noto Sans JP", "Noto Sans KR", "Noto Sans Arabic", "Noto Sans Devanagari", "PingFang SC", "Microsoft YaHei", "Noto Color Emoji", monospace'

function resolveExistingKatexCssPath(): string {
  const candidates = [resolve(LOCAL_KATEX_DIR, 'katex.min.css')]

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return candidate
    }
  }

  throw new Error(`Unable to locate katex.min.css. Checked: ${candidates.join(', ')}`)
}

function resolveExistingLocalAssetPath(baseDir: string, fileName: string, label: string): string {
  const candidates = [resolve(baseDir, fileName)]

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      return candidate
    }
  }

  throw new Error(`Unable to locate ${label} asset "${fileName}". Checked: ${candidates.join(', ')}`)
}

function getLocalFontBundleCss(baseDir: string, cssFiles: string[], label: string): string {
  const cacheKey = `${baseDir}:${cssFiles.join('|')}`
  const cachedCss = localFontCssCache.get(cacheKey)
  if (cachedCss !== undefined) {
    return cachedCss
  }

  try {
    const css = cssFiles
      .map((fileName) => {
        const cssPath = resolveExistingLocalAssetPath(baseDir, fileName, label)
        const rawCss = readFileSync(cssPath, 'utf8')
        return inlineRelativeAssetUrls(rawCss, dirname(cssPath))
      })
      .join('\n')

    localFontCssCache.set(cacheKey, css)
    return css
  } catch (error) {
    console.warn(`Failed to load local ${label} CSS for PDF export:`, error)
    localFontCssCache.set(cacheKey, '')
    return ''
  }
}

function getLocalKatexCss(): string {
  if (cachedKatexCss !== null) {
    return cachedKatexCss
  }

  try {
    const katexCssPath = resolveExistingKatexCssPath()
    const rawKatexCss = readFileSync(katexCssPath, 'utf8')
    cachedKatexCss = inlineRelativeAssetUrls(rawKatexCss, dirname(katexCssPath))
  } catch (error) {
    console.warn('Failed to load local KaTeX CSS for PDF export:', error)
    cachedKatexCss = ''
  }

  return cachedKatexCss
}

function getLocalPdfFontCss(): string {
  return [
    getLocalFontBundleCss(
      LOCAL_NOTO_SANS_DIR,
      [
        'latin-400.css',
        'latin-500.css',
        'latin-700.css',
        'latin-ext-400.css',
        'latin-ext-500.css',
        'latin-ext-700.css',
        'cyrillic-400.css',
        'cyrillic-500.css',
        'cyrillic-700.css',
        'cyrillic-ext-400.css',
        'cyrillic-ext-500.css',
        'cyrillic-ext-700.css',
        'vietnamese-400.css',
        'vietnamese-500.css',
        'vietnamese-700.css',
      ],
      'Noto Sans'
    ),
    getLocalFontBundleCss(
      LOCAL_NOTO_SANS_SC_DIR,
      [
        'chinese-simplified-400.css',
        'chinese-simplified-500.css',
        'chinese-simplified-700.css',
      ],
      'Noto Sans SC'
    ),
    getLocalFontBundleCss(
      LOCAL_NOTO_SANS_TC_DIR,
      [
        'chinese-traditional-400.css',
        'chinese-traditional-500.css',
        'chinese-traditional-700.css',
      ],
      'Noto Sans TC'
    ),
    getLocalFontBundleCss(
      LOCAL_NOTO_SANS_JP_DIR,
      [
        'japanese-400.css',
        'japanese-500.css',
        'japanese-700.css',
      ],
      'Noto Sans JP'
    ),
    getLocalFontBundleCss(
      LOCAL_NOTO_SANS_KR_DIR,
      [
        'korean-400.css',
        'korean-500.css',
        'korean-700.css',
      ],
      'Noto Sans KR'
    ),
    getLocalFontBundleCss(
      LOCAL_NOTO_SANS_ARABIC_DIR,
      [
        'arabic-400.css',
        'arabic-500.css',
        'arabic-700.css',
      ],
      'Noto Sans Arabic'
    ),
    getLocalFontBundleCss(
      LOCAL_NOTO_SANS_DEVANAGARI_DIR,
      [
        'devanagari-400.css',
        'devanagari-500.css',
        'devanagari-700.css',
      ],
      'Noto Sans Devanagari'
    ),
    getLocalFontBundleCss(
      LOCAL_NOTO_COLOR_EMOJI_DIR,
      ['emoji.css'],
      'Noto Color Emoji'
    ),
  ]
    .filter(Boolean)
    .join('\n')
}

function getMimeType(filePath: string): string {
  const extension = extname(filePath).toLowerCase()

  switch (extension) {
    case '.woff2':
      return 'font/woff2'
    case '.woff':
      return 'font/woff'
    case '.ttf':
      return 'font/ttf'
    case '.otf':
      return 'font/otf'
    case '.svg':
      return 'image/svg+xml'
    default:
      return 'application/octet-stream'
  }
}

function toDataUri(filePath: string): string {
  const mimeType = getMimeType(filePath)
  const encoded = readFileSync(filePath).toString('base64')
  return `data:${mimeType};base64,${encoded}`
}

function inlineRelativeAssetUrls(css: string, assetBaseDir: string): string {
  return css.replace(/url\((['"]?)(?!data:|https?:|file:)([^'")]+)\1\)/g, (match, _quote, assetPath) => {
    const normalizedAssetPath = assetPath.trim().split('#')[0].split('?')[0]
    if (!normalizedAssetPath) {
      return match
    }

    const absoluteAssetPath = resolve(assetBaseDir, normalizedAssetPath)
    if (!existsSync(absoluteAssetPath)) {
      return match
    }

    try {
      return `url("${toDataUri(absoluteAssetPath)}")`
    } catch (error) {
      console.warn(`Failed to inline PDF asset: ${absoluteAssetPath}`, error)
      return match
    }
  })
}

/**
 * Generate PDF HTML styles based on theme and font size
 */
export function generatePDFStyles(options: PDFStyleOptions): string {
  const { fontSize, theme } = options
  const baseFontSize = Number.parseInt(fontSize, 10) || 12
  const mermaidFontSize = Math.max(10, Math.round(baseFontSize * 0.85))

  return `
            body {
              font-family: ${PDF_SANS_FONT_STACK};
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
              font-variant-numeric: normal;
            }

            /* 确保中文字符正确显示 */
            * {
              font-synthesis: none;
              -webkit-font-variant-ligatures: no-common-ligatures;
              font-variant-ligatures: no-common-ligatures;
              text-autospace: no-autospace;
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

            /* 全局 emoji 支持 - 仅在 emoji 元素上使用，避免影响数字渲染 */
            .emoji {
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
              font-family: ${PDF_MONO_FONT_STACK};
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

            /* 针对代码块中的中文注释特殊处理 - 始终应用中文字体支持 */
            .hljs-comment,
            .hljs-string,
            .hljs-title {
              font-family: ${PDF_MONO_FONT_STACK} !important;
              letter-spacing: 0.02em;
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
            ${getHighlightThemeStyles(theme)}

            .hljs-emphasis {
              font-style: italic;
            }

            .hljs-strong {
              font-weight: bold;
            }

            /* 行内代码样式 */
            code {
              font-family: ${PDF_MONO_FONT_STACK};
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
              font-family: ${PDF_SANS_FONT_STACK};
            }

            .mermaid-diagram svg,
            .mermaid svg {
              max-width: 100%;
              height: auto;
              overflow: visible;
            }

            .mermaid-diagram .nodeLabel,
            .mermaid-diagram .nodeLabel span,
            .mermaid-diagram p,
            .mermaid .nodeLabel,
            .mermaid .nodeLabel span,
            .mermaid .label,
            .mermaid .edgeLabel,
            .mermaid text,
            .mermaid p {
              margin: 0;
              text-align: center !important;
              text-indent: 0 !important;
              letter-spacing: 0 !important;
              white-space: normal;
              line-height: 1.3;
              font-size: ${mermaidFontSize}px;
              font-family: ${PDF_SANS_FONT_STACK};
            }

            .mermaid foreignObject {
              overflow: visible;
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
              ${getThemeBulletColor(theme)}
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
            pre, code, table, img, .katex, .mermaid-container, .mermaid, .mermaid-radar, .mermaid-quadrant {
              page-break-inside: avoid;
            }
  `
}

/**
 * Get highlight.js theme styles based on theme
 */
function getHighlightThemeStyles(theme: string): string {
  if (theme === 'academic' || theme === 'default') {
    return `
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
            `
  } else {
    return `
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
            `
  }
}

/**
 * Get theme bullet color for paragraphs
 */
function getThemeBulletColor(theme: string): string {
  switch (theme) {
    case 'academic':
      return 'background: #586069;'
    case 'modern':
      return 'background: #e06c75;'
    case 'minimal':
      return 'background: #abb2bf;'
    default:
      return 'background: #54c18a;'
  }
}

/**
 * Get highlight theme filename based on theme
 */
export function getHighlightThemeFilename(theme: string): string {
  return theme === 'academic' || theme === 'default'
    ? 'github.min.css'
    : 'atom-one-dark.min.css'
}

/**
 * Generate complete HTML for PDF generation
 */
export function generatePDFHTML(htmlContent: string, options: PDFStyleOptions): string {
  const { theme, fontSize } = options
  const highlightTheme = getHighlightThemeFilename(theme)
  const styles = generatePDFStyles({ fontSize, theme, highlightTheme })
  const katexCss = getLocalKatexCss()
  const localFontCss = getLocalPdfFontCss()

  return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            ${localFontCss}
          </style>
          <style>
            ${katexCss}
          </style>
          <style>
            ${styles}
          </style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `
}
