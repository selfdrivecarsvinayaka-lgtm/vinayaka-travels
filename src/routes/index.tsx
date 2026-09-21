import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Fleet } from "@/components/Fleet";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { About } from "@/components/About";
import { RulesAndRegulations } from "@/components/RulesAndRegulations";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

import { FloatingCTAs } from "@/components/FloatingCTAs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinayaka Self Drive Cars & Car Rentals in Warangal | Hanamkonda" },
      {
        name: "description",
        content:
          "Book reliable self drive cars and car rentals in Hanamkonda, Warangal, Telangana. Choose from SUVs, MUVs, sedans and hatchbacks for local, outstation and travel needs.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans scroll-smooth relative">
      <Navbar />
      
      <main>
        <Hero />
        <Fleet />
        <WhyChooseUs />
        <Services />
        <Reviews />
        <About />
        <RulesAndRegulations />
        <ContactCTA />
      </main>

      <Footer />
      <FloatingCTAs />
    </div>
  );
}
