"use client"

import { useEffect, useState } from 'react'
import { Hash, AlignLeft, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface DocumentStats {
  characters: number
  charactersNoSpaces: number
  words: number
  lines: number
  paragraphs: number
  readingTime: number
}

export function DocumentStats({ content }: { content: string }) {
  const [stats, setStats] = useState<DocumentStats>({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    lines: 0,
    paragraphs: 0,
    readingTime: 0,
  })

  useEffect(() => {
    const calculateStats = (): DocumentStats => {
      const text = content || ''

      // Count characters
      const characters = text.length
      const charactersNoSpaces = text.replace(/\s/g, '').length

      // Count words (handles multiple spaces and newlines)
      const words = text.trim() ? text.trim().split(/\s+/).length : 0

      // Count lines
      const lines = text ? text.split('\n').length : 0

      // Count paragraphs (non-empty lines)
      const paragraphs = text.trim() ? text.trim().split(/\n\n+/).length : 0

      // Calculate reading time (average 200 words per minute)
      const readingTime = Math.ceil(words / 200)

      return { characters, charactersNoSpaces, words, lines, paragraphs, readingTime }
    }

    setStats(calculateStats())
  }, [content])

  const StatItem = ({ icon: Icon, label, value, suffix = '' }: { icon: React.ComponentType<{ className?: string }>, label: string, value: number, suffix?: string }) => (
    <div className="flex items-center gap-2 text-sm">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-medium tabular-nums">{value.toLocaleString()} {suffix}</span>
    </div>
  )

  return (
    <Card className="border-dashed">
      <CardContent className="p-3">
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <StatItem icon={Hash} label="Characters" value={stats.characters} />
          <StatItem icon={AlignLeft} label="Words" value={stats.words} />
          <StatItem icon={Clock} label="Read time" value={stats.readingTime} suffix="min" />
        </div>
      </CardContent>
    </Card>
  )
}
