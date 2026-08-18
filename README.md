<div align="center">
  <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&h=400&fit=crop" alt="GAMEON Banner" width="100%" />
  
  <br/>
  <h1>🎮 GAMEON: The Ultimate Gaming Experience</h1>
  <p><strong>Acdyon Technologies — Frontend Challenge Part 2</strong></p>

  <a href="https://acdyon-seven.vercel.app/"><strong>View Live Demo (Vercel)</strong></a>
</div>

<br/>

## 🚀 Overview

**GAMEON** is a hyper-premium, high-performance landing page designed for the ultimate gaming portal. It features seamless Framer Motion animations, deeply integrated YouTube background looping trailers, and aggressive esports-style typography.

This project was built from scratch utilizing the bleeding-edge Next.js 15 App Router and the brand-new Tailwind CSS v4 CSS-first engine.

## ✨ Features

- 🎥 **Cinematic Auto-Play Trailers:** Utilizes embedded YouTube iFrames with `pointer-events-none` and `mix-blend-screen` to forcefully bypass browser autoplay blocks, delivering a permanent HD background trailer.
- ⚡ **Framer Motion Interactivity:** Every single element on the page—from the floating game cards to the esports community feed—is rigged with spring-physics entry animations and aggressive hover states.
- 🖼️ **Anti-Block Asset Architecture:** Uses direct Wikipedia Commons imagery to completely bypass local network CORS restrictions and ISP blocks on gaming CDNs (like Steam).
- 🕹️ **Smooth Scroll Snapping:** Global CSS `scroll-behavior: smooth` allows cinematic camera panning to each interactive section natively.
- 🎨 **Esports Aesthetics:** Heavily utilizes the `Oswald` Google Font, neon pink-to-blue gradients, and scanline overlays to create an authentic AAA gaming vibe.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Using the new `@theme` CSS-first API)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

## 📂 Architecture & Sections

1. **`Hero.tsx`**: The main landing viewport featuring the glowing hexagon video player and dual call-to-actions.
2. **`Games.tsx`**: The featured game catalog with hover-reveal descriptions.
3. **`Tournaments.tsx`**: A live competitive leaderboard for upcoming eSports events.
4. **`Community.tsx`**: A grid of social media interactions mimicking Twitter and Discord.
5. **`Shop.tsx`**: Premium eSports gear storefront using high-definition product photography.

## 🏁 Getting Started

To run this project locally:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---
*Built for the Acdyon Technologies Frontend Challenge.*
