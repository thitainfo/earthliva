"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { brand, navLinks } from "@/content/brand";

export function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md"
          aria-label="EarthLiva home"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "var(--earth-green)" }}
            aria-hidden="true"
          >
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <span
            className="font-serif text-xl font-semibold"
            style={{ color: scrolled ? "var(--earth-text)" : "var(--earth-text)" }}
          >
            {brand.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-sans font-medium transition-colors duration-200 hover:text-earth-green focus-visible:outline-2 focus-visible:outline-offset-2 rounded cursor-pointer"
                style={{ color: "var(--earth-muted)" }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            onClick={() => handleNavClick("#cta")}
            className="font-sans font-medium text-sm cursor-pointer"
            style={{
              backgroundColor: "var(--earth-green)",
              color: "white",
            }}
          >
            Get Early Access
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-black/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" style={{ color: "var(--earth-text)" }} />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0" style={{ backgroundColor: "var(--earth-cream)" }}>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "var(--earth-cream-dark)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--earth-green)" }}>
                    <Leaf className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-serif text-lg font-semibold" style={{ color: "var(--earth-text)" }}>
                    {brand.name}
                  </span>
                </div>
              </div>
              <nav className="flex flex-col gap-1 p-4 flex-1" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-4 py-3 rounded-xl text-sm font-sans font-medium transition-colors duration-200 hover:bg-white cursor-pointer"
                    style={{ color: "var(--earth-text)" }}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              <div className="p-6 border-t" style={{ borderColor: "var(--earth-cream-dark)" }}>
                <Button
                  onClick={() => handleNavClick("#cta")}
                  className="w-full font-sans font-medium"
                  style={{ backgroundColor: "var(--earth-green)", color: "white" }}
                >
                  Get Early Access
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
