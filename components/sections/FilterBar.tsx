// components/sections/FilterBar.tsx
"use client";

import {
  TrendTag,
  TrendCategory,
  categories,
} from "@/data/fakeTrends";
import { FaFire } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiSearch, FiClock, FiSliders } from "react-icons/fi";

type Props = {
  activeTab: TrendTag;
  onTabChange: (tab: TrendTag) => void;
  selectedCategory: TrendCategory;
  onCategoryChange: (category: TrendCategory) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export default function FilterBar({
  activeTab,
  onTabChange,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: Props) {
  return (
    <div className="mt-8 space-y-4">
      {/* Row 1: Hot / Fresh / Top Rated + Search */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          {/* Hot Now */}
          <button
            type="button"
            onClick={() => onTabChange("hot")}
            className={`inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition
              ${
                activeTab === "hot"
                  ? "bg-[var(--pink-primary)] text-white shadow-[0_0_22px_rgba(255,71,101,0.8)]"
                  : "bg-[rgba(20,4,12,0.9)] border border-[rgba(255,255,255,0.08)] text-gray-200"
              }`}
          >
            <FaFire className="text-base" />
            <span>Hot Now</span>
          </button>

          {/* Fresh */}
          <button
            type="button"
            onClick={() => onTabChange("fresh")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition
              ${
                activeTab === "fresh"
                  ? "bg-[rgba(255,71,101,0.18)] text-white border border-[var(--pink-primary)]"
                  : "text-gray-300"
              }`}
          >
            <FiClock className="text-sm" />
            <span>Fresh</span>
          </button>

          {/* Top Rated */}
          <button
            type="button"
            onClick={() => onTabChange("top_rated")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition
              ${
                activeTab === "top_rated"
                  ? "bg-[rgba(255,71,101,0.18)] text-white border border-[var(--pink-primary)]"
                  : "text-gray-300"
              }`}
          >
            <FaArrowTrendUp className="text-sm" />
            <span>Top Rated</span>
          </button>
        </div>

        {/* Search bar */}
        <div className="w-full md:w-80">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-2xl
              bg-[radial-gradient(circle_at_top,_rgba(255,71,101,0.22),transparent_55%),rgba(8,2,12,0.95)]
              border border-[rgba(255,71,101,0.6)]
              shadow-[0_0_20px_rgba(255,71,101,0.4)]"
          >
            <FiSearch className="text-[var(--pink-primary)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search Trends..."
              className="w-full bg-transparent text-xs md:text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Categories */}
      <div className="flex flex-wrap items-center gap-3">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full
            border border-[rgba(255,255,255,0.18)]
            bg-[rgba(10,4,16,0.9)] text-gray-300 text-sm"
        >
          <FiSliders />
        </span>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition
              ${
                selectedCategory === category
                  ? "bg-[var(--pink-primary)] text-white shadow-[0_0_18px_rgba(255,71,101,0.7)]"
                  : "border border-[rgba(255,255,255,0.18)] text-gray-200 bg-[rgba(10,4,16,0.9)]"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
