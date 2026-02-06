"use client"

import { useEffect, useRef, useState, memo } from "react"
import { marked } from "marked"
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
import type { LocaleTranslations } from '@/lib/locales/types'
import { preprocessMarkdown, renderMermaidInContainer } from '@/lib/markdownRender'
import { stripMarkdown } from '@/lib/markdownUtils'

let markedConfigured = false

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
  t: LocaleTranslations
  onHeadingsChange?: (headings: Array<{ id: string; text: string; level: number }>) => void
}

// 工具函数：清理 HTML 标签和实体
const cleanHtmlText = (text: string): string => {
  const stripped = stripMarkdown(text)
  return stripped
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

 

function MarkdownRendererComponent({ content, language, theme, paperSizes, fontSizes, t, onHeadingsChange }: MarkdownRendererProps) {
  const [renderedHtml, setRenderedHtml] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)

  // 只在库加载完成后初始化 marked 配置
  useEffect(() => {
    if (!hljs || !katex || markedConfigured) return

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
    })

    markedConfigured = true
  }, [])

  // 内容或主题变化时重新渲染
  useEffect(() => {
    if (!hljs || !katex) return

    const highlightJsErrorMessage = t.messages.highlightJsError

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

    renderer.heading = function (this: any, token: { text: string; depth: number; tokens?: unknown[] }) {
      const rawText = token.text || ''
      const renderedText = token.tokens ? this.parser.parseInline(token.tokens) : escapeHtml(rawText)

      // 使用工具函数清理文本并生成 ID
      const cleanText = cleanHtmlText(rawText)
      const id = generateSafeId(rawText, token.depth, headings.length)

      headings.push({ id, text: cleanText, level: token.depth })
      return `<h${token.depth} id="${id}" class="heading-${token.depth}" style="margin: 1em 0;">${renderedText}</h${token.depth}>`
    }

    // 自定义渲染器，处理数学公式和代码高亮
    renderer.code = (token: { raw?: string; text?: string; lang?: string; type?: string }) => {
      const { text, lang } = token
      const langString = (lang || "").trim()
      const normalizedLang = langString.split(/\s+/)[0].toLowerCase()

      if (normalizedLang === "mermaid") {
        const escapedText = escapeHtml(text || "")
        return `<pre><code class="language-mermaid">${escapedText}</code></pre>`
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
    const processedContent = preprocessMarkdown(content)

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
    onHeadingsChange,
    t.messages.highlightJsError,
  ])

  useEffect(() => {
    if (!containerRef.current || !renderedHtml) return
    void renderMermaidInContainer(containerRef.current)
  }, [renderedHtml])

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
    prevProps.language === nextProps.language
  )
})

MarkdownRenderer.displayName = 'MarkdownRenderer'
