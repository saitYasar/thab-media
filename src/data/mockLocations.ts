// MOCK DATA — replace with confirmed real data before launch.
// Do NOT use in SEO metadata or production claims.
// TODO: Replace city images with ThaB Media's own location photos before launch.

export interface MockLocation {
  city: string
  region: string
  count: number
  image: string
  highlighted?: boolean
}

export const mockLocations: MockLocation[] = [
  { city: 'İstanbul', region: 'Marmara', count: 120, image: '/images/locations/istanbul.jpg', highlighted: true },
  { city: 'Ankara', region: 'İç Anadolu', count: 45, image: '/images/locations/ankara.jpg', highlighted: true },
  { city: 'İzmir', region: 'Ege', count: 30, image: '/images/locations/izmir.jpg', highlighted: true },
  { city: 'Bursa', region: 'Marmara', count: 20, image: '/images/locations/bursa.jpg' },
  { city: 'Antalya', region: 'Akdeniz', count: 18, image: '/images/locations/antalya.jpg' },
  { city: 'Adana', region: 'Akdeniz', count: 12, image: '/images/locations/adana.jpg' },
]
