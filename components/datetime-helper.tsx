'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'
import type { LocaleTranslations } from '@/lib/locales/types'

interface DateTimeHelperProps {
  onInsert: (dateTimeMarkdown: string) => void
  className?: string
  t: LocaleTranslations
}

export function DateTimeHelper({ onInsert, className, t }: DateTimeHelperProps) {
  const [isOpen, setIsOpen] = useState(false)

  const formatDate = (date: Date, format: string) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    switch (format) {
      case 'iso':
        return date.toISOString()
      case 'date':
        return `${year}-${month}-${day}`
      case 'time':
        return `${hours}:${minutes}:${seconds}`
      case 'datetime':
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
      case 'us':
        return `${month}/${day}/${year}`
      case 'eu':
        return `${day}.${month}.${year}`
      case 'readable':
        return date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      default:
        return `${year}-${month}-${day}`
    }
  }

  const handleInsert = (format: string) => {
    const now = new Date()
    const formatted = formatDate(now, format)
    onInsert(formatted)
    setIsOpen(false)
  }

  const formats = [
    { id: 'date', label: t.dateTime.date, example: new Date().toISOString().split('T')[0] },
    { id: 'time', label: t.dateTime.time, example: new Date().toTimeString().split(' ')[0] },
    { id: 'datetime', label: t.dateTime.dateTime, example: new Date().toISOString().replace('T', ' ').split('.')[0] },
    { id: 'iso', label: t.dateTime.iso8601, example: new Date().toISOString() },
    { id: 'us', label: t.dateTime.usFormat, example: '01/15/2025' },
    { id: 'eu', label: t.dateTime.euFormat, example: '15.01.2025' },
    { id: 'readable', label: t.dateTime.readable, example: 'Wednesday, January 15, 2025' }
  ]

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 p-0 touch-manipulation"
        title={t.dateTime.insertDateTime}
        aria-label={t.dateTime.insertDateTime}
        aria-expanded={isOpen}
      >
        <Calendar className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-64 bg-popover text-popover-foreground shadow-lg rounded-lg border border-primary/15">
          <div className="p-4 space-y-3">
            <h3 className="text-sm font-medium">{t.dateTime.insertDateTime}</h3>

            <div className="space-y-1">
              {formats.map((format) => (
                <button
                  key={format.id}
                  onClick={() => handleInsert(format.id)}
                  className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent/60 transition-colors"
                >
                  <div className="font-medium">{format.label}</div>
                  <div className="text-xs text-muted-foreground">{format.example}</div>
                </button>
              ))}
            </div>

            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              size="sm"
              className="w-full"
            >
              {t.dateTime.cancel}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
