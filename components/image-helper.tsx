'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Image as ImageIcon } from 'lucide-react'

interface ImageHelperProps {
  onInsert: (imageMarkdown: string) => void
  className?: string
}

export function ImageHelper({ onInsert, className }: ImageHelperProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState('')
  const [alt, setAlt] = useState('')
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

    let imageMarkdown = ''
    const altText = alt.trim() || 'Image description'
    const urlWithProtocol = url.startsWith('http') ? url : `https://${url}`

    if (title.trim()) {
      imageMarkdown = `![${altText}](${urlWithProtocol} "${title}")`
    } else {
      imageMarkdown = `![${altText}](${urlWithProtocol})`
    }

    onInsert(imageMarkdown)

    // Reset form
    setUrl('')
    setAlt('')
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
        title="Insert image"
        aria-label="Insert image"
        aria-expanded={isOpen}
      >
        <ImageIcon className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-2 border-gray-200 dark:border-gray-700">
          <div className="p-4 space-y-3">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Image URL *</label>
              <Input
                type="url"
                placeholder="https://example.com/image.jpg"
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
              <label className="text-sm font-medium mb-1.5 block">Alt Text *</label>
              <Input
                type="text"
                placeholder="Image description"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && isValid) {
                    handleInsert()
                  }
                }}
              />
              <p className="text-xs text-muted-foreground mt-1">Description for accessibility</p>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Title (optional)</label>
              <Input
                type="text"
                placeholder="Image tooltip"
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
                Insert Image
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
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-900 rounded border text-xs">
                <div className="text-gray-500 dark:text-gray-400 mb-1">Preview:</div>
                <code className="text-gray-700 dark:text-gray-300 break-all">
                  {alt ? `![${alt}](${url.startsWith('http') ? url : `https://${url}`}${title ? ` "${title}"` : ''})` : `![Image description](${url.startsWith('http') ? url : `https://${url}`})`}
                </code>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
