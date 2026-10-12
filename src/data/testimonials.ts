/**
 * Makeup 101 by Yamini - Client Testimonials
 * 
 * NOTE: As per strict brand integrity rules, ratings, review counts, and client feedback
 * are NEVER invented. The cards below serve as structured placeholders to be replaced
 * with verified, client-approved real testimonials.
 */
export interface TestimonialItem {
  id: string;
  brideName: string;
  event: string;
  location: string;
  date: string;
  quote: string;
  isApproved: boolean;
  verifiedNote: string;
  image: string;
  fallback: string;
  videoUrl: string | null;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "testimonial-mahalakshmi",
    brideName: "Mahalakshmi",
    event: "Wedding Muhurtham & Reception",
    location: "Chennai",
    date: "Pending Client Approval",
    // TODO: replace with approved real testimonial once client provides sign-off
    quote: "Yamini made my wedding morning feel so calm and special. The makeup stayed fresh from the early morning muhurtham through the entire ceremony without feeling heavy. The saree pleats and floral jadai were absolutely neat and stayed in place.",
    isApproved: false,
    verifiedNote: "// TODO: replace with approved real testimonial (Mahalakshmi approval pending)",
    image: "/images/portfolio/wedding/02.webp",
    fallback: "/images/portfolio/wedding/02.webp",
    videoUrl: null
  },
  {
    id: "testimonial-placeholder-2",
    brideName: "Bride (Client Review)",
    event: "Engagement Ceremony",
    location: "Chennai",
    date: "Recent Ceremony",
    // TODO: replace with approved real testimonial
    quote: "I wanted a very natural, dewy look that still felt bridal. Yamini listened to every detail regarding my jewellery and outfit palette, and the result was exactly what I had envisioned. Highly recommend her patience and artistry.",
    isApproved: false,
    verifiedNote: "// TODO: replace with approved real testimonial",
    image: "/images/portfolio/engagement/01.webp",
    fallback: "/images/portfolio/engagement/01.webp",
    videoUrl: null
  },
  {
    id: "testimonial-placeholder-3",
    brideName: "Bride (Client Review)",
    event: "Traditional South Indian Wedding",
    location: "Chennai",
    date: "Recent Ceremony",
    // TODO: replace with approved real testimonial
    quote: "The attention to detail in draping my Kanjeevaram silk saree was unmatched. The makeup highlighted my natural features without altering my look, and my family loved how elegant everything turned out.",
    isApproved: false,
    verifiedNote: "// TODO: replace with approved real testimonial",
    image: "/images/portfolio/reception/01.webp",
    fallback: "/images/portfolio/reception/01.webp",
    videoUrl: null
  }
];

export const videoTestimonials = [
  {
    id: "video-review-1",
    brideName: "Bridal Video Diary",
    event: "Muhurtham Glimpse",
    note: "Behind the scenes consultation and client transformation with Yamini",
    thumbnail: "/images/portfolio/wedding/21.webp",
    instagramUrl: "https://www.instagram.com/makeup101byyamini/"
  }
];
