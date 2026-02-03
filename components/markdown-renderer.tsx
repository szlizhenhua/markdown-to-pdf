"use client"

import { useEffect, useRef, useState, memo } from "react"
import { marked } from "marked"
import { markedHighlight } from "marked-highlight"
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import sql from 'highlight.js/lib/languages/sql'
import markdown from 'highlight.js/lib/languages/markdown'
import katex from 'katex'
// Lazy load mermaid to reduce initial bundle size
import type { LocaleTranslations } from '@/lib/locales/types'

const MERMAID_FONT_FAMILY = '"Noto Sans SC", "Inter", "PingFang SC", "Microsoft YaHei", "Heiti SC", sans-serif'
let markedConfigured = false

// Mermaid diagram cache manager to avoid memory leaks
class MermaidCacheManager {
  private cache = new Map<string, string>()
  private cleanupInterval: ReturnType<typeof setInterval> | null = null
  private readonly MAX_CACHE_SIZE = 50
  private readonly CLEANUP_INTERVAL = 10 * 60 * 1000 // 10 minutes

  constructor() {
    // Only start cleanup interval in browser
    if (typeof window !== 'undefined') {
      this.startCleanup()
    }
  }

  private startCleanup() {
    this.cleanupInterval = setInterval(() => {
      if (this.cache.size > this.MAX_CACHE_SIZE) {
        const keysToDelete = Array.from(this.cache.keys()).slice(0, Math.floor(this.MAX_CACHE_SIZE / 2))
        keysToDelete.forEach(key => this.cache.delete(key))
      }
    }, this.CLEANUP_INTERVAL)
  }

  get(key: string): string | undefined {
    return this.cache.get(key)
  }

  set(key: string, value: string): void {
    this.cache.set(key, value)
  }

  has(key: string): boolean {
    return this.cache.has(key)
  }

  delete(key: string): boolean {
    return this.cache.delete(key)
  }

  clear(): void {
    this.cache.clear()
  }

  get size(): number {
    return this.cache.size
  }

  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval)
      this.cleanupInterval = null
    }
    this.cache.clear()
  }
}

// Singleton instance
const mermaidCache = new MermaidCacheManager()

// Cleanup on page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    mermaidCache.destroy()
  })
}

// 注册highlight.js语言
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('json', json)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('css', css)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('html', xml)  // HTML 使用 XML 解析器
hljs.registerLanguage('sql', sql)
hljs.registerLanguage('markdown', markdown)

interface MarkdownRendererProps {
  content: string
  language: string
  theme: string
  paperSizes: string
  fontSizes: string
  isGeneratingPDF: boolean
  t: LocaleTranslations
  onHeadingsChange?: (headings: Array<{ id: string; text: string; level: number }>) => void
}

// 工具函数：清理 HTML 标签和实体
const cleanHtmlText = (text: string): string => {
  return text
    .replace(/<[^>]*>/g, '') // 移除所有 HTML 标签
    .replace(/&nbsp;/g, ' ') // 替换空格实体
    .replace(/&amp;/g, '&') // 替换 & 实体
    .replace(/&lt;/g, '<') // 替换 < 实体
    .replace(/&gt;/g, '>') // 替换 > 实体
    .replace(/&quot;/g, '"') // 替换 " 实体
    .replace(/&#39;/g, "'") // 替换 ' 实体
    .replace(/&#\d+;/g, '') // 移除数字实体
    .replace(/&[a-zA-Z]+;/g, '') // 移除其他命名实体
    .trim()
}

// 工具函数：生成安全的 ID
const generateSafeId = (text: string, depth: number, index: number): string => {
  const cleanText = cleanHtmlText(text)

  return cleanText
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5\u3400-\u4dbf\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2b820-\u2ceaf\u2ceb0-\u2ebef\u30000-\u3134f]+/g, '-') // 支持更多中文字符范围
    .replace(/^-+|-+$/g, '') // 移除开头和结尾的连字符
    .replace(/--+/g, '-') // 多个连字符合并为一个
    || `heading-${depth}-${index + 1}` // 如果清理后为空，使用默认 ID
}

const escapeHtmlAttribute = (value: string): string => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

