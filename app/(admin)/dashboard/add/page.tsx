"use client";

import Link from "next/link";
import { useState } from "react";
import { FaPaperPlane, FaPlus, FaTimes } from "react-icons/fa";

export default function AddNewTrend() {
  const [links, setLinks] = useState(["", ""]);

  const addLink = () => {
    setLinks([...links, ""]);
  };

  const removeLink = (index: number) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
  };

  const updateLink = (index: number, value: string) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Add New Trend</h1>
        <div className="flex gap-4">
          <div className="px-4 py-2 rounded-full border border-[#FF4765] text-[#FF4765] text-sm font-medium">
            • Total 8 Trends
          </div>
          <button className="px-6 py-2 rounded-full bg-[#FF4765] text-white text-sm font-bold hover:bg-[#ff5c77] transition-all shadow-[0_0_20px_rgba(255,71,101,0.4)]">
            Logout
          </button>
        </div>
      </div>

      {/* Form Card */}
      <div className="p-8 rounded-2xl bg-[#0F0A14] border border-white/10">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-white">Add New Trend</h2>
          <p className="text-sm text-gray-500">Create a new trend with custom settings</p>
        </div>

        <form className="space-y-6">
          {/* Trend Title */}
          <div>
            <label className="block text-sm font-bold text-white mb-2">Trend Title *</label>
            <input
              type="text"
              placeholder="e.g, cottage, cheese ice cream"
              className="w-full px-4 py-3 rounded-xl bg-[#0A0212] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF4765] transition-all"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-bold text-white mb-2">Description</label>
            <textarea
              rows={4}
              placeholder="Why will this blow up..."
              className="w-full px-4 py-3 rounded-xl bg-[#0A0212] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF4765] transition-all resize-none"
            />
            <div className="text-right text-xs text-gray-500 mt-1">0/1000 Characters</div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-white mb-2">Boost Count</label>
              <input
                type="number"
                placeholder="Set custom popularity"
                className="w-full px-4 py-3 rounded-xl bg-[#0A0212] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF4765] transition-all"
              />
              <div className="text-xs text-gray-500 mt-1">Set custom popularity</div>
            </div>
            <div>
              <label className="block text-sm font-bold text-white mb-2">Confidence Score (%)</label>
              <input
                type="number"
                placeholder="0 - 100%"
                className="w-full px-4 py-3 rounded-xl bg-[#0A0212] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF4765] transition-all"
              />
              <div className="text-xs text-gray-500 mt-1">0 - 100%</div>
            </div>
          </div>

          {/* Submitted By */}
          <div>
            <label className="block text-sm font-bold text-white mb-2">Submitted by</label>
            <input
              type="text"
              defaultValue="admin"
              className="w-full px-4 py-3 rounded-xl bg-[#0A0212] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF4765] transition-all"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-bold text-white mb-2">Category</label>
            <div className="flex flex-wrap gap-2">
              {["Fashion", "Food & Drinks", "Tech", "Lifestyle", "Beauty", "Fitness", "Entertainment", "Gaming", "Travel", "Others"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                    cat === "Fashion"
                      ? "bg-[#FF4765]/10 border-[#FF4765] text-[#FF4765]"
                      : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Time to Capitalize */}
          <div>
            <label className="block text-sm font-bold text-white mb-2">Time to Capitalize</label>
            <div className="flex flex-wrap gap-2">
              {["3 - 7 days", "7 - 14 days", "10 - 14 days", "10 - 17 days", "14 - 21 days", "21+ days"].map((time) => (
                <button
                  key={time}
                  type="button"
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                    time === "3 - 7 days"
                      ? "bg-[#FF4765]/10 border-[#FF4765] text-[#FF4765]"
                      : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Proof Links */}
          <div>
            <label className="block text-sm font-bold text-white mb-2">Proof Links</label>
            <p className="text-xs text-gray-500 mb-3">Provide at least 2 links from TikTok, Instagram, Reddit, YouTube, or X</p>
            <div className="space-y-3">
              {links.map((link, index) => (
                <div key={index} className="relative">
                  <input
                    type="text"
                    value={link}
                    onChange={(e) => updateLink(index, e.target.value)}
                    placeholder={`Link ${index + 1} (e.g, https://tiktok.com/)...`}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0212] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF4765] transition-all pr-10"
                  />
                  {links.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeLink(index)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full bg-[#FF4765]/20 text-[#FF4765] hover:bg-[#FF4765] hover:text-white transition-all"
                    >
                      <FaTimes className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addLink}
              className="w-full mt-3 py-3 rounded-xl border border-dashed border-[#FF4765]/50 text-[#FF4765] text-sm font-bold hover:bg-[#FF4765]/10 transition-all flex items-center justify-center gap-2"
            >
              <FaPlus className="w-3 h-3" /> Add another link
            </button>
          </div>

          {/* How to Capitalize */}
          <div>
            <label className="block text-sm font-bold text-white mb-2">How to Capitalize (Optional)</label>
            <textarea
              rows={3}
              placeholder="Explain how user can capitalize on this trend..."
              className="w-full px-4 py-3 rounded-xl bg-[#0A0212] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF4765] transition-all resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Link
              href="/dashboard"
              className="flex-1 py-3 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all text-center"
            >
              ✕ Cancel
            </Link>
            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-[#FF4765] text-white font-bold hover:bg-[#ff5c77] transition-all shadow-[0_0_20px_rgba(255,71,101,0.4)] flex items-center justify-center gap-2"
            >
              <FaPaperPlane className="w-4 h-4" /> Sumit Trend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
