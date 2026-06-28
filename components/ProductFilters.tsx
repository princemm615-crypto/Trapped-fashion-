'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FilterProps {
  filters: {
    category: string[]
    color: string[]
    size: string[]
    priceRange: [number, number]
  }
  setFilters: (filters: any) => void
  sortBy: string
  setSortBy: (sort: string) => void
}

const categories = ['Hoodies', 'T-Shirts', 'Pants', 'Jackets', 'Caps', 'Tracksuits']
const colors = ['Black', 'White', 'Red', 'Navy', 'Gray']
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export default function ProductFilters({
  filters,
  setFilters,
  sortBy,
  setSortBy,
}: FilterProps) {
  const [expandedFilter, setExpandedFilter] = useState<string | null>('category')

  const toggleFilter = (type: 'category' | 'color' | 'size', value: string) => {
    setFilters({
      ...filters,
      [type]: filters[type].includes(value)
        ? filters[type].filter((item) => item !== value)
        : [...filters[type], value],
    })
  }

  return (
    <div className="w-full lg:w-64 space-y-6">
      {/* Sorting */}
      <div className="border-b border-trapped-light-gray/20 pb-6">
        <label className="text-sm font-semibold uppercase tracking-widest mb-4 block">
          Sort By
        </label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-trapped-dark-gray border border-trapped-light-gray/20 px-4 py-2 text-sm focus:outline-none focus:border-trapped-accent-red transition-colors"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="border-b border-trapped-light-gray/20 pb-6">
        <button
          onClick={() =>
            setExpandedFilter(expandedFilter === 'category' ? null : 'category')
          }
          className="w-full flex items-center justify-between mb-4"
        >
          <span className="text-sm font-semibold uppercase tracking-widest">
            Category
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              expandedFilter === 'category' ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedFilter === 'category' && (
          <div className="space-y-3">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat)}
                  onChange={() => toggleFilter('category', cat)}
                  className="w-4 h-4 accent-trapped-accent-red"
                />
                <span className="text-sm text-trapped-light-gray hover:text-white transition-colors">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="border-b border-trapped-light-gray/20 pb-6">
        <button
          onClick={() =>
            setExpandedFilter(expandedFilter === 'color' ? null : 'color')
          }
          className="w-full flex items-center justify-between mb-4"
        >
          <span className="text-sm font-semibold uppercase tracking-widest">
            Color
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              expandedFilter === 'color' ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedFilter === 'color' && (
          <div className="space-y-3">
            {colors.map((color) => (
              <label key={color} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.color.includes(color)}
                  onChange={() => toggleFilter('color', color)}
                  className="w-4 h-4 accent-trapped-accent-red"
                />
                <span className="text-sm text-trapped-light-gray hover:text-white transition-colors">
                  {color}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className="border-b border-trapped-light-gray/20 pb-6">
        <button
          onClick={() =>
            setExpandedFilter(expandedFilter === 'size' ? null : 'size')
          }
          className="w-full flex items-center justify-between mb-4"
        >
          <span className="text-sm font-semibold uppercase tracking-widest">
            Size
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              expandedFilter === 'size' ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedFilter === 'size' && (
          <div className="space-y-3">
            {sizes.map((size) => (
              <label key={size} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.size.includes(size)}
                  onChange={() => toggleFilter('size', size)}
                  className="w-4 h-4 accent-trapped-accent-red"
                />
                <span className="text-sm text-trapped-light-gray hover:text-white transition-colors">
                  {size}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div>
        <label className="text-sm font-semibold uppercase tracking-widest mb-4 block">
          Price Range
        </label>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-trapped-light-gray/60">Min: ${filters.priceRange[0]}</label>
            <input
              type="range"
              min="0"
              max="500"
              value={filters.priceRange[0]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  priceRange: [parseInt(e.target.value), filters.priceRange[1]],
                })
              }
              className="w-full accent-trapped-accent-red"
            />
          </div>
          <div>
            <label className="text-xs text-trapped-light-gray/60">Max: ${filters.priceRange[1]}</label>
            <input
              type="range"
              min="0"
              max="500"
              value={filters.priceRange[1]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  priceRange: [filters.priceRange[0], parseInt(e.target.value)],
                })
              }
              className="w-full accent-trapped-accent-red"
            />
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() =>
          setFilters({
            category: [],
            color: [],
            size: [],
            priceRange: [0, 500],
          })
        }
        className="w-full mt-8 btn-secondary py-3"
      >
        Clear All Filters
      </button>
    </div>
  )
}