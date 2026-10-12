import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Sparkles } from "lucide-react";
import { CATEGORIES_DATA, getCategoryBySlug, portfolioCategorySlugs } from "@/data/portfolio";
import CategoryGalleryClient from "./CategoryGalleryClient";

interface PageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return portfolioCategorySlugs.map((slug) => ({
    category: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) {
    return {
      title: "Category Not Found | Makeup 101 by Yamini",
    };
  }

  return {
    title: `${cat.title} | Makeup 101 by Yamini Chennai`,
    description: `${cat.description} Explore authentic client transformations by Yamini in Chennai.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (!cat) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 sm:pb-32 bg-[#F6F0E8]/30">
      {/* Category Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-burgundy/70 hover:text-gold transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to All Looks</span>
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
            Visual Archive &bull; {cat.images.length} Client Looks
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy mb-3">
            {cat.title}
          </h1>
          <p className="font-serif text-lg sm:text-xl text-gold font-medium italic mb-4">
            {cat.serviceTitle}
          </p>
          <div className="gold-divider" />
          <p className="text-burgundy/80 text-base sm:text-lg font-light leading-relaxed mb-8">
            {cat.description}
          </p>

          {/* Action Callout */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/contact?service=${cat.slug}`}
              className="btn-gold text-xs sm:text-sm py-3 px-6 shadow-sm inline-flex items-center gap-2"
            >
              <Calendar size={16} />
              <span>Book an Enquiry for this Style</span>
            </Link>
            <Link
              href="/services"
              className="btn-burgundy-outline text-xs sm:text-sm py-3 px-6 inline-flex items-center gap-2"
            >
              <Sparkles size={16} />
              <span>Explore All Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <CategoryGalleryClient category={cat} />
    </div>
  );
}
