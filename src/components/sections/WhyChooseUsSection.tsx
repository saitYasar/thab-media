import { Container } from '@/components/ui/Container'

interface WhyItem {
  title: string
  description: string
}

interface WhyChooseUsSectionProps {
  title: string
  subtitle: string
  items: WhyItem[]
}

export function WhyChooseUsSection({ title, subtitle, items }: WhyChooseUsSectionProps) {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-[#0a1430] via-[#0d1a3e] to-[#0a1430] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        <div className="absolute top-[20%] right-0 w-[300px] h-[300px] rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — editorial heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="w-10 h-[3px] bg-accent rounded-full mb-6" />
            <h2 className="font-heading text-2xl sm:text-3xl md:text-[38px] md:leading-[1.2] font-bold text-white">
              {title}
            </h2>
            <p className="mt-5 text-base md:text-[17px] text-white/45 leading-relaxed max-w-md">
              {subtitle}
            </p>
          </div>

          {/* Right — 4 feature cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {items.map((item, i) => (
              <div
                key={item.title}
                className="relative rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm p-6 md:p-7 transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.05]"
              >
                {/* Number accent */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1 h-[1px] bg-white/[0.08]" />
                </div>
                <h3 className="font-heading text-[17px] md:text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-white/40 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
