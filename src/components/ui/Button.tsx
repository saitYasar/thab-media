import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
}

const variants = {
  primary: 'bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md active:scale-[0.98]',
  secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.98]',
  ghost: 'text-primary hover:bg-primary/5 active:scale-[0.98]',
}

const sizeStyles = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-[15px]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  fullWidth = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variants[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={base}>
      {children}
    </button>
  )
}
