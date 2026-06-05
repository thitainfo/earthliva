"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Droplets,
  Sparkles,
  ShieldOff,
  Heart,
  ShieldCheck,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import type { Product } from "@/types";

const ICON_MAP: Record<string, LucideIcon> = {
  Leaf,
  Droplets,
  Sparkles,
  ShieldOff,
  Heart,
  ShieldCheck,
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      className="group relative bg-white rounded-3xl overflow-hidden flex flex-col"
      style={{ boxShadow: "var(--shadow-soft)" }}
      whileHover={{ y: -6, boxShadow: "var(--shadow-hover)" }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      aria-label={product.name}
    >
      {/* Product Image */}
      <div className="relative w-full overflow-hidden bg-earth-cream rounded-t-3xl flex items-start justify-center p-4">
        <Image
          src={product.image}
          alt={`${product.name} — ${product.subtitle}`}
          width={350}
          height={700}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          className="object-contain h-auto w-auto max-w-full group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3
            className="font-serif text-2xl font-semibold text-earth-text"
            style={{ color: "var(--earth-text)" }}
          >
            {product.name}
          </h3>
          <p
            className="text-sm font-sans mt-1"
            style={{ color: "var(--earth-muted)" }}
          >
            {product.subtitle}
          </p>
          <p
            className="text-xs font-sans mt-1 font-medium"
            style={{ color: "var(--earth-gold)" }}
          >
            {product.size} · {product.skinType}
          </p>
        </div>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--earth-muted)" }}
        >
          {product.description}
        </p>

        {/* Benefits */}
        <ul className="space-y-2" aria-label="Key benefits">
          {product.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-sm">
              <CheckCircle2
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--earth-green)" }}
              />
              <span style={{ color: "var(--earth-text)" }}>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Certifications */}
        <div
          className="flex flex-wrap gap-2 pt-2 border-t"
          style={{ borderColor: "var(--earth-cream-dark)" }}
        >
          {product.certifications.map((cert) => (
            <Badge
              key={cert}
              variant="secondary"
              className="text-xs font-sans"
              style={{
                backgroundColor: "var(--earth-cream-dark)",
                color: "var(--earth-green)",
                borderColor: "transparent",
              }}
            >
              {cert}
            </Badge>
          ))}
        </div>

        {/* Highlights Icons */}
        <div className="grid grid-cols-4 gap-2 pt-2">
          {product.highlights.map(({ icon, label }) => {
            const Icon = ICON_MAP[icon];
            return (
              <div key={label} className="flex flex-col items-center gap-1">
                {Icon && (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--earth-cream-dark)" }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: "var(--earth-green)" }}
                    />
                  </div>
                )}
                <span
                  className="text-[10px] text-center leading-tight"
                  style={{ color: "var(--earth-muted)" }}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
