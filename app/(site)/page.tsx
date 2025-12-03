"use client";

import BrandFreeZone from "@/components/sections/BrandFreeZone";
import CTA_StillQuestions from "@/components/sections/CTA_StillQuestions";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesBar from "@/components/sections/FeaturesBar";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks";
import LiveTrends from "@/components/sections/LiveTrends";

export default function HomePage() {
  return (
     <div className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
      <HeroSection />
      <FeaturesBar />
      <LiveTrends />
      <HowItWorks />
      <BrandFreeZone />
      <FAQSection /> {/* 👈 new */}
      <CTA_StillQuestions />
    </div>
  );
}
