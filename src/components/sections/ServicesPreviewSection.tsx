import Image from 'next/image'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { services } from '@/data/services'

interface ServiceDict {
  title: string
  shortDescription: string
}

interface ServicesPreviewSectionProps {
  title: string
  description: string
  serviceTexts: Record<string, ServiceDict>
  ctaLabel: string
  locale: string
}

// TODO: Replace with client-provided real assets before launch.
const serviceImages: Record<string, string> = {
  billboard: '/images/billboard.jpg',
  'metro-reklam': '/images/metrobus-raket.jpg',
  'dijital-ekran': '/images/dijital-ekran.jpg',
  lightbox: '/images/lightbox.jpg',
  'pole-banner': '/images/pole-banner.jpg',
  'raket-reklam': '/images/durak-reklam.jpg',
}

export function ServicesPreviewSection({
  title,
  description,
  serviceTexts,
  ctaLabel,
  locale,
}: ServicesPreviewSectionProps) {
  const servicesHref = locale === 'tr' ? '/hizmetler' : `/${locale}/services`

  return (
    <Section id="services">
      <Container>
        <SectionHeader title={title} description={description} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service) => {
            const text = serviceTexts[service.slug]
            if (!text) return null
            const image = serviceImages[service.slug]
            return (
              <Link
                key={service.slug}
                href={servicesHref}
                className="group relative rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl block"
              >
                {image && (
                  <Image
                    src={image}
                    alt={`${text.title} | ThaB Media`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {!image && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgStyle}`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/85 transition-colors duration-300" />

                <div className={`absolute ${service.accentPosition === 'top-left' ? 'top-5 left-6' : service.accentPosition === 'top-right' ? 'top-5 right-6' : 'bottom-20 right-6'}`}>
                  <div className="w-8 h-[3px] bg-accent rounded-full" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-white leading-snug">
                    {text.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors">
                    {text.shortDescription}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="mt-8 md:mt-10 flex justify-end">
          <Link
            href={servicesHref}
            className="text-sm font-medium text-white/60 hover:text-accent transition-colors flex items-center gap-1.5"
          >
            {ctaLabel}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
