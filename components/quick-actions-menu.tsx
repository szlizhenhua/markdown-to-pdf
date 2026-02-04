'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Zap,
  FileText,
  Download,
  Printer,
  Copy,
  Trash2,
  Eye,
  RotateCcw,
  Languages,
  FileDown,
  Wand2
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface QuickActionsMenuProps {
  className?: string
  onExportPDF?: () => void
  onExportMarkdown?: () => void
  onPrint?: () => void
  onCopyToClipboard?: () => void
  onClear?: () => void
  onFormatDocument?: () => void
  onTogglePreview?: () => void
  onNewDocument?: () => void
}

export function QuickActionsMenu({
  className,
  onExportPDF,
  onExportMarkdown,
  onPrint,
  onCopyToClipboard,
  onClear,
  onFormatDocument,
  onTogglePreview,
  onNewDocument
}: QuickActionsMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleAction = (action?: () => void) => {
    if (action) {
      action()
    }
    setIsOpen(false)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 p-0 touch-manipulation ${className}`}
          title="Quick actions"
          aria-label="Quick actions"
        >
          <Zap className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary" />
          Quick Actions
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Document Actions */}
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleAction(onNewDocument)}>
            <FileText className="h-4 w-4 mr-2" />
            <span>New Document</span>
            <DropdownMenuShortcut>⌘⇧N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleAction(onClear)}>
            <Trash2 className="h-4 w-4 mr-2" />
            <span>Clear All</span>
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Export Actions */}
        <DropdownMenuGroup>
          <DropdownMenuLabel>Export</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => handleAction(onExportPDF)}>
            <Download className="h-4 w-4 mr-2" />
            <span>Export as PDF</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleAction(onExportMarkdown)}>
            <FileDown className="h-4 w-4 mr-2" />
            <span>Export as .md</span>
            <DropdownMenuShortcut>⌘⇧E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleAction(onPrint)}>
            <Printer className="h-4 w-4 mr-2" />
            <span>Print / Save PDF</span>
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Edit Actions */}
        <DropdownMenuGroup>
          <DropdownMenuLabel>Edit</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => handleAction(onCopyToClipboard)}>
            <Copy className="h-4 w-4 mr-2" />
            <span>Copy to Clipboard</span>
            <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleAction(onFormatDocument)}>
            <Wand2 className="h-4 w-4 mr-2" />
            <span>Format Document</span>
            <DropdownMenuShortcut>⌘⇧F</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* View Actions */}
        <DropdownMenuGroup>
          <DropdownMenuLabel>View</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => handleAction(onTogglePreview)}>
            <Eye className="h-4 w-4 mr-2" />
            <span>Toggle Preview</span>
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleAction(onFormatDocument)}>
            <RotateCcw className="h-4 w-4 mr-2" />
            <span>Reset Zoom</span>
            <DropdownMenuShortcut>⌘0</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Languages className="h-4 w-4 mr-2" />
            <span>Change Language</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
