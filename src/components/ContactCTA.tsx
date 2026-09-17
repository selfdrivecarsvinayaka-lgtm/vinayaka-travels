import { Phone, MessageCircle, MapPin } from "lucide-react";
import { business } from "@/lib/site-data";

export function ContactCTA() {
  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold font-display text-white mb-6">
          Ready to Hit the Road?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Book your car today and travel on your terms. Our team is available 24/7 to assist you.
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href={`tel:+91${business.phone}`}
            className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-lg font-bold text-ink shadow-xl hover:scale-105 transition-transform"
          >
            <Phone className="size-5" /> Call {business.phone}
          </a>
          <a
            href={`tel:+91${business.additionalPhone}`}
            className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-lg font-bold text-ink shadow-xl hover:scale-105 transition-transform"
          >
            <Phone className="size-5" /> Call {business.additionalPhone}
          </a>
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 text-lg font-bold text-white shadow-xl hover:scale-105 transition-transform"
          >
            <MessageCircle className="size-5" /> WhatsApp
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-3 rounded-full bg-ink px-8 text-lg font-bold text-white shadow-xl border border-white/20 hover:scale-105 transition-transform"
          >
            <MapPin className="size-5" /> Get Directions
          </a>
        </div>
        
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/90 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Phone className="size-5 text-accent shrink-0" />
            <div className="flex flex-col sm:flex-row sm:items-center font-semibold gap-1 sm:gap-2">
              <span>{business.phone}</span>
              <span className="font-normal opacity-75 hidden sm:inline-block">/</span>
              <span>{business.additionalPhone}</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-6 bg-white/20"></div>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 max-w-sm cursor-pointer group p-2 -m-2 rounded-xl hover:bg-white/5 transition-colors"
          >
            <MapPin className="size-5 text-accent shrink-0" />
            <span className="font-semibold text-sm leading-tight group-hover:text-accent transition-colors">{business.address}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
