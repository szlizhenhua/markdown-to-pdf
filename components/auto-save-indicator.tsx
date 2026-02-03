'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, Loader2, AlertCircle } from 'lucide-react'

export type SaveStatus = 'saved' | 'saving' | 'error' | 'unsaved'

interface AutoSaveIndicatorProps {
  status: SaveStatus
  lastSaved?: Date
}

export function AutoSaveIndicator({ status, lastSaved }: AutoSaveIndicatorProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (status === 'saving' || status === 'error') {
      setVisible(true)
    } else if (status === 'saved') {
      setVisible(true)
      const timer = setTimeout(() => setVisible(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [status])

  if (!visible) return null

  const getStatusConfig = () => {
    switch (status) {
      case 'saved':
        return {
          icon: <CheckCircle className="h-3 w-3" />,
          text: lastSaved ? `Saved at ${lastSaved.toLocaleTimeString()}` : 'Saved',
          className: 'text-green-600 dark:text-green-400'
        }
      case 'saving':
        return {
          icon: <Loader2 className="h-3 w-3 animate-spin" />,
          text: 'Saving...',
          className: 'text-muted-foreground'
        }
      case 'error':
        return {
          icon: <AlertCircle className="h-3 w-3" />,
          text: 'Save failed',
          className: 'text-red-600 dark:text-red-400'
        }
      case 'unsaved':
        return {
          icon: <span className="h-3 w-3 rounded-full border-2 border-current" />,
          text: 'Unsaved changes',
          className: 'text-amber-600 dark:text-amber-400'
        }
    }
  }

  const config = getStatusConfig()

  return (
    <div className={`flex items-center gap-1.5 text-xs ${config.className} transition-opacity duration-300`}>
      {config.icon}
      <span className="hidden sm:inline">{config.text}</span>
    </div>
  )
}
