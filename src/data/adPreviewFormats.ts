// Ad Preview Studio - format list
// Used by the 3D preview component to iterate over available formats.

export interface AdPreviewFormat {
  id: string
}

export const adPreviewFormats: AdPreviewFormat[] = [
  { id: 'billboard' },
  { id: 'busStop' },
  { id: 'digitalScreen' },
  { id: 'busBack' },
  { id: 'lightbox' },
]
