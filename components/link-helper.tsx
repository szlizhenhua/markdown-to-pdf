'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link as LinkIcon } from 'lucide-react'

interface LinkHelperProps {
  onInsert: (linkMarkdown: string) => void
  className?: string
}

export function LinkHelper({ onInsert, className }: LinkHelperProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState('')
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')

  const isValidUrl = (urlString: string): boolean => {
    if (!urlString) return false
    try {
      const url = new URL(urlString.startsWith('http') ? urlString : `https://${urlString}`)
      return url.protocol === 'http:' || url.protocol === 'https:'
    } catch {
      return false
    }
  }

  const handleInsert = () => {
    if (!url.trim()) return

    let linkMarkdown = ''
    const displayText = text.trim() || url
    const urlWithProtocol = url.startsWith('http') ? url : `https://${url}`

    if (title.trim()) {
      linkMarkdown = `[${displayText}](${urlWithProtocol} "${title}")`
    } else {
      linkMarkdown = `[${displayText}](${urlWithProtocol})`
    }

    onInsert(linkMarkdown)

    // Reset form
    setUrl('')
    setText('')
    setTitle('')
    setIsOpen(false)
  }

  const isValid = isValidUrl(url)

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Insert link"
        aria-label="Insert link"
        aria-expanded={isOpen}
      >
        <LinkIcon className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-80 bg-popover text-popover-foreground shadow-lg rounded-lg border border-primary/15">
          <div className="p-4 space-y-3">
            <div>
              <label className="text-sm font-medium mb-1.5 block">URL *</label>
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && isValid) {
                    handleInsert()
                  }
                }}
                className={url && !isValid ? 'border-red-500' : ''}
              />
              {url && !isValid && (
                <p className="text-xs text-red-500 mt-1">Please enter a valid URL</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Link Text</label>
              <Input
                type="text"
                placeholder="Click here"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && isValid) {
                    handleInsert()
                  }
                }}
              />
              <p className="text-xs text-muted-foreground mt-1">Leave empty to use URL as text</p>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Title (optional)</label>
              <Input
                type="text"
                placeholder="Link tooltip text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && isValid) {
                    handleInsert()
                  }
                }}
              />
              <p className="text-xs text-muted-foreground mt-1">Shown on hover</p>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleInsert}
                size="sm"
                className="flex-1"
                disabled={!isValid}
              >
                Insert Link
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                size="sm"
              >
                Cancel
              </Button>
            </div>

            {/* Preview */}
            {url && (
              <div className="mt-3 p-3 bg-muted/40 rounded border text-xs">
                <div className="text-muted-foreground mb-1">Preview:</div>
                <div className="text-blue-600 dark:text-blue-400 break-all">
                  {text || url} {title && <span className="text-muted-foreground">({title})</span>}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
