"use client"

import type React from "react"

import { useState, useRef, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { MarkdownRenderer } from "@/components/markdown-renderer"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { HelpDialog } from "@/components/help-dialog"
import { TemplateSelector } from "@/components/template-selector"
import { EditorStats } from "@/components/editor-stats"
import { RecentFiles } from "@/components/recent-files"
import { AutoSaveIndicator, type SaveStatus } from "@/components/auto-save-indicator"
import { FullscreenToggle } from "@/components/fullscreen-toggle"
import { MarkdownToolbar } from "@/components/markdown-toolbar"
import { FindReplace } from "@/components/find-replace"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PrintPreview } from "@/components/print-preview"
import { SplitViewToggle } from "@/components/split-view-toggle"
import { ZoomControl } from "@/components/zoom-control"
import { useLanguage } from "@/lib/contexts/language-context"
import { useToast } from "@/lib/hooks/use-toast"
import { useRecentFiles } from "@/lib/hooks/use-recent-files"
import { useEditorHistory } from "@/lib/hooks/use-editor-history"
import { useSyncScroll } from "@/lib/hooks/use-sync-scroll"
import type { LocaleTranslations } from "@/lib/locales/types"
import { locales } from "@/lib/locales"

import Head from 'next/head'
import Image from 'next/image'
import { Settings, Download, Loader2, Upload, Eye, FileText, FileUp, Code, File, FileEdit } from 'lucide-react'

// Constants
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_FILE_EXTENSIONS = ['.md', '.txt', '.markdown']
const ALLOWED_MIME_TYPES = ['text/markdown', 'text/plain', 'text/x-markdown']

// Helper function to validate file
const validateFile = (file: File, t: LocaleTranslations): { valid: boolean; error?: string } => {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: t.messages.fileTooLarge
    }
  }

  // Check file extension
  const hasValidExtension = ALLOWED_FILE_EXTENSIONS.some(ext =>
    file.name.toLowerCase().endsWith(ext)
  )

  // Check MIME type
  const hasValidMimeType = ALLOWED_MIME_TYPES.includes(file.type)

  if (!hasValidExtension && !hasValidMimeType) {
    return {
      valid: false,
      error: t.messages.invalidFileType
    }
  }

  return { valid: true }
}

