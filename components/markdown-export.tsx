'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, FileDown } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import type { LocaleTranslations } from '@/lib/locales/types'

interface MarkdownExportProps {
  content: string
  className?: string
  t: LocaleTranslations
}

export function MarkdownExport({ content, className, t }: MarkdownExportProps) {
  const [open, setOpen] = useState(false)
  const [filename, setFilename] = useState('document')
  const safeFilename = filename.trim() || t.dialogs.markdownExport.filenamePlaceholder

  const handleExport = () => {
    if (!content) return

    // Create blob with markdown content
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)

    // Create temporary link and trigger download
    const link = document.createElement('a')
    link.href = url
    link.download = safeFilename.endsWith('.md') ? safeFilename : `${safeFilename}.md`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Clean up
    URL.revokeObjectURL(url)
    setOpen(false)
  }

  const handleCopy = async () => {
    if (!content) return
    try {
      await navigator.clipboard.writeText(content)
      // Could add toast notification here
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 px-2 touch-manipulation text-xs ${className}`}
          title={t.dialogs.markdownExport.title}
          aria-label={t.dialogs.markdownExport.title}
          disabled={!content}
        >
          <FileDown className="h-4 w-4" />
          <span className="hidden sm:inline ml-1">{t.toolbar.exportMarkdownLabel}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t.dialogs.markdownExport.title}</DialogTitle>
          <DialogDescription>
            {t.dialogs.markdownExport.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="filename" className="text-sm font-medium">
              {t.dialogs.markdownExport.filenameLabel}
            </label>
            <Input
              id="filename"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              placeholder={t.dialogs.markdownExport.filenamePlaceholder}
              className="w-full"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleExport()
                }
              }}
            />
            <p className="text-xs text-muted-foreground">
              {t.dialogs.markdownExport.filenameHint.replace('{filename}', `${safeFilename}.md`)}
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleExport}
              className="flex-1"
              disabled={!content}
            >
              <Download className="h-4 w-4 mr-2" />
              {t.dialogs.markdownExport.download}
            </Button>
            <Button
              onClick={handleCopy}
              variant="outline"
              className="flex-1"
              disabled={!content}
            >
              {t.dialogs.markdownExport.copy}
            </Button>
          </div>

          <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-md">
            <p className="font-medium mb-1">{t.dialogs.markdownExport.fileInfoTitle}</p>
            <p>• {t.editor.stats.characters}: {content.length.toLocaleString()}</p>
            <p>• {t.editor.stats.words}: {content.trim().split(/\s+/).filter(w => w.length > 0).length.toLocaleString()}</p>
            <p>• {t.editor.stats.lines}: {content.split('\n').length.toLocaleString()}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
