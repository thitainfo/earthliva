"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqItems } from "@/content/faq";

export function FAQSection() {
  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--earth-cream)" }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about EarthLiva products and our commitment to natural beauty."
            id="faq-heading"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-12">
          <Accordion className="space-y-3">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-2xl px-6 border-0"
                style={{
                  backgroundColor: "white",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                <AccordionTrigger
                  className="font-serif text-left text-base font-semibold py-5 hover:no-underline"
                  style={{ color: "var(--earth-text)" }}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-sm leading-relaxed pb-5"
                  style={{ color: "var(--earth-muted)" }}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
