import { CATEGORIES_DATA } from "./portfolio";

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  category: string;
  highlights: string[];
  image: string;
  alt: string;
}

export const services: ServiceItem[] = [
  {
    id: "bridal-hairstyle",
    slug: "bridal-hairstyle",
    title: "Bridal Hairstyling",
    shortDesc: "From sacred poo jadai plaiting to modern textured low buns and romantic waves.",
    description: "Traditional South Indian poo jadai plaiting, fresh flower veni placements, textured low buns, and romantic contemporary waves crafted for long-lasting wedding wear.",
    category: "Hair Artistry",
    highlights: [
      "Traditional South Indian Poo Jadai & veni arrangement",
      "Structured high & low bridal buns with antique hair accessories",
      "Textured romantic half-up hairstyles with soft waves",
      "Secure pinning engineered to hold heavy hair ornaments comfortably"
    ],
    image: "/images/portfolio/bridal-hairstyle/01.webp",
    alt: "South Indian bridal floral hairstyle and Poo Jadai styling by Yamini, Chennai"
  },
  {
    id: "engagement",
    slug: "engagement",
    title: "Engagement Makeup",
    shortDesc: "Luminous, glowing looks customized around your outfit, lighting, and palette.",
    description: "Luminous, dewy or soft-matte engagement makeovers customized to harmonize with your ceremony outfit, jewellery palette, and lighting.",
    category: "Bridal Services",
    highlights: [
      "Luminous skin prep & featherweight hydrating foundation",
      "Soft defined eye makeup & subtle lash enhancement",
      "Custom lip shade harmonized with your ceremony lehenga or saree",
      "Hairstyle coordination for rings exchange and photo sessions"
    ],
    image: "/images/portfolio/engagement/02.webp",
    alt: "Luminous engagement bridal makeup and soft styling by Yamini, Chennai"
  },
  {
    id: "editorial",
    slug: "editorial",
    title: "Editorial & Fashion Looks",
    shortDesc: "High-definition camera-ready artistry for bridal campaigns and fashion editorials.",
    description: "High-fashion bridal editorials, creative campaigns, and camera-ready makeup designed for high-definition photography and fashion shoots.",
    category: "Specialized Artistry",
    highlights: [
      "High-definition photography base that resists studio heat & flash",
      "Precision eyeliner, graphic artistry & editorial contouring",
      "Concept mood board collaboration with fashion photographers",
      "Undetectable skin texture under 4K macro lenses"
    ],
    image: "/images/portfolio/editorial/19.webp",
    alt: "Editorial bridal fashion makeup and portrait styling by Yamini, Chennai"
  },
  {
    id: "guest-makeover",
    slug: "guest-makeover",
    title: "Guest & Family Makeup",
    shortDesc: "Sophisticated hair, makeup, and draping for mothers, sisters, and bridal guests.",
    description: "Sophisticated, age-appropriate hair, makeup, and draping styling for the bride's mother, sisters, and wedding guests.",
    category: "Family & Party",
    highlights: [
      "Natural radiant glow tailored for mothers and sisters",
      "Quick, elegant hair up-dos, braids, and soft curls",
      "Silk saree draping assistance for family members",
      "Coordinated group prep schedule that guarantees punctuality"
    ],
    image: "/images/portfolio/guest-makeover/14.webp",
    alt: "Elegant family and guest wedding makeover by Yamini, Chennai"
  },
  {
    id: "reception",
    slug: "reception",
    title: "Reception Makeup",
    shortDesc: "Glamorous evening looks designed to shine under stage lighting and spotlights.",
    description: "Glamorous evening reception looks with long-wearing base, defined eyes, and contemporary styling suited for stage lighting and celebrations.",
    category: "Bridal Services",
    highlights: [
      "Smoky, metallic or shimmer eye artistry suited for evening chandeliers",
      "Sculpted cheekbone contour & transfer-proof luminous highlight",
      "Party-proof wear that withstands hours on the reception stage",
      "Modern hair styling suited for ballgowns and reception lehengas"
    ],
    image: "/images/portfolio/reception/11.webp",
    alt: "Glamorous reception bridal makeup with modern styling by Yamini, Chennai"
  },
  {
    id: "saree-drape",
    slug: "saree-drape",
    title: "Saree & Lehenga Draping",
    shortDesc: "Crisp pleats and a secure, comfortable silhouette that stays neat all day.",
    description: "Precision pleating and secure draping for Kanjeevaram silk sarees, contemporary reception drapes, and lehenga dupattas that stay crisp all day.",
    category: "Draping Artistry",
    highlights: [
      "Traditional Kanjeevaram silk saree micro-iron pleating",
      "Concealed safety pinning for effortless movement and dancing",
      "Lehenga dupatta draping & waist belt (oddiyanam) alignment",
      "Wrinkle-resistant fit from the morning rituals to the send-off"
    ],
    image: "/images/portfolio/saree-drape/10.webp",
    alt: "Traditional silk saree precision pleating and draping by Yamini, Chennai"
  },
  {
    id: "wedding",
    slug: "wedding",
    title: "Bridal Makeup (Wedding)",
    shortDesc: "Signature Muhurtham bridal beauty blending flawless skin with temple gold elegance.",
    description: "Signature Muhurtham bridal beauty blending flawless skin-first technique with authentic South Indian temple jewellery and auspicious ceremony traditions.",
    category: "Bridal Services",
    highlights: [
      "Sacred Muhurtham skin-first base resistant to heat & sacred homam smoke",
      "Waterproof, tear-proof eye artistry for emotional bridal rituals",
      "Custom shade blending for South Indian complexions with zero flashback",
      "Seamless harmony with heavy silk sarees and gold temple jewellery"
    ],
    image: "/images/portfolio/wedding/21.webp",
    alt: "Traditional South Indian Muhurtham bride in silk saree with gold temple jewellery by Yamini"
  }
];
