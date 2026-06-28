'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProductGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <motion.div
        key={selectedImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative aspect-square bg-trapped-dark-gray overflow-hidden group rounded-lg"
      >
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-trapped-dark-gray to-trapped-black">
          <span className="text-trapped-light-gray/30">Product Image {selectedImage + 1}</span>
        </div>
      </motion.div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {images.map((image, idx) => (
          <motion.button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative w-20 h-20 bg-trapped-dark-gray flex-shrink-0 border-2 transition-all ${
              selectedImage === idx
                ? 'border-trapped-accent-red'
                : 'border-trapped-light-gray/20 hover:border-trapped-accent-red'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center text-xs text-trapped-light-gray/30">
              {idx + 1}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}