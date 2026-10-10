import type { Metadata } from "next";
import { Suspense } from "react";
import { 
  Phone, 
  MapPin, 
  MessageCircle 
} from "lucide-react";
import { InstagramIcon } from "@/components/common/SocialIcons";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact & Booking Enquiries | Makeup 101 by Yamini Chennai",
  description: "Enquire for your bridal makeup date with Yamini in Chennai. Wedding, Muhurtham, Reception, and bespoke bridal beauty reservations.",
};

export default function ContactPage() {
  const whatsappPreFilledUrl = `https://wa.me/919940472471?text=${encodeURIComponent(
    "Hi Yamini, I'd like to enquire about bridal makeup for my wedding date."
  )}`;

  return (
    <div className="pt-28 pb-24 sm:pb-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold block mb-2">
          Date Inquiries & Availability
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy mb-4">
          Let&apos;s Create Your Bridal Look
        </h1>
        <div className="gold-divider" />
        <p className="max-w-2xl mx-auto text-burgundy/80 text-base sm:text-lg font-light leading-relaxed">
          Have a wedding, engagement or reception coming up? Tell us a little about your event and the look you have in mind.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & WhatsApp Quick Action */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gold/30 shadow-luxury space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold block mb-1">
                  Direct Bridal Studio
                </span>
                <h2 className="font-serif text-2xl font-bold text-burgundy">
                  Makeup 101 by Yamini
                </h2>
              </div>

              <div className="space-y-4 text-sm text-burgundy/85 pt-2 border-t border-ivory-200">
                <div className="flex items-start gap-3">
                  <MapPin className="text-gold flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="block text-burgundy">Location:</strong>
                    <span>Chennai, Tamil Nadu, India</span>
                    <p className="text-xs text-burgundy/60 mt-0.5">
                      Available for on-location destination & venue travel across Chennai.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-gold flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="block text-burgundy">Phone / WhatsApp:</strong>
                    <a href="tel:+919940472471" className="text-gold font-semibold hover:underline">
                      +91 99404 72471
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <InstagramIcon className="text-gold flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <strong className="block text-burgundy">Instagram:</strong>
                    <a
                      href="https://www.instagram.com/makeup101byyamini/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:underline"
                    >
                      @makeup101byyamini
                    </a>
                  </div>
                </div>
              </div>

              {/* Secondary Option: Chat on WhatsApp */}
              <div className="pt-4 border-t border-ivory-200">
                <span className="text-xs text-burgundy/70 block mb-3 font-medium">
                  Prefer instant messaging?
                </span>
                <a
                  href={whatsappPreFilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] text-white font-medium text-sm shadow-md hover:bg-[#1EBE5D] transition-colors"
                  id="contact-whatsapp-btn"
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map for Chennai */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gold/30 shadow-sm p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold mb-3">
                <MapPin size={14} />
                <span>Serving Across Chennai Venues</span>
              </div>
              <div className="relative h-60 w-full rounded-2xl overflow-hidden border border-gold/20">
                <iframe
                  title="Chennai, Tamil Nadu Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d248756.1174661877!2d80.06892552825852!3d13.047525488102988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Full Booking Enquiry Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
}
