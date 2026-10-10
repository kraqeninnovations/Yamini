import type { Metadata } from "next";
import Link from "next/link";
import { Check, Sparkles, Calendar, Eye } from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Bridal Services | Makeup 101 by Yamini Chennai",
  description: "Explore our bespoke bridal services: Bridal Makeup, Hairstyling, Saree & Lehenga Draping, Engagement, and Reception looks in Chennai.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24 sm:pb-32">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-24">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
          Comprehensive Bridal Offerings
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy mb-4">
          Our Bridal Services
        </h1>
        <div className="gold-divider" />
        <p className="max-w-2xl mx-auto text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
          Every bridal look is tailored to your unique skin tone, ceremony timing, and outfit details. Pricing and availability are tailored per wedding schedule upon enquiry.
        </p>
      </section>

      {/* 6 Services Detailed Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-gold/20 shadow-sm hover:shadow-luxury hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Visual Image */}
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-burgundy/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-medium text-ivory tracking-wider border border-gold/40">
                    {service.category}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8">
                  <h2 className="font-serif text-2xl font-bold text-burgundy mb-3">
                    {service.title}
                  </h2>
                  <p className="text-burgundy/80 text-sm leading-relaxed font-light mb-6">
                    {service.description}
                  </p>

                  {/* Service Highlights */}
                  <div className="border-t border-ivory-200 pt-4 mb-4">
                    <span className="text-[11px] uppercase tracking-wider text-gold font-semibold block mb-3">
                      What&apos;s Included:
                    </span>
                    <ul className="space-y-2">
                      {service.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-burgundy/80">
                          <Check size={14} className="text-gold flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Action Buttons (View Looks / Enquire Now) */}
              <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/portfolio"
                  className="btn-burgundy-outline text-xs py-3 px-4 flex-1 text-center justify-center"
                  aria-label={`View looks for ${service.title}`}
                >
                  <Eye size={14} />
                  <span>View Looks</span>
                </Link>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="btn-gold text-xs py-3 px-4 flex-1 text-center justify-center shadow-sm"
                  aria-label={`Enquire now for ${service.title}`}
                >
                  <Calendar size={14} />
                  <span>Enquire Now</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tailored Booking Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="bg-ivory rounded-3xl p-8 sm:p-12 border border-gold/30">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy mb-4">
            Need a Customized Bridal Package?
          </h3>
          <p className="text-burgundy/80 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto mb-8">
            We design cohesive schedules for multi-day weddings (Muhurtham, Reception, Engagement, Sangeet). Let us know your event dates and required services.
          </p>
          <Link href="/contact" className="btn-gold text-sm py-3.5 px-8">
            <Sparkles size={16} />
            Request Custom Wedding Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
