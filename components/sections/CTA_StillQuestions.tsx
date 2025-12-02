export default function CTA_StillQuestions() {
  return (
    <section className="max-w-5xl mx-auto mt-24
      p-10 bg-[rgba(20,0,10,0.4)] rounded-2xl backdrop-blur-xl
      border border-[rgba(255,255,255,0.08)] text-center">

      <h3 className="text-white text-2xl font-semibold">Still have questions?</h3>
      <p className="text-gray-400 text-sm mt-2">
        This is a community-driven platform. Join the conversation and help shape the future of trend-spotting.
      </p>

      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        <button className="px-5 py-2 rounded-full border border-[rgba(255,255,255,0.2)] text-gray-300">
          Community-Powered
        </button>
        <button className="px-5 py-2 rounded-full border border-[rgba(255,255,255,0.2)] text-gray-300">
          100% Free
        </button>
        <button className="px-5 py-2 rounded-full border border-[rgba(255,255,255,0.2)] text-gray-300">
          Non-Profit Forever
        </button>
      </div>

    </section>
  );
}
