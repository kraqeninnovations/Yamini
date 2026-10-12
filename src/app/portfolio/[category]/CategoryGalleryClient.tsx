'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Play, Sparkles, ArrowRight } from "lucide-react";
import Lightbox from "@/components/common/Lightbox";
import ReelViewer from "@/components/reels/ReelViewer";
import { Category, PortfolioItem } from "@/data/portfolio";
import { hairstyleTutorials, ReelItem } from "@/data/reels";

interface CategoryGalleryClientProps {
  category: Category;
}

export default function CategoryGalleryClient({ category }: CategoryGalleryClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Reel viewer for hairstyle tutorials
  const [reelViewerOpen, setReelViewerOpen] = useState(false);
  const [activeReelIndex, setActiveReelIndex] = useState(0);

  // Convert category images into PortfolioItem list for Lightbox
  const items: PortfolioItem[] = category.images.map((img, idx) => ({
    id: `${category.slug}-${idx + 1}`,
    title: `${category.title} #${idx + 1}`,
    category: category.title,
    categorySlug: category.slug,
    src: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height,
    aspectRatio: `${img.width}/${img.height}`,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % items.length);
  };

  const handlePlayReel = (reelIndex: number) => {
    setActiveReelIndex(reelIndex);
    setReelViewerOpen(true);
  };

  return (
    <>
      {/* Category Gallery Grid: 2 cols on mobile, 3 cols on desktop */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gold/25 cursor-pointer hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
              onClick={() => openLightbox(index)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`View look ${index + 1} of ${category.title}`}
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

                {/* Gold Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/90 via-burgundy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-5 text-ivory">
                  <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gold/90 text-burgundy text-[10px] sm:text-xs font-semibold w-max mb-1.5 shadow-sm">
                    <Eye size={12} />
                    <span>View Look</span>
                  </div>
                  <h3 className="font-serif text-xs sm:text-base font-bold text-ivory mb-0.5 leading-snug">
                    {category.title} #{index + 1}
                  </h3>
                </div>
              </div>

              {/* Caption Underneath */}
              <div className="p-2.5 sm:p-3.5 bg-white flex items-center justify-between border-t border-gold/15">
                <div className="min-w-0 pr-1">
                  <h4 className="font-serif text-xs sm:text-sm font-semibold text-burgundy group-hover:text-gold transition-colors truncate">
                    Look #{index + 1}
                  </h4>
                  <span className="text-[9px] sm:text-[11px] text-gold uppercase tracking-wider font-medium block truncate">
                    {category.serviceTitle}
                  </span>
                </div>
                <span className="text-xs text-burgundy/40 group-hover:text-gold transition-colors flex-shrink-0">
                  &rarr;
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Dedicated Hairstyle Tutorials Row if bridal-hairstyle */}
      {category.slug === "bridal-hairstyle" && (
        <section className="bg-ivory border-t border-gold/20 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
                  100 Days Hairstyle Journey
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-burgundy">
                  Featured Hairstyle Tutorials
                </h3>
                <p className="text-burgundy/80 text-sm sm:text-base font-light mt-1">
                  Watch step-by-step masterclasses on traditional poo jadai plaiting, textured buns, and romantic waves.
                </p>
              </div>
              <Link
                href="/reels?category=Hairstyle%20Tutorials"
                className="btn-burgundy-outline text-xs py-2.5 px-5 self-start sm:self-auto inline-flex items-center gap-1.5"
              >
                <span>View All Tutorials</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hairstyleTutorials.slice(0, 4).map((tutorial, tIdx) => (
                <div
                  key={tutorial.id}
                  onClick={() => handlePlayReel(tIdx)}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-gold/25 shadow-sm hover:shadow-luxury transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[9/16] w-full bg-burgundy/10 overflow-hidden">
                    <Image
                      src={tutorial.poster}
                      alt={tutorial.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ objectPosition: "center 25%" }}
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Tutorial Number Badge */}
                    <div className="absolute top-3 left-3 bg-gold text-burgundy font-semibold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                      Tutorial {tutorial.tutorialNumber ?? tIdx + 1}/100
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-burgundy/25 group-hover:bg-burgundy/40 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-gold text-burgundy group-hover:text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play size={20} className="ml-0.5 fill-current" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-burgundy mb-1 line-clamp-1">
                        {tutorial.title}
                      </h4>
                      <p className="text-xs text-burgundy/70 line-clamp-2 font-light">
                        {tutorial.description}
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-gold mt-3 inline-flex items-center gap-1">
                      <span>Watch Tutorial</span>
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <Lightbox
        items={items}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Reel Viewer */}
      <ReelViewer
        reels={hairstyleTutorials}
        initialIndex={activeReelIndex}
        isOpen={reelViewerOpen}
        onClose={() => setReelViewerOpen(false)}
      />
    </>
  );
}
