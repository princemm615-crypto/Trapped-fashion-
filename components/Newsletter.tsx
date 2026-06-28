'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-28 px-6 bg-trapped-black">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl lg:text-6xl font-heading font-bold mb-4">
            Join The Movement
          </h2>
          <p className="text-xl text-trapped-light-gray mb-12">
            Be first to access drops, collections, and exclusive releases.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-trapped-dark-gray border border-trapped-light-gray/20 px-6 py-4 text-white placeholder:text-trapped-light-gray/50 focus:outline-none focus:border-trapped-accent-red transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn-primary px-8 py-4 flex items-center gap-2"
            >
              <Send size={20} />
              Subscribe
            </motion.button>
          </form>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-trapped-accent-red font-semibold"
            >
              ✓ Thank you for subscribing!
            </motion.p>
          )}

          <p className="text-sm text-trapped-light-gray/50 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}