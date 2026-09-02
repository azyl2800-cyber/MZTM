'use client'

import { cn } from '@/lib/utils/cn'

interface HeadingProps {
  children: React.ReactNode
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = ({
  children,
  className,
  level = 2,
}: HeadingProps) => {
  const Tag = h as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  const styles = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    3: 'text-2xl md:text-3xl lg:text-4xl font-bold',
    4: 'text-xl md:text-2xl lg:text-3xl font-bold',
    5: 'text-lg md:text-xl lg:text-2xl font-bold',
    6: 'text-base md:text-lg lg:text-xl font-bold',
  }

  return (
    <Tag className={cn(styles[level], 'text-white', className)}>
      {children}
    </Tag>
  )
}
