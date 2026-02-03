'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { History, Clock, RotateCcw, Trash2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

interface HistoryEntry {
  id: string
  content: string
  timestamp: Date
  description: string
}

interface DocumentHistoryProps {
  className?: string
  currentContent: string
  onRestore?: (content: string) => void
}

const MAX_HISTORY_ENTRIES = 50

// Simple date formatter without external dependencies
function formatRelativeTime(date: Date): string {
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (diffInSeconds < 60) {
    return 'just now'
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`
  }

  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
  }

  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`
  }

  // For older dates, show actual date
  return date.toLocaleDateString()
}

export function DocumentHistory({ className, currentContent, onRestore }: DocumentHistoryProps) {
  const [open, setOpen] = useState(false)
  const [history, setHistory] = useState<HistoryEntry[]>([])

  // Load history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('markdown-history')
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory)
        const entries = parsed.map((entry: HistoryEntry) => ({
          ...entry,
          timestamp: new Date(entry.timestamp)
        }))
        setHistory(entries)
      } catch (error) {
        console.error('Failed to parse history:', error)
      }
    }
  }, [])

  // Save current content to history when it changes significantly
  useEffect(() => {
    if (!currentContent) return

    setHistory(prevHistory => {
      const lastEntry = prevHistory[0]
      const timeSinceLastEntry = lastEntry
        ? Date.now() - new Date(lastEntry.timestamp).getTime()
        : Infinity

      // Only save if 30 seconds have passed since last entry or content is significantly different
      const contentChanged = lastEntry && lastEntry.content !== currentContent
      const isSignificantChange = contentChanged &&
        Math.abs(lastEntry.content.length - currentContent.length) > 50

      if (timeSinceLastEntry > 30000 && isSignificantChange) {
        const newEntry: HistoryEntry = {
          id: Date.now().toString(),
          content: currentContent,
          timestamp: new Date(),
          description: generateDescription(currentContent)
        }

        const newHistory = [newEntry, ...prevHistory].slice(0, MAX_HISTORY_ENTRIES)
        localStorage.setItem('markdown-history', JSON.stringify(newHistory))
        return newHistory
      }
      return prevHistory
    })
  }, [currentContent])

  const generateDescription = (content: string): string => {
    const lines = content.split('\n')
    const firstHeading = lines.find(line => line.startsWith('#'))
    if (firstHeading) {
      return firstHeading.replace(/^#+\s*/, '').substring(0, 30)
    }
    const firstLine = lines[0]?.substring(0, 30)
    return firstLine || 'Untitled document'
  }

  const handleRestore = (entry: HistoryEntry) => {
    onRestore?.(entry.content)
    setOpen(false)
  }

  const handleClearHistory = () => {
    setHistory([])
    localStorage.removeItem('markdown-history')
  }

  const handleExportHistory = () => {
    const dataStr = JSON.stringify(history, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `markdown-history-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 p-0 touch-manipulation ${className}`}
          title="Document history"
          aria-label="Document history"
          disabled={history.length === 0}
        >
          <History className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Document History</DialogTitle>
          <DialogDescription>
            View and restore previous versions of your document
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Actions */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportHistory}
              disabled={history.length === 0}
              className="flex-1"
            >
              <History className="h-4 w-4 mr-2" />
              Export History
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearHistory}
              disabled={history.length === 0}
              className="flex-1 text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear History
            </Button>
          </div>

          {/* History List */}
          <ScrollArea className="h-[400px] border rounded-md">
            {history.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-8">
                <Clock className="h-12 w-12 mb-4 opacity-50" />
                <p>No history yet</p>
                <p className="text-sm">Start editing to see history here</p>
              </div>
            ) : (
              <div className="divide-y">
                {history.map((entry, index) => (
                  <div
                    key={entry.id}
                    className="p-3 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium truncate">
                            {entry.description || 'Untitled'}
                          </span>
                          {index === 0 && (
                            <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {formatRelativeTime(entry.timestamp)}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {entry.content.length} characters • {entry.content.split('\n').length} lines
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRestore(entry)}
                        disabled={index === 0}
                        className="flex-shrink-0"
                        title="Restore this version"
                      >
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>

          <p className="text-xs text-muted-foreground">
            History is automatically saved every 30 seconds when significant changes are made.
            Maximum {MAX_HISTORY_ENTRIES} entries are stored.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
