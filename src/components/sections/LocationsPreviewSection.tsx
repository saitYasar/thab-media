import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { mockLocations } from '@/data/mockLocations'

interface LocationsPreviewSectionProps {
  title: string
  description: string
  ctaLabel: string
  mapLabel: string
  totalLabel: string
  unit: string
  altSuffix: string
  locale: string
}

export function LocationsPreviewSection({ title, description, ctaLabel, mapLabel, totalLabel, unit, altSuffix, locale }: LocationsPreviewSectionProps) {
  const locationsHref = locale === 'tr' ? '/lokasyonlar' : `/${locale}/locations`
  const totalCount = mockLocations.reduce((sum, loc) => sum + loc.count, 0)

  return (
    <Section>
      <Container>
        <SectionHeader title={title} description={description} />

        {/* City cards grid — MOCK DATA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {mockLocations.map((loc, i) => (
            <div
              key={loc.city}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:shadow-xl ${
                i === 0 ? 'sm:col-span-2 lg:col-span-2 min-h-[220px] sm:min-h-[280px]' : 'min-h-[180px] sm:min-h-[220px]'
              }`}
            >
              <Image
                src={loc.image}
                alt={`${loc.city} ${altSuffix} | ThaB Media`}
                fill
                sizes={i === 0 ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="w-7 h-[3px] bg-accent rounded-full mb-2.5" />
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-white leading-snug">
                      {loc.city}
                    </h3>
                    <p className="text-xs text-white/45 mt-0.5">{loc.region}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl md:text-3xl font-heading font-bold text-white leading-none">
                      {loc.count}+
                    </span>
                    <p className="text-[10px] text-white/40 mt-0.5">{unit}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total summary bar */}
        <div className="mt-6 md:mt-8 rounded-xl bg-primary/[0.04] border border-border-default p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-medium text-text-heading">{mapLabel}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-heading font-bold text-primary">{totalCount}+</span>
            <span className="text-sm text-text-muted">{totalLabel}</span>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button variant="secondary" href={locationsHref}>
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </Section>
  )
}
