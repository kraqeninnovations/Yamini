'use client';

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, VolumeX, Play, ChevronUp, ChevronDown, ExternalLink } from "lucide-react";
import { InstagramIcon } from "../common/SocialIcons";
import { ReelItem } from "@/data/reels";

interface ReelViewerProps {
  reels: ReelItem[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ReelViewer({ reels, initialIndex = 0, isOpen, onClose }: ReelViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setProgress(0);
    setIsPlaying(true);
  }, [initialIndex, isOpen]);

  const currentReel = reels[currentIndex];

  const nextReel = () => {
    if (currentIndex < reels.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    }
  };

  const prevReel = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    }
  };

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown" || e.key === "ArrowRight") nextReel();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prevReel();
      if (e.key === " " || e.key === "k") {
        e.preventDefault();
        togglePlay();
      }
      if (e.key === "m") {
        setIsMuted((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex, reels.length]);

  // Touch vertical swipe detection
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY === null) return;
    const diff = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextReel(); // swiped up -> next
      else prevReel(); // swiped down -> previous
    }
    setTouchStartY(null);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p);
    }
  };

  if (!isOpen || !currentReel) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-0 sm:p-4 select-none"
        role="dialog"
        aria-modal="true"
        aria-label={`Video reel: ${currentReel.title}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main Reel Container */}
        <div className="relative w-full h-[100dvh] sm:h-[92vh] sm:max-w-[420px] bg-black sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between border-0 sm:border border-gold/30">
          
          {/* Top Overlay Bar */}
          <div className="absolute top-0 left-0 right-0 z-30 p-4 pt-safe bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between">
            {/* Reel Progress Bar */}
            <div className="absolute top-2 left-4 right-4 h-1 bg-white/25 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Account Info */}
            <div className="flex items-center gap-2.5 mt-2">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center font-serif text-xs font-bold text-burgundy shadow-sm border border-white/20">
                Y
              </div>
              <div>
                <span className="text-xs font-semibold text-white block leading-tight">
                  makeup101byyamini
                </span>
                <span className="text-[10px] text-gold uppercase tracking-wider block">
                  {currentReel.category}
                </span>
              </div>
            </div>

            {/* Actions: Mute and Close */}
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2.5 rounded-full bg-black/40 text-white hover:bg-gold hover:text-burgundy transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-black/40 text-white hover:bg-gold hover:text-burgundy transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                aria-label="Close reel modal"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Video Player or Instagram Fallback */}
          <div 
            className="relative w-full h-full flex items-center justify-center cursor-pointer bg-black"
            onClick={currentReel.src ? togglePlay : () => window.open(currentReel.instagramUrl, "_blank")}
          >
            {currentReel.src ? (
              <>
                <video
                  ref={videoRef}
                  key={currentReel.src}
                  src={currentReel.src}
                  poster={currentReel.poster}
                  autoPlay
                  playsInline
                  loop
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={nextReel}
                  className="w-full h-full object-cover"
                />

                {/* Center Play/Pause Indicator (when paused) */}
                {!isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/35 pointer-events-none"
                  >
                    <div className="w-16 h-16 rounded-full bg-black/60 text-white flex items-center justify-center border border-gold/40 shadow-xl">
                      <Play size={28} className="translate-x-0.5" />
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <img
                  src={currentReel.poster}
                  alt={currentReel.title}
                  className="w-full h-full object-cover filter brightness-[0.7]"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/40">
                  <div className="w-16 h-16 rounded-full bg-gold text-burgundy flex items-center justify-center shadow-luxury mb-4 hover:scale-110 transition-transform">
                    <Play size={28} className="translate-x-0.5" />
                  </div>
                  <span className="text-white font-medium text-sm mb-1">Coming Soon to Video Feed</span>
                  <p className="text-xs text-white/80 max-w-xs mb-4">Tap to watch this reel preview on our Instagram page</p>
                  <a
                    href={currentReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-xs py-2.5 px-5 shadow-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Watch on Instagram
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Floating Vertical Navigation Controls */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
            <button
              onClick={prevReel}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full bg-black/50 text-white transition-all min-w-[40px] min-h-[40px] flex items-center justify-center ${
                currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-gold hover:text-burgundy"
              }`}
              aria-label="Previous reel"
            >
              <ChevronUp size={22} />
            </button>
            <button
              onClick={nextReel}
              disabled={currentIndex === reels.length - 1}
              className={`p-2 rounded-full bg-black/50 text-white transition-all min-w-[40px] min-h-[40px] flex items-center justify-center ${
                currentIndex === reels.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-gold hover:text-burgundy"
              }`}
              aria-label="Next reel"
            >
              <ChevronDown size={22} />
            </button>
          </div>

          {/* Bottom Info & Caption Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-30 p-4 pb-safe bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
            <h3 className="font-serif text-base sm:text-lg font-bold text-ivory mb-1">
              {currentReel.title}
            </h3>
            <p className="text-xs text-white/80 line-clamp-2 font-light mb-3">
              {currentReel.description}
            </p>

            {/* Instagram Link & Follow Button */}
            <div className="flex items-center justify-between pt-2 border-t border-white/15">
              <a
                href={currentReel.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-white transition-colors"
                aria-label="View this reel on Instagram"
              >
                <InstagramIcon size={14} />
                <span>View on Instagram</span>
                <ExternalLink size={12} />
              </a>

              <a
                href="https://www.instagram.com/makeup101byyamini/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold text-burgundy font-semibold text-xs shadow-sm hover:bg-gold-light transition-colors"
                aria-label="Follow Yamini on Instagram"
              >
                <span>Follow</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
