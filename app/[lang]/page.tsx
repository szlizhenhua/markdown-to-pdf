import { Metadata } from 'next'
import Home from '../page'
import { locales, getLocale, Language } from '@/lib/locales'

type Props = {
  params: Promise<{ lang: Language }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const lang = params.lang
  const t = getLocale(lang)

  // Construct alternates
  const languages: Record<string, string> = {}
  Object.keys(locales).forEach(l => {
     languages[l] = `https://markdown-to-pdf.org/${l}`
  })

  return {
    title: t.title || 'Markdown to PDF Converter',
    description: t.subtitle || 'Convert Markdown to professional PDFs',
    alternates: {
        canonical: `https://markdown-to-pdf.org/${lang}`,
        languages: languages
    }
  }
}

export default async function Page(props: Props) {
  // Ensure params are awaited if they serve as a boundary, 
  // though Home doesn't take props here, awaiting it is good practice in Next 15.
  await props.params; 
  return <Home />
}

