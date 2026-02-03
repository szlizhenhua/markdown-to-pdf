'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Printer, Eye, EyeOff, FileText, X } from 'lucide-react'

interface PrintPreviewProps {
  className?: string
  content?: string
}

export function PrintPreview({ className, content = '' }: PrintPreviewProps) {
  const [isPrintMode, setIsPrintMode] = useState(false)

  // Calculate document statistics
  const wordCount = content.trim().split(/\s+/).filter(w => w.length > 0).length
  const charCount = content.length
  const lines = content.split('\n').length
  // Estimate pages: ~500 words per page
  const estimatedPages = Math.max(1, Math.ceil(wordCount / 500))

  useEffect(() => {
    if (isPrintMode) {
      document.body.classList.add('print-preview-mode')
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    } else {
      document.body.classList.remove('print-preview-mode')
      document.body.style.overflow = ''
    }

    return () => {
      document.body.classList.remove('print-preview-mode')
      document.body.style.overflow = ''
    }
  }, [isPrintMode])

  // ESC key to exit print preview
  useEffect(() => {
    if (!isPrintMode) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPrintMode(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isPrintMode])

  const handleToggle = () => {
    setIsPrintMode(!isPrintMode)
  }

  const handlePrint = () => {
    window.print()
  }

  if (isPrintMode) {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-background border rounded-lg shadow-lg p-4 w-80 animate-in slide-in-from-right-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-sm">Print Preview</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggle}
            className="h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
            title="Exit preview (Esc)"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>

        <div className="space-y-1.5 text-xs mb-4 p-3 bg-muted/50 rounded-md">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Words:</span>
            <span className="font-medium">{wordCount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Characters:</span>
            <span className="font-medium">{charCount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Lines:</span>
            <span className="font-medium">{lines.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Est. Pages:</span>
            <span className="font-medium">{estimatedPages}</span>
          </div>
        </div>

        <div className="space-y-2">
          <Button
            onClick={handlePrint}
            className="w-full"
            size="sm"
          >
            <Printer className="h-4 w-4 mr-2" />
            Print / Save as PDF
          </Button>
          <p className="text-[10px] text-muted-foreground text-center">
            Tip: Use browser &quot;Save as PDF&quot; in print dialog
          </p>
        </div>
      </div>
    )
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleToggle}
      className={`h-8 w-8 p-0 touch-manipulation ${className}`}
      title="Print preview"
      aria-label="Print preview"
    >
      {isPrintMode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
    </Button>
  )
}
