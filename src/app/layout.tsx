import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: "#4A292D",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://makeup101byyamini.com"),
  title: {
    default: "Makeup 101 by Yamini | Bridal Makeup Artist in Chennai",
    template: "%s | Makeup 101 by Yamini",
  },
  description:
    "Chennai's premier bridal makeup artist specializing in traditional Muhurtham brides, soft glam reception looks, floral hairstyles, and authentic saree draping.",
  keywords: [
    "Bridal Makeup Artist Chennai",
    "South Indian Bridal Makeup",
    "Muhurtham Makeup Artist",
    "Yamini Makeup 101",
    "Bridal Hairstylist Chennai",
    "Saree Draping Chennai",
  ],
  authors: [{ name: "Yamini" }],
  creator: "Yamini",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://makeup101byyamini.com",
    siteName: "Makeup 101 by Yamini",
    title: "Makeup 101 by Yamini | Bridal Makeup Artist in Chennai",
    description:
      "Your Beauty. Your Bridal Story. Your Moment. Authentic South Indian bridal transformations, reception soft glam, and saree draping in Chennai.",
    images: [
      {
        url: "/images/portfolio/wedding/21.webp",
        width: 1210,
        height: 1815,
        alt: "Makeup 101 by Yamini Bridal Artistry Chennai",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Makeup 101 by Yamini",
    image: "https://makeup101byyamini.com/images/portfolio/wedding/21.webp",
    description:
      "Bridal makeup artist specializing in South Indian Muhurtham makeup, reception soft glam, floral hairstyles, and saree draping in Chennai.",
    telephone: "+91-99404-72471",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    priceRange: "$$",
    openingHours: "Mo-Su 06:00-21:00",
    url: "https://makeup101byyamini.com",
    sameAs: [
      "https://www.instagram.com/makeup101byyamini/",
      "https://www.youtube.com/@Makeup101ByYamini",
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory text-burgundy selection:bg-gold/30 selection:text-burgundy">
        <Navbar />
        <main className="flex-1 min-h-[calc(100vh-80px)]">{children}</main>
        <Footer />
        <MobileActionBar />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
