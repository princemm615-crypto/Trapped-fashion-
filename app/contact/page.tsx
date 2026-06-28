'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-trapped-black min-h-screen">
      <div className="container-trapped">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="section-heading">Get In Touch</h1>
          <p className="section-subheading">We'd love to hear from you</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-12">
              {/* Email */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="text-trapped-accent-red" size={28} />
                  <h3 className="text-2xl font-heading font-bold">Email</h3>
                </div>
                <a
                  href="mailto:Princemm615@gmail.com"
                  className="text-lg text-trapped-light-gray hover:text-trapped-accent-red transition-colors"
                >
                  Princemm615@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="text-trapped-accent-red" size={28} />
                  <h3 className="text-2xl font-heading font-bold">Phone</h3>
                </div>
                <a
                  href="tel:+2349152649326"
                  className="text-lg text-trapped-light-gray hover:text-trapped-accent-red transition-colors"
                >
                  +234 915 264 9326
                </a>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-2xl font-heading font-bold mb-6">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-4 border border-trapped-light-gray/50 hover:border-trapped-accent-red hover:text-trapped-accent-red transition-all">
                    <Instagram size={24} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-4 border border-trapped-light-gray/50 hover:border-trapped-accent-red hover:text-trapped-accent-red transition-all">
                    <Twitter size={24} />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="p-4 border border-trapped-light-gray/50 hover:border-trapped-accent-red hover:text-trapped-accent-red transition-all text-2xl">
                    🎵
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}