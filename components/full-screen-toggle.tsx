'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Maximize2, Minimize2 } from 'lucide-react'

interface FullScreenToggleProps {
  className?: string
  targetRef?: React.RefObject<HTMLElement>
}

export function FullScreenToggle({ className, targetRef }: FullScreenToggleProps) {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // If targetRef is provided, use it; otherwise, we'll handle document-level fullscreen
    if (targetRef?.current) {
      containerRef.current = targetRef.current
    }
  }, [targetRef])

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullScreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
    }
  }, [])

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      // If we have a specific container, use it; otherwise use document.documentElement
      const element = containerRef.current || document.documentElement
      element.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable fullscreen:', err)
      })
    } else {
      document.exitFullscreen()
    }
  }

  // Keyboard shortcut: F11 or Ctrl/Cmd + Shift + F
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // F11 - but prevent default browser behavior
      if (e.key === 'F11') {
        e.preventDefault()
        toggleFullScreen()
      }
      // Ctrl/Cmd + Shift + F (only if not already used by focus mode)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'f') {
        e.preventDefault()
        toggleFullScreen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleFullScreen}
      className={`h-8 w-8 p-0 touch-manipulation ${isFullScreen ? 'bg-accent' : ''} ${className}`}
      title={isFullScreen ? 'Exit fullscreen (F11)' : 'Enter fullscreen (F11)'}
      aria-label={isFullScreen ? 'Exit fullscreen' : 'Enter fullscreen'}
    >
      {isFullScreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
    </Button>
  )
}
