import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="relative mt-16 border-t bg-gradient-to-b from-muted/40 via-background to-background py-12">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-20 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Markdown to PDF</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">Elegant conversions, every time.</h3>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Professional document conversion tool for everyone. Free, secure, and fast.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Connect</h4>
            <p className="mt-4 text-sm text-muted-foreground">Questions or feedback?</p>
            <a
              href="mailto:support@markdown-to-pdf.org"
              className="mt-2 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              support@markdown-to-pdf.org
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} Markdown to PDF. All rights reserved.</p>
          <p className="text-xs uppercase tracking-[0.3em]">Designed for clarity</p>
        </div>
      </div>
    </footer>
  )
}
