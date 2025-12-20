import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import PricingPlans from "@/components/PricingPlans";
import Benefits from "@/components/Benefits";
import Products from "@/components/Products";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueProposition />
      <Services />
      <PricingPlans />
      <Benefits />
      <Products />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
