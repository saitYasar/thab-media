'use client'

import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { references } from '@/data/mockReferences'

interface ReferencesSectionProps {
  title: string
  subtitle: string
}

export function ReferencesSection({ title, subtitle }: ReferencesSectionProps) {
  const doubledRefs = [...references, ...references]

  return (
    <Section bg="dark">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[40px] md:leading-[1.2] font-bold text-white">
            {title}
          </h2>
          <p className="mt-4 md:mt-5 text-base md:text-lg text-white/45 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </Container>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#060e1f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#060e1f] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-4 w-max">
          {doubledRefs.map((brand, i) => (
            <div
              key={`${brand.slug}-${i}`}
              className="flex items-center justify-center h-[70px] md:h-[80px] w-[160px] md:w-[190px] flex-shrink-0 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm px-4"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} | ThaB Media`}
                width={160}
                height={50}
                className="w-auto h-7 md:h-9 opacity-70 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
