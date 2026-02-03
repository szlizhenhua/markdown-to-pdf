'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Highlighter } from 'lucide-react'

interface HighlightHelperProps {
  onInsert: (markdown: string) => void
  className?: string
}

const highlightColors = [
  { name: 'Yellow', bg: 'bg-yellow-200', markdown: '==highlight==' },
  { name: 'Red', bg: 'bg-red-200', markdown: '==highlight==' },
  { name: 'Green', bg: 'bg-green-200', markdown: '==highlight==' },
  { name: 'Blue', bg: 'bg-blue-200', markdown: '==highlight==' },
  { name: 'Purple', bg: 'bg-purple-200', markdown: '==highlight==' },
  { name: 'Pink', bg: 'bg-pink-200', markdown: '==highlight==' }
]

export function HighlightHelper({ onInsert, className }: HighlightHelperProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState('')

  const handleInsert = () => {
    const highlightText = text || 'highlighted text'
    // Markdown doesn't have native highlighting, but some parsers support ==text==
    // We'll use this syntax which is commonly supported
    onInsert(`==${highlightText}==`)
    setText('')
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Insert highlight"
        aria-label="Insert highlight"
        aria-expanded={isOpen}
      >
        <Highlighter className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-2 border-gray-200 dark:border-gray-700">
          <div className="p-4 space-y-3">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Highlight Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Text to highlight"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Color (visual only)</label>
              <div className="grid grid-cols-3 gap-2">
                {highlightColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={handleInsert}
                    className={`px-3 py-2 text-sm rounded ${color.bg} hover:opacity-80 transition-opacity`}
                    title={`Insert ${color.name} highlight`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-xs text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> Highlighting uses ==text== syntax. May not be supported by all markdown renderers.
            </div>

            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              size="sm"
              className="w-full"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
