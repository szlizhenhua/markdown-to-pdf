'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { BookOpen } from 'lucide-react'

interface CheatSheetProps {
  className?: string
}

const cheatSheetCategories = [
  {
    name: 'Headers',
    items: [
      { code: '# H1', description: 'Largest heading' },
      { code: '## H2', description: 'Large heading' },
      { code: '### H3', description: 'Medium heading' },
      { code: '#### H4', description: 'Small heading' },
      { code: '##### H5', description: 'Smaller heading' },
      { code: '###### H6', description: 'Smallest heading' }
    ]
  },
  {
    name: 'Text Formatting',
    items: [
      { code: '**bold**', description: 'Bold text' },
      { code: '*italic*', description: 'Italic text' },
      { code: '***bold italic***', description: 'Bold italic' },
      { code: '~~strikethrough~~', description: 'Strikethrough' },
      { code: '`code`', description: 'Inline code' },
      { code: '```\ncode block\n```', description: 'Code block' }
    ]
  },
  {
    name: 'Links & Images',
    items: [
      { code: '[text](url)', description: 'Link' },
      { code: '[text](url "title")', description: 'Link with title' },
      { code: '![alt](url)', description: 'Image' },
      { code: '![alt](url "title")', description: 'Image with title' },
      { code: '<https://url.com>', description: 'Auto link' },
      { code: '<email@example.com>', description: 'Email link' }
    ]
  },
  {
    name: 'Lists',
    items: [
      { code: '- item', description: 'Bullet list' },
      { code: '* item', description: 'Bullet list (alt)' },
      { code: '+ item', description: 'Bullet list (alt)' },
      { code: '1. item', description: 'Numbered list' },
      { code: '- [ ] task', description: 'Task list (unchecked)' },
      { code: '- [x] task', description: 'Task list (checked)' }
    ]
  },
  {
    name: 'Other Elements',
    items: [
      { code: '> quote', description: 'Blockquote' },
      { code: '---', description: 'Horizontal rule' },
      { code: '***', description: 'Horizontal rule (alt)' },
      { code: '___', description: 'Horizontal rule (alt)' },
      { code: '| Col | Col |', description: 'Table' },
      { code: '\\[formula\\]', description: 'LaTeX math (inline)' },
      { code: '\\[formula\\]', description: 'LaTeX math (block)' }
    ]
  }
]

export function CheatSheet({ className }: CheatSheetProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Markdown cheat sheet"
        aria-label="Markdown cheat sheet"
        aria-expanded={isOpen}
      >
        <BookOpen className="h-4 w-4" />
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-popover text-popover-foreground shadow-lg rounded-lg border border-primary/15 max-w-4xl w-full max-h-[85vh] overflow-auto">
              <div className="sticky top-0 bg-popover p-4 border-b border-border flex items-center justify-between">
                <h2 className="text-lg font-semibold">Markdown Cheat Sheet</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                >
                  ✕
                </Button>
              </div>

              <div className="p-6 space-y-8">
                {cheatSheetCategories.map((category) => (
                  <div key={category.name}>
                    <h3 className="text-base font-semibold mb-3 text-foreground">{category.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.items.map((item) => (
                        <div
                          key={item.code}
                          className="flex items-start gap-3 p-3 bg-muted/40 rounded-lg border border-border"
                        >
                          <code className="text-sm font-mono bg-muted/60 px-2 py-1 rounded whitespace-pre-wrap flex-1">
                            {item.code}
                          </code>
                          <span className="text-sm text-muted-foreground flex-1">{item.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Tips</h4>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• Press <kbd className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-800 rounded text-xs">Esc</kbd> to close this dialog</li>
                    <li>• Use keyboard shortcuts like <kbd className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-800 rounded text-xs">Ctrl+B</kbd> for bold, <kbd className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-800 rounded text-xs">Ctrl+I</kbd> for italic</li>
                    <li>• Click the keyboard icon in the toolbar for all shortcuts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
