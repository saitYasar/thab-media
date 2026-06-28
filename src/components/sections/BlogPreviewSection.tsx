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

  return (
    <Section bg="subtle">
      <Container>
        <SectionHeader title={dictionary.title} description={dictionary.description} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {blogPosts.map((post) => {
            const postTitle = dictionary.posts[post.titleKey] ?? post.slug
            const postExcerpt = dictionary.posts[post.excerptKey] ?? ''
            const postCategory = dictionary.posts[post.categoryKey] ?? ''

            return (
              <article
                key={post.slug}
                className="group rounded-2xl overflow-hidden bg-white border border-border-default transition-all duration-200 hover:border-primary/15 hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`${postTitle} | ThaB Media`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Category badge */}
                  {postCategory && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white/90 text-primary backdrop-blur-sm">
                        {postCategory}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="font-heading text-[16px] md:text-[17px] font-bold text-text-heading leading-snug line-clamp-2">
                    {postTitle}
                  </h3>
                  <p className="mt-2.5 text-sm text-text-muted leading-relaxed line-clamp-3">
                    {postExcerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href={blogHref}
                      className="text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
                    >
                      {dictionary.readMore} →
                    </Link>
                    <span className="text-xs text-text-muted/60">
                      {post.readTime} {dictionary.readTime}
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
