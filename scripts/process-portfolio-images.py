#!/usr/bin/env python3
import os
import subprocess
import hashlib
import json
import shutil
from PIL import Image, ImageFile

ImageFile.LOAD_TRUNCATED_IMAGES = True

PDFS = [
    {
        "slug": "bridal-hairstyle",
        "title": "Bridal Hairstyling",
        "serviceTitle": "Bridal Hairstyling",
        "description": "Traditional South Indian poo jadai plaiting, fresh flower veni placements, textured low buns, and romantic contemporary waves crafted for long-lasting wedding wear.",
        "pdf": "pdf/Bridal hairstyle portfolio.pdf",
        "alt_prefix": "South Indian bridal hairstyle styling with fresh flowers and traditional hair ornaments"
    },
    {
        "slug": "engagement",
        "title": "Engagement Makeup",
        "serviceTitle": "Engagement Makeup",
        "description": "Luminous, dewy or soft-matte engagement makeovers customized to harmonize with your ceremony outfit, jewellery palette, and lighting.",
        "pdf": "pdf/Engagement Makeover Portfolio.pdf",
        "alt_prefix": "Radiant engagement makeover with soft defined eye makeup and dewy skin finish"
    },
    {
        "slug": "editorial",
        "title": "Editorial & Fashion Looks",
        "serviceTitle": "Editorial & Fashion Looks",
        "description": "High-fashion bridal editorials, creative campaigns, and camera-ready makeup designed for high-definition photography and fashion shoots.",
        "pdf": "pdf/Makeup101 by Yamini_Editorial_Portfolio.pdf",
        "alt_prefix": "High-definition editorial bridal fashion beauty portrait with precision eye and lip artistry"
    },
    {
        "slug": "guest-makeover",
        "title": "Guest & Family Makeup",
        "serviceTitle": "Guest & Family Makeup",
        "description": "Sophisticated, age-appropriate hair, makeup, and draping styling for the bride's mother, sisters, and wedding guests.",
        "pdf": "pdf/Non Bridal (Guest) Makeover Portfolio.pdf",
        "alt_prefix": "Elegant family and guest wedding makeover featuring natural radiant glow and neat styling"
    },
    {
        "slug": "reception",
        "title": "Reception Makeup",
        "serviceTitle": "Reception Makeup",
        "description": "Glamorous evening reception looks with long-wearing base, defined eyes, and contemporary styling suited for stage lighting and celebrations.",
        "pdf": "pdf/Reception Makeover Portfolio.pdf",
        "alt_prefix": "Glamorous reception bridal makeover with contemporary soft contour and glowing finish"
    },
    {
        "slug": "saree-drape",
        "title": "Saree & Lehenga Draping",
        "serviceTitle": "Saree & Lehenga Draping",
        "description": "Precision pleating and secure draping for Kanjeevaram silk sarees, contemporary reception drapes, and lehenga dupattas that stay crisp all day.",
        "pdf": "pdf/Saree drape Portfolio.pdf",
        "alt_prefix": "Traditional South Indian silk saree precision pleating and secure waist drape styling"
    },
    {
        "slug": "wedding",
        "title": "Bridal Makeup (Wedding)",
        "serviceTitle": "Bridal Makeup (Wedding)",
        "description": "Signature Muhurtham bridal beauty blending flawless skin-first technique with authentic South Indian temple jewellery and auspicious ceremony traditions.",
        "pdf": "pdf/Wedding makeover portfolio.pdf",
        "alt_prefix": "Traditional South Indian Muhurtham bride with gold temple jewellery and radiant makeup"
    }
]

COVER_HASHES = {
    "c78d9313f456da892357da64f74ac402",
    "40175a653b623e404e481d181b34a9ff",
    "e6733029861991526f3ec0cbf704b735"
}
LOGO_HASH = "6c08a9f9f49c74410795a38c12909b3e"

TARGET_PORTFOLIO_DIR = "public/images/portfolio"
TEMP_DIR = "/tmp/yamini_pdf_extract"

RESPONSIVE_WIDTHS = [480, 768, 1280, 1920]

