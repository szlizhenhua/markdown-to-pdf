'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Code } from 'lucide-react'
import type { LocaleTranslations } from '@/lib/locales/types'

interface CodeBlockSelectorProps {
  onInsert: (codeBlock: string) => void
  className?: string
  t: LocaleTranslations
}

const getCodeLanguages = (t: LocaleTranslations) => [
  { id: 'javascript', label: t.codeLanguages.javascript },
  { id: 'typescript', label: t.codeLanguages.typescript },
  { id: 'python', label: t.codeLanguages.python },
  { id: 'java', label: t.codeLanguages.java },
  { id: 'cpp', label: t.codeLanguages.cpp },
  { id: 'csharp', label: t.codeLanguages.csharp },
  { id: 'go', label: t.codeLanguages.go },
  { id: 'rust', label: t.codeLanguages.rust },
  { id: 'php', label: t.codeLanguages.php },
  { id: 'ruby', label: t.codeLanguages.ruby },
  { id: 'swift', label: t.codeLanguages.swift },
  { id: 'kotlin', label: t.codeLanguages.kotlin },
  { id: 'html', label: t.codeLanguages.html },
  { id: 'css', label: t.codeLanguages.css },
  { id: 'scss', label: t.codeLanguages.scss },
  { id: 'sql', label: t.codeLanguages.sql },
  { id: 'bash', label: t.codeLanguages.bash },
  { id: 'shell', label: t.codeLanguages.shell },
  { id: 'json', label: t.codeLanguages.json },
  { id: 'yaml', label: t.codeLanguages.yaml },
  { id: 'xml', label: t.codeLanguages.xml },
  { id: 'markdown', label: t.codeLanguages.markdown },
  { id: 'dockerfile', label: t.codeLanguages.dockerfile },
  { id: 'diff', label: t.codeLanguages.diff },
]

export function CodeBlockSelector({ onInsert, className, t }: CodeBlockSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')
  const codeLanguages = getCodeLanguages(t)

  const handleInsert = () => {
    const codeBlock = `\`\`\`${selectedLanguage}\n// Your code here\n\`\`\``
    onInsert(codeBlock)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 p-0 touch-manipulation"
        title={t.codeLanguages.insertCodeBlock}
        aria-label={t.codeLanguages.insertCodeBlock}
        aria-expanded={isOpen}
      >
        <Code className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-72 bg-popover text-popover-foreground shadow-lg rounded-lg border border-primary/15 max-h-96 overflow-auto">
          <div className="p-4 space-y-3">
            <div>
              <label className="text-sm font-medium mb-2 block">{t.codeLanguages.language}</label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                {codeLanguages.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            <Button
              onClick={handleInsert}
              size="sm"
              className="w-full"
            >
              {t.codeLanguages.insertCodeBlock}
            </Button>

            {/* Preview */}
            <div className="mt-3 p-3 bg-muted/40 rounded border text-xs font-mono">
              <div className="text-muted-foreground mb-2">{t.codeLanguages.preview}:</div>
              <pre className="whitespace-pre-wrap break-all text-foreground">
                {`\\\`\\\`\\\`${selectedLanguage}`}
                {'\n'}
                {/* Your code here */}
                {'\n'}
                {`\\\`\\\`\\\``}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
