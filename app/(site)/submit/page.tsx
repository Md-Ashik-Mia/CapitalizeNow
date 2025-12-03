"use client";

import Link from "next/link";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const categories = [
  "Fashion",
  "Food & Drinks",
  "Tech",
  "Lifestyle",
  "Beauty",
  "Fitness",
  "Entertainment",
  "Gaming",
  "Travel",
  "Others",
];

export default function SubmitTrendPage() {
  const [trendName, setTrendName] = useState("");
  const [whyWillBlowUp, setWhyWillBlowUp] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [proofLinks, setProofLinks] = useState(["", ""]);

  const addAnotherLink = () => {
    setProofLinks([...proofLinks, ""]);
  };

  const updateLink = (index: number, value: string) => {
    const newLinks = [...proofLinks];
    newLinks[index] = value;
    setProofLinks(newLinks);
  };

  const removeLink = (index: number) => {
    if (proofLinks.length > 2) {
      setProofLinks(proofLinks.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      trendName,
      whyWillBlowUp,
      selectedCategory,
      proofLinks: proofLinks.filter((link) => link.trim() !== ""),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-white font-sans">
      <div className="w-full max-w-2xl relative">
        {/* Main Form Card */}
        <div className="relative rounded-3xl border border-white/20 bg-[#0A0212]/95 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.05),0_0_80px_rgba(0,0,0,0.5)]">
          {/* Close Button */}
          <Link
            href="/"
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#FF4765] text-white hover:bg-[#ff5c77] transition-all shadow-[0_0_15px_rgba(255,71,101,0.4)]"
          >
            <IoClose className="w-6 h-6" />
          </Link>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Submit a Trend</h1>
            <p className="text-gray-400 text-sm">
              Spot something before it goes viral? Share it with the community.
            </p>
          </div>

          {/* Warning Box */}
          <div className="mb-6 p-4 rounded-2xl bg-[#FF4765]/10 border border-[#FF4765]/30 flex items-start gap-3">
            <FiAlertCircle className="w-5 h-5 text-[#FF4765] mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-1">No brands allowed</h3>
              <p className="text-sm text-gray-300">
                This is for organic trends only. Established companies and obvious brand promotions
                will be removed instantly to prevent spam and false hype.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Trend Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">Trend Name</label>
              <input
                type="text"
                value={trendName}
                onChange={(e) => setTrendName(e.target.value)}
                placeholder="e.g, cottage, cheese ice cream"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4A9EFF]/50 focus:ring-2 focus:ring-[#4A9EFF]/20 transition-all"
                required
              />
            </div>

            {/* Why will this blow up */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold">Why will this blow up?</label>
                <span className="text-xs text-gray-500">Minimum 200 words</span>
              </div>
              <textarea
                value={whyWillBlowUp}
                onChange={(e) => setWhyWillBlowUp(e.target.value)}
                placeholder="Explain why you think this trend about to go mainstream..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4A9EFF]/50 focus:ring-2 focus:ring-[#4A9EFF]/20 transition-all resize-none"
                required
              />
              <div className="text-right mt-1">
                <span className="text-xs text-gray-500">
                  {whyWillBlowUp.split(" ").filter((w) => w).length}/1000 Characters
                </span>
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold mb-3">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-[#FF4765] text-white border border-[#FF4765] shadow-[0_0_15px_rgba(255,71,101,0.4)]"
                        : "bg-black/40 text-gray-300 border border-white/10 hover:border-white/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Proof Links */}
            <div>
              <label className="block text-sm font-semibold mb-2">Proof Links</label>
              <p className="text-xs text-gray-400 mb-3">
                Provide at least 2 links from TikTok, Instagram, Reddit, YouTube, or X
              </p>
              <div className="space-y-3">
                {proofLinks.map((link, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="url"
                      value={link}
                      onChange={(e) => updateLink(index, e.target.value)}
                      placeholder={`Link ${index + 1} (e.g, https://tiktok.com/)...`}
                      className="flex-1 px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4A9EFF]/50 focus:ring-2 focus:ring-[#4A9EFF]/20 transition-all"
                      required={index < 2}
                    />
                    {proofLinks.length > 2 && (
                      <button
                        type="button"
                        onClick={() => removeLink(index)}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all"
                      >
                        <IoClose className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Add Another Link Button */}
              <button
                type="button"
                onClick={addAnotherLink}
                className="mt-3 w-full py-3 rounded-xl border border-dashed border-[#FF4765]/50 text-[#FF4765] font-medium hover:bg-[#FF4765]/5 transition-all"
              >
                + Add another link
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#FF4765] text-white font-bold text-lg hover:bg-[#ff5c77] transition-all shadow-[0_0_30px_rgba(255,71,101,0.4)] flex items-center justify-center gap-2"
            >
              <HiOutlinePaperAirplane className="w-5 h-5" />
              Submit Trend
            </button>

            {/* Cancel Button */}
            <Link
              href="/"
              className="block w-full py-3 text-center text-gray-400 hover:text-white transition-all"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
