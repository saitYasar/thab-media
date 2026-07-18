'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/lib/site-config'

interface FooterProps {
  locale: string
  dictionary: {
    navigation: Record<string, string>
    cta: Record<string, string>
  }
  footerDict: {
    description: string
    navTitle: string
    servicesTitle: string
    contactTitle: string
    email: string
    address?: string
    copyright: string
    kvkk: string
    privacy: string
    cookies: string
  }
  serviceNames?: { slug: string; title: string }[]
}

export function Footer({ locale, dictionary, footerDict, serviceNames }: FooterProps) {
  const prefix = locale === 'tr' ? '' : `/${locale}`
  const pathname = usePathname()

  const navLinks = [
    { href: `${prefix}/`, label: dictionary.navigation.home },
    { href: `${prefix}/hizmetler`, label: dictionary.navigation.services },
    { href: `${prefix}/lokasyonlar`, label: dictionary.navigation.locations },
    { href: `${prefix}/hakkimizda`, label: dictionary.navigation.about },
    { href: `${prefix}/iletisim`, label: dictionary.navigation.contact },
  ]

  const legalLinks = [
    { href: `${prefix}/gizlilik-politikasi`, label: footerDict.kvkk },
    { href: `${prefix}/gizlilik-politikasi`, label: footerDict.privacy },
    { href: `${prefix}/gizlilik-politikasi`, label: footerDict.cookies },
  ]

  return (
    <footer className="bg-[#060e1f] text-white">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Image src="/logo.svg" alt="ThaB Media" width={110} height={61} className="brightness-0 invert mb-5" />
              <p className="text-sm text-white/45 leading-relaxed max-w-[280px]">
                {footerDict.description}
              </p>
              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-block mt-4 text-sm text-white/60 hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              )}
            </div>

            {/* Navigation column */}
            <div>
              <h3 className="text-sm font-semibold mb-5 text-white/90">{footerDict.navTitle}</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => {
                  const isCurrentPage = pathname === link.href || pathname === link.href + '/'
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          if (isCurrentPage) {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }
                        }}
                        className="text-sm text-white/45 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Services column */}
            <div>
              <h3 className="text-sm font-semibold mb-5 text-white/90">{footerDict.servicesTitle}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2.5">
                {serviceNames ? (
                  serviceNames.map((svc) => (
                    <li key={svc.slug}>
                      <Link href={`${prefix}/hizmetler/${svc.slug}`} className="text-[13px] text-white/45 hover:text-white transition-colors leading-snug">
                        {svc.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link href={`${prefix}/hizmetler`} className="text-[13px] text-white/45 hover:text-white transition-colors">
                      {dictionary.navigation.services}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h3 className="text-sm font-semibold mb-5 text-white/90">{footerDict.contactTitle}</h3>
              <ul className="space-y-3 text-sm text-white/45">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                    {footerDict.email}
                  </a>
                </li>
                {siteConfig.phone && (
                  <li>
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                      {siteConfig.phone}
                    </a>
                  </li>
                )}
                {siteConfig.address && (
                  <li className="text-white/40 leading-relaxed">
                    {siteConfig.address}
                  </li>
                )}
              </ul>
              <div className="mt-6">
                <Link
                  href={`${prefix}/iletisim`}
                  className="inline-flex items-center rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white/70 hover:bg-white/[0.06] hover:text-white transition-all"
                >
                  {dictionary.cta.contactUs}
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              {footerDict.copyright}
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {legalLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-xs text-white/30 hover:text-white/60 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
