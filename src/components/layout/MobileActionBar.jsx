import { Phone, MessageCircle } from "lucide-react";

export default function MobileActionBar() {
  const whatsappUrl = "https://wa.me/919940472471?text=Hi%20Yamini%2C%20I%27d%20like%20to%20enquire%20about%20bridal%20makeup%20for%20my%20wedding%20date.";

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gold/30 px-4 pt-2.5 flex items-center gap-3 lg:hidden shadow-luxury"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0.75rem))' }}
      role="region"
      aria-label="Quick Bridal Contact Actions"
    >
      {/* Call Button */}
      <a
        href="tel:+919940472471"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full border-2 border-burgundy text-burgundy font-medium text-sm hover:bg-burgundy hover:text-ivory transition-colors min-h-[44px] active:scale-[0.98]"
        aria-label="Call Yamini at +91 99404 72471"
      >
        <Phone size={17} className="text-burgundy" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#25D366] text-white font-medium text-sm shadow-md hover:bg-[#1EBE5D] transition-colors min-h-[44px] active:scale-[0.98]"
        aria-label="Chat with Yamini on WhatsApp"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
