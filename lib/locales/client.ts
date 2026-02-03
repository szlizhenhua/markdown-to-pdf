"use client"

import { useLanguage } from '@/lib/contexts/language-context'
import type { LocaleTranslations } from './types'

export function useLocale(): LocaleTranslations {
  return useLanguage().t
}
