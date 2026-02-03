'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sparkles, Wand2, Check, X } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface AIWritingAssistantProps {
  className?: string
  content: string
  onApplySuggestion?: (newContent: string) => void
}

type SuggestionType =
  | 'improve-grammar'
  | 'enhance-vocabulary'
  | 'add-structure'
  | 'summarize'
  | 'expand'
  | 'fix-formatting'

interface Suggestion {
  type: SuggestionType
  title: string
  description: string
  icon: React.ReactNode
  process: (content: string) => Promise<string>
}

const suggestions: Suggestion[] = [
  {
    type: 'improve-grammar',
    title: 'Improve Grammar',
    description: 'Fix grammar and punctuation issues',
    icon: <Check className="h-4 w-4" />,
    process: async (content) => {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 1000))
      // Simple grammar fixes (this is a simulation - in production you'd call an AI API)
      return content
        .replace(/\s+([.,!?;:])/g, '$1') // Fix spacing before punctuation
        .replace(/([a-z])([A-Z])/g, '$1. $2') // Fix missing periods
        .replace(/\.{3,}/g, '...') // Fix multiple dots
        .replace(/(!){2,}/g, '!') // Fix multiple exclamation marks
        .replace(/(\?){2,}/g, '?') // Fix multiple question marks
    }
  },
  {
    type: 'enhance-vocabulary',
    title: 'Enhance Vocabulary',
    description: 'Suggest more sophisticated word choices',
    icon: <Wand2 className="h-4 w-4" />,
    process: async (content) => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      // Simple vocabulary enhancements (simulation)
      const enhancements: Record<string, string> = {
        'good': 'excellent',
        'bad': 'poor',
        'big': 'substantial',
        'small': 'modest',
        'thing': 'element',
        'get': 'obtain',
        'use': 'utilize',
        'show': 'demonstrate',
        'help': 'assist',
        'make': 'create'
      }
      let enhanced = content
      Object.entries(enhancements).forEach(([old, newWord]) => {
        const regex = new RegExp(`\\b${old}\\b`, 'gi')
        enhanced = enhanced.replace(regex, newWord)
      })
      return enhanced
    }
  },
  {
    type: 'add-structure',
    title: 'Add Structure',
    description: 'Organize content with better headings',
    icon: <Sparkles className="h-4 w-4" />,
    process: async (content) => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const lines = content.split('\n')
      const structured: string[] = []

      lines.forEach((line, index) => {
        structured.push(line)
        // Add section breaks after paragraphs
        if (line.length > 100 && lines[index + 1]?.length > 0) {
          structured.push('')
        }
      })

      return structured.join('\n')
    }
  },
  {
    type: 'summarize',
    title: 'Summarize',
    description: 'Create a concise summary',
    icon: <Sparkles className="h-4 w-4" />,
    process: async (content) => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const sentences = content.match(/[^.!?]+[.!?]+/g) || []
      const summaryLength = Math.min(3, Math.ceil(sentences.length / 3))
      return '## Summary\n\n' + sentences.slice(0, summaryLength).join(' ').trim()
    }
  },
  {
    type: 'expand',
    title: 'Expand Content',
    description: 'Add more detail and context',
    icon: <Wand2 className="h-4 w-4" />,
    process: async (content) => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      // Add placeholder expansion points
      const headings = content.match(/^#{1,6}\s+.+$/gm) || []
      let expanded = content

      headings.forEach((heading) => {
        expanded = expanded.replace(
          heading,
          heading + '\n\n> [TODO] Add more details about this section'
        )
      })

      return expanded
    }
  },
  {
    type: 'fix-formatting',
    title: 'Fix Formatting',
    description: 'Standardize markdown formatting',
    icon: <Check className="h-4 w-4" />,
    process: async (content) => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      // Fix common formatting issues
      return content
        .replace(/^#{1}\s/gm, '# ') // Ensure # followed by space
        .replace(/^#{7}/gm, '######') // Limit heading levels
        .replace(/\*\*\*(.+?)\*\*\*/g, '**$1**') // Fix triple bold
        .replace(/\n{3,}/g, '\n\n') // Remove excessive newlines
        .trim()
    }
  }
]

