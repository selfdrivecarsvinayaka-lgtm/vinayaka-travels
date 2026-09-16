import { Users, Fuel, Settings2, Sparkles } from "lucide-react";
import { Vehicle } from "@/lib/site-data";

interface CarCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
  onBookNow: (vehicle: Vehicle) => void;
}

export function CarCard({ vehicle, onViewDetails, onBookNow }: CarCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 flex flex-col h-full group">
      {/* Image container */}
      <div className="relative aspect-[16/9] w-full p-3 pb-0">
        <div className="w-full h-full rounded-[16px] overflow-hidden border border-black/5 shadow-[0_2px_8px_rgb(0,0,0,0.04)] relative">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
          />
        </div>
        <div className="absolute top-6 left-6 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-black/5 text-ink px-3 py-1.5 text-xs font-semibold backdrop-blur-md shadow-sm">
            <Sparkles className="size-3 text-accent" />
            {vehicle.badge}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold font-display text-ink">{vehicle.name}</h3>
        
        {/* Specs pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 border border-orange-100 px-2.5 py-1 text-[11px] font-semibold text-orange-700">
            <Users className="size-3" /> {vehicle.seats}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-100 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
            <Settings2 className="size-3" /> {vehicle.transmission}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-100 px-2.5 py-1 text-[11px] font-semibold text-green-700">
            <Fuel className="size-3" /> {vehicle.fuel}
          </span>
        </div>

        <div className="mt-6 mb-6 h-px w-full bg-gray-100" />

        {/* Pricing */}
        <div className="flex flex-col gap-2 mt-auto">
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-ink">12hrs - {vehicle.price12h}</span>
              {vehicle.limit12h && <span className="text-xs text-muted-foreground font-medium">limit {vehicle.limit12h}</span>}
            </div>
            <div className="flex flex-col text-right">
              <span className="text-sm font-semibold text-ink">24hrs - {vehicle.price24h}</span>
              {vehicle.limit24h && <span className="text-xs text-muted-foreground font-medium">limit {vehicle.limit24h}</span>}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          <button 
            onClick={() => onViewDetails(vehicle)}
            className="flex-1 h-11 inline-flex items-center justify-center rounded-xl border-2 border-gray-100 bg-white px-4 text-sm font-semibold text-ink hover:border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Details
          </button>
          <button
            onClick={() => onBookNow(vehicle)}
            className="flex-1 h-11 inline-flex items-center justify-center rounded-xl bg-accent px-4 text-sm font-bold text-ink shadow-sm hover:bg-accent/90 hover:-translate-y-0.5 transition-all"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
