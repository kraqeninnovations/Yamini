'use client';

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, Calendar, Play } from "lucide-react";

// Client-only dynamic load for 3D Hero Particles to avoid SSR hydration mismatches
const HeroParticles = dynamic(() => import("../3d/HeroParticles"), {
  ssr: false,
});

export default function Hero() {
  const titleWords = ["Makeup", "101", "by", "Yamini"];

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-16">
      {/* Background Image with Ken Burns Zoom & Responsive Art Direction */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.06 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="w-full h-full"
        >
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/hero/hero-bride-480.webp" type="image/webp" />
            <source media="(max-width: 1024px)" srcSet="/images/hero/hero-bride-768.webp" type="image/webp" />
            <source srcSet="/images/hero/hero-bride.webp" type="image/webp" />
            <img
              src="/images/hero/hero-bride.jpg"
              alt="South Indian bride with exquisite traditional makeup and gold jewellery by Yamini in Chennai"
              className="w-full h-full object-cover filter brightness-[0.92]"
              style={{ objectPosition: "center 20%" }}
              loading="eager"
            />
          </picture>
        </motion.div>

        {/* Editorial Gradient Overlays */}
        <div className="absolute inset-0 bg-ivory/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-ivory/95 sm:via-ivory/85 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-ivory/70" />
      </div>

      {/* 3D Floating Gold Dust & Petal Particles */}
      <HeroParticles />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/90 border border-gold/40 text-burgundy text-xs sm:text-sm font-medium tracking-wide shadow-sm mb-5 backdrop-blur-sm"
          >
            <MapPin size={14} className="text-gold" />
            <span>Chennai, Tamil Nadu</span>
            <span className="text-gold/50">&bull;</span>
            <span className="text-gold font-semibold">Bridal Artistry</span>
          </motion.div>

          {/* Sequential Animated H1 with fluid clamp typography */}
          <h1 
            style={{ fontSize: "clamp(2.1rem, 5.5vw, 4.5rem)" }}
            className="font-serif font-bold text-burgundy tracking-tight leading-[1.1] mb-3"
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 * index, ease: "easeOut" }}
                className="inline-block mr-2.5 sm:mr-4 last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Gold Shimmer Decorative Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full mb-5"
          />

          {/* Sub-headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            style={{ fontSize: "clamp(1.15rem, 2.5vw, 1.85rem)" }}
            className="font-serif text-burgundy font-semibold mb-3 leading-snug"
          >
            Your Beauty. Your Bridal Story. Your Moment.
          </motion.h2>

          {/* Services Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="text-xs sm:text-sm font-medium tracking-wider uppercase text-gold mb-4"
          >
            Bridal Makeup &bull; Hairstyling &bull; Saree & Lehenga Draping
          </motion.p>

          {/* Editorial Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="text-sm sm:text-base lg:text-lg text-burgundy/85 leading-relaxed font-light mb-8 max-w-xl"
          >
            Every bride has a story, and every bridal look should feel uniquely hers. At Makeup 101 by Yamini, we bring your vision to life with personalised makeup, elegant hairstyles and beautifully finished draping. From timeless traditional beauty to modern soft glam, let&apos;s create a look that makes you feel confident, radiant and truly yourself.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="btn-gold text-sm sm:text-base py-3.5 sm:py-4 px-7 sm:px-8 shadow-gold-soft hover:shadow-gold-hover group text-center min-h-[44px]"
              id="hero-enquire-btn"
            >
              <Calendar size={18} />
              <span>Enquire for Your Wedding Date</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Video Reels CTA */}
            <Link
              href="/reels"
              className="btn-burgundy-outline text-sm sm:text-base py-3.5 sm:py-4 px-6 sm:px-7 text-center inline-flex items-center justify-center gap-2 min-h-[44px]"
              id="hero-reels-btn"
            >
              <Play size={16} className="text-burgundy" />
              <span>Watch Video Reels</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
