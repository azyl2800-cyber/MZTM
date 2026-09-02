export interface Artist {
  id: string
  name: string
  nickname: string
  photo: string
  bio: string
  social: {
    instagram?: string
    spotify?: string
    youtube?: string
  }
}

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Imię Artysty 1',
    nickname: 'Pseudonim 1',
    photo: '/images/artists/artist1.jpg',
    bio: 'Biografia artysty 1 - tutaj wpisz opis.',
    social: {
      instagram: 'https://instagram.com/...',
      spotify: 'https://open.spotify.com/artist/...',
      youtube: 'https://youtube.com/@...',
    },
  },
  {
    id: '2',
    name: 'Imię Artysty 2',
    nickname: 'Pseudonim 2',
    photo: '/images/artists/artist2.jpg',
    bio: 'Biografia artysty 2 - tutaj wpisz opis.',
    social: {
      instagram: 'https://instagram.com/...',
      spotify: 'https://open.spotify.com/artist/...',
      youtube: 'https://youtube.com/@...',
    },
  },
  {
    id: '3',
    name: 'Imię Artysty 3',
    nickname: 'Pseudonim 3',
    photo: '/images/artists/artist3.jpg',
    bio: 'Biografia artysty 3 - tutaj wpisz opis.',
    social: {
      instagram: 'https://instagram.com/...',
      spotify: 'https://open.spotify.com/artist/...',
      youtube: 'https://youtube.com/@...',
    },
  },
]