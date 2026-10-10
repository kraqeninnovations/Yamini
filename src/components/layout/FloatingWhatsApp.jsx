import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/919940472471?text=Hi%20Yamini%2C%20I%27d%20like%20to%20enquire%20about%20bridal%20makeup%20for%20my%20wedding%20date.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex fixed bottom-8 right-8 z-40 items-center gap-2.5 bg-[#25D366] text-white py-3.5 px-5 rounded-full shadow-xl hover:bg-[#1EBE5D] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-green-300/50"
      aria-label="Chat directly on WhatsApp with Yamini"
      id="desktop-floating-whatsapp"
    >
      <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
      <span className="text-sm font-semibold tracking-wide">
        Chat on WhatsApp
      </span>
    </a>
  );
}
