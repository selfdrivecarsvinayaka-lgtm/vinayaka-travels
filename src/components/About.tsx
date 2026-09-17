import { business } from "@/lib/site-data";

export function About() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-[3rem] transform translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4"></div>
          <div className="relative bg-gray-50 rounded-[3rem] p-8 sm:p-14 border border-gray-100">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-bold font-display text-primary mb-2">9+</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-bold font-display text-primary mb-2">24/7</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Service Open</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-bold font-display text-primary mb-2">50+</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Vehicles</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-bold font-display text-primary mb-2">{business.rating}</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{business.ratingSource} Rating</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-ink mb-6">
            About {business.shortName}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {business.name} provides reliable and affordable car rental services in Hanamkonda and Warangal. 
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose from a wide range of well-maintained vehicles and enjoy a convenient, flexible and comfortable travel experience. Whether you need a small hatchback for city driving, a comfortable sedan for family trips, or a spacious SUV for group travel, we have the perfect ride for you.
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
            <h3 className="font-bold text-ink mb-2">Location</h3>
            <a 
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground mb-4 block hover:text-primary transition-colors cursor-pointer"
            >
              {business.address}
            </a>
            <h3 className="font-bold text-ink mb-2">Phone</h3>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <a href={`tel:+91${business.phone}`} className="hover:text-primary transition-colors">{business.phone}</a>
              <a href={`tel:+91${business.additionalPhone}`} className="hover:text-primary transition-colors">{business.additionalPhone}</a>
            </div>
          </div>
          <a
            href={`tel:+91${business.phone}`}
            className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-8 text-base font-semibold text-white shadow-lg hover:bg-ink/80 transition-all"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
