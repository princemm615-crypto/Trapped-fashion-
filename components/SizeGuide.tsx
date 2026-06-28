'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function SizeGuide() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm text-trapped-accent-red hover:underline"
      >
        View Size Guide
      </button>

      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-trapped-black border border-trapped-white/10 max-w-2xl w-full max-h-96 overflow-y-auto z-50 p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-heading font-bold">Size Guide</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-trapped-dark-gray transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-trapped-white/10">
                  <th className="text-left py-3 px-2 font-semibold">Size</th>
                  <th className="text-left py-3 px-2 font-semibold">Chest (in)</th>
                  <th className="text-left py-3 px-2 font-semibold">Length (in)</th>
                  <th className="text-left py-3 px-2 font-semibold">Sleeve (in)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: 'XS', chest: '31-33', length: '27', sleeve: '31' },
                  { size: 'S', chest: '33-35', length: '28', sleeve: '32' },
                  { size: 'M', chest: '37-39', length: '29', sleeve: '33' },
                  { size: 'L', chest: '41-43', length: '30', sleeve: '34' },
                  { size: 'XL', chest: '45-47', length: '31', sleeve: '35' },
                  { size: 'XXL', chest: '49-51', length: '32', sleeve: '36' },
                ].map((row) => (
                  <tr key={row.size} className="border-b border-trapped-white/10">
                    <td className="py-3 px-2 font-semibold text-trapped-accent-red">{row.size}</td>
                    <td className="py-3 px-2">{row.chest}</td>
                    <td className="py-3 px-2">{row.length}</td>
                    <td className="py-3 px-2">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-6 text-trapped-light-gray/60 text-sm">
              All measurements are in inches. Please allow 0.5-1 inch tolerance for variations.
            </p>
          </motion.div>
        </>
      )}
    </>
  )
}