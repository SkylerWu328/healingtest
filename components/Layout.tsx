import React from 'react'
import { motion } from 'framer-motion'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
}

export default function Layout({ children, title, subtitle }: LayoutProps) {
  return (
    <div className="min-h-screen bg-healing-light">
      {/* 装饰性背景元素 */}
      <div className="fixed inset-0 bg-healing-pattern opacity-5 pointer-events-none" />
      
      {/* 顶部装饰 */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-healing-peach via-healing-mauve to-healing-pink" />

      <main className="container mx-auto px-4 py-8 relative">
        {title && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-crimson text-healing-dark mb-3">
              {title}
            </h1>
            {subtitle && (
              <p className="text-healing-sage text-lg font-averia">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {children}
      </main>
    </div>
  )
} 