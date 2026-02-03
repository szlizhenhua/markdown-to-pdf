export const en = {
  // Header
  title: "Markdown to PDF Converter",
  subtitle: "Convert Markdown to professional PDFs",

  // Controls
  buttons: {
    upload: "Upload",
    showPreview: "Show Preview",
    hidePreview: "Hide Preview",
    getPDF: "Get PDF",
    generatingPDF: "Generating PDF...",
    settings: "Settings",
    tableOfContents: "Table of Contents",
    exportHTML: "HTML",
    exportMarkdown: "MD"
  },

  // Editor
  editor: {
    title: "Markdown Editor",
    placeholder: "Start typing your Markdown here...\n\n# Heading 1\n## Heading 2\n\n**Bold** and *italic* text\n\n- List item 1\n- List item 2\n\n```javascript\nconsole.log('Hello World!');\n```\n\n| Column 1 | Column 2 |\n|---------|----------|\n| Data 1  | Data 2   |",
    dragDropText: "Drop your Markdown file here",
    dragDropSubtext: "Supports .md and .txt files",
    loading: "Loading diagram...",
    rendering: "Rendering diagram...",
    stats: {
      characters: "Characters",
      words: "Words",
      lines: "Lines",
      readingTime: "Reading time"
    }
  },

  // Preview
  preview: {
    title: "Preview",
    theme: "theme"
  },

  // Settings
  settings: {
    title: "Settings",
    theme: "Theme",
    paperSize: "Paper Size",
    fontSize: "Font Size"
  },

  // Table of Contents
  toc: {
    title: "Table of Contents"
  },

  // Themes
  themes: {
    default: "Default",
    academic: "Academic",
    modern: "Modern",
    minimal: "Minimal"
  },

  // Paper Sizes
  paperSizes: {
    a4: "A4",
    letter: "Letter",
    legal: "Legal"
  },

  // Font Sizes
  fontSizes: {
    10: "10pt",
    11: "11pt",
    12: "12pt",
    14: "14pt",
    16: "16pt"
  },

  // Messages
  messages: {
    pdfGenerationError: "PDF generation failed",
    pdfExportError: "PDF export failed, please check console for details",
    mermaidRenderError: "Mermaid render error",
    mermaidSyntaxError: "Please check Mermaid syntax",
    mermaidExampleSyntax: "Example syntax:",
    mermaidRenderRetry: "Mermaid render attempt {count} failed, will retry in 100ms",
    mermaidFinalError: "Mermaid render final failed",
    unknownError: "Unknown error",
    highlightJsError: "Highlight.js error for language \"{lang}\":",
    katexRenderError: "KaTeX render error:",
    mermaidInitError: "Mermaid initialization error:",
    mermaidLoading: "Loading diagram...",
    mermaidRendering: "Rendering diagram...",
    templateLoaded: "Template loaded",
    templateLoadedMessage: "Template has been applied to the editor.",
    fileTooLarge: "File is too large. Maximum size is 5MB.",
    invalidFileType: "Invalid file type. Please upload a .md or .txt file.",
    fileUploadFailed: "Failed to upload file. Please try again.",
    fileUploaded: "File uploaded successfully",
    resetComplete: "Reset complete",
    resetCompleteMessage: "Editor and settings have been reset to default.",
    copySuccess: "Copied to clipboard",
    copyFailed: "Failed to copy to clipboard",
    networkError: "Network error. Please check your connection.",
    quotaExceeded: "Storage quota exceeded. Please clear some browser data.",
    autoSaveFailed: "Auto-save failed. Your changes may not be saved."
  },

  // Templates
  templates: {
    title: "Select a Template",
    description: "Choose from professionally designed templates to get started quickly",
    selectTemplate: "Click a template to load it into the editor. Your current content will be replaced.",
    categories: {
      all: "All Templates",
      basic: "Basic",
      academic: "Academic",
      technical: "Technical",
      documentation: "Documentation"
    }
  },

  // Default Content
  defaultContent: `# Markdown to PDF Converter

> 🎯 **Convert your Markdown documents to professional PDFs with math formulas, flowcharts, code highlighting, and multiple themes**

## ✨ Features

### 📊 **Complete Markdown Support**
- **Text Formatting**: **Bold**, *Italic*, ~~Strikethrough~~, \`Inline code\`
- **Heading Levels**: Full H1-H6 heading structure support
- **Lists**: Ordered lists, unordered lists, task lists
- **Links & Images**: Automatic link recognition, image embedding support
- **Tables**: Support for alignment and complex table structures
- **Quotes**: Block quotes and nested quotes

### 🧮 **Math Formula Rendering (KaTeX)**
**Inline Formula**: Einstein's mass-energy equation $E = mc^2$

**Block Formula**:
$$\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}$$

**Complex Formula**:
$$\\sum_{i=1}^{n} x_i = x_1 + x_2 + \\cdots + x_n$$

**Matrix Representation**:
$$\\begin{bmatrix}
a & b \\\\
c & d
\\end{bmatrix}$$

### 📈 **Diagram Drawing (Mermaid)**

#### Flowchart
\`\`\`mermaid
graph TD
    A[Start] --> B{Condition}
    B -->|Yes| C[Execute A]
    B -->|No| D[Execute B]
    C --> E[End]
    D --> E
\`\`\`

#### Graph Diagram
\`\`\`mermaid
graph LR
    A[User] --> B[System]
    B --> A[Response]
\`\`\`

### 💻 **Code Highlighting**

#### JavaScript Example
\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Usage example
console.log(fibonacci(10)); // Output: 55
\`\`\`

#### Python Example
\`\`\`python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)
\`\`\`

### 📋 **Table Features**

| Feature | Status | Description | Shortcut |
|---------|:------:|-------------|----------|
| Math Formulas | ✅ | Full KaTeX support | \`$...\$ |
| Flowcharts | ✅ | Mermaid diagrams | \`mermaid |
| Code Highlighting | ✅ | Multi-language support | \`lang |
| Tables | ✅ | Complete table functionality | \| \| \| |
| Links | ✅ | Automatic link recognition | [text](url) |

---

## 📖 User Guide

### 🚀 **Quick Start**

1. **Edit Content**
   - Type or paste Markdown content in the left editor
   - Real-time preview with WYSIWYG

2. **Upload Files**
   - Click "Upload" button to select .md or .txt files
   - Or drag and drop files directly into the editor area

3. **Customize Styles**
   - Choose theme style (Default/Academic/Modern/Minimal)
   - Adjust paper size and font size
   - Real-time preview of effects

4. **Export PDF**
   - Click "Get PDF" button
   - Automatically download generated PDF document
   - Filename auto-generated based on document title

### ⌨️ **Markdown Syntax Cheat Sheet**

#### Basic Syntax
\`\`\`markdown
# Level 1 Heading
## Level 2 Heading
### Level 3 Heading

**Bold text** or __Bold text__
*Italic text* or _Italic text__
~~Strikethrough~~

- Unordered list item
  - Nested list item

1. Ordered list item
2. Second item
   1. Nested ordered item

> Quote text
>> Nested quote

[Link text](https://example.com)
![Image description](image.jpg)

\`Inline code\`

\`\`\`language
Code block
\`\`\`

### 💡 **Usage Tips**

1. **Math Formulas**
   - Use \`$...\` to wrap inline formulas
   - Use \`$$...$$\` to wrap block formulas
   - Full LaTeX math syntax supported

2. **Code Blocks**
   - Specify language for syntax highlighting: \`\`\`javascript
   - Supported languages: JavaScript, Python, JSON, Bash, etc.

3. **Diagram Drawing**
   - Use Mermaid syntax to create flowcharts, graphs, etc.
   - Support for multiple diagram types: graph, flowchart, etc.

4. **Table Formatting**
   - Use \`|\` to separate columns
   - Use \`-\` to separate headers and content
   - Support for alignment: \`:---\` (left), \`---:\` (right), \`:---:\` (center)

---

## ❓ Frequently Asked Questions (FAQ)

### Q1: What Markdown syntax is supported?
**A**: This tool supports standard Markdown syntax and GitHub Flavored Markdown (GFM) extensions, including tables, task lists, strikethrough, etc. It also supports math formulas (KaTeX) and diagram drawing (Mermaid).

### Q2: What to do if math formulas don't display?
**A**: Please ensure you use the correct syntax:
- Inline formulas: \`$formula$\`
- Block formulas: \`$$formula$$\`
If still not displaying, please check if the formula syntax is correct.

### Q3: How is the quality of exported PDFs?
**A**: We use professional PDF generation engines to ensure output quality:
- High-definition vector graphics
- Clear text rendering
- Correct page pagination
- Maintain original formatting

### Q4: Is my data secure?
**A**: Completely secure! All processing is done locally in your browser:
- No data uploaded to any server
- No storage of your document content
- Data automatically cleared after processing

### Q5: Which browsers are supported?
**A**: Supports all modern browsers:
- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

### Q6: How to handle large documents?
**A**: For large documents, we recommend:
- Process in sections
- Adjust font size appropriately
- Use page breaks for reasonable segmentation
- Preview to confirm effects before export

### Q7: What is the exported PDF filename?
**A**: Filename is auto-generated based on the first line title of the document, for example:
- Title "Project Report" → "Project Report.pdf"
- Use "document.pdf" when no title

---

## 📞 Technical Support

### 🔧 **Tech Stack**
- **Next.js** - React framework
- **Tailwind CSS** - Styling framework
- **Marked** - Markdown parser
- **KaTeX** - Math formula rendering
- **Mermaid** - Diagram drawing
- **html2pdf.js** - PDF generation
- **Highlight.js** - Code highlighting

### 📧 **Contact Us**
[Open Source](https://github.com/szlizhenhua/markdown-to-pdf). For questions or suggestions, please contact us through:
- GitHub Issues: Report issues or request features
- Email feedback: support@markdown-to-pdf.org

### 🔄 **Changelog**
- **v1.0.0** - Initial release
- KaTeX math formula support
- Mermaid diagram support
- Multiple theme style selection
- Responsive design optimization

---

<div style="text-align: center; margin-top: 3em; padding: 2em; border-top: 1px solid #eee; color: #666;">
  <p><strong>Markdown to PDF Converter</strong></p>
  <p>Professional Markdown to PDF Conversion Tool</p>
  <p style="font-size: 0.9em; margin-top: 1em;">
    Made with ❤️ | Privacy First
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2025 Markdown to PDF. All rights reserved.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Markdown to PDF Converter | Professional Document Export",
    description: "Convert Markdown to professional PDF documents with math, code, diagrams, TOC, themes. Publication-quality output for academic and business use.",
    keywords: "Markdown, PDF, converter, KaTeX, Mermaid, code highlighting, table of contents, themes, export, academic, professional"
  },

  // SEO Content
  seoContent: {
    whyChooseUs: {
      label: "Why choose us",
      title: "Why Use Our Markdown to PDF Converter?",
      subtitle: "An Apple-like experience for publishing: clean, fast, and beautifully consistent from draft to PDF.",
      features: {
        privacy: {
          title: "Privacy Focused",
          description: "Your data is safe with us. All conversions happen locally in your browser. We never upload your Markdown files to any server."
        },
        instant: {
          title: "Instant Conversion",
          description: "No waiting queues. Our optimized engine converts your documents instantly, supporting large files with ease."
        },
        richSupport: {
          title: "Rich Support",
          description: "Full support for GFM (GitHub Flavored Markdown), KaTeX math formulas, Mermaid diagrams, and code syntax highlighting."
        }
      }
    },
    howToConvert: {
      label: "Simple workflow",
      title: "How to Convert Markdown to PDF",
      subtitle: "A calm, three-step flow designed to keep you focused and get a polished PDF in seconds.",
      steps: {
        step1: {
          title: "Write or Paste Markdown",
          description: "Type directly into our real-time editor or paste your existing Markdown code. You can also drag and drop .md files."
        },
        step2: {
          title: "Customize Styling",
          description: "Choose from our professional themes (Academic, Modern, etc.) and adjust font sizes, margins, and paper size (A4, Letter)."
        },
        step3: {
          title: "Download PDF",
          description: "Click the Export button to instantly get your formatted PDF document, ready for sharing or printing."
        }
      }
    },
    faq: {
      label: "FAQ",
      title: "Frequently Asked Questions",
      items: {
        isFree: {
          question: "Is this tool free?",
          answer: "Yes, our Markdown to PDF converter is 100% free for both personal and commercial use."
        },
        dataStorage: {
          question: "Do you store my data?",
          answer: "No. We process everything in your browser. Your documents never leave your device."
        },
        mathSupport: {
          question: "Does it support mathematical equations?",
          answer: "Yes! We use KaTeX to render complex mathematical formulas and equations beautifully."
        },
        diagrams: {
          question: "Can I create diagrams?",
          answer: "Absolutely. We support Mermaid.js for creating flowcharts, sequence diagrams, and gantt charts from text."
        }
      }
    },
    comprehensive: {
      title: "Comprehensive Markdown Solution",
      description1: "Whether you are a student writing a thesis, a developer documenting code, or a writer drafting a novel, our Markdown editor provides the tools you need. With features like real-time preview, word count tracking, and focus mode, you can write without distractions.",
      description2: "Our converter handles all standard Markdown syntax including headers, lists, links, images, and blockquotes. Advanced users will appreciate the support for code blocks with language-specific syntax highlighting, footnotes, and task lists."
    }
  },

  // Footer
  footer: {
    tagline: "Markdown to PDF",
    subtitle: "Elegant conversions, every time.",
    description: "Professional document conversion tool for everyone. Free, secure, and fast.",
    legal: {
      title: "Legal",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service"
    },
    links: {
      title: "Links",
      aboutUs: "About Us",
      contact: "Contact"
    },
    connect: {
      title: "Connect",
      description: "Questions or feedback?"
    },
    copyright: "© {year} Markdown to PDF. All rights reserved.",
    designed: "Designed for clarity"
  }
}