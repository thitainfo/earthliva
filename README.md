# EarthLiva

A modern, sustainable product landing page built with Next.js 16 and React 19.

## Features

- ✨ **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎨 **Modern UI Components** - Built with @base-ui/react
- 📱 **Mobile Optimized** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Next.js 16 with Turbopack
- 🎭 **Smooth Animations** - Framer Motion integration
- ♿ **Accessible** - WCAG compliant components
- 🌙 **Custom Error Pages** - 404, error boundary, and loading states

## Tech Stack

- **Framework:** Next.js 16.2.7
- **React:** 19.2.4
- **Styling:** Tailwind CSS 4 + PostCSS
- **UI Components:** @base-ui/react 1.5.0
- **Animations:** Framer Motion 12.40.0
- **Icons:** Lucide React 1.17.0
- **Type Safety:** TypeScript 5

## Getting Started

### Prerequisites

- Node.js 20+
- Yarn 4.9.1+

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
# Development
yarn dev          # Start dev server at http://localhost:3000

# Production
yarn build        # Build for production
yarn start        # Start production server

# Utilities
yarn lint         # Run ESLint
yarn clean        # Clear build artifacts and cache
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   ├── error.tsx          # Error boundary
│   └── loading.tsx        # Loading state
├── components/
│   ├── layout/            # Layout components (Nav, Footer)
│   ├── sections/          # Page sections (Hero, Products, etc.)
│   └── ui/                # Reusable UI components
├── content/               # Content data files
│   ├── brand.ts
│   ├── products.ts
│   ├── benefits.ts
│   ├── howItWorks.ts
│   ├── testimonials.ts
│   └── faq.ts
├── types/                 # TypeScript type definitions
└── lib/                   # Utility functions

public/
├── imgs/                  # Image assets
└── pdf/                   # PDF documents
```

## Page Sections

The home page includes:

- **Hero Section** - Eye-catching introduction
- **Products Section** - Product showcase
- **Benefits Section** - Key value propositions
- **How It Works Section** - Process explanation
- **Testimonials Section** - Customer reviews
- **FAQ Section** - Frequently asked questions
- **CTA Section** - Call-to-action

## Deployment

Deploy on Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

Or deploy manually:

```bash
yarn build
yarn start
```

## Development Notes

- The app uses Next.js 16 App Router
- Styling is done with Tailwind CSS 4
- Components use Base UI for accessible foundations
- Type definitions are in `src/types/`
- Content is managed in `src/content/`

## License

MIT
