import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "multani-mitti-face-wash",
    name: "Multani Mitti Face Wash",
    subtitle: "Deep Cleansing · Oil Control · Natural Glow",
    tagline: "Earth's most powerful clay, now in your daily routine.",
    image: "/imgs/img-1.jpeg",
    size: "100 ml · 3.38 fl.oz",
    skinType: "For All Skin Types",
    description:
      "Infused with pure Multani Mitti and natural botanical extracts, this face wash deeply cleanses pores, controls excess oil, and reveals a fresh, radiant complexion — all without stripping your skin's natural moisture.",
    benefits: [
      "Deep Cleanses & Purifies",
      "Controls Oil & Unclogs Pores",
      "Natural Glow & Freshness",
      "Gentle on Skin",
    ],
    certifications: ["Made with Pure Multani Mitti", "Natural Extracts", "Chemical Free"],
    highlights: [
      { icon: "Droplets", label: "Deep Cleansing" },
      { icon: "ShieldCheck", label: "Oil Control" },
      { icon: "Sparkles", label: "Natural Glow" },
      { icon: "Leaf", label: "Chemical Free" },
    ],
  },
  {
    id: "almond-body-wash",
    name: "Almond Body Wash",
    subtitle: "Nourishing · Moisturizing · Radiant Skin",
    tagline: "Nourish. Cleanse. Glow.",
    image: "/imgs/img-2.jpeg",
    size: "300 ml · 10.14 fl.oz",
    skinType: "For All Skin Types",
    description:
      "Enriched with pure Almond Extract and natural oils, this luxurious body wash deeply nourishes skin while gently cleansing, leaving you with irresistibly soft, smooth, and glowing skin after every shower.",
    benefits: [
      "Enriched with Almond Extract",
      "Deeply Nourishes & Moisturizes",
      "Gentle Cleansing Formula",
      "Reveals Natural Glow",
    ],
    certifications: [
      "Paraben Free",
      "Sulphate Free",
      "Cruelty Free",
      "Goodness of Nature",
    ],
    highlights: [
      { icon: "Leaf", label: "Natural Ingredients" },
      { icon: "ShieldOff", label: "Paraben Free" },
      { icon: "Heart", label: "Cruelty Free" },
      { icon: "Sparkles", label: "Sulphate Free" },
    ],
  },
];
