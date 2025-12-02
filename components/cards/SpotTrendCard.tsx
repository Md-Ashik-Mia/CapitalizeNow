import GlassCard from "../ui/GlassCard";

export default function SpotTrendCard() {
  return (
    <GlassCard className="flex flex-col justify-center items-center text-center p-10 min-h-[260px] relative">

      <div className="w-20 h-20 rounded-full bg-[var(--pink-border)] border border-[var(--pink-primary)]
          flex items-center justify-center text-white text-5xl shadow-[0px_0px_20px_rgba(255,71,101,0.5)]">
        +
      </div>

      <h3 className="mt-6 font-semibold text-white text-xl">Spot a Trend?</h3>
      <p className="text-gray-400 text-sm mt-2">What you’re seeing before it goes mainstream</p>

      <button className="mt-6 bg-[var(--pink-primary)] text-white px-5 py-3 rounded-full font-medium
            shadow-[0px_0px_25px_rgba(255,71,101,0.6)] hover:opacity-90">
        Click to Submit
      </button>

    </GlassCard>
  );
}
