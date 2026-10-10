'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, ExternalLink } from "lucide-react";
import ReelViewer from "@/components/reels/ReelViewer";
import TiltCard from "@/components/3d/TiltCard";
import { InstagramIcon } from "@/components/common/SocialIcons";
import { reelsData, REEL_CATEGORIES } from "@/data/reels";

export default function ReelsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedReelIndex, setSelectedReelIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const filteredReels = activeCategory === "All"
    ? reelsData
    : reelsData.filter((r) => r.category === activeCategory);

  const openReel = (index: number) => {
    setSelectedReelIndex(index);
    setIsViewerOpen(true);
  };

  return (
    <div className="pt-28 pb-24 sm:pb-32">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold uppercase tracking-wider mb-3 border border-gold/25">
          <Sparkles size={13} />
          <span>Watch Our Work</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy mb-4">
          Bridal Video Reels
        </h1>
        <div className="gold-divider" />
        <p className="max-w-2xl mx-auto text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
          Real brides, real skin textures, and unhurried artistry. Browse through our masterclasses, hair styling transformations, and practical bridal advice.
        </p>

        {/* Instagram Profile CTA */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="https://www.instagram.com/makeup101byyamini/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gold/30 text-burgundy text-xs sm:text-sm font-medium hover:bg-gold/10 transition-colors shadow-sm min-h-[44px]"
          >
            <InstagramIcon size={16} />
            <span>Follow @makeup101byyamini</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div
          className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 justify-start lg:justify-center no-scrollbar"
          role="tablist"
          aria-label="Reel category filters"
        >
          {REEL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={isActive}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-300 min-h-[44px] flex items-center justify-center ${
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

      {/* Reels Grid: 2 columns on mobile, 3-4 columns on desktop */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          <AnimatePresence>
            {filteredReels.map((reel, index) => (
              <motion.div
                key={reel.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard className="h-full">
                  <div
                    onClick={() => openReel(index)}
                    className="relative aspect-[9/16] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-burgundy-dark cursor-pointer group shadow-sm hover:shadow-luxury border border-gold/25 select-none"
                    role="button"
                    tabIndex={0}
                    aria-label={`Open reel: ${reel.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openReel(index);
                      }
                    }}
                  >
                    {/* Video Poster */}
                    <picture>
                      <source srcSet={reel.poster} type="image/webp" />
                      <img
                        src={reel.poster.replace(".webp", ".jpg")}
                        alt={reel.title}
                        loading="lazy"
                        width="720"
                        height="1280"
                        style={{ objectPosition: "center 25%" }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </picture>

                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                    {/* Category Chip */}
                    <div className="absolute top-2.5 sm:top-3.5 left-2.5 sm:left-3.5 z-20">
                      <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-burgundy/85 backdrop-blur-md text-ivory text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase border border-gold/40 shadow-sm">
                        {reel.category}
                      </span>
                    </div>

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-md text-gold flex items-center justify-center border border-gold/30 shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-burgundy transition-all duration-300">
                        <Play size={18} className="translate-x-0.5" />
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white z-20 pointer-events-none">
                      <span className="text-[10px] font-mono text-gold/90 block mb-0.5">
                        {reel.duration} min
                      </span>
                      <h2 className="font-serif text-xs sm:text-sm font-bold text-white line-clamp-2 leading-snug group-hover:text-gold transition-colors">
                        {reel.title}
                      </h2>
                      <p className="text-[10px] sm:text-[11px] text-white/70 line-clamp-1 mt-0.5 font-light hidden sm:block">
                        {reel.caption}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredReels.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gold/20 p-8 max-w-md mx-auto">
            <Sparkles size={32} className="text-gold mx-auto mb-3" />
            <p className="text-burgundy font-serif text-lg">No reels in this category.</p>
            <p className="text-burgundy/60 text-sm mt-1">Select another filter or view all reels.</p>
          </div>
        )}
      </section>

      {/* Fullscreen Reel Viewer Modal */}
      <ReelViewer
        reels={filteredReels}
        initialIndex={selectedReelIndex}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </div>
  );
}
