// // "use client";

// // import SpotTrendCard from "../cards/SpotTrendCard";
// // import TrendCard from "../cards/TrendCard";
// // import LockedTrendOverlay from "../cards/LockedTrendOverlay";
// // import { Trend, trends, trendStats, TrendTag } from "@/data/fakeTrends";

// // type Props = {
// //   activeTab: TrendTag;
// //   activeCategory: string;
// //   search: string;
// // };

// // function applyFilters(
// //   allTrends: Trend[],
// //   activeTab: TrendTag,
// //   activeCategory: string,
// //   search: string
// // ) {
// //   return allTrends.filter((trend) => {
// //     const matchesTab = trend.tag === activeTab;
// //     const matchesCategory =
// //       activeCategory === "All" || trend.category === activeCategory;
// //     const matchesSearch =
// //       !search ||
// //       trend.title.toLowerCase().includes(search.toLowerCase()) ||
// //       trend.description.toLowerCase().includes(search.toLowerCase());

// //     return matchesTab && matchesCategory && matchesSearch;
// //   });
// // }

// // export default function LiveTrends({
// //   activeTab,
// //   activeCategory,
// //   search,
// // }: Props) {
// //   const filtered = applyFilters(trends, activeTab, activeCategory, search);

// //   return (
// //     <section className="mt-16">
// //       <div className="flex items-center justify-between mb-5 gap-4">
// //         <div>
// //           <h2 className="text-2xl font-semibold text-[var(--pink-primary)]">
// //             Live Trends
// //           </h2>
// //           <p className="text-gray-400 text-sm">
// //             {filtered.length} trends • Updated in real-time by the community
// //           </p>
// //         </div>

// //         <button
// //           className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full
// //             bg-gradient-to-br from-[rgba(60,0,25,0.9)] via-[rgba(25,0,15,0.95)] to-[rgba(10,0,10,0.98)]
// //             border border-[var(--pink-primary)]
// //             shadow-[0_0_24px_rgba(255,71,101,0.55)]
// //             text-xs font-medium text-white"
// //         >
// //           ✨<span>{trendStats.unlocksAvailable} unlocks available</span>
// //         </button>
// //       </div>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {/* First "Spot a Trend?" card */}
// //         <SpotTrendCard />

// //         {filtered.map((trend) => {
// //           const isLocked = trend.isLocked === true;

// //           return (
// //             <div key={trend.id} className="relative">
// //               <TrendCard trend={trend} />
// //               {isLocked && (
// //                 <LockedTrendOverlay
// //                   onUnlock={() => {
// //                     // for now just log – later you can open a modal, route, etc.
// //                     console.log("Unlock clicked for trend:", trend.id);
// //                   }}
// //                 />
// //               )}
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </section>
// //   );
// // }





// "use client";

// import TrendCard from "../cards/TrendCard";
// import LockedTrendOverlay from "../cards/LockedTrendOverlay";
// import {
//   trends,
//   TrendTag,
//   TrendCategory,
// } from "@/data/fakeTrends";

// type Props = {
//   activeTab: TrendTag;
//   // optional – if you don't use category filter yet, ignore it
//   activeCategory?: TrendCategory;
// };

// export default function LiveTrends({ activeTab, activeCategory }: Props) {
//   // if no category passed from parent, treat as "All"
//   const categoryFilter: TrendCategory = activeCategory ?? "All";

//   const filteredTrends = trends.filter((trend) => {
//     const matchesCategory =
//       categoryFilter === "All" || trend.category === categoryFilter;

//     const matchesTab =
//       activeTab === "hot"
//         ? trend.tag === "hot"
//         : activeTab === "fresh"
//         ? trend.tag === "fresh"
//         : trend.tag === "top_rated"; // Top Rated

//     return matchesCategory && matchesTab;
//   });

//   const unlockableCount = filteredTrends.filter((t) => t.isLocked).length;

//   return (
//     <section className="mt-16 space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between gap-4">
//         <div>
//           <h2 className="text-2xl md:text-3xl font-semibold text-[var(--pink-primary)]">
//             Live Trends
//           </h2>
//           <p className="text-xs md:text-sm text-gray-400">
//             {filteredTrends.length} trends • Updated in real-time by the
//             community
//           </p>
//         </div>

