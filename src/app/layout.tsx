import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://earthliva.com"),
  title: {
    default: "EarthLiva — Nature. Beauty. You.",
    template: "%s | EarthLiva",
  },
  description:
    "Discover EarthLiva — premium natural personal care products crafted with pure botanical ingredients. Paraben-free, sulphate-free, cruelty-free. Multani Mitti Face Wash and Almond Body Wash.",
  keywords: [
    "natural face wash",
    "almond body wash",
    "ayurvedic skincare",
    "paraben free",
    "sulphate free",
    "cruelty free",
    "natural beauty",
    "earthliva",
    "multani mitti face wash",
    "organic skincare india",
  ],
  authors: [{ name: "EarthLiva" }],
  creator: "EarthLiva",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://earthliva.com",
    siteName: "EarthLiva",
    title: "EarthLiva — Nature. Beauty. You.",
    description:
      "Premium natural personal care. Paraben-free, sulphate-free, cruelty-free. Pure ingredients for radiant skin.",
    images: [
      {
        url: "/imgs/img-1.jpeg",
        width: 800,
        height: 600,
        alt: "EarthLiva Multani Mitti Face Wash — Nature's Touch, Pure You",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EarthLiva — Nature. Beauty. You.",
    description:
      "Premium natural personal care. Paraben-free, sulphate-free, cruelty-free.",
    images: ["/imgs/img-1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://earthliva.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EarthLiva",
  description:
    "Premium natural personal care brand crafting paraben-free, sulphate-free, cruelty-free beauty products with pure botanical ingredients.",
  url: "https://earthliva.com",
  logo: "https://earthliva.com/imgs/img-1.jpeg",
  contactPoint: {
    "@type": "ContactPoint",
    email: "basilicabiotech@gmail.com",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">
        {children}
      </body>
    </html>
  );
}
