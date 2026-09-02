'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-dark-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-purple-400 text-sm font-medium tracking-widest uppercase mb-4">
              O nas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.2]">
              Kto tworzy
              <span className="block gradient-text">MZTM?</span>
            </h2>
            <p className="text-gray-300 text-lg mt-6 max-w-2xl leading-relaxed">
              MZTM to zespół utalentowanych raperów i producentów, którzy od lat tworzą 
              muzykę z pasją i autentycznością. Łączymy nowoczesne brzmienia z klasycznym hip-hopem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/5"
          >
            {[
              { number: '5+', label: 'Lat doświadczenia' },
              { number: '50+', label: 'Utworów' },
              { number: '100+', label: 'Koncertów' },
              { number: '1M+', label: 'Streamów' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}