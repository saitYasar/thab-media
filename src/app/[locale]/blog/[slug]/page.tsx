import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/lib/i18n/dictionaries'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/sections/PageHero'
import { blogPosts } from '@/data/blogPosts'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!hasLocale(locale)) return {}
  const dict = await getDictionary(locale)
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  const title = dict.home.blog.posts[post.titleKey as keyof typeof dict.home.blog.posts]
  const description = dict.home.blog.posts[post.excerptKey as keyof typeof dict.home.blog.posts]
  return {
    title: `${title} | ThaB Media`,
    description,
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  if (!hasLocale(locale)) notFound()

  const dict = await getDictionary(locale)
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const article = dict.blogArticles[slug as keyof typeof dict.blogArticles]
  if (!article || typeof article === 'string' || !('body' in article)) notFound()

  const title = dict.home.blog.posts[post.titleKey as keyof typeof dict.home.blog.posts] ?? post.slug
  const excerpt = dict.home.blog.posts[post.excerptKey as keyof typeof dict.home.blog.posts] ?? ''
  const category = dict.home.blog.posts[post.categoryKey as keyof typeof dict.home.blog.posts] ?? ''

  const blogPrefix = locale === 'tr' ? '/blog' : `/${locale}/blog`
  const contactHref = locale === 'tr' ? '/iletisim' : `/${locale}/contact`

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero title={title} description={excerpt} image={post.image} />

      {/* Article */}
      <Section>
        <Container size="md">
          {/* Category & read time */}
          <div className="flex items-center gap-3 mb-6">
            {category && (
              <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-md bg-primary/[0.08] text-primary">
                {category}
              </span>
            )}
            <span className="text-xs text-text-muted">
              {post.readTime} {dict.home.blog.readTime}
            </span>
          </div>

          {/* Main image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-10">
            <Image
              src={post.image}
              alt={`${title} | ThaB Media`}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
              priority
            />
          </div>

          {/* Article body */}
          <article className="prose prose-lg max-w-none">
            {article.body.map((paragraph: string, i: number) => (
              <p
                key={i}
                className="text-text-muted leading-relaxed mb-5 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </article>

          {/* Back to list */}
          <div className="mt-12 pt-8 border-t border-border-default">
            <Link
              href={blogPrefix}
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              {dict.blogArticles.backToList}
            </Link>
          </div>
        </Container>
      </Section>

      {/* Related posts */}
      <Section bg="subtle">
        <Container>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-heading">
              {dict.blogArticles.relatedTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {relatedPosts.map((relPost) => {
              const relTitle = dict.home.blog.posts[relPost.titleKey as keyof typeof dict.home.blog.posts] ?? relPost.slug
              return (
                <Link
                  key={relPost.slug}
                  href={`${blogPrefix}/${relPost.slug}`}
                  className="group relative rounded-2xl overflow-hidden min-h-[180px] sm:min-h-[200px] block transition-all duration-300 hover:scale-[1.015] hover:shadow-xl"
                >
                  <Image
                    src={relPost.image}
                    alt={`${relTitle} | ThaB Media`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="w-6 h-[2px] bg-accent rounded-full mb-2" />
                    <h3 className="text-base font-bold text-white font-heading line-clamp-2">
                      {relTitle}
                    </h3>
                  </div>
                </Link>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#0a1430] to-[#0d1a3e] relative overflow-hidden" id="blog-cta">
        <div
          className="absolute inset-0 opacity-[0.02]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <Container className="relative text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
            {dict.blogArticles.ctaTitle}
          </h2>
          <p className="mt-4 text-white/45 leading-relaxed max-w-lg mx-auto">
            {dict.home.finalCta.description}
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href={contactHref}>
              {dict.common.cta.getQuote}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
