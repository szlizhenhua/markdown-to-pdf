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
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import sql from 'highlight.js/lib/languages/sql'
import markdown from 'highlight.js/lib/languages/markdown'
import katex from 'katex'
import mermaid from 'mermaid'

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
  t: any  // Translation object
  onHeadingsChange?: (headings: Array<{ id: string; text: string; level: number }>) => void
}

export function MarkdownRenderer({ content, language, theme, paperSizes, fontSizes, t, onHeadingsChange }: MarkdownRendererProps) {
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
      const id = textString.toLowerCase().replace(/[^\w]+/g, "-")
      headings.push({ id, text: textString, level: depth })
      return `<h${depth} id="${id}" class="heading-${depth}" style="margin: 1em 0;">${textString}</h${depth}>`
    }

    // 自定义渲染器，处理数学公式和代码高亮
    renderer.code = (token: any) => {
      const { raw, text, lang } = token;
      const langString = lang || "";

      if (langString === "mermaid") {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        return `
          <div class="mermaid-container">
            <div class="mermaid-diagram" id="${id}">
              <textarea style="display:none;">${text}</textarea>
              <div class="mermaid-loading">${t.messages.mermaidLoading}</div>
            </div>
          </div>`;
      }

      // 提取代码内容（移除 markdown 代码块标记）
      const codeContent = raw.replace(/^```[^\n]*\n?/, '').replace(/```$/, '');

      // 用 highlight.js 高亮代码
      const language = langString || "plaintext";
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
        console.warn(t.messages.highlightJsError.replace('{lang}', language), error);
        // 降级到纯文本
        highlighted = hljs.highlight(codeContent, { language: 'plaintext' }).value;
      }

      // 构建代码块HTML，包含语言标识和正确的高亮样式
      return `<div class="code-block-container" style="margin: 1em 0;">
        <div class="code-block-header" style="background: rgba(255,255,255,0.1); padding: 0.5em 1em; border-radius: 0.5em 0.5em 0 0; font-size: 0.85em; color: #888;">
          <span style="text-transform: uppercase; font-weight: 600;">${language}</span>
        </div>
        <pre class="hljs language-${language}" style="margin: 0; border-radius: 0 0 0.5em 0.5em;"><code>${highlighted}</code></pre>
      </div>`;
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
                throwOnError: false,
                strict: false // 允许unicode字符在数学模式中
              });
              // console.log('katexHtml: ', katexHtml);
              // 添加特殊类名和属性以便在PDF导出时识别
              const katexRendered =  `<div class="katex-display" data-tex="${math}">${katexHtml}</div>`;
              // console.log('渲染结果rendered: ', rendered);
              return katexRendered;
            } catch (e) {
              console.error(t.messages.katexRenderError, e);
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
                throwOnError: false,
                strict: false // 允许unicode字符在数学模式中
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
  }, [content, language, theme, paperSizes, fontSizes, onHeadingsChange, hljs, katex, mermaid])

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
        console.error(t.messages.mermaidInitError, error);
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
        element.innerHTML = `<div class="mermaid-loading">${t.messages.mermaidRendering}</div>`;
        
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
              console.warn(t.messages.mermaidRenderRetry.replace('{count}', (retryCount + 1).toString()));
              await new Promise(resolve => setTimeout(resolve, 100));
              return renderWithRetry(retryCount + 1);
            }
            
            console.error(t.messages.mermaidFinalError, error);
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
