interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center p-4">
      <div className="font-heading text-3xl md:text-4xl font-bold text-primary">
        {value}
      </div>
      <div className="mt-2 text-sm text-text-muted font-medium">
        {label}
      </div>
    </div>
  )
}
