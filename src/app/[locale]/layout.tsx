import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Playfair_Display, Inter } from 'next/font/google'
import { hasLocale } from '@/lib/i18n/dictionaries'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppFloatingButton } from '@/components/layout/WhatsAppFloatingButton'
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA'
import { ScrollProgressButton } from '@/components/layout/ScrollProgressButton'
import { services } from '@/data/services'
import '../globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!hasLocale(locale)) return {}

  const dict = await getDictionary(locale)

  return {
    title: dict.meta.siteTitle,
    description: dict.meta.siteDescription,
    robots: 'noindex, nofollow',
    icons: { icon: '/logo.svg' },
  }
}

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }, { locale: 'fr' }]
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(locale)) notFound()

  const dict = await getDictionary(locale)
  const contactHref = locale === 'tr' ? '/iletisim' : `/${locale}/contact`

  const serviceNames = services.slice(0, 4).map((s) => ({
    slug: s.slug,
    title: (dict.services[s.slug as keyof typeof dict.services])?.title ?? s.slug,
  }))

  return (
    <html lang={locale} className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="min-h-dvh flex flex-col bg-bg-default text-text-primary font-body antialiased pb-[70px] sm:pb-0">
        <Header locale={locale} dictionary={dict.common} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dictionary={dict.common} footerDict={dict.footer} serviceNames={serviceNames} />
        <WhatsAppFloatingButton ariaLabel={dict.whatsapp.ariaLabel} />
        <StickyMobileCTA label={dict.common.cta.getQuote} href={contactHref} />
        <ScrollProgressButton />
      </body>
    </html>
  )
}
