'use client'

import { useEffect, useState } from 'react'
import { FileText, Hash, Clock, Locate } from 'lucide-react'

interface EditorStatsProps {
  content: string
  language: string
  cursorPosition?: number
}

export function EditorStats({ content, cursorPosition }: EditorStatsProps) {
  const [stats, setStats] = useState({
    characters: 0,
    words: 0,
    lines: 0,
    readingTime: 0
  })
  const [cursor, setCursor] = useState({ line: 1, column: 1 })

  useEffect(() => {
    // Calculate statistics
    const text = content || ''
    const characters = text.length
    const lines = text.split('\n').length

    // Count words (supports multiple languages including Chinese)
    const words = text.trim()
      ? text.trim().split(/\s+/).filter(word => word.length > 0).length
      : 0

    // Estimate reading time (200 words per minute for English, 400 characters per minute for Chinese)
    const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length
    const englishWords = words
    const readingTimeMinutes = (chineseChars / 400) + (englishWords / 200)
    const readingTime = Math.ceil(readingTimeMinutes)

    setStats({
      characters,
      words,
      lines,
      readingTime
    })
  }, [content])

  useEffect(() => {
    if (cursorPosition !== undefined) {
      // Calculate line and column from cursor position
      const textBeforeCursor = content.substring(0, cursorPosition)
      const lines = textBeforeCursor.split('\n')
      const line = lines.length
      const column = lines[lines.length - 1].length + 1
      setCursor({ line, column })
    }
  }, [cursorPosition, content])

  const formatReadingTime = (minutes: number) => {
    if (minutes < 1) return '< 1 min'
    if (minutes === 1) return '1 min'
    return `${minutes} min`
  }

  return (
    <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
      <div className="flex items-center gap-1" title="Characters">
        <Hash className="h-3 w-3" />
        <span>{stats.characters.toLocaleString()}</span>
      </div>
      <div className="flex items-center gap-1" title="Words">
        <FileText className="h-3 w-3" />
        <span>{stats.words.toLocaleString()}</span>
      </div>
      <div className="flex items-center gap-1 hidden sm:flex" title="Lines">
        <span className="font-mono">¶</span>
        <span>{stats.lines.toLocaleString()}</span>
      </div>
      {cursorPosition !== undefined && (
        <div className="flex items-center gap-1 hidden md:flex" title="Cursor position">
          <Locate className="h-3 w-3" />
          <span className="font-mono">Ln {cursor.line}, Col {cursor.column}</span>
        </div>
      )}
      <div className="flex items-center gap-1 hidden md:flex" title="Reading time">
        <Clock className="h-3 w-3" />
        <span>{formatReadingTime(stats.readingTime)}</span>
      </div>
    </div>
  )
}
