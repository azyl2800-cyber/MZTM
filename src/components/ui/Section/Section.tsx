'use client'

import { cn } from '@/lib/utils/cn'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'dark' | 'light' | 'gradient' | 'transparent'
}

export const Section = ({
  children,
  className,
  id,
  background = 'dark',
}: SectionProps) => {
  const backgroundClasses = {
    dark: 'bg-dark-100',
    light: 'bg-dark-200',
    gradient: 'bg-gradient-to-b from-dark-100 via-dark-200 to-dark-100',
    transparent: 'bg-transparent',
  }

  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        backgroundClasses[background],
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
