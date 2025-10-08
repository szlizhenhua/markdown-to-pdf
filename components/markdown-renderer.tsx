"use client"

import { useEffect, useRef, useState } from "react"
import { marked } from "marked"
import { markedHighlight } from "marked-highlight"
import type { Tokens } from "marked"

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
      flowchart: {
        useMaxWidth: false,
        htmlLabels: true,
      },
      // 添加更多配置确保兼容性
      maxTextSize: 90000,
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
        // 使用textarea来存储mermaid代码，避免HTML解析
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
        return `
          <div class="mermaid-container">
            <div class="mermaid-diagram" id="${id}">
              <textarea style="display:none;">${codeString}</textarea>
              <div class="mermaid-loading">Loading diagram...</div>
            </div>
          </div>`
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

    // 确保 strong 文本正确渲染
    renderer.strong = ({ tokens }: Pick<Tokens.Strong, 'tokens'>) => {
      if (!tokens) return '<strong></strong>';
      const text = tokens.map(token => 'raw' in token ? token.raw : '').join('');
      return `<strong>${text}</strong>`;
    };

    // 确保 emphasis 文本正确渲染
    renderer.em = ({ tokens }: Pick<Tokens.Em, 'tokens'>) => {
      if (!tokens) return '<em></em>';
      const text = tokens.map(token => 'raw' in token ? token.raw : '').join('');
      return `<em>${text}</em>`;
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
      const mermaidElements = containerRef.current.querySelectorAll(".mermaid-diagram")
      mermaidElements.forEach(async (element) => {
        try {
          const textarea = element.querySelector('textarea')
          if (!textarea) return
            
          const diagramDefinition = textarea.value
          if (!diagramDefinition.trim()) return
            
          // 使用更精确的方法处理Mermaid代码
          let processedDefinition = diagramDefinition;
          
          // 直接使用原始代码渲染，不进行任何处理
          const { svg, bindFunctions } = await mermaid.render(
            element.id + "-svg", 
            diagramDefinition
          )
          
          // Clear the element and add the rendered SVG
          element.innerHTML = ''
          const svgElement = document.createElement('div')
          svgElement.innerHTML = svg
          element.appendChild(svgElement)
          
          // If there are binding functions, call them
          if (bindFunctions) {
            bindFunctions(element)
          }
        } catch (error) {
          console.error("Mermaid rendering error:", error)
          // 如果处理后的代码仍有问题，则尝试使用原始代码
          try {
            const textarea = element.querySelector('textarea')
            if (!textarea) return
            
            const diagramDefinition = textarea.value
            const { svg, bindFunctions } = await mermaid.render(
              element.id + "-svg", 
              diagramDefinition
            )
            
            element.innerHTML = ''
            const svgElement = document.createElement('div')
            svgElement.innerHTML = svg
            element.appendChild(svgElement)
            
            if (bindFunctions) {
              bindFunctions(element)
            }
          } catch (fallbackError) {
            console.error("Mermaid fallback rendering error:", fallbackError)
            const errorDiv = document.createElement('div')
            errorDiv.className = 'mermaid-error'
            errorDiv.innerHTML = `
              <div style="color: red; padding: 10px; border: 1px solid red; border-radius: 4px; background: #ffe6e6;">
                <strong>Mermaid渲染错误:</strong>
                <pre style="margin-top: 10px; white-space: pre-wrap;">${fallbackError instanceof Error ? fallbackError.message : '未知错误'}</pre>
              </div>
            `
            element.innerHTML = ''
            element.appendChild(errorDiv)
          }
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