export interface Product {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  image: string;
  size: string;
  skinType: string;
  benefits: string[];
  certifications: string[];
  description: string;
  highlights: { icon: string; label: string }[];
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  number: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
