import { Search, Droplets, Sparkles, type LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { steps } from "@/content/howItWorks";

const ICON_MAP: Record<string, LucideIcon> = {
  Search,
  Droplets,
  Sparkles,
};

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--earth-cream-dark)" }}
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="How It Works"
            title="Three Simple Steps to Radiant Skin"
            subtitle="Incorporating EarthLiva into your routine is effortless. Natural skincare that's as simple as it is effective."
            id="how-it-works-heading"
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
            style={{ backgroundColor: "var(--earth-gold-light)" }}
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const Icon = ICON_MAP[step.icon];
            return (
              <AnimatedSection key={step.number} delay={index * 0.15} direction="up">
                <article className="flex flex-col items-center text-center gap-5">
                  {/* Number circle */}
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center z-10 relative"
                      style={{
                        backgroundColor: "var(--earth-green)",
                        boxShadow: "var(--shadow-gold)",
                      }}
                    >
                      {Icon && <Icon className="w-7 h-7 text-white" aria-hidden="true" />}
                    </div>
                    <div
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-sans z-20"
                      style={{ backgroundColor: "var(--earth-gold)", color: "white" }}
                    >
                      {step.number}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-3" style={{ color: "var(--earth-text)" }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{ color: "var(--earth-muted)" }}>
                      {step.description}
                    </p>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
