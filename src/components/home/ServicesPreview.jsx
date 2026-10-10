import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import TiltCard from "../3d/TiltCard";

export default function ServicesPreview() {
  const previewCards = [
    {
      title: "Bridal Makeup",
      description: "Personalised traditional and modern bridal looks customized to your skin and outfit.",
      image: "/images/portfolio/bridal-01.webp",
      fallback: "/images/portfolio/bridal-01.jpg",
      alt: "South Indian traditional bridal makeup by Yamini in Chennai",
      tag: "Signature Muhurtham"
    },
    {
      title: "Bridal Hairstyling",
      description: "From romantic twisted half-up crowns to intricate poo jadai and textured buns.",
      image: "/images/portfolio/hair-01.webp",
      fallback: "/images/portfolio/hair-01.jpg",
      alt: "Intricate floral bridal hair styling by Yamini in Chennai",
      tag: "Poo Jadai & Modern Buns"
    },
    {
      title: "Saree & Lehenga Draping",
      description: "Crisp box pleats, comfortable pinning, and a beautifully finished bridal silhouette.",
      image: "/images/portfolio/drape-01.webp",
      fallback: "/images/portfolio/drape-01.jpg",
      alt: "Neat Kanjeevaram silk saree pleating and draping by Yamini in Chennai",
      tag: "Flawless Silhouette"
    },
    {
      title: "Engagement & Reception Looks",
      description: "Contemporary soft glam and evening radiance that dazzles under stage lighting.",
      image: "/images/portfolio/softglam-01.webp",
      fallback: "/images/portfolio/softglam-01.jpg",
      alt: "Reception soft glam makeup by Yamini in Chennai",
      tag: "Soft Glam & Modern Chic"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-y border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
            Tailored Artistry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy mb-4">
            Our Services
          </h2>
          <div className="gold-divider" />
          <p className="text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
            Thoughtfully curated bridal services designed to elevate your natural beauty with precision, comfort, and enduring grace.
          </p>
        </div>

        {/* 4 Cards Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {previewCards.map((service, index) => (
            <TiltCard key={service.title} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-ivory/60 rounded-2xl overflow-hidden border border-gold/20 shadow-sm hover:shadow-gold-soft transition-all duration-300 flex flex-col h-full"
              >
                {/* Card Image Container */}
                <div className="relative h-64 overflow-hidden bg-burgundy-dark/10">
                  <picture>
                    <source srcSet={service.image} type="image/webp" />
                    <img
                      src={service.fallback}
                      alt={service.alt}
                      loading="lazy"
                      width="600"
                      height="800"
                      style={{ objectPosition: "center 25%" }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </picture>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-burgundy uppercase tracking-wider border border-gold/30 shadow-sm">
                    {service.tag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-burgundy mb-2 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-burgundy/75 text-sm leading-relaxed font-light mb-6">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:text-gold-dark uppercase tracking-wider min-h-[44px]"
                  >
                    <span>Explore Details</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-14 text-center">
          <Link to="/services" className="btn-burgundy-outline text-sm sm:text-base py-3.5 px-8 min-h-[44px]">
            View Complete Services & Options
          </Link>
        </div>
      </div>
    </section>
  );
}
