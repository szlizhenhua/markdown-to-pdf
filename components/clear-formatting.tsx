'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Eraser } from 'lucide-react'

interface ClearFormattingProps {
  onClear: () => void
  className?: string
}

export function ClearFormatting({ onClear, className }: ClearFormattingProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleClear = () => {
    onClear()
    setIsOpen(false)
    setShowConfirm(false)
  }

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Clear formatting"
        aria-label="Clear formatting"
        aria-expanded={isOpen}
      >
        <Eraser className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-72 bg-white dark:bg-gray-800 shadow-lg rounded-lg border-2 border-gray-200 dark:border-gray-700">
          <div className="p-4 space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Clear Options</h3>
              <p className="text-xs text-muted-foreground">
                Choose what to clear from your document
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  onClear()
                  setIsOpen(false)
                }}
                className="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-600"
              >
                <div className="font-medium">Clear All Content</div>
                <div className="text-xs text-muted-foreground">Remove everything and start fresh</div>
              </button>

              <button
                onClick={() => {
                  setShowConfirm(true)
                }}
                className="w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-600"
              >
                <div className="font-medium">Reset to Default</div>
                <div className="text-xs text-muted-foreground">Restore default template content</div>
              </button>
            </div>

            {showConfirm && (
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
                <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
                  Are you sure you want to reset to default? This will replace your current content.
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={handleClear}
                    size="sm"
                    className="flex-1 bg-yellow-600 hover:bg-yellow-700"
                  >
                    Yes, Reset
                  </Button>
                  <Button
                    onClick={() => setShowConfirm(false)}
                    variant="outline"
                    size="sm"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              size="sm"
              className="w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
