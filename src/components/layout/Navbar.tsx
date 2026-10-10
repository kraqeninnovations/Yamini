'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu upon navigation and lock body scroll
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Watch Reels", path: "/reels" },
    { name: "Beauty Journal", path: "/journal" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const isHomePage = pathname === "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-gold/20 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex flex-col group focus:outline-none focus:ring-2 focus:ring-gold rounded-lg p-1"
            aria-label="Makeup 101 by Yamini Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-burgundy group-hover:text-gold transition-colors">
              Makeup 101
            </span>
            <span className="text-[10px] sm:text-xs font-sans tracking-widest uppercase text-gold font-medium">
              by Yamini &bull; Chennai
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium tracking-wide transition-all relative py-1 hover:text-gold ${
                    isActive ? "text-gold font-semibold" : "text-burgundy/90"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Book Your Date CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-gold text-sm py-2.5 px-6 shadow-sm hover:shadow-gold-soft"
              id="desktop-book-date-btn"
            >
              <Sparkles size={16} />
              Book Your Date
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full text-burgundy hover:bg-gold/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-ivory flex flex-col justify-between p-6 sm:p-8 lg:hidden h-[100dvh] overflow-y-auto pb-safe"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Header in Drawer */}
            <div className="flex items-center justify-between border-b border-gold/20 pb-4">
              <div>
                <span className="font-serif text-2xl font-bold text-burgundy">
                  Makeup 101
                </span>
                <p className="text-xs text-gold uppercase tracking-widest">
                  by Yamini &bull; Chennai
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full text-burgundy hover:bg-gold/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close navigation menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Navigation Links List */}
            <nav className="flex flex-col gap-5 my-auto py-6" aria-label="Mobile Navigation Links">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-serif block py-1.5 transition-colors ${
                        isActive
                          ? "text-gold font-bold"
                          : "text-burgundy hover:text-gold"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Actions in Drawer */}
            <div className="flex flex-col gap-3 pt-4 border-t border-gold/20">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-gold w-full text-center py-3.5"
              >
                <Sparkles size={18} />
                Book Your Date
              </Link>

              <div className="flex gap-3">
                <a
                  href="tel:+919940472471"
                  className="btn-burgundy-outline flex-1 py-3 text-center text-xs justify-center"
                >
                  <Phone size={14} /> Call Yamini
                </a>
                <a
                  href="https://wa.me/919940472471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-outline flex-1 py-3 text-center text-xs justify-center"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
