import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Markdown to PDF</h3>
            <p className="text-sm text-muted-foreground">
              Professional document conversion tool for everyone. Free, secure, and fast.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Questions or feedback?
            </p>
            <a href="mailto:support@markdown-to-pdf.org" className="text-sm text-primary hover:underline">
              support@markdown-to-pdf.org
            </a>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Markdown to PDF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
