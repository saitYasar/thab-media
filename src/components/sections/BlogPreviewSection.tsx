import Image from 'next/image'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { blogPosts } from '@/data/blogPosts'

interface BlogDict {
  title: string
  description: string
  cta: string
  readTime: string
  readMore: string
  posts: Record<string, string>
}

interface BlogPreviewSectionProps {
  dictionary: BlogDict
  locale: string
}

export function BlogPreviewSection({ dictionary, locale }: BlogPreviewSectionProps) {
  const blogHref = locale === 'tr' ? '/blog' : `/${locale}/blog`
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  const featuredTitle = dictionary.posts[featured.titleKey] ?? featured.slug
  const featuredExcerpt = dictionary.posts[featured.excerptKey] ?? ''
  const featuredCategory = dictionary.posts[featured.categoryKey] ?? ''

  return (
    <Section bg="subtle">
      <Container>
        <SectionHeader title={dictionary.title} description={dictionary.description} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {/* Featured article */}
          <article className="group rounded-2xl overflow-hidden bg-white border border-border-default transition-all duration-200 hover:border-primary/15 hover:shadow-lg hover:-translate-y-0.5">
            <Link href={`${blogHref}/${featured.slug}`} className="block h-full">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={`${featuredTitle} | ThaB Media`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {featuredCategory && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/90 text-primary backdrop-blur-sm">
                      {featuredCategory}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-heading text-lg md:text-xl font-bold text-text-heading leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {featuredTitle}
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed line-clamp-3">
                  {featuredExcerpt}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-accent">
                    {dictionary.readMore} →
                  </span>
                  <span className="text-xs text-text-muted/60">
                    {featured.readTime} {dictionary.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </article>

          {/* Side list */}
          <div className="flex flex-col gap-4">
            {rest.map((post) => {
              const postTitle = dictionary.posts[post.titleKey] ?? post.slug
              const postExcerpt = dictionary.posts[post.excerptKey] ?? ''
              const postCategory = dictionary.posts[post.categoryKey] ?? ''

              return (
                <article
                  key={post.slug}
                  className="group flex rounded-2xl overflow-hidden bg-white border border-border-default transition-all duration-200 hover:border-primary/15 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Link href={`${blogHref}/${post.slug}`} className="flex w-full">
                    <div className="relative w-[140px] md:w-[170px] flex-shrink-0 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={`${postTitle} | ThaB Media`}
                        fill
                        sizes="170px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {postCategory && (
                        <div className="absolute top-2 left-2">
                          <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-white/90 text-primary backdrop-blur-sm">
                            {postCategory}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4 md:p-5 flex flex-col justify-center flex-1 min-w-0">
                      <h3 className="font-heading text-[15px] md:text-base font-bold text-text-heading leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {postTitle}
                      </h3>
                      <p className="mt-2 text-xs md:text-sm text-text-muted leading-relaxed line-clamp-2">
                        {postExcerpt}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs font-semibold text-accent">
                          {dictionary.readMore} →
                        </span>
                        <span className="text-[11px] text-text-muted/60">
                          {post.readTime} {dictionary.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>

        {/* View all CTA */}
        <div className="mt-8 md:mt-10 text-center">
          <Link
            href={blogHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors border border-primary/20 rounded-lg px-5 py-2.5 hover:bg-primary/[0.04]"
          >
            {dictionary.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
