'use client'

import { Button } from '@/components/ui/button'
import { Superscript, Subscript, Minus } from 'lucide-react'

interface SpecialFormattingProps {
  onInsert: (markdown: string) => void
  className?: string
}

export function SpecialFormatting({ onInsert, className }: SpecialFormattingProps) {
  const insertStrikethrough = () => {
    onInsert('~~strikethrough text~~')
  }

  const insertSubscript = () => {
    // HTML subscript tag
    onInsert('<sub>subscript</sub>')
  }

  const insertSuperscript = () => {
    // HTML superscript tag
    onInsert('<sup>superscript</sup>')
  }

  const insertLineBreak = () => {
    onInsert('  \n') // Two spaces + newline for markdown line break
  }

  const insertHorizontalRule = () => {
    onInsert('\n---\n')
  }

  const insertNonBreakingSpace = () => {
    onInsert('&nbsp;')
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={insertStrikethrough}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Strikethrough"
        aria-label="Strikethrough"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={insertSubscript}
        className="h-8 w-8 p-0 touch-manipulation text-xs"
        title="Subscript"
        aria-label="Subscript"
      >
        <Subscript className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={insertSuperscript}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Superscript"
        aria-label="Superscript"
      >
        <Superscript className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={insertLineBreak}
        className="h-8 px-2 touch-manipulation text-xs"
        title="Line break (two spaces)"
        aria-label="Line break"
      >
        ↵
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={insertHorizontalRule}
        className="h-8 px-2 touch-manipulation text-xs"
        title="Horizontal rule"
        aria-label="Horizontal rule"
      >
        ―
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={insertNonBreakingSpace}
        className="h-8 px-2 touch-manipulation text-xs"
        title="Non-breaking space"
        aria-label="Non-breaking space"
      >
        ␣
      </Button>
    </div>
  )
}
