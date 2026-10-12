import type { Metadata } from "next";
import { Suspense } from "react";
import { Sparkles, ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/common/SocialIcons";
import ReelsGridClient from "./ReelsGridClient";

export const metadata: Metadata = {
  title: "Bridal Video Reels | Makeup 101 by Yamini Chennai",
  description: "Watch authentic bridal makeover transformations, 100 days hairstyle tutorials, Dear Bride advice, and behind-the-scenes by Yamini in Chennai.",
};

export default function ReelsPage() {
  return (
    <div className="pt-28 pb-24 sm:pb-32 bg-[#F6F0E8]/30">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold uppercase tracking-wider mb-3 border border-gold/25">
          <Sparkles size={13} />
          <span>Watch Our Work</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy mb-4">
          Bridal Video Reels
        </h1>
        <div className="gold-divider" />
        <p className="max-w-2xl mx-auto text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
          Real brides, genuine skin textures, and unhurried artistry. Browse through our hairstyle masterclasses, bridal transformations, and practical advice.
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
            <span>Follow @makeup101byyamini on Instagram</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </section>

      {/* Reels Grid with Suspense */}
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-burgundy/70 text-sm font-light">Loading reels gallery...</p>
          </div>
        }
      >
        <ReelsGridClient />
      </Suspense>
    </div>
  );
}
