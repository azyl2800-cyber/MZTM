export interface Video {
  id: string
  title: string
  thumbnail: string
  date: string
  youtubeUrl: string
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'TODO: Tytuł teledysku 1',
    thumbnail: '/images/videos/placeholder-video.jpg',
    date: '2026-01-15',
    youtubeUrl: '#',
  },
  {
    id: '2',
    title: 'TODO: Tytuł teledysku 2',
    thumbnail: '/images/videos/placeholder-video.jpg',
    date: '2025-12-10',
    youtubeUrl: '#',
  },
  {
    id: '3',
    title: 'TODO: Tytuł teledysku 3',
    thumbnail: '/images/videos/placeholder-video.jpg',
    date: '2025-11-01',
    youtubeUrl: '#',
  },
]