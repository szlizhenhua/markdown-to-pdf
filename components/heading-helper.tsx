'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Heading1 } from 'lucide-react'

interface HeadingHelperProps {
  onInsert: (headingMarkdown: string) => void
  className?: string
}

export function HeadingHelper({ onInsert, className }: HeadingHelperProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [level, setLevel] = useState(2)
  const [text, setText] = useState('')

  const handleInsert = () => {
    const hashes = '#'.repeat(level)
    const heading = `${hashes} ${text || 'Heading'}`
    onInsert(heading)

    // Reset form
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
        title="Insert heading"
        aria-label="Insert heading"
        aria-expanded={isOpen}
      >
        <Heading1 className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-72 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-2 border-gray-200 dark:border-gray-700">
          <div className="p-4 space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Heading Level: {level}</label>
              <input
                type="range"
                min="1"
                max="6"
                value={level}
                onChange={(e) => setLevel(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gray-700"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>H1</span>
                <span>H2</span>
                <span>H3</span>
                <span>H4</span>
                <span>H5</span>
                <span>H6</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-1.5 block">Heading Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleInsert()
                  }
                }}
                placeholder="Enter heading text"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <Button
              onClick={handleInsert}
              size="sm"
              className="w-full"
            >
              Insert Heading
            </Button>

            {/* Preview */}
            <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-900 rounded border text-xs">
              <div className="text-gray-500 dark:text-gray-400 mb-1">Preview:</div>
              <div className="text-gray-700 dark:text-gray-300" style={{ fontSize: `${2 - level * 0.15}rem`, fontWeight: level === 1 ? 'bold' : level < 3 ? '600' : '500' }}>
                {'#'.repeat(level)} {text || 'Heading'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
