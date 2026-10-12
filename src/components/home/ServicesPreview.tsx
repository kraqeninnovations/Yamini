'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { CATEGORIES_DATA } from "@/data/portfolio";
import TiltCard from "../3d/TiltCard";

export default function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
            Tailored Artistry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy mb-2">
            Our Services
          </h2>
          <p className="font-serif text-lg sm:text-xl text-gold font-medium italic mb-4">
            Our Bridal Services
          </p>
          <div className="gold-divider" />
          <p className="text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
            Thoughtfully curated bridal services designed to elevate your natural beauty with precision, comfort, and enduring grace.
          </p>
        </div>

        {/* 7 Services Grid with 3D Tilt and Hover Gold Overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {CATEGORIES_DATA.map((cat, index) => (
            <TiltCard key={cat.slug} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-ivory/60 rounded-2xl overflow-hidden border border-gold/20 shadow-sm hover:shadow-gold-soft transition-all duration-300 flex flex-col h-full"
              >
                {/* Card Image Container with Hover Zoom & Gold Overlay */}
                <div className="relative h-64 overflow-hidden bg-burgundy-dark/10">
                  <Image
                    src={cat.cover}
                    alt={`${cat.serviceTitle} by Yamini, Chennai`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    style={{ objectPosition: "center 25%" }}
                  />
                  {/* Subtle Gold Shimmer Overlay on Hover */}
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gold bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                      {cat.title}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-burgundy mb-2 group-hover:text-gold transition-colors">
                      {cat.serviceTitle}
                    </h3>
                    <p className="text-burgundy/75 text-xs sm:text-sm leading-relaxed font-light mb-5 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  {/* Two Buttons: View Looks & Enquire Now */}
                  <div className="flex items-center gap-2 pt-3 border-t border-gold/15">
                    <Link
                      href={`/portfolio?category=${cat.slug}`}
                      className="flex-1 text-center py-2.5 px-3 rounded-xl bg-ivory text-burgundy text-xs font-medium border border-gold/40 hover:bg-gold/15 transition-colors inline-flex items-center justify-center gap-1 min-h-[40px]"
                    >
                      <span>View Looks</span>
                      <ArrowRight size={13} />
                    </Link>
                    <Link
                      href={`/contact?service=${cat.slug}`}
                      className="flex-1 text-center py-2.5 px-3 rounded-xl bg-gold text-burgundy text-xs font-semibold hover:bg-gold-light transition-colors inline-flex items-center justify-center gap-1 shadow-sm min-h-[40px]"
                    >
                      <Calendar size={13} />
                      <span>Enquire Now</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-14 text-center">
          <Link href="/services" className="btn-burgundy-outline text-sm sm:text-base py-3.5 px-8 min-h-[44px]">
            View Complete Services & Options
          </Link>
        </div>
      </div>
    </section>
  );
}
