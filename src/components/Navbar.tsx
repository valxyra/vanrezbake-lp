/**
 * Navbar.tsx – Main navigation bar (React island for interactivity)
 *
 * Shadcn integration notes:
 * - The "Order Now" CTA is prepared for <Button> replacement.
 *   Currently uses a custom gradient class that doesn't map 1:1 to a
 *   Shadcn variant, so the raw markup is preserved.  To convert:
 *     import { Button } from "@/components/ui/button";
 *     <Button className="rose-gold-gradient …">Order Now</Button>
 */

import React from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Menu", href: "#menu", active: true },
  { label: "Our Story", href: "#story", active: false },
  { label: "Services", href: "#services", active: false },
  { label: "Reviews", href: "#reviews", active: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md" aria-label="Main navigation">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Brand */}
        <a
          href="/"
          className="font-headline text-2xl font-bold text-md-primary tracking-wider"
        >
          Vanrez Bakery
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-headline text-lg font-medium tracking-tight transition-colors duration-300 ${
                link.active
                  ? "text-md-primary border-b-2 border-md-primary pb-1"
                  : "text-on-surface-variant hover:text-md-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA – uses Shadcn Button with custom gradient class */}
        <Button
          className="rose-gold-gradient text-on-primary px-8 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-sm hover:scale-95 duration-200 transition-transform hidden md:inline-flex"
        >
          Order Now
        </Button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-surface-container transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className="material-symbols-outlined text-on-surface">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-outline-variant/20 bg-surface/95 backdrop-blur-md px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block font-headline text-lg font-medium tracking-tight transition-colors duration-300 ${
                link.active
                  ? "text-md-primary"
                  : "text-on-surface-variant hover:text-md-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="rose-gold-gradient text-on-primary w-full py-3 rounded-full font-bold text-sm tracking-wide shadow-sm mt-4"
          >
            Order Now
          </Button>
        </div>
      )}
    </nav>
  );
}
