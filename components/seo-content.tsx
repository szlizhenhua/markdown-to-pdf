import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileJson, Zap, Lock } from 'lucide-react'

export function SeoContent() {
  return (
    <div className="container mx-auto max-w-6xl space-y-20 px-4 py-16">
      {/* Features Section */}
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-background via-background to-muted/60 px-6 py-12 shadow-[0_24px_80px_-60px_rgba(8,20,14,0.45)] md:px-10">
        <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 left-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Why choose us
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Why Use Our Markdown to PDF Converter?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              An Apple-like experience for publishing: clean, fast, and beautifully consistent from draft to PDF.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="border-white/60 bg-card/85 backdrop-blur-xl shadow-[0_18px_50px_-32px_rgba(8,20,14,0.45)]">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Lock className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-lg font-semibold">Privacy Focused</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Your data is safe with us. All conversions happen locally in your browser. We never upload your Markdown files to any server.
              </CardContent>
            </Card>

            <Card className="border-white/60 bg-card/85 backdrop-blur-xl shadow-[0_18px_50px_-32px_rgba(8,20,14,0.45)]">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Zap className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-lg font-semibold">Instant Conversion</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                No waiting queues. Our optimized engine converts your documents instantly, supporting large files with ease.
              </CardContent>
            </Card>

            <Card className="border-white/60 bg-card/85 backdrop-blur-xl shadow-[0_18px_50px_-32px_rgba(8,20,14,0.45)]">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                    <FileJson className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-lg font-semibold">Rich Support</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Full support for GFM (GitHub Flavored Markdown), KaTeX math formulas, Mermaid diagrams, and code syntax highlighting.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="relative overflow-hidden rounded-3xl border bg-muted/40 px-6 py-12 md:px-10">
        <div className="pointer-events-none absolute -top-20 left-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Simple workflow
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              How to Convert Markdown to PDF
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A calm, three-step flow designed to keep you focused and get a polished PDF in seconds.
            </p>
          </div>
          <div className="space-y-4 text-base">
            <div className="rounded-2xl border bg-background/80 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary ring-1 ring-primary/20">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Write or Paste Markdown</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Type directly into our real-time editor or paste your existing Markdown code. You can also drag and drop .md files.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border bg-background/80 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary ring-1 ring-primary/20">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Customize Styling</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Choose from our professional themes (Academic, Modern, etc.) and adjust font sizes, margins, and paper size (A4, Letter).
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border bg-background/80 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary ring-1 ring-primary/20">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Download PDF</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Click the Export button to instantly get your formatted PDF document, ready for sharing or printing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            FAQ
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold">Is this tool free?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Yes, our Markdown to PDF converter is 100% free for both personal and commercial use.
            </p>
          </div>
          <div className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold">Do you store my data?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              No. We process everything in your browser. Your documents never leave your device.
            </p>
          </div>
          <div className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold">Does it support mathematical equations?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Yes! We use KaTeX to render complex mathematical formulas and equations beautifully.
            </p>
          </div>
          <div className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold">Can I create diagrams?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Absolutely. We support Mermaid.js for creating flowcharts, sequence diagrams, and gantt charts from text.
            </p>
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
