"use client";

import { TrendTag } from "@/data/fakeTrends";
import { categories } from "@/data/fakeTrends";

type Props = {
  activeTab: TrendTag;
  onTabChange: (tab: TrendTag) => void;
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
};

const tabs: TrendTag[] = ["Hot Now", "Fresh", "Top Rated"];

export default function CategoriesTabs({
  activeTab,
  onTabChange,
  activeCategory,
  onCategoryChange,
}: Props) {
  return (
    <section className="mt-10 z-10 relative">

      {/* Hot / Fresh / Top Rated */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={
                tab === activeTab
                  ? "flex items-center gap-2 text-sm bg-[var(--pink-primary)] text-white px-4 py-2 rounded-full shadow-[0_0_20px_rgba(255,71,101,0.5)]"
                  : "flex items-center gap-2 text-sm text-gray-400 hover:text-white"
              }
            >
              {tab === "Hot Now" && <span>🔥</span>}
              {tab === "Fresh" && <span>⏱</span>}
              {tab === "Top Rated" && <span>📈</span>}
              <span>{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Category chips with filter icon */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        <span className="text-gray-400 text-sm">⚲</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
              activeCategory === cat
                ? "border-[var(--pink-primary)] text-[var(--pink-primary)] bg-[rgba(255,71,101,0.08)] shadow-[0_0_15px_rgba(255,71,101,0.3)]"
                : "border-[rgba(255,255,255,0.12)] text-gray-300 hover:border-[var(--pink-border)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
