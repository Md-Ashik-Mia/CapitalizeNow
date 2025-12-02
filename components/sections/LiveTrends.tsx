// components/sections/LiveTrends.tsx
"use client";

import {
    trends as baseTrends,
    Trend,
    TrendCategory,
    trendStats,
    TrendTag,
} from "@/data/fakeTrends";
import Link from "next/link";
import { useMemo, useState } from "react";
import TrendCard from "../cards/TrendCard";
import FilterBar from "./FilterBar";

export default function LiveTrends() {
  const [activeTab, setActiveTab] = useState<TrendTag>("hot");
  const [selectedCategory, setSelectedCategory] =
    useState<TrendCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [unlocksAvailable, setUnlocksAvailable] = useState(
    trendStats.initialUnlocksAvailable
  );

  // Mark every 5th trend as locked for the homepage effect
  const trendsWithLocked = useMemo(
    () =>
      baseTrends.map((trend, index) =>
        index % 5 === 4 ? { ...trend, isLocked: true } : trend
      ),
    []
  );

  const filteredTrends = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return trendsWithLocked.filter((trend) => {
      const matchesTag = trend.tag === activeTab;
      const matchesCategory =
        selectedCategory === "All" ||
        trend.category === selectedCategory;

      const matchesSearch =
        !q ||
        trend.title.toLowerCase().includes(q) ||
        trend.description.toLowerCase().includes(q) ||
        trend.category.toLowerCase().includes(q);

      return matchesTag && matchesCategory && matchesSearch;
    });
  }, [trendsWithLocked, activeTab, selectedCategory, searchQuery]);

  const visibleTrends: Trend[] = filteredTrends.map((trend) =>
    trend.isLocked && unlockedIds.includes(trend.id)
      ? { ...trend, isLocked: false }
      : trend
  );

  const handleUnlock = (id: string) => {
    if (unlocksAvailable <= 0) return;
    setUnlockedIds((prev) => [...prev, id]);
    setUnlocksAvailable((prev) => prev - 1);
  };

  return (
    <section className="mt-12">
      {/* Filters & Search */}
      <FilterBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Header row */}
      <div className="mt-10 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Live Trends
          </h2>
          <p className="mt-1 text-xs text-gray-400">
            {visibleTrends.length} trends · Updated in real-time by the
            community
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium
            bg-[rgba(20,4,12,0.95)]
            border border-[var(--pink-primary)]
            text-white shadow-[0_0_18px_rgba(255,71,101,0.7)]"
        >
          <span className="text-yellow-300">✨</span>
          <span>{unlocksAvailable} unlocks available</span>
        </button>
      </div>

      {/* Cards grid */}
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* “Spot a Trend?” card */}
        <div
          className="relative rounded-[26px] p-6 md:p-7
            bg-[#0C0412]
            border border-white/10
            flex flex-col items-center justify-center text-center gap-4 overflow-hidden"
        >

          <div className="absolute top-4 right-4">
             <span className="text-[var(--pink-primary)] text-xl">✨</span>
          </div>


          <div
            className="w-16 h-16 rounded-full bg-[var(--pink-primary)]
              flex items-center justify-center
              shadow-[0_0_20px_rgba(255,71,101,0.4)]
              mt-4"
          >
            <span className="text-3xl text-black font-medium">+</span>
          </div>

          <div className="space-y-1 mt-2">
            <h3 className="text-lg font-semibold text-white">
              Spot a Trend?
            </h3>
            <p className="text-xs text-gray-400 max-w-[200px] mx-auto leading-relaxed">
              What you’re seeing before it goes mainstream
            </p>
          </div>

          <Link
            href="/submit"
            className="mt-2 px-8 py-2.5 rounded-full bg-transparent
              border border-[var(--pink-primary)]
              text-white text-sm font-medium
              hover:bg-[var(--pink-primary)]/10 transition-colors inline-block text-center"
          >
            Click to Submit
          </Link>
        </div>

        {/* Real trend cards */}
        {visibleTrends.map((trend) => (
          <TrendCard
            key={trend.id}
            trend={trend}
            isLocked={trend.isLocked && !unlockedIds.includes(trend.id)}
            onUnlock={() => handleUnlock(trend.id)}
          />
        ))}
      </div>
    </section>
  );
}
