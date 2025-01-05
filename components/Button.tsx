import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all"
  const variants = {
    primary: "bg-gradient-to-r from-healing-peach to-healing-terra text-white hover:shadow-lg",
    secondary: "bg-white text-healing-dark border border-healing-mauve hover:bg-healing-light"
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
} 