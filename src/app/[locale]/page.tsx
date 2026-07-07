import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/lib/i18n/dictionaries'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { MediaMarqueeSection } from '@/components/sections/MediaMarqueeSection'
import { ServicesPreviewSection } from '@/components/sections/ServicesPreviewSection'
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection'
import { LocationsMapSection } from '@/components/sections/LocationsMapSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { AdPreviewTeaserSection } from '@/components/sections/AdPreviewTeaserSection'
import { ReferencesSection } from '@/components/sections/ReferencesSection'
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(locale)) notFound()

  const dict = await getDictionary(locale)

  /* MOCK DATA */
  const stats = [
    { value: dict.home.stats.experience.value, label: dict.home.stats.experience.label },
    { value: dict.home.stats.locations.value, label: dict.home.stats.locations.label },
    { value: dict.home.stats.clients.value, label: dict.home.stats.clients.label },
    { value: dict.home.stats.reach.value, label: dict.home.stats.reach.label },
  ]

  return (
    <>
      <HeroSection
        title={dict.home.hero.title}
        subtitle={dict.home.hero.subtitle}
        ctaPrimary={dict.home.hero.ctaPrimary}
        ctaSecondary={dict.home.hero.ctaSecondary}
        badge={dict.home.hero.badge}
        altText={dict.home.hero.altText}
        labels={dict.home.hero.labels}
        locale={locale}
      />
      <StatsSection stats={stats} />
      <MediaMarqueeSection
        title={dict.home.marquee.title}
        description={dict.home.marquee.description}
        cards={dict.home.marquee.cards}
        altSuffix={dict.home.marquee.altSuffix}
        locale={locale}
        ctaLabel={dict.common.cta.seeMore}
      />
      <ServicesPreviewSection
        title={dict.home.services.title}
        description={dict.home.services.description}
        serviceTexts={dict.services}
        ctaLabel={dict.common.cta.seeMore}
        locale={locale}
      />
      <WhyChooseUsSection
        title={dict.home.whyUs.title}
        subtitle={dict.home.whyUs.subtitle}
        items={dict.home.whyUs.items}
      />
      <LocationsMapSection
        title={dict.home.locations.title}
        description={dict.home.locations.description}
        locale={locale}
      />
      <HowItWorksSection
        title={dict.home.howItWorks.title}
        steps={dict.home.howItWorks.steps}
      />
      <AdPreviewTeaserSection
        title={dict.home.adPreview.title}
        description={dict.home.adPreview.description}
        ctaLabel={dict.home.adPreview.cta}
        ctaHref={locale === 'tr' ? '/reklam-onizleme' : `/${locale}/reklam-onizleme`}
      />
      <ReferencesSection
        title={dict.home.references.title}
        subtitle={dict.home.references.subtitle}
      />
      <BlogPreviewSection
        dictionary={dict.home.blog}
        locale={locale}
      />
      <FAQSection
        title={dict.home.faq.title}
        items={dict.home.faq.items}
      />
      <FinalCTASection
        title={dict.home.finalCta.title}
        description={dict.home.finalCta.description}
        buttonLabel={dict.home.finalCta.button}
        locale={locale}
      />
    </>
  )
}
