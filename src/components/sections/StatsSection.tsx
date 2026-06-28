import { Container } from '@/components/ui/Container'

interface StatItem {
  value: string
  label: string
}

interface StatsSectionProps {
  stats: StatItem[]
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-primary">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i > 0 ? 'md:border-l md:border-white/15' : ''}`}
            >
              <div className="text-[32px] sm:text-[38px] md:text-[44px] font-heading font-bold text-white leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-[13px] md:text-sm text-white/70 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
