'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Send } from 'lucide-react'

interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
}

const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Jordan Smith',
    rating: 5,
    text: 'Amazing quality and fit. Will definitely order again!',
    date: '2024-06-15',
  },
  {
    id: '2',
    author: 'Casey Chen',
    rating: 5,
    text: 'Worth every penny. The craftsmanship is incredible.',
    date: '2024-06-10',
  },
]

export default function ReviewSection({ productId }: { productId: string }) {
  const [reviews, setReviews] = useState<Review[]>(mockReviews)
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (author && comment) {
      setReviews([
        {
          id: String(reviews.length + 1),
          author,
          rating,
          text: comment,
          date: new Date().toISOString().split('T')[0],
        },
        ...reviews,
      ])
      setAuthor('')
      setComment('')
      setRating(5)
    }
  }

  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  return (
    <section className="mt-20">
      <h2 className="section-heading mb-8">Customer Reviews</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-trapped-dark-gray p-8"
        >
          <div className="mb-6">
            <p className="text-trapped-light-gray/60 mb-2">Average Rating</p>
            <p className="text-4xl font-bold mb-2">{averageRating.toFixed(1)}</p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.round(averageRating)
                      ? 'fill-trapped-accent-red text-trapped-accent-red'
                      : 'text-trapped-light-gray/20'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-trapped-light-gray/60 mt-2">
              Based on {reviews.length} reviews
            </p>
          </div>
        </motion.div>

        {/* Reviews List & Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Submit Review */}
          <form onSubmit={handleSubmitReview} className="bg-trapped-dark-gray p-8 space-y-6">
            <h3 className="text-xl font-semibold">Write a Review</h3>

            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Your name"
                className="w-full bg-trapped-charcoal border border-trapped-light-gray/20 px-4 py-2 text-sm focus:outline-none focus:border-trapped-accent-red"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRating(r)}
                    className="p-1"
                  >
                    <Star
                      size={24}
                      className={`${
                        r <= rating
                          ? 'fill-trapped-accent-red text-trapped-accent-red'
                          : 'text-trapped-light-gray/30'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Review</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your thoughts..."
                rows={4}
                className="w-full bg-trapped-charcoal border border-trapped-light-gray/20 px-4 py-2 text-sm focus:outline-none focus:border-trapped-accent-red resize-none"
                required
              />
            </div>

            <button type="submit" className="btn-primary flex items-center gap-2">
              <Send size={16} />
              Submit Review
            </button>
          </form>

          {/* Reviews */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-b border-trapped-light-gray/20 pb-6"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">{review.author}</h4>
                    <p className="text-xs text-trapped-light-gray/60">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < review.rating
                            ? 'fill-trapped-accent-red text-trapped-accent-red'
                            : 'text-trapped-light-gray/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-trapped-light-gray">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}