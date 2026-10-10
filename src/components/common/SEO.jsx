import { useEffect } from "react";

export default function SEO({ title, description, path = "" }) {
  useEffect(() => {
    const defaultTitle = "Makeup 101 by Yamini | Bridal Makeup Artist in Chennai";
    const defaultDesc = "Premium bridal makeup artist in Chennai, Tamil Nadu. Personalised bridal makeup, elegant hairstyles, and saree draping for weddings, engagements, and receptions.";

    document.title = title ? `${title} | Makeup 101 by Yamini` : defaultTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || defaultDesc);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title ? `${title} | Makeup 101 by Yamini` : defaultTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description || defaultDesc);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", `https://makeup101byyamini.com${path}`);
    }
  }, [title, description, path]);

  return null;
}
