interface BadgeProps {
  variant?: 'primary' | 'muted'
  children: React.ReactNode
}

const variants = {
  primary: 'bg-primary/10 text-primary',
  muted: 'bg-bg-muted text-text-muted',
}

export function Badge({ variant = 'primary', children }: BadgeProps) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
