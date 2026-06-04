import {
  Leaf,
  ShieldOff,
  Droplets,
  Heart,
  Ban,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { Benefit } from "@/types";

const ICON_MAP: Record<string, LucideIcon> = {
  Leaf,
  ShieldOff,
  Droplets,
  Heart,
  Ban,
  Sparkles,
};

interface BenefitCardProps {
  benefit: Benefit;
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = ICON_MAP[benefit.icon];

  return (
    <article
      className="group flex flex-col items-start gap-4 p-6 rounded-2xl bg-white transition-shadow duration-300"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
        style={{ backgroundColor: "var(--earth-cream-dark)" }}
      >
        {Icon && (
          <Icon
            className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
            style={{ color: "var(--earth-green)" }}
            aria-hidden="true"
          />
        )}
      </div>
      <div>
        <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: "var(--earth-text)" }}>
          {benefit.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--earth-muted)" }}>
          {benefit.description}
        </p>
      </div>
    </article>
  );
}
