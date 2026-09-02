'use client'

import { cn } from '@/lib/utils/cn'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  onClick?: () => void
}

export const GlassCard = ({
  children,
  className,
  hover = true,
  glow = false,
  onClick,
}: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'glass-effect rounded-2xl p-6 md:p-8 transition-all duration-300',
        hover && 'hover:shadow-2xl hover:shadow-purple-500/10',
        glow && 'hover:shadow-purple-500/30',
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}