"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Upload, Eye, Settings } from "lucide-react"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { TableOfContents } from "@/components/table-of-contents"
import katex from "katex"

const defaultMarkdown = `# Markdown to PDF Converter

## Introduction

This is a **professional** Markdown to PDF converter that supports:

- **KaTeX** math rendering: $E = mc^2$
- **Mermaid** diagrams
- **Code highlighting**
- **Table of contents** with page numbers
- **Custom themes** and styling

## Mathematical Expressions

Inline math: $\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$

Block math:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

## Code Example

\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
\`\`\`

## Mermaid Diagram

\`\`\`mermaid
graph TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    D --> B
\`\`\`

## Table Example

| Feature | Supported | Notes |
|---------|-----------|-------|
| KaTeX | ✅ | Math rendering |
| Mermaid | ✅ | Diagrams |
| Code | ✅ | Syntax highlighting |
| TOC | ✅ | Auto-generated |

## Conclusion

This converter provides publication-quality PDF output with professional formatting and advanced features.`

const themes = [
  { id: "default", name: "Default", description: "Clean and professional" },
  { id: "academic", name: "Academic", description: "Formal academic style" },
  { id: "modern", name: "Modern", description: "Contemporary design" },
  { id: "minimal", name: "Minimal", description: "Clean and simple" },
]

const paperSizes = [
  { id: "a4", name: "A4", description: "210 × 297 mm" },
  { id: "letter", name: "Letter", description: "8.5 × 11 in" },
  { id: "legal", name: "Legal", description: "8.5 × 14 in" },
]

import Head from 'next/head'
import Image from 'next/image'

