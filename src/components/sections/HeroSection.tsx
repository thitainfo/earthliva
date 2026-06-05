"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand } from "@/content/brand";

export function HeroSection() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const headlineParts = brand.heroHeadline.split("\n");

  return (
    <section
      className="relative min-h-dvh flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--earth-cream)" }}
      aria-label="Hero"
    >
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(45,80,22,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,168,76,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-sans font-semibold uppercase tracking-widest"
              style={{ color: "var(--earth-gold)" }}
            >
              {brand.tagline}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ color: "var(--earth-text)" }}
            >
              {headlineParts.map((part, i) => (
                <span key={i}>
                  {i === 0 ? (
                    part
                  ) : (
                    <>
                      <br />
                      <span style={{ color: "var(--earth-green)" }}>
                        {part}
                      </span>
                    </>
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg leading-relaxed max-w-lg"
              style={{ color: "var(--earth-muted)" }}
            >
              {brand.heroSubtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <Button
                size="lg"
                onClick={() => handleScroll("#products")}
                className="font-sans font-semibold text-base gap-2 cursor-pointer group"
                style={{
                  backgroundColor: "var(--earth-green)",
                  color: "white",
                }}
                aria-label="Explore our products"
              >
                {brand.heroCta}
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleScroll("#benefits")}
                className="font-sans font-semibold text-base cursor-pointer"
                style={{
                  borderColor: "var(--earth-green)",
                  color: "var(--earth-green)",
                  backgroundColor: "transparent",
                }}
              >
                {brand.heroSecondaryCta}
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 pt-4"
              aria-label="Product certifications"
            >
              {[
                "Paraben Free",
                "Sulphate Free",
                "Cruelty Free",
                "100% Natural",
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-sans font-medium px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(45,80,22,0.08)",
                    color: "var(--earth-green)",
                  }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div
                className="absolute inset-0 rounded-3xl rotate-3 scale-95"
                style={{ backgroundColor: "rgba(45,80,22,0.08)" }}
                aria-hidden="true"
              />
              <div className="relative rounded-3xl overflow-hidden shadow-hover">
                <Image
                  src="/imgs/img-1.jpeg"
                  alt="EarthLiva Multani Mitti Face Wash — Nature's Touch, Pure You"
                  width={450}
                  height={600}
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 450px"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => handleScroll("#products")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 rounded-md"
        aria-label="Scroll to products"
      >
        <span
          className="text-xs font-sans"
          style={{ color: "var(--earth-muted)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            className="w-5 h-5"
            style={{ color: "var(--earth-muted)" }}
            aria-hidden="true"
          />
        </motion.div>
      </motion.button>
    </section>
  );
}
