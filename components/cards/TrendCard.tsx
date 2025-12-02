// // import { Trend } from "@/data/fakeTrends";
// // import { FaArrowTrendUp } from "react-icons/fa6";
// // import { FiMaximize2 } from "react-icons/fi";
// // import { BsArrowsFullscreen } from "react-icons/bs";


// // type Props = {
// //   trend: Trend;
// //   onExpand?: (trend: Trend) => void; // optional callback for fullscreen button
// // };

// // export default function TrendCard({ trend, onExpand }: Props) {
// //   return (
// //     <article
// //       className="relative rounded-[26px] p-6 md:p-7
// //       bg-[rgba(12,4,18,0.96)]
// //       border border-[rgba(255,255,255,0.08)]
// //       shadow-[0_0_28px_rgba(0,0,0,0.75)]
// //       text-gray-200 flex flex-col gap-4"
// //     >
// //       {/* top row: tags + expand button */}
// //       <div className="flex items-start justify-between gap-4">
// //         <div className="flex items-center gap-3">
// //           {/* category pill – glowing like Boost */}
// //           <div
// //             className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium
// //             bg-gradient-to-b from-[rgba(255,71,101,0.26)] via-[rgba(120,20,40,0.95)] to-[rgba(60,10,30,0.98)]
// //             text-white border border-[var(--pink-primary)]
// //             shadow-[0_0_18px_rgba(255,71,101,0.7)]"
// //           >
// //             {trend.category}
// //           </div>

// //           {/* duration pill */}
// //           <div
// //             className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium
// //             bg-[rgba(20,12,35,0.96)]
// //             text-gray-200 border border-[rgba(255,255,255,0.22)]"
// //           >
// //             {trend.duration}
// //           </div>
// //         </div>

// //         {/* fullscreen / expand button */}
// //         <button
// //           type="button"
// //           onClick={() => onExpand?.(trend)}
// //           className="w-7 h-7 rounded flex items-center justify-center
// //           bg-[rgba(255,71,101,0.18)]
// //           border border-[var(--pink-primary)]
// //           shadow-[0_0_16px_rgba(255,71,101,0.6)]
// //           text-[var(--pink-primary)] hover:brightness-110 transition"
// //           aria-label="Expand trend"
// //         >
// //           {/* <FiMaximize2 className="w-4 h-4" /> */}
// //           <BsArrowsFullscreen />

// //         </button>
// //       </div>

// //       {/* title & description */}
// //       <div className="space-y-2 mt-1">
// //         <h3 className="font-semibold text-white text-lg md:text-xl">
// //           {trend.title}
// //         </h3>
// //         <p className="text-sm text-gray-300 leading-relaxed">
// //           {trend.description}
// //         </p>
// //       </div>

// //       {/* confidence label + pill */}
// //       <div className="mt-3 flex items-center justify-between gap-3">
// //         <span className="text-sm text-gray-200">Confidence</span>

// //         {/* 75% glowing pill */}
// //         <div
// //           className="inline-flex items-center justify-center px-4 py-1.5 rounded-full
// //           bg-[rgba(255,71,101,0.95)]
// //           text-white text-xs font-semibold
// //           shadow-[0_0_18px_rgba(255,71,101,0.8)]
// //           border border-[var(--pink-primary)]"
// //         >
// //           {trend.confidence}%
// //         </div>
// //       </div>

// //       {/* confidence bar */}
// //       <div className="mt-1">
// //         <div className="h-1.5 rounded-full bg-[rgba(60,60,70,0.85)] overflow-hidden">
// //           <div
// //             className="h-full rounded-full bg-[var(--pink-primary)]"
// //             style={{ width: `${trend.confidence}%` }}
// //           />
// //         </div>
// //       </div>

// //       {/* footer: boosts + author + Boost button */}
// //       <div className="mt-4 flex items-center justify-between gap-4 text-xs md:text-sm">
// //         <div className="flex flex-wrap items-center gap-3 text-gray-300">
// //           <span className="flex items-center gap-1">
// //             <span className="text-[var(--pink-primary)]">⚡</span>
// //             <span className="font-medium">{trend.boosts} boosts</span>
// //           </span>
// //           <span className="text-gray-400">
// //             by <span className="text-gray-200">{trend.authorHandle}</span>
// //           </span>
// //         </div>

// //         {/* Boost button */}
// //         <button
// //           type="button"
// //           className="px-6 py-2.5 rounded-full text-[13px] md:text-sm font-semibold
// //           bg-[var(--pink-primary)] text-white flex items-center gap-2
// //           shadow-[0_0_22px_rgba(255,71,101,0.85)]
// //           hover:brightness-110 transition"
// //         >
// //           <FaArrowTrendUp className="w-4 h-4" />
// //           <span>Boost</span>
// //         </button>
// //       </div>
// //     </article>
// //   );
// // }

