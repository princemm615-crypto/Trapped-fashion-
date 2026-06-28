'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-trapped-charcoal border-t border-trapped-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold mb-4">TRAPPED</h3>
            <p className="text-trapped-light-gray/60 mb-4">
              Wear the Mindset. Own the Trap.
            </p>
            <p className="text-sm text-trapped-light-gray/40">
              Premium luxury streetwear for the ambitious.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 uppercase tracking-widest">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-trapped-light-gray/60 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-trapped-light-gray/60 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-trapped-light-gray/60 hover:text-white transition-colors">
                  Featured
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 uppercase tracking-widest">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-trapped-light-gray/60 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-trapped-light-gray/60 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 uppercase tracking-widest">Follow</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-trapped-light-gray/20 hover:border-trapped-accent-red hover:text-trapped-accent-red transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-trapped-light-gray/20 hover:border-trapped-accent-red hover:text-trapped-accent-red transition-all">
                <Twitter size={20} />
              </a>
              <a href="mailto:Princemm615@gmail.com" className="p-2 border border-trapped-light-gray/20 hover:border-trapped-accent-red hover:text-trapped-accent-red transition-all">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-trapped-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-trapped-light-gray/50"
        >
          <p>
            © {currentYear} TRAPPED. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={14} className="fill-trapped-accent-red text-trapped-accent-red" />
            <span>by TRAPPED</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}