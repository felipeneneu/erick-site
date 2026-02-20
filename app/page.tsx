import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import Footer from "./_components/Footer";
import BenefitsSection from "./_components/BenefitsSection";
import InstructorSection from "./_components/InstructorSection";
import ClassInfoSection from "./_components/ClassInfoSection";
import CtaSection from "./_components/CtaSection";
import ScrollReveal from "./_components/ScrollReveal";
import LocationSection from "./_components/LocationSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <ScrollReveal />
      <main>
        <Navbar />
        <HeroSection />
        <BenefitsSection />
        <InstructorSection />
        <ClassInfoSection />
        <LocationSection />
        <TestimonialsSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
