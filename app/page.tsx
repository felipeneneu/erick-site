import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import Footer from "./_components/Footer";
import BenefitsSection from "./_components/BenefitsSection";
import { InstructorSection } from "./_components/InstructorSection";
import ClassInfoSection from "./_components/ClassInfoSection";
import CtaSection from "./_components/CtaSection";
import ScrollReveal from "./_components/ScrollReveal";
import LocationSection from "./_components/LocationSection";
import { TrustedBrand } from "./_components/TrustedBrand";
import { SpecialistServices } from "./_components/SpecialistServices";
import { Affiliations } from "./_components/Affiliations";
import { TrainingWorkshopsCarousel } from "./_components/TrainingWorkshopsCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <ScrollReveal />
      <main>
        <Navbar />
        <HeroSection />
        <BenefitsSection />
        <InstructorSection />
        <Affiliations />
        <SpecialistServices />
        <TrainingWorkshopsCarousel />
        <ClassInfoSection />
        <LocationSection />
        <TestimonialsSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
