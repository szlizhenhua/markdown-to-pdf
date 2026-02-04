'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Code } from 'lucide-react'

interface CodeBlockSelectorProps {
  onInsert: (codeBlock: string) => void
  className?: string
}

const codeLanguages = [
  { id: 'javascript', label: 'JavaScript' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'python', label: 'Python' },
  { id: 'java', label: 'Java' },
  { id: 'cpp', label: 'C++' },
  { id: 'csharp', label: 'C#' },
  { id: 'go', label: 'Go' },
  { id: 'rust', label: 'Rust' },
  { id: 'php', label: 'PHP' },
  { id: 'ruby', label: 'Ruby' },
  { id: 'swift', label: 'Swift' },
  { id: 'kotlin', label: 'Kotlin' },
  { id: 'html', label: 'HTML' },
  { id: 'css', label: 'CSS' },
  { id: 'scss', label: 'SCSS' },
  { id: 'sql', label: 'SQL' },
  { id: 'bash', label: 'Bash' },
  { id: 'shell', label: 'Shell' },
  { id: 'json', label: 'JSON' },
  { id: 'yaml', label: 'YAML' },
  { id: 'xml', label: 'XML' },
  { id: 'markdown', label: 'Markdown' },
  { id: 'dockerfile', label: 'Dockerfile' },
  { id: 'diff', label: 'Diff' },
]

export function CodeBlockSelector({ onInsert, className }: CodeBlockSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')

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
        title="Insert code block"
        aria-label="Insert code block"
        aria-expanded={isOpen}
      >
        <Code className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 z-50 w-72 bg-popover text-popover-foreground shadow-lg rounded-lg border border-primary/15 max-h-96 overflow-auto">
          <div className="p-4 space-y-3">
            <div>
              <label className="text-sm font-medium mb-2 block">Language</label>
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
              Insert Code Block
            </Button>

            {/* Preview */}
            <div className="mt-3 p-3 bg-muted/40 rounded border text-xs font-mono">
              <div className="text-muted-foreground mb-2">Preview:</div>
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
