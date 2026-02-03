'use client'

import { Clock } from 'lucide-react'
import { useRecentFiles } from '@/lib/hooks/use-recent-files'
import { useLanguage } from '@/lib/contexts/language-context'

export function RecentFiles({ onSelectFile }: { onSelectFile: (content: string) => void }) {
  const { recentFiles } = useRecentFiles()
  const { t } = useLanguage()

  if (recentFiles.length === 0) {
    return null
  }

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return t.editor.stats === undefined ? 'Just now' : '刚刚'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    return `${diffDays}d ago`
  }

  return (
    <div className="border-t pt-2 mt-2">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
        <Clock className="h-3 w-3" />
        <span>Recent files</span>
      </div>
      <div className="space-y-1">
        {recentFiles.map((file) => (
          <button
            key={file.name}
            onClick={() => onSelectFile(file.content)}
            className="w-full text-left px-2 py-1.5 rounded hover:bg-muted text-sm truncate flex items-center gap-2 group touch-manipulation"
          >
            <span className="flex-1 truncate">{file.name}</span>
            <span className="text-xs text-muted-foreground flex-shrink-0">
              {formatTimestamp(file.timestamp)}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
