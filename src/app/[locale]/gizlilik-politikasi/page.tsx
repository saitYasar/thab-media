import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/lib/i18n/dictionaries'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: `${dict.privacy.title} | ThaB Media`,
    description: dict.privacy.subtitle,
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(locale)) notFound()

  const dict = await getDictionary(locale)

  return (
    <>
      <PageHero
        title={dict.privacy.title}
        description={dict.privacy.subtitle}
      />

      <Section>
        <Container size="md">
          <p className="text-sm text-text-muted mb-8">{dict.privacy.lastUpdated}</p>

          <div className="space-y-8">
            {dict.privacy.sections.map((section: { heading: string; content: string }, i: number) => (
              <div key={i}>
                <h2 className="text-lg font-heading font-bold text-text-heading mb-3">
                  {section.heading}
                </h2>
                <p className="text-text-muted leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
