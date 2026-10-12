// permission: confirm client consent before publishing

export type Category = {
  slug: string;
  title: string;
  serviceTitle: string;
  description: string;
  cover: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
};

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  src: string;
  fallbackSrc?: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: string;
  description?: string;
}

export const CATEGORIES_DATA: Category[] = [
  {
    "slug": "bridal-hairstyle",
    "title": "Bridal Hairstyling",
    "serviceTitle": "Bridal Hairstyling",
    "description": "Traditional South Indian poo jadai plaiting, fresh flower veni placements, textured low buns, and romantic contemporary waves crafted for long-lasting wedding wear.",
    "cover": "/images/portfolio/bridal-hairstyle/01.webp",
    "images": [
      {
        "src": "/images/portfolio/bridal-hairstyle/01.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 01 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/02.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 02 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/03.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 03 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/04.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 04 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/05.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 05 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/06.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 06 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/07.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 07 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/08.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 08 by Yamini, Chennai",
        "width": 461,
        "height": 820
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/09.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 09 by Yamini, Chennai",
        "width": 524,
        "height": 720
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/10.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 10 by Yamini, Chennai",
        "width": 480,
        "height": 720
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/11.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 11 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/12.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 12 by Yamini, Chennai",
        "width": 804,
        "height": 1071
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/13.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 13 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/14.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 14 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/15.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 15 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/16.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 16 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/17.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 17 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/18.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 18 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/19.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 19 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/20.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 20 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/21.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 21 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/22.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 22 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/23.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 23 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/24.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 24 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/25.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 25 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/26.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 26 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/27.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 27 by Yamini, Chennai",
        "width": 602,
        "height": 717
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/28.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 28 by Yamini, Chennai",
        "width": 514,
        "height": 717
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/29.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 29 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/30.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 30 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/31.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 31 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/bridal-hairstyle/32.webp",
        "alt": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments - look 32 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      }
    ]
  },
  {
    "slug": "engagement",
    "title": "Engagement Makeup",
    "serviceTitle": "Engagement Makeup",
    "description": "Luminous, dewy or soft-matte engagement makeovers customized to harmonize with your ceremony outfit, jewellery palette, and lighting.",
    "cover": "/images/portfolio/engagement/02.webp",
    "images": [
      {
        "src": "/images/portfolio/engagement/01.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 01 by Yamini, Chennai",
        "width": 858,
        "height": 1144
      },
      {
        "src": "/images/portfolio/engagement/02.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 02 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/engagement/03.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 03 by Yamini, Chennai",
        "width": 738,
        "height": 922
      },
      {
        "src": "/images/portfolio/engagement/04.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 04 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/engagement/05.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 05 by Yamini, Chennai",
        "width": 840,
        "height": 560
      },
      {
        "src": "/images/portfolio/engagement/06.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 06 by Yamini, Chennai",
        "width": 768,
        "height": 1024
      },
      {
        "src": "/images/portfolio/engagement/07.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 07 by Yamini, Chennai",
        "width": 461,
        "height": 615
      },
      {
        "src": "/images/portfolio/engagement/08.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 08 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/engagement/09.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 09 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/engagement/10.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 10 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/engagement/11.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 11 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/engagement/12.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 12 by Yamini, Chennai",
        "width": 813,
        "height": 1084
      },
      {
        "src": "/images/portfolio/engagement/13.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 13 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/engagement/14.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 14 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/engagement/15.webp",
        "alt": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish - look 15 by Yamini, Chennai",
        "width": 605,
        "height": 807
      }
    ]
  },
  {
    "slug": "editorial",
    "title": "Editorial & Fashion Looks",
    "serviceTitle": "Editorial & Fashion Looks",
    "description": "High-fashion bridal editorials, creative campaigns, and camera-ready makeup designed for high-definition photography and fashion shoots.",
    "cover": "/images/portfolio/editorial/19.webp",
    "images": [
      {
        "src": "/images/portfolio/editorial/01.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 01 by Yamini, Chennai",
        "width": 702,
        "height": 464
      },
      {
        "src": "/images/portfolio/editorial/02.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 02 by Yamini, Chennai",
        "width": 410,
        "height": 512
      },
      {
        "src": "/images/portfolio/editorial/03.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 03 by Yamini, Chennai",
        "width": 702,
        "height": 462
      },
      {
        "src": "/images/portfolio/editorial/04.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 04 by Yamini, Chennai",
        "width": 436,
        "height": 512
      },
      {
        "src": "/images/portfolio/editorial/05.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 05 by Yamini, Chennai",
        "width": 818,
        "height": 1024
      },
      {
        "src": "/images/portfolio/editorial/06.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 06 by Yamini, Chennai",
        "width": 702,
        "height": 466
      },
      {
        "src": "/images/portfolio/editorial/07.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 07 by Yamini, Chennai",
        "width": 451,
        "height": 512
      },
      {
        "src": "/images/portfolio/editorial/08.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 08 by Yamini, Chennai",
        "width": 702,
        "height": 460
      },
      {
        "src": "/images/portfolio/editorial/09.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 09 by Yamini, Chennai",
        "width": 825,
        "height": 1024
      },
      {
        "src": "/images/portfolio/editorial/10.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 10 by Yamini, Chennai",
        "width": 702,
        "height": 583
      },
      {
        "src": "/images/portfolio/editorial/11.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 11 by Yamini, Chennai",
        "width": 490,
        "height": 581
      },
      {
        "src": "/images/portfolio/editorial/12.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 12 by Yamini, Chennai",
        "width": 413,
        "height": 512
      },
      {
        "src": "/images/portfolio/editorial/13.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 13 by Yamini, Chennai",
        "width": 585,
        "height": 482
      },
      {
        "src": "/images/portfolio/editorial/14.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 14 by Yamini, Chennai",
        "width": 825,
        "height": 1024
      },
      {
        "src": "/images/portfolio/editorial/15.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 15 by Yamini, Chennai",
        "width": 702,
        "height": 683
      },
      {
        "src": "/images/portfolio/editorial/16.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 16 by Yamini, Chennai",
        "width": 411,
        "height": 512
      },
      {
        "src": "/images/portfolio/editorial/17.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 17 by Yamini, Chennai",
        "width": 412,
        "height": 512
      },
      {
        "src": "/images/portfolio/editorial/18.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 18 by Yamini, Chennai",
        "width": 585,
        "height": 583
      },
      {
        "src": "/images/portfolio/editorial/19.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 19 by Yamini, Chennai",
        "width": 860,
        "height": 1024
      },
      {
        "src": "/images/portfolio/editorial/20.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 20 by Yamini, Chennai",
        "width": 702,
        "height": 468
      },
      {
        "src": "/images/portfolio/editorial/21.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 21 by Yamini, Chennai",
        "width": 412,
        "height": 512
      },
      {
        "src": "/images/portfolio/editorial/22.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 22 by Yamini, Chennai",
        "width": 412,
        "height": 512
      },
      {
        "src": "/images/portfolio/editorial/23.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 23 by Yamini, Chennai",
        "width": 413,
        "height": 512
      },
      {
        "src": "/images/portfolio/editorial/24.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 24 by Yamini, Chennai",
        "width": 819,
        "height": 1024
      },
      {
        "src": "/images/portfolio/editorial/25.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 25 by Yamini, Chennai",
        "width": 722,
        "height": 896
      },
      {
        "src": "/images/portfolio/editorial/26.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 26 by Yamini, Chennai",
        "width": 414,
        "height": 512
      },
      {
        "src": "/images/portfolio/editorial/27.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 27 by Yamini, Chennai",
        "width": 585,
        "height": 579
      },
      {
        "src": "/images/portfolio/editorial/28.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 28 by Yamini, Chennai",
        "width": 831,
        "height": 1024
      },
      {
        "src": "/images/portfolio/editorial/29.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 29 by Yamini, Chennai",
        "width": 639,
        "height": 932
      },
      {
        "src": "/images/portfolio/editorial/30.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 30 by Yamini, Chennai",
        "width": 585,
        "height": 510
      },
      {
        "src": "/images/portfolio/editorial/31.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 31 by Yamini, Chennai",
        "width": 420,
        "height": 512
      },
      {
        "src": "/images/portfolio/editorial/32.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 32 by Yamini, Chennai",
        "width": 413,
        "height": 512
      },
      {
        "src": "/images/portfolio/editorial/33.webp",
        "alt": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry - look 33 by Yamini, Chennai",
        "width": 1170,
        "height": 780
      }
    ]
  },
  {
    "slug": "guest-makeover",
    "title": "Guest & Family Makeup",
    "serviceTitle": "Guest & Family Makeup",
    "description": "Sophisticated, age-appropriate hair, makeup, and draping styling for the bride's mother, sisters, and wedding guests.",
    "cover": "/images/portfolio/guest-makeover/14.webp",
    "images": [
      {
        "src": "/images/portfolio/guest-makeover/01.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 01 by Yamini, Chennai",
        "width": 972,
        "height": 648
      },
      {
        "src": "/images/portfolio/guest-makeover/02.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 02 by Yamini, Chennai",
        "width": 648,
        "height": 810
      },
      {
        "src": "/images/portfolio/guest-makeover/03.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 03 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/guest-makeover/04.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 04 by Yamini, Chennai",
        "width": 1088,
        "height": 1290
      },
      {
        "src": "/images/portfolio/guest-makeover/05.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 05 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/guest-makeover/06.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 06 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/guest-makeover/07.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 07 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/guest-makeover/08.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 08 by Yamini, Chennai",
        "width": 603,
        "height": 803
      },
      {
        "src": "/images/portfolio/guest-makeover/09.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 09 by Yamini, Chennai",
        "width": 1210,
        "height": 1613
      },
      {
        "src": "/images/portfolio/guest-makeover/10.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 10 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/guest-makeover/11.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 11 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/guest-makeover/12.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 12 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/guest-makeover/13.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 13 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/guest-makeover/14.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 14 by Yamini, Chennai",
        "width": 1344,
        "height": 2016
      },
      {
        "src": "/images/portfolio/guest-makeover/15.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 15 by Yamini, Chennai",
        "width": 896,
        "height": 1344
      },
      {
        "src": "/images/portfolio/guest-makeover/16.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 16 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/guest-makeover/17.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 17 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/guest-makeover/18.webp",
        "alt": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling - look 18 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      }
    ]
  },
  {
    "slug": "reception",
    "title": "Reception Makeup",
    "serviceTitle": "Reception Makeup",
    "description": "Glamorous evening reception looks with long-wearing base, defined eyes, and contemporary styling suited for stage lighting and celebrations.",
    "cover": "/images/portfolio/reception/11.webp",
    "images": [
      {
        "src": "/images/portfolio/reception/01.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 01 by Yamini, Chennai",
        "width": 1024,
        "height": 683
      },
      {
        "src": "/images/portfolio/reception/02.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 02 by Yamini, Chennai",
        "width": 1152,
        "height": 768
      },
      {
        "src": "/images/portfolio/reception/03.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 03 by Yamini, Chennai",
        "width": 598,
        "height": 896
      },
      {
        "src": "/images/portfolio/reception/04.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 04 by Yamini, Chennai",
        "width": 838,
        "height": 1024
      },
      {
        "src": "/images/portfolio/reception/05.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 05 by Yamini, Chennai",
        "width": 614,
        "height": 922
      },
      {
        "src": "/images/portfolio/reception/06.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 06 by Yamini, Chennai",
        "width": 478,
        "height": 597
      },
      {
        "src": "/images/portfolio/reception/07.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 07 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/reception/08.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 08 by Yamini, Chennai",
        "width": 410,
        "height": 512
      },
      {
        "src": "/images/portfolio/reception/09.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 09 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/reception/10.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 10 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/reception/11.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 11 by Yamini, Chennai",
        "width": 1210,
        "height": 1613
      },
      {
        "src": "/images/portfolio/reception/12.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 12 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/reception/13.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 13 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/reception/14.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 14 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/reception/15.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 15 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/reception/16.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 16 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/reception/17.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 17 by Yamini, Chennai",
        "width": 1210,
        "height": 1613
      },
      {
        "src": "/images/portfolio/reception/18.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 18 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/reception/19.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 19 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/reception/20.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 20 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/reception/21.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 21 by Yamini, Chennai",
        "width": 717,
        "height": 478
      },
      {
        "src": "/images/portfolio/reception/22.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 22 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/reception/23.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 23 by Yamini, Chennai",
        "width": 1024,
        "height": 682
      },
      {
        "src": "/images/portfolio/reception/24.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 24 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/reception/25.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 25 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/reception/26.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 26 by Yamini, Chennai",
        "width": 1815,
        "height": 1210
      },
      {
        "src": "/images/portfolio/reception/27.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 27 by Yamini, Chennai",
        "width": 807,
        "height": 1210
      },
      {
        "src": "/images/portfolio/reception/28.webp",
        "alt": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish - look 28 by Yamini, Chennai",
        "width": 945,
        "height": 1417
      }
    ]
  },
  {
    "slug": "saree-drape",
    "title": "Saree & Lehenga Draping",
    "serviceTitle": "Saree & Lehenga Draping",
    "description": "Precision pleating and secure draping for Kanjeevaram silk sarees, contemporary reception drapes, and lehenga dupattas that stay crisp all day.",
    "cover": "/images/portfolio/saree-drape/10.webp",
    "images": [
      {
        "src": "/images/portfolio/saree-drape/01.webp",
        "alt": "Traditional South Indian silk saree precision pleating and secure waist drape styling - look 01 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/saree-drape/02.webp",
        "alt": "Traditional South Indian silk saree precision pleating and secure waist drape styling - look 02 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/saree-drape/03.webp",
        "alt": "Traditional South Indian silk saree precision pleating and secure waist drape styling - look 03 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/saree-drape/04.webp",
        "alt": "Traditional South Indian silk saree precision pleating and secure waist drape styling - look 04 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/saree-drape/05.webp",
        "alt": "Traditional South Indian silk saree precision pleating and secure waist drape styling - look 05 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/saree-drape/06.webp",
        "alt": "Traditional South Indian silk saree precision pleating and secure waist drape styling - look 06 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/saree-drape/07.webp",
        "alt": "Traditional South Indian silk saree precision pleating and secure waist drape styling - look 07 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/saree-drape/08.webp",
        "alt": "Traditional South Indian silk saree precision pleating and secure waist drape styling - look 08 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/saree-drape/09.webp",
        "alt": "Traditional South Indian silk saree precision pleating and secure waist drape styling - look 09 by Yamini, Chennai",
        "width": 620,
        "height": 768
      },
      {
        "src": "/images/portfolio/saree-drape/10.webp",
        "alt": "Traditional South Indian silk saree precision pleating and secure waist drape styling - look 10 by Yamini, Chennai",
        "width": 896,
        "height": 1344
      },
      {
        "src": "/images/portfolio/saree-drape/11.webp",
        "alt": "Traditional South Indian silk saree precision pleating and secure waist drape styling - look 11 by Yamini, Chennai",
        "width": 600,
        "height": 800
      },
      {
        "src": "/images/portfolio/saree-drape/12.webp",
        "alt": "Traditional South Indian silk saree precision pleating and secure waist drape styling - look 12 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      }
    ]
  },
  {
    "slug": "wedding",
    "title": "Bridal Makeup (Wedding)",
    "serviceTitle": "Bridal Makeup (Wedding)",
    "description": "Signature Muhurtham bridal beauty blending flawless skin-first technique with authentic South Indian temple jewellery and auspicious ceremony traditions.",
    "cover": "/images/portfolio/wedding/21.webp",
    "images": [
      {
        "src": "/images/portfolio/wedding/01.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 01 by Yamini, Chennai",
        "width": 427,
        "height": 640
      },
      {
        "src": "/images/portfolio/wedding/02.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 02 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/wedding/03.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 03 by Yamini, Chennai",
        "width": 598,
        "height": 896
      },
      {
        "src": "/images/portfolio/wedding/04.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 04 by Yamini, Chennai",
        "width": 773,
        "height": 1141
      },
      {
        "src": "/images/portfolio/wedding/05.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 05 by Yamini, Chennai",
        "width": 851,
        "height": 1210
      },
      {
        "src": "/images/portfolio/wedding/06.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 06 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/wedding/07.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 07 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/wedding/08.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 08 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/wedding/09.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 09 by Yamini, Chennai",
        "width": 605,
        "height": 791
      },
      {
        "src": "/images/portfolio/wedding/10.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 10 by Yamini, Chennai",
        "width": 908,
        "height": 1210
      },
      {
        "src": "/images/portfolio/wedding/11.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 11 by Yamini, Chennai",
        "width": 768,
        "height": 512
      },
      {
        "src": "/images/portfolio/wedding/12.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 12 by Yamini, Chennai",
        "width": 427,
        "height": 640
      },
      {
        "src": "/images/portfolio/wedding/13.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 13 by Yamini, Chennai",
        "width": 683,
        "height": 1024
      },
      {
        "src": "/images/portfolio/wedding/14.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 14 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/wedding/15.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 15 by Yamini, Chennai",
        "width": 800,
        "height": 534
      },
      {
        "src": "/images/portfolio/wedding/16.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 16 by Yamini, Chennai",
        "width": 874,
        "height": 922
      },
      {
        "src": "/images/portfolio/wedding/17.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 17 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/wedding/18.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 18 by Yamini, Chennai",
        "width": 717,
        "height": 533
      },
      {
        "src": "/images/portfolio/wedding/19.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 19 by Yamini, Chennai",
        "width": 807,
        "height": 1210
      },
      {
        "src": "/images/portfolio/wedding/20.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 20 by Yamini, Chennai",
        "width": 605,
        "height": 807
      },
      {
        "src": "/images/portfolio/wedding/21.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 21 by Yamini, Chennai",
        "width": 1210,
        "height": 1815
      },
      {
        "src": "/images/portfolio/wedding/22.webp",
        "alt": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup - look 22 by Yamini, Chennai",
        "width": 1210,
        "height": 807
      }
    ]
  }
];

export const categories: Category[] = CATEGORIES_DATA;

// Flattened portfolio items for masonry gallery & filters
export const portfolioItems: PortfolioItem[] = CATEGORIES_DATA.flatMap((cat) =>
  cat.images.map((img, idx) => ({
    id: `${cat.slug}-${idx + 1}`,
    title: `${cat.title} Look #${idx + 1}`,
    category: cat.title,
    categorySlug: cat.slug,
    src: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height,
    aspectRatio: `${img.width}/${img.height}`
  }))
);

export const portfolioCategorySlugs = CATEGORIES_DATA.map((c) => c.slug);

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES_DATA.find((c) => c.slug === slug);
}
