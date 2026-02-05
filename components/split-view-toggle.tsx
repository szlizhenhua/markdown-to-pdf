'use client'

import { Button } from '@/components/ui/button'
import { Columns } from 'lucide-react'
import type { LocaleTranslations } from '@/lib/locales/types'

interface SplitViewToggleProps {
  isVertical: boolean
  onToggle: () => void
  className?: string
  t: LocaleTranslations
}

export function SplitViewToggle({ isVertical, onToggle, className, t }: SplitViewToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      className={`h-8 px-2 touch-manipulation text-xs ${className}`}
      title={isVertical ? t.toolbar.splitView.switchToSideBySide : t.toolbar.splitView.switchToVertical}
      aria-label={isVertical ? t.toolbar.splitView.switchToSideBySide : t.toolbar.splitView.switchToVertical}
    >
      <Columns className={`h-4 w-4 ${isVertical ? '' : 'rotate-90'}`} />
      <span className="hidden sm:inline ml-1">
        {isVertical ? t.toolbar.splitView.vertical : t.toolbar.splitView.sideBySide}
      </span>
    </Button>
  )
}
