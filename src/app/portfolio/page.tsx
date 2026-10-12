import type { Metadata } from "next";
import { Suspense } from "react";
import PortfolioGallery from "./PortfolioGallery";

export const metadata: Metadata = {
  title: "Bridal Portfolio | Makeup 101 by Yamini Chennai",
  description: "Browse 160+ authentic bridal looks across Muhurtham wedding makeup, bridal hairstyles, reception glam, engagement makeovers, and saree draping by Yamini in Chennai.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-24 sm:pb-32 bg-[#F6F0E8]/30">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
          Visual Gallery
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy mb-4">
          Bridal Portfolio
        </h1>
        <div className="gold-divider" />
        <p className="max-w-2xl mx-auto text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
          A curated visual chronicle of our brides in Chennai. Explore authentic client transformations from sacred temple jewellery Muhurtham ceremonies to contemporary reception glam and bespoke floral hairstyles.
        </p>
      </section>

      {/* Portfolio Gallery with Suspense boundary for useSearchParams */}
      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-burgundy/70 text-sm font-light">Loading visual gallery...</p>
        </div>
      }>
        <PortfolioGallery />
      </Suspense>
    </div>
  );
}
