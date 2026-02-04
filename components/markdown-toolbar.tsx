'use client'

import { useState } from 'react'
import { Type, Bold, Italic, Strikethrough, Code, Link, Image, List, ListOrdered, Quote, Heading1, Hash, ChevronDown, ChevronUp, TextSelection, Search, Undo, Redo } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EmojiPicker } from '@/components/emoji-picker'
import { TableGenerator } from '@/components/table-generator'
import { CodeBlockSelector } from '@/components/code-block-selector'
import { LinkHelper } from '@/components/link-helper'
import { ImageHelper } from '@/components/image-helper'
import { KeyboardShortcutsDialog } from '@/components/keyboard-shortcuts-dialog'
import { ListHelper } from '@/components/list-helper'
import { WordCountBadge } from '@/components/word-count-badge'
import { TaskListHelper } from '@/components/task-list-helper'
import { HeadingHelper } from '@/components/heading-helper'
import { BlockquoteHelper } from '@/components/blockquote-helper'
import { DateTimeHelper } from '@/components/datetime-helper'
import { ClearFormatting } from '@/components/clear-formatting'
import { CopyToClipboard } from '@/components/copy-to-clipboard'
import { ReadingTimeBadge } from '@/components/reading-time-badge'
import { CheatSheet } from '@/components/cheat-sheet'
import { LineOperations } from '@/components/line-operations'
import { TextTransform } from '@/components/text-transform'
import { HighlightHelper } from '@/components/highlight-helper'
import { SpecialFormatting } from '@/components/special-formatting'
import { QuickTemplates } from '@/components/quick-templates'
import { FocusMode } from '@/components/focus-mode'
import { StatisticsPanel } from '@/components/statistics-panel'
import { AutosaveControl } from '@/components/autosave-control'
import { DocumentTemplates } from '@/components/document-templates'
import { FullScreenToggle } from '@/components/full-screen-toggle'
import { PrintPreview } from '@/components/print-preview'
import { MarkdownExport } from '@/components/markdown-export'
import { TypographyControls } from '@/components/typography-controls'
import { DocumentHistory } from '@/components/document-history'
import { SnippetLibrary } from '@/components/snippet-library'
import { CollaborationIndicator } from '@/components/collaboration-indicator'
import { QuickActionsMenu } from '@/components/quick-actions-menu'
import { PerformanceSettings } from '@/components/performance-settings'
import { WordGoalTracker } from '@/components/word-goal-tracker'
import { TimeTracker } from '@/components/time-tracker'
import { PomodoroTimer } from '@/components/pomodoro-timer'

interface MarkdownToolbarProps {
  onInsert: (markdown: string) => void
  wordWrap?: boolean
  onWordWrapToggle?: () => void
  showFindReplace?: boolean
  onFindReplaceToggle?: () => void
  canUndo?: boolean
  canRedo?: boolean
  onUndo?: () => void
  onRedo?: () => void
  className?: string
  content?: string
  onClear?: () => void
  onReplace?: (oldContent: string, newContent: string) => void
  onAutosaveIntervalChange?: (interval: number) => void
  autosaveInterval?: number
  onFontSizeChange?: (size: number) => void
  onLineHeightChange?: (height: number) => void
  onFontFamilyChange?: (family: string) => void
  previewFontSize?: number
  previewLineHeight?: number
  previewFontFamily?: string
  onExportPDF?: () => void
  onExportMarkdown?: () => void
  onPrint?: () => void
  onTogglePreview?: () => void
  onDebounceChange?: (ms: number) => void
  debounceValue?: number
}

