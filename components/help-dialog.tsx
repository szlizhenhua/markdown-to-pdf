"use client"

import { useState } from 'react'
import { HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function HelpDialog() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:text-foreground"
        aria-label="Help"
      >
        <HelpCircle className="h-5 w-5" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-popover text-popover-foreground border border-primary/15 rounded-lg shadow-lg p-6 max-w-3xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Markdown Quick Reference</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Headings</h3>
                <code className="bg-muted px-2 py-1 rounded text-xs"># Heading 1</code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Text Styles</h3>
                <code className="bg-muted px-2 py-1 rounded text-xs">**bold**</code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Code Blocks</h3>
                <code className="bg-muted px-2 py-1 rounded text-xs">```javascript</code>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
