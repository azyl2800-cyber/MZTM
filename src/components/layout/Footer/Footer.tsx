'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Youtube, Music, Twitter } from 'lucide-react'

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Music, href: '#', label: 'Spotify' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export const Footer = () => {
  return (
    <footer className="bg-dark-200 border-t border-white/5 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">M</span>
            </div>
            <div>
              <span className="text-xl font-bold text-white">MZTM</span>
              <span className="block text-[10px] text-purple-400 font-medium tracking-widest">RAP CREW</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Strona główna</Link>
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors">O nas</Link>
            <Link href="#music" className="text-gray-400 hover:text-white transition-colors">Muzyka</Link>
            <Link href="#events" className="text-gray-400 hover:text-white transition-colors">Koncerty</Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Kontakt</Link>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -2, scale: 1.1 }}
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MZTM. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  )
}