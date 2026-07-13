import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/lib/i18n/dictionaries'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/sections/PageHero'
import { services } from '@/data/services'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: dict.meta.servicesTitle,
    description: dict.meta.servicesDescription,
  }
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(locale)) notFound()

  const dict = await getDictionary(locale)
  const contactHref = locale === 'tr' ? '/iletisim' : `/${locale}/contact`
  const servicesPrefix = locale === 'tr' ? '/hizmetler' : `/${locale}/services`

  return (
    <>
      <PageHero
        title={dict.home.services.title}
        description={dict.home.services.description}
        image="/images/billboard.jpg"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map((service) => {
              const text = dict.services[service.slug as keyof typeof dict.services]
              if (!text) return null
              return (
                <Link
                  key={service.slug}
                  href={`${servicesPrefix}/${service.slug}`}
                  className="group relative rounded-2xl overflow-hidden min-h-[240px] sm:min-h-[280px] lg:min-h-[300px] transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl block"
                >
                  <Image
                    src={service.image}
                    alt={`${text.title} | ThaB Media`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10 group-hover:from-black/85 transition-colors duration-300" />
                  <div className="absolute top-5 left-6">
                    <div className="w-8 h-[3px] bg-accent rounded-full" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <h2 className="font-heading text-xl font-bold text-white leading-snug">
                      {text.title}
                    </h2>
                    <p className="mt-2 text-sm text-white/55 leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors">
                      {text.shortDescription}
                    </p>
                    <span className="inline-block mt-3 text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform">
                      {dict.common.cta.viewDetails} →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <Button variant="primary" size="lg" href={contactHref}>
              {dict.common.cta.getQuote}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
