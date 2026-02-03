"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Language, getLocale, defaultLocale, locales } from '../locales'
import type { LocaleTranslations } from '../locales/types'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: LocaleTranslations
  availableLanguages: { code: Language; name: string; nativeName: string; flag: string }[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const languageNames = {
  en: { name: 'English', nativeName: 'English', flag: '🇺🇸' },
  es: { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  fr: { name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  de: { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  it: { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  pt: { name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  ru: { name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  'zh-cn': { name: 'Chinese (Simplified)', nativeName: '简体中文', flag: '🇨🇳' },
  'zh-tw': { name: 'Chinese (Traditional)', nativeName: '繁體中文', flag: '🇹🇼' },
  ja: { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  ko: { name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  ar: { name: 'Arabic', nativeName: 'بالعربية', flag: '🇸🇦' },
  hi: { name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  tr: { name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  nl: { name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
  sv: { name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪' },
  pl: { name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  vi: { name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' }
}

const getLanguageFromPath = (pathname: string): Language | null => {
  const segment = pathname.split('/')[1]?.toLowerCase()
  if (segment && locales[segment as Language]) {
    return segment as Language
  }
  return null
}

const getPathForLanguage = (lang: Language, currentPath: string) => {
  const localePattern = Object.keys(locales)
    .map((code) => code.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'))
    .join('|')
  const withoutLocale = currentPath.replace(new RegExp(`^/(${localePattern})(?=/|$)`), '')
  const normalized = withoutLocale.startsWith('/') ? withoutLocale : `/${withoutLocale}`
  const suffix = normalized === '/' ? '' : normalized
  return `/${lang}${suffix}`
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLocale)
  const pathname = usePathname()
  const router = useRouter()

  // 从 localStorage 读取语言设置
  useEffect(() => {
    const pathLanguage = getLanguageFromPath(pathname)
    const savedLanguage = localStorage.getItem('language')
    const normalizedSavedLanguage = savedLanguage === 'zh' ? 'zh-cn' : savedLanguage
    let nextLanguage: Language | null = null

    if (pathLanguage && locales[pathLanguage]) {
      nextLanguage = pathLanguage
    } else if (normalizedSavedLanguage && locales[normalizedSavedLanguage as Language]) {
      nextLanguage = normalizedSavedLanguage as Language
    } else {
      // 检测浏览器语言
      const browserLanguage = navigator.language.toLowerCase().replace('_', '-')
      if (locales[browserLanguage as Language]) {
        nextLanguage = browserLanguage as Language
      } else if (browserLanguage.startsWith('zh')) {
        if (browserLanguage.includes('tw') || browserLanguage.includes('hk') || browserLanguage.includes('hant')) {
          nextLanguage = 'zh-tw'
        } else {
          nextLanguage = 'zh-cn'
        }
      } else {
        const baseLanguage = browserLanguage.split('-')[0]
        if (locales[baseLanguage as Language]) {
          nextLanguage = baseLanguage as Language
        }
      }
    }

    if (nextLanguage) {
      setLanguageState((prev) => (prev === nextLanguage ? prev : nextLanguage))
      localStorage.setItem('language', nextLanguage)
    }
  }, [pathname])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    const pathLanguage = getLanguageFromPath(pathname)
    if (pathLanguage || language === 'en') {
      return
    }
    const nextPath = getPathForLanguage(language, pathname)
    if (nextPath !== pathname) {
      router.replace(nextPath)
    }
  }, [language, pathname, router])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = getLocale(language)

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    availableLanguages: Object.entries(languageNames).map(([code, names]) => ({
      code: code as Language,
      ...names
    }))
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