// // components/cards/TrendCard.tsx
// // components/cards/TrendCard.tsx
// import Link from "next/link";
// import { Trend } from "@/data/fakeTrends";
// import { FaArrowTrendUp } from "react-icons/fa6";
// import { BsArrowsFullscreen } from "react-icons/bs";

// type Props = {
//   trend: Trend;
// };

// export default function TrendCard({ trend }: Props) {
//   const locked = trend.isLocked;

//   return (
//     <article
//       className="relative rounded-[26px] p-6 md:p-7
//       bg-[rgba(12,4,18,0.96)]
//       border border-[rgba(255,255,255,0.08)]
//       shadow-[0_0_28px_rgba(0,0,0,0.75)]
//       text-gray-200 flex flex-col gap-4"
//     >
//       {/* top row: tags + expand button */}
//       <div className="flex items-start justify-between gap-4">
//         <div className="flex items-center gap-3">
//           {/* category pill – glowing like Boost */}
//           <div
//             className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium
//             bg-gradient-to-b from-[rgba(255,71,101,0.26)] via-[rgba(120,20,40,0.95)] to-[rgba(60,10,30,0.98)]
//             text-white border border-[var(--pink-primary)]
//             shadow-[0_0_18px_rgba(255,71,101,0.7)]"
//           >
//             {trend.category}
//           </div>

//           {/* duration pill */}
//           <div
//             className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium
//             bg-[rgba(20,12,35,0.96)]
//             text-gray-200 border border-[rgba(255,255,255,0.22)]"
//           >
//             {trend.duration}
//           </div>
//         </div>

//         {/* fullscreen / expand button */}
//         {locked ? (
//           // locked: show same button but disabled
//           <div
//             className="w-7 h-7 rounded flex items-center justify-center
//             bg-[rgba(255,71,101,0.18)]
//             border border-[var(--pink-primary)]
//             shadow-[0_0_16px_rgba(255,71,101,0.6)]
//             text-[var(--pink-primary)]
//             opacity-50 cursor-not-allowed"
//             aria-disabled="true"
//           >
//             <BsArrowsFullscreen />
//           </div>
//         ) : (
//           // unlocked: link to detail page
//           <Link
//             href={`/trends/${trend.id}`}
//             className="w-7 h-7 rounded flex items-center justify-center
//             bg-[rgba(255,71,101,0.18)]
//             border border-[var(--pink-primary)]
//             shadow-[0_0_16px_rgba(255,71,101,0.6)]
//             text-[var(--pink-primary)] hover:brightness-110 transition"
//             aria-label="Open trend details"
//           >
//             <BsArrowsFullscreen />
//           </Link>
//         )}
//       </div>

//       {/* title & description */}
//       <div className="space-y-2 mt-1">
//         <h3 className="font-semibold text-white text-lg md:text-xl">
//           {trend.title}
//         </h3>
//         <p className="text-sm text-gray-300 leading-relaxed">
//           {trend.description}
//         </p>
//       </div>

//       {/* confidence label + pill */}
//       <div className="mt-3 flex items-center justify-between gap-3">
//         <span className="text-sm text-gray-200">Confidence</span>

//         {/* 75% glowing pill */}
//         <div
//           className="inline-flex items-center justify-center px-4 py-1.5 rounded-full
//           bg-[rgba(255,71,101,0.95)]
//           text-white text-xs font-semibold
//           shadow-[0_0_18px_rgba(255,71,101,0.8)]
//           border border-[var(--pink-primary)]"
//         >
//           {trend.confidence}%
//         </div>
//       </div>

//       {/* confidence bar */}
//       <div className="mt-1">
//         <div className="h-1.5 rounded-full bg-[rgba(60,60,70,0.85)] overflow-hidden">
//           <div
//             className="h-full rounded-full bg-[var(--pink-primary)]"
//             style={{ width: `${trend.confidence}%` }}
//           />
//         </div>
//       </div>

//       {/* footer: boosts + author + Boost button */}
//       <div className="mt-4 flex items-center justify-between gap-4 text-xs md:text-sm">
//         <div className="flex flex-wrap items-center gap-3 text-gray-300">
//           <span className="flex items-center gap-1">
//             <span className="text-[var(--pink-primary)]">⚡</span>
//             <span className="font-medium">{trend.boosts} boosts</span>
//           </span>
//           <span className="text-gray-400">
//             by <span className="text-gray-200">{trend.authorHandle}</span>
//           </span>
//         </div>

//         {/* Boost button */}
//         <button
//           type="button"
//           className="px-6 py-2.5 rounded-full text-[13px] md:text-sm font-semibold
//           bg-[var(--pink-primary)] text-white flex items-center gap-2
//           shadow-[0_0_22px_rgba(255,71,101,0.85)]
//           hover:brightness-110 transition"
//         >
//           <FaArrowTrendUp className="w-4 h-4" />
//           <span>Boost</span>
//         </button>
//       </div>
//     </article>
//   );
// }




