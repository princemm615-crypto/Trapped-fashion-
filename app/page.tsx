'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import FeaturedCollection from '@/components/FeaturedCollection'
import NewArrivals from '@/components/NewArrivals'
import BrandStory from '@/components/BrandStory'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import InstagramFeed from '@/components/InstagramFeed'

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <FeaturedCollection />
      <NewArrivals />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      <InstagramFeed />
    </motion.div>
  )
}