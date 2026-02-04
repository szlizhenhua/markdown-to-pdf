'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Clock } from 'lucide-react'

interface AutosaveControlProps {
  onIntervalChange: (interval: number) => void
  currentInterval?: number
  className?: string
}

const intervals = [
  { value: 1000, label: '1s', description: 'Fast (auto-saves frequently)' },
  { value: 2000, label: '2s', description: 'Quick' },
  { value: 5000, label: '5s', description: 'Normal' },
  { value: 10000, label: '10s', description: 'Standard' },
  { value: 30000, label: '30s', description: 'Slow' },
  { value: 60000, label: '1m', description: 'Very slow' }
]

export function AutosaveControl({ onIntervalChange, currentInterval = 5000, className }: AutosaveControlProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleIntervalChange = (interval: number) => {
    onIntervalChange(interval)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Autosave interval"
        aria-label="Autosave interval"
        aria-expanded={isOpen}
      >
        <Clock className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-56 bg-popover text-popover-foreground shadow-lg rounded-lg border border-primary/15">
          <div className="p-3">
            <h3 className="text-sm font-medium mb-2">Autosave Interval</h3>
            <p className="text-xs text-muted-foreground mb-3">How often to save automatically</p>
            <div className="space-y-1">
              {intervals.map((interval) => (
                <button
                  key={interval.value}
                  onClick={() => handleIntervalChange(interval.value)}
                  className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${
                    currentInterval === interval.value
                      ? 'bg-primary/15 text-primary font-medium'
                      : 'hover:bg-accent/60'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{interval.label}</span>
                    {currentInterval === interval.value && (
                      <span className="text-primary">✓</span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">{interval.description}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
