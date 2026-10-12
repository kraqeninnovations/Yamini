export const REEL_CATEGORIES = [
  'All',
  'Bridal Transformations',
  'Hairstyle Tutorials',
  'Dear Bride',
  'Behind the Scenes',
  'Model Shoots'
] as const;

export type ReelCategory = typeof REEL_CATEGORIES[number];

export interface ReelItem {
  id: string;
  title: string;
  src: string;
  poster: string;
  category: string;
  tutorialNumber?: number;
  instagramUrl: string;
  featured?: boolean;
  description?: string;
  isPlaceholder?: boolean;
}

export const reelsData: ReelItem[] = [
  // =================== HAIRSTYLE TUTORIALS ===================
  {
    id: 'reel-04',
    title: 'Twisted Half-Up Bridal Hairstyle',
    description: 'Step-by-step masterclass creating romantic side twists with secure invisible pins.',
    src: '/videos/reels/reel-04-twisted-halfup.mp4',
    poster: '/videos/posters/reel-04-twisted-halfup.webp',
    category: 'Hairstyle Tutorials',
    tutorialNumber: 1,
    featured: true,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    id: 'reel-08',
    title: 'Textured Bun & Gold Accessory Styling',
    description: 'Crafting a regal low textured bridal bun accented with heirloom pins and blossoms.',
    src: '/videos/reels/reel-08-textured-bun.mp4',
    poster: '/videos/posters/reel-08-textured-bun.webp',
    category: 'Hairstyle Tutorials',
    tutorialNumber: 2,
    featured: true,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    id: 'reel-10',
    title: 'Intricate South Indian Bridal Braid',
    description: 'Traditional long braid styling with balanced weight distribution for long ceremony comfort.',
    src: '/videos/reels/reel-10-bridal-braid.mp4',
    poster: '/videos/posters/reel-10-bridal-braid.webp',
    category: 'Hairstyle Tutorials',
    tutorialNumber: 3,
    featured: false,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    id: 'reel-12',
    title: 'Crown Volume & Side Twist Masterclass',
    description: 'How to build natural crown lift that frames high forehead jewellery and holds all day.',
    src: '/videos/reels/reel-12-crown-volume.mp4',
    poster: '/videos/posters/reel-12-crown-volume.webp',
    category: 'Hairstyle Tutorials',
    tutorialNumber: 4,
    featured: false,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },

  // =================== BRIDAL TRANSFORMATIONS ===================
  {
    id: 'reel-09',
    title: 'Ready? Glow Glam Transformation Reveal',
    description: 'A captivating reveal of hydrated glass skin, defined brows, and soft berry lips.',
    src: '/videos/reels/reel-09-glow-glam-reveal.mp4',
    poster: '/videos/posters/reel-09-glow-glam-reveal.webp',
    category: 'Bridal Transformations',
    featured: true,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    id: 'reel-05',
    title: 'Dear Bride: Where Tradition Meets Dreamy Glam',
    description: 'POV: Walking into your wedding looking like the dreamiest, most authentic version of yourself.',
    src: '/videos/reels/reel-05-traditional-muhurtham.mp4',
    poster: '/videos/posters/reel-05-traditional-muhurtham.webp',
    category: 'Bridal Transformations',
    featured: true,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    id: 'reel-14',
    title: 'Cinematic 4K Soft Glam Close-Up',
    description: 'Macro camera test: Makeup that looks as breathtaking 6 inches away as it does on stage.',
    src: '/videos/reels/reel-14-soft-glam-cinematic.mp4',
    poster: '/videos/posters/reel-14-soft-glam-cinematic.webp',
    category: 'Bridal Transformations',
    featured: false,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },

  // =================== DEAR BRIDE ===================
  {
    id: 'reel-07',
    title: 'Dear Bride: Episode 4 — Wedding Morning Tips',
    description: 'Yamini shares candid bridal timeline advice to stay calm, hydrated, and radiant on your wedding day.',
    src: '/videos/reels/reel-07-dear-bride-ep4.mp4',
    poster: '/videos/posters/reel-07-dear-bride-ep4.webp',
    category: 'Dear Bride',
    featured: true,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    id: 'reel-03',
    title: 'Top 5 Trending Bridal Nail Aesthetics',
    description: 'Yamini breaks down this season’s most requested bridal nail arts from 3D florals to pearl French tips.',
    src: '/videos/reels/reel-03-trending-nails.mp4',
    poster: '/videos/posters/reel-03-trending-nails.webp',
    category: 'Dear Bride',
    featured: false,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },

  // =================== BEHIND THE SCENES ===================
  {
    id: 'reel-01',
    title: 'Flawless Base & Skin Prep Masterclass',
    description: 'Watch Yamini craft an ethereal, long-wearing base for a bride in a teal embroidered lehenga.',
    src: '/videos/reels/reel-01-bts-makeup.mp4',
    poster: '/videos/posters/reel-01-bts-makeup.webp',
    category: 'Behind the Scenes',
    featured: true,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    id: 'reel-02',
    title: 'Bridal Eye Prep & Contact Lens Guide',
    description: 'Essential prep steps for comfortable contact lens wear and tear-proof bridal eye makeup.',
    src: '/videos/reels/reel-02-bridal-prep.mp4',
    poster: '/videos/posters/reel-02-bridal-prep.webp',
    category: 'Behind the Scenes',
    featured: false,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    id: 'reel-13',
    title: 'Bridal Consultation & Undertone Calibration',
    description: 'Yamini analyzes skin undertone and ceremony lighting for harmonious saree matching.',
    src: '/videos/reels/reel-13-client-consultation.mp4',
    poster: '/videos/posters/reel-13-client-consultation.webp',
    category: 'Behind the Scenes',
    featured: false,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },

  // =================== MODEL SHOOTS ===================
  {
    id: 'reel-06',
    title: 'Top 4 Trending Saree Draping Styles',
    description: 'Yamini showcases pleat perfection for Kanjeevarams, modern reception drapes, and lehenga sarees.',
    src: '/videos/reels/reel-06-trending-drapes.mp4',
    poster: '/videos/posters/reel-06-trending-drapes.webp',
    category: 'Model Shoots',
    featured: false,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    id: 'reel-11',
    title: 'Top 6 Trending Bridal Hair Accessories',
    description: 'Yamini presents statement jadai billai, floral jaal, crystal combs, and pearl accessories.',
    src: '/videos/reels/reel-11-trending-hair-accessories.mp4',
    poster: '/videos/posters/reel-11-trending-hair-accessories.webp',
    category: 'Model Shoots',
    featured: false,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },

  // ===============================================================
  // 6 CLEARLY LABELLED PLACEHOLDER ENTRIES (MARKED TODO)
  // Drop matching MP4 files in public/videos/reels/ when ready
  // ===============================================================
  {
    // TODO: add video file public/videos/reels/reel-tutorial-05.mp4
    id: 'reel-placeholder-01',
    title: 'Classic Muhurtham Jasmine Jadai Styling',
    description: 'Full step-by-step assembly of fresh Madurai mallipoo jadai veni with temple billai pinning.',
    src: '',
    poster: '/images/portfolio/bridal-hairstyle/01.webp',
    category: 'Hairstyle Tutorials',
    tutorialNumber: 5,
    featured: false,
    isPlaceholder: true,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    // TODO: add video file public/videos/reels/reel-tutorial-06.mp4
    id: 'reel-placeholder-02',
    title: 'Messy Floral Chignon Masterclass',
    description: 'Romantic modern chignon bun technique using baby’s breath sprigs and invisible grips.',
    src: '',
    poster: '/images/portfolio/bridal-hairstyle/05.webp',
    category: 'Hairstyle Tutorials',
    tutorialNumber: 6,
    featured: false,
    isPlaceholder: true,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    // TODO: add video file public/videos/reels/reel-transformation-muhurtham.mp4
    id: 'reel-placeholder-03',
    title: 'Muhurtham to Reception Glam Transition',
    description: 'Fast 45-minute ceremony turnaround: Restyling traditional temple makeup into evening glamour.',
    src: '',
    poster: '/images/portfolio/wedding/21.webp',
    category: 'Bridal Transformations',
    featured: false,
    isPlaceholder: true,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    // TODO: add video file public/videos/reels/reel-dear-bride-ep5.mp4
    id: 'reel-placeholder-04',
    title: 'Dear Bride: Pre-Wedding Skin Checklist (30 Days Out)',
    description: 'Essential timeline for hydration, treatments to avoid, and sleep pacing before your big day.',
    src: '',
    poster: '/images/portfolio/engagement/02.webp',
    category: 'Dear Bride',
    featured: false,
    isPlaceholder: true,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    // TODO: add video file public/videos/reels/reel-bts-hotel-suite.mp4
    id: 'reel-placeholder-05',
    title: 'Live On-Location Bridal Suite Setup & Pacing',
    description: 'Behind the scenes at a 5:00 AM Chennai wedding setup: Professional lighting and calm morning energy.',
    src: '',
    poster: '/images/portfolio/guest-makeover/14.webp',
    category: 'Behind the Scenes',
    featured: false,
    isPlaceholder: true,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  },
  {
    // TODO: add video file public/videos/reels/reel-model-editorial-campaign.mp4
    id: 'reel-placeholder-06',
    title: 'Editorial Temple Gold Jewellery Campaign',
    description: 'High-definition editorial shoot showcasing warm gold tones against rich handloom silk sarees.',
    src: '',
    poster: '/images/portfolio/editorial/19.webp',
    category: 'Model Shoots',
    featured: false,
    isPlaceholder: true,
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/'
  }
];

// Helper: Get Hairstyle Tutorials sorted by tutorialNumber
export const hairstyleTutorials = reelsData
  .filter((r) => r.category === 'Hairstyle Tutorials' && typeof r.tutorialNumber === 'number')
  .sort((a, b) => (a.tutorialNumber ?? 0) - (b.tutorialNumber ?? 0));

// Helper: Featured reels for Home
export const featuredReels = reelsData.filter((r) => r.featured);
