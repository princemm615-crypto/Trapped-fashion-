'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import ProductGrid from '@/components/ProductGrid'
import ProductFilters from '@/components/ProductFilters'
import { allProducts } from '@/data/products'

type FilterType = {
  category: string[]
  color: string[]
  size: string[]
  priceRange: [number, number]
}

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterType>({
    category: [],
    color: [],
    size: [],
    priceRange: [0, 500],
  })

  const [sortBy, setSortBy] = useState('newest')

  const filteredProducts = useMemo(() => {
    let products = [...allProducts]

    if (filters.category.length > 0) {
      products = products.filter((p) => filters.category.includes(p.category))
    }

    if (filters.color.length > 0) {
      products = products.filter((p) =>
        p.colors.some((c) => filters.color.includes(c))
      )
    }

    if (filters.size.length > 0) {
      products = products.filter((p) =>
        p.sizes.some((s) => filters.size.includes(s))
      )
    }

    products = products.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    )

    switch (sortBy) {
      case 'price-low':
        products.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        products.sort((a, b) => b.price - a.price)
        break
      case 'popular':
        products.sort((a, b) => b.id.localeCompare(a.id))
        break
      default:
        products.reverse()
    }

    return products
  }, [filters, sortBy])

  return (
    <div className="pt-28 pb-20 px-6 bg-trapped-black min-h-screen">
      <div className="container-trapped">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="section-heading">Shop</h1>
          <p className="section-subheading">Explore our complete collection</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <ProductFilters
            filters={filters}
            setFilters={setFilters}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <div className="flex-1">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}