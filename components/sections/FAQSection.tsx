"use client";

import { useState } from "react";
import { RiQuestionLine, RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowTrendUp, FaFire } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
};

const items: FaqItem[] = [
  {
    id: 1,
    question: "What is Capitalizenow?",
    answer:
      "Capitalizenow is a non-profit, community-run platform for spotting emerging trends before they go mainstream.",
    icon: <RiQuestionLine className="w-5 h-5" />,
  },
  {
    id: 2,
    question: "How does the boost system work?",
    answer:
      "When users agree with a trend and boost it with proof links, its confidence score increases and the trend surfaces higher on the page.",
    icon: <FaArrowTrendUp className="w-5 h-5" />,
  },
  {
    id: 3,
    question: "Why are some trends censored/locked?",
    answer:
      "Every few trends on the homepage are intentionally locked to reward active contributors. You can unlock them by earning boosts on your own submissions.",
    icon: <MdOutlineLock className="w-5 h-5" />,
  },
  {
    id: 4,
    question: "Will this always be free?",
    answer:
      "Yes. Capitalizenow is designed as a brand-free, non-profit platform. Donations help cover costs, but access to trends stays free.",
    icon: <FaFire className="w-5 h-5" />,
  },
  {
    id: 5,
    question: "Who can use Capitalizenow?",
    answer:
      "Creators, researchers, founders, and anyone curious about early trends can browse, boost, or submit trends on the platform.",
    icon: <IoMdContacts className="w-5 h-5" />,
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto mt-20">
      <div className="flex flex-col items-center mb-8">
        <button
          className="px-6 py-2 rounded-full border border-[var(--pink-primary)]
          text-xs text-[var(--pink-primary)] bg-[rgba(255,71,101,0.08)]"
        >
          Everything You Need to Know
        </button>
        <h2 className="mt-4 text-3xl font-semibold text-[var(--pink-primary)] text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-sm text-gray-400 text-center">
          Got questions? We've got answers. Learn how to maximize Capitalizenow.
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const isOpen = item.id === openId;
          return (
            <div
              key={item.id}
              className="rounded-2xl bg-[rgba(10,5,18,0.98)]
              border border-[rgba(255,255,255,0.06)] overflow-hidden"
            >
              {/* question row */}
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-sm text-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full
                    bg-[rgba(35,20,35,0.9)] text-[var(--pink-primary)]"
                  >
                    {item.icon}
                  </div>
                  <span>{item.question}</span>
                </div>

                <RiArrowDropDownLine
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* answer */}
              {isOpen && (
                <div className="px-6 pb-5 text-xs md:text-sm text-gray-400 border-t border-[rgba(255,255,255,0.04)]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
