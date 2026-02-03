'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ZoomIn, ZoomOut } from 'lucide-react'

interface ZoomControlProps {
  className?: string
  onZoomChange?: (zoom: number) => void
}

export function ZoomControl({ className, onZoomChange }: ZoomControlProps) {
  const [zoom, setZoom] = useState(100)

  const handleZoomIn = () => {
    const newZoom = Math.min(zoom + 10, 200)
    setZoom(newZoom)
    onZoomChange?.(newZoom)
  }

  const handleZoomOut = () => {
    const newZoom = Math.max(zoom - 10, 50)
    setZoom(newZoom)
    onZoomChange?.(newZoom)
  }

  const handleReset = () => {
    setZoom(100)
    onZoomChange?.(100)
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleZoomOut}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Zoom out"
        aria-label="Zoom out"
      >
        <ZoomOut className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleReset}
        className="h-8 px-2 touch-manipulation text-xs"
        title="Reset zoom"
        aria-label="Reset zoom"
      >
        {zoom}%
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleZoomIn}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Zoom in"
        aria-label="Zoom in"
      >
        <ZoomIn className="h-4 w-4" />
      </Button>
    </div>
  )
}
