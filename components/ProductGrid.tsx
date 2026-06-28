'use client'

import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

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

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-trapped-light-gray text-lg">
          No products found. Try adjusting your filters.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </div>
  )
}