export default function MarkdownToPDF() {
  // 递归覆盖所有子元素样式，彻底移除oklch影响
  function forcePlainColor(element: HTMLElement) {
    if (!element) return;
    element.style.background = '#fff';
    element.style.color = '#222';
    element.style.borderColor = '#ddd';
    element.style.boxShadow = 'none';
    element.style.setProperty('--background', '#fff');
    element.style.setProperty('--foreground', '#222');
    element.style.setProperty('--card', '#fff');
    element.style.setProperty('--card-foreground', '#222');
    element.style.setProperty('--primary', '#222');
    element.style.setProperty('--primary-foreground', '#fff');
    element.style.setProperty('--secondary', '#ddd');
    element.style.setProperty('--secondary-foreground', '#222');
    element.style.setProperty('--muted', '#eee');
    element.style.setProperty('--muted-foreground', '#222');
    element.style.setProperty('--accent', '#eee');
    element.style.setProperty('--accent-foreground', '#222');
    element.style.setProperty('--border', '#ddd');
    element.style.setProperty('--input', '#fff');
    element.style.setProperty('--ring', '#ddd');
    Array.from(element.children).forEach(child => {
      if (child instanceof HTMLElement) {
        forcePlainColor(child);
      }
    });
  }
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [selectedTheme, setSelectedTheme] = useState("default")
  const [selectedPaperSize, setSelectedPaperSize] = useState("a4")
  const [showPreview, setShowPreview] = useState(true)
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && (file.type === "text/markdown" || file.name.endsWith(".md"))) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const content = e.target?.result as string
        setMarkdown(content)
      }
      reader.readAsText(file)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = async () => {
    // 只在浏览器端执行
    if (typeof window === 'undefined') return;
    const html2pdf = (await import('html2pdf.js')).default;
    const previewCard = document.querySelector('.markdown-preview-pdf') as HTMLElement;
    if (!previewCard) return;

    // 纸张规格映射
    const paperSizeMap: Record<string, { format: string; orientation: "portrait" | "landscape" }> = {
      a4: { format: 'a4', orientation: 'portrait' },
      letter: { format: 'letter', orientation: 'portrait' },
      legal: { format: 'legal', orientation: 'portrait' },
    };
    const paper = paperSizeMap[selectedPaperSize] || paperSizeMap.a4;

    // 主题样式映射（可扩展）
    const themeClass = {
      default: 'prose prose-lg',
      academic: 'prose prose-lg prose-academic',
      modern: 'prose prose-lg prose-modern',
      minimal: 'prose prose-lg prose-minimal',
    }[selectedTheme] || 'prose prose-lg';
    previewCard.className = `markdown-preview-pdf ${themeClass} pdf-export-plain`;
    // 递归覆盖所有子元素样式
    forcePlainColor(previewCard);

    // 临时修改katex输出为SVG格式
    const katexElements = previewCard.querySelectorAll('.katex');
    katexElements.forEach(el => {
      try {
        const tex = el.getAttribute('data-tex');
        if (tex) {
          const rendered = katex.renderToString(tex, {
            displayMode: el.classList.contains('katex-display'),
            output: 'htmlAndMathml', // 修改为同时输出HTML和MathML
            throwOnError: false
          });
          el.innerHTML = rendered;
        }
      } catch (e) {
        console.error('KaTeX render error:', e);
      }
    });

    // 添加延迟确保DOM更新完成
    await new Promise(resolve => setTimeout(resolve, 100));

    html2pdf()
      .set({
        margin: 0.5,
        filename: 'document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: true,
          letterRendering: true,
          // 优化分页处理
          onclone: (clonedDoc: Document) => {
            const clonedPreview = clonedDoc.querySelector('.markdown-preview-pdf');
            if (clonedPreview) {
              // 确保内容不会因为分页被切断
              (clonedPreview as HTMLElement).style.breakInside = 'avoid';
              clonedPreview.querySelectorAll('*').forEach((el: Element) => {
                (el as HTMLElement).style.breakInside = 'avoid';
              });
            }
          }
        },
        jsPDF: { 
          unit: 'in', 
          format: paper.format, 
          orientation: paper.orientation,
          // 根据纸张大小调整边距
        },
      })
      .from(previewCard)
      .save()
      .finally(() => {
        // 移除导出专用样式
        previewCard.classList.remove('pdf-export-plain');
        // 恢复原始katex渲染
        katexElements.forEach(el => {
          const tex = el.getAttribute('data-tex');
          if (tex) {
            try {
              const rendered = katex.renderToString(tex, {
                displayMode: el.classList.contains('katex-display'),
                output: 'mathml',
                throwOnError: false
              });
              el.innerHTML = rendered;
            } catch (e) {
              console.error('KaTeX restore error:', e);
            }
          }
        });
      });
  }

  return (
    <>
      <Head>
        <title>Markdown to PDF Converter | Professional Document Export</title>
        <meta name="description" content="Convert Markdown to professional PDF documents with math, code, diagrams, TOC, themes. Publication-quality output for academic and business use." />
        <meta name="keywords" content="Markdown, PDF, converter, KaTeX, Mermaid, code highlighting, table of contents, themes, export, academic, professional" />
        <meta name="author" content="Markdown to PDF Team" />
        <meta property="og:title" content="Markdown to PDF Converter" />
        <meta property="og:description" content="Convert Markdown to professional PDF documents with math, code, diagrams, TOC, themes." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/placeholder-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Markdown to PDF Converter" />
        <meta name="twitter:description" content="Convert Markdown to professional PDF documents with math, code, diagrams, TOC, themes." />
        <meta name="twitter:image" content="/placeholder-logo.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/placeholder-logo.png" />
      </Head>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-card no-print">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image src="/placeholder-logo.png" alt="Markdown to PDF Logo" width={80} height={80} className="rounded" />
                <div>
                  <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Markdown to PDF Converter</h1>
                  <div>
                    <p className="text-base text-muted-foreground">Convert Markdown to publication-quality PDF documents with math, code, diagrams, TOC, and custom themes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

      <div className="container mx-auto px-2 py-4 sm:px-4 sm:py-6">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-6">
          {/* Settings Sidebar */}
          <div className="md:col-span-1 space-y-4 no-print order-2 md:order-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Theme</label>
                  <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {themes.map((theme) => (
                        <SelectItem key={theme.id} value={theme.id}>
                          <div>
                            <div className="font-medium">{theme.name}</div>
                            <div className="text-xs text-muted-foreground">{theme.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Paper Size</label>
                  <Select value={selectedPaperSize} onValueChange={setSelectedPaperSize}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {paperSizes.map((size) => (
                        <SelectItem key={size.id} value={size.id}>
                          <div>
                            <div className="font-medium">{size.name}</div>
                            <div className="text-xs text-muted-foreground">{size.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Table of Contents */}
            <div className="hidden md:block">
              <TableOfContents headings={headings} />
            </div>
          </div>

          {/* Main Content */}
          <div className={showPreview ? "md:col-span-3 flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 order-1 md:order-2" : "md:col-span-3 order-1 md:order-2"}>
            {/* Editor */}
            <div className={showPreview ? "flex flex-col h-[60vh] md:h-[70vh]" : "max-w-4xl mx-auto flex flex-col h-[60vh] md:h-[70vh]"}>
              <Card className="flex-1 h-full no-print overflow-auto">
                <CardHeader>
                  <CardTitle>Markdown Editor</CardTitle>
                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} className="w-full sm:w-auto">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setShowPreview(!showPreview)} className="w-full sm:w-auto">
                      <Eye className="h-4 w-4 mr-2" />
                      {showPreview ? "Hide" : "Show"} Preview
                    </Button>
                    <Button onClick={handleDownloadPDF} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="h-full">
                  <Textarea
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    placeholder="Enter your Markdown content here..."
                    className="h-full min-h-[200px] md:min-h-[300px] font-mono text-sm resize-none"
                    style={{height: '100%', minHeight: '200px'}}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Preview */}
            {showPreview && (
              <div className="flex flex-col h-[60vh] md:h-[70vh] print:col-span-full">
                <Card className="flex-1 h-full overflow-auto">
                  <CardHeader className="no-print">
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5" />
                      Preview
                      <Badge variant="secondary" className="ml-auto">
                        {selectedTheme} theme
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="print:p-0 h-full">
                    {/* PDF导出专用容器，动态应用主题 */}
                    <div className="markdown-preview-pdf prose prose-lg">
                      <MarkdownRenderer content={markdown} theme={selectedTheme} onHeadingsChange={setHeadings} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hidden file input */}
      <input ref={fileInputRef} type="file" accept=".md,.markdown" onChange={handleFileUpload} className="hidden" />
  </div>
  </>
  )
}
