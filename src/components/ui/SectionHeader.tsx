interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
  as?: 'h2' | 'h3'
}

export function SectionHeader({
  title,
  description,
  centered = true,
  as: Tag = 'h2',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <Tag className="font-heading text-2xl sm:text-3xl md:text-[40px] md:leading-[1.2] font-bold text-text-heading">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 md:mt-5 text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
