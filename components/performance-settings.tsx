'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Gauge, Zap, Database, HardDrive } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

interface PerformanceSettingsProps {
  className?: string
  content?: string
  onDebounceChange?: (ms: number) => void
  currentDebounce?: number
}

export function PerformanceSettings({
  className,
  content = '',
  onDebounceChange,
  currentDebounce = 300
}: PerformanceSettingsProps) {
  const [open, setOpen] = useState(false)
  const [stats, setStats] = useState({
    renderTime: 0,
    contentSize: 0,
    lineCount: 0,
    wordCount: 0
  })
  const [debounceValue, setDebounceValue] = useState(currentDebounce)

  // Calculate performance metrics
  useEffect(() => {
    const start = performance.now()

    // Simulate render time measurement
    const lines = content.split('\n')
    const words = content.trim().split(/\s+/).filter(w => w.length > 0)

    requestAnimationFrame(() => {
      const end = performance.now()
      setStats({
        renderTime: end - start,
        contentSize: new Blob([content]).size,
        lineCount: lines.length,
        wordCount: words.length
      })
    })
  }, [content])

  const handleDebounceChange = (value: number[]) => {
    const newValue = value[0]
    setDebounceValue(newValue)
    onDebounceChange?.(newValue)
  }

  const clearCaches = () => {
    // Clear various caches
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => caches.delete(name))
      })
    }
    // Clear localStorage (except markdown content)
    const markdownContent = localStorage.getItem('markdown-content')
    const markdownHistory = localStorage.getItem('markdown-history')
    localStorage.clear()
    if (markdownContent) localStorage.setItem('markdown-content', markdownContent)
    if (markdownHistory) localStorage.setItem('markdown-history', markdownHistory)

    // Force reload
    window.location.reload()
  }

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
  }

  const getPerformanceRating = () => {
    if (stats.renderTime < 16) return { label: 'Excellent', color: 'text-green-500' }
    if (stats.renderTime < 50) return { label: 'Good', color: 'text-blue-500' }
    if (stats.renderTime < 100) return { label: 'Fair', color: 'text-yellow-500' }
    return { label: 'Slow', color: 'text-red-500' }
  }

  const performanceRating = getPerformanceRating()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 p-0 touch-manipulation ${className}`}
          title="Performance settings"
          aria-label="Performance settings"
        >
          <Gauge className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gauge className="h-5 w-5 text-primary" />
            Performance Settings
          </DialogTitle>
          <DialogDescription>
            Optimize the editor for better performance
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Performance Stats */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Performance Metrics
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-muted/50">
                <div className="text-xs text-muted-foreground mb-1">Render Time</div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">
                    {stats.renderTime.toFixed(1)}ms
                  </span>
                  <Badge variant="outline" className={performanceRating.color}>
                    {performanceRating.label}
                  </Badge>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <div className="text-xs text-muted-foreground mb-1">Content Size</div>
                <div className="text-lg font-semibold">
                  {formatBytes(stats.contentSize)}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <div className="text-xs text-muted-foreground mb-1">Lines</div>
                <div className="text-lg font-semibold">
                  {stats.lineCount.toLocaleString()}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-muted/50">
                <div className="text-xs text-muted-foreground mb-1">Words</div>
                <div className="text-lg font-semibold">
                  {stats.wordCount.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Debounce Setting */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="debounce">Preview Debounce</Label>
              <span className="text-sm text-muted-foreground">{debounceValue}ms</span>
            </div>
            <Slider
              id="debounce"
              value={[debounceValue]}
              onValueChange={handleDebounceChange}
              min={0}
              max={1000}
              step={50}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Instant (0ms)</span>
              <span>Fast (100ms)</span>
              <span>Normal (300ms)</span>
              <span>Slow (1000ms)</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Lower values update preview faster but may impact performance on large documents.
            </p>
          </div>

          {/* Storage Info */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Storage
            </Label>
            <div className="p-3 rounded-lg bg-muted/50 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">LocalStorage Used</span>
                <span className="font-medium">
                  {formatBytes(
                    JSON.stringify(localStorage).length)
                  }
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{
                    width: `${(JSON.stringify(localStorage).length / 5_000_000) * 100}%`
                  }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Browser localStorage typically has a 5-10MB limit
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={clearCaches}
            >
              <HardDrive className="h-4 w-4 mr-2" />
              Clear Caches & Reset
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Clears caches except your document content and history
            </p>
          </div>

          {/* Performance Tips */}
          <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
            <div className="text-sm font-medium mb-2">Performance Tips</div>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• For large documents, increase debounce delay</li>
              <li>• Disable live preview when editing very large files</li>
              <li>• Use focus mode to reduce rendered elements</li>
              <li>• Clear caches periodically if experiencing slowdowns</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
