'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Aplikacja FinTech',
    description: 'Nowoczesna platforma do zarządzania finansami z AI.',
    image: '/images/projects/project1.jpg',
    category: 'Web App',
  },
  {
    id: 2,
    title: 'Sklep Internetowy',
    description: 'Zaawansowany e-commerce z personalizacją.',
    image: '/images/projects/project2.jpg',
    category: 'E-commerce',
  },
  {
    id: 3,
    title: 'System AI',
    description: 'Inteligentny system analizy danych w czasie rzeczywistym.',
    image: '/images/projects/project3.jpg',
    category: 'AI',
  },
  {
    id: 4,
    title: 'Aplikacja Mobilna',
    description: 'Natywna aplikacja z płynnym UX dla iOS i Android.',
    image: '/images/projects/project4.jpg',
    category: 'Mobile',
  },
]

export const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <Section id="projects" className="relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-4">
            Realizacje
          </span>
          <Heading level={2} className="mb-4">
            Nasze
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent block">
              Najnowsze Projekty
            </span>
          </Heading>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="glass-effect rounded-2xl p-4 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="aspect-video rounded-xl overflow-hidden bg-dark-200 relative"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600/30 to-pink-600/30">
                  <div className="text-center p-8">
                    <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium mb-3">
                      {projects[currentIndex].category}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {projects[currentIndex].description}
                    </p>
                    <Button variant="ghost" size="sm">
                      Zobacz więcej
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center backdrop-blur-sm"
              aria-label="Poprzedni projekt"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center backdrop-blur-sm"
              aria-label="Następny projekt"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-2 bg-purple-500'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Przejdź do slajdu ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}