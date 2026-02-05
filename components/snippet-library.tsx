'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Code, BookMarked, Search } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { LocaleTranslations } from '@/lib/locales/types'

interface Snippet {
  id: string
  category: string
  name: string
  description: string
  content: string
}

interface SnippetLibraryProps {
  className?: string
  onInsertSnippet: (content: string) => void
  t: LocaleTranslations
}

const snippets: Snippet[] = [
  // Code Blocks
  {
    id: 'js-snippet',
    category: 'Code',
    name: 'JavaScript Function',
    description: 'Function template with JSDoc',
    content: `/**\n * Function description\n * @param {type} param - Parameter description\n * @returns {type} Return value description\n */\nfunction functionName(param) {\n  // Your code here\n  return result;\n}`
  },
  {
    id: 'react-component',
    category: 'Code',
    name: 'React Component',
    description: 'Functional component with hooks',
    content: `'use client'\n\nimport { useState } from 'react'\n\nexport function ComponentName() {\n  const [state, setState] = useState(initialValue)\n\n  return (\n    <div>\n      {/* Your JSX here */}\n    </div>\n  )\n}`
  },
  {
    id: 'api-endpoint',
    category: 'Code',
    name: 'API Endpoint',
    description: 'REST API endpoint documentation',
    content: `## API Endpoint\n\n### Description\nBrief description of what this endpoint does.\n\n**Method:** \`GET\`\n\n**URL:** \`/api/resource\`\n\n### Query Parameters\n\n| Parameter | Type | Required | Description |\n|-----------|------|----------|-------------|\n| id | string | Yes | Resource identifier |\n| limit | number | No | Max items to return |\n\n### Response\n\n\`\`\`json\n{\n  "success": true,\n  "data": {}\n}\n\`\`\``
  },
  // Tables
  {
    id: 'comparison-table',
    category: 'Table',
    name: 'Comparison Table',
    description: 'Feature comparison matrix',
    content: `| Feature | Basic | Pro | Enterprise |\n|---------|-------|-----|------------|\n| Users | 1 | 10 | Unlimited |\n| Storage | 1GB | 100GB | 1TB |\n| Support | Email | Priority | 24/7 Phone |\n| API Access | No | Yes | Yes |`
  },
  {
    id: 'specification-table',
    category: 'Table',
    name: 'Specification Table',
    description: 'Technical specifications',
    content: `| Specification | Details |\n|---------------|----------|\n| **Dimensions** | 100 x 200 x 50 mm |\n| **Weight** | 500g |\n| **Material** | Aluminum alloy |\n| **Color** | Silver, Black |\n| **Warranty** | 2 years |`
  },
  // Documentation
  {
    id: 'changelog',
    category: 'Documentation',
    name: 'Changelog',
    description: 'Version history format',
    content: `## Changelog\n\nAll notable changes to this project will be documented in this file.\n\nThe format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).\n\n## [Unreleased]\n\n### Added\n- New feature A\n- New feature B\n\n### Changed\n- Updated feature C\n\n### Fixed\n- Bug fix D\n\n### Removed\n- Deprecated feature E\n\n## [1.0.0] - 2024-01-15\n\n### Added\n- Initial release`
  },
  {
    id: 'contributing',
    category: 'Documentation',
    name: 'Contributing Guidelines',
    description: 'Contribution template',
    content: `# Contributing\n\nThank you for considering contributing to this project!\n\n## How to Contribute\n\n1. Fork the repository\n2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)\n3. Commit your changes (\`git commit -m 'Add amazing feature'\`)\n4. Push to the branch (\`git push origin feature/amazing-feature\`)\n5. Open a Pull Request\n\n## Development Setup\n\n\`\`\`bash\n# Install dependencies\nnpm install\n\n# Run development server\nnpm run dev\n\n# Run tests\nnpm test\n\`\`\`\n\n## Coding Standards\n\n- Follow the existing code style\n- Write meaningful commit messages\n- Add tests for new features\n- Update documentation as needed`
  },
  // Technical
  {
    id: 'flowchart',
    category: 'Technical',
    name: 'Mermaid Flowchart',
    description: 'Process flow diagram',
    content: `\`\`\`mermaid\ngraph TD\n    A[Start] --> B{Decision}\n    B -->|Yes| C[Action 1]\n    B -->|No| D[Action 2]\n    C --> E[End]\n    D --> E\n\`\`\``
  },
  {
    id: 'sequence-diagram',
    category: 'Technical',
    name: 'Sequence Diagram',
    description: 'Interaction sequence',
    content: `\`\`\`mermaid\nsequenceDiagram\n    participant User\n    participant System\n    participant Database\n\n    User->>System: Request\n    System->>Database: Query\n    Database-->>System: Result\n    System-->>User: Response\n\`\`\``
  },
  {
    id: 'architecture-diagram',
    category: 'Technical',
    name: 'Architecture Diagram',
    description: 'System architecture',
    content: `\`\`\`mermaid\ngraph LR\n    A[Client] --> B[Load Balancer]\n    B --> C[Server 1]\n    B --> D[Server 2]\n    C --> E[(Database)]\n    D --> E\n    C --> F[Cache]\n    D --> F\n\`\`\``
  },
  // Content
  {
    id: 'product-description',
    category: 'Content',
    name: 'Product Description',
    description: 'Product overview template',
    content: `# Product Name\n\n> A compelling tagline that captures the essence of your product\n\n## Overview\n\nBrief introduction to your product and its main purpose.\n\n## Key Features\n\n- **Feature 1:** Description of the first key feature\n- **Feature 2:** Description of the second key feature\n- **Feature 3:** Description of the third key feature\n- **Feature 4:** Description of the fourth key feature\n\n## Use Cases\n\n### Use Case 1\nDescription of the first use case.\n\n### Use Case 2\nDescription of the second use case.\n\n## Pricing\n\n| Plan | Price | Features |\n|------|-------|----------|\n| Basic | $9/month | Core features |\n| Pro | $29/month | Advanced features |\n| Enterprise | Contact us | Custom solutions |`
  },
  {
    id: 'blog-post',
    category: 'Content',
    name: 'Blog Post Template',
    description: 'Article structure',
    content: `# Engaging Article Title\n\n*Published: [Date] • Reading time: [X] min*\n\n## Introduction\n\nHook your readers with an engaging opening paragraph that sets the context.\n\n## Main Point 1\n\nDetailed discussion of your first main point.\n\n### Sub-point\n- Supporting detail\n- Additional evidence\n\n## Main Point 2\n\nDetailed discussion of your second main point.\n\n## Conclusion\n\nSummarize key takeaways and provide a call to action.\n\n---\n\n*Thanks for reading! Follow me for more content.*`
  },
  // Alerts
  {
    id: 'info-alert',
    category: 'Alert',
    name: 'Info Alert',
    description: 'Informational note',
    content: `> **Note:** This is an informational message that provides additional context or helpful tips.`
  },
  {
    id: 'warning-alert',
    category: 'Alert',
    name: 'Warning Alert',
    description: 'Warning message',
    content: `> **Warning:** This is a warning message that alerts users to potential issues or risks.`
  },
  {
    id: 'tip-alert',
    category: 'Alert',
    name: 'Tip Alert',
    description: 'Helpful tip',
    content: `> **Tip:** This is a helpful tip that can improve productivity or solve a common problem.`
  },
  {
    id: 'important-alert',
    category: 'Alert',
    name: 'Important Alert',
    description: 'Important notice',
    content: `> **Important:** This is critical information that users must be aware of.`
  }
]

