import Image from 'next/image'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { mockReferences } from '@/data/mockReferences'

interface ReferencesSectionProps {
  title: string
  subtitle: string
}

export function ReferencesSection({ title, subtitle }: ReferencesSectionProps) {
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
        {/* MOCK DATA — replace with real brand logos before launch */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {mockReferences.map((brand) => (
            <div
              key={brand.slug}
              className="flex items-center justify-center h-[68px] md:h-[76px] rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] px-4"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} | ThaB Media`}
                width={140}
                height={40}
                className="w-auto h-6 md:h-7 opacity-60 hover:opacity-90 transition-opacity invert"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
