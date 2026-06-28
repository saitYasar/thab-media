import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { LanguageSwitcher } from './LanguageSwitcher'
import { HeaderClient } from './HeaderClient'

interface HeaderProps {
  locale: string
  dictionary: {
    navigation: Record<string, string>
    cta: Record<string, string>
  }
}

export function Header({ locale, dictionary }: HeaderProps) {
  const prefix = locale === 'tr' ? '' : `/${locale}`

  const navItems = [
    { href: `${prefix}/hizmetler`, label: dictionary.navigation.services },
    { href: `${prefix}/lokasyonlar`, label: dictionary.navigation.locations },
    { href: `${prefix}/reklam-onizleme`, label: dictionary.navigation.adPreview },
    { href: `${prefix}/hakkimizda`, label: dictionary.navigation.about },
    { href: `${prefix}/iletisim`, label: dictionary.navigation.contact },
  ]

  return (
    <header className="sticky top-0 z-40 bg-white backdrop-blur-md border-b border-border-default">
      <Container>
        <div className="flex items-center justify-between h-[60px] lg:h-[68px]">
          <Link href={`${prefix}/`} className="flex-shrink-0">
            <Image src="/logo.svg" alt="ThaB Media" width={100} height={56} priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] xl:text-[15px] font-medium text-text-primary hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:gap-3">
            <div className="hidden lg:block">
              <LanguageSwitcher currentLocale={locale} />
            </div>
            <Link
              href={`${prefix}/iletisim`}
              className="hidden sm:inline-flex items-center rounded-lg bg-accent text-white px-4 lg:px-5 py-2 lg:py-2.5 text-[13px] lg:text-sm font-semibold whitespace-nowrap hover:bg-accent-hover transition-all active:scale-[0.98]"
            >
              {dictionary.cta.getQuote}
            </Link>
            <HeaderClient locale={locale} dictionary={dictionary} />
          </div>
        </div>
      </Container>
    </header>
  )
}
