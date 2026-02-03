import { en } from './en'
import { zhCN } from './zh-cn'
import { zhTW } from './zh-tw'
import type { LocaleTranslations } from './types'

export type Language = 'en' | 'zh-cn' | 'zh-tw'

export const locales = {
  en,
  'zh-cn': zhCN,
  'zh-tw': zhTW
} as const satisfies Record<Language, LocaleTranslations>

export const defaultLocale: Language = 'en'

export function getLocale(locale: Language = defaultLocale): LocaleTranslations {
  return locales[locale] || locales[defaultLocale]
}
