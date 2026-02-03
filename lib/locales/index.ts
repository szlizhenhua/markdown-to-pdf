import { en } from './en'
import { zhCN } from './zh-cn'
import { zhTW } from './zh-tw'
import { es } from './es'
import { fr } from './fr'
import { de } from './de'
import { it } from './it'
import { pt } from './pt'
import { ru } from './ru'
import { ja } from './ja'
import { ko } from './ko'
import { ar } from './ar'
import { hi } from './hi'
import { tr } from './tr'
import { nl } from './nl'
import { sv } from './sv'
import { pl } from './pl'
import { vi } from './vi'
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
  es,
  fr,
  de,
  it,
  pt,
  ru,
  'zh-cn': zhCN,
  'zh-tw': zhTW,
  ja,
  ko,
  ar,
  hi,
  tr,
  nl,
  sv,
  pl,
  vi,
} as const satisfies Record<Language, LocaleTranslations>

export const defaultLocale: Language = 'en'

export function getLocale(locale: Language = defaultLocale): LocaleTranslations {
  return locales[locale] || locales[defaultLocale]
}
