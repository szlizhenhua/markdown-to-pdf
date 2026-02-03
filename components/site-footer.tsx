"use client"

import Link from 'next/link'
import { useLocale } from '@/lib/locales/client'
import { useLanguage } from '@/lib/contexts/language-context'

export function SiteFooter() {
  const t = useLocale()
  const { language } = useLanguage()

  // 构建带语言前缀的路径
  const getLocalizedPath = (path: string) => {
    return language === 'en' ? path : `/${language}${path}`
  }

  return (
    <footer className="relative mt-16 border-t bg-gradient-to-b from-muted/40 via-background to-background py-12">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-20 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{t.footer.tagline}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">{t.footer.subtitle}</h3>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{t.footer.legal.title}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href={getLocalizedPath('/privacy')} className="text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.legal.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/terms')} className="text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.legal.termsOfService}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{t.footer.links.title}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href={getLocalizedPath('/about')} className="text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.links.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedPath('/contact')} className="text-muted-foreground transition-colors hover:text-foreground">
                  {t.footer.links.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{t.footer.connect.title}</h4>
            <p className="mt-4 text-sm text-muted-foreground">{t.footer.connect.description}</p>
            <a
              href="mailto:support@markdown-to-pdf.org"
              className="mt-2 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              support@markdown-to-pdf.org
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} Markdown to PDF. All rights reserved.</p>
          <p className="text-xs uppercase tracking-[0.3em]">{t.footer.designed}</p>
        </div>
      </div>
    </footer>
  )
}
