import type { Metadata } from 'next'
import { AboutContent } from '@/components/about-content'
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
     languages[l] = `https://markdown-to-pdf.org/${l}/about`
  })

  return {
    title: `${t.footer.links.aboutUs} | ${t.title}`,
    description: t.footer.description,
    alternates: {
        canonical: `https://markdown-to-pdf.org/${params.lang}/about`,
        languages: languages
    }
  }
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
