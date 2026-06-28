import type { MetadataRoute } from 'next'
import { services } from '@/data/services'
import { blogPosts } from '@/data/blogPosts'

const baseUrl = 'https://thabmedia.com.tr'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['tr', 'en', 'fr'] as const

  function localizedUrls(path: string) {
    return locales.map((locale) => {
      const prefix = locale === 'tr' ? '' : `/${locale}`
      return {
        url: `${baseUrl}${prefix}${path}`,
        lastModified: new Date(),
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}${l === 'tr' ? '' : `/${l}`}${path}`])
          ),
        },
      }
    })
  }

  const staticPages = [
    '/',
    '/hizmetler',
    '/lokasyonlar',
    '/hakkimizda',
    '/blog',
    '/iletisim',
    '/reklam-onizleme',
  ]

  const servicePages = services.map((s) => `/hizmetler/${s.slug}`)
  const blogPages = blogPosts.map((p) => `/blog/${p.slug}`)

  const allPaths = [...staticPages, ...servicePages, ...blogPages]

  return allPaths.flatMap((path) => localizedUrls(path))
}
