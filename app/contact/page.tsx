import type { Metadata } from 'next'
import { LegalHeader } from '@/components/legal-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Contact Us | Markdown to PDF Converter',
  description: 'Get in touch with the Markdown to PDF Converter team for support, feedback, or inquiries.',
}

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="space-y-6">
          <p className="text-lg">
            We value your feedback and are here to help. Whether you have a feature request, a bug report, or just want to say hello, we&apos;d love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
              <p className="text-muted-foreground mb-4">For general questions about the service.</p>
              <a href="mailto:info@markdown-to-pdf.org" className="text-primary hover:underline">info@markdown-to-pdf.org</a>
            </div>

            <div className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-2">Technical Support</h3>
              <p className="text-muted-foreground mb-4">Having trouble with a conversion?</p>
              <a href="mailto:support@markdown-to-pdf.org" className="text-primary hover:underline">support@markdown-to-pdf.org</a>
            </div>
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Business Address</h2>
            <p>
              Markdown to PDF Team<br />
              123 Innovation Way<br />
              Tech City, TC 90210
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
