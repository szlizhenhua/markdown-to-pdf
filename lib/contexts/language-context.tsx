"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, TranslationKeys, getLocale, defaultLocale, locales } from '../locales'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationKeys
  availableLanguages: { code: Language; name: string; nativeName: string; flag: string }[]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const languageNames = {
  en: { name: 'English', nativeName: 'English', flag: '🇺🇸' },
  zh: { name: 'Chinese', nativeName: '中文', flag: '🇨🇳' }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLocale)

  // 从 localStorage 读取语言设置
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && locales[savedLanguage]) {
      setLanguageState(savedLanguage)
    } else {
      // 检测浏览器语言
      const browserLanguage = navigator.language.split('-')[0] as Language
      if (locales[browserLanguage]) {
        setLanguageState(browserLanguage)
      }
    }
  }, [])

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

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}