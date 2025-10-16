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
    tableOfContents: "Table of Contents"
  },

  // Editor
  editor: {
    title: "Markdown Editor",
    placeholder: "Enter your Markdown content here...",
    dragDropText: "Drop your Markdown file here",
    dragDropSubtext: "Supports .md and .txt files",
    loading: "Loading diagram...",
    rendering: "Rendering diagram..."
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
    mermaidRendering: "Rendering diagram..."
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
|---------|--------|-------------|----------|
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
For questions or suggestions, please contact us through:
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
    Made with ❤️ | Open Source | Privacy First
  </p>
  <p style="font-size: 0.8em; margin-top: 0.5em;">
    © 2024 Markdown to PDF. All rights reserved.
  </p>
</div>`,

  // SEO
  seo: {
    title: "Markdown to PDF Converter | Professional Document Export",
    description: "Convert Markdown to professional PDF documents with math, code, diagrams, TOC, themes. Publication-quality output for academic and business use.",
    keywords: "Markdown, PDF, converter, KaTeX, Mermaid, code highlighting, table of contents, themes, export, academic, professional"
  }
}