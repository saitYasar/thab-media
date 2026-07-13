export interface ServiceDetail {
  slug: string
  image: string
  relatedSlugs: string[]
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'billboard',
    image: '/images/billboard.jpg',
    relatedSlugs: ['giantboard', 'megaboard', 'lightbox'],
  },
  {
    slug: 'giantboard',
    image: '/images/giantboard.jpg',
    relatedSlugs: ['billboard', 'megaboard', 'kopru-alinlik'],
  },
  {
    slug: 'kopru-alinlik',
    image: '/images/kopru-alinlik.jpg',
    relatedSlugs: ['giantboard', 'totem-yol-panolari', 'billboard'],
  },
  {
    slug: 'clp-raket',
    image: '/images/clp-raket.jpg',
    relatedSlugs: ['pole-banner', 'lightbox', 'led-ekranlar'],
  },
  {
    slug: 'pole-banner',
    image: '/images/pole-banner.jpg',
    relatedSlugs: ['clp-raket', 'billboard', 'totem-yol-panolari'],
  },
  {
    slug: 'led-ekranlar',
    image: '/images/led-ekranlar.jpg',
    relatedSlugs: ['megaboard', 'lightbox', 'metrobus-tam-kaplama'],
  },
  {
    slug: 'lightbox',
    image: '/images/lightbox.jpg',
    relatedSlugs: ['led-ekranlar', 'billboard', 'clp-raket'],
  },
  {
    slug: 'megaboard',
    image: '/images/megaboard.jpg',
    relatedSlugs: ['billboard', 'giantboard', 'led-ekranlar'],
  },
  {
    slug: 'totem-yol-panolari',
    image: '/images/totem-yol-panolari.jpg',
    relatedSlugs: ['kopru-alinlik', 'billboard', 'pole-banner'],
  },
  {
    slug: 'metrobus-tam-kaplama',
    image: '/images/metrobus-tam-kaplama.jpg',
    relatedSlugs: ['otobus-tam-kaplama', 'otobus-superback', 'led-ekranlar'],
  },
  {
    slug: 'otobus-tam-kaplama',
    image: '/images/otobus-tam-kaplama.jpg',
    relatedSlugs: ['metrobus-tam-kaplama', 'otobus-superback', 'billboard'],
  },
  {
    slug: 'otobus-superback',
    image: '/images/otobus-superback.jpg',
    relatedSlugs: ['otobus-tam-kaplama', 'metrobus-tam-kaplama', 'clp-raket'],
  },
]