export function AIWritingAssistant({ className, content, onApplySuggestion }: AIWritingAssistantProps) {
  const [open, setOpen] = useState(false)
  const [selectedSuggestion, setSelectedSuggestion] = useState<Suggestion | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [preview, setPreview] = useState<string>('')
  const [customPrompt, setCustomPrompt] = useState('')

  const handleSuggestion = async (suggestion: Suggestion) => {
    setSelectedSuggestion(suggestion)
    setIsProcessing(true)

    try {
      const result = await suggestion.process(content)
      setPreview(result)
    } catch (error) {
      console.error('AI processing error:', error)
      setPreview(content) // Fallback to original content
    } finally {
      setIsProcessing(false)
    }
  }

  const handleApply = () => {
    if (preview) {
      onApplySuggestion?.(preview)
      setOpen(false)
      setPreview('')
      setSelectedSuggestion(null)
    }
  }

  const handleReject = () => {
    setPreview('')
    setSelectedSuggestion(null)
  }

  const handleCustomPrompt = async () => {
    if (!customPrompt.trim()) return

    setIsProcessing(true)
    setSelectedSuggestion({
      type: 'improve-grammar',
      title: 'Custom Prompt',
      description: customPrompt,
      icon: <Wand2 className="h-4 w-4" />,
      process: async () => {
        // In production, this would call an AI API with the custom prompt
        await new Promise(resolve => setTimeout(resolve, 1500))
        return `## ${customPrompt}\n\n` + content
      }
    })

    try {
      await suggestions[0].process(content)
      setPreview(`## AI Response to: ${customPrompt}\n\n` + content)
    } catch (error) {
      console.error('Custom prompt error:', error)
    } finally {
      setIsProcessing(false)
      setCustomPrompt('')
    }
  }

  const currentWordCount = preview.length || content.length
  const originalWordCount = content.length
  const wordDifference = currentWordCount - originalWordCount

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 px-2 touch-manipulation text-xs ${className}`}
          title="AI writing assistant"
          aria-label="AI writing assistant"
        >
          <Sparkles className="h-4 w-4" />
          <span className="hidden sm:inline ml-1">AI Assistant</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            AI Writing Assistant
          </DialogTitle>
          <DialogDescription>
            Improve your markdown content with AI-powered suggestions
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Suggestion Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.type}
                onClick={() => handleSuggestion(suggestion)}
                disabled={isProcessing}
                className={`p-3 rounded-lg border text-left transition-all ${
                  selectedSuggestion?.type === suggestion.type
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background hover:bg-accent border-border'
                } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {suggestion.icon}
                  <span className="font-medium text-sm">{suggestion.title}</span>
                </div>
                <p className="text-xs opacity-80">{suggestion.description}</p>
              </button>
            ))}
          </div>

          {/* Custom Prompt */}
          <div className="space-y-2">
            <Label htmlFor="custom-prompt">Custom Prompt</Label>
            <div className="flex gap-2">
              <Textarea
                id="custom-prompt"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Ask AI to help with specific changes..."
                className="flex-1 min-h-[60px] resize-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault()
                    handleCustomPrompt()
                  }
                }}
              />
              <Button
                onClick={handleCustomPrompt}
                disabled={isProcessing || !customPrompt.trim()}
                size="sm"
              >
                <Wand2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Preview */}
          {isProcessing && (
            <div className="flex items-center justify-center p-8 border rounded-lg bg-muted/30">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                <span>Processing...</span>
              </div>
            </div>
          )}

          {preview && !isProcessing && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Preview</Label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {wordDifference > 0 ? '+' : ''}{wordDifference} characters
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleReject}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleApply}
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
              <Textarea
                value={preview}
                readOnly
                className="min-h-[200px] font-mono text-sm"
              />
            </div>
          )}

          {!preview && !isProcessing && (
            <div className="text-center p-8 border rounded-lg bg-muted/30 text-muted-foreground">
              <Sparkles className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>Select a suggestion above to improve your content</p>
            </div>
          )}
        </div>

        <p className="text-xs text-muted-foreground">
          AI suggestions are simulated locally. For production use, integrate with an AI API like OpenAI, Anthropic, or similar services.
        </p>
      </DialogContent>
    </Dialog>
  )
}
