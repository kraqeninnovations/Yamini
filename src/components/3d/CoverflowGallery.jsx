import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react";
import { portfolioItems } from "../../data/portfolio";

export default function CoverflowGallery({ onSelectLook }) {
  // Use first 7 curated portfolio highlights
  const items = portfolioItems.slice(0, 7);
  const [activeIndex, setActiveIndex] = useState(2);
  const containerRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const prev = () => setActiveIndex((curr) => (curr > 0 ? curr - 1 : items.length - 1));
  const next = () => setActiveIndex((curr) => (curr < items.length - 1 ? curr + 1 : 0));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items.length]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
    setTouchStartX(null);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F6F0E8] overflow-hidden border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
          3D Visual Experience
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy mb-4">
          Featured Bridal Highlights
        </h2>
        <div className="gold-divider" />
        <p className="max-w-xl mx-auto text-burgundy/80 text-sm sm:text-base font-light">
          Swipe or rotate through Yamini&apos;s signature bridal styles in 3D perspective.
        </p>
      </div>

      {/* 3D Carousel Stage */}
      <div 
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "pan-y" }}
        className="relative max-w-5xl mx-auto h-[440px] sm:h-[500px] flex items-center justify-center perspective-1000 select-none px-4"
      >
        {items.map((item, index) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);
          const isActive = index === activeIndex;

          // Limit rendered cards in view to keep smooth performance
          if (absOffset > 3) return null;

          // 3D positioning
          const translateX = offset * (window.innerWidth < 640 ? 110 : 170);
          const translateZ = -absOffset * 130;
          const rotateY = offset * -32;
          const scale = isActive ? 1.05 : 0.88 - absOffset * 0.05;
          const opacity = isActive ? 1 : Math.max(0.35, 1 - absOffset * 0.28);
          const zIndex = 20 - absOffset;

          return (
            <motion.div
              key={item.id}
              onClick={() => {
                if (isActive && onSelectLook) {
                  onSelectLook(index);
                } else {
                  setActiveIndex(index);
                }
              }}
              animate={{
                x: translateX,
                z: translateZ,
                rotateY: rotateY,
                scale: scale,
                opacity: opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 24,
              }}
              style={{
                zIndex,
                transformStyle: "preserve-3d",
              }}
              className="absolute w-[240px] sm:w-[280px] md:w-[310px] aspect-[9/14] rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-gold/30 bg-white"
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <picture>
                  <source srcSet={item.src} type="image/webp" />
                  <img
                    src={item.fallbackSrc || item.src}
                    alt={item.alt}
                    style={{ objectPosition: "center 25%" }}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>

                {/* Dark Gradient Overlay on sides */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isActive 
                      ? "bg-gradient-to-t from-burgundy/90 via-transparent to-transparent" 
                      : "bg-burgundy/40"
                  }`} 
                />

                {/* Card Info Details */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-ivory transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-ivory leading-tight mb-1">
                    {item.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/90 text-burgundy text-xs font-semibold mt-2 shadow-sm">
                    <Eye size={13} />
                    <span>View Detail</span>
                  </div>
                </div>

                {/* Active Gold Rim Halo */}
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl border-2 border-gold pointer-events-none shadow-gold-glow" />
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Carousel Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-6 z-30 p-3 rounded-full bg-white/90 text-burgundy hover:bg-gold hover:text-white transition-all shadow-md min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Previous 3D highlight"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-6 z-30 p-3 rounded-full bg-white/90 text-burgundy hover:bg-gold hover:text-white transition-all shadow-md min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Next 3D highlight"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`transition-all duration-300 rounded-full h-2 ${
              i === activeIndex ? "w-7 bg-gold" : "w-2 bg-burgundy/25 hover:bg-gold/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