import { Trend } from "@/data/fakeTrends";
import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";
// import { FiMaximize2 } from "react-icons/fi";
import { SlSizeFullscreen } from "react-icons/sl";
import LockedTrendOverlay from "./LockedTrendOverlay";


type Props = {
  trend: Trend;
  onExpand?: (trend: Trend) => void; // optional callback for fullscreen button
  isLocked?: boolean;
  onUnlock?: () => void;
};

export default function TrendCard({ trend, onExpand, isLocked, onUnlock }: Props) {
  return (
    <article
      className="relative rounded-[26px] p-6 md:p-7
      bg-[rgba(12,4,18,0.96)]
      border border-[rgba(255,255,255,0.25)]
      shadow-[0_0_30px_rgba(255,255,255,0.08),0_0_50px_rgba(255,255,255,0.04),0_4px_20px_rgba(0,0,0,0.5)]
      text-gray-200 flex flex-col gap-4 overflow-hidden"
    >
      {isLocked && <LockedTrendOverlay onUnlock={onUnlock} />}

      <div className={isLocked ? "blur-sm opacity-50 pointer-events-none select-none" : ""}>
        {/* top row: tags + expand button */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* category pill – glowing like Boost */}
            <div
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium
              bg-[#1A0B14]
              text-white border border-[var(--pink-primary)]
              shadow-[0_0_10px_rgba(255,71,101,0.4)]"
            >
              {trend.category}
            </div>

            {/* duration pill */}
            <div
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium
              bg-[rgba(20,12,35,0.96)]
              text-gray-200 border border-[rgba(255,255,255,0.22)]"
            >
              {trend.duration}
            </div>
          </div>

          {/* fullscreen / expand button */}
          {isLocked ? (
            <button
              type="button"
              className="w-9 h-9 rounded-2xl flex items-center justify-center
              bg-[rgba(255,71,101,0.18)]
              border border-[var(--pink-primary)]
              shadow-[0_0_16px_rgba(255,71,101,0.6)]
              text-[var(--pink-primary)]
              opacity-50 cursor-not-allowed"
              disabled
            >
              <SlSizeFullscreen />
            </button>
          ) : (
            <Link
              href={`/trends/${trend.id}`}
              className="w-9 h-9 rounded-2xl flex items-center justify-center
              bg-[rgba(255,71,101,0.18)]
              border border-[var(--pink-primary)]
              shadow-[0_0_16px_rgba(255,71,101,0.6)]
              text-[var(--pink-primary)] hover:brightness-110 transition"
            >
              <SlSizeFullscreen />
            </Link>
          )}
        </div>

        {/* title & description */}
        <div className="space-y-2 mt-1">
          <h3 className="font-semibold text-white text-lg md:text-xl">
            {trend.title}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {trend.description}
          </p>
        </div>

        {/* confidence label + pill */}
        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-sm text-gray-200">Confidence</span>

          {/* 75% glowing pill */}
          <div
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full
            bg-[rgba(255,71,101,0.95)]
            text-white text-xs font-semibold
            shadow-[0_0_18px_rgba(255,71,101,0.8)]
            border border-[var(--pink-primary)]"
          >
            {trend.confidence}%
          </div>
        </div>

        {/* confidence bar */}
        <div className="mt-1">
          <div className="h-1.5 rounded-full bg-[rgba(60,60,70,0.85)] overflow-hidden">
            <div
              className="h-full rounded-full bg-[var(--pink-primary)] shadow-[0_0_8px_rgba(255,71,101,0.6)]"
              style={{ width: `${trend.confidence}%` }}
            />
          </div>
        </div>

        {/* footer: boosts + author + Boost button */}
        <div className="mt-4 flex items-center justify-between gap-4 text-xs md:text-sm">
          <div className="flex flex-wrap items-center gap-3 text-gray-300">
            <span className="flex items-center gap-1">
              <span className="text-[var(--pink-primary)]">⚡</span>
              <span className="font-medium">{trend.boosts} boosts</span>
            </span>
            <span className="text-gray-400">
              by <span className="text-gray-200">{trend.authorHandle}</span>
            </span>
          </div>

          {/* Boost button */}
          <button
            type="button"
            className="px-6 py-2.5 rounded-full text-[13px] md:text-sm font-semibold
            bg-[var(--pink-primary)] text-white flex items-center gap-2
            shadow-[0_0_22px_rgba(255,71,101,0.85)]
            hover:brightness-110 transition"
            disabled={isLocked}
          >
            <FaArrowTrendUp className="w-4 h-4" />
            <span>Boost</span>
          </button>
        </div>
      </div>
    </article>
  );
}
