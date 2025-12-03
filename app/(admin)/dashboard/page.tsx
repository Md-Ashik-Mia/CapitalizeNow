"use client";

import Link from "next/link";
import { FaArrowTrendUp, FaBolt, FaEye, FaLock, FaPen, FaTrash } from "react-icons/fa6";

export default function DashboardOverview() {
  // Mock data for stats
  const stats = [
    {
      title: "Total Trends",
      value: "08",
      subtext: "active submissions",
      icon: <FaArrowTrendUp className="text-[#12D18E]" />,
      color: "border-[#12D18E]/20",
      textColor: "text-[#12D18E]",
    },
    {
      title: "Public Trends",
      value: "08",
      subtext: "visible to users",
      icon: <FaEye className="text-[#FF4765]" />,
      color: "border-[#FF4765]/20",
      textColor: "text-[#FF4765]",
    },
    {
      title: "Locked Trends",
      value: "08",
      subtext: "requires unlock",
      icon: <FaLock className="text-[#4A9EFF]" />,
      color: "border-[#4A9EFF]/20",
      textColor: "text-[#4A9EFF]",
    },
    {
      title: "Total Boosts",
      value: "286",
      subtext: "Community engagement",
      icon: <FaBolt className="text-[#FFD700]" />,
      color: "border-[#FFD700]/20",
      textColor: "text-[#FFD700]",
    },
    {
      title: "Avg Confidence",
      value: "80%",
      subtext: "Overall quality",
      icon: <FaArrowTrendUp className="text-[#00C2FF]" />,
      color: "border-[#00C2FF]/20",
      textColor: "text-[#00C2FF]",
    },
    {
      title: "High Confidence",
      value: "04",
      subtext: "80%+ confidence",
      icon: <FaArrowTrendUp className="text-[#A020F0]" />,
      color: "border-[#A020F0]/20",
      textColor: "text-[#A020F0]",
    },
  ];

  // Mock data for recent trends
  const recentTrends = [
    {
      id: 1,
      title: "Sleepy Girl Mocktail",
      category: "Food & Drink",
      boosts: 47,
      confidence: 89,
    },
    {
      id: 2,
      title: "Micro-Crochet Accessories",
      category: "Fashion",
      boosts: 34,
      confidence: 76,
    },
    {
      id: 3,
      title: "Locked Trend Example",
      category: "Beauty",
      boosts: 28,
      confidence: 82,
      isLocked: true,
    },
    {
      id: 4,
      title: "Retro Flip Phone Revival",
      category: "Tech",
      boosts: 56,
      confidence: 91,
    },
    {
      id: 5,
      title: "Cortisol-Conscious Workouts",
      category: "Fitness",
      boosts: 41,
      confidence: 84,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
        <div className="flex gap-4">
          <div className="px-4 py-2 rounded-full border border-[#FF4765] text-[#FF4765] text-sm font-medium">
            • Total 8 Trends
          </div>
          <button className="px-6 py-2 rounded-full bg-[#FF4765] text-white text-sm font-bold hover:bg-[#ff5c77] transition-all shadow-[0_0_20px_rgba(255,71,101,0.4)]">
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Stats Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl bg-[#0F0A14] border ${stat.color} flex flex-col justify-between h-32`}
            >
              <div className="flex items-center gap-2 mb-2">
                {stat.icon}
                <span className={`text-sm font-medium ${stat.textColor}`}>
                  {stat.title}
                </span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.subtext}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Quick Actions */}
        <div className="lg:col-span-1">
          <div className="p-6 rounded-2xl bg-[#0F0A14] border border-white/10 h-full flex flex-col justify-center items-center text-center">
            <h3 className="text-lg font-bold text-white mb-1">Quick Actions</h3>
            <p className="text-sm text-gray-500 mb-6">
              Manage trend efficiently
            </p>
            <div className="w-full space-y-3">
              <Link
                href="/dashboard/add"
                className="block w-full py-3 rounded-xl bg-[#FF4765] text-white font-bold hover:bg-[#ff5c77] transition-all shadow-[0_0_20px_rgba(255,71,101,0.4)]"
              >
                + Add New Trends
              </Link>
              <Link
                href="/dashboard/manage"
                className="block w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all"
              >
                ↗ Manage all trends
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Trends Section */}
      <div className="p-6 rounded-2xl bg-[#0F0A14] border border-white/10">
        <h2 className="text-lg font-bold text-white mb-1">Recent Trends</h2>
        <p className="text-sm text-gray-500 mb-6">Latest submissions</p>

        <div className="space-y-3">
          {recentTrends.map((trend) => (
            <div
              key={trend.id}
              className="p-4 rounded-xl bg-[#0A0212] border border-white/5 flex items-center justify-between group hover:border-white/10 transition-all"
            >
              <div className="flex items-center gap-4">
                {trend.isLocked ? (
                  <div className="w-48 h-6 bg-white/10 rounded animate-pulse" />
                ) : (
                  <div>
                    <h3 className="text-white font-semibold">{trend.title}</h3>
                    <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                      <span>{trend.category}</span>
                      <span>•</span>
                      <span>{trend.boosts} boosts</span>
                      <span>•</span>
                      <span>{trend.confidence}% confidence</span>
                    </div>
                  </div>
                )}
                {trend.isLocked && (
                  <span className="px-2 py-0.5 rounded-full border border-[#FF4765] text-[#FF4765] text-[10px] uppercase font-bold">
                    locked
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-lg border border-[#4A9EFF]/30 text-[#4A9EFF] hover:bg-[#4A9EFF]/10">
                  <FaPen className="w-3 h-3" />
                </button>
                <button className="p-2 rounded-lg border border-[#FF4765]/30 text-[#FF4765] hover:bg-[#FF4765]/10">
                  <FaTrash className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
