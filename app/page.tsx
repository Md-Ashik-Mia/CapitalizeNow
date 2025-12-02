"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesBar from "@/components/sections/FeaturesBar";
import FilterBar from "@/components/sections/FilterBar";
import LiveTrends from "@/components/sections/LiveTrends";
import HowItWorks from "@/components/sections/HowItWorks";
import BrandFreeZone from "@/components/sections/BrandFreeZone";
import CTA_StillQuestions from "@/components/sections/CTA_StillQuestions";
import { TrendTag, TrendCategory } from "@/data/fakeTrends";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TrendTag>("hot");
  const [activeCategory, setActiveCategory] =
    useState<TrendCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
     <div className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
      <HeroSection />
      <FeaturesBar />
     <FilterBar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
     <LiveTrends
          activeTab={activeTab}
          activeCategory={activeCategory}
          searchQuery={searchQuery}
        />
      <HowItWorks />
      <BrandFreeZone />
      <FAQSection /> {/* 👈 new */}
      <CTA_StillQuestions />
    </div>
  );
}
