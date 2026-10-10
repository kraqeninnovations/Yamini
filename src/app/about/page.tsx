import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Award, ShieldCheck } from "lucide-react";
import { InstagramIcon } from "@/components/common/SocialIcons";

export const metadata: Metadata = {
  title: "Meet Yamini | Bridal Makeup Artist in Chennai",
  description: "Learn about Yamini, the artist behind Makeup 101 in Chennai. Discover our bridal beauty philosophy: Beauty That Feels Like You.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 sm:pb-28">
      {/* Hero Banner for About */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Portrait Container */}
          <div className="relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] max-h-[640px] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/40 bg-burgundy-deep/10">
              <picture>
                <source srcSet="/images/yamini-portrait.webp" type="image/webp" />
                <img
                  src="/IMG_9890.JPEG"
                  alt="Yamini - Lead Bridal Makeup Artist and Founder of Makeup 101, Chennai"
                  className="w-full h-full object-cover object-[center_12%] hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />
              </picture>

              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-ivory/95 backdrop-blur-md border border-gold/40 text-burgundy shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif font-bold text-base sm:text-lg leading-tight">Yamini</p>
                    <p className="text-[10px] sm:text-xs text-gold font-medium uppercase tracking-wider mt-0.5">
                      Lead Bridal Artist &bull; Makeup 101
                    </p>
                  </div>
                  <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-gold/15 text-gold text-[10px] font-semibold uppercase tracking-wider border border-gold/30">
                    Chennai
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative accent orb */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-2 border-dashed border-gold/40 pointer-events-none -z-10" />
          </div>

          {/* Content Story */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={14} />
              <span>The Artist Behind the Artistry</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy leading-tight">
              Meet Yamini
            </h1>

            <p className="text-lg text-gold font-serif italic">
              The artist behind your bridal look.
            </p>

            <div className="gold-divider !mx-0" />

            <p className="text-burgundy/85 text-base sm:text-lg font-light leading-relaxed">
              Bridal beauty has always been Yamini&apos;s creative calling. Based in Chennai, Tamil Nadu, she approaches every bride with an artistic eye, genuine warmth, and a deep appreciation for the cultural significance of South Indian weddings.
            </p>

            <p className="text-burgundy/85 text-base sm:text-lg font-light leading-relaxed">
              Her approach begins with listening. By understanding each bride&apos;s comfort level, skin texture, outfit embellishments, and family traditions, Yamini curates a bridal look that harmonises every element seamlessly. Whether you prefer a soft, dewy glow or an opulent traditional transformation, she ensures that you feel pampered, radiant, and peaceful throughout your bridal preparation.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Link href="/contact" className="btn-gold">
                Book a Consultation
              </Link>
              <a
                href="https://www.instagram.com/makeup101byyamini/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-burgundy-outline text-sm py-3 px-5 inline-flex items-center gap-2"
              >
                <InstagramIcon size={16} />
                <span>@makeup101byyamini</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy: Beauty That Feels Like You */}
      <section className="bg-white py-16 sm:py-24 border-y border-gold/20 mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold block">
            Core Philosophy
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy">
            Beauty That Feels Like You
          </h2>

          <div className="gold-divider" />

          <div className="bg-ivory/60 rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-sm text-left sm:text-center space-y-6">
            <p className="text-burgundy/90 text-base sm:text-xl font-light leading-relaxed">
              &ldquo;At Makeup 101 by Yamini, beauty is about more than the final look. It&apos;s about understanding each client&apos;s vision, paying attention to the little details and creating a look that feels special to them. Whether you love a traditional South Indian bridal look, soft glam or modern elegance, our goal is to help you feel confident and beautiful for your special moments. Every look tells a story. We&apos;d love to be part of yours.&rdquo;
            </p>
            <p className="text-gold font-serif font-semibold text-lg">
              &mdash; Yamini
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications & Certifications */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-luxury">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
              Professional Credentials
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy mb-2">
              Qualifications & Certifications
            </h2>
            <p className="text-xs text-burgundy/60 font-mono">
              // Strict Brand Integrity: Exact certifications and qualifications are reserved for verified client documentation.
            </p>
          </div>

          {/* Structured Placeholder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-ivory/50 border border-gold/20 flex flex-col justify-between">
              <div>
                <Award className="w-8 h-8 text-gold mb-3" />
                <h3 className="font-serif text-lg font-bold text-burgundy mb-2">
                  Professional Makeup Certification
                </h3>
                <p className="text-xs text-burgundy/70 leading-relaxed font-mono">
                  [PLACEHOLDER: Academy / Artistry Masterclass certification details to be listed upon documentation verification.]
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gold/20 text-[10px] text-gold uppercase tracking-wider">
                Verified Credential Slot
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-ivory/50 border border-gold/20 flex flex-col justify-between">
              <div>
                <Sparkles className="w-8 h-8 text-gold mb-3" />
                <h3 className="font-serif text-lg font-bold text-burgundy mb-2">
                  Advanced Bridal Hairstyling
                </h3>
                <p className="text-xs text-burgundy/70 leading-relaxed font-mono">
                  [PLACEHOLDER: South Indian Poo Jadai & contemporary bridal up-do specialised training accreditation.]
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gold/20 text-[10px] text-gold uppercase tracking-wider">
                Verified Credential Slot
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-ivory/50 border border-gold/20 flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-8 h-8 text-gold mb-3" />
                <h3 className="font-serif text-lg font-bold text-burgundy mb-2">
                  Sanitation & Hygiene Standards
                </h3>
                <p className="text-xs text-burgundy/70 leading-relaxed font-mono">
                  [PLACEHOLDER: Studio protocol detailing high-grade professional makeup hygiene & skin barrier safety.]
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gold/20 text-[10px] text-gold uppercase tracking-wider">
                Verified Credential Slot
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
