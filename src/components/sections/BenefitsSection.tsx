import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BenefitCard } from "@/components/shared/BenefitCard";
import { benefits } from "@/content/benefits";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--earth-cream)" }}
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Why EarthLiva"
            title="Pure Ingredients, Real Results"
            subtitle="We believe great skin starts with honest ingredients. Every EarthLiva product is built on six uncompromising commitments to your health and the planet."
            id="benefits-heading"
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.id} delay={index * 0.1}>
              <BenefitCard benefit={benefit} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
