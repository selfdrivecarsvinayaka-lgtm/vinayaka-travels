import { useState, useMemo } from "react";
import { CategoryFilter } from "./CategoryFilter";
import { CarCard } from "./CarCard";
import { CarDetails } from "./CarDetails";
import { BookingModal } from "./BookingModal";
import { vehicles, Vehicle } from "@/lib/site-data";

export function Fleet() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [bookingVehicle, setBookingVehicle] = useState<Vehicle | null>(null);

  const filteredVehicles = useMemo(() => {
    if (selectedCategory === "All") return vehicles;
    return vehicles.filter(v => v.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="cars" className="py-16 md:py-24 bg-gray-50/50 w-full overflow-hidden">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-ink mb-4">
            Our Car Rental Fleet
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from our well-maintained self drive cars available for rent in Warangal and Hanamkonda.
          </p>
        </div>

        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="mt-8 md:mt-12 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-w-0">
          {filteredVehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
              style={{ animationDelay: `${vehicles.indexOf(vehicle) * 50}ms` }}
            >
              <CarCard
                vehicle={vehicle}
                onViewDetails={setSelectedVehicle}
                onBookNow={setBookingVehicle}
              />
            </div>
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No vehicles found in this category.</p>
          </div>
        )}
      </div>

      {selectedVehicle && (
        <CarDetails
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
          onBookNow={(vehicle) => {
            setSelectedVehicle(null);
            setBookingVehicle(vehicle);
          }}
        />
      )}

      {bookingVehicle && (
        <BookingModal
          vehicle={bookingVehicle}
          onClose={() => setBookingVehicle(null)}
        />
      )}
    </section>
  );
}
