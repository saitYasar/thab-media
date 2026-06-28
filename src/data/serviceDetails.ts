// Service detail page data — describes benefits, use cases, and process
// Content is initial copy for design/development. Not fake claims.

export interface ServiceDetail {
  slug: string
  image: string
  relatedSlugs: string[]
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'billboard',
    image: '/images/billboard.jpg',
    relatedSlugs: ['dijital-ekran', 'lightbox', 'pole-banner'],
  },
  {
    slug: 'metro-reklam',
    image: '/images/metrobus-raket.jpg',
    relatedSlugs: ['raket-reklam', 'dijital-ekran', 'billboard'],
  },
  {
    slug: 'dijital-ekran',
    image: '/images/dijital-ekran.jpg',
    relatedSlugs: ['billboard', 'lightbox', 'metro-reklam'],
  },
  {
    slug: 'lightbox',
    image: '/images/lightbox.jpg',
    relatedSlugs: ['dijital-ekran', 'raket-reklam', 'billboard'],
  },
  {
    slug: 'pole-banner',
    image: '/images/pole-banner.jpg',
    relatedSlugs: ['billboard', 'raket-reklam', 'lightbox'],
  },
  {
    slug: 'raket-reklam',
    image: '/images/durak-reklam.jpg',
    relatedSlugs: ['metro-reklam', 'pole-banner', 'lightbox'],
  },
]
