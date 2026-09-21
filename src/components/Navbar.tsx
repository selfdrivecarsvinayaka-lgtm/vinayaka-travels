import { useState, useEffect } from "react";
import { Phone, Menu, X, Car } from "lucide-react";
import { business } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Cars", href: "#cars" },
    { name: "Why Us", href: "#why-us" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Policies", href: "#rules-regulations" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white/75 backdrop-blur-md shadow-sm border-b border-white/20 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2 font-semibold" aria-label="Vinayaka Self Drive Cars and Car Rentals – Home">
          <Car className="size-6 text-primary" aria-hidden="true" />
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-tight text-ink leading-none">
              VINAYAKA
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mt-0.5">
              Self Drive & Rentals
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={business.phoneHref}
            onClick={() => trackEvent("phone_click", { phone_number: business.phone })}
            className="text-sm font-semibold text-ink flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="size-4 text-primary" />
            {business.phone}
          </a>
          <a
            href="#cars"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-all"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-5 flex flex-col gap-4 animate-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-ink py-2 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <div className="flex flex-col gap-2 mb-2 px-2 text-base font-semibold text-ink">
              <a href={`tel:+91${business.phone}`} onClick={() => trackEvent("phone_click", { phone_number: business.phone })} className="flex items-center gap-3 py-1"><Phone className="size-4 text-primary" /> {business.phone}</a>
              <a href={`tel:+91${business.additionalPhone}`} onClick={() => trackEvent("phone_click", { phone_number: business.additionalPhone })} className="flex items-center gap-3 py-1"><Phone className="size-4 text-primary" /> {business.additionalPhone}</a>
            </div>
            <a
              href={`tel:+91${business.phone}`}
              onClick={() => trackEvent("phone_click", { phone_number: business.phone })}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary bg-white px-4 py-2.5 text-sm font-semibold text-primary"
            >
              Call
            </a>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { booking_type: "general" })}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              WhatsApp
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("directions_click", { destination: "Google Maps" })}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              Get Directions
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
