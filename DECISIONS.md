# Architectural & Design Decisions

This document outlines the rationale behind the technical and design choices made during the pivot to the **GAMEON** aesthetic for the Acdyon Technologies Frontend Challenge Part 2.

## 1. The Pivot to "GAMEON"
The initial project was a SaaS landing page ("Nexus"). However, based on user feedback to make it a "Video Game Landing Page" with an extremely aggressive, premium aesthetic, the entire application was overhauled to match the "GAMEON" UI reference.

**Decisions Made:**
- Switched global fonts from standard sans-serif to **Oswald** (for headers) and **Inter** (for body text).
- Overhauled the color palette to use deep blacks (`#0b0b0f`), neon pinks (`#ec4899`), and glowing blues.
- Replaced rounded, corporate buttons with aggressive gradients and sharp hover states.

## 2. Circumventing Asset Blocks
During development, it was discovered that the local network (or ISP) was forcefully resetting connections (`curl: (35) Recv failure`) to standard gaming image CDNs like `akamai.steamstatic.com` and `images.unsplash.com`.

**Decisions Made:**
- Migrated all real game poster images (CS:GO 2, PUBG, Apex Legends, Cyberpunk) to their respective **Wikimedia Commons** equivalents. Wikimedia is virtually never blocked by network firewalls.
- Replaced standard HTML5 `<video>` tags with embedded **YouTube iFrames**. Stock video providers block hotlinking or suffer from slow loading. By embedding YouTube trailers (Valorant and Cyberpunk 2077) using `autoplay=1`, `mute=1`, `controls=0`, and scaling them to `150%` with `pointer-events-none`, we achieved a 100% reliable, block-proof cinematic video loop.

## 3. Tailwind CSS v4 Integration
Next.js 15 uses the bleeding-edge Tailwind CSS v4, which completely removes the `tailwind.config.js` file in favor of a CSS-first configuration.

**Decisions Made:**
- Configured custom fonts (`--font-inter`, `--font-oswald`) directly inside the `@theme` block in `globals.css`.
- Added global smooth scrolling (`scroll-behavior: smooth`) directly to the `@layer base` for native, buttery-smooth anchor link navigation.
- Created utility classes like `.bg-gradient-pink-purple` to handle complex CSS gradients without cluttering the TSX markup.

## 4. Framer Motion Architecture
To achieve the "make everything sliding" requirement, Framer Motion was deeply integrated.

**Decisions Made:**
- Replaced standard divs with `<motion.div>` using `initial={{ opacity: 0, y: 30 }}` and `whileInView={{ opacity: 1, y: 0 }}`.
- Added `viewport={{ once: true }}` to ensure animations trigger at the exact moment the user scrolls down to the section, creating a highly interactive reveal effect.
- Created a `template.tsx` file at the route level to wrap the entire page in a slide-in animation, laying the groundwork for complex page transitions if the project ever expands to multiple routes.
