'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { LanguageSwitcher } from './LanguageSwitcher'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  locale: string
  dictionary: {
    navigation: Record<string, string>
    cta: Record<string, string>
  }
}

export function MobileMenu({ isOpen, onClose, locale, dictionary }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!isOpen) return null

  const prefix = locale === 'tr' ? '' : `/${locale}`

  const navItems = [
    { href: `${prefix}/`, label: dictionary.navigation.home },
    { href: `${prefix}/hizmetler`, label: dictionary.navigation.services },
    { href: `${prefix}/lokasyonlar`, label: dictionary.navigation.locations },
    { href: `${prefix}/reklam-onizleme`, label: dictionary.navigation.adPreview },
    { href: `${prefix}/hakkimizda`, label: dictionary.navigation.about },
    { href: `${prefix}/iletisim`, label: dictionary.navigation.contact },
  ]

  const menu = (
    <div className="fixed inset-0 z-[9999] lg:hidden" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
      <div className="fixed right-0 top-0 h-full w-[280px] max-w-[85vw] bg-[#ffffff] shadow-2xl flex flex-col overflow-y-auto">
        <div className="flex items-center justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-subtle transition-colors"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block rounded-lg px-4 py-3 text-[15px] font-medium text-text-primary hover:bg-bg-subtle transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 space-y-6 border-t border-border-default">
          <Link
            href={`${prefix}/iletisim`}
            onClick={onClose}
            className="block w-full rounded-lg bg-accent text-white text-center py-3 text-sm font-semibold hover:bg-accent-hover transition-colors shadow-sm"
          >
            {dictionary.cta.getQuote}
          </Link>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </div>
    </div>
  )

  return createPortal(menu, document.body)
}
