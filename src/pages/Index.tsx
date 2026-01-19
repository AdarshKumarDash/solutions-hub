import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EcosystemSection from "@/components/EcosystemSection";
import ProductsSection from "@/components/ProductsSection";
import AccessSection from "@/components/AccessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EcosystemSection />
      <ProductsSection />
      <AccessSection />
      <Footer />
    </div>
  );
};

export default Index;
