import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Sparkles } from "lucide-react";
import { articles } from "@/data/articles";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | Makeup 101 by Yamini`,
    description: article.summary,
  };
}

export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles (excluding current)
  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <article className="pt-28 pb-24 sm:pb-32">
      {/* Navigation back */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gold hover:text-burgundy uppercase tracking-wider transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Bridal Beauty Journal</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <div className="inline-block px-3.5 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
          {article.category}
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-burgundy mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center justify-center gap-6 text-xs sm:text-sm text-burgundy/60 font-medium">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-gold" />
            {article.publishDate}
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-gold" />
            {article.readTime}
          </span>
          <span>&bull;</span>
          <span>By Yamini</span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gold/30 h-[320px] sm:h-[480px]">
          <img
            src={article.image}
            alt={article.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-burgundy max-w-none text-burgundy/90 leading-relaxed font-light space-y-6 text-base sm:text-lg">
          {article.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (trimmed.startsWith("### ")) {
              return (
                <h2
                  key={idx}
                  className="font-serif text-2xl sm:text-3xl font-bold text-burgundy pt-6 pb-2"
                >
                  {trimmed.replace("### ", "")}
                </h2>
              );
            }
            if (trimmed.startsWith("- ")) {
              const listItems = trimmed.split("\n").map((li) => li.replace("- ", ""));
              return (
                <ul key={idx} className="list-disc pl-6 space-y-2 text-base">
                  {listItems.map((item, lIdx) => (
                    <li key={lIdx}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (trimmed.startsWith("*Stylist tip:*")) {
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-gold/40 text-sm italic font-serif text-burgundy shadow-sm"
                >
                  {trimmed}
                </div>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Article Footer & Enquire CTA Banner */}
        <div className="mt-16 pt-8 border-t border-gold/30">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/30 shadow-luxury text-center">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
              Have a Wedding Date Approaching?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy mb-3">
              Let&apos;s Design Your Dream Bridal Look
            </h3>
            <p className="text-burgundy/80 text-sm sm:text-base font-light max-w-xl mx-auto mb-6">
              Consult with Yamini for your Muhurtham, Engagement or Reception. We ensure every detail is thoughtfully crafted around your personal bridal story.
            </p>
            <Link href="/contact" className="btn-gold text-sm py-3.5 px-8">
              <Sparkles size={16} />
              Enquire for Your Wedding Date
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-20">
            <h3 className="font-serif text-2xl font-bold text-burgundy mb-8">
              Related Bridal Reading
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/journal/${rel.slug}`}
                  className="group bg-white rounded-2xl p-6 border border-gold/20 hover:border-gold shadow-sm hover:shadow-luxury transition-all duration-300"
                >
                  <span className="text-[11px] font-semibold text-gold uppercase tracking-wider block mb-2">
                    {rel.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-burgundy group-hover:text-gold transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-burgundy/70 line-clamp-2 font-light">
                    {rel.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
