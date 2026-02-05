'use client'

import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { useToast } from '@/lib/hooks/use-toast'
import type { LocaleTranslations } from '@/lib/locales/types'

interface LineOperationsProps {
  content: string
  onReplace: (oldContent: string, newContent: string) => void
  className?: string
  t: LocaleTranslations
}

export function LineOperations({ content, onReplace, className, t }: LineOperationsProps) {
  const { addToast } = useToast()

  const getCurrentLine = () => {
    const lines = content.split('\n')
    // For simplicity, we'll operate on all selected lines or the last line
    return lines
  }

  const duplicateLine = () => {
    const lines = getCurrentLine()
    if (lines.length === 0) return

    // Duplicate the last non-empty line
    let lastLineIndex = lines.length - 1
    while (lastLineIndex >= 0 && lines[lastLineIndex].trim() === '') {
      lastLineIndex--
    }

    if (lastLineIndex >= 0) {
      const lineToDuplicate = lines[lastLineIndex]
      lines.splice(lastLineIndex + 1, 0, lineToDuplicate)
      onReplace(content, lines.join('\n'))
      addToast({
        type: 'success',
        title: 'Line duplicated',
        message: `Duplicated: "${lineToDuplicate}"`
      })
    }
  }

  const deleteLine = () => {
    const lines = getCurrentLine()
    if (lines.length === 0) return

    // Remove the last non-empty line
    let lastLineIndex = lines.length - 1
    while (lastLineIndex >= 0 && lines[lastLineIndex].trim() === '') {
      lastLineIndex--
    }

    if (lastLineIndex >= 0) {
      const deletedLine = lines[lastLineIndex]
      lines.splice(lastLineIndex, 1)
      onReplace(content, lines.join('\n'))
      addToast({
        type: 'success',
        title: 'Line deleted',
        message: `Deleted: "${deletedLine}"`
      })
    }
  }

  const joinLines = () => {
    const lines = content.split('\n')
    const newContent = lines.map(line => line.trim()).join(' ')
    onReplace(content, newContent)
    addToast({
      type: 'success',
      title: 'Lines joined',
      message: 'All lines have been joined into one'
    })
  }

  const sortLinesAsc = () => {
    const lines = content.split('\n')
    const sorted = lines.sort((a, b) => a.localeCompare(b))
    onReplace(content, sorted.join('\n'))
    addToast({
      type: 'success',
      title: 'Lines sorted',
      message: 'Sorted in ascending order'
    })
  }

  const sortLinesDesc = () => {
    const lines = content.split('\n')
    const sorted = lines.sort((a, b) => b.localeCompare(a))
    onReplace(content, sorted.join('\n'))
    addToast({
      type: 'success',
      title: 'Lines sorted',
      message: 'Sorted in descending order'
    })
  }

  const reverseLines = () => {
    const lines = content.split('\n')
    const reversed = lines.reverse()
    onReplace(content, reversed.join('\n'))
    addToast({
      type: 'success',
      title: 'Lines reversed',
      message: 'Line order has been reversed'
    })
  }

  const removeEmptyLines = () => {
    const lines = content.split('\n')
    const filtered = lines.filter(line => line.trim() !== '')
    onReplace(content, filtered.join('\n'))
    const removedCount = lines.length - filtered.length
    addToast({
      type: 'success',
      title: 'Empty lines removed',
      message: `Removed ${removedCount} empty line(s)`
    })
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={duplicateLine}
        className="h-8 w-8 p-0 touch-manipulation"
        title={t.toolbar.lineOpsActions.duplicate}
        aria-label={t.toolbar.lineOpsActions.duplicate}
      >
        <Copy className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={deleteLine}
        className="h-8 px-2 touch-manipulation text-xs"
        title={t.toolbar.lineOpsActions.delete}
        aria-label={t.toolbar.lineOpsActions.delete}
      >
        {t.toolbar.lineOpsActions.delete}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={joinLines}
        className="h-8 px-2 touch-manipulation text-xs"
        title={t.toolbar.lineOpsActions.join}
        aria-label={t.toolbar.lineOpsActions.join}
      >
        {t.toolbar.lineOpsActions.join}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={sortLinesAsc}
        className="h-8 px-2 touch-manipulation text-xs"
        title={t.toolbar.lineOpsActions.sortAsc}
        aria-label={t.toolbar.lineOpsActions.sortAsc}
      >
        {t.toolbar.lineOpsActions.sortAsc}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={sortLinesDesc}
        className="h-8 px-2 touch-manipulation text-xs"
        title={t.toolbar.lineOpsActions.sortDesc}
        aria-label={t.toolbar.lineOpsActions.sortDesc}
      >
        {t.toolbar.lineOpsActions.sortDesc}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={reverseLines}
        className="h-8 px-2 touch-manipulation text-xs"
        title={t.toolbar.lineOpsActions.reverse}
        aria-label={t.toolbar.lineOpsActions.reverse}
      >
        {t.toolbar.lineOpsActions.reverse}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={removeEmptyLines}
        className="h-8 px-2 touch-manipulation text-xs"
        title={t.toolbar.lineOpsActions.clean}
        aria-label={t.toolbar.lineOpsActions.clean}
      >
        {t.toolbar.lineOpsActions.clean}
      </Button>
    </div>
  )
}
