import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProductCard } from "@/components/shared/ProductCard";
import { products } from "@/content/products";

export function ProductsSection() {
  return (
    <section
      id="products"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--earth-cream-dark)" }}
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Our Products"
            title="Nature's Finest, In Every Drop"
            subtitle="Two hero products crafted with pure botanical ingredients — each one designed to transform your daily routine into a ritual of natural self-care."
            id="products-heading"
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <AnimatedSection key={product.id} delay={index * 0.15}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
