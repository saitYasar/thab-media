export const locales = ['tr', 'en', 'fr'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'tr'
