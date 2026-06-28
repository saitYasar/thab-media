import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/lib/i18n/dictionaries'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/sections/PageHero'
import { mockLocations } from '@/data/mockLocations'

/* MOCK DATA — districts per city for display */
const cityDistricts: Record<string, string[]> = {
  'İstanbul': ['Mecidiyeköy', 'Kadıköy', 'Beşiktaş', 'Şişli', 'Bakırköy', 'Taksim'],
  'Ankara': ['Kızılay', 'Çankaya', 'Ulus', 'Batıkent'],
  'İzmir': ['Alsancak', 'Konak', 'Bornova'],
  'Bursa': ['Osmangazi', 'Nilüfer'],
  'Antalya': ['Muratpaşa', 'Konyaaltı'],
  'Adana': ['Seyhan', 'Çukurova'],
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: dict.meta.locationsTitle,
    description: dict.meta.locationsDescription,
  }
}

export default async function LocationsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(locale)) notFound()

  const dict = await getDictionary(locale)
  const contactHref = locale === 'tr' ? '/iletisim' : `/${locale}/contact`
  const totalCount = mockLocations.reduce((sum, loc) => sum + loc.count, 0)

  return (
    <>
      <PageHero
        title={dict.locations.title}
        description={dict.locations.description}
        image="/images/locations/istanbul.jpg"
      />

      {/* City cards — MOCK DATA */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {mockLocations.map((loc, i) => (
              <Link
                key={loc.city}
                href={contactHref}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl block ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-2 min-h-[240px] sm:min-h-[300px]' : 'min-h-[200px] sm:min-h-[240px]'
                }`}
              >
                <Image
                  src={loc.image}
                  alt={`${loc.city} ${dict.locations.altSuffix} | ThaB Media`}
                  fill
                  sizes={i === 0 ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="w-7 h-[3px] bg-accent rounded-full mb-2.5" />
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h2 className="font-heading text-xl md:text-2xl font-bold text-white">{loc.city}</h2>
                      <p className="text-xs text-white/45 mt-1">
                        {cityDistricts[loc.city]?.join(' • ')}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl md:text-3xl font-heading font-bold text-white">{loc.count}+</span>
                      <p className="text-[10px] text-white/40">{dict.locations.unit}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-8 rounded-xl bg-primary/[0.04] border border-border-default p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-muted leading-relaxed max-w-lg">
              {dict.locations.description}
            </p>
            <div className="flex items-baseline gap-2 flex-shrink-0">
              <span className="text-3xl font-heading font-bold text-primary">{totalCount}+</span>
              <span className="text-sm text-text-muted">{dict.locations.unit}</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" href={contactHref}>
              {dict.locations.cta}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
