'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const coreValues = [
  {
    title: 'Ambition',
    description: 'We push boundaries and chase excellence in everything we do.',
  },
  {
    title: 'Authenticity',
    description: 'Real stories, real people, real movement. No compromise.',
  },
  {
    title: 'Resilience',
    description: 'Built to last. Designed for those who persevere.',
  },
  {
    title: 'Creativity',
    description: 'Innovation at every stitch. Breaking the mold.',
  },
  {
    title: 'Community',
    description: 'Stronger together. Building a movement, not just a brand.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-trapped-black">
      {/* Hero */}
      <section className="px-6 mb-20 min-h-screen flex items-center">
        <div className="container-trapped">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-heading font-bold mb-8 leading-tight">
              Beyond
              <br />
              Clothing
            </h1>
            <p className="text-2xl text-trapped-light-gray max-w-2xl mb-8">
              TRAPPED represents the mindset of people who refuse to stay limited by circumstances.
            </p>
            <p className="text-xl text-trapped-light-gray/70 max-w-3xl">
              Every collection reflects the hustle, vision, and determination of people building their future. We don't make clothes—we make statements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 mb-20">
        <div className="container-trapped">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="section-heading mb-6">Our Mission</h2>
              <p className="text-lg text-trapped-light-gray mb-6 leading-relaxed">
                TRAPPED exists to empower individuals to express their true selves through fashion. We believe that clothing is a form of rebellion—a way to communicate your values, ambitions, and refusal to conform.
              </p>
              <p className="text-lg text-trapped-light-gray leading-relaxed">
                We create premium streetwear for those who see obstacles as opportunities and limitations as challenges to overcome.
              </p>
            </div>
            <div className="aspect-square bg-trapped-dark-gray rounded-lg flex items-center justify-center">
              <div className="text-trapped-light-gray/40">Brand Story Image</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 mb-20">
        <div className="container-trapped">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-heading mb-12"
          >
            Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-trapped-light-gray/20 hover:border-trapped-accent-red transition-colors group"
              >
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-trapped-accent-red transition-colors">
                  {value.title}
                </h3>
                <p className="text-trapped-light-gray">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 mb-20">
        <div className="container-trapped">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading mb-8">The Story</h2>
            <div className="max-w-4xl space-y-6 text-lg text-trapped-light-gray">
              <p>
                TRAPPED was born from a simple observation: the most powerful people we know refuse to accept limitations. They transform pressure into performance, obstacles into opportunities.
              </p>
              <p>
                Every hoodie, every tee, every piece of TRAPPED carries this philosophy. It's not about the fabric—it's about the mindset. It's about refusing to be boxed in by society's expectations.
              </p>
              <p>
                Our collections tell stories. Stories of ambition. Stories of resilience. Stories of people who are TRAPPED between who they were and who they're becoming—and they're using that tension to build something extraordinary.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}