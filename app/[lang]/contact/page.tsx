import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact-content'
import { LegalHeader } from '@/components/legal-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Contact Us | Markdown to PDF Converter',
  description: 'Get in touch with the Markdown to PDF Converter team for support, feedback, or inquiries.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main>
        <ContactContent />
      </main>
      <SiteFooter />
    </div>
  )
}
