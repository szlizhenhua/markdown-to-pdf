import type { Metadata } from 'next'
import { PrivacyContent } from '@/components/privacy-content'
import { LegalHeader } from '@/components/legal-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Markdown to PDF Converter',
  description: 'Privacy Policy for Markdown to PDF Converter. We prioritize your data privacy and security.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main>
        <PrivacyContent />
      </main>
      <SiteFooter />
    </div>
  )
}
