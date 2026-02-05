"use client"

import { useState } from 'react'
import { HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useLanguage } from '@/lib/contexts/language-context'

export function HelpDialog() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:text-foreground"
        aria-label={t.helpDialog.title}
      >
        <HelpCircle className="h-5 w-5" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-popover text-popover-foreground border border-primary/15 rounded-lg shadow-lg p-6 max-w-3xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{t.helpDialog.title}</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground"
                aria-label={t.helpDialog.close}
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">{t.helpDialog.headings}</h3>
                <code className="bg-muted px-2 py-1 rounded text-xs"># Heading 1</code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t.helpDialog.textStyles}</h3>
                <code className="bg-muted px-2 py-1 rounded text-xs">**bold**</code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t.helpDialog.codeBlocks}</h3>
                <code className="bg-muted px-2 py-1 rounded text-xs">```javascript</code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t.helpDialog.lists}</h3>
                <code className="bg-muted px-2 py-1 rounded text-xs">- item</code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t.helpDialog.links}</h3>
                <code className="bg-muted px-2 py-1 rounded text-xs">[text](url)</code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t.helpDialog.images}</h3>
                <code className="bg-muted px-2 py-1 rounded text-xs">![alt](url)</code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t.helpDialog.quotes}</h3>
                <code className="bg-muted px-2 py-1 rounded text-xs">&gt; quote</code>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t.helpDialog.tables}</h3>
                <code className="bg-muted px-2 py-1 rounded text-xs">| col | col |</code>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
