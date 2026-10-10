import { Link } from "react-router-dom";
import { Calendar, Phone, MessageCircle, Sparkles } from "lucide-react";

export default function BookingCTA() {
  return (
    <section className="py-20 sm:py-24 bg-burgundy text-ivory relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs sm:text-sm font-medium tracking-wider uppercase mb-6">
          <Sparkles size={14} />
          Limited Dates Available Each Wedding Season
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-ivory mb-6 tracking-tight">
          Your Bridal Date Starts Here
        </h2>

        <p className="text-ivory/85 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Planning your wedding or engagement? Let's discuss the look you've been dreaming of. We ensure dedicated attention for every bride.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            to="/contact"
            className="btn-gold text-base py-4 px-9 shadow-lg w-full sm:w-auto text-center"
            id="cta-enquire-btn"
          >
            <Calendar size={18} />
            <span>Enquire About Your Date</span>
          </Link>

          <a
            href="https://wa.me/919940472471?text=Hi%20Yamini%2C%20I%27d%20like%20to%20enquire%20about%20bridal%20makeup%20for%20my%20wedding%20date."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline text-base py-4 px-8 w-full sm:w-auto text-center justify-center"
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Direct Phone Line */}
        <div className="inline-flex items-center gap-2 text-sm text-ivory/80">
          <Phone size={16} className="text-gold" />
          <span>Direct Studio Line:</span>
          <a
            href="tel:+919940472471"
            className="text-gold font-semibold hover:underline"
          >
            +91 99404 72471
          </a>
        </div>
      </div>
    </section>
  );
}
