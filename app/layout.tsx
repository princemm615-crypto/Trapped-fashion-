import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'TRAPPED - Wear the Mindset. Own the Trap.',
  description: 'Premium luxury streetwear. Ambition. Resilience. Self-expression.',
  openGraph: {
    title: 'TRAPPED - Wear the Mindset. Own the Trap.',
    description: 'Premium luxury streetwear brand for the ambitious.',
    url: 'https://trapped.fashion',
    siteName: 'TRAPPED',
    images: [
      {
        url: 'https://trapped.fashion/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRAPPED - Wear the Mindset. Own the Trap.',
    description: 'Premium luxury streetwear brand for the ambitious.',
    images: ['https://trapped.fashion/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}