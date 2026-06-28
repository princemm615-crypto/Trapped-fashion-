'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Entrepreneur',
    review:
      'TRAPPED isn\'t just clothing—it\'s a mindset. Every piece reminds me to keep pushing.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Creator',
    review:
      'The quality and design are unmatched. This is luxury streetwear done right.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Marcus Thompson',
    role: 'Artist',
    review:
      'Wearing TRAPPED means wearing authenticity. I feel the movement behind every piece.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-trapped-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="section-heading">What Our Community Says</h2>
          <p className="section-subheading">Real people. Real reviews. Real movement.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-trapped-black border border-trapped-light-gray/20 p-8 hover:border-trapped-accent-red transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-trapped-accent-red text-trapped-accent-red"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-lg text-trapped-light-gray mb-6 leading-relaxed italic">
                "{testimonial.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-trapped-dark-gray" />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-trapped-light-gray/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}