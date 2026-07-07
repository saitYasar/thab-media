'use client'

import { useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'

interface MarqueeCardData {
  title: string
  label: string
}

interface MediaMarqueeSectionProps {
  title: string
  description: string
  cards: MarqueeCardData[]
  altSuffix: string
  locale: string
  ctaLabel: string
}

const cardImages = [
  '/images/billboard.jpg',
  '/images/metrobus-raket.jpg',
  '/images/dijital-ekran.jpg',
  '/images/lightbox.jpg',
  '/images/pole-banner.jpg',
  '/images/durak-reklam.jpg',
  '/images/otobus-giydirme.jpg',
  '/images/totem.jpg',
]

function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
      mq.addEventListener('change', cb)
      return () => mq.removeEventListener('change', cb)
    },
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    () => false,
  )
}

export function MediaMarqueeSection({ title, description, cards, altSuffix, locale, ctaLabel }: MediaMarqueeSectionProps) {
  const servicesHref = locale === 'tr' ? '/hizmetler' : `/${locale}/services`
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const shouldAnimate = !prefersReducedMotion && !isPaused

  const marqueeCards = cards.map((card, i) => ({
    ...card,
    image: cardImages[i] ?? cardImages[0],
  }))

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#060e1f] overflow-hidden" id="formats">
      <Container>
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[40px] md:leading-[1.2] font-bold text-white">
            {title}
          </h2>
          <p className="mt-4 md:mt-5 text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </Container>

      {/* Marquee row 1 — scrolls left */}
      <div
        className="relative mb-4 md:mb-5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#060e1f] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#060e1f] to-transparent z-10 pointer-events-none" />
        <div
          className={`flex gap-4 md:gap-5 ${shouldAnimate ? 'animate-marquee-left' : ''}`}
          style={{ width: 'max-content' }}
        >
          {[...marqueeCards, ...marqueeCards].map((card, i) => (
            <MarqueeCardItem key={`${card.title}-${i}`} card={card} altSuffix={altSuffix} href={servicesHref} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 — scrolls right */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative"
      >
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#060e1f] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#060e1f] to-transparent z-10 pointer-events-none" />
        <div
          className={`flex gap-4 md:gap-5 ${shouldAnimate ? 'animate-marquee-right' : ''}`}
          style={{ width: 'max-content' }}
        >
          {[...marqueeCards.slice(4), ...marqueeCards.slice(0, 4), ...marqueeCards.slice(4), ...marqueeCards.slice(0, 4)].map((card, i) => (
            <MarqueeCardItem key={`r2-${card.title}-${i}`} card={card} altSuffix={altSuffix} href={servicesHref} />
          ))}
        </div>
      </div>

      <Container>
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
    </section>
  )
}

function MarqueeCardItem({ card, altSuffix, href }: { card: { title: string; label: string; image: string }; altSuffix: string; href: string }) {
  return (
    <Link href={href} className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] h-[180px] sm:h-[200px] md:h-[240px] rounded-2xl overflow-hidden group block">
      <Image
        src={card.image}
        alt={`${card.title} ${altSuffix} | ThaB Media`}
        fill
        sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <div className="w-7 h-[3px] bg-accent rounded-full mb-2.5" />
        <h3 className="text-base md:text-lg font-bold text-white font-heading leading-snug">
          {card.title}
        </h3>
        <p className="text-xs md:text-sm text-white/50 mt-0.5">{card.label}</p>
      </div>
    </Link>
  )
}
