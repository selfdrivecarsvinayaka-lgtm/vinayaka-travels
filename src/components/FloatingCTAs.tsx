import { MapPin, Phone, MessageCircle } from "lucide-react";
import { business } from "@/lib/site-data";
import { trackEvent } from "@/lib/analytics";

export function FloatingCTAs() {
  return (
    <div className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-3 md:bottom-6 md:right-6 z-[90] flex flex-col gap-3 md:gap-4 bg-white/40 p-1.5 md:p-2 rounded-full backdrop-blur-md border border-white/50 shadow-sm pointer-events-auto">
      <a
        href={business.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
        style={{ backgroundColor: "#C99445" }}
        aria-label="Location"
        onClick={() => trackEvent("directions_click", { destination: "Google Maps" })}
      >
        <MapPin className="size-5 md:size-6" />
      </a>
      
      <a
        href={`tel:+91${business.phone}`}
        className="w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
        style={{ backgroundColor: "#2563EB" }}
        aria-label="Call"
        onClick={() => trackEvent("phone_click", { phone_number: business.phone })}
      >
        <Phone className="size-5 md:size-6" />
      </a>
      
      <a
        href={business.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
        style={{ backgroundColor: "#25D366" }}
        aria-label="WhatsApp"
        onClick={() => trackEvent("whatsapp_click", { booking_type: "general" })}
      >
        <MessageCircle className="size-5 md:size-6" />
      </a>
    </div>
  );
}
