import Link from 'next/link'
import { Container } from '@/components/ui/Container'

interface AdPreviewTeaserProps {
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}

export function AdPreviewTeaserSection({ title, description, ctaLabel, ctaHref }: AdPreviewTeaserProps) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#060e1f] to-[#0a1430] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.08] px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent tracking-wide uppercase">Studio</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl md:text-[38px] md:leading-[1.2] font-bold text-white">
            {title}
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/45 leading-relaxed max-w-xl mx-auto">
            {description}
          </p>

          {/* Mini mockup preview */}
          <div className="mt-8 flex justify-center gap-3 sm:gap-4">
            {/* Billboard mini */}
            <div className="w-20 h-12 sm:w-28 sm:h-16 rounded-md bg-white/[0.04] border border-white/[0.08] relative overflow-hidden">
              <div className="absolute inset-x-[10%] top-[20%] bottom-[30%] border border-white/10 rounded-[2px] flex items-center justify-center">
                <span className="text-[6px] sm:text-[8px] text-white/20 font-medium">Billboard</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-[20%] bg-white/[0.03]" />
            </div>
            {/* Bus stop mini */}
            <div className="w-12 h-16 sm:w-16 sm:h-20 rounded-md bg-white/[0.04] border border-white/[0.08] relative overflow-hidden">
              <div className="absolute inset-x-[25%] top-[12%] bottom-[12%] border border-white/10 rounded-[2px] flex items-center justify-center">
                <span className="text-[5px] sm:text-[7px] text-white/20 font-medium">Raket</span>
              </div>
            </div>
            {/* Digital screen mini */}
            <div className="w-14 h-16 sm:w-16 sm:h-20 rounded-md bg-white/[0.04] border border-white/[0.08] relative overflow-hidden">
              <div className="absolute inset-x-[15%] top-[10%] bottom-[15%] border border-white/10 rounded-[3px] flex items-center justify-center">
                <span className="text-[5px] sm:text-[7px] text-white/20 font-medium">DOOH</span>
              </div>
            </div>
            {/* Bus back mini */}
            <div className="w-20 h-14 sm:w-24 sm:h-16 rounded-md bg-white/[0.04] border border-white/[0.08] relative overflow-hidden hidden sm:block">
              <div className="absolute inset-x-[12%] top-[20%] bottom-[30%] border border-white/10 rounded-[2px] flex items-center justify-center">
                <span className="text-[6px] sm:text-[8px] text-white/20 font-medium">Bus</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-lg bg-accent text-white px-6 py-3.5 text-sm font-semibold hover:bg-accent-hover transition-all shadow-sm"
            >
              {ctaLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
