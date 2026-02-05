'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { BarChart3 } from 'lucide-react'
import type { LocaleTranslations } from '@/lib/locales/types'

interface StatisticsPanelProps {
  content: string
  className?: string
  t: LocaleTranslations
}

export function StatisticsPanel({ content, className, t }: StatisticsPanelProps) {
  const [isOpen, setIsOpen] = useState(false)

  const calculateStats = () => {
    const lines = content.split('\n')
    const words = content.trim().split(/\s+/).filter(w => w.length > 0)
    const chars = content.length
    const charsNoSpaces = content.replace(/\s/g, '').length
    const paragraphs = content.split(/\n\s*\n/).filter(p => p.trim().length > 0)
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0)

    // Count different elements
    const headings = content.match(/^#{1,6}\s+.+/gm) || []
    const codeBlocks = content.match(/```[\s\S]*?```/g) || []
    const inlineCode = content.match(/`[^`]+`/g) || []
    const links = content.match(/\[([^\]]+)\]\([^)]+\)/g) || []
    const images = content.match(/!\[([^\]]*)\]\([^)]+\)/g) || []
    const lists = content.match(/^[\s]*[-*+]\s+/gm) || []

    // Longest word
    const allWords = content.split(/\s+/)
    const longestWord = allWords.reduce((longest, word) =>
      word.replace(/[^\w]/g, '').length > longest.replace(/[^\w]/g, '').length ? word : longest
    , '')

    // Average word length
    const avgWordLength = words.length > 0
      ? (charsNoSpaces / words.length).toFixed(1)
      : 0

    // Reading time (200 wpm)
    const readingTime = Math.ceil(words.length / 200)
    const speakingTime = Math.ceil(words.length / 150)

    return {
      lines: lines.length,
      words: words.length,
      characters: chars,
      charsNoSpaces,
      paragraphs: paragraphs.length,
      sentences: sentences.length,
      headings: headings.length,
      codeBlocks: codeBlocks.length,
      inlineCode: inlineCode.length,
      links: links.length,
      images: images.length,
      listItems: lists.length,
      longestWord: longestWord.substring(0, 20),
      avgWordLength,
      readingTime,
      speakingTime
    }
  }

  const stats = calculateStats()

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Statistics"
        aria-label="Statistics"
        aria-expanded={isOpen}
      >
        <BarChart3 className="h-4 w-4" />
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-popover text-popover-foreground shadow-lg rounded-lg border border-primary/15 max-w-md w-full max-h-[80vh] overflow-auto">
              <div className="sticky top-0 bg-popover p-4 border-b border-border flex items-center justify-between">
                <h2 className="text-lg font-semibold">{t.dialogs.documentStatistics}</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  aria-label={t.dialogs.close}
                >
                  ✕
                </Button>
              </div>

              <div className="p-6 space-y-4">
                {/* Basic Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-muted/40 rounded-lg">
                    <div className="text-2xl font-bold">{stats.words.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Words</div>
                  </div>
                  <div className="p-3 bg-muted/40 rounded-lg">
                    <div className="text-2xl font-bold">{stats.characters.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Characters</div>
                  </div>
                  <div className="p-3 bg-muted/40 rounded-lg">
                    <div className="text-2xl font-bold">{stats.lines.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Lines</div>
                  </div>
                  <div className="p-3 bg-muted/40 rounded-lg">
                    <div className="text-2xl font-bold">{stats.paragraphs.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Paragraphs</div>
                  </div>
                </div>

                {/* Time Estimates */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Time Estimates</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-muted/40 rounded">
                      <span className="text-sm">Reading time (200 wpm)</span>
                      <span className="text-sm font-medium">{stats.readingTime} min</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted/40 rounded">
                      <span className="text-sm">Speaking time (150 wpm)</span>
                      <span className="text-sm font-medium">{stats.speakingTime} min</span>
                    </div>
                  </div>
                </div>

                {/* Elements Count */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Elements</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex justify-between p-2 bg-muted/40 rounded">
                      <span>Headings</span>
                      <span className="font-medium">{stats.headings}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/40 rounded">
                      <span>Code blocks</span>
                      <span className="font-medium">{stats.codeBlocks}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/40 rounded">
                      <span>Inline code</span>
                      <span className="font-medium">{stats.inlineCode}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/40 rounded">
                      <span>Links</span>
                      <span className="font-medium">{stats.links}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/40 rounded">
                      <span>Images</span>
                      <span className="font-medium">{stats.images}</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/40 rounded">
                      <span>List items</span>
                      <span className="font-medium">{stats.listItems}</span>
                    </div>
                  </div>
                </div>

                {/* Word Stats */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Word Stats</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-muted/40 rounded text-sm">
                      <span>Average word length</span>
                      <span className="font-medium">{stats.avgWordLength} chars</span>
                    </div>
                    <div className="p-2 bg-muted/40 rounded text-sm">
                      <span className="block mb-1">Longest word</span>
                      <span className="font-mono bg-background px-2 py-1 rounded block">
                        {stats.longestWord || 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => setIsOpen(false)}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  {t.dialogs.close}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
