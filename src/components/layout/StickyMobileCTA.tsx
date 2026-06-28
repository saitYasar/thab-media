interface StickyMobileCTAProps {
  label: string
  href: string
}

export function StickyMobileCTA({ label, href }: StickyMobileCTAProps) {
  return (
    <div className="sm:hidden">
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm border-t border-border-default px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={href}
          className="block w-full rounded-lg bg-accent text-white text-center py-3 text-sm font-semibold hover:bg-accent-hover transition-colors"
        >
          {label}
        </a>
      </div>
    </div>
  )
}
