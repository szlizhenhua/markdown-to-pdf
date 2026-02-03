import { en } from './en'
import { zh } from './zh'
import type { LocaleTranslations } from './types'

export type Language = 'en' | 'zh'

export const locales = {
  en,
  zh
} as const satisfies Record<Language, LocaleTranslations>

export const defaultLocale: Language = 'en'

export function getLocale(locale: Language = defaultLocale): LocaleTranslations {
  return locales[locale] || locales[defaultLocale]
}