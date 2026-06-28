interface SectionProps {
  bg?: 'default' | 'subtle' | 'dark'
  className?: string
  id?: string
  children: React.ReactNode
}

const bgStyles = {
  default: 'bg-bg-default',
  subtle: 'bg-bg-subtle',
  dark: 'bg-bg-dark text-text-inverse',
}

export function Section({ bg = 'default', className = '', id, children }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-20 lg:py-24 ${bgStyles[bg]} ${className}`}>
      {children}
    </section>
  )
}
