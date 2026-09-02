export interface Event {
  id: string
  date: string
  city: string
  venue: string
  time: string
  ticketUrl?: string
  isPast?: boolean
}

export const events: Event[] = [
  {
    id: '1',
    date: '2026-08-15',
    city: 'Warszawa',
    venue: 'Nazwa Klubu 1',
    time: '20:00',
    ticketUrl: 'https://bilety.pl/...',
  },
  {
    id: '2',
    date: '2026-08-22',
    city: 'Kraków',
    venue: 'Nazwa Klubu 2',
    time: '21:00',
    ticketUrl: 'https://bilety.pl/...',
  },
  {
    id: '3',
    date: '2026-09-05',
    city: 'Poznań',
    venue: 'Nazwa Klubu 3',
    time: '19:00',
    ticketUrl: 'https://bilety.pl/...',
  },
]