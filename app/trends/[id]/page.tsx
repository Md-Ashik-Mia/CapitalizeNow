// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { trends } from "@/data/fakeTrends";
// import type { Trend } from "@/data/fakeTrends";
// import { FaBolt } from "react-icons/fa";
// import { FaArrowTrendUp } from "react-icons/fa6";
// import { BsStars } from "react-icons/bs";
// import { LuClock3 } from "react-icons/lu";

// type TrendWithDetails = Trend & {
//   // Optional extra fields – use if you later add them to fakeTrends
//   whyThisWillBlowUp?: string;
//   howToCapitalize?: string;
//   proofSources?: string[];
//   timeLeftLabel?: string;
//   submittedDate?: string;
// };

// export default function TrendDetailsPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const trend = trends.find((t) => t.slug === params.slug) as
//     | TrendWithDetails
//     | undefined;

//   if (!trend) {
//     notFound();
//   }

//   const proofSources =
//     trend.proofSources ??
//     [
//       "https://example.com/proof-source-1",
//       "https://example.com/proof-source-2",
//       "https://example.com/proof-source-3",
//     ];

//   const whyThisWillBlowUp =
//     trend.whyThisWillBlowUp ??
//     "This trend is gaining momentum across social platforms and early adopters are already talking about it.";

//   const howToCapitalize =
//     trend.howToCapitalize ??
//     "Create content around this trend, share practical examples, and position yourself as an early expert while interest is still rising.";

//   const timeLeftLabel = trend.timeLeftLabel ?? "3 days";
//   const submittedDate = trend.submittedDate ?? "10/08/2025";

//   return (
//     <main className="min-h-screen relative">
//       {/* background grid is already in your layout / Squares, so keep this page simple */}
//       <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-16">
//         {/* Back link */}
//         <div className="mb-6 text-xs text-gray-400">
//           <Link
//             href="/"
//             className="hover:text-[var(--pink-primary)] transition"
//           >
//             ← Back to Live Trends
//           </Link>
//         </div>

//         {/* Main card */}
//         <section
//           className="rounded-[30px] border border-[rgba(255,255,255,0.14)]
//           bg-[radial-gradient(circle_at_0%_0%,rgba(255,71,101,0.22),rgba(8,2,12,0.96))]
//           shadow-[0_0_60px_rgba(0,0,0,0.9)]
//           px-6 md:px-10 py-8 md:py-10 space-y-8"
//         >
//           {/* Top row: category/duration + Boost button */}
//           <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
//             <div className="flex flex-wrap items-center gap-3">
//               {/* category pill */}
//               <div
//                 className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium
//                 bg-gradient-to-b from-[rgba(255,71,101,0.26)] via-[rgba(120,20,40,0.95)] to-[rgba(60,10,30,0.98)]
//                 text-white border border-[var(--pink-primary)]
//                 shadow-[0_0_18px_rgba(255,71,101,0.7)]"
//               >
//                 {trend.category}
//               </div>

//               {/* duration pill */}
//               <div
//                 className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium
//                 bg-[rgba(20,12,35,0.96)]
//                 text-gray-200 border border-[rgba(255,255,255,0.22)]"
//               >
//                 {trend.duration}
//               </div>
//             </div>

//             {/* Boost button */}
//             <button
//               type="button"
//               className="px-6 py-2.5 rounded-full text-sm font-semibold
//               bg-[var(--pink-primary)] text-white flex items-center gap-2
//               shadow-[0_0_26px_rgba(255,71,101,0.95)]
//               hover:brightness-110 transition self-start"
//             >
//               <FaArrowTrendUp className="w-4 h-4" />
//               Boost
//             </button>
//           </div>

//           {/* Title */}
//           <div>
//             <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
//               {trend.title}
//             </h1>
//             <p className="text-sm md:text-base text-gray-300 max-w-3xl">
//               {trend.description}
//             </p>
//           </div>

