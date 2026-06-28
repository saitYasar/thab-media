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
import { serviceDetails } from '@/data/serviceDetails'

const serviceImages: Record<string, string> = {
  billboard: '/images/billboard.jpg',
  'metro-reklam': '/images/metrobus-raket.jpg',
  'dijital-ekran': '/images/dijital-ekran.jpg',
  lightbox: '/images/lightbox.jpg',
  'pole-banner': '/images/pole-banner.jpg',
  'raket-reklam': '/images/durak-reklam.jpg',
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!hasLocale(locale)) return {}
  const dict = await getDictionary(locale)
  const text = dict.services[slug as keyof typeof dict.services]
  if (!text) return {}
  return {
    title: `${text.title} | ThaB Media`,
    description: text.shortDescription,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!hasLocale(locale)) notFound()

  const dict = await getDictionary(locale)
  const text = dict.services[slug as keyof typeof dict.services]
  const detail = serviceDetails.find((s) => s.slug === slug)
  const detailDict = dict.serviceDetail[slug as keyof typeof dict.serviceDetail]

  if (!text || !detail || !detailDict || typeof detailDict === 'string') notFound()

  const contactHref = locale === 'tr' ? '/iletisim' : `/${locale}/contact`
  const servicesPrefix = locale === 'tr' ? '/hizmetler' : `/${locale}/services`

  return (
    <>
      <PageHero
        title={text.title}
        description={text.shortDescription}
        image={detail.image}
      />

      {/* Benefits */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="w-8 h-[3px] bg-accent rounded-full mb-5" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-heading">
                {dict.serviceDetail.benefitsTitle}
              </h2>
              <ul className="mt-6 space-y-4">
                {detailDict.benefits.map((benefit: string) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-text-muted leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[260px] md:h-[320px]">
              <Image
                src={detail.image}
                alt={`${text.title} | ThaB Media`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section bg="subtle">
        <Container>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-heading">
              {dict.serviceDetail.useCasesTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
            {detailDict.useCases.map((useCase: string, i: number) => (
              <div key={useCase} className="flex items-start gap-3 rounded-xl bg-white border border-border-default p-5">
                <span className="text-sm font-bold text-accent mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-text-muted leading-relaxed">{useCase}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container size="md">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-heading">
              {dict.serviceDetail.processTitle}
            </h2>
          </div>
          <div className="space-y-0">
            {detailDict.process.map((step: string, i: number) => (
              <div key={step} className="flex gap-4 md:gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-white">{i + 1}</span>
                  </div>
                  {i < detailDict.process.length - 1 && (
                    <div className="w-[2px] h-8 bg-border-default my-1" />
                  )}
                </div>
                <p className="text-text-muted leading-relaxed pt-2 pb-4">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section bg="subtle">
        <Container size="md">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-heading">
              {dict.serviceDetail.faqTitle}
            </h2>
          </div>
          <div className="space-y-4">
            {detailDict.faq.map((item: { question: string; answer: string }) => (
              <div key={item.question} className="rounded-xl bg-white border border-border-default p-5 md:p-6">
                <h3 className="font-heading text-[16px] font-bold text-text-heading">{item.question}</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Related Services */}
      <Section>
        <Container>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-heading">
              {dict.serviceDetail.relatedTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {detail.relatedSlugs.map((relSlug) => {
              const relText = dict.services[relSlug as keyof typeof dict.services]
              const relImage = serviceImages[relSlug]
              if (!relText) return null
              return (
                <Link
                  key={relSlug}
                  href={`${servicesPrefix}/${relSlug}`}
                  className="group relative rounded-2xl overflow-hidden min-h-[180px] sm:min-h-[200px] block transition-all duration-300 hover:scale-[1.015] hover:shadow-xl"
                >
                  {relImage && (
                    <Image src={relImage} alt={`${relText.title} | ThaB Media`} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="w-6 h-[2px] bg-accent rounded-full mb-2" />
                    <h3 className="text-base font-bold text-white font-heading">{relText.title}</h3>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" href={contactHref}>
              {dict.common.cta.getQuote}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
