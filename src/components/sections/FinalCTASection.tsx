import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

interface FinalCTASectionProps {
  title: string
  description: string
  buttonLabel: string
  locale: string
}

export function FinalCTASection({ title, description, buttonLabel, locale }: FinalCTASectionProps) {
  const contactHref = locale === 'tr' ? '/iletisim' : `/${locale}/contact`

  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-bg-dark" aria-hidden="true" />
      <Container size="md" className="relative">
        <div className="text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-[40px] md:leading-[1.15] font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-5 md:mt-6 text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="mt-10">
            <Button variant="primary" size="lg" href={contactHref}>
              {buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
