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

interface MarkdownExportProps {
  content: string
  className?: string
}

export function MarkdownExport({ content, className }: MarkdownExportProps) {
  const [open, setOpen] = useState(false)
  const [filename, setFilename] = useState('document')

  const handleExport = () => {
    if (!content) return

    // Create blob with markdown content
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)

    // Create temporary link and trigger download
    const link = document.createElement('a')
    const safeFilename = filename.trim() || 'document'
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
          title="Export markdown"
          aria-label="Export markdown"
          disabled={!content}
        >
          <FileDown className="h-4 w-4" />
          <span className="hidden sm:inline ml-1">Export .md</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Export Markdown</DialogTitle>
          <DialogDescription>
            Download your markdown as a .md file or copy to clipboard
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="filename" className="text-sm font-medium">
              Filename
            </label>
            <Input
              id="filename"
              value={filename}
              onChange={(e) => setFilename(e.target.value)}
              placeholder="document"
              className="w-full"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleExport()
                }
              }}
            />
            <p className="text-xs text-muted-foreground">
              File will be saved as &quot;<code>{filename || 'document'}.md</code>&quot;
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleExport}
              className="flex-1"
              disabled={!content}
            >
              <Download className="h-4 w-4 mr-2" />
              Download .md
            </Button>
            <Button
              onClick={handleCopy}
              variant="outline"
              className="flex-1"
              disabled={!content}
            >
              Copy to Clipboard
            </Button>
          </div>

          <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-md">
            <p className="font-medium mb-1">File Info:</p>
            <p>• Characters: {content.length.toLocaleString()}</p>
            <p>• Words: {content.trim().split(/\s+/).filter(w => w.length > 0).length.toLocaleString()}</p>
            <p>• Lines: {content.split('\n').length.toLocaleString()}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