def main():
    os.makedirs(TEMP_DIR, exist_ok=True)
    os.makedirs(TARGET_PORTFOLIO_DIR, exist_ok=True)

    audit_summary = []

    categories_data = []

    for cat in PDFS:
        slug = cat["slug"]
        pdf_path = cat["pdf"]
        cat_temp_dir = os.path.join(TEMP_DIR, slug)
        os.makedirs(cat_temp_dir, exist_ok=True)

        print(f"\n==========================================")
        print(f"Processing: {cat['title']} ({pdf_path})")
        print(f"==========================================")

        # 1. Extract embedded images with pdfimages (or reuse existing /tmp/extracted_all)
        cached_dir = f"/tmp/extracted_all/{slug}"
        if os.path.exists(cached_dir) and len(os.listdir(cached_dir)) > 0:
            cat_temp_dir = cached_dir
        else:
            subprocess.run(["pdfimages", "-png", "-p", pdf_path, os.path.join(cat_temp_dir, "img")], check=True)
        raw_files = sorted([f for f in os.listdir(cat_temp_dir) if f.endswith(".png")])
        print(f"Extracted/found {len(raw_files)} raw image files.")

        cat_target_dir = os.path.join(TARGET_PORTFOLIO_DIR, slug)
        os.makedirs(cat_target_dir, exist_ok=True)

        seen_hashes = {}
        kept_images = []
        discarded_images = []

        for f in raw_files:
            file_path = os.path.join(cat_temp_dir, f)
            try:
                img = Image.open(file_path)
                img.load()
            except Exception as e:
                discarded_images.append((f, f"Corrupted or invalid image: {e}"))
                continue

            w, h = img.size
            img_rgb = img.convert("RGB")
            md5 = hashlib.md5(img_rgb.tobytes()).hexdigest()

            # Rule 1: Slide 1 cover template background graphic
            if md5 in COVER_HASHES or f == "img-001-000.png":
                discarded_images.append((f, f"Slide 1 template background graphic ({w}x{h})"))
                continue

            # Rule 2: Slide last logo
            if md5 == LOGO_HASH or (w == 450 and h == 450):
                discarded_images.append((f, f"Closing slide brand logo ({w}x{h})"))
                continue

            # Rule 3: Exact duplicate
            if md5 in seen_hashes:
                discarded_images.append((f, f"Exact duplicate of {seen_hashes[md5]} ({w}x{h})"))
                continue
            seen_hashes[md5] = f

            # Rule 4: Tiny fragment under 400px wide
            if w < 400:
                discarded_images.append((f, f"Tiny image width {w}px < 400px ({w}x{h})"))
                continue

            kept_images.append((f, img_rgb, w, h))

        print(f"Kept: {len(kept_images)} | Discarded: {len(discarded_images)}")

        # 2. Convert and save kept images as WebP with responsive sizes
        category_images_metadata = []
        
        # Pick the best cover image (highest resolution vertical portrait)
        best_cover_idx = 1
        max_portrait_score = -1

        for idx, (fname, img_rgb, w, h) in enumerate(kept_images, start=1):
            file_base = f"{idx:02d}"
            main_webp_name = f"{file_base}.webp"
            main_webp_path = os.path.join(cat_target_dir, main_webp_name)

            # Save main full-resolution webp (quality 80)
            img_rgb.save(main_webp_path, format="WEBP", quality=80)

            # Generate responsive widths
            for rw in RESPONSIVE_WIDTHS:
                if rw < w:
                    rh = int(round(h * (rw / w)))
                    resized_img = img_rgb.resize((rw, rh), Image.Resampling.LANCZOS)
                    rw_path = os.path.join(cat_target_dir, f"{file_base}-{rw}.webp")
                    resized_img.save(rw_path, format="WEBP", quality=80)
                elif rw == w:
                    rw_path = os.path.join(cat_target_dir, f"{file_base}-{rw}.webp")
                    if not os.path.exists(rw_path):
                        img_rgb.save(rw_path, format="WEBP", quality=80)

            # Score for cover: prefer vertical portrait with high resolution
            aspect = h / w
            portrait_score = w * h
            if aspect > 1.1:
                portrait_score *= 1.5
            if portrait_score > max_portrait_score:
                max_portrait_score = portrait_score
                best_cover_idx = idx

            # Honest alt text
            alt_text = f"{cat['alt_prefix']} - look {idx:02d} by Yamini, Chennai"
            category_images_metadata.append({
                "src": f"/images/portfolio/{slug}/{main_webp_name}",
                "alt": alt_text,
                "width": w,
                "height": h
            })

        cover_path = f"/images/portfolio/{slug}/{best_cover_idx:02d}.webp"

        categories_data.append({
            "slug": slug,
            "title": cat["title"],
            "serviceTitle": cat["serviceTitle"],
            "description": cat["description"],
            "cover": cover_path,
            "images": category_images_metadata
        })

        audit_summary.append({
            "pdf": os.path.basename(pdf_path),
            "slug": slug,
            "extracted": len(raw_files),
            "kept": len(kept_images),
            "discarded": len(discarded_images),
            "discard_reasons": discarded_images,
            "cover": cover_path
        })

    # Save audit report
    with open("scripts/audit_report.json", "w") as f:
        json.dump(audit_summary, f, indent=2)

    # 3. Generate src/data/portfolio.ts
    portfolio_ts_content = generate_portfolio_ts(categories_data)
    with open("src/data/portfolio.ts", "w") as f:
        f.write(portfolio_ts_content)
    print("\nSuccessfully generated src/data/portfolio.ts!")

    print("\n================ AUDIT SUMMARY ================")
    for a in audit_summary:
        print(f"PDF: {a['pdf']}")
        print(f"  Category slug: {a['slug']}")
        print(f"  Extracted: {a['extracted']} | Kept: {a['kept']} | Discarded: {a['discarded']}")
        print(f"  Cover: {a['cover']}\n")

def generate_portfolio_ts(categories_data):
    ts = """// permission: confirm client consent before publishing

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
}

export const CATEGORIES_DATA: Category[] = """ + json.dumps(categories_data, indent=2) + """;

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
"""
    return ts

if __name__ == "__main__":
    main()
