'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'
import { useToast } from '@/lib/hooks/use-toast'
import { useLanguage } from '@/lib/contexts/language-context'

interface CopyToClipboardProps {
  content: string
  className?: string
}

export function CopyToClipboard({ content, className }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false)
  const { addToast } = useToast()
  const { t } = useLanguage()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      addToast({
        type: 'success',
        title: 'Copied to clipboard',
        message: 'Content has been copied'
      })

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Copy failed',
        message: error instanceof Error ? error.message : t.messages.unknownError
      })
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className={`h-8 w-8 p-0 touch-manipulation ${copied ? 'bg-green-100 dark:bg-green-900' : ''} ${className}`}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
      aria-label={copied ? 'Copied to clipboard' : 'Copy to clipboard'}
    >
      <Copy className="h-4 w-4" />
    </Button>
  )
}
