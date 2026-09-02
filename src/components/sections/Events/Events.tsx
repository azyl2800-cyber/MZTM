'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react'

const events = [
  {
    id: 1,
    date: '15.08.2026',
    city: 'Warszawa',
    venue: 'Klub Progresja',
    time: '20:00',
    tickets: '#'
  },
  {
    id: 2,
    date: '22.08.2026',
    city: 'Kraków',
    venue: 'Klub Studio',
    time: '21:00',
    tickets: '#'
  },
  {
    id: 3,
    date: '05.09.2026',
    city: 'Poznań',
    venue: 'Klub Blue Note',
    time: '19:00',
    tickets: '#'
  },
]

export const Events = () => {
  return (
    <section id="events" className="section-padding bg-dark-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
            📅 Koncerty
          </span>
          <h2 className="section-title text-white">
            Nadchodzące
            <span className="block gradient-text">Wydarzenia</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="text-2xl font-bold gradient-text mb-2">
                {event.date}
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-300 mb-1">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{event.city}</span>
              </div>
              <div className="text-gray-400 text-sm mb-1">
                {event.venue}
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-4">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>{event.time}</span>
              </div>
              <a
                href={event.tickets}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/20 text-purple-300 text-sm font-medium hover:bg-purple-500/30 transition-colors"
              >
                <Ticket className="w-4 h-4" />
                Bilety
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}