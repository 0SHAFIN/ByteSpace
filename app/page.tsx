import CoursesSection from "@/components/courses/CoursesSection";
import CreatorCta from "@/components/cta/CreatorCta";
import FeaturesSection from "@/components/features/FeaturesSection";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import LogoStrip from "@/components/hero/LogoStrip";
import LearningPaths from "@/components/paths/LearningPaths";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <LogoStrip />
        <CoursesSection />
        <LearningPaths />
        <FeaturesSection />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
