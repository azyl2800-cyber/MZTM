'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const navigation = [
  { name: 'Strona główna', href: '/' },
  { name: 'Muzyka', href: '#music' },
  { name: 'Wydarzenia', href: '#events' },
  { name: 'Kontakt', href: '#contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-dark-100/60 backdrop-blur-md border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - lewa strona */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-base">M</span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                MZTM
              </span>
            </Link>

            {/* Desktop Navigation - wyśrodkowana */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Przycisk CTA - prawa strona */}
            <div className="hidden md:block flex-shrink-0">
              <Link
                href="#contact"
                className="px-5 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/10"
              >
                Skontaktuj się
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          'fixed inset-0 z-40 bg-dark-100/98 backdrop-blur-2xl md:hidden pointer-events-none',
          isMobileMenuOpen && 'pointer-events-auto'
        )}
        style={{ top: isScrolled ? '60px' : '72px' }}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="h-full flex flex-col p-8 pt-4"
        >
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-2xl text-white hover:text-purple-400 transition-colors py-4 border-b border-white/5"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto pb-8">
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-4 bg-white text-dark-100 font-medium rounded-xl hover:bg-gray-100 transition-all"
            >
              Skontaktuj się
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Header;