'use client'

import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { useToast } from '@/lib/hooks/use-toast'

interface LineOperationsProps {
  content: string
  onReplace: (oldContent: string, newContent: string) => void
  className?: string
}

export function LineOperations({ content, onReplace, className }: LineOperationsProps) {
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
        title="Duplicate line"
        aria-label="Duplicate line"
      >
        <Copy className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={deleteLine}
        className="h-8 px-2 touch-manipulation text-xs"
        title="Delete line"
        aria-label="Delete line"
      >
        Delete Line
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={joinLines}
        className="h-8 px-2 touch-manipulation text-xs"
        title="Join all lines"
        aria-label="Join all lines"
      >
        Join
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={sortLinesAsc}
        className="h-8 px-2 touch-manipulation text-xs"
        title="Sort lines A-Z"
        aria-label="Sort lines A-Z"
      >
        Sort ↑
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={sortLinesDesc}
        className="h-8 px-2 touch-manipulation text-xs"
        title="Sort lines Z-A"
        aria-label="Sort lines Z-A"
      >
        Sort ↓
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={reverseLines}
        className="h-8 px-2 touch-manipulation text-xs"
        title="Reverse lines"
        aria-label="Reverse lines"
      >
        Reverse
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={removeEmptyLines}
        className="h-8 px-2 touch-manipulation text-xs"
        title="Remove empty lines"
        aria-label="Remove empty lines"
      >
        Clean
      </Button>
    </div>
  )
}
