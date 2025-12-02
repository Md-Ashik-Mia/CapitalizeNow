// "use client";

// import { TrendTag, categories } from "@/data/fakeTrends";
// import { FaFire } from "react-icons/fa";
// import { FaArrowTrendUp } from "react-icons/fa6";
// import { CiFilter } from "react-icons/ci";
// import { CiSearch } from "react-icons/ci";

// type Props = {
//   activeTab: TrendTag;
//   onTabChange: (tab: TrendTag) => void;
//   activeCategory: string;
//   onCategoryChange: (cat: string) => void;
//   search: string;
//   onSearchChange: (value: string) => void;
// };

// const tabs: TrendTag[] = ["Hot Now", "Fresh", "Top Rated"];

// export default function FilterBar({
//   activeTab,
//   onTabChange,
//   activeCategory,
//   onCategoryChange,
//   search,
//   onSearchChange,
// }: Props) {
//   return (
//     <section className="mt-10 z-10 relative">
//       {/* Row 1: tabs (left) + search (right) */}
//       <div className="flex items-center justify-between gap-6">
//         {/* Tabs */}
//         <div className="flex items-center gap-6">
//           {tabs.map((tab) => {
//             const isActive = tab === activeTab;
//             return (
//               <button
//                 key={tab}
//                 onClick={() => onTabChange(tab)}
//                 className={
//                   isActive
//                     ? "flex items-center gap-2 text-sm px-5 py-2 rounded-full text-white bg-[var(--pink-primary)] shadow-[0_0_25px_rgba(255,71,101,0.55)]"
//                     : "flex items-center gap-2 text-sm text-gray-300 hover:text-white"
//                 }
//               >
//                 {tab === "Hot Now" && (
//                   <FaFire className="w-4 h-4 text-white" />
//                 )}
//                 {tab === "Fresh" && (
//                   <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px] text-gray-300">
//                     ⏱
//                   </span>
//                 )}
//                 {tab === "Top Rated" && (
//                   <FaArrowTrendUp className="w-4 h-4 text-white" />
//                 )}
//                 <span>{tab}</span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Search pill (RIGHT) */}
//         <div className="w-[260px] shrink-0">
//           <div
//             className="flex items-center gap-3 px-5 py-3 rounded-2xl
//             bg-gradient-to-br from-[rgba(60,0,25,0.9)] via-[rgba(20,0,15,0.95)] to-[rgba(8,0,8,0.98)]
//             border border-[var(--pink-border)]
//             shadow-[0_0_20px_rgba(255,71,101,0.35)]"
//           >
//             {/* <span className="text-[var(--pink-primary)] text-sm">🔍</span> */}
//             <CiSearch className="w-5 h-5 text-[var(--pink-primary)]" />
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => onSearchChange(e.target.value)}
//               placeholder="Search Trends..."
//               className="bg-transparent outline-none w-full text-sm text-gray-200 placeholder:text-gray-500"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Row 2: category chips */}
//       <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-1">
//         <CiFilter />
//         {categories.map((cat) => {
//           const isActive = cat === activeCategory;
//           return (
//             <button
//               key={cat}
//               onClick={() => onCategoryChange(cat)}
//               className={`px-4 py-1.5 rounded-full border text-sm whitespace-nowrap
//                 ${
//                   isActive
//                     ? "border-[var(--pink-primary)] text-[var(--pink-primary)] bg-[rgba(255,71,101,0.08)] shadow-[0_0_15px_rgba(255,71,101,0.3)]"
//                     : "border-[rgba(255,255,255,0.14)] text-gray-300 hover:border-[var(--pink-border)]"
//                 }`}
//             >
//               {cat}
//             </button>
//           );
//         })}
//       </div>
//     </section>
//   );
// }




"use client";

import { TrendTag, TrendCategory, categories } from "@/data/fakeTrends";
import { FaFire } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuClock3, LuSearch } from "react-icons/lu";
import { MdOutlineTune } from "react-icons/md";

type Props = {
  activeTab: TrendTag;
  onTabChange: (tag: TrendTag) => void;

  activeCategory: TrendCategory;
  onCategoryChange: (category: TrendCategory) => void;

  searchQuery: string;
  onSearchChange: (value: string) => void;
};

const TABS: { id: TrendTag; label: string; icon: React.ReactNode }[] = [
  { id: "hot", label: "Hot Now", icon: <FaFire className="w-3.5 h-3.5" /> },
  { id: "fresh", label: "Fresh", icon: <LuClock3 className="w-3.5 h-3.5" /> },
  {
    id: "top_rated",
    label: "Top Rated",
    icon: <FaArrowTrendUp className="w-3.5 h-3.5" />,
  },
];

export default function FilterBar({
  activeTab,
  onTabChange,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: Props) {
  return (
    <section className="mt-10 mb-6 flex flex-col gap-4">
      {/* Tabs + search */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Tabs */}
        <div className="flex items-center gap-2">
          {TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition
                  ${
                    active
                      ? "bg-[var(--pink-primary)] text-white shadow-[0_0_20px_rgba(255,71,101,0.8)]"
                      : "bg-[rgba(10,6,20,0.9)] text-gray-300 border border-[rgba(255,255,255,0.14)] hover:border-[var(--pink-primary)]"
                  }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="w-full md:w-80">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-2xl
              bg-[rgba(10,0,12,0.95)]
              border border-[var(--pink-primary)]
              shadow-[0_0_24px_rgba(255,71,101,0.45)]"
          >
            <LuSearch className="w-4 h-4 text-[var(--pink-primary)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search Trends..."
              className="flex-1 bg-transparent outline-none text-xs md:text-sm text-gray-200 placeholder:text-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[rgba(15,8,20,0.9)] text-gray-300">
          <MdOutlineTune className="w-3.5 h-3.5" />
        </span>

        {categories.map((category) => {
          const active = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-1.5 rounded-full border text-xs font-medium transition
                ${
                  active
                    ? "border-[var(--pink-primary)] bg-[rgba(255,71,101,0.22)] text-white shadow-[0_0_18px_rgba(255,71,101,0.7)]"
                    : "border-[rgba(255,255,255,0.18)] text-gray-300 bg-[rgba(10,6,20,0.9)] hover:border-[var(--pink-primary)]"
                }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}
