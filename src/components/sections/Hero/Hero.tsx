'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HeroScene } from './HeroScene';
import { cn } from '@/lib/utils/cn';

// Animacje dla elementów tekstowych
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Tło 3D */}
      <HeroScene />

      {/* Warstwa z subtelnym gradientem dla lepszej czytelności tekstu */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-100/60 via-transparent to-dark-100/80 pointer-events-none z-10" />

      {/* Zawartość Hero */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Est. 2024 · Nowa fala</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-black text-white leading-[0.9] tracking-tight"
          >
            MZTM
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 gradient-text-premium"
          >
            Rap. Energia. Własne zasady.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg mt-6 leading-relaxed"
          >
            MZTM to więcej niż muzyka. To ruch, który łączy nowoczesne brzmienia z surową energią ulicy.
            <span className="block text-purple-400/80 mt-1">Doświadcz przyszłości hip-hopu.</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-8"
          >
            <motion.a
              href="#music"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all flex items-center gap-2 text-lg"
            >
              <span>Posłuchaj teraz</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all backdrop-blur-sm"
            >
              Poznaj nas
            </motion.a>
          </motion.div>

          {/* Subtelna statystyka */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 max-w-md mt-12 pt-6 border-t border-white/5"
          >
            {[
              { number: '50+', label: 'Utworów' },
              { number: '100+', label: 'Koncertów' },
              { number: '1M+', label: 'Streamów' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold gradient-text-premium">{stat.number}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Wskaźnik scrolla */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-gray-600 text-xs font-medium tracking-widest uppercase"
      >
        <span>Przewiń</span>
        <div className="w-5 h-8 border-2 border-white/10 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-purple-500/70 rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
};