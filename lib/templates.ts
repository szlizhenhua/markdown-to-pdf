export interface Template {
  id: string
  name: string
  description: string
  content: string
  category: 'basic' | 'academic' | 'technical' | 'documentation'
}

export const templates: Template[] = [
  {
    id: 'blank',
    name: 'Blank Document',
    description: 'Start with a clean slate',
    category: 'basic' as const,
    content: ''
  },
  {
    id: 'simple-notes',
    name: 'Simple Notes',
    description: 'Basic note-taking template',
    category: 'basic' as const,
    content: `# Notes

## Important Points

- Point one
- Point two
- Point three

## Tasks

- [ ] Task 1
- [x] Completed task

## Reminders

> Don't forget to follow up on the action items!
`
  },
  {
    id: 'meeting-notes',
    name: 'Meeting Notes',
    description: 'Structured meeting documentation',
    category: 'documentation' as const,
    content: `# Meeting Notes

**Date:** {{date}}
**Attendees:** @person1 @person2
**Location:** Conference Room A

## Agenda

1. Opening remarks
2. Main discussion
3. Action items
4. Closing

## Discussion Summary

### Topic 1: Project Updates
- Status update on current sprint
- Blockers and dependencies
- Next steps

### Topic 2: Planning
- Q4 roadmap review
- Resource allocation

## Action Items

| Task | Owner | Due Date | Status |
|------|--------|----------|--------|
| Finalize API docs | @person1 | 2024-12-01 | In Progress |
| Review PR #123 | @person2 | 2024-12-02 | Pending |

## Next Meeting

**Date:** {{next_date}}
**Time:** 2:00 PM
`
  },
  {
    id: 'research-paper',
    name: 'Research Paper',
    description: 'Academic paper template with citations',
    category: 'academic' as const,
    content: `# Title: Research Paper on AI

## Abstract

This paper examines the current state of artificial intelligence and machine learning technologies, their applications, and future implications.

## 1. Introduction

### 1.1 Background

Artificial Intelligence (AI) has revolutionized the way we interact with technology. From virtual assistants to autonomous vehicles, AI is becoming increasingly integrated into daily life.

### 1.2 Problem Statement

Despite rapid advancements, significant challenges remain in areas of:

- Data privacy
- Algorithmic bias
- Computational requirements

## 2. Literature Review

According to Smith et al. (2023), "machine learning models have shown remarkable improvement in accuracy over the past five years."

## 3. Methodology

Our approach combines quantitative analysis with qualitative case studies.

### 3.1 Data Collection

We collected data from three primary sources:
1. Public datasets
2. Industry surveys
3. Academic publications

## 4. Results

The findings indicate a 45% improvement in processing efficiency.

## 5. Conclusion

This research demonstrates the potential for AI-driven solutions in real-world applications.

## References

1. Smith, J., et al. (2023). "Advances in Machine Learning." *Journal of AI Research*, 15(2), 123-145.
2. Johnson, M. (2022). *Neural Networks: A Comprehensive Guide*. Academic Press.
`
  },
  {
    id: 'api-documentation',
    name: 'API Documentation',
    description: 'Technical API reference template',
    category: 'technical' as const,
    content: `# API Documentation

## Overview

The RESTful API provides programmatic access to all platform resources.

## Base URL

\`\`
https://api.example.com/v1
\`\`

## Authentication

All requests must include an API key in the header:

\`\`
Authorization: Bearer YOUR_API_KEY
\`\`

## Endpoints

### Users

#### Get All Users

\`\`
GET /users
\`\`

**Response:**
\`\`\`json
{
  "users": [
    {
      "id": "123",
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
\`\`\`

#### Create User

\`\`\`
POST /users
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
\`\`\`

### Posts

#### Get Post

\`\`\`
GET /posts/{post_id}
\`\`\`

#### Create Post

\`\`\`
POST /posts
Content-Type: application/json

{
  "title": "My Post",
  "content": "Post content here..."
}
\`\`\`

## Error Responses

The API uses standard HTTP status codes:

| Code | Description |
|-----|-------------|
| 200 | Success |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

## Rate Limiting

- 100 requests per minute per API key
- Burst allowance: 200 requests

## Code Examples

### JavaScript

\`\`\`javascript
const API_KEY = 'your-api-key';
const BASE_URL = 'https://api.example.com/v1';

fetch(\`\${BASE_URL}/users\`\`, {
  headers: { 'Authorization': \`Bearer \${API_KEY}\` }
})
  .then(res => res.json())
  .then(data => console.log(data));
\`\`\`
`
  },
  {
    id: 'readme',
    name: 'README Template',
    description: 'Standard README template for GitHub projects',
    category: 'documentation' as const,
    content: `# Project Name

> A brief description of what this project does and who it's for

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Feature 1**: Description
- **Feature 2**: Description with code example
- **Feature 3**: Multi-format support

## Installation

\`\`\`bash
npm install my-package
# or
yarn add my-package
\`\`\`

## Usage

\`\`\`javascript
import { myPackage } from 'my-package';

const result = myPackage.doSomething();
console.log(result);
\`\`\`

## API Reference

### \`myFunction(input)\`

Process the input data and return transformed output.

**Parameters:**
- \`input\` (string): The input string to process

**Returns:** Promise&lt;string&gt;

**Example:**
\`\`\`javascript
myFunction('hello').then(result => {
  console.log(result); // "olleh"
});
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
`
  },
  {
    id: 'resume',
    name: 'Professional Resume',
    description: 'CV/Resume template',
    category: 'documentation' as const,
    content: `# John Doe

**Senior Software Engineer**

📍 San Francisco, CA | 📧 john.doe@email.com | 🔗 github.com/johndoe

## Summary

Results-driven software engineer with 8+ years of experience building scalable web applications. Passionate about clean code, test-driven development, and creating exceptional user experiences.

## Skills

- **Languages:** JavaScript, TypeScript, Python, Go, SQL
- **Frameworks:** React, Next.js, Express, FastAPI
- **Tools:** Docker, Kubernetes, AWS, GCP
- **Practices:** TDD, CI/CD, Agile/Scrum

## Experience

### Senior Software Engineer

**TechCorp Inc.** | *2021 - Present*

- Led development of microservices architecture handling 10M+ daily requests
- Reduced API response time by 60% through optimization
- Mentored team of 5 developers

### Software Engineer

**StartupXYZ** | *2018 - 2021*

- Built customer-facing dashboard from scratch
- Implemented real-time features using WebSockets
- Increased user engagement by 45%

## Projects

### Open Source Contributions

- **react-library** - Contributor to popular UI library (5k+ stars)
- **cli-tool** - Command-line tool for developers (10k+ weekly downloads)

## Education

**Bachelor of Science in Computer Science**
*Stanford University* | *2014 - 2018*

## Certifications

- AWS Solutions Architect (2023)
- Google Cloud Professional (2022)

## Languages

- English (Native)
- Spanish (Conversational)
- French (Basic)
`
  },
  {
    id: 'blog-post',
    name: 'Blog Post Template',
    description: 'SEO-optimized blog article template',
    category: 'documentation' as const,
    content: `# Engaging Blog Post Title

> A compelling hook that grabs the reader's attention and makes them want to continue reading.

## Introduction

Start with a strong opening that sets up what the post will cover and why it matters. Keep it concise and relevant to your target audience.

## The Problem

Describe the pain point or problem your readers are facing. Use real-world examples if possible. This builds empathy and shows you understand their situation.

**Statistics show that 73% of users struggle with this issue...**

## The Solution

Present your solution clearly. Use formatting to make key points stand out.

### Step 1: First Action

Describe the first step in detail. Use code blocks if applicable:

\`\`\`bash
npm install solution-package
\`\`\`

### Step 2: Follow-up

Explain what happens next and why it matters.

## Why This Works

The science behind this approach is based on:

- Research principle 1
- Case study data
- Expert consensus

## Pro Tips

> 💡 **Pro Tip:** Save time by using keyboard shortcut \`Ctrl+S\` instead of clicking save buttons.

Here are additional tips:
- Tip 2
- Tip 3

## Common Mistakes to Avoid

1. **Mistake 1** - Why it's problematic and how to fix it
2. **Mistake 2** - Better alternative approaches

## Real-World Example

Let's say you're working on X project. Here's how to apply this solution:

## Conclusion

Summarize the key takeaways and provide a call-to-action.

**Have you tried this approach? Share your results in the comments below!**
`
  },
  {
    id: 'product-requirements',
    name: 'Product Requirements',
    description: 'PRD template for product managers',
    category: 'documentation' as const,
    content: `# Product Requirements Document

**Version:** 1.0
**Date:** October 2024
**Status:** Draft

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|----------|
| 1.0 | 2024-10-15 | Jane Doe | Initial version |

## 1. Executive Summary

Brief overview of the product and its core value proposition.

## 2. Problem Statement

### 2.1 Current Pain Points

- User struggle 1
- User struggle 2

### 2.2 Market Gap

Current solutions fail to address:
- Gap 1
- Gap 2

## 3. Product Goals

### 3.1 Primary Objectives

- Objective 1: Metrics for success
- Objective 2: Timeline

### 3.2 Success Criteria

- KPI 1: Target value
- KPI 2: Target value

## 4. User Personas

### Primary Persona

**Name:** Alex (Age: 28-35)

**Goals:**
- Primary goal 1
- Primary goal 2

**Pain Points:**
- Pain 1
- Pain 2

**Behaviors:**
- Behavior 1
- Behavior 2

## 5. Functional Requirements

### 5.1 Core Features

#### Feature 1: Name
- **Priority:** P0 (Must have)
- **User Story:** As a user, I want to...
- **Acceptance Criteria:**
  - Criteria 1
  - Criteria 2

### 5.2 Secondary Features

| Feature | Priority | User Story |
|---------|----------|------------|
| Feature 2 | P1 | User story... |
| Feature 3 | P2 | User story... |

## 6. Non-Functional Requirements

| Requirement | Priority | Target |
|-------------|----------|--------|
| Performance | P0 | < 2s response time |
| Security | P0 | SOC2 compliant |
| Scalability | P1 | 10k concurrent users |

## 7. Technical Constraints

- Must use existing infrastructure
- Budget constraints
- Timeline limitations

## 8. Risks & Mitigations

| Risk | Impact | Probability | Mitigation Strategy |
|------|--------|--------------|-------------------|
| Risk 1 | High | Medium | Strategy 1 |
| Risk 2 | Medium | Low | Strategy 2 |

## 9. Success Metrics

- Metric 1: Target value
- Metric 2: Target value
- Metric 3: Target value

## 10. Appendix

### 10.1 Glossary

- **Term 1**: Definition
- **Term 2**: Definition

### 10.2 References

1. Reference 1
2. Reference 2
`
  }
]
