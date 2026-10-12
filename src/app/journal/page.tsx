'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight, Sparkles, Play } from "lucide-react";
import { InstagramIcon } from "@/components/common/SocialIcons";
import { articles, articleCategories } from "@/data/articles";
import { hairstyleTutorials } from "@/data/reels";

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 sm:pb-32 bg-[#F6F0E8]/30">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
          Stories & Tips
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy mb-4">
          Bridal Beauty Journal
        </h1>
        <div className="gold-divider" />
        <p className="max-w-2xl mx-auto text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
          Thoughtful advice, hairstyle inspiration, and bridal preparation tips written specifically for modern South Indian brides in Chennai.
        </p>
      </section>

      {/* Categories Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 justify-start sm:justify-center no-scrollbar">
          {articleCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all whitespace-nowrap min-h-[44px] flex items-center justify-center ${
                  isActive
                    ? "bg-burgundy text-ivory font-semibold shadow-sm"
                    : "bg-white text-burgundy/80 hover:bg-gold/15 border border-gold/25"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden border border-gold/25 shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Article Thumbnail */}
                <Link href={`/journal/${article.slug}`} className="block relative h-56 overflow-hidden bg-burgundy/10">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectPosition: "center 25%" }}
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-burgundy/90 text-ivory text-xs px-3 py-1 rounded-full backdrop-blur-md border border-gold/30">
                    {article.category}
                  </div>
                </Link>

                {/* Article Info */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-4 text-xs text-gold font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {article.publishDate}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-burgundy mb-3 hover:text-gold transition-colors leading-snug">
                    <Link href={`/journal/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-burgundy/75 text-sm font-light leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Read Article Link */}
              <div className="p-6 sm:p-7 pt-0 border-t border-ivory-200">
                <Link
                  href={`/journal/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-gold hover:text-burgundy uppercase tracking-wider transition-colors pt-4"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Embedded Hairstyle Tutorials Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-ivory rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
                Step-by-Step Masterclasses
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy">
                Hairstyle Tutorials & Techniques
              </h3>
              <p className="text-burgundy/80 text-sm sm:text-base font-light mt-1">
                Visual tutorials detailing sacred poo jadai plaiting, textured buns, and romantic wedding hairstyles.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairstyleTutorials.slice(0, 3).map((tutorial, idx) => (
              <div
                key={tutorial.id}
                className="bg-white rounded-2xl overflow-hidden border border-gold/25 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full bg-burgundy/10 overflow-hidden">
                  <Image
                    src={tutorial.poster}
                    alt={tutorial.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectPosition: "center 25%" }}
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-gold text-burgundy font-semibold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                    Tutorial {tutorial.tutorialNumber ?? idx + 1}/100
                  </div>
                  <Link
                    href={`/reels?category=Hairstyle%20Tutorials`}
                    className="absolute inset-0 bg-burgundy/20 hover:bg-burgundy/35 transition-colors flex items-center justify-center group"
                  >
                    <div className="w-11 h-11 rounded-full bg-white/90 group-hover:bg-gold text-burgundy group-hover:text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play size={18} className="ml-0.5 fill-current" />
                    </div>
                  </Link>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-base font-bold text-burgundy mb-1">
                      {tutorial.title}
                    </h4>
                    <p className="text-xs text-burgundy/75 font-light line-clamp-2">
                      {tutorial.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-ivory-200 flex items-center justify-between">
                    <Link
                      href="/journal/easy-bridal-hairstyles-to-try-for-your-wedding"
                      className="text-xs text-gold hover:text-burgundy font-medium"
                    >
                      Read Related Guide &rarr;
                    </Link>
                    <Link
                      href="/reels?category=Hairstyle%20Tutorials"
                      className="text-xs text-burgundy/60 hover:text-burgundy"
                    >
                      Watch Reel
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch on Instagram Feature Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-burgundy text-ivory rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
                Social Tutorials & Transformations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory mb-4">
                Watch on Instagram & YouTube
              </h3>
              <p className="text-ivory/80 text-sm sm:text-base font-light leading-relaxed mb-6">
                Follow along for behind-the-scenes vanity transformations, real wedding morning updates, jasmine Jadai floral tutorials, and bride stories on our official channels.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/makeup101byyamini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-xs py-3 px-5 inline-flex items-center gap-2"
                >
                  <InstagramIcon size={15} />
                  <span>@makeup101byyamini</span>
                </a>
                <a
                  href="https://www.instagram.com/channel/p7ZUzqEOjk6q8hNd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-outline text-xs py-3 px-5 inline-flex items-center gap-2 text-ivory border-gold"
                >
                  <Sparkles size={15} />
                  <span>Yamini&apos;s Bridal Diary</span>
                </a>
              </div>
            </div>

            {/* Instagram Feed / Video Mockup Card */}
            <div className="relative rounded-2xl overflow-hidden border border-gold/40 shadow-xl bg-burgundy-dark p-6 text-center">
              <InstagramIcon size={40} className="text-gold mx-auto mb-3" />
              <h4 className="font-serif text-lg font-bold text-ivory mb-2">
                Daily Bridal Inspiration
              </h4>
              <p className="text-xs text-ivory/70 mb-4">
                Fresh Muhurtham looks, hairstyle reels, and Kanjeevaram saree pleating techniques updated regularly.
              </p>
              <a
                href="https://www.youtube.com/@Makeup101ByYamini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gold underline hover:text-white"
              >
                Also watch on YouTube (@Makeup101ByYamini) &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
