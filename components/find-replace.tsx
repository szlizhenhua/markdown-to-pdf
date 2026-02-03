'use client'

import { useState, useEffect } from 'react'
import { Search, Replace, X, ChevronUp, ChevronDown, ArrowUp, ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface FindReplaceProps {
  content: string
  onReplace: (oldContent: string, newContent: string) => void
  onClose: () => void
}

export function FindReplace({ content, onReplace, onClose }: FindReplaceProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [replaceTerm, setReplaceTerm] = useState('')
  const [caseSensitive, setCaseSensitive] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [totalMatches, setTotalMatches] = useState(0)
  const [showReplace, setShowReplace] = useState(false)

  useEffect(() => {
    if (!searchTerm) {
      setTotalMatches(0)
      setCurrentIndex(-1)
      return
    }

    const flags = caseSensitive ? 'g' : 'gi'
    const escapedSearch = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(escapedSearch, flags)

    const matches = content.match(regex)
    setTotalMatches(matches ? matches.length : 0)
    setCurrentIndex(matches && matches.length > 0 ? 0 : -1)
  }, [searchTerm, caseSensitive, content])

  const findNext = () => {
    if (totalMatches === 0) return
    setCurrentIndex((prev) => (prev + 1) % totalMatches)
  }

  const findPrevious = () => {
    if (totalMatches === 0) return
    setCurrentIndex((prev) => (prev - 1 + totalMatches) % totalMatches)
  }

  const replaceCurrent = () => {
    if (currentIndex === -1 || !searchTerm) return

    const flags = caseSensitive ? 'g' : 'gi'
    const escapedSearch = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(escapedSearch, flags)

    let matchCount = 0
    const newContent = content.replace(regex, (match) => {
      if (matchCount === currentIndex) {
        matchCount++
        return replaceTerm
      }
      matchCount++
      return match
    })

    onReplace(content, newContent)
    setCurrentIndex((prev) => Math.max(-1, prev - 1))
  }

  const replaceAll = () => {
    if (!searchTerm || totalMatches === 0) return

    const flags = caseSensitive ? 'g' : 'gi'
    const escapedSearch = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(escapedSearch, flags)

    const newContent = content.replace(regex, replaceTerm)
    onReplace(content, newContent)
    setTotalMatches(0)
    setCurrentIndex(-1)
  }

  return (
    <div className="border-b bg-muted/30 p-2 space-y-2">
      <div className="flex items-center gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Find..."
            className="pl-8 h-8 text-sm"
          />
        </div>
        {totalMatches > 0 && (
          <span className="text-xs text-muted-foreground min-w-[60px] text-center">
            {currentIndex + 1} / {totalMatches}
          </span>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={findPrevious}
          disabled={totalMatches === 0}
          className="h-8 w-8 p-0"
          title="Previous match"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={findNext}
          disabled={totalMatches === 0}
          className="h-8 w-8 p-0"
          title="Next match"
        >
          <ArrowDown className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCaseSensitive(!caseSensitive)}
          className={`h-8 px-2 text-xs ${caseSensitive ? 'bg-accent' : ''}`}
          title="Case sensitive"
        >
          Aa
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="h-8 w-8 p-0"
          title="Close"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowReplace(!showReplace)}
          className="h-8 gap-1 px-2 text-xs"
        >
          <Replace className="h-3 w-3" />
          {showReplace ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </Button>
        {showReplace && (
          <>
            <div className="flex-1 relative">
              <Input
                type="text"
                value={replaceTerm}
                onChange={(e) => setReplaceTerm(e.target.value)}
                placeholder="Replace with..."
                className="h-8 text-sm"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={replaceCurrent}
              disabled={currentIndex === -1}
              className="h-8 px-3 text-xs"
            >
              Replace
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={replaceAll}
              disabled={totalMatches === 0}
              className="h-8 px-3 text-xs"
            >
              Replace All
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
