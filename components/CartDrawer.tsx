'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X, Plus, Minus, Trash2 } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity } = useCartStore()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full sm:w-96 bg-trapped-black border-l border-trapped-white/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-trapped-white/10">
              <h2 className="text-2xl font-heading font-bold">Cart</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-trapped-dark-gray transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <p className="text-trapped-light-gray">Your cart is empty</p>
                  <Link href="/shop" onClick={onClose}>
                    <button className="btn-primary px-6 py-2">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex gap-4 pb-6 border-b border-trapped-white/10"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover bg-trapped-dark-gray"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                      <p className="text-trapped-light-gray text-xs mb-2">
                        Size: {item.size} | Color: {item.color}
                      </p>
                      <p className="text-trapped-accent-red font-bold mb-3">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-trapped-dark-gray">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, Math.max(1, item.quantity - 1))
                            }
                            className="p-1 hover:bg-trapped-charcoal transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-trapped-charcoal transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-trapped-accent-red hover:bg-trapped-dark-gray transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-trapped-white/10 p-6 space-y-4">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-trapped-accent-red">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <Link href="/checkout" onClick={onClose} className="block">
                  <button className="w-full btn-primary py-3">
                    Proceed to Checkout
                  </button>
                </Link>
                <button
                  onClick={onClose}
                  className="w-full btn-secondary py-3"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}