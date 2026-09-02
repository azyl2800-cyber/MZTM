'use client'

import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { MusicCarousel } from '@/components/sections/MusicCarousel'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-dark-100">
      <Header />
      <Hero />
      <About />
      <MusicCarousel />
    </main>
  )
}
