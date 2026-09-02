export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'concerts' | 'backstage' | 'studio' | 'sessions' | 'streetwear'
  width?: number
  height?: number
}

export const gallery: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/placeholder-1.jpg',
    alt: 'TODO: Opis zdjęcia 1',
    category: 'concerts',
  },
  {
    id: '2',
    src: '/images/gallery/placeholder-2.jpg',
    alt: 'TODO: Opis zdjęcia 2',
    category: 'concerts',
  },
  {
    id: '3',
    src: '/images/gallery/placeholder-3.jpg',
    alt: 'TODO: Opis zdjęcia 3',
    category: 'backstage',
  },
  {
    id: '4',
    src: '/images/gallery/placeholder-4.jpg',
    alt: 'TODO: Opis zdjęcia 4',
    category: 'studio',
  },
  {
    id: '5',
    src: '/images/gallery/placeholder-5.jpg',
    alt: 'TODO: Opis zdjęcia 5',
    category: 'sessions',
  },
  {
    id: '6',
    src: '/images/gallery/placeholder-6.jpg',
    alt: 'TODO: Opis zdjęcia 6',
    category: 'streetwear',
  },
]