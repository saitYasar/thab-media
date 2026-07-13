import Image from 'next/image'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
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

const PREVIEW_SLUGS = ['billboard', 'led-ekranlar', 'lightbox', 'megaboard', 'metrobus-tam-kaplama', 'otobus-tam-kaplama']

export function ServicesPreviewSection({
  title,
  description,
  serviceTexts,
  ctaLabel,
  locale,
}: ServicesPreviewSectionProps) {
  const servicesHref = locale === 'tr' ? '/hizmetler' : `/${locale}/services`
  const previewServices = services.filter(s => PREVIEW_SLUGS.includes(s.slug))

  return (
    <Section id="services">
      <Container>
        <SectionHeader title={title} description={description} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {previewServices.map((service) => {
            const text = serviceTexts[service.slug]
            if (!text) return null
            return (
              <Link
                key={service.slug}
                href={servicesHref}
                className="group relative rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] transition-all duration-300 hover:scale-[1.015] hover:shadow-2xl block"
              >
                <Image
                  src={service.image}
                  alt={`${text.title} | ThaB Media`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/85 transition-colors duration-300" />

                <div className="absolute top-5 left-6">
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
        <div className="mt-10 md:mt-12 text-center">
          <Button variant="primary" size="lg" href={servicesHref}>
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </Section>
  )
}
