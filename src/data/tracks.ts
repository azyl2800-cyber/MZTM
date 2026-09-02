export interface Track {
  id: string
  title: string
  artist: string
  cover: string
  year: number
  description?: string
  spotifyUrl?: string
  youtubeUrl?: string
  appleMusicUrl?: string
}

export const tracks: Track[] = [
  {
    id: '1',
    title: 'Hype Rap Fest 2025',
    artist: 'MZTM',
    cover: '/images/albums/cover1.jpg',
    year: 2025,
    description: 'Energetyczny występ na Hype Rap Fest 2025 - pełen energii i emocji!',
    spotifyUrl: 'https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT',
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    cover: '/images/albums/cover2.jpg',
    year: 2020,
    description: 'Hit The Weeknda z albumu After Hours - jeden z największych przebojów ostatnich lat!',
    spotifyUrl: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
    youtubeUrl: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ',
  },
  {
    id: '3',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    cover: '/images/albums/cover3.jpg',
    year: 1975,
    description: 'Klasyka wszech czasów - legendarne arcydzieło zespołu Queen!',
    spotifyUrl: 'https://open.spotify.com/track/2vD2ItetGYpL9iKSLeVPsb',
    youtubeUrl: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ',
  },
  {
    id: '4',
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    cover: '/images/albums/placeholder-cover.jpg',
    year: 2015,
    description: 'Przebój zespołu Twenty One Pilots z albumu Blurryface',
    spotifyUrl: 'https://open.spotify.com/track/3CRDbSIZ4r5MsZ0YwxuEkn',
    youtubeUrl: 'https://www.youtube.com/watch?v=pXRviuL6vMY',
  },
  {
    id: '5',
    title: 'Wake Me Up',
    artist: 'Avicii',
    cover: '/images/albums/placeholder-cover.jpg',
    year: 2013,
    description: 'Legendarne połączenie country i EDM od Avicii!',
    spotifyUrl: 'https://open.spotify.com/track/2QlJd2Z8bMvKHTXbP7WZ1b',
    youtubeUrl: 'https://www.youtube.com/watch?v=IcrbM1l_BoI',
  },
]