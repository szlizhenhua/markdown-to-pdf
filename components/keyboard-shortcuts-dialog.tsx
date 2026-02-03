'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Keyboard } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'

interface ShortcutCategory {
  name: string
  icon?: string
  shortcuts: {
    keys: string[]
    description: string
    isNew?: boolean
  }[]
}

const shortcutCategories: ShortcutCategory[] = [
  {
    name: 'File Operations',
    icon: '📁',
    shortcuts: [
      { keys: ['⌘S', 'Ctrl+S'], description: 'Export as PDF', isNew: true },
      { keys: ['⌘P', 'Ctrl+P'], description: 'Toggle preview' },
      { keys: ['⌘O', 'Ctrl+O'], description: 'Open file' },
      { keys: ['⌘⇧E', 'Ctrl+Shift+E'], description: 'Export as .md file', isNew: true },
      { keys: ['⌘⇧N', 'Ctrl+Shift+N'], description: 'New document', isNew: true },
    ]
  },
  {
    name: 'Editing',
    icon: '✏️',
    shortcuts: [
      { keys: ['⌘Z', 'Ctrl+Z'], description: 'Undo' },
      { keys: ['⌘⇧Z', 'Ctrl+Y', 'Ctrl+⇧Z'], description: 'Redo' },
      { keys: ['⌘A', 'Ctrl+A'], description: 'Select all' },
      { keys: ['⌘/', 'Ctrl+/'], description: 'Focus editor' },
      { keys: ['Tab'], description: 'Insert tab / indent' },
      { keys: ['⇧Tab', 'Shift+Tab'], description: 'Outdent' },
    ]
  },
  {
    name: 'Search & Replace',
    icon: '🔍',
    shortcuts: [
      { keys: ['⌘F', 'Ctrl+F'], description: 'Find' },
      { keys: ['⌘H', 'Ctrl+H'], description: 'Find and Replace' },
      { keys: ['F3', '⌘G', 'Ctrl+G'], description: 'Find next' },
      { keys: ['⇧F3', '⌘⇧G', 'Ctrl+Shift+G'], description: 'Find previous' },
    ]
  },
  {
    name: 'View & Display',
    icon: '👁️',
    shortcuts: [
      { keys: ['F11'], description: 'Toggle fullscreen', isNew: true },
      { keys: ['⌘⇧F', 'Ctrl+Shift+F'], description: 'Toggle focus mode', isNew: true },
      { keys: ['⌘⇧T', 'Ctrl+Shift+T'], description: 'Toggle theme (dark/light)', isNew: true },
      { keys: ['⌘\\', 'Ctrl+\\'], description: 'Toggle split view', isNew: true },
      { keys: ['⌘+'], description: 'Zoom in preview', isNew: true },
      { keys: ['⌘-'], description: 'Zoom out preview', isNew: true },
      { keys: ['⌘0'], description: 'Reset zoom', isNew: true },
    ]
  },
  {
    name: 'Navigation',
    icon: '🧭',
    shortcuts: [
      { keys: ['⌘↑', 'Ctrl+↑'], description: 'Scroll to top' },
      { keys: ['⌘↓', 'Ctrl+↓'], description: 'Scroll to bottom' },
      { keys: ['Home'], description: 'Go to line start' },
      { keys: ['End'], description: 'Go to line end' },
      { keys: ['⌘←', 'Ctrl+←'], description: 'Word left' },
      { keys: ['⌘→', 'Ctrl+→'], description: 'Word right' },
    ]
  },
  {
    name: 'Markdown Formatting',
    icon: '📝',
    shortcuts: [
      { keys: ['⌘B', 'Ctrl+B'], description: 'Bold (**text**)' },
      { keys: ['⌘I', 'Ctrl+I'], description: 'Italic (*text*)' },
      { keys: ['⌘K', 'Ctrl+K'], description: 'Insert link' },
      { keys: ['⌘⇧K', 'Ctrl+Shift+K'], description: 'Insert image', isNew: true },
      { keys: ['⌘⇧C', 'Ctrl+Shift+C'], description: 'Insert code block', isNew: true },
      { keys: ['⌘⇧X', 'Ctrl+Shift+X'], description: 'Insert strikethrough', isNew: true },
      { keys: ['⌘⇧L', 'Ctrl+Shift+L'], description: 'Insert list', isNew: true },
      { keys: ['⌘#'], description: 'Insert heading', isNew: true },
    ]
  },
  {
    name: 'Block Formatting',
    icon: '📦',
    shortcuts: [
      { keys: ['⌘⇧1', 'Ctrl+Shift+1'], description: 'Heading 1', isNew: true },
      { keys: ['⌘⇧2', 'Ctrl+Shift+2'], description: 'Heading 2', isNew: true },
      { keys: ['⌘⇧3', 'Ctrl+Shift+3'], description: 'Heading 3', isNew: true },
      { keys: ['⌘⇧>'], description: 'Blockquote', isNew: true },
      { keys: ['⌘⇧O'], description: 'Ordered list', isNew: true },
      { keys: ['⌘⇧U'], description: 'Bullet list', isNew: true },
    ]
  },
  {
    name: 'Editor Actions',
    icon: '⚡',
    shortcuts: [
      { keys: ['⌘⇧H', 'Ctrl+Shift+H'], description: 'Open history panel', isNew: true },
      { keys: ['⌘⇧A', 'Ctrl+Shift+A'], description: 'Open AI assistant', isNew: true },
      { keys: ['⌘⇧S', 'Ctrl+Shift+S'], description: 'Open snippet library', isNew: true },
      { keys: ['⌘⇧P'], description: 'Print preview', isNew: true },
      { keys: ['⌘⇧D'], description: 'Typography controls', isNew: true },
    ]
  },
  {
    name: 'System',
    icon: '⌨️',
    shortcuts: [
      { keys: ['Esc'], description: 'Close dialogs / Exit modes' },
      { keys: ['⌘?'], description: 'Show keyboard shortcuts' },
      { keys: ['⌘.'], description: 'Open settings', isNew: true },
    ]
  }
]

