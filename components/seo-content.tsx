import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, FileJson, Zap, Lock, Smartphone, Globe } from 'lucide-react'

export function SeoContent() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl space-y-16">
      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Why Use Our Markdown to PDF Converter?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Privacy Focused
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your data is safe with us. All conversions happen locally in your browser. We never upload your Markdown files to any server.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Instant Conversion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                No waiting queues. Our optimized engine converts your documents instantly, supporting large files with ease.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileJson className="h-5 w-5 text-primary" />
                Rich Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Full support for GFM (GitHub Flavored Markdown), KaTeX math formulas, Mermaid diagrams, and code syntax highlighting.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Guide Section */}
      <section className="bg-muted/30 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">How to Convert Markdown to PDF</h2>
        <div className="space-y-4 text-lg">
          <div className="flex gap-4">
            <div className="flex-none bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="font-semibold mb-1">Write or Paste Markdown</h3>
              <p className="text-muted-foreground">Type directly into our real-time editor or paste your existing Markdown code. You can also drag and drop .md files.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="font-semibold mb-1">Customize Styling</h3>
              <p className="text-muted-foreground">Choose from our professional themes (Academic, Modern, etc.) and adjust font sizes, margins, and paper size (A4, Letter).</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-none bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="font-semibold mb-1">Download PDF</h3>
              <p className="text-muted-foreground">Click the Export button to instantly get your formatted PDF document, ready for sharing or printing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Is this tool free?</h3>
            <p className="text-muted-foreground">Yes, our Markdown to PDF converter is 100% free for both personal and commercial use.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Do you store my data?</h3>
            <p className="text-muted-foreground">No. We process everything in your browser. Your documents never leave your device.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Does it support mathematical equations?</h3>
            <p className="text-muted-foreground">Yes! We use KaTeX to render complex mathematical formulas and equations beautifully.</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Can I create diagrams?</h3>
            <p className="text-muted-foreground">Absolutely. We support Mermaid.js for creating flowcharts, sequence diagrams, and gantt charts from text.</p>
          </div>
        </div>
      </section>

      {/* Content for AdSense Value */}
      <section className="prose prose-lg max-w-none text-muted-foreground">
        <h3>Comprehensive Markdown Solution</h3>
        <p>
          Whether you are a student writing a thesis, a developer documenting code, or a writer drafting a novel, our Markdown editor provides the tools you need. 
          With features like <strong>real-time preview</strong>, <strong>word count tracking</strong>, and <strong>focus mode</strong>, you can write without distractions.
        </p>
        <p>
          Our converter handles all standard Markdown syntax including headers, lists, links, images, and blockquotes. 
          Advanced users will appreciate the support for code blocks with language-specific syntax highlighting, footnotes, and task lists.
        </p>
      </section>
    </div>
  )
}
