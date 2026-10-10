import Link from "next/link";
import { Phone, MapPin, Sparkles, Heart } from "lucide-react";
import { InstagramIcon, YouTubeIcon } from "../common/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-burgundy text-ivory pt-16 pb-24 sm:pb-16 border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-ivory/15">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-ivory block">
                Makeup 101
              </span>
              <span className="text-xs uppercase tracking-widest text-gold font-medium">
                by Yamini &bull; Chennai
              </span>
            </div>
            <p className="text-sm text-ivory/80 leading-relaxed font-light">
              Your Beauty. Your Bridal Story. Your Moment. Personalised bridal makeup, artisanal hairstyling, and traditional saree draping.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-gold">
              <MapPin size={14} />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-ivory/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ivory/80 hover:text-gold transition-colors">
                  About Yamini
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ivory/80 hover:text-gold transition-colors">
                  Bridal Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-ivory/80 hover:text-gold transition-colors">
                  Bridal Portfolio
                </Link>
              </li>
              <li>
                <Link href="/reels" className="text-ivory/80 hover:text-gold transition-colors">
                  Watch Video Reels
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-ivory/80 hover:text-gold transition-colors">
                  Beauty Journal & Tips
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-ivory/80 hover:text-gold transition-colors">
                  Real Bride Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ivory/80 hover:text-gold transition-colors">
                  Contact & Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Line */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold mb-4">
              Our Expertise
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory/80">
              <li>Traditional South Indian Bridal Makeup</li>
              <li>Reception & Engagement Soft Glam</li>
              <li>Floral Jadai & Modern Bridal Buns</li>
              <li>Kanjeevaram Saree & Lehenga Draping</li>
              <li>Bridal Makeup Consultation & Trials</li>
              <li>Bridal Party & Guest Styling</li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-gold mb-4">
              Connect with Yamini
            </h4>
            <div className="space-y-2 text-sm text-ivory/85">
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-gold" />
                <a href="tel:+919940472471" className="hover:text-gold transition-colors font-medium">
                  +91 99404 72471
                </a>
              </p>
              <p className="text-xs text-ivory/60">
                Available on Call & WhatsApp for wedding enquiries
              </p>
            </div>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-gold font-medium block mb-2.5">
                Follow Yamini's Work
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/makeup101byyamini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-ivory/80 hover:text-gold transition-colors"
                  aria-label="Instagram @makeup101byyamini"
                >
                  <InstagramIcon size={16} className="text-gold" />
                  <span>@makeup101byyamini</span>
                </a>
                <a
                  href="https://www.youtube.com/@Makeup101ByYamini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-ivory/80 hover:text-gold transition-colors"
                  aria-label="YouTube Channel Makeup101ByYamini"
                >
                  <YouTubeIcon size={16} className="text-gold" />
                  <span>@Makeup101ByYamini</span>
                </a>
                <a
                  href="https://www.instagram.com/channel/p7ZUzqEOjk6q8hNd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-ivory/80 hover:text-gold transition-colors"
                  aria-label="Instagram Channel Yamini's Bridal Diary"
                >
                  <Sparkles size={16} className="text-gold" />
                  <span>Yamini's Bridal Diary (Channel)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/60 gap-4">
          <p>
            &copy; 2026 Makeup 101 by Yamini. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Crafted for South Indian brides in Chennai <Heart size={12} className="text-gold fill-gold" />
          </p>
        </div>
      </div>
    </footer>
  );
}
