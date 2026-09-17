import { Clock, ShieldCheck, Wallet, Sparkles, CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Pick up or drop off your rental car anytime, day or night. We're always open."
    },
    {
      icon: ShieldCheck,
      title: "Well Maintained Cars",
      description: "Every vehicle undergoes strict quality checks before every rental."
    },
    {
      icon: Wallet,
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden charges. Get the best value for your journey."
    },
    {
      icon: Sparkles,
      title: "Easy Booking",
      description: "Book instantly via WhatsApp or Call. Minimal paperwork required."
    }
  ];

  const benefits = [
    "Transparent pricing",
    "Flexible rental plans",
    "Wide range of cars",
    "Customer support"
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-ink mb-4">
            Why Choose Vinayaka?
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the joy of self-drive with Warangal's most trusted car rental service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-gray-50 border border-gray-100 p-8 rounded-3xl transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <reason.icon className="size-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="size-5 text-accent" />
              <span className="font-semibold text-ink">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
