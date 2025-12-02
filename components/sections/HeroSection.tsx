export default function HeroSection() {
  return (
    <section className="pt-20 text-center max-w-4xl mx-auto z-10 relative">

      <div className="inline-block border border-[var(--pink-border)]
        px-6 py-2 rounded-full text-sm text-[var(--pink-primary)] bg-[rgba(255,71,101,0.1)]
        shadow-[0_0_20px_rgba(255,71,101,0.3)]">
        User-Powered • Non-Profit • 100% Free
      </div>

      <h1 className="text-5xl font-bold text-white mt-6 leading-tight">
        Catch the Wave <br />
        <span className="text-[var(--pink-primary)]">Before It Crashes</span>
      </h1>

      <p className="text-gray-300 mt-4">
        Real trends spotted by real people. No sponsors. No BS. Just organic trend
        intelligence from creators like you.
      </p>

      <div className="flex justify-center gap-8 text-gray-400 text-sm mt-8">
        <p>• No email required</p>
        <p>• No brand spam</p>
        <p>• Community verified</p>
      </div>

    </section>
  );
}
