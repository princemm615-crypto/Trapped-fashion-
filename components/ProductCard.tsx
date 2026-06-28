'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Eye } from 'lucide-react'
import { useWishlistStore } from '@/store/wishlistStore'

interface Product {
  id: string
  name: string
  price: number
  images: string[]
  slug: string
  category: string
  colors: string[]
  sizes: string[]
  description: string
  stock: number
}

export default function ProductCard({ product }: { product: Product }) {
  const { items, addItem, removeItem } = useWishlistStore()
  const isInWishlist = items.some((item) => item.id === product.id)

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-trapped-dark-gray aspect-square mb-4 rounded-lg">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 backdrop-blur-sm"
        >
          <Link href={`/product/${product.slug}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-trapped-white text-trapped-black p-3 hover:bg-trapped-accent-red hover:text-white transition-all duration-300"
            >
              <Eye size={20} />
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (isInWishlist ? removeItem(product.id) : addItem(product))}
            className={`p-3 transition-all duration-300 ${
              isInWishlist
                ? 'bg-trapped-accent-red text-white'
                : 'bg-trapped-white text-trapped-black hover:bg-trapped-accent-red hover:text-white'
            }`}
          >
            <Heart size={20} fill={isInWishlist ? 'currentColor' : 'none'} />
          </motion.button>
        </motion.div>

        {/* Stock Badge */}
        {product.stock < 5 && product.stock > 0 && (
          <div className="absolute top-4 right-4 bg-trapped-accent-red text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
            Only {product.stock} Left
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <span className="text-white font-bold text-xl uppercase">Sold Out</span>
          </div>
        )}
      </div>

      <Link href={`/product/${product.slug}`}>
        <h3 className="text-sm font-semibold mb-2 hover:text-trapped-accent-red transition-colors uppercase tracking-widest">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center justify-between">
        <p className="text-trapped-accent-red font-bold">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-xs text-trapped-light-gray/60 uppercase">
          {product.category}
        </p>
      </div>
    </motion.div>
  )
}