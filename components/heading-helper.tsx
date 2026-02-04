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
        <div className="absolute left-0 top-full mt-1 z-50 w-72 bg-popover text-popover-foreground shadow-lg rounded-lg border border-primary/15">
          <div className="p-4 space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Heading Level: {level}</label>
              <input
                type="range"
                min="1"
                max="6"
                value={level}
                onChange={(e) => setLevel(parseInt(e.target.value))}
                className="w-full h-2 bg-muted/60 rounded-lg appearance-none cursor-pointer accent-primary"
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
                className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
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
            <div className="mt-3 p-3 bg-muted/40 rounded border text-xs">
              <div className="text-muted-foreground mb-1">Preview:</div>
              <div className="text-foreground" style={{ fontSize: `${2 - level * 0.15}rem`, fontWeight: level === 1 ? 'bold' : level < 3 ? '600' : '500' }}>
                {'#'.repeat(level)} {text || 'Heading'}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
