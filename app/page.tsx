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
import { SpecialistServices } from "./_components/SpecialistServices";
import { Affiliations } from "./_components/Affiliations";
import { TrainingWorkshopsCarousel } from "./_components/TrainingWorkshopsCarousel";
import { VideoSection } from "./_components/VideoSection";
import { WorkshopsSection } from "./_components/WorkshopsSection";
import { FaqSection } from "./_components/FaqSection";
import { ImpactQuoteSection } from "./_components/ImpactQuoteSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <ScrollReveal />
      <main>
        <Navbar />
        <HeroSection />
        <ImpactQuoteSection />
        <BenefitsSection />
        <InstructorSection />
        <Affiliations />
        <SpecialistServices />
        <TrainingWorkshopsCarousel />
        <VideoSection />
        <WorkshopsSection />
        <FaqSection />
        <ClassInfoSection />
        <LocationSection />
        <TestimonialsSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
