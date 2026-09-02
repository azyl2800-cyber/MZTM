'use client'

import { cn } from '@/lib/utils/cn'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'main'
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

export const Container = ({
  children,
  className,
  as: Component = 'div',
  maxWidth = 'xl',
}: ContainerProps) => {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  }

  return (
    <Component
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {children}
    </Component>
  )
}