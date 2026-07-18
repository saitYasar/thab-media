import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/lib/i18n/dictionaries'
import { LocationsMapSection } from '@/components/sections/LocationsMapSection'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: dict.meta.locationsTitle,
    description: dict.meta.locationsDescription,
  }
}

export default async function LocationsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(locale)) notFound()

  const dict = await getDictionary(locale)

  return (
    <LocationsMapSection
      title={dict.locations.title}
      description={dict.locations.description}
      locale={locale}
    />
  )
}
