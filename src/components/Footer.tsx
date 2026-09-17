import { business } from "@/lib/site-data";
import { MessageCircle, Phone, MapPin, Car, ChevronRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <a href="#top" className="flex items-center gap-2 font-semibold mb-6">
              <Car className="size-8 text-primary" aria-hidden="true" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white leading-none">
                  VINAYAKA
                </span>
                <span className="text-xs uppercase tracking-wider text-white/70 font-semibold mt-1">
                  Self Drive & Rentals
                </span>
              </div>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your trusted partner for self-drive cars, outstation travels, and wedding events in Warangal and Hanamkonda.
            </p>
            <div className="flex gap-4">
              <a 
                href={business.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors text-white"
              >
                <MessageCircle className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-white/70">
              <li><a href="#top" className="flex items-center gap-2 hover:text-primary transition-colors group"><ChevronRight className="size-4 text-primary/50 group-hover:translate-x-1 transition-transform" /> Home</a></li>
              <li><a href="#cars" className="flex items-center gap-2 hover:text-primary transition-colors group"><ChevronRight className="size-4 text-primary/50 group-hover:translate-x-1 transition-transform" /> Cars</a></li>
              <li><a href="#why-us" className="flex items-center gap-2 hover:text-primary transition-colors group"><ChevronRight className="size-4 text-primary/50 group-hover:translate-x-1 transition-transform" /> About</a></li>
              <li><a href="#services" className="flex items-center gap-2 hover:text-primary transition-colors group"><ChevronRight className="size-4 text-primary/50 group-hover:translate-x-1 transition-transform" /> Services</a></li>
              <li><a href="#why-us" className="flex items-center gap-2 hover:text-primary transition-colors group"><ChevronRight className="size-4 text-primary/50 group-hover:translate-x-1 transition-transform" /> Why Choose Us</a></li>
              <li><a href="#contact" className="flex items-center gap-2 hover:text-primary transition-colors group"><ChevronRight className="size-4 text-primary/50 group-hover:translate-x-1 transition-transform" /> Contact</a></li>
              <li><a href="#rules-regulations" className="flex items-center gap-2 hover:text-primary transition-colors group"><ChevronRight className="size-4 text-primary/50 group-hover:translate-x-1 transition-transform" /> Policies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold font-display mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-white/70 mb-6">
              <li>
                <a 
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="group-hover:text-primary transition-colors">{business.address}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-5 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href={business.phoneHref} className="hover:text-primary transition-colors">{business.phone}</a>
                  <a href={`tel:+91${business.additionalPhone}`} className="hover:text-primary transition-colors">{business.additionalPhone}</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-semibold text-xs uppercase tracking-wider">Hours</span>
                <span>{business.hours}</span>
              </li>
            </ul>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary/20 hover:bg-primary px-5 text-sm font-bold text-white transition-colors border border-primary/30"
            >
              📍 Get Directions
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex items-center justify-center text-sm text-white/50 text-center">
          <p>© {currentYear} {business.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
