"use client";

import { trends } from "@/data/fakeTrends";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BsBoxArrowUpRight, BsSpeedometer2 } from "react-icons/bs";
import { FaArrowTrendUp, FaUser } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineSendAndArchive, MdOutlineWatchLater } from "react-icons/md";

export default function TrendDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const trend = trends.find((t) => t.id === id);

  if (!trend) notFound();

  return (
    <div className="min-h-screen text-white font-sans selection:bg-pink-500/30">

      <main className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Outer Glass Card */}
          <div
            className="
              relative rounded-[32px] border border-white/10
              bg-[#0A020D]/90
              backdrop-blur-xl
              shadow-[0_0_120px_rgba(255,71,101,0.15)]
              overflow-hidden p-8
            "
          >
            {/* Top Row Pills */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-3">
                {/* Category pill */}
                <span
                  className="
                    px-5 py-2 text-sm font-medium rounded-full
                    bg-[#FF4765]/10 border border-[#FF4765]
                    shadow-[0_0_8px_rgba(255,71,101,.45)]
                  "
                >
                  {trend.category}
                </span>

                {/* Duration pill */}
                <span className="px-5 py-2 text-sm font-medium rounded-full bg-white/5 border border-white/20">
                  {trend.duration}
                </span>
              </div>

              {/* Close Button */}
              <Link
                href="/"
                className="
                  w-10 h-10 flex items-center justify-center rounded-full
                  border border-[#FF4765]
                  text-[#FF4765] bg-[#FF4765]/10
                  hover:bg-[#FF4765] hover:text-white
                  transition-all duration-300
                "
              >
                <IoCloseCircleOutline className="w-6 h-6" />
              </Link>
            </div>

            {/* Title & Boost Row */}
            <div className="flex items-start justify-between mb-8">
              <h1 className="text-4xl font-bold max-w-2xl leading-tight">{trend.title}</h1>

              <button
                className="
                  flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold
                  bg-[#FF4765] text-white
                  shadow-[0_0_20px_rgba(255,71,101,0.4)]
                  hover:bg-[#ff5c77] transition-all
                "
              >
                <FaArrowTrendUp />
                Boost
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {/* Confidence */}
              <div className="rounded-2xl p-4 bg-[#0F1816] border border-[#12D18E]/20 flex flex-col justify-center h-24 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#12D18E]/5 group-hover:bg-[#12D18E]/10 transition-colors" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 rounded-full bg-[#12D18E]/20 flex items-center justify-center">
                      <BsSpeedometer2 className="w-3 h-3 text-[#12D18E]" />
                    </div>
                    <span className="text-xs text-gray-400">Confidence</span>
                  </div>
                  <p className="text-[#12D18E] text-2xl font-bold ml-1">{trend.confidence}%</p>
                </div>
              </div>

              {/* Total Boosts */}
              <div className="rounded-2xl p-4 bg-[#1A0B0B] border border-[#FF4765]/20 flex flex-col justify-center h-24 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#FF4765]/5 group-hover:bg-[#FF4765]/10 transition-colors" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 rounded-full bg-[#FF4765]/20 flex items-center justify-center">
                      <FaArrowTrendUp className="w-3 h-3 text-[#FF4765]" />
                    </div>
                    <span className="text-xs text-gray-400">Total Boosts</span>
                  </div>
                  <p className="text-[#FF4765] text-2xl font-bold ml-1">{trend.boosts}</p>
                </div>
              </div>

              {/* Time Left */}
              <div className="rounded-2xl p-4 bg-[#0B0B1A] border border-[#4F52FF]/20 flex flex-col justify-center h-24 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#4F52FF]/5 group-hover:bg-[#4F52FF]/10 transition-colors" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 rounded-full bg-[#4F52FF]/20 flex items-center justify-center">
                      <MdOutlineWatchLater className="w-3 h-3 text-[#4F52FF]" />
                    </div>
                    <span className="text-xs text-gray-400">Time Left</span>
                  </div>
                  <p className="text-[#4F52FF] text-2xl font-bold ml-1">{trend.timeLeft}</p>
                </div>
              </div>

              {/* Submitted */}
              <div className="rounded-2xl p-4 bg-[#1A1A0B] border border-[#FFE600]/20 flex flex-col justify-center h-24 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#FFE600]/5 group-hover:bg-[#FFE600]/10 transition-colors" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 rounded-full bg-[#FFE600]/20 flex items-center justify-center">
                      <MdOutlineSendAndArchive className="w-3 h-3 text-[#FFE600]" />
                    </div>
                    <span className="text-xs text-gray-400">Submitted by</span>
                  </div>
                  <p className="text-[#FFE600] text-sm font-bold ml-1 truncate">@{trend.submittedBy}</p>
                </div>
              </div>
            </div>

            {/* Two Main Blocks */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Why Block */}
              <div className="p-8 rounded-3xl bg-[#0F0505] border border-[#FF4765]/20 relative overflow-hidden flex flex-col items-center text-center shadow-[0_0_30px_rgba(255,71,101,0.05)]">
                <div className="w-12 h-12 rounded-full bg-[#FFE600]/10 flex items-center justify-center mb-4 border border-[#FFE600]/20 shadow-[0_0_15px_rgba(255,230,0,0.1)]">
                   <AiTwotoneThunderbolt className="text-2xl text-[#FFE600]" />
                </div>
                <h2 className="text-lg font-bold text-white mb-3">Why This Will Blow Up</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{trend.whyWillBlowUp}</p>
              </div>

              {/* How Block */}
              <div className="p-8 rounded-3xl bg-[#0F0505] border border-[#FF4765]/20 relative overflow-hidden flex flex-col items-center text-center shadow-[0_0_30px_rgba(255,71,101,0.05)]">
                <div className="w-12 h-12 rounded-full bg-[#FF4765]/10 flex items-center justify-center mb-4 border border-[#FF4765]/20 shadow-[0_0_15px_rgba(255,71,101,0.1)]">
                   <FaArrowTrendUp className="text-xl text-[#FF4765]" />
                </div>
                <h2 className="text-lg font-bold text-white mb-3">How to Capitalize</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{trend.howToCapitalize}</p>
              </div>
            </div>

            {/* Proof Sources */}
            <div className="mb-8">
              <h3 className="flex items-center gap-2 text-sm font-bold text-white mb-4">
                <BsBoxArrowUpRight className="text-gray-400" /> Proof Sources ({trend.proofSources.length})
              </h3>

              <div className="space-y-3">
                {trend.proofSources.map((src, i) => (
                  <a
                    key={i}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-between gap-3
                      p-4 rounded-xl border border-[#FF4765]/30
                      bg-[#FF4765]/5 text-[#FF4765] text-sm truncate
                      hover:bg-[#FF4765]/10 hover:shadow-[0_0_15px_rgba(255,71,101,0.1)] transition-all
                    "
                  >
                    <span className="truncate">{src}</span>
                    <BsBoxArrowUpRight className="w-4 h-4 opacity-80" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer info */}
            <div className="flex items-center gap-2 text-xs text-gray-500 pt-4">
               <FaUser className="text-gray-600" />
               <span>Submitted by {trend.authorHandle}</span>
               <span className="ml-auto">{trend.submittedAt}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
