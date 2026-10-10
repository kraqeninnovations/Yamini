import type { Metadata } from "next";
import Link from "next/link";
import { Quote, Sparkles, Video, Calendar } from "lucide-react";
import { InstagramIcon } from "@/components/common/SocialIcons";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Love From Our Brides 🤍 | Makeup 101 by Yamini Chennai",
  description: "Read heartfelt reviews and experiences from real brides styled by Makeup 101 by Yamini in Chennai. Real feedback without invented ratings.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-28 pb-24 sm:pb-32">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
          Real Stories & Experiences
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy mb-4">
          Love From Our Brides 🤍
        </h1>
        <div className="gold-divider" />
        <p className="max-w-2xl mx-auto text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
          Honest reflections from Chennai brides on their wedding day beauty journey. We believe in authenticity—every word here is grounded in real client experiences.
        </p>
        <div className="mt-4 p-3 bg-white/70 max-w-xl mx-auto rounded-xl border border-gold/30 text-[11px] text-burgundy/70 font-mono">
          // Brand Transparency: We do not display fabricated star ratings or artificial review counts. Client reviews are presented with full privacy consent.
        </div>
      </section>

      {/* Video Feature & Client Reels Slot */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-luxury">
          <div className="flex items-center gap-3 text-gold mb-6">
            <Video size={24} />
            <h2 className="font-serif text-2xl font-bold text-burgundy">
              Bridal Video Diary & Transformations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold/30 shadow-md h-72 sm:h-80 bg-burgundy-deep">
              <img
                src="/images/portfolio/bridal-01.webp"
                alt="Bridal Video Diary - South Indian bride transformation"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-burgundy/40 flex items-center justify-center p-6 text-center">
                <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-gold text-burgundy max-w-xs">
                  <Sparkles className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-xs font-serif font-bold mb-1">
                    Yamini&apos;s Bridal Video Reel Slot
                  </p>
                  <p className="text-[11px] text-burgundy/70 font-mono">
                    // Direct Instagram video reel embed placeholder
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider text-gold font-semibold block">
                Watch Live Reactions
              </span>
              <h3 className="font-serif text-2xl font-bold text-burgundy">
                The Mirror Reveal Moment
              </h3>
              <p className="text-burgundy/80 text-sm leading-relaxed font-light">
                Nothing compares to the moment a bride turns to the mirror and sees herself fully adorned in her wedding silk and jasmine flowers.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.instagram.com/makeup101byyamini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-burgundy-outline text-xs py-3 px-5 inline-flex items-center gap-2"
                >
                  <InstagramIcon size={15} />
                  <span>Watch Bridal Reels on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Written Reviews Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-3xl p-8 border border-gold/25 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="text-gold/20 w-12 h-12 mb-4" />
                
                <p className="text-burgundy/85 text-base font-light italic leading-relaxed mb-6 font-serif">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-ivory-200 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-gold flex-shrink-0">
                  <img
                    src={review.image}
                    alt={`${review.brideName} wedding look`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-burgundy text-base">
                    {review.brideName}
                  </h3>
                  <p className="text-xs text-gold font-medium">
                    {review.event}
                  </p>
                  <p className="text-[10px] text-burgundy/50 font-mono mt-0.5">
                    {review.verifiedNote}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Booking Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-burgundy text-ivory rounded-3xl p-8 sm:p-12 border border-gold/30">
          <h2 className="font-serif text-2xl sm:text-4xl font-bold mb-4">
            Be Part of Our Next Bridal Story
          </h2>
          <p className="text-ivory/80 text-sm sm:text-base font-light max-w-xl mx-auto mb-8">
            Every bride deserves to feel radiant and serene on her wedding morning. Secure your wedding date with Yamini.
          </p>
          <Link href="/contact" className="btn-gold text-base py-4 px-8">
            <Calendar size={18} />
            <span>Enquire for Your Wedding Date</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