//         {/* Unlocks pill (right) */}
//         <div className="hidden sm:flex">
//           <button
//             type="button"
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium
//               bg-[rgba(20,8,18,0.98)]
//               border border-[var(--pink-primary)]
//               shadow-[0_0_18px_rgba(255,71,101,0.5)]
//               text-gray-100"
//           >
//             <span className="text-yellow-300 text-sm">⚡</span>
//             <span>
//               {unlockableCount > 0
//                 ? `${unlockableCount} unlocks available`
//                 : "No unlocks right now"}
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Cards grid */}
//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//         {/* Spot a Trend card – always first */}
//         <div
//           className="rounded-[26px] p-8
//             bg-[rgba(20,0,10,0.95)]
//             shadow-[0_0_40px_rgba(0,0,0,0.85)]
//             border border-[rgba(255,255,255,0.08)]
//             flex flex-col items-center justify-center text-center"
//         >
//           <div
//             className="w-24 h-24 rounded-full border border-[var(--pink-primary)]
//               shadow-[0_0_30px_rgba(255,71,101,0.8)]
//               flex items-center justify-center mb-6
//               bg-[radial-gradient(circle_at_30%_0%,rgba(255,71,101,0.35),rgba(15,0,10,0.9))]"
//           >
//             <span className="text-4xl text-[var(--pink-primary)]">+</span>
//           </div>
//           <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
//             Spot a Trend?
//           </h3>
//           <p className="text-sm text-gray-300 mb-6 max-w-xs">
//             What you’re seeing before it goes mainstream.
//           </p>
//           <button
//             type="button"
//             className="px-6 py-2.5 rounded-full bg-[var(--pink-primary)]
//               text-white font-semibold text-sm
//               shadow-[0_0_22px_rgba(255,71,101,0.9)]
//               hover:brightness-110 transition"
//           >
//             Click to Submit
//           </button>
//         </div>

//         {/* Trend cards */}
//         {filteredTrends.map((trend) => (
//           <div key={trend.id} className="relative">
//             <TrendCard trend={trend} />

//             {/* Lock overlay – only for locked items, NO navigation */}
//             {trend.isLocked && <LockedTrendOverlay />}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// "use client";

// import TrendCard from "../cards/TrendCard";
// import LockedTrendOverlay from "../cards/LockedTrendOverlay";
// import {
//   trends,
//   TrendTag,
//   TrendCategory,
// } from "@/data/fakeTrends";

// type Props = {
//   activeTab: TrendTag;
//   activeCategory: TrendCategory;
//   searchQuery: string;
// };

// export default function LiveTrends({
//   activeTab,
//   activeCategory,
//   searchQuery,
// }: Props) {
//   const normalizedQuery = searchQuery.trim().toLowerCase();

//   const filteredTrends = trends.filter((trend) => {
//     const matchesCategory =
//       activeCategory === "All" || trend.category === activeCategory;

//     const matchesTab =
//       activeTab === "hot"
//         ? trend.tag === "hot"
//         : activeTab === "fresh"
//         ? trend.tag === "fresh"
//         : trend.tag === "top_rated";

//     const matchesSearch =
//       !normalizedQuery ||
//       trend.title.toLowerCase().includes(normalizedQuery) ||
//       trend.description.toLowerCase().includes(normalizedQuery) ||
//       trend.category.toLowerCase().includes(normalizedQuery) ||
//       trend.authorHandle.toLowerCase().includes(normalizedQuery);

//     return matchesCategory && matchesTab && matchesSearch;
//   });

//   const unlockableCount = filteredTrends.filter((t) => t.isLocked).length;

//   return (
//     <section className="mt-8 space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between gap-4">
//         <div>
//           <h2 className="text-2xl md:text-3xl font-semibold text-[var(--pink-primary)]">
//             Live Trends
//           </h2>
//           <p className="text-xs md:text-sm text-gray-400">
//             {filteredTrends.length} trends • Updated in real-time by the
//             community
//           </p>
//         </div>

//         {/* Unlocks pill (right) */}
//         <div className="hidden sm:flex">
//           <button
//             type="button"
//             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium
//               bg-[rgba(20,8,18,0.98)]
//               border border-[var(--pink-primary)]
//               shadow-[0_0_18px_rgba(255,71,101,0.5)]
//               text-gray-100"
//           >
//             <span className="text-yellow-300 text-sm">⚡</span>
//             <span>
//               {unlockableCount > 0
//                 ? `${unlockableCount} unlocks available`
//                 : "No unlocks right now"}
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Cards grid */}
//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//         {/* Spot a Trend card – always first */}
//         <div
//           className="rounded-[26px] p-8
//             bg-[rgba(20,0,10,0.95)]
//             shadow-[0_0_40px_rgba(0,0,0,0.85)]
//             border border-[rgba(255,255,255,0.08)]
//             flex flex-col items-center justify-center text-center"
//         >
//           <div
//             className="w-24 h-24 rounded-full border border-[var(--pink-primary)]
//               shadow-[0_0_30px_rgba(255,71,101,0.8)]
//               flex items-center justify-center mb-6
//               bg-[radial-gradient(circle_at_30%_0%,rgba(255,71,101,0.35),rgba(15,0,10,0.9))]"
//           >
//             <span className="text-4xl text-[var(--pink-primary)]">+</span>
//           </div>
//           <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
//             Spot a Trend?
//           </h3>
//           <p className="text-sm text-gray-300 mb-6 max-w-xs">
//             What you’re seeing before it goes mainstream.
//           </p>
//           <button
//             type="button"
//             className="px-6 py-2.5 rounded-full bg-[var(--pink-primary)]
//               text-white font-semibold text-sm
//               shadow-[0_0_22px_rgba(255,71,101,0.9)]
//               hover:brightness-110 transition"
//           >
//             Click to Submit
//           </button>
//         </div>

