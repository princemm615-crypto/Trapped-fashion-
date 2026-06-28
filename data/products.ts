export interface Product {
  id: string
  name: string
  price: number
  images: string[]
  slug: string
  category: string
  colors: string[]
  sizes: string[]
  description: string
  stock: number
}

export const allProducts: Product[] = [
  {
    id: '1',
    name: 'TRAPPED Signature Hoodie',
    price: 129.99,
    images: [
      '/images/products/hoodie-1.jpg',
      '/images/products/hoodie-2.jpg',
      '/images/products/hoodie-3.jpg',
    ],
    slug: 'trapped-signature-hoodie',
    category: 'Hoodies',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Premium luxury hoodie crafted from 100% organic cotton. Features oversized fit, embroidered TRAPPED logo, and premium stitching. Perfect for those who refuse to be limited.',
    stock: 15,
  },
  {
    id: '2',
    name: 'TRAPPED Essential Tee',
    price: 59.99,
    images: [
      '/images/products/tee-1.jpg',
      '/images/products/tee-2.jpg',
    ],
    slug: 'trapped-essential-tee',
    category: 'T-Shirts',
    colors: ['Black', 'White', 'Red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Minimalist luxury tee with subtle TRAPPED branding. Premium fabric, perfect fit, and timeless design.',
    stock: 32,
  },
  {
    id: '3',
    name: 'TRAPPED Cargo Pants',
    price: 149.99,
    images: [
      '/images/products/cargo-1.jpg',
      '/images/products/cargo-2.jpg',
      '/images/products/cargo-3.jpg',
    ],
    slug: 'trapped-cargo-pants',
    category: 'Pants',
    colors: ['Black', 'Olive', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Oversized cargo pants with multiple pockets and premium detailing. Functional luxury for the modern streetwear enthusiast.',
    stock: 8,
  },
  {
    id: '4',
    name: 'TRAPPED Oversized Jacket',
    price: 199.99,
    images: [
      '/images/products/jacket-1.jpg',
      '/images/products/jacket-2.jpg',
    ],
    slug: 'trapped-oversized-jacket',
    category: 'Jackets',
    colors: ['Black', 'Red'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Statement piece. Premium oversized bomber jacket with TRAPPED embroidery. The ultimate luxury streetwear essential.',
    stock: 5,
  },
  {
    id: '5',
    name: 'TRAPPED Tracksuit',
    price: 249.99,
    images: [
      '/images/products/tracksuit-1.jpg',
      '/images/products/tracksuit-2.jpg',
    ],
    slug: 'trapped-tracksuit',
    category: 'Tracksuits',
    colors: ['Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Complete luxury tracksuit set. Hoodie + pants combo in premium fabric. Perfect for those building their empire.',
    stock: 12,
  },
  {
    id: '6',
    name: 'TRAPPED Utility Cap',
    price: 49.99,
    images: ['/images/products/cap-1.jpg'],
    slug: 'trapped-utility-cap',
    category: 'Caps',
    colors: ['Black', 'White'],
    sizes: ['One Size'],
    description:
      'Premium adjustable cap with embroidered TRAPPED logo. The finishing touch to any fit.',
    stock: 28,
  },
  {
    id: '7',
    name: 'TRAPPED Premium Hoodie V2',
    price: 159.99,
    images: [
      '/images/products/hoodie-v2-1.jpg',
      '/images/products/hoodie-v2-2.jpg',
    ],
    slug: 'trapped-premium-hoodie-v2',
    category: 'Hoodies',
    colors: ['Black', 'Red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Advanced version with premium materials. Fleece-lined for ultimate comfort. Limited edition.',
    stock: 3,
  },
  {
    id: '8',
    name: 'TRAPPED Graphic Tee',
    price: 69.99,
    images: [
      '/images/products/graphic-tee-1.jpg',
      '/images/products/graphic-tee-2.jpg',
    ],
    slug: 'trapped-graphic-tee',
    category: 'T-Shirts',
    colors: ['Black', 'White'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Bold graphic print featuring the TRAPPED philosophy. Statement wear for the ambitious.',
    stock: 22,
  },
  {
    id: '9',
    name: 'TRAPPED Essential Hoodie',
    price: 119.99,
    images: [
      '/images/products/essential-hoodie-1.jpg',
    ],
    slug: 'trapped-essential-hoodie',
    category: 'Hoodies',
    colors: ['Black', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Classic essential hoodie. Premium quality at an accessible price point.',
    stock: 40,
  },
  {
    id: '10',
    name: 'TRAPPED Slim Fit Tee',
    price: 54.99,
    images: [
      '/images/products/slim-tee-1.jpg',
    ],
    slug: 'trapped-slim-fit-tee',
    category: 'T-Shirts',
    colors: ['Black', 'White', 'Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'Form-fitting premium tee. Perfect for layering or wearing solo.',
    stock: 35,
  },
  {
    id: '11',
    name: 'TRAPPED Joggers',
    price: 119.99,
    images: [
      '/images/products/joggers-1.jpg',
    ],
    slug: 'trapped-joggers',
    category: 'Pants',
    colors: ['Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Premium joggers with tapered fit. Comfort meets luxury.',
    stock: 18,
  },
  {
    id: '12',
    name: 'TRAPPED Windbreaker',
    price: 169.99,
    images: [
      '/images/products/windbreaker-1.jpg',
    ],
    slug: 'trapped-windbreaker',
    category: 'Jackets',
    colors: ['Black', 'White'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'Lightweight premium windbreaker. Perfect for transitional seasons.',
    stock: 14,
  },
]

export const featuredProducts = allProducts.slice(0, 4)
export const newArrivals = allProducts.slice(4, 10)