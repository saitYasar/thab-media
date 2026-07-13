import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

interface HeroLabels {
  billboard: string
  billboardSub: string
  digitalScreen: string
  metrobus: string
  lightbox: string
  busStop: string
}

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary: string
  badge: string
  altText: string
  labels: HeroLabels
  locale: string
}

export function HeroSection({ title, subtitle, ctaPrimary, ctaSecondary, badge, altText, labels, locale }: HeroSectionProps) {
  const contactHref = locale === 'tr' ? '/iletisim' : `/${locale}/contact`
  const servicesHref = locale === 'tr' ? '/hizmetler' : `/${locale}/services`

  return (
    <section className="relative overflow-hidden bg-[#060e24] min-h-[600px] lg:min-h-[680px]">
      {/* Background image with heavy overlay */}
      <Image
        src="/images/billboard.jpg"
        alt={`${altText} | ThaB Media`}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-20"
      />
      {/* Gradient overlays for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060e24]/95 via-[#060e24]/80 to-[#060e24]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060e24] via-transparent to-[#060e24]/30" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-[18%] right-[8%] w-[200px] h-[2px] bg-gradient-to-r from-transparent via-accent/25 to-transparent rotate-[-12deg]" />
        <div className="absolute top-[50%] right-[3%] w-[160px] h-[1.5px] bg-gradient-to-r from-transparent via-accent/15 to-transparent rotate-[-8deg]" />
        <div className="absolute bottom-[25%] left-[3%] w-[130px] h-[1.5px] bg-gradient-to-r from-transparent via-accent/12 to-transparent rotate-[6deg]" />
        <div className="absolute top-[10%] right-[20%] w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <Container size="xl" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center py-16 md:py-22 lg:py-28">
          {/* Left — text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-sm px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              <span className="text-xs font-medium text-white/80 tracking-wide">{badge}</span>
            </div>

            <h1 className="font-heading text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.08] tracking-tight">
              {title}
            </h1>

            <p className="mt-6 text-base sm:text-[17px] text-white/55 max-w-lg leading-relaxed mx-auto lg:mx-0">
              {subtitle}
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4">
              <Button variant="primary" size="lg" href={contactHref} className="w-full sm:w-auto">
                {ctaPrimary}
              </Button>
              <Button variant="ghost" size="lg" href="#formats" className="w-full sm:w-auto border border-white/15 text-white hover:bg-white/10">
                {ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Right — visual composition with real images */}
          <div className="order-1 lg:order-2">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="grid grid-cols-12 grid-rows-6 gap-2.5 sm:gap-3 h-[300px] sm:h-[360px] lg:h-[440px]">
                {/* Billboard — large panel */}
                <Link href={servicesHref} className="col-span-7 row-span-4 rounded-2xl overflow-hidden relative border border-white/[0.08] group">
                  <Image src="/images/billboard.jpg" alt={`${labels.billboard} | ThaB Media`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="300px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 sm:p-5">
                    <div className="w-7 h-[3px] bg-accent rounded-full mb-2" />
                    <span className="text-white/90 text-sm font-semibold tracking-wide">{labels.billboard}</span>
                    <div className="text-white/40 text-xs mt-0.5">{labels.billboardSub}</div>
                  </div>
                </Link>

                {/* DOOH — vertical */}
                <Link href={servicesHref} className="col-span-5 row-span-3 rounded-2xl overflow-hidden relative border border-white/[0.08] group">
                  <Image src="/images/led-ekranlar.jpg" alt={`${labels.digitalScreen} | ThaB Media`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="200px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                    <div className="w-5 h-[2px] bg-accent rounded-full mb-1.5" />
                    <span className="text-white/90 text-xs font-semibold">{labels.digitalScreen}</span>
                  </div>
                </Link>

                {/* Metro raket */}
                <Link href={servicesHref} className="col-span-5 row-span-3 rounded-2xl overflow-hidden relative border border-white/[0.08] group">
                  <Image src="/images/metrobus-tam-kaplama.jpg" alt={`${labels.metrobus} | ThaB Media`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="200px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                    <div className="w-5 h-[2px] bg-accent rounded-full mb-1.5" />
                    <span className="text-white/90 text-xs font-semibold">{labels.metrobus}</span>
                  </div>
                </Link>

                {/* Lightbox */}
                <Link href={servicesHref} className="col-span-4 row-span-2 rounded-2xl overflow-hidden relative border border-white/[0.08] group">
                  <Image src="/images/lightbox.jpg" alt={`${labels.lightbox} | ThaB Media`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="150px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-2.5 sm:p-3">
                    <div className="w-4 h-[2px] bg-accent/70 rounded-full mb-1" />
                    <span className="text-white/80 text-[10px] sm:text-[11px] font-medium">{labels.lightbox}</span>
                  </div>
                </Link>

                {/* CLP Raket */}
                <Link href={servicesHref} className="col-span-3 row-span-2 rounded-2xl overflow-hidden relative border border-white/[0.08] group">
                  <Image src="/images/clp-raket.jpg" alt={`${labels.busStop} | ThaB Media`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="120px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-2 sm:p-2.5">
                    <div className="w-3.5 h-[2px] bg-accent/60 rounded-full mb-1" />
                    <span className="text-white/70 text-[9px] sm:text-[10px] font-medium">{labels.busStop}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
