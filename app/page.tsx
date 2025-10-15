"use client"

import type React from "react"

import { useState, useRef, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Upload, Eye, Settings, FileUp } from "lucide-react"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { TableOfContents } from "@/components/table-of-contents"
import katex from "katex"

const defaultMarkdown = `# Markdown to PDF Converter

> 🎯 **Convert your Markdown documents to professional PDFs with math formulas, flowcharts, code highlighting, and multiple themes**

## ✨ Features

### 📊 **Complete Markdown Support**
- **Text Formatting**: **Bold**, *Italic*, ~~Strikethrough~~, \`Inline code\`
- **Heading Levels**: Full H1-H6 heading structure support
- **Lists**: Ordered lists, unordered lists, task lists
- **Links & Images**: Automatic link recognition (Example: [https://markdown-to-pdf.org](https://markdown-to-pdf.org/)), image embedding support
- **Tables**: Support for alignment and complex table structures
- **Quotes**: Block quotes and nested quotes

### 🧮 **Math Formula Rendering (KaTeX)**
**Inline Formula**: Einstein's mass-energy equation $E = mc^2$

**Block Formula**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Complex Formula**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Matrix Representation**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Diagram Drawing (Mermaid)**

#### Flowchart
\`\`\`mermaid
graph TD
    A[Start] --> B{Condition}
    B -->|Yes| C[Execute A]
    B -->|No| D[Execute B]
    C --> E[End]
    D --> E
\`\`\`

#### Graph Diagram
\`\`\`mermaid
graph LR
    A[User] --> B[System]
    B --> A[Response]
\`\`\`

### 💻 **Code Highlighting**

#### JavaScript Example
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Usage example
console.log(fibonacci(10)); // Output: 55
\`\`\`

#### Python Example
\`\`\`python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
\`\`\`

#### JSON Example
\`\`\`json
{
  "name": "Markdown to PDF",
  "version": "1.0.0",
  "features": [
    "Math rendering",
    "Code highlighting",
    "Diagram support"
  ]
}
\`\`\`

### 📋 **Table Features**

| Feature | Status | Description | Shortcut |
|---------|--------|-------------|----------|
| Math Formulas | ✅ | Full KaTeX support | \`$...\$ |
| Flowcharts | ✅ | Mermaid diagrams | \`mermaid |
| Code Highlighting | ✅ | Multi-language support | \`lang |
| Tables | ✅ | Complete table functionality | \| \| \| |
| Links | ✅ | Automatic link recognition | [text](url) |

### 🎨 **Theme Styles**
- **Default**: Clean and professional default theme
- **Academic**: Formal style suitable for academic papers
- **Modern**: Contemporary design style
- **Minimal**: Minimalist design

### 📄 **Page Settings**
- **Paper Sizes**: A4, Letter, Legal
- **Font Sizes**: Adjustable from 10pt to 16pt
- **Auto Pagination**: Smart content split to avoid truncation

---

## 📖 User Guide

### 🚀 **Quick Start**

1. **Edit Content**
   - Type or paste Markdown content in the left editor
   - Real-time preview with WYSIWYG

2. **Upload Files**
   - Click "Upload" button to select .md or .txt files
   - Or drag and drop files directly into the editor area

3. **Customize Styles**
   - Choose theme style (Default/Academic/Modern/Minimal)
   - Adjust paper size and font size
   - Real-time preview of effects

4. **Export PDF**
   - Click "Get PDF" button
   - Automatically download generated PDF document
   - Filename auto-generated based on document title

### ⌨️ **Markdown Syntax Cheat Sheet**

#### Basic Syntax
\`\`\`markdown
# Level 1 Heading
## Level 2 Heading
### Level 3 Heading

**Bold text** or __Bold text__
*Italic text* or _Italic text__
~~Strikethrough~~

- Unordered list item
  - Nested list item

1. Ordered list item
2. Second item
   1. Nested ordered item

> Quote text
>> Nested quote

[Link text](https://example.com)
![Image description](image.jpg)

\`Inline code\`

\`\`\`language
Code block
\`\`\`
\`\`\`

#### Extended Syntax
\`\`\`markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Content 1 | Content 2 | Content 3 |

Task lists:
- [x] Completed task
- [ ] Pending task

Footnotes:
Here is a footnote[^1]
[^1]: Footnote content

Inline formula: $x = y + z$

Block formula:
$$\\frac{d}{dx}x^n = nx^{n-1}$$

Mermaid diagram:
\`\`\`mermaid
graph LR
    A-->B
\`\`\`
\`\`\`

### 💡 **Usage Tips**

1. **Math Formulas**
   - Use \`$...\` to wrap inline formulas
   - Use \`$$...$$\` to wrap block formulas
   - Full LaTeX math syntax supported

2. **Code Blocks**
   - Specify language for syntax highlighting: \`\`\`javascript
   - Supported languages: JavaScript, Python, JSON, Bash, etc.

3. **Diagram Drawing**
   - Use Mermaid syntax to create flowcharts, graphs, etc.
   - Support for multiple diagram types: graph, flowchart, etc.

4. **Table Formatting**
   - Use \`|\` to separate columns
   - Use \`-\` to separate headers and content
   - Support for alignment: \`:---\` (left), \`---:\` (right), \`:---:\` (center)

---

## ❓ Frequently Asked Questions (FAQ)

### Q1: What Markdown syntax is supported?
**A**: This tool supports standard Markdown syntax and GitHub Flavored Markdown (GFM) extensions, including tables, task lists, strikethrough, etc. It also supports math formulas (KaTeX) and diagram drawing (Mermaid).

### Q2: What to do if math formulas don't display?
**A**: Please ensure you use the correct syntax:
- Inline formulas: \`$formula$\`
- Block formulas: \`$$formula$$\`
If still not displaying, please check if the formula syntax is correct.

### Q3: Can I customize styles?
**A**: Yes, we provide four preset themes:
- **Default**: Clean and professional
- **Academic**: Academic style
- **Modern**: Modern design
- **Minimal**: Minimalist style

You can also adjust paper sizes (A4/Letter/Legal) and font sizes (10-16pt).

### Q4: How is the quality of exported PDFs?
**A**: We use professional PDF generation engines to ensure output quality:
- High-definition vector graphics
- Clear text rendering
- Correct page pagination
- Maintain original formatting

### Q5: Is my data secure?
**A**: Completely secure! All processing is done locally in your browser:
- No data uploaded to any server
- No storage of your document content
- Data automatically cleared after processing

### Q6: Which browsers are supported?
**A**: Supports all modern browsers:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### Q7: How to handle large documents?
**A**: For large documents, we recommend:
- Process in sections
- Adjust font size appropriately
- Use page breaks for reasonable segmentation
- Preview to confirm effects before export

### Q8: What is the exported PDF filename?
**A**: Filename is auto-generated based on the first line title of the document, for example:
- Title "Project Report" → "Project Report.pdf"
- Use "document.pdf" when no title

---

## 📞 Technical Support

### 🔧 **Tech Stack**
- **Next.js** - React framework
- **Tailwind CSS** - Styling framework
- **Marked** - Markdown parser
- **KaTeX** - Math formula rendering
- **Mermaid** - Diagram drawing
- **html2pdf.js** - PDF generation
- **Highlight.js** - Code highlighting

### 📧 **Contact Us**
For questions or suggestions, please contact us through:
- GitHub Issues: Report issues or request features
- Email feedback: support@markdown-to-pdf.org

### 🔄 **Changelog**
- **v1.0.0** - Initial release
- KaTeX math formula support
- Mermaid diagram support
- Multiple theme style selection
- Responsive design optimization

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Markdown to PDF Converter</strong></p>
  <p>Professional Markdown to PDF Conversion Tool</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Made with ❤️ | Open Source | Privacy First
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2024 Markdown to PDF. All rights reserved.
  </p>
</div>`

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