interface KeyboardShortcutsDialogProps {
  className?: string
}

export function KeyboardShortcutsDialog({ className }: KeyboardShortcutsDialogProps) {
  const [open, setOpen] = useState(false)

  // Keyboard shortcut to open dialog: Ctrl/Cmd + ?
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '?') {
        e.preventDefault()
        setOpen(!open)
      }
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const newShortcutsCount = shortcutCategories.reduce(
    (count, category) =>
      count + category.shortcuts.filter(s => s.isNew).length,
    0
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 p-0 touch-manipulation relative ${className}`}
          title="Keyboard shortcuts (Ctrl+?)"
          aria-label="Keyboard shortcuts"
        >
          <Keyboard className="h-4 w-4" />
          {newShortcutsCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {newShortcutsCount}
            </span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Keyboard className="h-5 w-5 text-primary" />
            Keyboard Shortcuts
            {newShortcutsCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {newShortcutsCount} new
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription>
            Master these shortcuts to boost your productivity
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-6 pr-4">
            {shortcutCategories.map((category) => (
              <div key={category.name}>
                <div className="flex items-center gap-2 mb-3">
                  {category.icon && <span className="text-lg">{category.icon}</span>}
                  <h3 className="text-sm font-semibold">{category.name}</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {category.shortcuts.map((shortcut) => (
                    <div
                      key={shortcut.description}
                      className="flex items-center justify-between py-2 px-3 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors group"
                    >
                      <span className="text-sm flex items-center gap-2">
                        {shortcut.description}
                        {shortcut.isNew && (
                          <Badge variant="secondary" className="text-[10px] px-1 py-0">
                            New
                          </Badge>
                        )}
                      </span>
                      <div className="flex gap-1 flex-wrap justify-end">
                        {shortcut.keys.map((key) => (
                          <kbd
                            key={key}
                            className="px-2 py-1 text-xs bg-background border rounded font-mono shadow-sm group-hover:shadow-md transition-shadow"
                          >
                            {key}
                          </kbd>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground">
            💡 Pro tip: Press <kbd className="px-1 py-0.5 bg-background border rounded text-xs">Ctrl/Cmd + ?</kbd> anytime to open this help
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
