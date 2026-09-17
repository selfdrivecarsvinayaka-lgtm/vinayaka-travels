import { Key, Car, Building2, Plane, Map, HeartHandshake, Briefcase, GraduationCap } from "lucide-react";

export function Services() {
  const servicesList = [
    { name: "Self Drive Car Rentals", icon: Key },
    { name: "Car Rental With Driver", icon: Car },
    { name: "SUV Rentals", icon: Map },
    { name: "Sedan Rentals", icon: Briefcase },
    { name: "Hatchback Rentals", icon: GraduationCap },
    { name: "Outstation Travel", icon: Plane },
    { name: "Wedding & Event Cars", icon: HeartHandshake },
    { name: "Corporate Travel", icon: Building2 },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50/50">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-ink mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive travel solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 p-4 sm:p-6 rounded-2xl flex flex-col items-center text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon className="size-6 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-ink group-hover:text-primary transition-colors">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