// Helper function to read file content
const readFileContent = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      resolve(content)
    }
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsText(file)
  })
}

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
  const { addToast } = useToast()
  const { addRecentFile } = useRecentFiles()
  const { pushState, undo, redo, canUndo, canRedo } = useEditorHistory()

  // 递归覆盖所有子元素样式，彻底移除oklch影响
  const [markdown, setMarkdown] = useState(t.defaultContent)
  const [debouncedMarkdown, setDebouncedMarkdown] = useState(t.defaultContent)

  // Debounce markdown input to prevent excessive re-renders (300ms delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedMarkdown(markdown)
    }, 300)
    return () => clearTimeout(timer)
  }, [markdown])

  // 确保语言切换时更新默认内容（仅当内容为默认内容时）
  useEffect(() => {
    // 检查当前markdown内容是否是对应语言的默认内容
    const currentEnDefaultContent = locales.en.defaultContent
    const currentZhCnDefaultContent = locales['zh-cn'].defaultContent
    const currentZhTwDefaultContent = locales['zh-tw'].defaultContent

    if (
      markdown === currentEnDefaultContent ||
      markdown === currentZhCnDefaultContent ||
      markdown === currentZhTwDefaultContent
    ) {
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
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [editorFontSize, setEditorFontSize] = useState(14)
  const [previewFontSize, setPreviewFontSize] = useState(16)
  const [autosaveInterval, setAutosaveInterval] = useState(500)
  const [isVerticalView, setIsVerticalView] = useState(false)
  const [previewZoom, setPreviewZoom] = useState(100)
  const [previewLineHeight, setPreviewLineHeight] = useState(1.6)
  const [previewFontFamily, setPreviewFontFamily] = useState('system-ui')
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('saved')
  const [lastSaved, setLastSaved] = useState<Date>()
  const [cursorPosition, setCursorPosition] = useState<number>()
  const [wordWrap, setWordWrap] = useState(true)
  const [showFindReplace, setShowFindReplace] = useState(false)
  const [prevMarkdownLength, setPrevMarkdownLength] = useState(0)
  const isChinese = language === 'zh-cn' || language === 'zh-tw'
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dropRef = useRef<HTMLDivElement>(null)
  const settingsRef = useRef<HTMLDivElement>(null)
  const tocRef = useRef<HTMLDivElement>(null)
  const editorRef = useRef<HTMLTextAreaElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  useSyncScroll(
    editorRef,
    previewRef,
    { enabled: showPreview, syncToPreview: true, syncToEditor: false }
  )

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  // Auto-save markdown content to localStorage
  useEffect(() => {
    if (!isLoaded) return

    // Push to history when content changes significantly
    if (markdown.length !== prevMarkdownLength && Math.abs(markdown.length - prevMarkdownLength) > 0) {
      pushState(markdown, cursorPosition)
      setPrevMarkdownLength(markdown.length)
    }

    setSaveStatus('unsaved')
    const timer = setTimeout(() => {
      setSaveStatus('saving')
      try {
        localStorage.setItem('markdown-content', markdown)
        setSaveStatus('saved')
        setLastSaved(new Date())
      } catch (error) {
        // Handle quota exceeded error
        if (error instanceof Error && error.name === 'QuotaExceededError') {
          addToast({
            type: 'warning',
            title: t.messages.quotaExceeded,
            message: t.messages.autoSaveFailed
          })
        } else {
          console.error('Failed to save content:', error)
        }
        setSaveStatus('error')
      }
    }, autosaveInterval) // Dynamic autosave interval

    return () => clearTimeout(timer)
  }, [markdown, isLoaded, t, addToast, cursorPosition, prevMarkdownLength, pushState, autosaveInterval])

  // Load saved content on mount
  useEffect(() => {
    try {
      const savedContent = localStorage.getItem('markdown-content')
      if (savedContent && savedContent !== t.defaultContent) {
        setMarkdown(savedContent)
      }
    } catch (error) {
      console.error('Failed to load content:', error)
    }
    setIsLoaded(true)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + S: Save/Export PDF
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault()
        if (!isGeneratingPDF) {
          handleDownloadPDF()
        }
      }

      // Ctrl/Cmd + P: Print/Preview toggle
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault()
        setShowPreview(!showPreview)
      }

      // Ctrl/Cmd + Z: Undo
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault()
        handleUndo()
      }

      // Ctrl/Cmd + Shift + Z or Ctrl/Cmd + Y: Redo
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        e.preventDefault()
        handleRedo()
      }

      // Escape: Close popovers
      if (e.key === 'Escape') {
        if (showSettings) setShowSettings(false)
        if (showToc) setShowToc(false)
        if (showFindReplace) setShowFindReplace(false)
      }

      // Ctrl/Cmd + /: Focus editor
      if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault()
        editorRef.current?.focus()
      }

      // Ctrl/Cmd + F: Open find
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault()
        setShowFindReplace(!showFindReplace)
        if (!showFindReplace) {
          setTimeout(() => editorRef.current?.focus(), 0)
        }
      }

      // Ctrl/Cmd + H: Open find with replace
      if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault()
        setShowFindReplace(true)
      }

      // Ctrl/Cmd + Shift + S: Open settings
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'S') {
        e.preventDefault()
        setShowSettings(!showSettings)
      }

      // Ctrl/Cmd + Shift + T: Toggle TOC
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault()
        setShowToc(!showToc)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showSettings, showToc, showPreview, showFindReplace, isGeneratingPDF]) // eslint-disable-line react-hooks/exhaustive-deps

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

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      const file = files[0]
      const validation = validateFile(file, t)

      if (!validation.valid) {
        addToast({ type: 'error', title: t.messages.fileUploadFailed, message: validation.error })
        return
      }

      try {
        const content = await readFileContent(file)
        setMarkdown(content)
        addRecentFile(file.name, content)
        addToast({ type: 'success', title: t.messages.fileUploaded, message: file.name })
      } catch (error) {
        addToast({ type: 'error', title: t.messages.fileUploadFailed, message: t.messages.unknownError })
        console.error('File read error:', error)
      }
    }
  }, [t, addToast, addRecentFile])

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const validation = validateFile(file, t)

    if (!validation.valid) {
      addToast({ type: 'error', title: t.messages.fileUploadFailed, message: validation.error })
      // Reset file input
      event.target.value = ''
      return
    }

    try {
      const content = await readFileContent(file)
      setMarkdown(content)
      addRecentFile(file.name, content)
      addToast({ type: 'success', title: t.messages.fileUploaded, message: file.name })
    } catch (error) {
      addToast({ type: 'error', title: t.messages.fileUploadFailed, message: t.messages.unknownError })
      console.error('File read error:', error)
      // Reset file input
      event.target.value = ''
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true)
    try {
      const previewCard = document.querySelector('.markdown-preview-pdf') as HTMLElement;
      if (!previewCard) {
        throw new Error('找不到预览内容容器');
      }

      // 生成文件名，基于第一行标题或默认
      const firstLine = markdown.split('\n')[0]?.replace(/^#+\s*/, '') || 'document';
      const safeBaseName = firstLine
        .trim()
        .replace(/[\\/:*?"<>|]/g, '-')
        .replace(/\s+/g, '-')
        .replace(/-{2,}/g, '-')
        .replace(/^-+|-+$/g, '') || 'document'
      const fileName = `${safeBaseName}.pdf`;

      // 获取HTML内容并确保正确编码
      const htmlContent = previewCard.innerHTML;

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
        throw new Error(`PDF生成失败 (${response.status}): ${errorText}`);
      }

      // 检查响应类型
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        // 如果返回的是JSON，说明需要使用浏览器打印
        const result = await response.json();
        console.log('API返回JSON响应:', result);

        if (result.useBrowserPrint) {
          console.log('使用浏览器打印功能');
          handlePrint();
          return;
        }

        // 如果不是useBrowserPrint，则抛出错误
        throw new Error(result.error || 'PDF生成失败');
      }

      // 如果返回的是PDF文件
      const blob = await response.blob();

      // 检查blob类型
      if (blob.type !== 'application/pdf') {
        // 如果不是PDF类型，尝试读取为文本查看错误信息
        const text = await blob.text();
        console.error('收到非PDF响应:', text);
        throw new Error('服务器返回了无效的PDF文件');
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;

      // Safely append and click the download link
      try {
        document.body.appendChild(a);
        a.click();
      } finally {
        // Always clean up, even if click fails
        if (document.body.contains(a)) {
          document.body.removeChild(a);
        }
        window.URL.revokeObjectURL(url);
      }

      console.log('PDF导出成功');
      addToast({ type: 'success', title: 'PDF exported', message: fileName })
    } catch (error) {
      console.error('PDF导出错误:', error);
      let errorMessage = t.messages.unknownError;
      if (error instanceof Error) {
        if (error.message.includes('fetch') || error.message.includes('network')) {
          errorMessage = t.messages.networkError;
        } else {
          errorMessage = error.message;
        }
      }
      addToast({ type: 'error', title: t.messages.pdfGenerationError, message: errorMessage })
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  const resetToDefault = () => {
    // Clear saved content from localStorage
    try {
      localStorage.removeItem('markdown-content')
    } catch (error) {
      console.error('Failed to clear saved content:', error)
    }

    setMarkdown(t.defaultContent)
    setSelectedTheme("default")
    setSelectedPaperSize("a4")
    setSelectedFontSize("12")
    setShowPreview(true)

    addToast({
      type: 'success',
      title: t.messages.resetComplete,
      message: t.messages.resetCompleteMessage
    })
  }

  const handleSelectTemplate = (content: string) => {
    setMarkdown(content)
    addToast({
      type: 'success',
      title: t.messages.templateLoaded,
      message: t.messages.templateLoadedMessage
    })
  }

  const handleExportHTML = () => {
    try {
      // Get the preview HTML
      const previewCard = document.querySelector('.markdown-preview-pdf') as HTMLElement
      if (!previewCard) {
        throw new Error('Preview not found')
      }

      // Generate filename
      const firstLine = markdown.split('\n')[0]?.replace(/^#+\s*/, '') || 'document'
      const fileName = isChinese
        ? 'document.html'
        : `${firstLine.trim().replace(/\s+/g, '-').toLowerCase()}.html`

      // Create full HTML document
      const htmlContent = `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${firstLine}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans SC', sans-serif;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      color: #333;
    }
    pre {
      background: #f4f4f4;
      padding: 1rem;
      border-radius: 4px;
      overflow-x: auto;
    }
    code {
      background: #f4f4f4;
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
    }
    blockquote {
      border-left: 4px solid #54c18a;
      padding-left: 1rem;
      margin-left: 0;
      color: #666;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1rem 0;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px 12px;
    }
    th {
      background: #f6f8fa;
      font-weight: 600;
    }
  </style>
</head>
<body>
${previewCard.innerHTML}
</body>
</html>`

      // Create and download file
      const blob = new Blob([htmlContent], { type: 'text/html' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)

      addToast({
        type: 'success',
        title: 'HTML exported',
        message: fileName
      })
    } catch (error) {
      console.error('HTML export error:', error)
      addToast({
        type: 'error',
        title: 'HTML export failed',
        message: error instanceof Error ? error.message : t.messages.unknownError
      })
    }
  }

  const handleExportMarkdown = () => {
    try {
      // Generate filename from first heading
      const firstLine = markdown.split('\n')[0]?.replace(/^#+\s*/, '') || 'document'
      const fileName = isChinese
        ? 'document.md'
        : `${firstLine.trim().replace(/\s+/g, '-').toLowerCase()}.md`

      // Create and download markdown file
      const blob = new Blob([markdown], { type: 'text/markdown' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)

      addToast({
        type: 'success',
        title: 'Markdown exported',
        message: fileName
      })
    } catch (error) {
      console.error('Markdown export error:', error)
      addToast({
        type: 'error',
        title: 'Markdown export failed',
        message: error instanceof Error ? error.message : t.messages.unknownError
      })
    }
  }

  const handleExportTXT = () => {
    try {
      // Convert markdown to plain text by removing markdown syntax
      const plainText = markdown
        // Remove headers
        .replace(/^#{1,6}\s+/gm, '')
        // Remove bold/italic
        .replace(/\*\*\*/g, '')
        .replace(/\*\*/g, '')
        .replace(/\*/g, '')
        // Remove strikethrough
        .replace(/~~/g, '')
        // Remove inline code
        .replace(/`([^`]+)`/g, '$1')
        // Remove code blocks
        .replace(/```[\s\S]*?```/g, (match) => {
          return match.replace(/```\w*\n?/g, '').replace(/```/g, '')
        })
        // Remove links but keep text
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        // Remove images
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
        // Remove blockquotes
        .replace(/^>\s+/gm, '')
        // Remove horizontal rules
        .replace(/^[-*_]{3,}\s*$/gm, '')
        // Clean up multiple empty lines
        .replace(/\n{3,}/g, '\n\n')

      // Generate filename
      const firstLine = markdown.split('\n')[0]?.replace(/^#+\s*/, '') || 'document'
      const fileName = isChinese
        ? 'document.txt'
        : `${firstLine.trim().replace(/\s+/g, '-').toLowerCase()}.txt`

      // Create and download text file
      const blob = new Blob([plainText], { type: 'text/plain' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)

      addToast({
        type: 'success',
        title: 'Text exported',
        message: fileName
      })
    } catch (error) {
      console.error('Text export error:', error)
      addToast({
        type: 'error',
        title: 'Text export failed',
        message: error instanceof Error ? error.message : t.messages.unknownError
      })
    }
  }

  const insertAtCursor = (text: string) => {
    const textarea = editorRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const currentValue = markdown

    const newValue =
      currentValue.substring(0, start) + text + currentValue.substring(end)

    setMarkdown(newValue)

    // Set cursor position after the inserted text
    setTimeout(() => {
      const newPosition = start + text.length
      textarea.setSelectionRange(newPosition, newPosition)
      textarea.focus()
    }, 0)
  }

  const handleUndo = () => {
    const state = undo()
    if (state) {
      setMarkdown(state.content)
      if (state.cursorPosition !== undefined && editorRef.current) {
        editorRef.current.setSelectionRange(state.cursorPosition, state.cursorPosition)
        editorRef.current.focus()
      }
    }
  }

  const handleRedo = () => {
    const state = redo()
    if (state) {
      setMarkdown(state.content)
      if (state.cursorPosition !== undefined && editorRef.current) {
        editorRef.current.setSelectionRange(state.cursorPosition, state.cursorPosition)
        editorRef.current.focus()
      }
    }
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
      {/* Skip links for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>
      <a
        href="#editor"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-64 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
      >
        Skip to editor
      </a>
      <div className="min-h-screen bg-background" id="main-content">
        {/* Top header with controls */}
        <header className="border-b bg-card no-print relative">
          <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <Image
                  src="/placeholder-logo.png"
                  alt="logo"
                  width={32}
                  height={32}
                  className="rounded flex-shrink-0 sm:w-10 sm:h-10"
                />
                <div className="font-medium text-sm sm:text-base truncate hidden sm:block">
                  {t.title}
                </div>
                {/* Mobile logo-only fallback */}
                <div className="font-medium text-sm sm:hidden">
                  MD→PDF
                </div>
              </div>

              {/* Desktop controls */}
              <div className="hidden sm:flex items-center gap-2 sm:gap-4">
                <LanguageSwitcher />
                <ThemeToggle />
                <TemplateSelector onSelectTemplate={handleSelectTemplate} />
                <HelpDialog />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSettings(!showSettings)}
                  className="text-muted-foreground hover:text-foreground relative group"
                  aria-label={t.buttons.settings}
                  aria-expanded={showSettings}
                  title="Ctrl/Cmd + Shift + S"
                >
                  <Settings className="h-5 w-5" />
                  <kbd className="hidden lg:inline-block absolute -bottom-1 left-1/2 -translate-x-1/2 px-1 py-0.5 text-[10px] bg-muted rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">⌘⇧S</kbd>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowToc(!showToc)}
                  className="text-muted-foreground hover:text-foreground relative group"
                  aria-label={t.buttons.tableOfContents}
                  aria-expanded={showToc}
                  title="Ctrl/Cmd + Shift + T"
                >
                  <FileText className="h-5 w-5" />
                  <kbd className="hidden lg:inline-block absolute -bottom-1 left-1/2 -translate-x-1/2 px-1 py-0.5 text-[10px] bg-muted rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">⌘⇧T</kbd>
                </Button>
                <Button
                  onClick={handleDownloadPDF}
                  className="cta-button text-sm sm:text-base relative group"
                  disabled={isGeneratingPDF}
                  aria-label={isGeneratingPDF ? t.buttons.generatingPDF : t.buttons.getPDF}
                  title="Ctrl/Cmd + S"
                >
                  {isGeneratingPDF ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      <span className="hidden sm:inline">{t.buttons.generatingPDF}</span>
                      <span className="sm:hidden">生成中...</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">{t.buttons.getPDF}</span>
                      <span className="sm:hidden">PDF</span>
                      <kbd className="hidden lg:inline-block ml-2 px-1.5 py-0.5 text-xs bg-muted-foreground/20 rounded">⌘S</kbd>
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleExportHTML}
                  className="touch-manipulation hidden sm:flex"
                  aria-label={t.buttons.exportHTML}
                >
                  <Code className="h-4 w-4 mr-2" />
                  <span>{t.buttons.exportHTML}</span>
                </Button>
              </div>

              {/* Mobile controls */}
              <div className="flex sm:hidden items-center gap-1">
                <LanguageSwitcher />
                <ThemeToggle />
                <TemplateSelector onSelectTemplate={handleSelectTemplate} />
                <HelpDialog />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(!showSettings)}
                  className="text-muted-foreground hover:text-foreground p-2 min-h-[44px] min-w-[44px] touch-manipulation active:scale-95 transition-transform"
                  aria-label={t.buttons.settings}
                  aria-expanded={showSettings}
                  type="button"
                >
                  <Settings className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowToc(!showToc)}
                  className="text-muted-foreground hover:text-foreground p-2 min-h-[44px] min-w-[44px] touch-manipulation active:scale-95 transition-transform"
                  aria-label={t.buttons.tableOfContents}
                  aria-expanded={showToc}
                  type="button"
                >
                  <FileText className="h-4 w-4" />
                </Button>
                <Button
                  onClick={handleDownloadPDF}
                  className="cta-button text-xs px-3 py-2 min-w-[64px] min-h-[44px] touch-manipulation active:scale-95 transition-transform"
                  size="sm"
                  disabled={isGeneratingPDF}
                  aria-label={isGeneratingPDF ? t.buttons.generatingPDF : t.buttons.getPDF}
                >
                  {isGeneratingPDF ? (
                    <>
                      <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                      PDF
                    </>
                  ) : (
                    <>
                      <Download className="h-3 w-3 mr-1" />
                      PDF
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleExportHTML}
                  className="text-xs px-3 py-2 min-h-[44px] touch-manipulation active:scale-95 transition-transform"
                  aria-label={t.buttons.exportHTML}
                >
                  <Code className="h-3 w-3 mr-1" />
                  HTML
                </Button>
              </div>
            </div>
          </div>

          {/* Settings Popover */}
          {showSettings && (
            <div ref={settingsRef} className="absolute right-2 sm:right-4 top-14 sm:top-16 z-50 w-[calc(100vw-16px)] sm:w-80 bg-white shadow-2xl rounded-lg border-2 border-gray-200 max-h-[80vh] overflow-auto">
              <div className="p-4 bg-white">
                <h3 className="font-medium mb-3">{t.settings.title}</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">{t.settings.theme}</label>
                    <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    <SelectContent className="bg-white max-w-[calc(100vw-32px)] sm:max-w-none">
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
                          <div className="font-medium">{(t.fontSizes as Record<string, string>)[size.id]}</div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Editor Font Size</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="12"
                        max="24"
                        value={editorFontSize}
                        onChange={(e) => setEditorFontSize(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-700"
                      />
                      <span className="text-xs text-muted-foreground w-12 text-center">{editorFontSize}px</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Preview Font Size</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="12"
                        max="24"
                        value={previewFontSize}
                        onChange={(e) => setPreviewFontSize(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-700"
                      />
                      <span className="text-xs text-muted-foreground w-12 text-center">{previewFontSize}px</span>
                    </div>
                  </div>

                  <RecentFiles onSelectFile={setMarkdown} />
                </div>
              </div>
            </div>
          )}

          {/* Table of Contents Popover */}
          {showToc && (
            <div ref={tocRef} className="absolute right-16 sm:right-24 top-14 sm:top-16 z-50 w-[calc(100vw-100px)] sm:w-80 max-w-[300px] bg-white shadow-2xl rounded-lg border-2 border-gray-200 max-h-[70vh] overflow-auto">
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
                        className="text-sm truncate"
                        style={{ marginLeft: `${Math.max(0, (heading.level - 2) * 0.75)}rem` }}
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
        {isLoading ? (
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
            <div className="md:col-span-3 flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col h-[60vh] md:h-[70vh]">
                <Card className="flex-1 h-full">
                  <CardHeader>
                    <CardTitle>
                      <Skeleton className="h-6 w-32" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-full min-h-[300px] w-full" />
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col h-[60vh] md:h-[70vh]">
                <Card className="flex-1 h-full">
                  <CardHeader>
                    <CardTitle>
                      <Skeleton className="h-6 w-24" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                      <Skeleton className="h-4 w-4/6" />
                      <Skeleton className="h-32 w-full" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Main Content */}
            <div className={showPreview ? (isVerticalView ? "flex flex-col" : "md:col-span-3 flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6") + " order-1 md:order-2" : "md:col-span-3 order-1 md:order-2"}>
            {/* Editor */}
            <div className={showPreview ? (isVerticalView ? "flex flex-col h-[60vh] md:h-[70vh]" : "flex flex-col h-[60vh] md:h-[70vh]") : "max-w-4xl mx-auto flex flex-col h-[60vh] md:h-[70vh]"}>
              <Card
                className={`flex-1 h-full no-print overflow-auto card-editor transition-all duration-200 ${isDragging ? 'ring-2 ring-primary ring-offset-2 scale-[1.02]' : ''}`}
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
                          aria-label={t.buttons.upload}
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          {t.buttons.upload}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowPreview(!showPreview)}
                          className="w-full sm:w-auto btn-toggle"
                          aria-label={showPreview ? t.buttons.hidePreview : t.buttons.showPreview}
                          aria-pressed={showPreview}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          {showPreview ? t.buttons.hidePreview : t.buttons.showPreview}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleExportMarkdown}
                          className="w-full sm:w-auto"
                          aria-label={t.buttons.exportMarkdown}
                          title="Download as Markdown"
                        >
                          <File className="h-4 w-4 mr-2" />
                          <span className="hidden sm:inline">{t.buttons.exportMarkdown}</span>
                          <span className="sm:hidden">MD</span>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleExportTXT}
                          className="w-full sm:w-auto"
                          aria-label="Export as TXT"
                          title="Download as TXT"
                        >
                          <FileEdit className="h-4 w-4 mr-2" />
                          <span className="hidden sm:inline">TXT</span>
                          <span className="sm:hidden">TXT</span>
                        </Button>
                        <FullscreenToggle className="hidden sm:flex" />
                        <PrintPreview className="hidden sm:flex" />
                        <SplitViewToggle
                          isVertical={isVerticalView}
                          onToggle={() => setIsVerticalView(!isVerticalView)}
                          className="hidden sm:flex"
                        />
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <MarkdownToolbar
                  onInsert={insertAtCursor}
                  wordWrap={wordWrap}
                  onWordWrapToggle={() => setWordWrap(!wordWrap)}
                  showFindReplace={showFindReplace}
                  onFindReplaceToggle={() => setShowFindReplace(!showFindReplace)}
                  canUndo={canUndo}
                  canRedo={canRedo}
                  onUndo={handleUndo}
                  onRedo={handleRedo}
                  content={markdown}
                  onClear={resetToDefault}
                  onReplace={(oldContent, newContent) => setMarkdown(newContent)}
                  onAutosaveIntervalChange={setAutosaveInterval}
                  autosaveInterval={autosaveInterval}
                  onFontSizeChange={setPreviewFontSize}
                  onLineHeightChange={setPreviewLineHeight}
                  onFontFamilyChange={setPreviewFontFamily}
                  previewFontSize={previewFontSize}
                  previewLineHeight={previewLineHeight}
                  previewFontFamily={previewFontFamily}
                  onExportPDF={handleDownloadPDF}
                  onExportMarkdown={() => {/* Handled by MarkdownExport component */}}
                  onPrint={() => window.print()}
                  onTogglePreview={() => setShowPreview(!showPreview)}
                  onDebounceChange={(ms) => {
                    // Update debounce value (currently hardcoded at 300ms)
                    console.log('Debounce changed to:', ms)
                  }}
                  debounceValue={300}
                />
                {showFindReplace && (
                  <FindReplace
                    content={markdown}
                    onReplace={(_, newContent) => setMarkdown(newContent)}
                    onClose={() => setShowFindReplace(false)}
                  />
                )}
                <CardContent className="h-full relative">
                  {isDragging && (
                    <div className="absolute inset-0 z-10 bg-primary/10 backdrop-blur-sm rounded-lg border-2 border-dashed border-primary flex flex-col items-center justify-center animate-pulse">
                      <FileUp className="h-16 w-16 text-primary mb-4 animate-bounce" />
                      <p className="text-lg font-medium text-primary">{t.editor.dragDropText}</p>
                      <p className="text-muted-foreground">{t.editor.dragDropSubtext}</p>
                    </div>
                  )}
                  <Textarea
                    ref={editorRef}
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                    onKeyUp={(e) => {
                      const textarea = e.target as HTMLTextAreaElement
                      setCursorPosition(textarea.selectionStart)
                    }}
                    onClick={(e) => {
                      const textarea = e.target as HTMLTextAreaElement
                      setCursorPosition(textarea.selectionStart)
                    }}
                    placeholder={t.editor.placeholder}
                    className={`h-full min-h-[200px] md:min-h-[300px] font-mono text-sm resize-none transition-all duration-200 ${isDragging ? 'opacity-50' : ''}`}
                    style={{
                      height: 'calc(100% - 24px)',
                      minHeight: '200px',
                      fontSize: `${editorFontSize}px`,
                      whiteSpace: wordWrap ? 'pre-wrap' : 'pre',
                      overflowX: wordWrap ? 'hidden' : 'auto'
                    }}
                    aria-label={t.editor.title}
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-3 py-1.5 bg-muted/50 border-t text-xs flex justify-between items-center">
                    <EditorStats content={markdown} language={language} cursorPosition={cursorPosition} />
                    <AutoSaveIndicator status={saveStatus} lastSaved={lastSaved} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview */}
            {showPreview && (
              <div className={isVerticalView ? "flex flex-col h-[60vh] md:h-[70vh]" : "flex flex-col h-[60vh] md:h-[70vh]"}>
                <Card className="flex-1 h-full overflow-auto card-editor">
                  <CardHeader className="no-print">
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="h-5 w-5" />
                      {t.preview.title}
                      <Badge variant="secondary" className="ml-auto">
                        {t.themes[selectedTheme as keyof typeof t.themes]} {t.preview.theme}
                      </Badge>
                      <ZoomControl onZoomChange={setPreviewZoom} className="ml-2" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="print:p-0 h-full">
                    {/* PDF导出专用容器，动态应用主题 */}
                    <div
                      ref={previewRef}
                      className="markdown-preview-pdf prose prose-lg"
                      style={{ fontSize: `${previewFontSize}px`, lineHeight: previewLineHeight, fontFamily: previewFontFamily, transform: `scale(${previewZoom / 100})`, transformOrigin: 'top left' }}
                      role="region"
                      aria-label={t.preview.title}
                      aria-live="polite"
                    >
                      <MarkdownRenderer
                        content={debouncedMarkdown}
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
        )}
      </div>

      {/* Hidden file input */}
      <input ref={fileInputRef} type="file" accept=".md,.txt,text/markdown,text/plain" onChange={handleFileUpload} className="hidden" />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  </>
  )
}
