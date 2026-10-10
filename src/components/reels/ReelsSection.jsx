import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles, Volume2, VolumeX, Eye } from "lucide-react";
import { InstagramIcon } from "../common/SocialIcons";
import { reelsData } from "../../data/reels";
import ReelViewer from "./ReelViewer";
import TiltCard from "../3d/TiltCard";

export default function ReelsSection() {
  const [selectedReelIndex, setSelectedReelIndex] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activePlayingId, setActivePlayingId] = useState(null);
  const containerRef = useRef(null);
  const cardRefs = useRef({});

  // Display top 4 featured reels on Home page
  const featuredReels = reelsData.slice(0, 4);

  // Single-video autoplay IntersectionObserver
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestEntry = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio)) {
            bestEntry = entry;
          }
        });

        if (bestEntry && bestEntry.intersectionRatio > 0.6) {
          const reelId = bestEntry.target.dataset.reelId;
          setActivePlayingId(reelId);
        }
      },
      { threshold: [0.3, 0.6, 0.9] }
    );

    Object.values(cardRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [featuredReels]);

  const openReel = (index) => {
    setSelectedReelIndex(index);
    setIsViewerOpen(true);
  };

  return (
    <section id="reels" className="py-20 sm:py-28 bg-[#F6F0E8] border-t border-gold/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold uppercase tracking-wider mb-3 border border-gold/25">
              <Sparkles size={13} />
              <span>Watch Our Work in Motion</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy mb-3">
              Bridal Reels & Masterclasses
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gold via-gold-light to-gold-dark rounded-full mb-4" />
            <p className="text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
              Step inside Yamini&apos;s vanity room. Watch unfiltered 4K bridal transformations, hairstyle techniques, and candid advice for future brides.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              to="/reels"
              className="btn-gold-outline text-sm py-3 px-6 rounded-full inline-flex items-center gap-2 group min-h-[44px]"
            >
              <span>Explore All {reelsData.length} Reels</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Reel Cards: Horizontal Snap Scroll on Mobile, 4-col Grid on Desktop */}
        <div
          ref={containerRef}
          className="reel-snap-container flex gap-4 overflow-x-auto pb-6 pt-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 no-scrollbar"
        >
          {featuredReels.map((reel, index) => {
            const isPlaying = activePlayingId === reel.id;

            return (
              <div
                key={reel.id}
                ref={(el) => (cardRefs.current[reel.id] = el)}
                data-reel-id={reel.id}
                className="reel-snap-card flex-shrink-0 w-[260px] sm:w-auto"
              >
                <TiltCard className="h-full">
                  <div
                    onClick={() => openReel(index)}
                    className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-burgundy-dark cursor-pointer group shadow-luxury border border-gold/25 select-none"
                    role="button"
                    tabIndex={0}
                    aria-label={`Play reel: ${reel.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openReel(index);
                      }
                    }}
                  >
                    {/* Background Video / Poster */}
                    {isPlaying ? (
                      <video
                        src={reel.src}
                        poster={reel.poster}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <picture>
                        <source srcSet={reel.poster} type="image/webp" />
                        <img
                          src={reel.poster.replace(".webp", ".jpg")}
                          alt={reel.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </picture>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                    {/* Category Chip */}
                    <div className="absolute top-3.5 left-3.5 z-20">
                      <span className="px-2.5 py-1 rounded-full bg-burgundy/80 backdrop-blur-md text-ivory text-[10px] font-semibold tracking-wider uppercase border border-gold/40 shadow-sm">
                        {reel.category}
                      </span>
                    </div>

                    {/* Center Play Icon Pill */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md text-gold flex items-center justify-center border border-gold/30 shadow-lg group-hover:scale-110 group-hover:bg-gold group-hover:text-burgundy transition-all duration-300">
                        <Play size={20} className="translate-x-0.5" />
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20 pointer-events-none">
                      <span className="text-[11px] font-mono text-gold/90 block mb-1">
                        {reel.duration} min
                      </span>
                      <h3 className="font-serif text-sm sm:text-base font-bold text-white line-clamp-2 leading-snug group-hover:text-gold transition-colors">
                        {reel.title}
                      </h3>
                      <p className="text-[11px] text-white/70 line-clamp-1 mt-1 font-light">
                        {reel.caption}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="sm:hidden text-center mt-3 text-xs text-burgundy/60 font-light flex items-center justify-center gap-1.5">
          <span>&larr; Swipe to view more bridal reels &rarr;</span>
        </div>
      </div>

      {/* Fullscreen Reel Viewer Modal */}
      <ReelViewer
        reels={featuredReels}
        initialIndex={selectedReelIndex ?? 0}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </section>
  );
}
