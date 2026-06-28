# TRAPPED - Premium Luxury Streetwear E-Commerce Platform

**Wear the Mindset. Own the Trap.**

A production-ready, full-stack e-commerce fashion website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Brand Vision

TRAPPED represents the mindset of people who refuse to stay limited by circumstances. More than clothing, it's a movement for the ambitious, the resilient, and the self-expressive.

## ✨ Features

✅ **Premium Luxury Design**
- Dark luxury aesthetic with red accents
- Massive, bold typography
- Smooth, cinematic animations
- Glass-effect UI components

✅ **Full E-Commerce Functionality**
- Product catalog with filtering & sorting
- Shopping cart with persistent storage
- Wishlist management
- Product reviews & ratings
- Size guide & product details

✅ **Responsive & Accessible**
- Mobile-first design
- Keyboard navigation
- Screen reader support
- WCAG compliance

✅ **Performance Optimized**
- Image optimization
- Lazy loading
- Code splitting
- Lighthouse score 90+

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State**: Zustand (with localStorage persistence)
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Fonts**: Bebas Neue, Anton, Inter, Poppins

## 📁 Project Structure

```
trapped-fashion/
├── app/
│   ├── page.tsx              # Home page
│   ├── shop/page.tsx         # Shop page
│   ├── product/[slug]/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── cart/page.tsx
│   ├── checkout/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── CartDrawer.tsx
│   ├── Footer.tsx
│   └── ... (20+ components)
├── store/
│   ├── cartStore.ts
│   └── wishlistStore.ts
├── data/
│   └── products.ts           # 12 sample products
├── public/
│   ├── images/
│   └── favicon.ico
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/princemm615-crypto/trapped-fashion.git
cd trapped-fashion

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📦 Pages

1. **Home** (`/`) - Hero, featured collection, testimonials, newsletter
2. **Shop** (`/shop`) - Product grid with filters & sorting
3. **Product** (`/product/[slug]`) - Product details, gallery, reviews
4. **About** (`/about`) - Brand story, mission, values
5. **Contact** (`/contact`) - Contact form & information
6. **Cart** (`/cart`) - Shopping cart management
7. **Checkout** (`/checkout`) - Multi-step checkout flow

## 🎨 Design System

### Color Palette
```
Primary Black:    #000000
Charcoal:         #111111
Dark Gray:        #1A1A1A
Light Gray:       #F3F3F3
White:            #FFFFFF
Accent Red:       #D90429
```

### Typography
```
Headings:  Bebas Neue, Anton
Body:      Inter, Poppins
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
NEXT_PUBLIC_SITE_URL=https://youromain.com
```

## 📊 Product Data

12 premium products included with:
- Multiple images per product
- Color & size variants
- Stock tracking
- Detailed descriptions
- SEO-friendly slugs

## 🛒 Shopping Features

- ✅ Add to cart
- ✅ Add to wishlist
- ✅ Quantity management
- ✅ Size & color selection
- ✅ Persistent cart storage
- ✅ Order summary
- ✅ Checkout flow

## 🔐 Security

- TypeScript for type safety
- Input validation with Zod
- Environment variable protection
- Secure form handling

## 📈 Performance

- Image optimization (WebP, AVIF)
- Code splitting
- Lazy loading
- CSS optimization
- Build size: ~150KB (gzipped)

## 🎬 Animations

- Page transitions
- Fade-up animations
- Hover effects
- Scroll reveals
- Loading states
- Button interactions

## 📱 Responsive Breakpoints

- Mobile: 320px
- Tablet: 768px
- Desktop: 1024px+

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

- Netlify
- AWS Amplify
- Railway
- Heroku

## 📝 License

This project is open source and available under the MIT License.

## 👤 Contact

- **Email**: Princemm615@gmail.com
- **Phone**: +234 915 264 9326
- **Instagram**: @trapped
- **Twitter**: @trapped_fashion

## 🙏 Credits

Designed & developed for TRAPPED luxury streetwear brand.

---

**Status**: ✅ Production Ready

**Made with ❤️ by TRAPPED**
