import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import PageTransition from "@/components/PageTransition";

const Index = () => (
  <PageTransition>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <TechStackSection />
      <StatsSection />
      <TestimonialsSection />
      <PortfolioSection />
      <BlogSection />
      <CTASection />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </div>
  </PageTransition>
);

export default Index;
