// Service format definitions for ThaB Media
// Visual placeholders use CSS gradients until real photography is available

export interface ServiceFormat {
  slug: string
  bgStyle: string
  accentPosition: 'top-left' | 'bottom-right' | 'top-right'
}

export const services: ServiceFormat[] = [
  {
    slug: 'billboard',
    bgStyle: 'from-[#0a1628] via-[#122044] to-[#1a3060]',
    accentPosition: 'top-left',
  },
  {
    slug: 'metro-reklam',
    bgStyle: 'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
    accentPosition: 'bottom-right',
  },
  {
    slug: 'dijital-ekran',
    bgStyle: 'from-[#0d1b2a] via-[#1b2838] to-[#2d3a4a]',
    accentPosition: 'top-right',
  },
  {
    slug: 'lightbox',
    bgStyle: 'from-[#1a1a2e] via-[#262640] to-[#3d3050]',
    accentPosition: 'top-left',
  },
  {
    slug: 'pole-banner',
    bgStyle: 'from-[#0a1628] via-[#0f2035] to-[#1a3048]',
    accentPosition: 'bottom-right',
  },
  {
    slug: 'raket-reklam',
    bgStyle: 'from-[#1a1a2e] via-[#1f2940] to-[#243448]',
    accentPosition: 'top-right',
  },
]
