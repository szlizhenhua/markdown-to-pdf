"use client"

import Link from 'next/link'
import Image from 'next/image'
import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { useLocale } from '@/lib/locales/client'
import { useLanguage } from '@/lib/contexts/language-context'

export function LegalHeader() {
  const t = useLocale()
  const { language } = useLanguage()
  const homePath = language === 'en' ? '/' : `/${language}`

  return (
    <header className="border-b bg-card no-print sticky top-0 z-50">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-3">
          <Link href={homePath} className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Image
              src="/placeholder-logo.png"
              alt="logo"
              width={32}
              height={32}
              className="rounded flex-shrink-0 sm:w-10 sm:h-10"
            />
            <div className="font-medium text-sm sm:text-base truncate hidden sm:block">
              {t.title}
            </div>
            <div className="font-medium text-sm sm:hidden">MD→PDF</div>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
