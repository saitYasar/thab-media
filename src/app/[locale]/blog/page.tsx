import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, getDictionary } from '@/lib/i18n/dictionaries'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { blogPosts } from '@/data/blogPosts'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: `${dict.home.blog.title} | ThaB Media`,
    description: dict.home.blog.description,
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(locale)) notFound()

  const dict = await getDictionary(locale)
  const blogPrefix = locale === 'tr' ? '/blog' : `/${locale}/blog`

  return (
    <>
      <PageHero
        title={dict.home.blog.title}
        description={dict.home.blog.description}
        image="/images/dijital-ekran.jpg"
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-6">
            {blogPosts.map((post) => {
              const postTitle = dict.home.blog.posts[post.titleKey as keyof typeof dict.home.blog.posts] ?? post.slug
              const postExcerpt = dict.home.blog.posts[post.excerptKey as keyof typeof dict.home.blog.posts] ?? ''
              const postCategory = dict.home.blog.posts[post.categoryKey as keyof typeof dict.home.blog.posts] ?? ''

              return (
                <article
                  key={post.slug}
                  className="group rounded-2xl overflow-hidden bg-white border border-border-default transition-all duration-200 hover:border-primary/15 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Link href={`${blogPrefix}/${post.slug}`} className="block">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={`${postTitle} | ThaB Media`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      {postCategory && (
                        <div className="absolute top-3 left-3">
                          <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/90 text-primary backdrop-blur-sm">
                            {postCategory}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 md:p-7">
                      <h2 className="font-heading text-lg md:text-xl font-bold text-text-heading leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {postTitle}
                      </h2>
                      <p className="mt-3 text-sm text-text-muted leading-relaxed line-clamp-3">
                        {postExcerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-semibold text-accent">
                          {dict.home.blog.readMore} →
                        </span>
                        <span className="text-xs text-text-muted/60">
                          {post.readTime} {dict.home.blog.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        </Container>
      </Section>
    </>
  )
}
