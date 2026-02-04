'use client'

import { useState } from 'react'
import { templates, type Template } from '@/lib/templates'
import { Button } from '@/components/ui/button'
import { FileText, BookOpen, Code, FileEdit, FolderOpen, X } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/language-context'

const categoryIcons: Record<Template['category'], React.ReactNode> = {
  basic: <FileText className="w-5 h-5" />,
  academic: <BookOpen className="w-5 h-5" />,
  technical: <Code className="w-5 h-5" />,
  documentation: <FileEdit className="w-5 h-5" />,
}

interface TemplateSelectorProps {
  onSelectTemplate: (content: string) => void
}

export function TemplateSelector({ onSelectTemplate }: TemplateSelectorProps) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Template['category'] | 'all'>('all')

  const categories: Array<{ value: Template['category'] | 'all'; label: string }> = [
    { value: 'all', label: t.templates.categories.all },
    { value: 'basic', label: t.templates.categories.basic },
    { value: 'academic', label: t.templates.categories.academic },
    { value: 'technical', label: t.templates.categories.technical },
    { value: 'documentation', label: t.templates.categories.documentation },
  ]

  const filteredTemplates = selectedCategory === 'all'
    ? templates
    : templates.filter(tmpl => tmpl.category === selectedCategory)

  const handleSelectTemplate = (template: Template) => {
    onSelectTemplate(template.content)
    setOpen(false)
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="gap-2 touch-manipulation"
        aria-label="Open templates"
      >
        <FolderOpen className="w-4 h-4" />
        <span className="hidden sm:inline">Templates</span>
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-0 sm:p-4">
          <div className="bg-popover text-popover-foreground rounded-lg shadow-lg w-full h-full sm:h-auto sm:max-w-3xl sm:max-h-[80vh] overflow-hidden flex flex-col sm:m-0">
            <div className="p-3 sm:p-4 border-b flex justify-between items-center">
              <div className="min-w-0">
                <h2 className="text-base sm:text-lg font-semibold truncate">{t.templates.title}</h2>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{t.templates.description}</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground p-1 -mr-1 sm:p-0 sm:mr-0 touch-manipulation"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Category Filter - scrollable horizontally on mobile */}
            <div className="flex flex-wrap gap-2 p-3 sm:p-4 border-b overflow-x-auto">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors touch-manipulation whitespace-nowrap flex-shrink-0 ${
                    selectedCategory === cat.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted/40 hover:bg-muted/60'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Templates Grid - single column on mobile */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                {filteredTemplates.map(template => (
                  <button
                    key={template.id}
                    onClick={() => handleSelectTemplate(template)}
                    className="text-left p-3 sm:p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-accent/60 transition-all group touch-manipulation min-h-[80px] sm:min-h-[100px]"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="text-primary mt-0.5 flex-shrink-0">
                        {categoryIcons[template.category]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary truncate">
                          {template.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2">
                          {template.description}
                        </p>
                        <div className="mt-2">
                          <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-muted/40 text-muted-foreground capitalize">
                            {t.templates.categories[template.category]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 sm:p-4 border-t text-xs sm:text-sm text-muted-foreground">
              {t.templates.selectTemplate}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
