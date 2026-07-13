// Initial blog content for design/development.
// Full blog detail pages will be created in a future phase.
// TODO: Connect to CMS or create static MDX pages before launch.

export interface BlogPost {
  slug: string
  titleKey: string
  excerptKey: string
  categoryKey: string
  image: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'acik-hava-reklamciligi-nedir',
    titleKey: 'oohTitle',
    excerptKey: 'oohExcerpt',
    categoryKey: 'oohCategory',
    image: '/images/billboard.jpg',
    readTime: 5,
  },
  {
    slug: 'billboard-reklami-markalara-ne-kazandirir',
    titleKey: 'billboardTitle',
    excerptKey: 'billboardExcerpt',
    categoryKey: 'billboardCategory',
    image: '/images/megaboard.jpg',
    readTime: 4,
  },
  {
    slug: 'dooh-dijital-ekran-reklamciligi',
    titleKey: 'doohTitle',
    excerptKey: 'doohExcerpt',
    categoryKey: 'doohCategory',
    image: '/images/led-ekranlar.jpg',
    readTime: 6,
  },
  {
    slug: 'dogru-reklam-alani-nasil-secilir',
    titleKey: 'selectionTitle',
    excerptKey: 'selectionExcerpt',
    categoryKey: 'selectionCategory',
    image: '/images/lightbox.jpg',
    readTime: 5,
  },
]