//           {/* Stats row */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//             {/* Confidence */}
//             <div
//               className="rounded-2xl border border-[rgba(0,160,80,0.7)]
//               bg-[radial-gradient(circle_at_0%_0%,rgba(0,160,80,0.3),rgba(5,14,10,0.98))]
//               px-4 py-3 text-xs text-gray-100"
//             >
//               <div className="flex items-center justify-between mb-1">
//                 <span>Confidence</span>
//                 <span className="w-6 h-6 rounded-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center text-[10px]">
//                   <BsStars />
//                 </span>
//               </div>
//               <p className="text-lg font-semibold text-emerald-300">
//                 {trend.confidence}%
//               </p>
//             </div>

//             {/* Total boosts */}
//             <div
//               className="rounded-2xl border border-[rgba(255,71,101,0.7)]
//               bg-[radial-gradient(circle_at_0%_0%,rgba(255,71,101,0.25),rgba(20,6,10,0.98))]
//               px-4 py-3 text-xs text-gray-100"
//             >
//               <div className="flex items-center justify-between mb-1">
//                 <span>Total Boosts</span>
//                 <span className="w-6 h-6 rounded-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center text-[10px] text-[var(--pink-primary)]">
//                   <FaBolt />
//                 </span>
//               </div>
//               <p className="text-lg font-semibold text-[var(--pink-primary)]">
//                 {trend.boosts}
//               </p>
//             </div>

//             {/* Time left */}
//             <div
//               className="rounded-2xl border border-[rgba(80,120,255,0.7)]
//               bg-[radial-gradient(circle_at_0%_0%,rgba(80,120,255,0.25),rgba(8,10,25,0.98))]
//               px-4 py-3 text-xs text-gray-100"
//             >
//               <div className="flex items-center justify-between mb-1">
//                 <span>Time Left</span>
//                 <span className="w-6 h-6 rounded-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center text-[10px]">
//                   <LuClock3 />
//                 </span>
//               </div>
//               <p className="text-lg font-semibold text-indigo-300">
//                 {timeLeftLabel}
//               </p>
//             </div>

//             {/* Submitted by */}
//             <div
//               className="rounded-2xl border border-[rgba(255,214,0,0.7)]
//               bg-[radial-gradient(circle_at_0%_0%,rgba(255,214,0,0.25),rgba(22,18,5,0.98))]
//               px-4 py-3 text-xs text-gray-100"
//             >
//               <div className="flex items-center justify-between mb-1">
//                 <span>Submitted by</span>
//                 <span className="w-6 h-6 rounded-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center text-[10px]">
//                   👤
//                 </span>
//               </div>
//               <p className="text-sm font-semibold text-amber-200">
//                 {trend.authorHandle}
//               </p>
//             </div>
//           </div>

//           {/* Two-column explanation cards */}
//           <div className="grid gap-4 md:grid-cols-2">
//             {/* Why this will blow up */}
//             <div
//               className="rounded-[22px] border border-[rgba(255,255,255,0.16)]
//               bg-[rgba(15,4,14,0.98)]
//               px-6 py-6 text-center md:text-left"
//             >
//               <div className="flex items-center justify-center md:justify-start mb-4">
//                 <div
//                   className="w-14 h-14 rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(255,214,0,0.55),rgba(20,10,0,0.98))]
//                   shadow-[0_0_26px_rgba(255,214,0,0.75)]
//                   flex items-center justify-center text-xl"
//                 >
//                   <FaBolt />
//                 </div>
//               </div>
//               <h2 className="text-base md:text-lg font-semibold text-white mb-3">
//                 Why This Will Blow Up
//               </h2>
//               <p className="text-sm text-gray-300 leading-relaxed">
//                 {whyThisWillBlowUp}
//               </p>
//             </div>

//             {/* How to capitalize */}
//             <div
//               className="rounded-[22px] border border-[rgba(255,255,255,0.16)]
//               bg-[rgba(15,4,18,0.98)]
//               px-6 py-6 text-center md:text-left"
//             >
//               <div className="flex items-center justify-center md:justify-start mb-4">
//                 <div
//                   className="w-14 h-14 rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(255,71,101,0.55),rgba(20,0,10,0.98))]
//                   shadow-[0_0_26px_rgba(255,71,101,0.8)]
//                   flex items-center justify-center text-xl text-[var(--pink-primary)]"
//                 >
//                   <FaArrowTrendUp />
//                 </div>
//               </div>
//               <h2 className="text-base md:text-lg font-semibold text-white mb-3">
//                 How to Capitalize
//               </h2>
//               <p className="text-sm text-gray-300 leading-relaxed">
//                 {howToCapitalize}
//               </p>
//             </div>
//           </div>

