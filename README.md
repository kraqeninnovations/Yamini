# Makeup 101 by Yamini &bull; Bridal Makeup Artist Website

Premium, production-ready bridal makeup artist website built for **Makeup 101 by Yamini** (Chennai, Tamil Nadu).

> **Tagline**: *Your Beauty. Your Bridal Story. Your Moment.*  
> **Services**: Bridal Makeup | Hairstyling | Saree & Lehenga Draping  
> **Studio Phone / WhatsApp**: [+91 99404 72471](https://wa.me/919940472471)  
> **Instagram**: [@makeup101byyamini](https://www.instagram.com/makeup101byyamini/)  
> **YouTube**: [@Makeup101ByYamini](https://www.youtube.com/@Makeup101ByYamini)  
> **Broadcast Channel**: [Yamini's Bridal Diary](https://www.instagram.com/channel/p7ZUzqEOjk6q8hNd/)  

---

## Tech Stack & Architecture

- **Core**: React 19 + Vite
- **Styling**: Tailwind CSS v3.4 (Custom luxury bridal palette: Ivory Cream `#F6F0E8`, Champagne Gold `#B89A72`, Deep Burgundy `#4A292D`, Soft White `#FFFFFF`)
- **Typography**: Google Fonts: *Playfair Display* (Headings), *Poppins* (Body text)
- **3D & Motion**: 
  - `@react-three/fiber` & `three` (Floating gold dust & petal particles, throttled on mobile, graceful fallback on reduced-motion/software WebGL)
  - Framer Motion (3D Tilt cards with dynamic light sweep, 3D Coverflow carousel, Transformation scroll parallax, sequential text entrances)
- **Video Reels**: 9:16 vertical video carousel & `/reels` page with IntersectionObserver single-video autoplay and fullscreen swipeable ReelViewer
- **Routing**: React Router v7 (`react-router-dom`)
- **Icons**: `lucide-react`
- **SEO & Schema**: JSON-LD `LocalBusiness` / `MakeupArtist` schema, Open Graph, dynamic meta tags, `robots.txt`, and `sitemap.xml`.

---

## Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the project root:
```bash
cp .env.example .env
```
Add your form handler endpoint:
```env
VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```
*(If left empty or as placeholder, form operates in local test mode with full UI simulation).*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## Media Management & Add-On Guide

### 1. How to Add New Video Reels
All reels are registered in [src/data/reels.js](file:///home/sanjay/yamini/src/data/reels.js) and served from `public/videos/`.

1. **Compress your raw video** using ffmpeg (recommended for fast mobile playback):
```bash
ffmpeg -i raw_reel.mp4 -vf "scale=720:-2" -c:v libx264 -crf 28 -preset veryfast -c:a aac -b:a 128k -movflags +faststart public/videos/reel-new-title.mp4
```

2. **Generate the video poster (WebP + JPG)**:
```bash
# Extract frame at 2 seconds
ffmpeg -ss 00:00:02 -i public/videos/reel-new-title.mp4 -vframes 1 -q:v 2 public/videos/posters/reel-new-title.jpg

# Convert to WebP
ffmpeg -i public/videos/posters/reel-new-title.jpg -c:v libwebp -quality 85 public/videos/posters/reel-new-title.webp
```

3. **Register in `src/data/reels.js`**:
```javascript
{
  id: 'reel-15',
  title: 'Your Reel Title',
  description: 'Editorial description of the technique or look.',
  src: '/videos/reel-new-title.mp4',
  poster: '/videos/posters/reel-new-title.webp',
  category: 'Bridal Transformations', // Choose: Bridal Transformations, Hairstyle Tutorials, Dear Bride, Behind the Scenes, Bridal Styling, Soft Glam
  duration: '0:30',
  instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
  caption: 'Social media caption summary.'
}
```

### 2. How to Add or Replace Portfolio Photos
Portfolio items are configured in [src/data/portfolio.js](file:///home/sanjay/yamini/src/data/portfolio.js) with assets in `public/images/portfolio/`.

1. Place WebP and fallback JPG in `public/images/portfolio/`.
2. Update `src/data/portfolio.js`:
```javascript
{
  id: 15,
  title: "Muhurtham Silk Saree Radiance",
  category: "Traditional Brides",
  src: "/images/portfolio/new-bride.webp",
  fallbackSrc: "/images/portfolio/new-bride.jpg",
  alt: "South Indian traditional bride in Chennai by Yamini",
  description: "Bespoke bridal finish with temple gold jewellery and fresh jasmine veni.",
  orientation: "portrait",
  aspectRatio: "9/16"
}
```

### 3. Toggling 3D Animations
3D features are designed to be lightweight and automatically respect user accessibility settings:
- **Hero Particles**: Located in [src/components/3d/HeroParticles.jsx](file:///home/sanjay/yamini/src/components/3d/HeroParticles.jsx). Automatically throttles particle count on mobile (35 particles vs 110 on desktop). Automatically disabled if the user has `prefers-reduced-motion: reduce` or lacks WebGL support.
- **3D Tilt Cards**: Located in [src/components/3d/TiltCard.jsx](file:///home/sanjay/yamini/src/components/3d/TiltCard.jsx). Uses interactive perspective tilt and light sweep on desktop mouse moves; falls back to gentle tap scaling on touch screens.
- **Coverflow Carousel**: Located in [src/components/3d/CoverflowGallery.jsx](file:///home/sanjay/yamini/src/components/3d/CoverflowGallery.jsx). Supports drag gestures and navigation buttons with 3D Y-axis depth rotation.

---

## Mobile Screen Hardening Specifications

- **Viewport Range**: Fully tested from **320px (iPhone SE)** up to **1440px+ (Desktop)** with **zero horizontal overflow** (`overflow-x: clip`, `scrollWidth === innerWidth`).
- **iOS Safe Areas**: Full support for iPhone notch and home indicator bar via `viewport-fit=cover` and `padding-bottom: max(0.75rem, env(safe-area-inset-bottom))`.
- **iOS Safari Zoom Fix**: All form inputs, selects, and textareas enforce `font-size: 16px` to prevent auto-zooming.
- **Tap Targets**: All buttons, links, and drawer items maintain >= 44px minimum tap targets.
- **2-Column Mobile Portfolio**: Optimized card grid on mobile viewports for effortless scrolling.
- **Reels Snap-Scroll**: Touch-friendly horizontal snap container on mobile (`scroll-snap-type: x mandatory`).

---

## How to Deploy

### Deploy to Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. In Project Settings, add Environment Variable `VITE_FORM_ENDPOINT`.
4. Framework Preset: **Vite**.
5. Click **Deploy**.

*(A `vercel.json` rewrite file is already configured for React Router single-page navigation).*

### Deploy to Netlify
1. Go to [netlify.com](https://netlify.com) and import your Git repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variable `VITE_FORM_ENDPOINT`.
5. Deploy.

---

## Production Verification Checklist

- [x] **Real Photos & Videos**: Integrated Yamini's actual bridal looks, hairstyling masterclasses, and portrait.
- [x] **Zero Horizontal Scroll**: Confirmed across 320px, 360px, 393px, 768px, 1440px viewports.
- [x] **Video Reels Feature**: 14 compressed MP4 reels with autoplay on scroll and fullscreen vertical swipe player.
- [x] **3D Accents**: Three.js floating gold dust, Framer Motion 3D tilt, and 3D coverflow showcase.
- [x] **Mobile Drawer & Action Bar**: Sticky Call & WhatsApp buttons with iOS safe area padding.
- [x] **Lightboxes & Sliders**: Touch swipe gestures on mobile, keyboard arrows & Esc on desktop.
- [x] **SEO & Schema**: Schema.org `LocalBusiness` / `MakeupArtist` structured data, metadata on all pages.
- [x] **Build Validation**: Clean Vite production build with zero errors and code-split 3D chunks.
# Yamini
