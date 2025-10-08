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

export default function MarkdownToPDF() {
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

  const handleDownloadPDF = () => {
    // Trigger browser's print dialog which can save as PDF
    window.print()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card no-print">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Markdown to PDF</h1>
                <p className="text-sm text-muted-foreground">Professional document converter</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
              <Button variant="outline" size="sm" onClick={() => setShowPreview(!showPreview)}>
                <Eye className="h-4 w-4 mr-2" />
                {showPreview ? "Hide" : "Show"} Preview
              </Button>
              <Button onClick={handleDownloadPDF} className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Settings Sidebar */}
          <div className="lg:col-span-1 space-y-4 no-print">
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
            <TableOfContents headings={headings} />
          </div>

          {/* Main Content */}
          <div className={showPreview ? "md:col-span-3 grid grid-cols-1 grid-cols-2 gap-6" : "md:col-span-3"}>
            {/* Editor */}
            <div className={showPreview ? "flex flex-col h-[70vh]" : "max-w-4xl mx-auto flex flex-col h-[70vh]"}>
              <Card className="flex-1 h-full no-print overflow-auto">
                <CardHeader>
                  <CardTitle>Markdown Editor</CardTitle>
                </CardHeader>
                <CardContent className="h-full">
                  <Textarea
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    placeholder="Enter your Markdown content here..."
                    className="h-full min-h-[300px] font-mono text-sm resize-none"
                    style={{height: '100%', minHeight: '300px'}}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Preview */}
            {showPreview && (
              <div className="flex flex-col h-[70vh] print:col-span-full">
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
                    <MarkdownRenderer content={markdown} theme={selectedTheme} onHeadingsChange={setHeadings} />
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
  )
}
