import { en } from './en'
import { zhCN } from './zh-cn'
import { zhTW } from './zh-tw'
import type { LocaleTranslations } from './types'

export type Language =
  | 'en'
  | 'es'
  | 'fr'
  | 'de'
  | 'it'
  | 'pt'
  | 'ru'
  | 'zh-cn'
  | 'zh-tw'
  | 'ja'
  | 'ko'
  | 'ar'
  | 'hi'
  | 'tr'
  | 'nl'
  | 'sv'
  | 'pl'
  | 'vi'

export const locales = {
  en,
  es: en,
  fr: en,
  de: en,
  it: en,
  pt: en,
  ru: en,
  'zh-cn': zhCN,
  'zh-tw': zhTW,
  ja: en,
  ko: en,
  ar: en,
  hi: en,
  tr: en,
  nl: en,
  sv: en,
  pl: en,
  vi: en,
} as const satisfies Record<Language, LocaleTranslations>

export const defaultLocale: Language = 'en'

export function getLocale(locale: Language = defaultLocale): LocaleTranslations {
  return locales[locale] || locales[defaultLocale]
}
