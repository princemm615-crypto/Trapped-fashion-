'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold mb-2 uppercase tracking-widest">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-trapped-dark-gray border border-trapped-light-gray/20 px-6 py-3 text-white placeholder:text-trapped-light-gray/50 focus:outline-none focus:border-trapped-accent-red transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 uppercase tracking-widest">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-trapped-dark-gray border border-trapped-light-gray/20 px-6 py-3 text-white placeholder:text-trapped-light-gray/50 focus:outline-none focus:border-trapped-accent-red transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 uppercase tracking-widest">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full bg-trapped-dark-gray border border-trapped-light-gray/20 px-6 py-3 text-white placeholder:text-trapped-light-gray/50 focus:outline-none focus:border-trapped-accent-red transition-colors"
          placeholder="Subject"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 uppercase tracking-widest">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full bg-trapped-dark-gray border border-trapped-light-gray/20 px-6 py-3 text-white placeholder:text-trapped-light-gray/50 focus:outline-none focus:border-trapped-accent-red transition-colors resize-none"
          placeholder="Your message"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-lg"
      >
        <Send size={20} />
        Send Message
      </motion.button>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-trapped-accent-red font-semibold text-center"
        >
          ✓ Thank you! We'll get back to you soon.
        </motion.p>
      )}
    </form>
  )
}