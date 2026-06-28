interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  className?: string
}

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
}

export function Container({ size = 'xl', children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  )
}
