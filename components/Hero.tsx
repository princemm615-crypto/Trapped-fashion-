'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-trapped-charcoal via-trapped-black to-trapped-black overflow-hidden flex flex-col items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#D90429,transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
            className="text-7xl md:text-9xl lg:text-10xl font-heading font-black mb-6 tracking-tighter leading-none"
          >
            TRAPPED
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl font-light mb-12 text-trapped-light-gray tracking-widest"
          >
            Wear the Mindset.<br className="hidden sm:block" /> Own the Trap.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-md md:text-lg text-trapped-light-gray/80 max-w-2xl mx-auto mb-12"
          >
            Premium luxury streetwear for the ambitious. Ambition. Resilience. Self-expression.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <Link href="/shop">
              <button className="btn-primary px-10 py-4 text-lg hover:scale-105 transition-transform">
                Shop Now
              </button>
            </Link>
            <Link href="/shop">
              <button className="btn-secondary px-10 py-4 text-lg">
                Explore Collection
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-12 text-trapped-accent-red"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </div>
  )
}