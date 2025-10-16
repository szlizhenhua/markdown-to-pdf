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
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/contexts/language-context"
import { locales } from "@/lib/locales"
import katex from "katex"

import Head from 'next/head'
import Image from 'next/image'

// Theme options
const themes = [
  { id: "default", description: "Clean and professional" },
  { id: "academic", description: "Formal academic style" },
  { id: "modern", description: "Contemporary design" },
  { id: "minimal", description: "Minimalist style" }
]

// Paper size options
const paperSizes = [
  { id: "a4", description: "210 × 297 mm" },
  { id: "letter", description: "8.5 × 11 inches" },
  { id: "legal", description: "8.5 × 14 inches" }
]

// Font size options
const fontSizes = [
  { id: "10", description: "Small text" },
  { id: "11", description: "Compact text" },
  { id: "12", description: "Standard text" },
  { id: "14", description: "Large text" },
  { id: "16", description: "Extra large text" }
]

export default function MarkdownToPDF() {
  const { language, t } = useLanguage()

  // 递归覆盖所有子元素样式，彻底移除oklch影响
  const [markdown, setMarkdown] = useState(t.defaultContent)

  // 确保语言切换时更新默认内容（仅当内容为默认内容时）
  useEffect(() => {
    // 检查当前markdown内容是否是对应语言的默认内容
    const currentEnDefaultContent = locales.en.defaultContent
    const currentZhDefaultContent = locales.zh.defaultContent

    if (markdown === currentEnDefaultContent || markdown === currentZhDefaultContent) {
      // 如果当前是默认内容，则切换到新语言的默认内容
      setMarkdown(t.defaultContent)
    }
  }, [language, t.defaultContent, markdown])
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
      if (!previewCard) {
        throw new Error('找不到预览内容容器');
      }

      // 生成文件名，基于第一行标题或默认（处理中文字符）
      const firstLine = markdown.split('\n')[0]?.replace(/^#+\s*/, '') || 'document';
      // 对文件名进行URL编码处理，避免中文字符问题
      const safeFileName = `${firstLine.trim().replace(/\s+/g, '-').toLowerCase()}`;
      const fileName = language === 'zh'
        ? `document.pdf` // 中文环境下使用默认文件名，避免编码问题
        : `${safeFileName}.pdf`;

      // 获取HTML内容并确保正确编码
      let htmlContent = previewCard.innerHTML;

      // 调试信息：输出HTML内容长度和语言
      //console.log('PDF导出调试信息:');
      //console.log('- 当前语言:', language);
      //console.log('- HTML内容长度:', htmlContent.length);
      //console.log('- 文件名:', fileName);

      // 调用API生成PDF
      const response = await fetch('/api/export-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          htmlContent,
          fileName,
          theme: selectedTheme,
          paperSize: selectedPaperSize,
          fontSize: selectedFontSize,
          language // 添加语言参数
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('服务器响应错误:', errorText);
        throw new Error(`PDF生成失败: ${errorText}`);
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

      //console.log('PDF导出成功');
    } catch (error) {
      console.error('PDF导出错误:', error);
      const errorMessage = error instanceof Error ? error.message : '未知错误';
      alert(`PDF导出失败: ${errorMessage}`);
    }
  }

  const resetToDefault = () => {
    setMarkdown(t.defaultContent)
    setSelectedTheme("default")
    setSelectedPaperSize("a4")
    setSelectedFontSize("12")
  }

  return (
    <>
      <Head>
        <title>{t.seo.title}</title>
        <meta name="description" content={t.seo.description} />
        <meta name="keywords" content={t.seo.keywords} />
        <meta name="author" content="Markdown to PDF Team" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/placeholder-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.seo.description} />
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
              <div className="font-medium">{t.title}</div>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowToc(!showToc)}
                className="text-muted-foreground hover:text-foreground"
                aria-label={t.buttons.tableOfContents}
              >
                <FileText className="h-5 w-5" />
              </Button>
              <Button onClick={handleDownloadPDF} className="cta-button">
                <Download className="h-4 w-4 mr-2" />
                {t.buttons.getPDF}
              </Button>
              {/*<Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSettings(!showSettings)}
                className="text-muted-foreground hover:text-foreground"
                aria-label={t.buttons.settings}
              >
                <Settings className="h-5 w-5" />
              </Button>*/}
            </div>
          </div>

          {/* Settings Popover */}
          {showSettings && (
            <div ref={settingsRef} className="absolute right-4 top-16 z-50 w-64 bg-white shadow-2xl rounded-lg border-2 border-gray-200">
              <div className="p-4 bg-white">
                <h3 className="font-medium mb-3">{t.settings.title}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t.settings.theme}</label>
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
                            <div className="font-medium">{t.themes[theme.id as keyof typeof t.themes]}</div>
                            <div className="text-xs text-muted-foreground">{theme.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">{t.settings.paperSize}</label>
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
                            <div className="font-medium">{t.paperSizes[size.id as keyof typeof t.paperSizes]}</div>
                            <div className="text-xs text-muted-foreground">{size.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">{t.settings.fontSize}</label>
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
                          <div className="font-medium">{(t.fontSizes as any)[size.id]}</div>
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
                <h3 className="font-medium mb-3">{t.toc.title}</h3>
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
                      <span>{t.editor.title}</span>
                      <div className="flex flex-wrap items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full sm:w-auto btn-upload"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          {t.buttons.upload}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowPreview(!showPreview)}
                          className="w-full sm:w-auto btn-toggle"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          {showPreview ? t.buttons.hidePreview : t.buttons.showPreview}
                        </Button>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-full">
                  {isDragging ? (
                    <div className="h-full border-2 border-dashed border-primary rounded-lg flex flex-col items-center justify-center bg-primary/5">
                      <FileUp className="h-12 w-12 text-primary mb-4" />
                      <p className="text-lg font-medium text-primary">{t.editor.dragDropText}</p>
                      <p className="text-muted-foreground">{t.editor.dragDropSubtext}</p>
                    </div>
                  ) : (
                    <Textarea
                      value={markdown}
                      onChange={(e) => setMarkdown(e.target.value)}
                      placeholder={t.editor.placeholder}
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
                      {t.preview.title}
                      <Badge variant="secondary" className="ml-auto">
                        {t.themes[selectedTheme as keyof typeof t.themes]} {t.preview.theme}
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
                        language={language}
                        theme={selectedTheme}
                        paperSizes={selectedPaperSize}
                        fontSizes = {selectedFontSize}
                        t={t}
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