import type { Metadata } from 'next'
import { TermsContent } from '@/components/terms-content'
import { LegalHeader } from '@/components/legal-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Markdown to PDF Converter',
  description: 'Terms of Service for Markdown to PDF Converter. Usage guidelines and legal agreements.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main>
        <TermsContent />
      </main>
      <SiteFooter />
    </div>
  )
}
