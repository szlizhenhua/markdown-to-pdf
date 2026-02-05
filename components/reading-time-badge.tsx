'use client'

import { memo } from 'react'
import { Clock } from 'lucide-react'
import type { LocaleTranslations } from '@/lib/locales/types'

interface ReadingTimeBadgeProps {
  content: string
  className?: string
  t: LocaleTranslations
}

export const ReadingTimeBadge = memo(function ReadingTimeBadge({ content, className, t }: ReadingTimeBadgeProps) {
  // Calculate reading time (average 200 words per minute)
  const wordCount = content.trim().split(/\s+/).filter(word => word.length > 0).length
  const readingTimeMinutes = Math.ceil(wordCount / 200)

  const formatTime = (minutes: number) => {
    if (minutes < 1) return t.editor.stats.readingTimeLessThanOne
    if (minutes === 1) return `1 ${t.editor.stats.readingTimeMinute}`
    if (minutes < 60) return `${minutes} ${t.editor.stats.readingTimeMinute}`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0
      ? `${hours}${t.editor.stats.readingTimeHour} ${mins}${t.editor.stats.readingTimeMinute}`
      : `${hours}${t.editor.stats.readingTimeHour}`
  }

  return (
    <div className={`flex items-center gap-1.5 text-xs text-muted-foreground ${className}`}>
      <Clock className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">{t.editor.stats.readingTime}: {formatTime(readingTimeMinutes)}</span>
    </div>
  )
})
