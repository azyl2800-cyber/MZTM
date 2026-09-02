'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.slice(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            lenis.scrollTo(targetElement, { offset: -80, duration: 1.2 });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return <>{children}</>;
};