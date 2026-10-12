'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Sparkles } from "lucide-react";
import Lightbox from "@/components/common/Lightbox";
import { CATEGORIES_DATA, portfolioItems } from "@/data/portfolio";

export default function PortfolioGallery() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Sync with search parameter if provided (e.g. ?category=wedding or ?category=bridal-hairstyle)
  useEffect(() => {
    const categoryParam = searchParams?.get("category");
    if (!categoryParam) return;

    const matchedCat = CATEGORIES_DATA.find(
      (c) =>
        c.slug.toLowerCase() === categoryParam.toLowerCase() ||
        c.title.toLowerCase() === categoryParam.toLowerCase()
    );

    if (matchedCat) {
      setActiveCategory(matchedCat.title);
    }
  }, [searchParams]);

  const filterChips = [
    { label: "All", slug: "all" },
    ...CATEGORIES_DATA.map((c) => ({ label: c.title, slug: c.slug })),
  ];

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (item) =>
            item.category.toLowerCase() === activeCategory.toLowerCase() ||
            item.categorySlug.toLowerCase() === activeCategory.toLowerCase()
        );

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
    <>
      {/* Category Filter Chips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <div
          className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 justify-start lg:justify-center no-scrollbar"
          role="tablist"
          aria-label="Portfolio category filter tabs"
        >
          {filterChips.map((chip) => {
            const isActive = activeCategory === chip.label;
            return (
              <button
                key={chip.slug}
                onClick={() => setActiveCategory(chip.label)}
                role="tab"
                aria-selected={isActive}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 min-h-[44px] flex items-center justify-center ${
                  isActive
                    ? "bg-burgundy text-ivory shadow-burgundy-soft font-semibold"
                    : "bg-white text-burgundy/80 hover:text-burgundy hover:bg-gold/15 border border-gold/20"
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
        <p className="text-center text-xs text-burgundy/60 mt-1">
          Showing {filteredItems.length} authentic client looks
        </p>
      </section>

      {/* Masonry Grid: 2 columns on mobile, 3 columns on desktop */}
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
                transition={{ duration: 0.25 }}
                className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gold/25 cursor-pointer hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
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
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectPosition: "center 25%" }}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gold Hover Overlay with "View Look" Label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-5 text-ivory">
                    <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gold/90 text-burgundy text-[10px] sm:text-xs font-semibold w-max mb-1.5 shadow-sm">
                      <Eye size={12} />
                      <span>View Look</span>
                    </div>
                    <h3 className="font-serif text-xs sm:text-base font-bold text-ivory mb-0.5 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Caption underneath card */}
                <div className="p-2.5 sm:p-3.5 bg-white flex items-center justify-between border-t border-gold/15">
                  <div className="min-w-0 pr-1">
                    <h4 className="font-serif text-xs sm:text-sm font-semibold text-burgundy group-hover:text-gold transition-colors truncate">
                      {item.title}
                    </h4>
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
            <p className="text-burgundy/60 text-sm mt-1">
              Check back soon as we continuously update Yamini&apos;s bridal diary.
            </p>
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
    </>
  );
}
