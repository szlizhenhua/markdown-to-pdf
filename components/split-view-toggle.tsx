'use client'

import { Button } from '@/components/ui/button'
import { Columns } from 'lucide-react'

interface SplitViewToggleProps {
  isVertical: boolean
  onToggle: () => void
  className?: string
}

export function SplitViewToggle({ isVertical, onToggle, className }: SplitViewToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      className={`h-8 px-2 touch-manipulation text-xs ${className}`}
      title={isVertical ? 'Switch to side by side view' : 'Switch to vertical view'}
      aria-label={isVertical ? 'Switch to side by side view' : 'Switch to vertical view'}
    >
      <Columns className={`h-4 w-4 ${isVertical ? '' : 'rotate-90'}`} />
      <span className="hidden sm:inline ml-1">
        {isVertical ? 'Vertical' : 'Side by Side'}
      </span>
    </Button>
  )
}
