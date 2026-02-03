'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Monitor } from 'lucide-react'

interface FocusModeProps {
  className?: string
}

export function FocusMode({ className }: FocusModeProps) {
  const [isFocusMode, setIsFocusMode] = useState(false)

  useEffect(() => {
    if (isFocusMode) {
      document.body.classList.add('focus-mode')
      // Hide non-essential elements
      const elements = document.querySelectorAll('.no-print, header, .no-focus')
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.opacity = '0'
          el.style.pointerEvents = 'none'
        }
      })
    } else {
      document.body.classList.remove('focus-mode')
      // Restore all elements
      const elements = document.querySelectorAll('.no-print, header, .no-focus')
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.opacity = ''
          el.style.pointerEvents = ''
        }
      })
    }

    return () => {
      document.body.classList.remove('focus-mode')
      const elements = document.querySelectorAll('.no-print, header, .no-focus')
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.opacity = ''
          el.style.pointerEvents = ''
        }
      })
    }
  }, [isFocusMode])

  // Keyboard shortcut: Ctrl/Cmd + Shift + F
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'F') {
        e.preventDefault()
        setIsFocusMode(!isFocusMode)
      }
      // Escape to exit focus mode
      if (e.key === 'Escape' && isFocusMode) {
        setIsFocusMode(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFocusMode])

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsFocusMode(!isFocusMode)}
        className={`h-8 px-2 touch-manipulation text-xs ${isFocusMode ? 'bg-green-600 text-white hover:bg-green-700' : ''} ${className}`}
        title={isFocusMode ? 'Exit focus mode (Esc)' : 'Focus mode (Ctrl+Shift+F)'}
        aria-label={isFocusMode ? 'Exit focus mode' : 'Enter focus mode'}
        aria-pressed={isFocusMode}
      >
        <Monitor className="h-4 w-4 mr-1" />
        {isFocusMode ? 'Focused' : 'Focus'}
      </Button>

      {isFocusMode && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
          Focus Mode Active - Press Esc to exit
        </div>
      )}
    </>
  )
}
