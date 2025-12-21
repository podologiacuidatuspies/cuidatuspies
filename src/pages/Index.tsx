import Header from "@/components/Header";
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
      <Header />
      <Hero />
      <ValueProposition />
      <Services />
      <div id="tarifas">
        <PricingPlans />
      </div>
      <Benefits />
      <div id="productos">
        <Products />
      </div>
      <div id="ubicacion">
        <FinalCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
