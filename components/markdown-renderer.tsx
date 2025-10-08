"use client"

import { useEffect, useRef, useState } from "react"
import { marked } from "marked"
import { markedHighlight } from "marked-highlight"

interface MarkdownRendererProps {
  content: string
  theme: string
  onHeadingsChange?: (headings: Array<{ id: string; text: string; level: number }>) => void
}

export function MarkdownRenderer({ content, theme, onHeadingsChange }: MarkdownRendererProps) {
  const [renderedHtml, setRenderedHtml] = useState("")
  const [hljs, setHljs] = useState<any>(null)
  const [katex, setKatex] = useState<any>(null)
  const [mermaid, setMermaid] = useState<any>(null)
  const [librariesLoaded, setLibrariesLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadLibraries = async () => {
      try {
        // Load highlight.js
        if (!(window as any).hljs) {
          const hljsScript = document.createElement("script")
          hljsScript.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"
          document.head.appendChild(hljsScript)

          const hljsLink = document.createElement("link")
          hljsLink.rel = "stylesheet"
          hljsLink.href = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css"
          document.head.appendChild(hljsLink)

          await new Promise((resolve) => {
            hljsScript.onload = resolve
          })
        }

        // Load KaTeX
        if (!(window as any).katex) {
          const katexScript = document.createElement("script")
          katexScript.src = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.8/katex.min.js"
          document.head.appendChild(katexScript)

          const katexLink = document.createElement("link")
          katexLink.rel = "stylesheet"
          katexLink.href = "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.8/katex.min.css"
          document.head.appendChild(katexLink)

          await new Promise((resolve) => {
            katexScript.onload = resolve
          })
        }

        // Load Mermaid
        if (!(window as any).mermaid) {
          const mermaidScript = document.createElement("script")
          mermaidScript.src = "https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.6.1/mermaid.min.js"
          document.head.appendChild(mermaidScript)

          await new Promise((resolve) => {
            mermaidScript.onload = resolve
          })
        }

        // Set libraries from global
        setHljs((window as any).hljs)
        setKatex((window as any).katex)
        setMermaid((window as any).mermaid)
        setLibrariesLoaded(true)
      } catch (error) {
        console.error("Failed to load libraries:", error)
      }
    }

    if (!librariesLoaded) {
      loadLibraries()
    }
  }, [librariesLoaded])

  useEffect(() => {
    if (!librariesLoaded || !hljs || !katex || !mermaid) return

    // Initialize mermaid
    mermaid.initialize({
      startOnLoad: false,
      theme: "default",
      securityLevel: "loose",
    })

    // Configure marked with syntax highlighting
    marked.use(
      markedHighlight({
        langPrefix: "hljs language-",
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : "plaintext"
          return hljs.highlight(code, { language }).value
        },
      }),
    )

    // Custom renderer for headings with IDs
    const renderer = new marked.Renderer()
    const headings: Array<{ id: string; text: string; level: number }> = []

    renderer.heading = ({ text, depth }: { text: string; depth: number }) => {
      const textString = text
      const id = textString.toLowerCase().replace(/[^\w]+/g, "-")
      headings.push({ id, text: textString, level: depth })
      return `<h${depth} id="${id}" class="heading-${depth}">${textString}</h${depth}>`
    }

    // Custom renderer for code blocks to handle mermaid
    renderer.code = ({ text, lang }: { text: string; lang?: string }) => {
      const codeString = text
      
      const langString = lang || ""

      if (langString === "mermaid") {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
        return `<div class="mermaid-container"><div class="mermaid" id="${id}">${codeString}</div></div>`
      }
      const language = hljs.getLanguage(langString) ? langString : "plaintext"
      const highlighted = hljs.highlight(codeString, { language }).value
      return `<pre class="hljs"><code class="language-${language}">${highlighted}</code></pre>`
    }

    // 添加对列表项的正确渲染
    renderer.listitem = (token: any) => {
      return `<li>${token.text}</li>`;
    };

    // 添加对无序列表的正确渲染
    renderer.list = (token: any) => {
      const type = token.ordered ? 'ol' : 'ul';
      const body = token.items.map((item: any) => renderer.listitem(item)).join('');
      return `<${type}>${body}</${type}>`;
    };

    // 添加对表格的正确渲染
    renderer.table = (token: any) => {
      const headerContent = token.header.map((cell: any) => renderer.tablecell(cell)).join('');
      const headerRow = renderer.tablerow({ text: headerContent });
      
      const bodyRows = token.rows
        .map((row: any) => {
          const rowContent = row.map((cell: any) => renderer.tablecell(cell)).join('');
          return renderer.tablerow({ text: rowContent });
        })
        .join('');
        
      return `<table class="table-bordered">${headerRow}${bodyRows}</table>`;
    };

    // 添加对表格头的正确渲染
    renderer.tablerow = (token: any) => {
      return `<tr>${token.text}</tr>`;
    };

    // 添加对表格单元格的正确渲染
    renderer.tablecell = (token: any) => {
      const tag = token.header ? 'th' : 'td';
      const align = token.align ? `align="${token.align}"` : '';
      return `<${tag} ${align}>${token.text}</${tag}>`;
    };

    marked.setOptions({ renderer })

    // Process markdown
    let processedContent = content

    // Handle KaTeX math expressions
    // Inline math: $...$
    processedContent = processedContent.replace(/\$([^$\n]+)\$/g, (match, math) => {
      try {
        return katex.renderToString(math, { displayMode: false })
      } catch (e) {
        return match
      }
    })

    // Block math: $$...$$
    processedContent = processedContent.replace(/\$\$([^$]+)\$\$/g, (match, math) => {
      try {
        return katex.renderToString(math, { displayMode: true })
      } catch (e) {
        return match
      }
    })

    // Render markdown
    const html = marked(processedContent)
    if (typeof html === 'string') {
      setRenderedHtml(html)
    } else {
      // If it's a Promise, await it then set the state
      html.then((resolvedHtml: string) => {
        setRenderedHtml(resolvedHtml)
      })
    }

    // Update headings
    if (onHeadingsChange) {
      onHeadingsChange(headings)
    }
  }, [content, onHeadingsChange, librariesLoaded, hljs, katex, mermaid])

  useEffect(() => {
    // Render mermaid diagrams after HTML is set
    if (containerRef.current && renderedHtml && mermaid) {
      const mermaidElements = containerRef.current.querySelectorAll(".mermaid")
      mermaidElements.forEach(async (element, index) => {
        try {
          const { svg } = await mermaid.render(`mermaid-${index}`, element.textContent || "")
          element.innerHTML = svg
        } catch (error) {
          console.error("Mermaid rendering error:", error)
          element.innerHTML = `<pre>Error rendering diagram: ${element.textContent}</pre>`
        }
      })
    }
  }, [renderedHtml, mermaid])

  const getThemeClasses = () => {
    switch (theme) {
      case "academic":
        return "prose-academic"
      case "modern":
        return "prose-modern"
      case "minimal":
        return "prose-minimal"
      default:
        return "prose-default"
    }
  }

  if (!librariesLoaded) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
          <p className="text-sm text-muted-foreground">Loading libraries...</p>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`prose prose-lg max-w-none ${getThemeClasses()}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
      style={{
        // Theme-specific styles
        ...(theme === "academic" && {
          fontFamily: "Georgia, serif",
          lineHeight: "1.8",
        }),
        ...(theme === "modern" && {
          fontFamily: "system-ui, sans-serif",
          fontSize: "16px",
        }),
        ...(theme === "minimal" && {
          fontFamily: "system-ui, sans-serif",
          color: "#333",
        }),
      }}
    />
  )
}
