import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/content/testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--earth-green)" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Loved by Customers"
            title="Real Stories, Real Results"
            subtitle="Join thousands of happy customers who have made the switch to natural skincare with EarthLiva."
            light
            id="testimonials-heading"
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 0.08}>
              <article
                className="flex flex-col gap-4 p-6 rounded-2xl h-full"
                style={{ backgroundColor: "rgba(255,255,255,0.10)", backdropFilter: "blur(8px)" }}
              >
                {/* Quote icon */}
                <Quote
                  className="w-8 h-8 flex-shrink-0"
                  style={{ color: "var(--earth-gold)" }}
                  aria-hidden="true"
                />

                {/* Stars */}
                <div className="flex items-center gap-1" aria-label={`Rating: ${testimonial.rating} out of 5`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                      style={{ color: "var(--earth-gold)" }}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.85)" }}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                  <p className="font-serif font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {testimonial.location} · {testimonial.product}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
