'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Type } from 'lucide-react'
import type { LocaleTranslations } from '@/lib/locales/types'

interface TextTransformProps {
  content: string
  onReplace: (oldContent: string, newContent: string) => void
  className?: string
  t: LocaleTranslations
}

export function TextTransform({ content, onReplace, className, t }: TextTransformProps) {
  const [isOpen, setIsOpen] = useState(false)

  const transformSelection = (transform: (text: string) => string) => {
    const transformed = transform(content)
    onReplace(content, transformed)
    setIsOpen(false)
  }

  const toUpperCase = () => transformSelection((text) => text.toUpperCase())
  const toLowerCase = () => transformSelection((text) => text.toLowerCase())
  const toTitleCase = () => {
    transformSelection((text) => {
      return text
        .toLowerCase()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    })
  }
  const toSentenceCase = () => {
    transformSelection((text) => {
      return text
        .toLowerCase()
        .replace(/(^\s*\w|[.!?]\s*\w)/g, (match) => match.toUpperCase())
    })
  }
  const toCamelCase = () => {
    transformSelection((text) => {
      return text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
        .replace(/^[A-Z]/, (match) => match.toLowerCase())
    })
  }
  const toKebabCase = () => {
    transformSelection((text) => {
      return text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
    })
  }
  const toSnakeCase = () => {
    transformSelection((text) => {
      return text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, '_')
        .replace(/^_|_$/g, '')
    })
  }
  const toggleCase = () => {
    transformSelection((text) => {
      return text
        .split('')
        .map(char => {
          if (char >= 'a' && char <= 'z') return char.toUpperCase()
          if (char >= 'A' && char <= 'Z') return char.toLowerCase()
          return char
        })
        .join('')
    })
  }
  const capitalize = () => {
    transformSelection((text) => {
      return text
        .toLowerCase()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    })
  }

  const transformations = [
    { id: 'upper', label: t.textTransform.uppercase, action: toUpperCase, desc: t.textTransform.uppercaseDesc },
    { id: 'lower', label: t.textTransform.lowercase, action: toLowerCase, desc: t.textTransform.lowercaseDesc },
    { id: 'title', label: t.textTransform.titleCase, action: toTitleCase, desc: t.textTransform.titleCaseDesc },
    { id: 'sentence', label: t.textTransform.sentenceCase, action: toSentenceCase, desc: t.textTransform.sentenceCaseDesc },
    { id: 'camel', label: t.textTransform.camelCase, action: toCamelCase, desc: t.textTransform.camelCaseDesc },
    { id: 'kebab', label: t.textTransform.kebabCase, action: toKebabCase, desc: t.textTransform.kebabCaseDesc },
    { id: 'snake', label: t.textTransform.snakeCase, action: toSnakeCase, desc: t.textTransform.snakeCaseDesc },
    { id: 'toggle', label: t.textTransform.toggleCase, action: toggleCase, desc: t.textTransform.toggleCaseDesc },
    { id: 'capitalize', label: t.textTransform.capitalize, action: capitalize, desc: t.textTransform.capitalizeDesc }
  ]

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 p-0 touch-manipulation"
        title={t.textTransform.title}
        aria-label={t.textTransform.title}
        aria-expanded={isOpen}
      >
        <Type className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-64 bg-popover text-popover-foreground shadow-lg rounded-lg border border-primary/15">
          <div className="p-4">
            <h3 className="text-sm font-medium mb-3">{t.textTransform.title}</h3>
            <div className="space-y-1 max-h-80 overflow-y-auto">
              {transformations.map((transform) => (
                <button
                  key={transform.id}
                  onClick={transform.action}
                  className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent/60 transition-colors"
                >
                  <div className="font-medium">{transform.label}</div>
                  <div className="text-xs text-muted-foreground">{transform.desc}</div>
                </button>
              ))}
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="outline"
              size="sm"
              className="w-full mt-3"
            >
              {t.textTransform.close}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
