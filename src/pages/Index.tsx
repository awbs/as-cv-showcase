import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <footer className="py-6 bg-hero border-t border-hero-muted/10">
          <div className="container max-w-5xl px-6">
            <p className="font-mono text-xs text-hero-muted">
              © 2026 Adam Skitt — Built with precision.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
