'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FileText, Book, Code, FileEdit, Briefcase, GraduationCap, Calendar, Download } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface DocumentTemplatesProps {
  onTemplateSelect: (content: string) => void
  className?: string
}

const templates = [
  {
    id: 'blank',
    name: 'Blank Document',
    icon: <FileText className="h-5 w-5" />,
    description: 'Start with a clean slate',
    content: ''
  },
  {
    id: 'article',
    name: 'Blog Article',
    icon: <FileEdit className="h-5 w-5" />,
    description: 'Standard blog post structure',
    content: `# Article Title

*Write your article here*

## Introduction

Start with an engaging introduction that hooks your readers.

## Main Content

### Section 1

Add your main content here.

### Section 2

Continue with more sections as needed.

## Conclusion

Summarize your key points and provide a call to action.

---
*Written by [Your Name]*
`
  },
  {
    id: 'readme',
    name: 'README.md',
    icon: <Code className="h-5 w-5" />,
    description: 'Project documentation template',
    content: `# Project Name

> A brief description of what this project does and who it's for

## Features

- Feature 1
- Feature 2
- Feature 3

## Installation

\`\`\`bash
npm install project-name
\`\`\`

## Usage

\`\`\`javascript
const example = 'Hello World'
console.log(example)
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
`
  },
  {
    id: 'resume',
    name: 'Resume/CV',
    icon: <Briefcase className="h-5 w-5" />,
    description: 'Professional resume template',
    content: `# Your Name

[City, State] | [email@example.com] | [linkedin.com/in/yourname]

## Professional Summary

Experienced professional with a proven track record of [key achievement]. Skilled in [skill 1], [skill 2], and [skill 3].

## Work Experience

### **Job Title** | Company Name | *Dates*

- Accomplishment 1 with quantifiable results
- Led [project/initiative] resulting in [outcome]
- Collaborated with cross-functional teams to [achievement]

### **Previous Job Title** | Company Name | *Dates*

- Key responsibility and achievement
- Improved [metric] by [percentage] through [action]

## Education

### **Degree** | University Name | *Year*
- Relevant coursework, honors, or activities

## Skills

- **Technical:** Skill 1, Skill 2, Skill 3
- **Soft Skills:** Communication, Leadership, Problem-solving
`
  },
  {
    id: 'essay',
    name: 'Academic Essay',
    icon: <GraduationCap className="h-5 w-5" />,
    description: 'Structured academic paper',
    content: `# Essay Title

*Your Name*
*Course Name*
*Date*

## Introduction

Begin with a compelling hook that engages the reader. Provide necessary background information and context. End with a clear thesis statement that outlines your main argument.

## Body Paragraph 1

Start with a topic sentence that relates to your thesis. Provide evidence and analysis to support your point. Use specific examples and cite sources when appropriate.

## Body Paragraph 2

Continue with your second main point. Ensure smooth transitions between paragraphs. Maintain a formal academic tone throughout.

## Body Paragraph 3

Develop your third main argument. Address potential counterarguments and strengthen your position with additional evidence.

## Conclusion

Restate your thesis in a new way. Summarize your main points without simply repeating them. End with a broader implication or call to action.

## References

> List your sources here according to the required citation style (APA, MLA, Chicago, etc.)
`
  },
  {
    id: 'meeting',
    name: 'Meeting Notes',
    icon: <Calendar className="h-5 w-5" />,
    description: 'Structured meeting notes template',
    content: `# Meeting Notes

**Date:** [Insert Date]
**Time:** [Start Time] - [End Time]
**Location:** [Meeting Room/Platform]
**Attendees:** [List attendees]
**Absent:** [List absent if applicable]

## Agenda

1. [ ] Opening remarks
2. [ ] Discussion item 1
3. [ ] Discussion item 2
4. [ ] Action items review
5. [ ] Next meeting scheduling

## Discussion Summary

### Topic 1: [Title]

**Key Points:**
- Point 1
- Point 2
- Point 3

**Decisions Made:** [Summary of decisions]

---

### Topic 2: [Title]

**Key Points:**
- Point 1
- Point 2

**Decisions Made:** [Summary of decisions]

## Action Items

| Task | Owner | Due Date | Status |
|------|--------|----------|--------|
| [Task 1] | [Name] | [Date] | Pending |
| [Task 2] | [Name] | [Date] | Pending |

## Next Meeting

**Date:** [Proposed Date]
**Time:** [Proposed Time]
**Agenda Items:** [Brief list]

---
*Notes prepared by [Your Name]*
`
  },
  {
    id: 'tutorial',
    name: 'Tutorial/Guide',
    icon: <Book className="h-5 w-5" />,
    description: 'Step-by-step tutorial template',
    content: `# Tutorial Title

> A brief description of what readers will learn

## Prerequisites

Before starting this tutorial, you should have:
- Prerequisite 1
- Prerequisite 2
- Basic knowledge of [topic]

## What You'll Learn

By the end of this tutorial, you'll be able to:
- Learning outcome 1
- Learning outcome 2
- Learning outcome 3

## Getting Started

### Step 1: [First Step]

\`\`\`bash
# Example command or code
npm install package-name
\`\`\`

**Explanation:** Provide clear explanation of what this step does.

### Step 2: [Second Step]

Continue with detailed instructions. Include code examples, screenshots, or diagrams as needed.

### Step 3: [Third Step]

Break down complex steps into smaller, manageable parts.

## Common Issues & Solutions

### Issue: [Problem Description]

**Solution:** How to fix it

---

## Conclusion

Summarize what was accomplished and suggest next steps for further learning.

## Additional Resources

- [Resource 1](https://example.com)
- [Resource 2](https://example.com)
`
  }
]

export function DocumentTemplates({ onTemplateSelect, className }: DocumentTemplatesProps) {
  const [open, setOpen] = useState(false)

  const handleSelectTemplate = (template: typeof templates[0]) => {
    onTemplateSelect(template.content)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-8 px-2 touch-manipulation text-xs ${className}`}
          title="Document templates"
          aria-label="Document templates"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline ml-1">Templates</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Document Templates</DialogTitle>
          <DialogDescription>
            Choose a template to get started quickly
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {templates.map(template => (
            <button
              key={template.id}
              onClick={() => handleSelectTemplate(template)}
              className="flex items-start gap-3 p-4 rounded-lg border bg-card hover:bg-accent hover:border-accent-foreground/20 transition-all text-left group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {template.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm mb-1">{template.name}</div>
                <div className="text-xs text-muted-foreground">{template.description}</div>
              </div>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
