import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/lib/i18n/dictionaries'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { ContactForm } from '@/components/sections/ContactForm'
import { siteConfig } from '@/lib/site-config'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
  }
}

export default async function ContactPage({
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
        title={dict.contact.title}
        description={dict.contact.subtitle}
      />

      <Section>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm dictionary={dict.contact.form} services={dict.services} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border-default bg-bg-subtle p-6 md:p-8 space-y-6 sticky top-24">
                {/* Email */}
                <div>
                  <p className="text-sm font-semibold text-text-heading mb-1.5">
                    {dict.contact.info.email}
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-primary hover:underline break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                {/* Phone */}
                {siteConfig.phone && (
                  <div>
                    <p className="text-sm font-semibold text-text-heading mb-1.5">
                      {dict.contact.info.phone}
                    </p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                )}

                {/* Address */}
                {siteConfig.address && (
                  <div>
                    <p className="text-sm font-semibold text-text-heading mb-1.5">
                      {dict.contact.info.address}
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed">{siteConfig.address}</p>
                  </div>
                )}

              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
