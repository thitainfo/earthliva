"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isValidEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email.trim()) {
      setErrorMsg("Please enter your email address.");
      return;
    }
    if (!isValidEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
  };

  return (
    <section
      id="cta"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--earth-cream-dark)" }}
      aria-labelledby="cta-heading"
    >
      {/* Decorative wave */}
      <div
        className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 80'%3E%3Cpath d='M0 40 Q300 0 600 40 Q900 80 1200 40 L1200 0 L0 0 Z' fill='%232D5016'/%3E%3C/svg%3E\") no-repeat center top / cover",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{ backgroundColor: "rgba(45,80,22,0.10)" }}
            aria-hidden="true"
          >
            <Leaf className="w-8 h-8" style={{ color: "var(--earth-green)" }} />
          </div>

          <h2
            id="cta-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: "var(--earth-text)" }}
          >
            Be the First to Know
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--earth-muted)" }}>
            EarthLiva is launching soon. Sign up for early access and receive an exclusive discount on your first order.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {status === "success" ? (
            <div
              className="flex flex-col items-center gap-3 p-8 rounded-2xl"
              style={{ backgroundColor: "rgba(45,80,22,0.08)" }}
              role="alert"
              aria-live="polite"
            >
              <CheckCircle2 className="w-12 h-12" style={{ color: "var(--earth-green)" }} aria-hidden="true" />
              <p className="font-serif text-xl font-semibold" style={{ color: "var(--earth-text)" }}>
                You&apos;re on the list!
              </p>
              <p className="text-sm" style={{ color: "var(--earth-muted)" }}>
                We&apos;ll notify you the moment EarthLiva launches. Check your inbox for a confirmation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
              noValidate
              aria-label="Email waitlist signup"
            >
              <div className="flex-1">
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="waitlist-email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMsg) setErrorMsg("");
                  }}
                  disabled={status === "loading"}
                  aria-describedby={errorMsg ? "email-error" : undefined}
                  aria-invalid={!!errorMsg}
                  className="h-12 text-sm font-sans rounded-xl border-0"
                  style={{
                    backgroundColor: "white",
                    color: "var(--earth-text)",
                    boxShadow: "var(--shadow-soft)",
                  }}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="h-12 font-sans font-semibold gap-2 rounded-xl cursor-pointer"
                style={{ backgroundColor: "var(--earth-green)", color: "white" }}
                aria-label="Join the waitlist"
              >
                {status === "loading" ? (
                  "Joining…"
                ) : (
                  <>
                    Notify Me
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </Button>
            </form>
          )}

          {errorMsg && (
            <p
              id="email-error"
              className="mt-2 text-xs text-left"
              style={{ color: "oklch(0.577 0.245 27.325)" }}
              role="alert"
              aria-live="polite"
            >
              {errorMsg}
            </p>
          )}

          <p className="mt-4 text-xs" style={{ color: "var(--earth-muted)" }}>
            No spam, ever. Unsubscribe any time.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
