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

                {/* Map */}
                <div className="rounded-xl overflow-hidden border border-border-default h-[180px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.3901037449!2d28.731985678887287!3d41.00498225498981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1719500000000!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ThaB Media - İstanbul"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
