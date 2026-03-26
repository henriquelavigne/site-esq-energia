import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import AppShowcase from "@/components/sections/AppShowcase";
import SavingsSimulator from "@/components/sections/SavingsSimulator";
import HowItWorks from "@/components/sections/HowItWorks";
import Sustainability from "@/components/sections/Sustainability";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Benefits />
      <AppShowcase />
      <SavingsSimulator />
      <HowItWorks />
      <Sustainability />
      <Testimonials />
      
      {/* Footer handles final spacer */}
    </div>
  );
}
