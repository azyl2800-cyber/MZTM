'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  { title: 'Aplikacje Webowe', desc: 'Nowoczesne aplikacje webowe dopasowane do Twoich potrzeb.' },
  { title: 'E-commerce', desc: 'Zaawansowane platformy sprzedażowe z integracjami.' },
  { title: 'Sztuczna Inteligencja', desc: 'Systemy AI do automatyzacji i analizy danych.' },
  { title: 'Chmura i DevOps', desc: 'Skalowalna infrastruktura i CI/CD.' },
  { title: 'Aplikacje Mobilne', desc: 'Natywne aplikacje dla iOS i Android.' },
  { title: 'Bezpieczeństwo IT', desc: 'Audyty i ochrona danych.' },
]

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
            Nasze usługi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Kompleksowe
            <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Rozwiązania IT
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-dark-100/50 rounded-xl p-6 border border-white/5 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}