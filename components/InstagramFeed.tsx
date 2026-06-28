'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle } from 'lucide-react'

const posts = [
  { id: 1, likes: 2543, comments: 134 },
  { id: 2, likes: 3201, comments: 267 },
  { id: 3, likes: 2891, comments: 189 },
  { id: 4, likes: 3567, comments: 312 },
  { id: 5, likes: 2745, comments: 156 },
  { id: 6, likes: 3123, comments: 245 },
]

export default function InstagramFeed() {
  return (
    <section className="py-28 px-6 bg-trapped-charcoal">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="section-heading">Follow @trapped</h2>
          <p className="section-subheading">Join our community on Instagram</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden bg-trapped-dark-gray cursor-pointer"
            >
              {/* Placeholder */}
              <div className="w-full h-full bg-gradient-to-br from-trapped-dark-gray to-trapped-black flex items-center justify-center">
                <span className="text-trapped-light-gray/30">Image {post.id}</span>
              </div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/60 flex items-center justify-center gap-8 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center text-white">
                  <Heart size={32} className="mb-2 fill-white" />
                  <p className="text-lg font-semibold">{(post.likes / 1000).toFixed(1)}K</p>
                </div>
                <div className="flex flex-col items-center text-white">
                  <MessageCircle size={32} className="mb-2" />
                  <p className="text-lg font-semibold">{post.comments}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-10 py-4"
            >
              Follow on Instagram
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  )
}