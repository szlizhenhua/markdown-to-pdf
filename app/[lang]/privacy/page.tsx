import type { Metadata } from 'next'
import { PrivacyContent } from '@/components/privacy-content'
import { LegalHeader } from '@/components/legal-header'
import { SiteFooter } from '@/components/site-footer'
import { locales, getLocale, Language } from '@/lib/locales'

type Props = {
  params: Promise<{ lang: Language }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const t = getLocale(params.lang)
  const languages: Record<string, string> = {}
  Object.keys(locales).forEach(l => {
     languages[l] = `https://markdown-to-pdf.org/${l}/privacy`
  })

  return {
    title: `${t.footer.legal.privacyPolicy} | ${t.title}`,
    description: 'Privacy Policy for Markdown to PDF Converter. We prioritize your data privacy and security.',
    alternates: {
        canonical: `https://markdown-to-pdf.org/${params.lang}/privacy`,
        languages: languages
    }
  }
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
