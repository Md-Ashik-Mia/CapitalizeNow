"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer?: string;
  videoUrl?: string; // Optional video
}

const faqData: FAQItem[] = [
  {
    question: "What is Capitalizenow?",
    answer:
      "Capitalizenow is a user-powered trend discovery platform that helps creators spot emerging trends before they go mainstream.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // optional
  },
  {
    question: "How does the boost system work?",
    answer:
      "Every vote increases a trend's confidence score. More boosts = more visibility.",
  },
  {
    question: "Why are some trends locked?",
    answer:
      "Every 5th trend is censored by default and gets unlocked based on community voting.",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    question: "Will this always be free?",
    answer:
      "Yes! The platform is non-profit and will always remain 100% free to users.",
  },
  {
    question: "Who can use Capitalizenow?",
    answer: "Anyone who wants to discover or submit new trends.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mt-24 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-pink-400">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-400 text-center mt-2">
        Tap a question to reveal the answer.
      </p>

      <div className="mt-10 space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-black/20 border border-white/10 rounded-xl p-4 cursor-pointer transition hover:bg-white/5"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <span className="text-gray-300">{item.question}</span>
              <span className="text-pink-400 text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* Answer / Video */}
            {activeIndex === index && (
              <div className="mt-4 text-gray-400 text-sm space-y-4">
                {item.answer && <p>{item.answer}</p>}

                {item.videoUrl && (
                  <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10">
                    <iframe
                      className="w-full h-full"
                      src={item.videoUrl}
                      title="FAQ Video"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
