import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/lib/i18n/dictionaries'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/sections/PageHero'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(locale)) notFound()

  const dict = await getDictionary(locale)
  const contactHref = locale === 'tr' ? '/iletisim' : `/${locale}/contact`

  return (
    <>
      <PageHero
        title={dict.about.title}
        description={dict.about.subtitle}
        image="/images/pole-banner.jpg"
      />

      {/* Company intro */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="w-8 h-[3px] bg-accent rounded-full mb-5" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-heading leading-snug">
                {dict.about.subtitle}
              </h2>
              <p className="mt-5 text-text-muted leading-relaxed">
                {dict.about.description}
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[260px] md:h-[320px]">
              {/* TODO: Replace with ThaB Media team/office photo */}
              <Image
                src="/images/billboard.jpg"
                alt={`${dict.about.title} | ThaB Media`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section bg="subtle">
        <Container>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-heading">
              {dict.about.values.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {dict.about.values.items.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white border border-border-default p-6 md:p-7 transition-all duration-200 hover:border-primary/15 hover:shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1 h-[1px] bg-border-default" />
                </div>
                <h3 className="font-heading text-lg font-bold text-text-heading">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#0a1430] to-[#0d1a3e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <Container className="relative text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
            {dict.home.finalCta.title}
          </h2>
          <p className="mt-4 text-white/45 leading-relaxed max-w-lg mx-auto">
            {dict.home.finalCta.description}
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href={contactHref}>
              {dict.common.cta.getQuote}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
