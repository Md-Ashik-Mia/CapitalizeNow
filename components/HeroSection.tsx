export default function HeroSection() {
  return (
    <section className="pt-10 pb-20 text-center max-w-4xl mx-auto">
      <div className="inline-block border border-pink-400/40 px-6 py-2 rounded-full text-sm text-pink-300 mb-6">
        User-Powered • Non-Profit • 100% Free
      </div>

      <h1 className="text-5xl font-bold text-white leading-tight">
        Catch the Wave <br />
        <span className="text-pink-500">Before It Crashes</span>
      </h1>

      <p className="text-gray-300 mt-5">
        Real trends spotted by real people. No sponsors. No BS.
        Just organic trend intelligence from creators like you.
      </p>

      {/* Small bullet features */}
      <div className="flex justify-center gap-8 text-gray-400 text-sm mt-8">
        <p>• No email required</p>
        <p>• No brand spam</p>
        <p>• Community verified</p>
      </div>
    </section>
  );
}
