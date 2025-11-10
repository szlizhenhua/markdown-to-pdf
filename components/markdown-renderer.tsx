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

const MERMAID_FONT_FAMILY = '"Noto Sans SC", "Inter", "PingFang SC", "Microsoft YaHei", "Heiti SC", sans-serif'

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
  t: any  // Translation object
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

export function MarkdownRenderer({ content, language, theme, paperSizes, fontSizes, isGeneratingPDF, t, onHeadingsChange }: MarkdownRendererProps) {
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

    // 获取对齐方式的 CSS 样式
    const getAlignmentStyle = (align: string): string => {
      switch (align) {
        case 'left':
          return 'text-align: left; padding: 8px 12px;';
        case 'right':
          return 'text-align: right; padding: 8px 12px;';
        case 'center':
          return 'text-align: center; padding: 8px 12px;';
        default:
          return 'text-align: left; padding: 8px 12px;';
      }
    };

    // 添加对表格的正确渲染，支持对齐方式
    renderer.table = (token: any) => {
      // Marked.js 将表格 token 分为 header 和 rows
      const header = token.header;
      const rows = token.rows;

      // 渲染表头
      const headerCells = header.map((cell: any) => {
        const align = cell.align || 'left';
        const alignStyle = getAlignmentStyle(align);
        const cellContent = cell.text || '';
        return `<th style="${alignStyle}; background-color: #f6f8fa; font-weight: 600; border-bottom: 2px solid #ddd; border: 1px solid #ddd;">${cellContent}</th>`;
      }).join('');

      // 渲染表格内容
      const bodyRows = rows.map((row: any) => {
        const cells = row.map((cell: any) => {
          const align = cell.align || 'left';
          const alignStyle = getAlignmentStyle(align);
          const cellContent = cell.text || '';
          return `<td style="${alignStyle}; border: 1px solid #ddd;">${cellContent}</td>`;
        }).join('');
        return `<tr>${cells}</tr>`;
      }).join('');

      return `<table class="table-bordered" style="margin: 1em 0; border-collapse: collapse; width: 100%; border: 1px solid #ddd;">
        <thead><tr>${headerCells}</tr></thead>
        <tbody>${bodyRows}</tbody>
      </table>`;
    };

    // 添加对表格头的正确渲染
    renderer.tablerow = (token: any) => {
      return `<tr>${token.text}</tr>`;
    };

    // 添加对表格单元格的正确渲染，支持对齐
    renderer.tablecell = (token: any) => {
      const tag = token.header ? 'th' : 'td';
      const align = token.align || 'left';
      const alignStyle = getAlignmentStyle(align);
      const cellContent = token.text || '';

      if (token.header) {
        return `<th style="${getAlignmentStyle(align)}; background-color: #f6f8fa; font-weight: 600; border-bottom: 2px solid #ddd;">${cellContent}</th>`;
      } else {
        return `<td style="${getAlignmentStyle(align)}; border-bottom: 1px solid #ddd;">${cellContent}</td>`;
      }
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
  }, [content, language, theme, paperSizes, fontSizes, isGeneratingPDF, onHeadingsChange, hljs, katex, mermaid])

  useEffect(() => {
    if (containerRef.current && renderedHtml && mermaid) {
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
            const svgWithLabelStyles = injectMermaidLabelStyles(svg);
            svgElement.innerHTML = svgWithLabelStyles;
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
