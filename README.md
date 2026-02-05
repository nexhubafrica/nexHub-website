# NexHub Landing Page

A modern, visually compelling landing page for NexHub - Africa's education verification infrastructure. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Design Philosophy

This landing page embodies a **powerful, confident, and infrastructure-grade** aesthetic while maintaining elegance. It's designed to convey trust, scale, and national-level digital infrastructure.

## Features

### 🎨 Visual Design

- **Custom Color Palette**: Carefully crafted green-based color scheme representing growth, trust, and African identity
- **Animated Elements**: Smooth, purposeful animations using Framer Motion and React Icons
- **Loading Animation**: A stunning animated splash screen with your NexHub logo appears on page load.
- **Particle Effects**: Dynamic background particles and radial glows in the Hero section.
- **Breathing Animations**: The NexHub logo features a subtle breathing effect with green glow.
- **Hover Effects**: Interactive cards with glow effects and smooth transitions.

### 📑 Sections

1.  **Hero Section** (Full Screen)

    - Animated title with breathing animation and soft green glow.
    - Floating particles in the background.
    - Dark gradient background.
    - React Icon scroll indicator.

2.  **What NexHub Does**

    - Updated body text focusing on verified learning activity and student participation.
    - A new subsection: "What a verified learning record includes" with 5 key points and React Icons.
    - Emphasis on learning activity over time, not just results.
    - Privacy note: "Records are private by default and shared only with permission."
    - 3-step horizontal visual flow with animated progress indicators and clear value proposition.

3.  **Who It Serves**

    - Four animated cards for **Students**, **Schools**, **Parents**, and **NGOs & Education Programs**.
    - Updated Student card content to focus on verified learning records and activity.
    - New Parents card emphasizing visibility into learning progress without management.
    - Institutions & Government section replaced with NGOs & Education Programs, focusing on verification and program impact.
    - Hover effects with glowing borders and React Icons.

4.  **Why This Matters**

    - Softened language, now titled "Trusted infrastructure for education data."
    - Focuses on creating a trusted foundation for education planning, program evaluation, and funding transparency.
    - Removes direct claims of controlling or allocating funding.
    - Visual accent elements and React Icons.

5.  **Trust & Security**

    - Privacy-first by design with four key security features and React Icons.
    - Added statement: "Verification reflects educator review and institutional validation — not automated scoring."

6.  **Status**

    - Private rollout information.
    - Contact information with hover effects.
    - Active development indicator.

7.  **Footer**
    - "Built in Africa" messaging with `HiGlobe` React Icon.
    - Clean, minimal design.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS with custom theme
- **Framer Motion** - Animation library for smooth interactions
- **React Icons** - Professional icon library

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
│   ├── layout.tsx            # Root layout with metadata and SEO configurations
│   └── page.tsx              # Main page component, includes LoadingScreen
├── assets/
│   ├── images/               # Your favicon and PWA icons
│   └── logo/                 # Your NexHub logo SVG files
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LoadingScreen.tsx     # Animated logo splash screen
│   ├── StatusSection.tsx
│   ├── TrustSecuritySection.tsx
│   ├── WhatWeDoSection.tsx
│   ├── WhoWeServeSection.tsx # Includes Parents card
│   ├── WhyItMattersSection.tsx
├── public/                   # Static assets, now includes your copied assets
│   ├── favicon.png           # Your favicon
│   ├── icon.png              # For Apple touch icon
│   ├── icon-192.png          # PWA icon
│   ├── icon-512.png          # PWA icon
│   ├── icon.svg              # Your SVG logo for favicon/PWA
│   ├── manifest.json         # PWA configuration
│   ├── robots.txt            # Search engine crawling rules
│   └── sitemap.xml           # Site structure for indexing
├── SEO-GUIDE.md              # Comprehensive SEO documentation
└── ... other config files ...
```

## Animations

The page features several types of animations:

- **Logo Loading Animation**: A detailed animated sequence of your NexHub logo with glowing effects and pulsing dots on initial load.
- **Breathing Effect**: Scale animation on the main heading.
- **Particle System**: 30 animated light particles in the hero section.
- **Scroll Animations**: Elements animate in as they enter the viewport using `useInView`.
- **Hover Effects**: Cards glow and lift on hover, icons react to hover.
- **Gradient Animations**: Animated border glows and radial effects.
- **Floating Elements**: Subtle floating animations throughout.

## SEO (Search Engine Optimization)

This landing page is highly optimized for search engines, targeting terms like "NexHub", "school infrastructure", "education verification", and "education technology in Africa".

- **Comprehensive Meta Tags**: Optimized title, description, and 30+ keywords for improved search rankings.
- **Open Graph & Twitter Cards**: Configured for rich social media sharing previews (Twitter card metadata is commented out as NexHub does not currently have a Twitter account).
- **Structured Data (JSON-LD)**: Includes `Organization`, `Website`, `SoftwareApplication`, and `Person` (Founder) schemas to provide rich snippets in search results.
- **`robots.txt` & `sitemap.xml`**: Configured for efficient crawling and indexing by search engines.
- **PWA Manifest**: Configured for Progressive Web App capabilities.
- **Favicon & App Icons**: Using your provided NexHub logo assets.
- **Semantic HTML**: Ensures proper hierarchy and accessibility for search engine understanding.

For a detailed guide on SEO, refer to `SEO-GUIDE.md`.

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

- Uses Framer Motion's optimized animations.
- Components use `useInView` hook for scroll-triggered animations.
- Implements lazy animation loading.
- Optimized with Next.js 16 Turbopack.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 NexHub

---

**Built in Nigeria. Designed to scale**

Infrastructure for education trust
