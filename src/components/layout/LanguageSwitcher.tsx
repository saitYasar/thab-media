'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, defaultLocale } from '@/lib/i18n/config'
import type { Locale } from '@/lib/i18n/config'

interface LanguageSwitcherProps {
  currentLocale: string
}

function getLocalePath(pathname: string, currentLocale: string, targetLocale: Locale): string {
  let pathWithoutLocale = pathname

  for (const locale of locales) {
    if (pathname.startsWith(`/${locale}/`)) {
      pathWithoutLocale = pathname.slice(`/${locale}`.length)
      break
    }
    if (pathname === `/${locale}`) {
      pathWithoutLocale = '/'
      break
    }
  }

  if (targetLocale === defaultLocale) {
    return pathWithoutLocale || '/'
  }

  return `/${targetLocale}${pathWithoutLocale}`
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-1 text-sm">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && <span className="mx-1 text-text-muted">|</span>}
          <Link
            href={getLocalePath(pathname, currentLocale, locale)}
            className={`uppercase transition-colors ${
              locale === currentLocale
                ? 'font-bold text-primary'
                : 'text-text-muted hover:text-primary'
            }`}
            aria-current={locale === currentLocale ? 'page' : undefined}
          >
            {locale}
          </Link>
        </span>
      ))}
    </div>
  )
}