//           {/* Proof sources */}
//           <div className="space-y-3 pt-2">
//             <div className="flex items-center gap-2 text-xs font-semibold text-gray-200">
//               <span className="text-[var(--pink-primary)]">✏</span>
//               <span>Proof Sources ({proofSources.length})</span>
//             </div>

//             <div className="space-y-2 text-xs md:text-sm">
//               {proofSources.map((url, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center justify-between gap-2 rounded-xl
//                     bg-[rgba(12,4,20,0.98)]
//                     border border-[rgba(255,255,255,0.16)]
//                     px-4 py-2"
//                 >
//                   <span className="truncate text-gray-200">{url}</span>
//                   <button
//                     type="button"
//                     className="text-[var(--pink-primary)] text-xs font-medium hover:underline"
//                   >
//                     Copy
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Footer row */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-3 border-t border-[rgba(255,255,255,0.08)] mt-2 text-xs text-gray-400 gap-2">
//             <span>
//               Submitted by{" "}
//               <span className="text-gray-200">{trend.authorHandle}</span>
//             </span>
//             <span>{submittedDate}</span>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }


// app/trends/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { trends } from "@/data/fakeTrends";
import type { Trend } from "@/data/fakeTrends";
import { FaBolt } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";

export default function TrendDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const trend = trends.find((t) => t.id === params.id) as Trend | undefined;

  if (!trend) {
    notFound();
  }

  return (
    <main className="min-h-screen relative">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        {/* back link */}
        <div className="mb-6 text-xs text-gray-400">
          <Link
            href="/"
            className="hover:text-[var(--pink-primary)] transition"
          >
            ← Back to Live Trends
          </Link>
        </div>

        {/* main card */}
        <section
          className="rounded-[30px] border border-[rgba(255,255,255,0.14)]
          bg-[radial-gradient(circle_at_0%_0%,rgba(255,71,101,0.22),rgba(8,2,12,0.96))]
          shadow-[0_0_60px_rgba(0,0,0,0.9)]
          px-6 md:px-10 py-8 md:py-10 space-y-8"
        >
          {/* top row: tags + Boost button */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              {/* category pill */}
              <div
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium
                bg-gradient-to-b from-[rgba(255,71,101,0.26)] via-[rgba(120,20,40,0.95)] to-[rgba(60,10,30,0.98)]
                text-white border border-[var(--pink-primary)]
                shadow-[0_0_18px_rgba(255,71,101,0.7)]"
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

            <button
              type="button"
              className="px-6 py-2.5 rounded-full text-sm font-semibold
              bg-[var(--pink-primary)] text-white flex items-center gap-2
              shadow-[0_0_26px_rgba(255,71,101,0.95)]
              hover:brightness-110 transition self-start"
            >
              <FaArrowTrendUp className="w-4 h-4" />
              Boost
            </button>
          </div>

          {/* title + intro */}
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              {trend.title}
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl">
              {trend.description}
            </p>
          </div>

          {/* stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* confidence */}
            <div
              className="rounded-2xl border border-[rgba(0,160,80,0.7)]
              bg-[radial-gradient(circle_at_0%_0%,rgba(0,160,80,0.3),rgba(5,14,10,0.98))]
              px-4 py-3 text-xs text-gray-100"
            >
              <div className="flex items-center justify-between mb-1">
                <span>Confidence</span>
                <span className="w-6 h-6 rounded-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center text-[10px]">
                  <BsStars />
                </span>
              </div>
              <p className="text-lg font-semibold text-emerald-300">
                {trend.confidence}%
              </p>
            </div>

            {/* total boosts */}
            <div
              className="rounded-2xl border border-[rgba(255,71,101,0.7)]
              bg-[radial-gradient(circle_at_0%_0%,rgba(255,71,101,0.25),rgba(20,6,10,0.98))]
              px-4 py-3 text-xs text-gray-100"
            >
              <div className="flex items-center justify-between mb-1">
                <span>Total Boosts</span>
                <span className="w-6 h-6 rounded-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center text-[10px] text-[var(--pink-primary)]">
                  <FaBolt />
                </span>
              </div>
              <p className="text-lg font-semibold text-[var(--pink-primary)]">
                {trend.boosts}
              </p>
            </div>

            {/* time left */}
            <div
              className="rounded-2xl border border-[rgba(80,120,255,0.7)]
              bg-[radial-gradient(circle_at_0%_0%,rgba(80,120,255,0.25),rgba(8,10,25,0.98))]
              px-4 py-3 text-xs text-gray-100"
            >
              <div className="flex items-center justify-between mb-1">
                <span>Time Left</span>
                <span className="w-6 h-6 rounded-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center text-[10px]">
                  <LuClock3 />
                </span>
              </div>
              <p className="text-lg font-semibold text-indigo-300">
                {trend.timeLeft}
              </p>
            </div>

            {/* submitted by */}
            <div
              className="rounded-2xl border border-[rgba(255,214,0,0.7)]
              bg-[radial-gradient(circle_at_0%_0%,rgba(255,214,0,0.25),rgba(22,18,5,0.98))]
              px-4 py-3 text-xs text-gray-100"
            >
              <div className="flex items-center justify-between mb-1">
                <span>Submitted by</span>
                <span className="w-6 h-6 rounded-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center text-[10px]">
                  👤
                </span>
              </div>
              <p className="text-sm font-semibold text-amber-200">
                {trend.submittedBy}
              </p>
            </div>
          </div>

          {/* why + how cards */}
          <div className="grid gap-4 md:grid-cols-2">
            <div
              className="rounded-[22px] border border-[rgba(255,255,255,0.16)]
              bg-[rgba(15,4,14,0.98)]
              px-6 py-6 text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div
                  className="w-14 h-14 rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(255,214,0,0.55),rgba(20,10,0,0.98))]
                  shadow-[0_0_26px_rgba(255,214,0,0.75)]
                  flex items-center justify-center text-xl"
                >
                  <FaBolt />
                </div>
              </div>
              <h2 className="text-base md:text-lg font-semibold text-white mb-3">
                Why This Will Blow Up
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                {trend.whyWillBlowUp}
              </p>
            </div>

            <div
              className="rounded-[22px] border border-[rgba(255,255,255,0.16)]
              bg-[rgba(15,4,18,0.98)]
              px-6 py-6 text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div
                  className="w-14 h-14 rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(255,71,101,0.55),rgba(20,0,10,0.98))]
                  shadow-[0_0_26px_rgba(255,71,101,0.8)]
                  flex items-center justify-center text-xl text-[var(--pink-primary)]"
                >
                  <FaArrowTrendUp />
                </div>
              </div>
              <h2 className="text-base md:text-lg font-semibold text-white mb-3">
                How to Capitalize
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                {trend.howToCapitalize}
              </p>
            </div>
          </div>

          {/* proof sources */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-200">
              <span className="text-[var(--pink-primary)]">✏</span>
              <span>Proof Sources ({trend.proofSources.length})</span>
            </div>

            <div className="space-y-2 text-xs md:text-sm">
              {trend.proofSources.map((url, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-2 rounded-xl
                  bg-[rgba(12,4,20,0.98)]
                  border border-[rgba(255,255,255,0.16)]
                  px-4 py-2"
                >
                  <span className="truncate text-gray-200">{url}</span>
                  <button
                    type="button"
                    className="text-[var(--pink-primary)] text-xs font-medium hover:underline"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* footer row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-3 border-t border-[rgba(255,255,255,0.08)] mt-2 text-xs text-gray-400 gap-2">
            <span>
              Submitted by{" "}
              <span className="text-gray-200">{trend.authorHandle}</span>
            </span>
            <span>{trend.submittedAt}</span>
          </div>
        </section>
      </div>
    </main>
  );
}
