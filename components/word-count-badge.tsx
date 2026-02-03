'use client'

import { memo } from 'react'

interface WordCountBadgeProps {
  content: string
  className?: string
}

export const WordCountBadge = memo(function WordCountBadge({ content, className }: WordCountBadgeProps) {
  // Count words
  const wordCount = content.trim().split(/\s+/).filter(word => word.length > 0).length

  // Count characters
  const charCount = content.length

  // Format large numbers
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }

  return (
    <div className={`flex items-center gap-2 text-xs text-muted-foreground ${className}`}>
      <span className="hidden sm:inline">{formatNumber(wordCount)} words</span>
      <span className="hidden sm:inline">·</span>
      <span>{formatNumber(charCount)} chars</span>
    </div>
  )
})
