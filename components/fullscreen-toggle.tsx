'use client'

import { useState, useEffect } from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FullscreenToggleProps {
  targetId?: string
  className?: string
}

export function FullscreenToggle({ targetId, className }: FullscreenToggleProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    // Check fullscreen state on change
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const toggleFullscreen = () => {
    const target = targetId ? document.getElementById(targetId) : document.documentElement

    if (!document.fullscreenElement) {
      target?.requestFullscreen().catch(err => {
        console.error('Failed to enter fullscreen:', err)
      })
    } else {
      document.exitFullscreen().catch(err => {
        console.error('Failed to exit fullscreen:', err)
      })
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleFullscreen}
      className={className}
      aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      title={isFullscreen ? 'Exit fullscreen (Esc)' : 'Enter fullscreen'}
    >
      {isFullscreen ? (
        <Minimize2 className="h-4 w-4" />
      ) : (
        <Maximize2 className="h-4 w-4" />
      )}
    </Button>
  )
}