export function MarkdownToolbar({ onInsert, wordWrap, onWordWrapToggle, showFindReplace, onFindReplaceToggle, canUndo, canRedo, onUndo, onRedo, className, content = '', onClear, onReplace, onAutosaveIntervalChange, autosaveInterval, onFontSizeChange, onLineHeightChange, onFontFamilyChange, previewFontSize, previewLineHeight, previewFontFamily, onExportPDF, onExportMarkdown, onPrint, onTogglePreview, onDebounceChange, debounceValue }: MarkdownToolbarProps) {
  const [expanded, setExpanded] = useState(false)

  const insertMarkdown = (before: string, after: string = '', placeholder: string = '') => {
    onInsert(`${before}${placeholder}${after}`)
  }

  const tools = [
    {
      id: 'heading',
      icon: <Heading1 className="h-4 w-4" />,
      label: 'Heading',
      shortcuts: ['# ', '## ', '### '],
      insert: () => insertMarkdown('## ', '')
    },
    {
      id: 'bold',
      icon: <Bold className="h-4 w-4" />,
      label: 'Bold',
      shortcut: '**',
      insert: () => insertMarkdown('**', '**', 'bold text')
    },
    {
      id: 'italic',
      icon: <Italic className="h-4 w-4" />,
      label: 'Italic',
      shortcut: '*',
      insert: () => insertMarkdown('*', '*', 'italic text')
    },
    {
      id: 'strike',
      icon: <Strikethrough className="h-4 w-4" />,
      label: 'Strikethrough',
      shortcut: '~~',
      insert: () => insertMarkdown('~~', '~~', 'strikethrough')
    },
    {
      id: 'code',
      icon: <Code className="h-4 w-4" />,
      label: 'Code',
      shortcuts: ['`', '```'],
      insert: () => insertMarkdown('`', '`', 'code')
    },
    {
      id: 'link',
      icon: <Link className="h-4 w-4" />,
      label: 'Link',
      insert: () => insertMarkdown('[', '](url)', 'link text')
    },
    {
      id: 'image',
      icon: <Image className="h-4 w-4" />, // eslint-disable-line jsx-a11y/alt-text
      label: 'Image',
      insert: () => insertMarkdown('![alt](', ')]', 'image-url')
    },
    {
      id: 'ulist',
      icon: <List className="h-4 w-4" />,
      label: 'Bullet List',
      insert: () => insertMarkdown('- ', '')
    },
    {
      id: 'olist',
      icon: <ListOrdered className="h-4 w-4" />,
      label: 'Numbered List',
      insert: () => insertMarkdown('1. ', '')
    },
    {
      id: 'quote',
      icon: <Quote className="h-4 w-4" />,
      label: 'Quote',
      insert: () => insertMarkdown('> ', '')
    },
    {
      id: 'codeblock',
      icon: <Type className="h-4 w-4" />,
      label: 'Code Block',
      insert: () => insertMarkdown('```\n', '\n```', 'code')
    },
    {
      id: 'hr',
      icon: <Hash className="h-4 w-4" />,
      label: 'Horizontal Rule',
      insert: () => insertMarkdown('\n---\n', '')
    }
  ]

  const primaryTools = tools.slice(0, 6)
  const secondaryTools = tools.slice(6)

  return (
    <div className={`border-b bg-muted/30 ${className}`}>
      <div className="flex items-center gap-1 p-2 flex-wrap">
        {primaryTools.map(tool => (
          <Button
            key={tool.id}
            variant="ghost"
            size="sm"
            onClick={() => tool.insert()}
            className="h-8 w-8 p-0 touch-manipulation"
            title={tool.label}
            aria-label={tool.label}
          >
            {tool.icon}
          </Button>
        ))}
        <div className="w-px h-6 bg-border mx-1" />
        {onUndo && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onUndo}
            disabled={!canUndo}
            className="h-8 w-8 p-0 touch-manipulation"
            title="Undo (Ctrl+Z)"
            aria-label="Undo"
          >
            <Undo className="h-4 w-4" />
          </Button>
        )}
        {onRedo && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onRedo}
            disabled={!canRedo}
            className="h-8 w-8 p-0 touch-manipulation"
            title="Redo (Ctrl+Y or Ctrl+Shift+Z)"
            aria-label="Redo"
          >
            <Redo className="h-4 w-4" />
          </Button>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="h-8 w-8 p-0 touch-manipulation"
          title={expanded ? 'Show less' : 'Show more'}
          aria-label={expanded ? 'Show less' : 'Show more'}
        >
          {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {onWordWrapToggle && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onWordWrapToggle}
            className={`h-8 w-8 p-0 touch-manipulation ${wordWrap ? 'bg-accent' : ''}`}
            title={wordWrap ? 'Disable word wrap' : 'Enable word wrap'}
            aria-label={wordWrap ? 'Disable word wrap' : 'Enable word wrap'}
          >
            <TextSelection className="h-4 w-4" />
          </Button>
        )}
        {onFindReplaceToggle && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onFindReplaceToggle}
            className={`h-8 w-8 p-0 touch-manipulation ${showFindReplace ? 'bg-accent' : ''}`}
            title="Find and Replace (Ctrl+F)"
            aria-label="Find and Replace"
          >
            <Search className="h-4 w-4" />
          </Button>
        )}
        <CopyToClipboard content={content} />
        <FullScreenToggle />
        <PrintPreview content={content} />
        <MarkdownExport content={content} />
        <TypographyControls
          onFontSizeChange={onFontSizeChange}
          onLineHeightChange={onLineHeightChange}
          onFontFamilyChange={onFontFamilyChange}
          currentFontSize={previewFontSize}
          currentLineHeight={previewLineHeight}
          currentFontFamily={previewFontFamily}
        />
        <DocumentHistory currentContent={content} onRestore={(newContent) => onReplace?.(content, newContent)} />
        <SnippetLibrary onInsertSnippet={onInsert} />
        <CollaborationIndicator />
        <QuickActionsMenu
          onExportPDF={onExportPDF}
          onExportMarkdown={onExportMarkdown}
          onPrint={onPrint}
          onCopyToClipboard={() => {
            navigator.clipboard.writeText(content)
          }}
          onClear={onClear}
          onFormatDocument={() => {
            // Format: fix spacing, headings, etc.
            const formatted = content
              .replace(/^#{1,6}\s*/gm, (match) => match.trim() + ' ')
              .replace(/\n{3,}/g, '\n\n')
              .trim()
            onReplace?.(content, formatted)
          }}
          onTogglePreview={onTogglePreview}
          onNewDocument={onClear}
        />
        <PerformanceSettings content={content} onDebounceChange={onDebounceChange} currentDebounce={debounceValue} />
        <WordGoalTracker content={content} />
        <TimeTracker content={content} />
        <PomodoroTimer />
        <CheatSheet />
        <DocumentTemplates onTemplateSelect={(content) => onInsert(content)} />
        <QuickTemplates onInsert={onInsert} />
        <FocusMode />
        <StatisticsPanel content={content} />
        {onAutosaveIntervalChange && <AutosaveControl onIntervalChange={onAutosaveIntervalChange} currentInterval={autosaveInterval} />}
        <KeyboardShortcutsDialog />
        {content && (
          <>
            <div className="w-px h-6 bg-border mx-1 hidden sm:block" />
            <WordCountBadge content={content} />
            <ReadingTimeBadge content={content} />
          </>
        )}
      </div>
      {expanded && (
        <div className="flex items-center gap-1 p-2 pt-0 flex-wrap border-t">
          {secondaryTools.map(tool => (
            <Button
              key={tool.id}
              variant="ghost"
              size="sm"
              onClick={() => tool.insert()}
              className="h-8 w-8 p-0 touch-manipulation"
              title={tool.label}
              aria-label={tool.label}
            >
              {tool.icon}
            </Button>
          ))}
          <div className="w-px h-6 bg-border mx-1" />
          <HeadingHelper onInsert={onInsert} />
          <BlockquoteHelper onInsert={onInsert} />
          <ListHelper onInsert={onInsert} />
          <TaskListHelper onInsert={onInsert} />
          <CodeBlockSelector onInsert={onInsert} />
          <LinkHelper onInsert={onInsert} />
          <ImageHelper onInsert={onInsert} />
          <TableGenerator onInsert={onInsert} />
          <DateTimeHelper onInsert={onInsert} />
          <EmojiPicker onInsert={onInsert} />
          <HighlightHelper onInsert={onInsert} />
          {onClear && <ClearFormatting onClear={onClear} />}
          {onReplace && <TextTransform content={content} onReplace={onReplace} />}
        </div>
      )}
      {content && (
        <div className="flex items-center gap-1 p-2 pt-0 flex-wrap border-t">
          <span className="text-xs text-muted-foreground mr-2 hidden sm:inline">Special:</span>
          <SpecialFormatting onInsert={onInsert} />
        </div>
      )}
      {content && onReplace && (
        <div className="flex items-center gap-1 p-2 pt-0 flex-wrap border-t">
          <span className="text-xs text-muted-foreground mr-2">Line Ops:</span>
          <LineOperations content={content} onReplace={onReplace} />
        </div>
      )}
    </div>
  )
}
