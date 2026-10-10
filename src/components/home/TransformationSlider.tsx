'use client';

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Eye, Flower2, Heart } from "lucide-react";

export default function TransformationSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-driven parallax for layered depth
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgParallax = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const foregroundParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const progressSteps = [
    {
      step: "01",
      title: "Natural Face & Skin Prep",
      description: "Hydrating serums, lymphatic massage, and custom color correction.",
      icon: <Sparkles size={18} className="text-gold" />,
      image: "/images/before-after/before-01.webp",
      fallback: "/images/before-after/before-01.jpg",
      alt: "Bridal skin preparation and natural face"
    },
    {
      step: "02",
      title: "Makeup Artistry in Progress",
      description: "Weightless high-definition base and waterproof eye definition.",
      icon: <Eye size={18} className="text-gold" />,
      image: "/images/portfolio/bts-01.webp",
      fallback: "/images/portfolio/bts-01.jpg",
      alt: "Bridal makeup artistry in progress by Yamini"
    },
    {
      step: "03",
      title: "Hairstyle & Poo Jadai Details",
      description: "Fresh fragrant jasmine flowers, veni, and traditional hairpins.",
      icon: <Flower2 size={18} className="text-gold" />,
      image: "/images/portfolio/hair-01.webp",
      fallback: "/images/portfolio/hair-01.jpg",
      alt: "Bridal hairstyle and twisted details by Yamini"
    },
    {
      step: "04",
      title: "Final Reveal & Draping",
      description: "Immaculate Kanjeevaram pleats and radiant bridal confidence.",
      icon: <Heart size={18} className="text-gold" />,
      image: "/images/portfolio/bridal-01.webp",
      fallback: "/images/portfolio/bridal-01.jpg",
      alt: "Final South Indian bridal reveal by Yamini"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 bg-white border-t border-gold/15 overflow-hidden">
      {/* Decorative Parallax Background Elements */}
      <motion.div 
        style={{ y: bgParallax }} 
        className="pointer-events-none absolute -top-12 -left-12 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
        aria-hidden="true"
      />
      <motion.div 
        style={{ y: foregroundParallax }} 
        className="pointer-events-none absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-burgundy/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
            The Art of Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy mb-4">
            From the First Touch to the Final Look
          </h2>
          <div className="gold-divider" />
          <p className="text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
            Witness how Yamini&apos;s personalized bridal artistry reveals your natural radiance, accentuating your features while preserving your individuality.
          </p>
        </div>

        {/* Interactive Before & After Slider with pan-y touch action */}
        <div className="max-w-4xl mx-auto mb-16">
          <div
            ref={containerRef}
            className="relative h-[340px] sm:h-[480px] lg:h-[540px] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/30 select-none cursor-ew-resize bg-burgundy-deep"
            style={{ touchAction: "pan-y" }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            role="region"
            aria-label="Interactive bridal before and after comparison slider"
          >
            {/* "After" Image (Background Full View) */}
            <picture>
              <source srcSet="/images/before-after/after-01.webp" type="image/webp" />
              <img
                src="/images/before-after/after-01.jpg"
                alt="After Bridal Transformation - Radiant Soft Glam Bridal Makeup by Yamini"
                width="1080"
                height="1920"
                style={{ objectPosition: "center 25%" }}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </picture>
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-burgundy/85 backdrop-blur-md text-ivory text-xs font-serif font-semibold tracking-wider border border-gold/40 shadow-sm">
              Final Bridal Glow
            </div>

            {/* "Before" Image (Clipped Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <picture>
                <source srcSet="/images/before-after/before-01.webp" type="image/webp" />
                <img
                  src="/images/before-after/before-01.jpg"
                  alt="Before Bridal Transformation - Bare Skin Natural Face Prep"
                  width="1080"
                  height="1920"
                  style={{ 
                    objectPosition: "center 25%",
                    width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" 
                  }}
                  className="absolute inset-0 h-full object-cover max-w-none"
                />
              </picture>
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-ivory/95 backdrop-blur-md text-burgundy text-xs font-serif font-semibold tracking-wider border border-gold/40 shadow-sm">
                Natural Canvas
              </div>
            </div>

            {/* Draggable Divider Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-white cursor-ew-resize shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-burgundy border-2 border-gold text-ivory flex items-center justify-center shadow-xl active:scale-95 transition-transform">
                <div className="flex gap-1 items-center text-gold font-bold">
                  <span className="text-xs">&larr;</span>
                  <span className="text-xs">&rarr;</span>
                </div>
              </div>
            </div>

            {/* Accessible slider helper tag */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-burgundy/85 text-ivory text-[11px] sm:text-xs px-4 py-1.5 rounded-full backdrop-blur-md border border-gold/30">
              Drag or swipe slider to compare
            </div>
          </div>
        </div>

        {/* 4 Progress Shots Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-14">
          {progressSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-ivory/50 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-gold/20 flex flex-col justify-between hover:shadow-luxury transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden mb-3.5 border border-gold/20 bg-burgundy-dark/10">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    width="480"
                    height="360"
                    style={{ objectPosition: "center 25%" }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-burgundy/90 text-ivory text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-full font-mono">
                    Step {item.step}
                  </div>
                </div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-burgundy mb-1 flex items-center gap-1.5">
                  {item.icon}
                  <span className="truncate">{item.title}</span>
                </h3>
                <p className="text-burgundy/75 text-[11px] sm:text-xs leading-relaxed font-light line-clamp-2 sm:line-clamp-none">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button to Full Portfolio */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="btn-gold text-sm sm:text-base py-3 sm:py-3.5 px-7 sm:px-8 inline-flex items-center gap-2 min-h-[44px]"
          >
            <span>View Full Portfolio</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
