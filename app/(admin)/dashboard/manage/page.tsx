"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBolt, FaCheck, FaChevronLeft, FaChevronRight, FaPen, FaPlus, FaTrash } from "react-icons/fa6";

export default function ManageTrends() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for trends
  const trends = [
    {
      id: 1,
      title: "Sleepy Girl Mocktail",
      description: "A nighttime drink combining tart...",
      category: "Food & Drink",
      boosts: 56,
      confidence: 89,
      status: "Public",
      submittedBy: "@trendspotter_jay",
    },
    {
      id: 2,
      title: "Micro-Crochet Accessories",
      description: "Tiny crochet items for...",
      category: "Fashion",
      boosts: 34,
      confidence: 76,
      status: "Public",
      submittedBy: "@crafty_lisa",
    },
    {
      id: 3,
      title: "Retro Flip Phone Revival",
      description: "Gen Z embracing dumb phones...",
      category: "Tech",
      boosts: 56,
      confidence: 89,
      status: "Public",
      submittedBy: "@tech_guru",
    },
    {
      id: 4,
      title: "Cortisol-Conscious Workouts",
      description: "Low intensity workouts for...",
      category: "Fitness",
      boosts: 41,
      confidence: 84,
      status: "Public",
      submittedBy: "@fit_life",
    },
    {
      id: 5,
      title: "Digital Nomad Villages",
      description: "Remote work communities...",
      category: "Travel",
      boosts: 28,
      confidence: 82,
      status: "Public",
      submittedBy: "@nomad_world",
    },
    {
      id: 6,
      title: "AI-Generated Fashion",
      description: "Clothing designed by AI...",
      category: "Fashion",
      boosts: 56,
      confidence: 89,
      status: "Public",
      submittedBy: "@future_style",
    },
    {
      id: 7,
      title: "Sustainable Packaging",
      description: "Eco-friendly packaging...",
      category: "Lifestyle",
      boosts: 56,
      confidence: 89,
      status: "Public",
      submittedBy: "@eco_warrior",
    },
    {
      id: 8,
      title: "Virtual Reality Concerts",
      description: "Live music in VR...",
      category: "Entertainment",
      boosts: 56,
      confidence: 89,
      status: "Public",
      submittedBy: "@vr_fan",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Manage Trends</h1>
        <div className="flex gap-4">
          <div className="px-4 py-2 rounded-full border border-[#FF4765] text-[#FF4765] text-sm font-medium">
            • Total 8 Trends
          </div>
          <button className="px-6 py-2 rounded-full bg-[#FF4765] text-white text-sm font-bold hover:bg-[#ff5c77] transition-all shadow-[0_0_20px_rgba(255,71,101,0.4)]">
            Logout
          </button>
        </div>
      </div>

      {/* Sub-header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">Manage Trends</h2>
          <p className="text-sm text-gray-500">Edit or remove existing trends</p>
        </div>
        <Link
          href="/dashboard/add"
          className="px-6 py-3 rounded-xl bg-[#FF4765] text-white font-bold hover:bg-[#ff5c77] transition-all shadow-[0_0_20px_rgba(255,71,101,0.4)] flex items-center gap-2"
        >
          <FaPlus className="w-4 h-4" />
          Add New Trends
        </Link>
      </div>

      {/* Main Content Card */}
      <div className="p-6 rounded-2xl bg-[#0F0A14] border border-white/10">
        {/* Search Bar & Title */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">All Trends (8)</h3>
            <p className="text-sm text-gray-500">Search, edit, or delete trends</p>
          </div>
          <div className="relative w-64">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search Trends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0A0212] border border-[#FF4765]/50 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF4765] transition-all"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-sm font-semibold">
                <th className="py-4 px-4">Title</th>
                <th className="py-4 px-4">Category</th>
                <th className="py-4 px-4">Boosts</th>
                <th className="py-4 px-4">Confidence</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4">Submitted By</th>
                <th className="py-4 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {trends.map((trend) => (
                <tr key={trend.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-white">{trend.title}</div>
                    <div className="text-xs text-gray-500 truncate max-w-[200px]">{trend.description}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full border border-[#FF4765] text-[#FF4765] text-xs font-medium">
                      {trend.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-white">
                    <div className="flex items-center gap-1">
                      <FaBolt className="text-[#FFD700] w-3 h-3" />
                      {trend.boosts} boosts
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-white">{trend.confidence}%</span>
                      <div className="w-16 h-1.5 rounded-full bg-gray-700 overflow-hidden">
                        <div
                          className="h-full bg-[#FF4765]"
                          style={{ width: `${trend.confidence}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full border border-[#12D18E] text-[#12D18E] text-xs font-medium flex items-center gap-1 w-fit">
                      <FaCheck className="w-3 h-3" /> {trend.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-400">{trend.submittedBy}</td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 rounded-lg border border-[#4A9EFF]/30 text-[#4A9EFF] hover:bg-[#4A9EFF]/10 transition-colors">
                        <FaPen className="w-3 h-3" />
                      </button>
                      <button className="p-2 rounded-lg border border-[#FF4765]/30 text-[#FF4765] hover:bg-[#FF4765]/10 transition-colors">
                        <FaTrash className="w-3 h-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-2 mt-6">
          <button className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all">
            <FaChevronLeft className="w-3 h-3" />
          </button>
          <button className="w-8 h-8 rounded-lg bg-[#FF4765] text-white font-bold text-sm flex items-center justify-center shadow-[0_0_10px_rgba(255,71,101,0.4)]">
            1
          </button>
          <button className="w-8 h-8 rounded-lg border border-white/10 text-gray-400 font-medium text-sm flex items-center justify-center hover:text-white hover:border-white/30 transition-all">
            2
          </button>
          <button className="w-8 h-8 rounded-lg border border-white/10 text-gray-400 font-medium text-sm flex items-center justify-center hover:text-white hover:border-white/30 transition-all">
            3
          </button>
          <span className="text-gray-500 text-sm">...</span>
          <button className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all">
            <FaChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
