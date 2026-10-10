import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ items, currentIndex, isOpen, onClose, onPrev, onNext }) {
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        onNext();
      } else {
        onPrev();
      }
    }
    setTouchStartX(null);
  };

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/90 backdrop-blur-md p-4 sm:p-6 select-none"
        role="dialog"
        aria-modal="true"
        aria-label="Image preview lightbox"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={onClose}
      >
        {/* Top bar with close button */}
        <div className="w-full flex justify-between items-center z-50" onClick={(e) => e.stopPropagation()}>
          <span className="text-xs text-gold/80 font-mono tracking-wider">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 text-ivory hover:bg-gold hover:text-burgundy transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
        </div>

        {/* Previous Button (desktop & tablet) */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-ivory hover:bg-gold hover:text-burgundy transition-colors min-w-[44px] min-h-[44px] items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold border border-gold/20"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Next Button (desktop & tablet) */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-ivory hover:bg-gold hover:text-burgundy transition-colors min-w-[44px] min-h-[44px] items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold border border-gold/20"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>

        {/* Image Content Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gold/30 bg-burgundy-dark/50">
            <img
              src={currentItem.src}
              alt={currentItem.alt}
              className="max-h-[65vh] w-auto object-contain mx-auto"
            />
          </div>

          {/* Caption & Metadata */}
          <div className="mt-4 text-center max-w-xl text-ivory">
            <div className="inline-block px-3 py-1 mb-2 text-xs font-medium uppercase tracking-wider rounded-full bg-gold/20 text-gold border border-gold/40">
              {currentItem.category}
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-semibold text-ivory">
              {currentItem.title}
            </h3>
            {currentItem.description && (
              <p className="text-sm text-ivory/80 mt-1 font-light">
                {currentItem.description}
              </p>
            )}
            <p className="text-xs text-gold/70 mt-2 font-mono">
              {currentIndex + 1} of {items.length}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
