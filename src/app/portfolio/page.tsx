'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Sparkles } from "lucide-react";
import Lightbox from "@/components/common/Lightbox";
import { categories, portfolioItems } from "@/data/portfolio";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  return (
    <div className="pt-28 pb-24 sm:pb-32">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
          Visual Gallery
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy mb-4">
          Bridal Portfolio
        </h1>
        <div className="gold-divider" />
        <p className="max-w-2xl mx-auto text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
          A curated visual chronicle of our brides in Chennai. Explore diverse styles from classic temple jewellery Muhurtham aesthetics to contemporary soft glam reception looks.
        </p>
      </section>

      {/* Filter Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div 
          className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 justify-start lg:justify-center no-scrollbar"
          role="tablist"
          aria-label="Portfolio category filter tabs"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={isActive}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 min-h-[44px] flex items-center justify-center ${
                  isActive
                    ? "bg-burgundy text-ivory shadow-burgundy-soft font-semibold"
                    : "bg-white text-burgundy/80 hover:text-burgundy hover:bg-gold/15 border border-gold/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Masonry / Grid Container: 2 cols on mobile, 3 cols on desktop */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gold/25 cursor-pointer hover:shadow-luxury transition-all duration-300"
                onClick={() => openLightbox(index)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                aria-label={`View photo: ${item.title}`}
              >
                {/* Photo Container */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden bg-burgundy-dark/10">
                  <picture>
                    <source srcSet={item.src} type="image/webp" />
                    {item.fallbackSrc && <source srcSet={item.fallbackSrc} type="image/jpeg" />}
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      width="720"
                      height="960"
                      style={{ objectPosition: "center 25%" }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </picture>

                  {/* Gold Hover Overlay with "View" Label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/85 via-burgundy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-6 text-ivory">
                    <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gold/90 text-burgundy text-[10px] sm:text-xs font-semibold w-max mb-1.5 shadow-sm">
                      <Eye size={12} />
                      <span>View Look</span>
                    </div>
                    <h3 className="font-serif text-sm sm:text-lg font-bold text-ivory mb-0.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-ivory/80 line-clamp-2 font-light hidden sm:block">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Caption underneath card */}
                <div className="p-2.5 sm:p-4 bg-white flex items-center justify-between border-t border-gold/15">
                  <div className="min-w-0 pr-1">
                    <h3 className="font-serif text-xs sm:text-sm font-semibold text-burgundy group-hover:text-gold transition-colors truncate">
                      {item.title}
                    </h3>
                    <span className="text-[9px] sm:text-[11px] text-gold uppercase tracking-wider font-medium block truncate">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-xs text-burgundy/40 group-hover:text-gold transition-colors flex-shrink-0">
                    &rarr;
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gold/20 p-8">
            <Sparkles size={32} className="text-gold mx-auto mb-3" />
            <p className="text-burgundy font-serif text-lg">No looks in this category yet.</p>
            <p className="text-burgundy/60 text-sm mt-1">Check back soon as we continuously update Yamini&apos;s bridal diary.</p>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
