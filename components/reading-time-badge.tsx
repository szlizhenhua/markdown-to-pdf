'use client'

import { memo } from 'react'
import { Clock } from 'lucide-react'

interface ReadingTimeBadgeProps {
  content: string
  className?: string
}

export const ReadingTimeBadge = memo(function ReadingTimeBadge({ content, className }: ReadingTimeBadgeProps) {
  // Calculate reading time (average 200 words per minute)
  const wordCount = content.trim().split(/\s+/).filter(word => word.length > 0).length
  const readingTimeMinutes = Math.ceil(wordCount / 200)

  const formatTime = (minutes: number) => {
    if (minutes < 1) return '< 1 min'
    if (minutes === 1) return '1 min'
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`
  }

  return (
    <div className={`flex items-center gap-1.5 text-xs text-muted-foreground ${className}`}>
      <Clock className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">{formatTime(readingTimeMinutes)} read</span>
    </div>
  )
})
