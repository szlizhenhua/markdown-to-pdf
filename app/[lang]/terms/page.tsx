import type { Metadata } from 'next'
import { TermsContent } from '@/components/terms-content'
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
     languages[l] = `https://markdown-to-pdf.org/${l}/terms`
  })

  return {
    title: `${t.footer.legal.termsOfService} | ${t.title}`,
    description: 'Terms of Service for Markdown to PDF Converter. Usage guidelines and legal agreements.',
    alternates: {
        canonical: `https://markdown-to-pdf.org/${params.lang}/terms`,
        languages: languages
    }
  }
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
