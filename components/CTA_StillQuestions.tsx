export default function CTA_StillQuestions() {
  return (
    <div className="bg-black/20 border border-white/10 rounded-2xl p-10 mt-16 max-w-5xl mx-auto text-center">
      <h2 className="text-2xl font-semibold text-white mb-4">Still have questions?</h2>
      <p className="text-gray-300 text-sm mb-6">
        Join the community and help shape the future of trend spotting.
      </p>

      <div className="flex justify-center gap-4">
        <button className="px-5 py-2 rounded-full border border-white/20 text-gray-300">Community-Powered</button>
        <button className="px-5 py-2 rounded-full border border-white/20 text-gray-300">100% Free</button>
        <button className="px-5 py-2 rounded-full border border-white/20 text-gray-300">Non-Profit Forever</button>
      </div>
    </div>
  );
}
