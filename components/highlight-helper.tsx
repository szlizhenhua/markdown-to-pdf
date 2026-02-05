'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Highlighter } from 'lucide-react'
import type { LocaleTranslations } from '@/lib/locales/types'

interface HighlightHelperProps {
  onInsert: (markdown: string) => void
  className?: string
  t: LocaleTranslations
}

const getHighlightColors = (t: LocaleTranslations) => [
  { name: t.highlightHelper.yellow, bg: 'bg-yellow-200', markdown: '==highlight==' },
  { name: t.highlightHelper.red, bg: 'bg-red-200', markdown: '==highlight==' },
  { name: t.highlightHelper.green, bg: 'bg-green-200', markdown: '==highlight==' },
  { name: t.highlightHelper.blue, bg: 'bg-blue-200', markdown: '==highlight==' },
  { name: t.highlightHelper.purple, bg: 'bg-purple-200', markdown: '==highlight==' },
  { name: t.highlightHelper.pink, bg: 'bg-pink-200', markdown: '==highlight==' }
]

export function HighlightHelper({ onInsert, className, t }: HighlightHelperProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState('')
  const highlightColors = getHighlightColors(t)

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
        title={t.highlightHelper.insertHighlight}
        aria-label={t.highlightHelper.insertHighlight}
        aria-expanded={isOpen}
      >
        <Highlighter className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-64 bg-popover text-popover-foreground shadow-lg rounded-lg border border-primary/15">
          <div className="p-4 space-y-3">
            <div>
              <label className="text-sm font-medium mb-1.5 block">{t.highlightHelper.highlightText}</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={t.highlightHelper.textToHighlight}
                className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">{t.highlightHelper.color} {t.highlightHelper.visualOnly}</label>
              <div className="grid grid-cols-3 gap-2">
                {highlightColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={handleInsert}
                    className={`px-3 py-2 text-sm rounded ${color.bg} hover:opacity-80 transition-opacity`}
                    title={`${t.highlightHelper.insertHighlight} ${color.name}`}
                  >
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-xs text-yellow-800 dark:text-yellow-200">
              <strong>{t.highlightHelper.note.split(':')[0]}:</strong>{t.highlightHelper.note.split(':').slice(1).join(':')}
            </div>

            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              size="sm"
              className="w-full"
            >
              {t.highlightHelper.cancel}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