const fontSizes = [
  { id: "10", name: "10pt" },
  { id: "11", name: "11pt" },
  { id: "12", name: "12pt" },
  { id: "14", name: "14pt" },
  { id: "16", name: "16pt" },
]

import Head from 'next/head'
import Image from 'next/image'

export default function MarkdownToPDF() {
  // 递归覆盖所有子元素样式，彻底移除oklch影响
  const [markdown, setMarkdown] = useState(defaultMarkdown)
  const [selectedTheme, setSelectedTheme] = useState("default")
  const [selectedPaperSize, setSelectedPaperSize] = useState("a4")
  const [selectedFontSize, setSelectedFontSize] = useState("12")
  const [showPreview, setShowPreview] = useState(true)
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([])
  const [isDragging, setIsDragging] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [showToc, setShowToc] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dropRef = useRef<HTMLDivElement>(null)
  const settingsRef = useRef<HTMLDivElement>(null)
  const tocRef = useRef<HTMLDivElement>(null)

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const settingsButton = document.querySelector('button[aria-label="Settings"]')
      const tocButton = document.querySelector('button[aria-label="Table of Contents"]')

      if (showSettings && settingsRef.current && !settingsRef.current.contains(event.target as Node) && 
          !(event.target === settingsButton || settingsButton?.contains(event.target as Node))) {
        setShowSettings(false)
      }
      
      if (showToc && tocRef.current && !tocRef.current.contains(event.target as Node) && 
          !(event.target === tocButton || tocButton?.contains(event.target as Node))) {
        setShowToc(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showSettings, showToc])

  // 处理文件拖拽事件
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      const file = files[0]
      if (file && (file.type === "text/markdown" || file.name.endsWith(".md") || file.type === "text/plain")) {
        const reader = new FileReader()
        reader.onload = (e) => {
          const content = e.target?.result as string
          setMarkdown(content)
        }
        reader.readAsText(file)
      }
    }
  }, [])

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && (file.type === "text/markdown" || file.name.endsWith(".md") || file.type === "text/plain")) {
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
    try {
      const previewCard = document.querySelector('.markdown-preview-pdf') as HTMLElement;
      if (!previewCard) return;

      // 生成文件名，基于第一行标题或默认
      const firstLine = markdown.split('\n')[0]?.replace(/^#+\s*/, '') || 'document';
      const fileName = `${firstLine.trim().replace(/\s+/g, '-').toLowerCase()}.pdf`;

      // 调用API生成PDF
      const response = await fetch('/api/export-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          htmlContent: previewCard.innerHTML,
          fileName,
          theme: selectedTheme,
          paperSize: selectedPaperSize,
          fontSize: selectedFontSize
        }),
      });

      if (!response.ok) {
        throw new Error('PDF生成失败');
      }

      // 创建下载链接
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('PDF导出错误:', error);
      alert('PDF导出失败，请检查控制台查看详情');
    }
  }

  const resetToDefault = () => {
    setMarkdown(defaultMarkdown)
    setSelectedTheme("default")
    setSelectedPaperSize("a4")
    setSelectedFontSize("12")
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
        {/* Top header with controls */}
        <header className="border-b bg-card no-print relative">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/placeholder-logo.png" alt="logo" width={40} height={40} className="rounded" />
              <div className="font-medium">Markdown → PDF</div>
            </div>
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowToc(!showToc)}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Table of Contents"
              >
                <FileText className="h-5 w-5" />
              </Button>
              <Button onClick={handleDownloadPDF} className="cta-button">
                <Download className="h-4 w-4 mr-2" />
                Get PDF
              </Button>
              {/*<Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowSettings(!showSettings)}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Settings"
              >
                <Settings className="h-5 w-5" />
              </Button>*/}
            </div>
          </div>

          {/* Settings Popover */}
          {showSettings && (
            <div ref={settingsRef} className="absolute right-4 top-16 z-50 w-64 bg-white shadow-2xl rounded-lg border-2 border-gray-200">
              <div className="p-4 bg-white">
                <h3 className="font-medium mb-3">Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Theme</label>
                    <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    <SelectContent className="bg-white">
                      {themes.map((theme) => (
                        <SelectItem 
                          key={theme.id} 
                          value={theme.id}
                          className="hover:bg-gray-100 active:bg-gray-200 transition-colors"
                        >
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
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    <SelectContent className="bg-white">
                      {paperSizes.map((size) => (
                        <SelectItem 
                          key={size.id} 
                          value={size.id}
                          className="hover:bg-gray-100 active:bg-gray-200 transition-colors"
                        >
                          <div>
                            <div className="font-medium">{size.name}</div>
                            <div className="text-xs text-muted-foreground">{size.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Font Size</label>
                    <Select value={selectedFontSize} onValueChange={setSelectedFontSize}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    <SelectContent className="bg-white">
                      {fontSizes.map((size) => (
                        <SelectItem 
                          key={size.id} 
                          value={size.id}
                          className="hover:bg-gray-100 active:bg-gray-200 transition-colors"
                        >
                          <div className="font-medium">{size.name}</div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Table of Contents Popover */}
          {showToc && (
            <div ref={tocRef} className="absolute right-24 top-16 z-50 w-64 bg-white shadow-2xl rounded-lg border-2 border-gray-200 max-h-[70vh] overflow-auto">
              <div className="p-4 bg-white">
                <h3 className="font-medium mb-3">Table of Contents</h3>
                <div className="space-y-1">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="block px-3 py-1.5 rounded hover:bg-gray-100 active:bg-gray-200 transition-colors"
                      onClick={() => setShowToc(false)}
                    >
                      <div 
                        className="text-sm"
                        style={{ marginLeft: `${(heading.level - 2) * 0.75}rem` }}
                      >
                        {heading.text}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </header>

      <div className="container mx-auto px-2 py-4 sm:px-4 sm:py-6">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Main Content */}
          <div className={showPreview ? "md:col-span-3 flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6 order-1 md:order-2" : "md:col-span-3 order-1 md:order-2"}>
            {/* Editor */}
            <div className={showPreview ? "flex flex-col h-[60vh] md:h-[70vh]" : "max-w-4xl mx-auto flex flex-col h-[60vh] md:h-[70vh]"}>
              <Card 
                className="flex-1 h-full no-print overflow-auto card-editor"
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                ref={dropRef}
              >
                <CardHeader>
                  <CardTitle>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span>Markdown Editor</span>
                      <div className="flex flex-wrap items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => fileInputRef.current?.click()} 
                          className="w-full sm:w-auto btn-upload"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => setShowPreview(!showPreview)} 
                          className="w-full sm:w-auto btn-toggle"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          {showPreview ? "Hide" : "Show"} Preview
                        </Button>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-full">
                  {isDragging ? (
                    <div className="h-full border-2 border-dashed border-primary rounded-lg flex flex-col items-center justify-center bg-primary/5">
                      <FileUp className="h-12 w-12 text-primary mb-4" />
                      <p className="text-lg font-medium text-primary">Drop your Markdown file here</p>
                      <p className="text-muted-foreground">Supports .md and .txt files</p>
                    </div>
                  ) : (
                    <Textarea
                      value={markdown}
                      onChange={(e) => setMarkdown(e.target.value)}
                      placeholder="Enter your Markdown content here..."
                      className="h-full min-h-[200px] md:min-h-[300px] font-mono text-sm resize-none"
                      style={{height: '100%', minHeight: '200px'}}
                    />
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Preview */}
            {showPreview && (
              <div className="flex flex-col h-[60vh] md:h-[70vh] print:col-span-full">
                <Card className="flex-1 h-full overflow-auto card-editor">
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
                    <div 
                      className="markdown-preview-pdf prose prose-lg"
                      style={{ fontSize: `${selectedFontSize}pt` }}
                    >
                      <MarkdownRenderer 
                        content={markdown} 
                        theme={selectedTheme} 
                        paperSizes={selectedPaperSize} 
                        fontSizes = {selectedFontSize}
                        onHeadingsChange={setHeadings} 
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hidden file input */}
      <input ref={fileInputRef} type="file" accept=".md,.txt,text/markdown,text/plain" onChange={handleFileUpload} className="hidden" />
    </div>
  </>
  )
}