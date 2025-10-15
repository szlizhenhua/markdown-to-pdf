import { en } from './en'
import { zh } from './zh'

export type Language = 'en' | 'zh'
export type TranslationKeys = typeof en

export const locales = {
  en,
  zh
} as const

export const defaultLocale: Language = 'en'

export function getLocale(locale: Language = defaultLocale) {
  return locales[locale] || locales[defaultLocale]
}