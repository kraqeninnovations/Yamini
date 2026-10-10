export const REEL_CATEGORIES = [
  'All',
  'Bridal Transformations',
  'Hairstyle Tutorials',
  'Dear Bride',
  'Behind the Scenes',
  'Bridal Styling',
  'Soft Glam'
];
export interface ReelItem {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
  category: string;
  duration: string;
  instagramUrl: string;
  caption?: string;
}

export const reelsData: ReelItem[] = [
  {
    id: 'reel-01',
    title: 'Flawless Base & Skin Prep Masterclass',
    description: 'Watch Yamini craft an ethereal, long-wearing base for a bride in a teal embroidered lehenga.',
    src: '/videos/reel-01-bts-makeup.mp4',
    poster: '/videos/posters/reel-01-bts-makeup.webp',
    category: 'Behind the Scenes',
    duration: '0:16',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'Hydration first, lightweight pigment layers, and non-creasing finish for Chennai weather.'
  },
  {
    id: 'reel-02',
    title: 'Bridal Eye Prep & Contact Lens Guide',
    description: 'Essential prep steps for comfortable contact lens wear and tear-proof bridal eye makeup.',
    src: '/videos/reel-02-bridal-prep.mp4',
    poster: '/videos/posters/reel-02-bridal-prep.webp',
    category: 'Behind the Scenes',
    duration: '0:44',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'How to insert lenses safely without disturbing eye makeup on your wedding morning.'
  },
  {
    id: 'reel-03',
    title: 'Top 5 Trending Bridal Nail Aesthetics',
    description: 'Yamini breaks down this season’s most requested bridal nail arts from 3D florals to pearl French tips.',
    src: '/videos/reel-03-trending-nails.mp4',
    poster: '/videos/posters/reel-03-trending-nails.webp',
    category: 'Bridal Styling',
    duration: '0:19',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'Elevating traditional bridal hands with bespoke details that shine during ring ceremonies.'
  },
  {
    id: 'reel-04',
    title: 'Twisted Half-Up Bridal Hairstyle',
    description: 'Step-by-step masterclass creating a dreamy twisted half-up crown with secure hold.',
    src: '/videos/reel-04-twisted-halfup.mp4',
    poster: '/videos/posters/reel-04-twisted-halfup.webp',
    category: 'Hairstyle Tutorials',
    duration: '0:19',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'Soft romantic twists designed to stay picture-perfect through hours of celebrations.'
  },
  {
    id: 'reel-05',
    title: 'Dear Bride: Where Tradition Meets Dreamy Glam',
    description: 'POV: Walking into your wedding looking like the dreamiest, most authentic version of yourself.',
    src: '/videos/reel-05-traditional-muhurtham.mp4',
    poster: '/videos/posters/reel-05-traditional-muhurtham.webp',
    category: 'Dear Bride',
    duration: '1:04',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'South Indian Muhurtham beauty with temple gold jewellery, jasmine poola jada, and radiant skin.'
  },
  {
    id: 'reel-06',
    title: 'Top 4 Trending Saree Draping Styles',
    description: 'Yamini showcases pleat perfection for Kanjeevarams, modern reception drapes, and lehenga sarees.',
    src: '/videos/reel-06-trending-drapes.mp4',
    poster: '/videos/posters/reel-06-trending-drapes.webp',
    category: 'Bridal Styling',
    duration: '0:20',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'Structured pleats that do not budge, customized to flatter your posture and silhouette.'
  },
  {
    id: 'reel-07',
    title: 'Dear Bride: Episode 4 — Wedding Morning Tips',
    description: 'Yamini shares candid bridal timeline advice to stay calm, hydrated, and radiant on your wedding day.',
    src: '/videos/reel-07-dear-bride-ep4.mp4',
    poster: '/videos/posters/reel-07-dear-bride-ep4.webp',
    category: 'Dear Bride',
    duration: '0:22',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'Never rush your bridal prep. Here is how we pace your morning for zero stress.'
  },
  {
    id: 'reel-08',
    title: 'Textured Bun & Gold Accessory Styling',
    description: 'Crafting a low textured bridal bun accented with heirloom gold pins and fresh blossoms.',
    src: '/videos/reel-08-textured-bun.mp4',
    poster: '/videos/posters/reel-08-textured-bun.webp',
    category: 'Hairstyle Tutorials',
    duration: '0:15',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'A regal silhouette for reception lehengas and evening sarees alike.'
  },
  {
    id: 'reel-09',
    title: 'Ready? Glow Glam Transformation Reveal',
    description: 'The moment of truth: A captivating reveal of hydrated glass skin, defined brows, and soft berry lips.',
    src: '/videos/reel-09-glow-glam-reveal.mp4',
    poster: '/videos/posters/reel-09-glow-glam-reveal.webp',
    category: 'Bridal Transformations',
    duration: '0:09',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'Zero flashback, zero heavy cake — just pure healthy glow under studio and stage lights.'
  },
  {
    id: 'reel-10',
    title: 'Intricate South Indian Bridal Braid',
    description: 'Traditional long braid styling with balanced weight distribution so it feels effortless to wear.',
    src: '/videos/reel-10-bridal-braid.mp4',
    poster: '/videos/posters/reel-10-bridal-braid.webp',
    category: 'Hairstyle Tutorials',
    duration: '0:30',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'Securing heavy poola jada and billai without giving the bride a tension headache.'
  },
  {
    id: 'reel-11',
    title: 'Top 6 Trending Bridal Hair Accessories',
    description: 'Yamini presents statement jadai billai, floral jaal, crystal combs, and pearl vine accessories.',
    src: '/videos/reel-11-trending-hair-accessories.mp4',
    poster: '/videos/posters/reel-11-trending-hair-accessories.webp',
    category: 'Bridal Styling',
    duration: '0:22',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'The right accessory can transform a classic bun into a piece of bridal art.'
  },
  {
    id: 'reel-12',
    title: 'Crown Volume & Side Twist Masterclass',
    description: 'How to build natural crown lift that frames high forehead jewellery and holds all day.',
    src: '/videos/reel-12-crown-volume.mp4',
    poster: '/videos/posters/reel-12-crown-volume.webp',
    category: 'Hairstyle Tutorials',
    duration: '0:17',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'Precision backcombing and invisible pin anchoring technique.'
  },
  {
    id: 'reel-13',
    title: 'Bridal Consultation & Undertone Calibration',
    description: 'Yamini sits with a client to discuss ceremony lighting, skin undertones, and saree palette harmony.',
    src: '/videos/reel-13-client-consultation.mp4',
    poster: '/videos/posters/reel-13-client-consultation.webp',
    category: 'Behind the Scenes',
    duration: '0:32',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'No two brides are identical. Personalised shade matching makes all the difference.'
  },
  {
    id: 'reel-14',
    title: 'Cinematic 4K Soft Glam Close-Up',
    description: 'Macro detail video displaying undetectable skin texture, seamless shadow transitions, and winged eye.',
    src: '/videos/reel-14-soft-glam-cinematic.mp4',
    poster: '/videos/posters/reel-14-soft-glam-cinematic.webp',
    category: 'Soft Glam',
    duration: '0:12',
    instagramUrl: 'https://www.instagram.com/makeup101byyamini/',
    caption: 'HD camera test: Makeup that looks as breathtaking 6 inches away as it does on stage.'
  }
];