//         {/* Trend cards */}
//         {filteredTrends.map((trend) => (
//           <div key={trend.id} className="relative">
//             <TrendCard trend={trend} />
//             {trend.isLocked && <LockedTrendOverlay />}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { useMemo, useState } from "react";
import TrendCard from "../cards/TrendCard";
import LockedTrendOverlay from "../cards/LockedTrendOverlay";
import FilterBar from "./FilterBar";

import {
  Trend,
  trends,
  TrendTag,
  TrendCategory,
} from "@/data/fakeTrends";
import { BsStars } from "react-icons/bs";

type Props = {
  activeTab: TrendTag; // "hot" | "fresh" | "top_rated"
};

export default function LiveTrends({ activeTab }: Props) {
  // 🔹 which category chip is active
  const [selectedCategory, setSelectedCategory] =
    useState<TrendCategory>("All");

  // 🔹 search box value
  const [searchQuery, setSearchQuery] = useState("");

  // 🔹 compute unlocks just from fake data for now
  const totalUnlocksAvailable = useMemo(
    () => trends.filter((t) => t.isLocked).length,
    []
  );

  // 🔹 filtering logic (tab + category + search)
  const filteredTrends = useMemo(
    () =>
      trends.filter((trend) => {
        // 1) Hot / Fresh / Top Rated tab
        const matchesTag = trend.tag === activeTab;

        // 2) category chips
        const matchesCategory =
          selectedCategory === "All" ||
          trend.category === selectedCategory;

        // 3) search input
        const q = searchQuery.trim().toLowerCase();
        const matchesSearch =
          q.length === 0 ||
          trend.title.toLowerCase().includes(q) ||
          trend.description.toLowerCase().includes(q) ||
          trend.category.toLowerCase().includes(q);

        return matchesTag && matchesCategory && matchesSearch;
      }),
    [activeTab, selectedCategory, searchQuery]
  );

  return (
    <section className="mt-16 space-y-8">
      {/* 🔻 Top bar: Hot / Fresh / Top Rated + search + category chips */}
      <FilterBar
        activeTab={activeTab}
        selectedCategory={selectedCategory}
        onCategoryChange={(cat) => setSelectedCategory(cat)}
        searchQuery={searchQuery}
        onSearchChange={(value) => setSearchQuery(value)}
      />

      {/* 🔻 Section header + unlock badge */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Live Trends
          </h2>
          <p className="text-xs md:text-sm text-gray-400">
            {filteredTrends.length} trends • Updated in real-time by
            the community
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            text-xs md:text-sm font-medium
            bg-[rgba(50,10,20,0.96)]
            border border-[var(--pink-primary)]
            shadow-[0_0_20px_rgba(255,71,101,0.7)]
            text-[var(--yellow-primary,#FFD966)]"
        >
          <BsStars className="text-[var(--yellow-primary,#FFD966)]" />
          <span className="text-gray-100">
            {totalUnlocksAvailable} unlocks available
          </span>
        </button>
      </div>

      {/* 🔻 Cards grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Spot a Trend card (static, always first) */}
        <article
          className="relative rounded-[26px] p-6 md:p-7
          bg-[radial-gradient(circle_at_top,rgba(255,71,101,0.35),rgba(10,0,10,0.98))]
          border border-[rgba(255,255,255,0.06)]
          shadow-[0_0_35px_rgba(0,0,0,0.9)]
          text-center flex flex-col items-center justify-between min-h-[260px]"
        >
          <div className="flex flex-col items-center gap-4">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center
              bg-[rgba(30,0,10,0.95)]
              border border-[var(--pink-primary)]
              shadow-[0_0_35px_rgba(255,71,101,0.85)]
              text-[var(--pink-primary)]
              text-3xl font-semibold"
            >
              +
            </div>
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                Spot a Trend?
              </h3>
              <p className="text-xs md:text-sm text-gray-300 max-w-xs">
                What you’re seeing before it goes mainstream.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 inline-flex items-center justify-center
            px-8 py-2.5 rounded-full text-sm font-semibold
            bg-[var(--pink-primary)]
            text-white shadow-[0_0_28px_rgba(255,71,101,0.9)]
            hover:brightness-110 transition"
          >
            Click to Submit
          </button>
        </article>

        {/* Actual trend cards */}
        {filteredTrends.map((trend: Trend) =>
          trend.isLocked ? (
            <LockedTrendOverlay key={trend.id} trend={trend} />
          ) : (
            <TrendCard key={trend.id} trend={trend} />
          )
        )}
      </div>
    </section>
  );
}
