# NexHub Landing Page

A modern, visually compelling landing page for NexHub - Africa's education verification infrastructure. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Design Philosophy

This landing page embodies a **powerful, confident, and infrastructure-grade** aesthetic while maintaining elegance. It's designed to convey trust, scale, and national-level digital infrastructure - not a minimalist startup experiment.

## Features

### 🎨 Visual Design

- **Custom Color Palette**: Carefully crafted green-based color scheme representing growth, trust, and African identity
- **Animated Elements**: Smooth, purposeful animations using Framer Motion
- **Particle Effects**: Dynamic background particles and radial glows
- **Breathing Animations**: The NexHub logo features a subtle breathing effect with green glow
- **Hover Effects**: Interactive cards with glow effects and smooth transitions

### 📑 Sections

1. **Hero Section** (Full Screen)

   - Animated title with breathing animation and soft green glow
   - Floating particles in the background
   - Dark gradient background
   - Scroll indicator

2. **What NexHub Does**

   - 3-step horizontal visual flow
   - Animated progress indicators
   - Clear value proposition

3. **Who It Serves**

   - Three animated cards for Students, Schools, and Institutions & Government
   - Hover effects with glowing borders
   - Clear benefit lists

4. **Why This Matters**

   - Government alignment messaging
   - Emphasis on education funding and verified data
   - Visual accent elements

5. **Trust & Security**

   - Privacy-first design principles
   - Four key security features
   - Shield icon animation

6. **Status**

   - Private rollout information
   - Contact information with hover effects
   - Active development indicator

7. **Footer**
   - "Built in Africa" messaging
   - Clean, minimal design

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS with custom theme
- **Framer Motion** - Animation library for smooth interactions

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3000`

## Color Palette

The custom NexHub color palette:

```css
primary: #00674F
dark-bg: #0E1F17
dark-bg-alt: #0B1A14
dark-card: #142D23
dark-card-alt: #18352A
dark-primary: #4FA37D
dark-primary-bright: #56B38A
dark-text: #EAF5EF
dark-text-secondary: #B7D6C6
dark-icon: #B7D6C6
```

## Project Structure

```
nexhub-website/
├── app/
│   ├── globals.css          # Global styles with custom animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── Hero.tsx              # Hero section with animations
│   ├── WhatWeDoSection.tsx   # What NexHub does
│   ├── WhoWeServeSection.tsx # Target audience cards
│   ├── WhyItMattersSection.tsx # Government alignment
│   ├── TrustSecuritySection.tsx # Privacy and security
│   ├── StatusSection.tsx     # Current status
│   └── Footer.tsx            # Footer component
└── public/                   # Static assets
```

## Animations

The page features several types of animations:

- **Breathing Effect**: Scale animation on the main heading
- **Particle System**: 30 animated light particles in the hero section
- **Scroll Animations**: Elements animate in as they enter the viewport
- **Hover Effects**: Cards glow and lift on hover
- **Gradient Animations**: Animated border glows and radial effects
- **Floating Elements**: Subtle floating animations throughout

## Customization

### Modifying Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #00674f;
  /* ... other colors */
}
```

### Adding Sections

Create a new component in the `components/` directory and import it in `app/page.tsx`.

### Adjusting Animations

Animation parameters can be modified in each component using Framer Motion's props:

```tsx
<motion.div
  animate={{ scale: [1, 1.03, 1] }}
  transition={{ duration: 4, repeat: Infinity }}
>
```

## Performance

- Uses Framer Motion's optimized animations
- Components use `useInView` hook for scroll-triggered animations
- Implements lazy animation loading
- Optimized with Next.js 16 Turbopack

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 NexHub

---

**Built in Africa** 🌍

Infrastructure for education trust
