import Image from 'next/image'
import { Container } from '@/components/ui/Container'

interface PageHeroProps {
  title: string
  description?: string
  image?: string
}

export function PageHero({ title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#060e24] py-16 md:py-20 lg:py-24">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-15"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060e24]/80 via-[#060e24]/60 to-[#060e24]" />
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <Container className="relative text-center">
        <div className="w-8 h-[3px] bg-accent rounded-full mx-auto mb-6" />
        <h1 className="font-heading text-[28px] sm:text-[36px] md:text-[44px] font-bold text-white leading-[1.12] tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </Container>
    </section>
  )
}
