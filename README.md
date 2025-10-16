# Markdown to PDF Converter

A professional Markdown to PDF converter with support for mathematical expressions, diagrams, code highlighting, and custom themes.

## Features

- **Real-time Preview**: See your document as you type with live preview
- **Mathematical Expressions**: Full support for LaTeX-style math with KaTeX
- **Diagrams**: Create flowcharts, sequence diagrams, and more with Mermaid
- **Code Highlighting**: Syntax highlighting for multiple programming languages
- **Drag & Drop**: Easily upload Markdown files by dragging and dropping
- **Table of Contents**: Automatically generated table of contents
- **Responsive Design**: Works on desktop and mobile devices
- **Privacy Focused**: All processing happens in your browser - no server uploads

## Supported Markdown Elements

- Headers (H1-H6)
- Text formatting (bold, italic, strikethrough)
- Lists (ordered and unordered)
- Links and images
- Code blocks with syntax highlighting
- Tables
- Blockquotes
- Horizontal rules
- Inline and block math expressions
- Mermaid diagrams

## How to Use

1. Type or paste your Markdown content in the editor
2. Preview your document in real-time
3. Click "Download PDF" to export your document

You can also upload existing Markdown files by clicking the "Upload" button or dragging and dropping files into the editor area.

## Technical Details

This converter uses modern web technologies to provide a seamless experience:

- **Next.js**: React-based framework for optimal performance
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Marked**: Markdown parser with extensive customization
- **KaTeX**: Fast math typesetting library
- **Mermaid**: Diagram generation from text
- **html2pdf.js**: Client-side PDF generation
- **Highlight.js**: Code syntax highlighting

All processing happens directly in your browser - your documents are never uploaded to any server, ensuring complete privacy.

## Browser Support

The converter works in all modern browsers that support JavaScript and HTML5:

- Chrome 65+
- Firefox 60+
- Safari 12+
- Edge 79+

## Export Options

### PDF Export

The converter generates high-quality PDF documents with:

- Proper page breaks to avoid splitting content
- Preserved formatting and styling
- Embedded mathematical expressions
- Rendered diagrams
- Syntax-highlighted code blocks
- Customizable paper sizes and themes

## Privacy & Security

Your documents are processed entirely in your browser. No data is sent to any server, ensuring:

- Complete privacy
- No storage of your documents
- No tracking or analytics on your content
- Secure processing

## Getting Started

To run this application locally:

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License.