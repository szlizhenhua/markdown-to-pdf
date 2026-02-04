'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Table } from 'lucide-react'

interface TableGeneratorProps {
  onInsert: (tableMarkdown: string) => void
  className?: string
}

export function TableGenerator({ onInsert, className }: TableGeneratorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [rows, setRows] = useState(3)
  const [cols, setCols] = useState(3)
  const [hasHeader, setHasHeader] = useState(true)

  const handleInsertTable = () => {
    let table = ''

    if (hasHeader) {
      // Header row
      table += '| ' + Array(cols).fill('Header').join(' | ') + ' |\n'
      // Separator
      table += '| ' + Array(cols).fill('---').join(' | ') + ' |\n'
      // Start from row 2 since we have a header
      for (let i = 1; i < rows; i++) {
        table += '| ' + Array(cols).fill('Cell').join(' | ') + ' |\n'
      }
    } else {
      // No header, just regular rows
      for (let i = 0; i < rows; i++) {
        table += '| ' + Array(cols).fill('Cell').join(' | ') + ' |\n'
      }
    }

    onInsert(table)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Insert table"
        aria-label="Insert table"
        aria-expanded={isOpen}
      >
        <Table className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-64 bg-popover text-popover-foreground shadow-lg rounded-lg border border-primary/15">
          <div className="p-4 space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Rows: {rows}</label>
              <input
                type="range"
                min="1"
                max="10"
                value={rows}
                onChange={(e) => setRows(parseInt(e.target.value))}
                className="w-full h-2 bg-muted/60 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Columns: {cols}</label>
              <input
                type="range"
                min="1"
                max="8"
                value={cols}
                onChange={(e) => setCols(parseInt(e.target.value))}
                className="w-full h-2 bg-muted/60 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="hasHeader"
                checked={hasHeader}
                onChange={(e) => setHasHeader(e.target.checked)}
                className="w-4 h-4 rounded border border-border"
              />
              <label htmlFor="hasHeader" className="text-sm">
                Include header row
              </label>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleInsertTable}
                size="sm"
                className="flex-1"
              >
                Insert Table
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                size="sm"
              >
                Cancel
              </Button>
            </div>

            {/* Preview */}
            <div className="mt-4 p-3 bg-muted/40 rounded border text-xs font-mono overflow-x-auto">
              <div className="text-muted-foreground mb-2">Preview:</div>
              <pre className="whitespace-pre-wrap break-all">
                {hasHeader ? (
                  <>
                    {'| ' + Array(cols).fill('Header').join(' | ') + ' |'}
                    {'\n'}
                    {'| ' + Array(cols).fill('---').join(' | ') + ' |'}
                    {'\n'}
                    {Array(Math.max(0, rows - 1)).fill(0).map((_, i) => (
                      <span key={i}>
                        {'| ' + Array(cols).fill('Cell').join(' | ') + ' |'}
                        {'\n'}
                      </span>
                    ))}
                  </>
                ) : (
                  Array(rows).fill(0).map((_, i) => (
                    <span key={i}>
                      {'| ' + Array(cols).fill('Cell').join(' | ') + ' |'}
                      {'\n'}
                    </span>
                  ))
                )}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
