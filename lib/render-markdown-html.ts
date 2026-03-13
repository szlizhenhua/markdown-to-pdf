"use client"

import { marked } from "marked"
import hljs from "highlight.js"
import javascript from "highlight.js/lib/languages/javascript"
import typescript from "highlight.js/lib/languages/typescript"
import python from "highlight.js/lib/languages/python"
import json from "highlight.js/lib/languages/json"
import bash from "highlight.js/lib/languages/bash"
import css from "highlight.js/lib/languages/css"
import xml from "highlight.js/lib/languages/xml"
import sql from "highlight.js/lib/languages/sql"
import markdown from "highlight.js/lib/languages/markdown"
import katex from "katex"
import type { LocaleTranslations } from "@/lib/locales/types"
import { preprocessMarkdown } from "@/lib/markdownRender"
import { stripMarkdown } from "@/lib/markdownUtils"

interface HeadingData {
  id: string
  text: string
  level: number
}

interface RenderMarkdownResult {
  html: string
  headings: HeadingData[]
}

let languagesRegistered = false
let markedConfigured = false

const ensureHighlightLanguages = () => {
  if (languagesRegistered) return

  hljs.registerLanguage("javascript", javascript)
  hljs.registerLanguage("typescript", typescript)
  hljs.registerLanguage("python", python)
  hljs.registerLanguage("json", json)
  hljs.registerLanguage("bash", bash)
  hljs.registerLanguage("css", css)
  hljs.registerLanguage("xml", xml)
  hljs.registerLanguage("html", xml)
  hljs.registerLanguage("sql", sql)
  hljs.registerLanguage("markdown", markdown)

  languagesRegistered = true
}

const cleanHtmlText = (text: string): string => {
  const stripped = stripMarkdown(text)
  return stripped
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#\d+;/g, "")
    .replace(/&[a-zA-Z]+;/g, "")
    .trim()
}

const generateSafeId = (text: string, depth: number, index: number): string => {
  const cleanText = cleanHtmlText(text)

  return (
    cleanText
      .toLowerCase()
      .replace(/[^\w\u4e00-\u9fa5\u3400-\u4dbf\u20000-\u2a6df\u2a700-\u2b73f\u2b740-\u2b81f\u2b820-\u2ceaf\u2ceb0-\u2ebef\u30000-\u3134f]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/--+/g, "-") || `heading-${depth}-${index + 1}`
  )
}

const escapeHtmlAttribute = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

const renderKatex = (math: string, displayMode: boolean): string => {
  try {
    const katexHtml = katex.renderToString(math, {
      displayMode,
      output: "html",
      fleqn: false,
      leqno: false,
      throwOnError: false,
      strict: false,
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

const ensureMarkedConfigured = () => {
  if (markedConfigured) return

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
            text: match[1].trim(),
          }
        },
        renderer(token) {
          return renderKatex(token.text, true)
        },
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
            text: match[1],
          }
        },
        renderer(token) {
          return renderKatex(token.text, false)
        },
      },
    ],
  })

  marked.setOptions({
    gfm: true,
    breaks: true,
    pedantic: false,
  })

  markedConfigured = true
}

export async function renderMarkdownToHtml(
  content: string,
  t: LocaleTranslations
): Promise<RenderMarkdownResult> {
  ensureHighlightLanguages()
  ensureMarkedConfigured()

  const renderer = new marked.Renderer()
  const headings: HeadingData[] = []
  const highlightJsErrorMessage = t.messages.highlightJsError

  renderer.link = ({
    href,
    title,
    text,
  }: {
    href: string
    title?: string | null
    text: string
  }) => {
    return `<a href="${href}" 
              title="${title || ""}" 
              style="cursor: pointer; text-decoration: underline; color: #3b82f6;" 
              target="_blank" 
              rel="noopener noreferrer"
              class="pdf-link">
            ${text}
            </a>`
  }

  renderer.heading = function (
    this: { parser: { parseInline: (tokens: unknown[]) => string } },
    token: { text: string; depth: number; tokens?: unknown[] }
  ) {
    const rawText = token.text || ""
    const renderedText = token.tokens ? this.parser.parseInline(token.tokens) : escapeHtml(rawText)
    const cleanText = cleanHtmlText(rawText)
    const id = generateSafeId(rawText, token.depth, headings.length)

    headings.push({ id, text: cleanText, level: token.depth })
    return `<h${token.depth} id="${id}" class="heading-${token.depth}" style="margin: 1em 0;">${renderedText}</h${token.depth}>`
  }

  renderer.code = (token: { text?: string; lang?: string }) => {
    const { text, lang } = token
    const langString = (lang || "").trim()
    const normalizedLang = langString.split(/\s+/)[0].toLowerCase()

    if (normalizedLang === "mermaid") {
      const escapedText = escapeHtml(text || "")
      return `<pre><code class="language-mermaid">${escapedText}</code></pre>`
    }

    const codeContent = text || ""
    const language = normalizedLang || "plaintext"
    let highlighted: string

    try {
      if (hljs.getLanguage(language)) {
        highlighted = hljs.highlight(codeContent, { language }).value
      } else {
        highlighted = hljs.highlight(codeContent, { language: "plaintext" }).value
      }
    } catch (error) {
      console.warn(highlightJsErrorMessage.replace("{lang}", language), error)
      highlighted = hljs.highlight(codeContent, { language: "plaintext" }).value
    }

    const codeId = `code-${Math.random().toString(36).slice(2, 11)}`
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
    </div>`
  }

  renderer.codespan = ({ text }: { text: string }) => {
    return `<code class="inline-code">${escapeHtml(text)}</code>`
  }

  renderer.table = function (
    this: { parser: { parseInline: (tokens: unknown[]) => string } },
    token: {
      header?: Array<{ align?: "left" | "center" | "right" | null; text?: string; tokens?: unknown[] }>
      rows?: Array<Array<{ align?: "left" | "center" | "right" | null; text?: string; tokens?: unknown[] }>>
    }
  ) {
    const header = token.header || []
    const rows = token.rows || []

    const parseInline = (cell: { text?: string; tokens?: unknown[] }) => {
      if (cell.tokens) {
        return this.parser.parseInline(cell.tokens)
      }
      return escapeHtml(cell.text || "")
    }

    const headerCells = header
      .map((cell) => {
        const align = cell.align || "left"
        const cellContent = parseInline(cell)
        return `<th style="text-align: ${align};">${cellContent}</th>`
      })
      .join("")

    const bodyRows = rows
      .map((row) => {
        const cells = row
          .map((cell) => {
            const align = cell.align || "left"
            const cellContent = parseInline(cell)
            return `<td style="text-align: ${align};">${cellContent}</td>`
          })
          .join("")
        return `<tr>${cells}</tr>`
      })
      .join("")

    return `<table class="table-bordered">
      <thead><tr>${headerCells}</tr></thead>
      <tbody>${bodyRows}</tbody>
    </table>`
  }

  const html = await marked(preprocessMarkdown(content), { renderer })
  return { html, headings }
}
