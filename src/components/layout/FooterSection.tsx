import { Leaf, Mail, Globe, Share2, X } from "lucide-react";
import { brand, navLinks } from "@/content/brand";
import { Separator } from "@/components/ui/separator";
import type { LucideIcon } from "lucide-react";

const socialLinks: { Icon: LucideIcon; label: string }[] = [
  { Icon: Share2, label: "Instagram" },
  { Icon: Globe, label: "Facebook" },
  { Icon: X, label: "X (Twitter)" },
];

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{ backgroundColor: "var(--earth-text)" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--earth-green-light)" }}
              >
                <Leaf className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span className="font-serif text-xl font-semibold">
                {brand.name}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              {brand.tagline} — Pure, natural personal care crafted with
              earth&apos;s finest botanical ingredients.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`EarthLiva on ${label}`}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-earth-green"
                  style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3
              className="font-serif text-base font-semibold mb-4"
              style={{ color: "var(--earth-gold)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3
              className="font-serif text-base font-semibold mb-4"
              style={{ color: "var(--earth-gold)" }}
            >
              Contact Us
            </h3>
            <a
              href={`mailto:${brand.contact}`}
              className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-white"
              style={{ color: "rgba(255,255,255,0.65)" }}
              aria-label={`Email us at ${brand.contact}`}
            >
              <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
              {brand.contact}
            </a>
            <p
              className="mt-6 text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              {/* Manufactured by Basilica Biotech */}
              Comming
              <br />
              {/* Plot No. 80/81, Om Industries Estate-1, */}
              <br />
              {/* Makna Gam, Surat-394325, Gujarat, India. */}
              Soon
            </p>
          </div>
        </div>

        <Separator
          className="my-10"
          style={{ backgroundColor: "rgba(255,255,255,0.10)" }}
        />

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ color: "rgba(255,255,255,0.40)" }}
        >
          <p>&copy; {currentYear} EarthLiva. All rights reserved.</p>
          <p>Made with ♡ for nature lovers</p>
        </div>
      </div>
    </footer>
  );
}
