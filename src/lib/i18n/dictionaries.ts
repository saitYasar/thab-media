import 'server-only'
import type { Locale } from './config'

const dictionaries = {
  tr: () => import('./dictionaries/tr.json').then((m) => m.default),
  en: () => import('./dictionaries/en.json').then((m) => m.default),
  fr: () => import('./dictionaries/fr.json').then((m) => m.default),
}

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
