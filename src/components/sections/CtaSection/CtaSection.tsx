'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const CtaSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-dark-200 to-dark-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto text-center border border-purple-500/10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Gotowy na
            <span className="block gradient-text">Współpracę?</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojej firmie 
            w cyfrowej transformacji.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:kontakt@mztm.pl"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2"
            >
              Napisz do nas
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all"
            >
              Zobacz ofertę
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span>📞 +48 123 456 789</span>
            <span>✉️ kontakt@mztm.pl</span>
            <span>📍 Warszawa</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}