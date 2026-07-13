import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/lib/i18n/dictionaries'
import { AdPreviewStudioSection } from '@/components/sections/AdPreviewStudioSection'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: `${dict.adPreviewPage.meta.title} | ThaB Media`,
    description: dict.adPreviewPage.meta.description,
  }
}

export default async function AdPreviewPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(locale)) notFound()

  const dict = await getDictionary(locale)
  const contactHref = locale === 'tr' ? '/iletisim' : `/${locale}/iletisim`

  return (
    <AdPreviewStudioSection
      title={dict.adPreviewPage.title}
      description={dict.adPreviewPage.description}
      selectFormat={dict.adPreviewPage.selectFormat}
      uploadImage={dict.adPreviewPage.uploadImage}
      resetImage={dict.adPreviewPage.resetImage}
      changeBackground={dict.adPreviewPage.changeBackground}
      placeholder={dict.adPreviewPage.placeholder}
      privacyNote={dict.adPreviewPage.privacyNote}
      cta={dict.adPreviewPage.cta}
      ctaHref={contactHref}
      formats={dict.adPreviewPage.formats}
      formatDescriptions={dict.adPreviewPage.formatDescriptions}
    />
  )
}
