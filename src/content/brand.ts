import type { NavLink } from "@/types";

export const brand = {
  name: "EarthLiva",
  tagline: "Nature. Beauty. You.",
  heroHeadline: "Nature's Touch,\nPure You.",
  heroSubtitle:
    "Discover the power of pure, natural skincare. Free from parabens, sulphates, and chemicals — crafted with earth's finest ingredients for your most radiant self.",
  heroCta: "Explore Products",
  heroSecondaryCta: "Our Story",
  description:
    "EarthLiva is a premium natural personal care brand rooted in the wisdom of Ayurveda and the purity of nature. Every product is crafted with carefully sourced botanical ingredients, free from harmful chemicals.",
  contact: "Comming soon",
  // contact: "basilicabiotech@gmail.com",
  logo: "/imgs/img-1.jpeg",
} as const;

export const navLinks: NavLink[] = [
  { label: "Products", href: "#products" },
  { label: "Benefits", href: "#benefits" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];
