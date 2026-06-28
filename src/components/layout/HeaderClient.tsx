'use client'

import { useState } from 'react'
import { MobileMenu } from './MobileMenu'

interface HeaderClientProps {
  locale: string
  dictionary: {
    navigation: Record<string, string>
    cta: Record<string, string>
  }
}

export function HeaderClient({ locale, dictionary }: HeaderClientProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setMenuOpen(true)}
        className="lg:hidden p-2 text-text-primary hover:text-primary"
        aria-label="Open menu"
        aria-expanded={menuOpen}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        locale={locale}
        dictionary={dictionary}
      />
    </>
  )
}