const categories = Array.from(new Set(snippets.map(s => s.category)))

export function SnippetLibrary({ className, onInsertSnippet, t }: SnippetLibraryProps) {
  const [open, setOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredSnippets = snippets.filter(snippet => {
    const matchesCategory = !selectedCategory || snippet.category === selectedCategory
    const matchesSearch =
      !searchQuery ||
      snippet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.content.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleInsert = (snippet: Snippet) => {
    onInsertSnippet(snippet.content)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 w-8 p-0 touch-manipulation ${className}`}
          title="Snippet library"
          aria-label="Snippet library"
        >
          <BookMarked className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookMarked className="h-5 w-5 text-primary" />
            {t.dialogs.snippets.title}
          </DialogTitle>
          <DialogDescription>
            {t.dialogs.snippets.description || "Quick access to reusable markdown patterns and templates"}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col flex-1 min-h-0 gap-4 py-4">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search snippets..."
                className="pl-9"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All ({snippets.length})
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category} ({snippets.filter(s => s.category === category).length})
                </Button>
              ))}
            </div>
          </div>

          {/* Snippet Grid */}
          <ScrollArea className="flex-1 border rounded-lg">
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredSnippets.length === 0 ? (
                <div className="col-span-2 flex flex-col items-center justify-center py-12 text-muted-foreground">
                  <Code className="h-12 w-12 mb-3 opacity-50" />
                  <p>No snippets found</p>
                  <p className="text-sm">Try a different search term</p>
                </div>
              ) : (
                filteredSnippets.map(snippet => (
                  <button
                    key={snippet.id}
                    onClick={() => handleInsert(snippet)}
                    className="text-left p-4 rounded-lg border bg-card hover:bg-accent hover:border-accent-foreground/20 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded">
                            {snippet.category}
                          </span>
                        </div>
                        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                          {snippet.name}
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      {snippet.description}
                    </p>
                    <div className="bg-muted/50 rounded p-2 max-h-20 overflow-hidden">
                      <pre className="text-[10px] font-mono text-muted-foreground">
                        {snippet.content.substring(0, 150)}
                        {snippet.content.length > 150 && '...'}
                      </pre>
                    </div>
                  </button>
                ))
              )}
            </div>
          </ScrollArea>
        </div>

        <p className="text-xs text-muted-foreground">
          Click any snippet to insert it at your cursor position
        </p>
      </DialogContent>
    </Dialog>
  )
}
