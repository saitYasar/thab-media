import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'

interface Step {
  title: string
  description: string
}

interface HowItWorksSectionProps {
  title: string
  steps: Step[]
}

export function HowItWorksSection({ title, steps }: HowItWorksSectionProps) {
  return (
    <Section bg="subtle">
      <Container size="lg">
        <SectionHeader title={title} />
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div className="hidden md:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px bg-border-default" aria-hidden="true" />

          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="relative mx-auto w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold z-10">
                {i + 1}
              </div>
              <h3 className="mt-5 font-heading text-lg md:text-xl font-bold text-text-heading leading-snug">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm text-text-muted leading-relaxed max-w-[280px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
