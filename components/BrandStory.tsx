'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BrandStory() {
  return (
    <section className="py-28 px-6 bg-trapped-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-trapped-accent-red font-semibold uppercase tracking-widest mb-4">
              Our Story
            </p>
            <h2 className="section-heading mb-6">More Than Clothing</h2>
            <p className="text-lg text-trapped-light-gray mb-6 leading-relaxed">
              TRAPPED represents the mindset of people who refuse to stay limited by circumstances. We don't make clothes—we make statements.
            </p>
            <p className="text-lg text-trapped-light-gray leading-relaxed">
              Every collection reflects the hustle, vision, and determination of people building their future. If you're TRAPPED between who you were and who you're becoming, this is for you.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-square relative"
          >
            <div className="w-full h-full bg-trapped-dark-gray rounded-lg flex items-center justify-center">
              <div className="text-trapped-light-gray/40 text-center">
                <p>Brand Story Image</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}