import type { Metadata } from 'next'
import { AboutContent } from '@/components/about-content'
import { LegalHeader } from '@/components/legal-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'About Us | Markdown to PDF Converter',
  description: 'Learn more about Markdown to PDF Converter, our mission, and the team behind the tool.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <LegalHeader />
      <main>
        <AboutContent />
      </main>
      <SiteFooter />
    </div>
  )
}
