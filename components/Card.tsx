import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`
        bg-white/80 backdrop-blur-sm 
        rounded-2xl p-6 shadow-soft
        hover:shadow-glow transition-all
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
} 