const escapeHtml = (value: string): string => {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const renderKatex = (math: string, displayMode: boolean): string => {
  try {
    const katexHtml = katex.renderToString(math, {
      displayMode,
      output: "html", // 输出HTML而不是MathML以获得更好的兼容性
      fleqn: false,
      leqno: false,
      throwOnError: false,
      strict: false // 允许unicode字符在数学模式中
    })
    const safeMath = escapeHtmlAttribute(math)
    if (displayMode) {
      return `<div class="katex-display" data-tex="${safeMath}">${katexHtml}</div>`
    }
    return `<span class="katex" data-tex="${safeMath}">${katexHtml}</span>`
  } catch {
    return displayMode ? `$$${math}$$` : `$${math}$`
  }
}

const normalizeMermaidSource = (source: string): string => {
  if (!source.trim()) return source

  const normalizedSource = source
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")

  const lines = normalizedSource.split(/\r?\n/)
  const prefix: string[] = []
  let index = 0

  while (index < lines.length) {
    const trimmed = lines[index].trim()
    if (!trimmed || trimmed.startsWith('%%')) {
      prefix.push(lines[index])
      index += 1
      continue
    }
    break
  }

  const remaining = lines.slice(index)
  if (remaining.length === 0) return source

  const firstLine = remaining[0]
    .replace(/^[\uFEFF\u200B\u200C\u200D]+/, '')
    .replace(/[—–]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
  const isRadarChart = /^radar\s*-?\s*chart\b/i.test(firstLine)
  if (!isRadarChart) {
    return normalizedSource
  }

  const titleLines: string[] = []
  const optionLines: string[] = []
  const axisLabels: string[] = []
  const seriesLines: Array<{ label: string; values: string }> = []

  for (const rawLine of remaining) {
    const trimmed = rawLine.trim()
    if (!trimmed) continue
    if (/^radar\s*-?\s*chart\b/i.test(trimmed)) continue

    if (trimmed.startsWith('title ')) {
      titleLines.push(trimmed)
      continue
    }

    if (trimmed.startsWith('axis ')) {
      const axisPart = trimmed.slice(5).trim()
      if (axisPart) {
        const items = axisPart
          .split(/[，,、]/)
          .map(item => item.trim())
          .filter(Boolean)
        axisLabels.push(...items)
      }
      continue
    }

    if (trimmed.startsWith('series ')) {
      const match = trimmed.match(/^series\s+(?:"([^"]+)"|([^{\[]+))\s*[\[{]([^}\]]+)[}\]]/)
      if (match) {
        const label = (match[1] ?? match[2] ?? '').trim()
        const values = match[3]
          .split(/[，,、]/)
          .map(value => value.trim())
          .filter(Boolean)
          .join(', ')
        if (label && values) {
          seriesLines.push({ label, values })
          continue
        }
      }
    }

    optionLines.push(trimmed)
  }

  if (axisLabels.length === 0 || seriesLines.length === 0) {
    return normalizedSource
  }

  const axisLines = axisLabels.map((label, idx) => {
    const safeLabel = label.replace(/"/g, '\\"')
    return `axis a${idx + 1}["${safeLabel}"]`
  })

  const curveLines = seriesLines.map((series, idx) => {
    const safeLabel = series.label.replace(/"/g, '\\"')
    return `curve s${idx + 1}["${safeLabel}"]{${series.values}}`
  })

  return [
    ...prefix,
    'radar-beta',
    ...titleLines,
    ...axisLines,
    ...curveLines,
    ...optionLines
  ].join('\n')
}

// Inject inline + embedded styles into rendered Mermaid SVG so labels keep consistent spacing everywhere
const injectMermaidLabelStyles = (svg: string): string => {
  if (typeof document === 'undefined') return svg;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = svg;

  const labelStyleValue = [
    'margin:0',
    'text-align:center !important',
    'text-indent:0 !important',
    'letter-spacing:normal !important',
    'white-space:normal !important',
    'line-height:1.4',
    'word-wrap:break-word !important',
    'font-family:"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif !important'
  ].join(';');

  const targets = wrapper.querySelectorAll('.nodeLabel, .nodeLabel span, .nodeLabel p');
  targets.forEach(target => {
    const existing = target.getAttribute('style');
    target.setAttribute('style', existing ? `${existing};${labelStyleValue}` : labelStyleValue);
  });

  const svgElement = wrapper.querySelector('svg');
  if (svgElement) {
    const labelStyles = `.nodeLabel, .nodeLabel span, .nodeLabel p { ${labelStyleValue} }`;
    const existingStyle = svgElement.querySelector('style');
    if (existingStyle) {
      existingStyle.textContent = `${existingStyle.textContent || ''}\n${labelStyles}`;
    } else {
      const styleEl = document.createElement('style');
      styleEl.textContent = labelStyles;
      svgElement.insertBefore(styleEl, svgElement.firstChild);
    }
  }

  return wrapper.innerHTML;
};

function MarkdownRendererComponent({ content, language, theme, paperSizes, fontSizes, isGeneratingPDF, t, onHeadingsChange }: MarkdownRendererProps) {
  const [renderedHtml, setRenderedHtml] = useState("")
  const [mermaidModule, setMermaidModule] = useState<any>(null) // eslint-disable-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<HTMLDivElement>(null)

  // Lazy load mermaid only when needed (on mount)
  useEffect(() => {
    let mounted = true
    import('mermaid').then(module => {
      if (mounted) {
        setMermaidModule(module.default || module)
      }
    })
    return () => { mounted = false }
  }, [])

  // 只在库加载完成后初始化 marked 配置
  useEffect(() => {
    if (!hljs || !katex || markedConfigured) return

    marked.use(
      markedHighlight({
        langPrefix: "hljs language-",
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : "plaintext"
          return hljs.highlight(code, { language }).value
        },
      })
    )

    marked.use({
      extensions: [
        {
          name: "mathBlock",
          level: "block",
          start(src) {
            return src.indexOf("$$")
          },
          tokenizer(src) {
            const match = src.match(/^\$\$([\s\S]+?)\$\$(?:\n|$)/)
            if (!match) return
            return {
              type: "mathBlock",
              raw: match[0],
              text: match[1].trim()
            }
          },
          renderer(token) {
            return renderKatex(token.text, true)
          }
        },
        {
          name: "mathInline",
          level: "inline",
          start(src) {
            return src.indexOf("$")
          },
          tokenizer(src) {
            if (src.startsWith("$$")) return
            const match = src.match(/^\$([^\n$]+?)\$/)
            if (!match) return
            return {
              type: "mathInline",
              raw: match[0],
              text: match[1]
            }
          },
          renderer(token) {
            return renderKatex(token.text, false)
          }
        }
      ]
    })

    marked.setOptions({
      gfm: true,
      breaks: true,
      pedantic: false,
      mangle: false,
      headerIds: false
    })

    markedConfigured = true
  }, [])

  // 内容或主题变化时重新渲染
  useEffect(() => {
    if (!hljs || !katex) return

    const highlightJsErrorMessage = t.messages.highlightJsError
    const mermaidLoadingMessage = t.messages.mermaidLoading

    const mermaid = mermaidModule
    if (!mermaid) return

    // Initialize mermaid with theme-specific config
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      maxTextSize: 90000,
      fontFamily: MERMAID_FONT_FAMILY,
      // 添加更好的错误处理配置
      logLevel: 4, // 静默日志
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        // 添加以下配置以改善中文显示
        nodeSpacing: 20, // 替代 nodePadding 的合理选项
        rankSpacing: 20  // 可选：控制层级间距
      },
      sequence: {
        useMaxWidth: true,
      }
    })

    // Custom renderer for headings with IDs
    const renderer = new marked.Renderer()
    const headings: Array<{ id: string; text: string; level: number }> = []

    // Custom link renderer for PDF compatibility
    renderer.link = ({ href, title, text }: { href: string; title?: string | null; text: string }) => {
      return `<a href="${href}" 
                title="${title || ''}" 
                style="cursor: pointer; text-decoration: underline; color: #3b82f6;" 
                target="_blank" 
                rel="noopener noreferrer"
                class="pdf-link">
              ${text}
              </a>`
    }

    renderer.heading = ({ text, depth }: { text: string; depth: number }) => {
      const textString = text
      // 使用工具函数清理文本并生成 ID
      const cleanText = cleanHtmlText(textString)
      const id = generateSafeId(textString, depth, headings.length)

      headings.push({ id, text: cleanText, level: depth })
      return `<h${depth} id="${id}" class="heading-${depth}" style="margin: 1em 0;">${textString}</h${depth}>`
    }

    // 自定义渲染器，处理数学公式和代码高亮
    renderer.code = (token: { raw?: string; text?: string; lang?: string; type?: string }) => {
      const { text, lang } = token
      const langString = (lang || "").trim()
      const normalizedLang = langString.split(/\s+/)[0].toLowerCase()

      if (normalizedLang === "mermaid") {
        const normalizedText = normalizeMermaidSource(text || "")
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        return `
          <div class="mermaid-container">
            <div class="mermaid-diagram" id="${id}">
              <textarea style="display:none;">${normalizedText}</textarea>
              <div class="mermaid-loading">${mermaidLoadingMessage}</div>
            </div>
          </div>`;
      }

      const codeContent = text || ""

      // 用 highlight.js 高亮代码
      const language = normalizedLang || "plaintext";
      let highlighted;

      try {
        // 确保语言已注册
        if (hljs.getLanguage(language)) {
          highlighted = hljs.highlight(codeContent, { language }).value;
        } else {
          // 如果语言不支持，使用纯文本
          highlighted = hljs.highlight(codeContent, { language: 'plaintext' }).value;
        }
      } catch (error) {
        console.warn(highlightJsErrorMessage.replace('{lang}', language), error);
        // 降级到纯文本
        highlighted = hljs.highlight(codeContent, { language: 'plaintext' }).value;
      }

      // 构建代码块HTML，包含语言标识、复制按钮和正确的高亮样式
      const codeId = `code-${Math.random().toString(36).substr(2, 9)}`
      return `<div class="code-block-container" style="margin: 1em 0; position: relative;">
        <div class="code-block-header" style="background: rgba(255,255,255,0.1); padding: 0.5em 1em; border-radius: 0.5em 0.5em 0 0; font-size: 0.85em; color: #888; display: flex; justify-content: space-between; align-items: center;">
          <span style="text-transform: uppercase; font-weight: 600;">${language}</span>
          <button
            onclick="window.copyCode && window.copyCode('${codeId}')"
            class="copy-code-btn"
            data-code-id="${codeId}"
            style="background: transparent; border: 1px solid rgba(136,136,136,0.3); border-radius: 4px; padding: 2px 8px; font-size: 12px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 4px; color: inherit;"
            aria-label="Copy code"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: block;">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copy</span>
          </button>
        </div>
        <pre class="hljs language-${language}" style="margin: 0; border-radius: 0 0 0.5em 0.5em;"><code id="${codeId}" class="code-content">${highlighted}</code></pre>
      </div>`;
    };

    renderer.codespan = ({ text }: { text: string }) => {
      return `<code class="inline-code">${escapeHtml(text)}</code>`
    }

    // 添加对表格的正确渲染，支持对齐方式与单元格内的嵌套 Markdown
    renderer.table = function (this: any, token: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      const header = token.header || []
      const rows = token.rows || []

      const parseInline = (cell: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
        if (cell.tokens) {
          return this.parser.parseInline(cell.tokens)
        }
        return escapeHtml(cell.text || "")
      }

      const headerCells = header.map((cell: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
        const align = cell.align || 'left'
        const cellContent = parseInline(cell)
        return `<th style="text-align: ${align};">${cellContent}</th>`
      }).join('')

      const bodyRows = rows.map((row: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
        const cells = row.map((cell: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
          const align = cell.align || 'left'
          const cellContent = parseInline(cell)
          return `<td style="text-align: ${align};">${cellContent}</td>`
        }).join('')
        return `<tr>${cells}</tr>`
      }).join('')

      return `<table class="table-bordered">
        <thead><tr>${headerCells}</tr></thead>
        <tbody>${bodyRows}</tbody>
      </table>`
    }

    // Process markdown
    const processedContent = content

    /*
    // Handle KaTeX math expressions with bold formatting
    // Block math: $$...$$
    processedContent = processedContent.replace(/\$\$([^$]+)\$\$/g, (match, math) => {
      try {
        return `<div style="text-align: center; margin: 1em 0;">${katex.renderToString(math, { displayMode: true })}</div>`
      } catch (e) {
        return match
      }
    })

    // Inline math: $...$ or **$...$**
    processedContent = processedContent.replace(/\*?\*?\$([^$\n]+)\$\*?\*?/g, (match, math) => {
      try {
        return `<strong>${katex.renderToString(math, { displayMode: false })}</strong>`
      } catch (e) {
        return match
      }
    })
    */

    // Render markdown
    const html = marked(processedContent, { renderer });
    if (typeof html === 'string') {
      setRenderedHtml(html);
    } else {
      html.then((resolvedHtml: string) => {
        setRenderedHtml(resolvedHtml);
      });
    }

    // Update headings
    if (onHeadingsChange) {
      onHeadingsChange(headings)
    }
  }, [
    content,
    language,
    theme,
    paperSizes,
    fontSizes,
    isGeneratingPDF,
    onHeadingsChange,
    mermaidModule,
    t.messages.highlightJsError,
    t.messages.mermaidLoading,
  ])

  useEffect(() => {
    if (containerRef.current && renderedHtml && mermaidModule) {
      const mermaid = mermaidModule
      // 确保使用当前主题重新初始化
      try {
        mermaid.initialize({
          startOnLoad: true,
          theme: 'default',
          securityLevel: 'loose',
          maxTextSize: 90000,
          fontFamily: MERMAID_FONT_FAMILY,
          // 添加更好的错误处理配置
          logLevel: 4, // 静默日志
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            // 添加以下配置以改善中文显示
            nodeSpacing: 20, // 替代 nodePadding 的合理选项
            rankSpacing: 20  // 可选：控制层级间距
          },
          sequence: {
            useMaxWidth: true,
          }
        });
        // 强制重新渲染所有Mermaid图表
        mermaid.contentLoaded();
      } catch (error) {
        console.error(t.messages.mermaidInitError, error);
      }

      // Manual rendering as fallback
      const mermaidElements = containerRef.current.querySelectorAll(".mermaid-diagram");
      mermaidElements.forEach(element => {
        if (element.querySelector('svg')) return; // Skip already rendered
        
        const textarea = element.querySelector('textarea');
        if (!textarea) return;
        
        // 保留原始mermaid代码，并确保箭头符号正确
        const diagramDefinition = normalizeMermaidSource(
          textarea.value
            .replace(/--&gt;/g, "-->") // 确保箭头符号不被转义
            .replace(/--&(amp;)+gt;/g, "-->")
        )
        
        // console.log('diagramDefinition: ', diagramDefinition);

        if (!diagramDefinition.trim()) return;
        
        // Add loading indicator
        element.innerHTML = `<div class="mermaid-loading">${t.messages.mermaidRendering}</div>`;
        
        // Render with retry mechanism and caching
        const renderWithRetry = async (retryCount = 0) => {
          try {
            // Check cache first
            const cacheKey = diagramDefinition.trim()
            if (mermaidCache.has(cacheKey)) {
              const cachedSvg = mermaidCache.get(cacheKey)!
              element.innerHTML = ''
              const svgElement = document.createElement('div')
              svgElement.innerHTML = injectMermaidLabelStyles(cachedSvg)
              element.appendChild(svgElement)
              return
            }

            // console.log('mermaid: ', mermaid);
            const { svg, bindFunctions } = await mermaid.render(
              element.id + "-svg",
              diagramDefinition
            )

            // Cache the rendered SVG
            mermaidCache.set(cacheKey, svg)

            element.innerHTML = ''
            const svgElement = document.createElement('div')
            const svgWithLabelStyles = injectMermaidLabelStyles(svg)
            svgElement.innerHTML = svgWithLabelStyles
            element.appendChild(svgElement)

            if (bindFunctions) {
              bindFunctions(element)
            }
          } catch (error) {
            if (retryCount < 2) {
              console.warn(t.messages.mermaidRenderRetry.replace('{count}', (retryCount + 1).toString()))
              await new Promise(resolve => setTimeout(resolve, 100))
              return renderWithRetry(retryCount + 1)
            }

            console.error(t.messages.mermaidFinalError, error)
            element.innerHTML = `
              <div style="color: red; padding: 10px; border: 1px solid red; border-radius: 4px; background: #ffe6e6;">
                <strong>${t.messages.mermaidRenderError}:</strong>
                <div style="margin-top: 5px;">${t.messages.mermaidSyntaxError}</div>
                <pre style="margin-top: 10px; white-space: pre-wrap;">${error instanceof Error ? error.message : t.messages.unknownError}</pre>
                <div style="margin-top: 10px;">${t.messages.mermaidExampleSyntax}</div>
                <pre style="margin: 5px 0; padding: 5px; background: #f5f5f5; border-radius: 3px;">
graph TD
    A[Start] --&gt; B{Decision}
    B -->|Yes| C[OK]
    B -->|No| D[Retry]</pre>
              </div>
            `
          }
        }
        
        renderWithRetry();
      });
    }
  }, [renderedHtml, mermaidModule]); // eslint-disable-line react-hooks/exhaustive-deps

  // 移除主题样式函数

    return (
      <div
        ref={containerRef}
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
        style={{
          padding: '20px',
          maxWidth: '800px',
          margin: '0 auto'
        }}
      />
    )
}

// Memoize the component to prevent unnecessary re-renders
export const MarkdownRenderer = memo(MarkdownRendererComponent, (prevProps, nextProps) => {
  // Only re-render if these specific props change
  return (
    prevProps.content === nextProps.content &&
    prevProps.theme === nextProps.theme &&
    prevProps.paperSizes === nextProps.paperSizes &&
    prevProps.fontSizes === nextProps.fontSizes &&
    prevProps.language === nextProps.language &&
    prevProps.isGeneratingPDF === nextProps.isGeneratingPDF
  )
})

MarkdownRenderer.displayName = 'MarkdownRenderer'
