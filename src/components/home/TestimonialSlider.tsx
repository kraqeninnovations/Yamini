'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section 
      className="py-20 sm:py-28 bg-ivory"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
            Words of Appreciation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy mb-4">
            Real Brides. Real Experiences.
          </h2>
          <div className="gold-divider" />
          <p className="text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
            The joy of seeing our brides radiate happiness and confidence on their wedding day is our greatest reward.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gold/30 shadow-luxury relative overflow-hidden">
            <Quote className="absolute top-8 right-8 text-gold/15 w-24 h-24 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row items-center gap-8 lg:gap-12"
              >
                {/* Bride Avatar / Photo Slot */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-gold p-1 flex-shrink-0 shadow-md bg-burgundy/10">
                  <Image
                    src={current.image}
                    alt={`${current.brideName} wedding look in Chennai`}
                    fill
                    sizes="(max-width: 640px) 112px, 144px"
                    style={{ objectPosition: "center 25%" }}
                    className="object-cover rounded-full"
                  />
                </div>

                {/* Testimonial Quote & Info */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-burgundy/90 text-base sm:text-xl font-light italic leading-relaxed mb-6 font-serif">
                    &ldquo;{current.quote}&rdquo;
                  </p>

                  <div className="border-t border-ivory-300/50 pt-4">
                    <h3 className="font-serif text-lg font-bold text-burgundy">
                      {current.brideName}
                    </h3>
                    <p className="text-xs sm:text-sm text-gold font-medium">
                      {current.event} &bull; {current.location}
                    </p>
                    <p className="text-[11px] text-burgundy/50 font-mono mt-1">
                      {current.verifiedNote}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots & Arrows */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-ivory-200">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all min-w-[10px] ${
                      currentIndex === idx ? "w-8 bg-gold" : "w-2.5 bg-gold/30 hover:bg-gold/60"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full border border-gold/40 text-burgundy hover:bg-gold hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full border border-gold/40 text-burgundy hover:bg-gold hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* View All Testimonials Link */}
        <div className="mt-12 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy hover:text-gold transition-colors"
          >
            <Sparkles size={16} className="text-gold" />
            <span>Read More Bride Stories & Video Diaries</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
