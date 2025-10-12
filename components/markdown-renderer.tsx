"use client"

import { useEffect, useRef, useState } from "react"
import { marked } from "marked"
import { markedHighlight } from "marked-highlight"
import type { Tokens } from "marked"
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'
import katex from 'katex'
import mermaid from 'mermaid'

// 注册highlight.js语言
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('json', json)
hljs.registerLanguage('bash', bash)

interface MarkdownRendererProps {
  content: string
  theme: string
  paperSizes: string
  fontSizes: string
  onHeadingsChange?: (headings: Array<{ id: string; text: string; level: number }>) => void
}

export function MarkdownRenderer({ content, theme, paperSizes, fontSizes, onHeadingsChange }: MarkdownRendererProps) {
  const [renderedHtml, setRenderedHtml] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)

  // 只在库加载完成后初始化 marked 配置
  useEffect(() => {
    if (!hljs || !katex || !mermaid) return;

    marked.use(
      markedHighlight({
        langPrefix: "hljs language-",
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : "plaintext";
          return hljs.highlight(code, { language }).value;
        },
      })
    );

    marked.setOptions({
      gfm: true,
      breaks: true,
      pedantic: false,
    });
  }, [hljs, katex, mermaid]);

  // 内容或主题变化时重新渲染
  useEffect(() => {
    if (!hljs || !katex || !mermaid) return

    // Initialize mermaid with theme-specific config
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      maxTextSize: 90000,
      fontFamily: 'inherit',
      // 添加更好的错误处理配置
      logLevel: 1, // 减少日志输出
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
      },
      sequence: {
        useMaxWidth: true,
      }
    })

    // Custom renderer for headings with IDs
    const renderer = new marked.Renderer()
    const headings: Array<{ id: string; text: string; level: number }> = []

    renderer.heading = ({ text, depth }: { text: string; depth: number }) => {
      const textString = text
      const id = textString.toLowerCase().replace(/[^\w]+/g, "-")
      headings.push({ id, text: textString, level: depth })
      return `<h${depth} id="${id}" class="heading-${depth}" style="margin: 1em 0;">${textString}</h${depth}>`
    }

    // 自定义渲染器，处理数学公式
    renderer.code = (token: any) => {
      const { raw, text, lang } = token;
      const langString = lang || "";
      
      if (langString === "mermaid") {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        return `
          <div class="mermaid-container">
            <div class="mermaid-diagram" id="${id}">
              <textarea style="display:none;">${text}</textarea>
              <div class="mermaid-loading">Loading diagram...</div>
            </div>
          </div>`;
      }
      
      // 用 highlight.js 高亮原始代码
      const language = langString || "plaintext";
      const highlighted = hljs.highlight(raw.replace(/^```[^\n]*\n?/, '').replace(/```$/, ''), { language }).value;
      return `<pre class="hljs language-${language}" style="background-color: #f8f9fa; padding: 1em; border-radius: 4px; overflow-x: auto; margin: 1em 0;"><code>${highlighted}</code></pre>`;
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
      
      return `<table class="table-bordered" style="margin: 1em 0; border-collapse: collapse; width: 100%;">${headerRow}${bodyRows}</table>`;
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

    // 只对非代码块做格式替换
    const splitMarkdown = (content: string) => {
      // 按代码块分割
      const parts = content.split(/(```[\s\S]*?```)/g);
      return parts.map(part => {
        if (part.startsWith("```")) {
          // 代码块，原样返回
          return part;
        } else {
          // 先处理 KaTeX 公式，彻底移除原始 $...$、$$...$$
          // Block math: $$...$$
          part = part.replace(/\$\$([^$]+)\$\$/g, (match, math) => {
            try {
              // console.log('match$$: ', match);
              // console.log('渲染块级公式math$$:', math);
              const katexHtml = katex.renderToString(math, { 
                displayMode: true, // 改为 true 以正确渲染块级公式
                output: "html", // 输出HTML而不是MathML以获得更好的兼容性
                fleqn: false,
                leqno: false,
                throwOnError: false
              });
              // console.log('katexHtml: ', katexHtml);
              // 添加特殊类名和属性以便在PDF导出时识别
              const katexRendered =  `<div class="katex-display" data-tex="${math}">${katexHtml}</div>`;
              // console.log('渲染结果rendered: ', rendered);
              return katexRendered;
            } catch (e) {
              console.error('KaTeX渲染错误:', e);
              return match;
            }
          });
          // Inline math: $...$
          part = part.replace(/\*?\*?\$([^$\n]+)\$\*?\*?/g, (match, math) => {
            try {
              // console.log('replaced: ', replaced);
              // console.log('match$: ', match);
              // console.log('math$: ', math);
              const katexHtml = katex.renderToString(math, { 
                displayMode: false, 
                output: "html", // 输出HTML而不是MathML以获得更好的兼容性
                fleqn: false,
                leqno: false,
                throwOnError: false
              });
              // console.log('渲染结果katexHtml: ', katexHtml);
              // 添加特殊类名和属性以便在PDF导出时识别
              return `<span class="katex" data-tex="${math}">${katexHtml}</span>`;
            } catch (e) {
              return match
            }
          });

          // 再做粗体/斜体/删除线等格式替换，避免包裹公式
          let replaced = part
            .replace(/(\*\*\*)([^*]+?)(\*\*\*)/g, '<strong><em>$2</em></strong>')
            .replace(/(\*\*)([^*]+?)(\*\*)/g, '<strong>$2</strong>')
            .replace(/(\`)([^`]+?)(\`)/g, '<code class="inline-code">$2</code>')
            .replace(/(\*)([^*]+?)(\*)/g, '<em>$2</em>')
            .replace(/(~~)([^~]+?)(~~)/g, '<del>$2</del>');
          // console.log('replaced00: ', replaced);
          return replaced;
        }
      }).join('');
    };

    content = splitMarkdown(content);
    // console.log('content: ', content);

    // Process markdown
    let processedContent = content

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
  }, [content, theme, paperSizes, fontSizes, onHeadingsChange, hljs, katex, mermaid])

  useEffect(() => {
    if (containerRef.current && renderedHtml && mermaid) {
      // 确保使用当前主题重新初始化
      try {
        mermaid.initialize({
          startOnLoad: true,
          theme: 'default',
          securityLevel: 'loose',
          maxTextSize: 90000,
          fontFamily: 'inherit'
        });
        // 强制重新渲染所有Mermaid图表
        mermaid.contentLoaded();
      } catch (error) {
        console.error("Mermaid initialization error:", error);
      }

      // Manual rendering as fallback
      const mermaidElements = containerRef.current.querySelectorAll(".mermaid-diagram");
      mermaidElements.forEach(element => {
        if (element.querySelector('svg')) return; // Skip already rendered
        
        const textarea = element.querySelector('textarea');
        if (!textarea) return;
        
        // 保留原始mermaid代码，并确保箭头符号正确
        const diagramDefinition = textarea.value
          .replace(/--&gt;/g, "-->") // 确保箭头符号不被转义
          .replace(/--&(amp;)+gt;/g, "-->");
        
        // console.log('diagramDefinition: ', diagramDefinition);

        if (!diagramDefinition.trim()) return;
        
        // Add loading indicator
        element.innerHTML = '<div class="mermaid-loading">Rendering diagram...</div>';
        
        // Render with retry mechanism
        const renderWithRetry = async (retryCount = 0) => {
          try {
            // console.log('mermaid: ', mermaid);
            const { svg, bindFunctions } = await mermaid.render(
              element.id + "-svg",
              diagramDefinition
            );
            
            element.innerHTML = '';
            const svgElement = document.createElement('div');
            svgElement.innerHTML = svg;
            element.appendChild(svgElement);
            
            if (bindFunctions) {
              bindFunctions(element);
            }
          } catch (error) {
            if (retryCount < 2) {
              console.warn(`Mermaid渲染尝试 ${retryCount + 1} 失败，将在100ms后重试`);
              await new Promise(resolve => setTimeout(resolve, 100));
              return renderWithRetry(retryCount + 1);
            }
            
            console.error("Mermaid渲染最终失败:", error);
            element.innerHTML = `
              <div style="color: red; padding: 10px; border: 1px solid red; border-radius: 4px; background: #ffe6e6;">
                <strong>Mermaid渲染错误:</strong>
                <div style="margin-top: 5px;">请检查Mermaid语法是否正确</div>
                <pre style="margin-top: 10px; white-space: pre-wrap;">${error instanceof Error ? error.message : '未知错误'}</pre>
                <div style="margin-top: 10px;">示例语法:</div>
                <pre style="margin: 5px 0; padding: 5px; background: #f5f5f5; border-radius: 3px;">
graph TD
    A[Start] --&gt; B{Decision}
    B -->|Yes| C[OK]
    B -->|No| D[Retry]</pre>
              </div>
            `;
          }
        };
        
        renderWithRetry();
      });
    }
  }, [renderedHtml, mermaid]);

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
