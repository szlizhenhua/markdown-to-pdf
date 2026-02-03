'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Quote } from 'lucide-react'

interface BlockquoteHelperProps {
  onInsert: (quoteMarkdown: string) => void
  className?: string
}

export function BlockquoteHelper({ onInsert, className }: BlockquoteHelperProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState('')
  const [citation, setCitation] = useState('')
  const [includeCitation, setIncludeCitation] = useState(false)

  const handleInsert = () => {
    let quote = ''
    const quoteText = text || 'Quote text here'

    if (includeCitation && citation) {
      quote = `> ${quoteText}\n>\n> — ${citation}`
    } else {
      quote = `> ${quoteText}`
    }

    onInsert(quote)

    // Reset form
    setText('')
    setCitation('')
    setIncludeCitation(false)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Insert blockquote"
        aria-label="Insert blockquote"
        aria-expanded={isOpen}
      >
        <Quote className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-2 border-gray-200 dark:border-gray-700">
          <div className="p-4 space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Quote Text</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter quote text"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="includeCitation"
                checked={includeCitation}
                onChange={(e) => setIncludeCitation(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <label htmlFor="includeCitation" className="text-sm">
                Include citation
              </label>
            </div>

            {includeCitation && (
              <div>
                <label className="text-sm font-medium mb-1.5 block">Citation</label>
                <input
                  type="text"
                  value={citation}
                  onChange={(e) => setCitation(e.target.value)}
                  placeholder="Author or source"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            <div className="flex gap-2">
              <Button
                onClick={handleInsert}
                size="sm"
                className="flex-1"
              >
                Insert Quote
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
            <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-900 rounded border text-xs">
              <div className="text-gray-500 dark:text-gray-400 mb-1">Preview:</div>
              <div className="text-gray-700 dark:text-gray-300 italic border-l-4 border-gray-400 pl-3">
                {text || 'Quote text here'}
                {includeCitation && citation && (
                  <div className="mt-1 not-italic text-gray-500">
                    — {citation}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
