'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Type } from 'lucide-react'

interface TextTransformProps {
  content: string
  onReplace: (oldContent: string, newContent: string) => void
  className?: string
}

export function TextTransform({ content, onReplace, className }: TextTransformProps) {
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
    { id: 'upper', label: 'UPPERCASE', action: toUpperCase, desc: 'Convert to uppercase' },
    { id: 'lower', label: 'lowercase', action: toLowerCase, desc: 'Convert to lowercase' },
    { id: 'title', label: 'Title Case', action: toTitleCase, desc: 'Capitalize Each Word' },
    { id: 'sentence', label: 'Sentence case', action: toSentenceCase, desc: 'Capitalize first word only' },
    { id: 'camel', label: 'camelCase', action: toCamelCase, desc: 'Convert to camelCase' },
    { id: 'kebab', label: 'kebab-case', action: toKebabCase, desc: 'Convert to kebab-case' },
    { id: 'snake', label: 'snake_case', action: toSnakeCase, desc: 'Convert to snake_case' },
    { id: 'toggle', label: 'tOGGLE cASE', action: toggleCase, desc: 'Toggle letter case' },
    { id: 'capitalize', label: 'Capitalize', action: capitalize, desc: 'Capitalize first letter' }
  ]

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 p-0 touch-manipulation"
        title="Text transformation"
        aria-label="Text transformation"
        aria-expanded={isOpen}
      >
        <Type className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-64 bg-popover text-popover-foreground shadow-lg rounded-lg border border-primary/15">
          <div className="p-4">
            <h3 className="text-sm font-medium mb-3">Transform Text</h3>
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
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
