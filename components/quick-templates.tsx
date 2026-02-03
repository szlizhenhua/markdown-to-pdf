'use client'

import { Button } from '@/components/ui/button'

interface QuickTemplatesProps {
  onInsert: (markdown: string) => void
  className?: string
}

const quickTemplates = [
  {
    id: 'api-endpoint',
    name: 'API Endpoint',
    icon: '🔌',
    template: `### API Endpoint\n\n**Method:** GET\n\n**Endpoint:** /api/v1/resource\n\n**Description:** Brief description of what this endpoint does\n\n**Parameters:**\n- id (string) - Resource identifier\n- limit (number) - Maximum items to return\n\n**Response:**\n` + '```json\n{\n  "success": true,\n  "data": {}\n}\n```'
  },
  {
    id: 'code-snippet',
    name: 'Code Snippet',
    icon: '💻',
    template: `### Code Snippet\n\n**Language:** javascript\n\n` + '```javascript\nfunction example() {\n  console.log("Hello, World!");\n}\n\nexample();\n```' + `\n\n**Explanation:** Brief explanation of what this code does.`
  },
  {
    id: 'meeting-notes',
    name: 'Meeting Notes',
    icon: '📝',
    template: `# Meeting Notes\n\n**Date:** {{date}}\n**Attendees:**\n-\n-\n\n## Agenda\n1.\n2.\n3.\n\n## Discussion\n\n### Topic 1\n**Decision:**\n\n**Action Items:**\n- [ ]\n\n## Next Steps\n-\n\n---\n*Next meeting: {{date}}*`
  },
  {
    id: 'bug-report',
    name: 'Bug Report',
    icon: '🐛',
    template: `# Bug Report\n\n**Summary:** Brief description of the bug\n\n**Steps to Reproduce:**\n1.\n2.\n3.\n\n**Expected Behavior:** What should happen\n\n**Actual Behavior:** What actually happens\n\n**Environment:**\n- OS:\n- Browser:\n- Version:\n\n**Additional Context:** Any other relevant information`
  },
  {
    id: 'daily-standup',
    name: 'Daily Standup',
    icon: '🚀',
    template: `# Daily Standup - {{date}}\n\n## Yesterday\n-\n\n## Today\n-\n\n## Blockers\n-\n\n## Notes/Questions\n-`
  },
  {
    id: 'feature-request',
    name: 'Feature Request',
    icon: '✨',
    template: `# Feature Request\n\n**Title:** Brief title of the feature\n\n**Problem Statement:**\nWhat problem does this feature solve?\n\n**Proposed Solution:**\nHow should this feature work?\n\n**Priority:**\n- [ ] Low\n- [ ] Medium\n- [ ] High`
  },
  {
    id: 'code-review',
    name: 'Code Review',
    icon: '👀',
    template: `# Code Review\n\n**PR:** #XXX\n\n**Summary:** Brief description of changes\n\n## Feedback\n-\n\n## Approval\n- [ ] Approved\n- [ ] Request changes\n- [ ] Leave comments`
  },
  {
    id: 'project-readme',
    name: 'Project README',
    icon: '📚',
    template: `# Project Name\n\n## Description\nBrief description of what this project does.\n\n## Installation\n` + '```bash\nnpm install project-name\n```' + `\n\n## Usage\n` + '```javascript\nimport { something } from "project-name";\n```' + `\n\n## License\nMIT`
  }
]

export function QuickTemplates({ onInsert, className }: QuickTemplatesProps) {
  const handleInsertTemplate = (template: string) => {
    const now = new Date()
    const dateStr = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    const processedTemplate = template.replace(/{{date}}/g, dateStr)
    onInsert(processedTemplate)
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {quickTemplates.slice(0, 4).map((template) => (
        <Button
          key={template.id}
          variant="ghost"
          size="sm"
          onClick={() => handleInsertTemplate(template.template)}
          className="h-8 px-2 touch-manipulation text-xs"
          title={template.name}
          aria-label={`Insert ${template.name} template`}
        >
          <span className="mr-1">{template.icon}</span>
          <span className="hidden sm:inline">{template.name}</span>
        </Button>
      ))}
    </div>
  )
}
