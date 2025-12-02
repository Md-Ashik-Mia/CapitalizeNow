import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f15] border-t border-white/10 mt-16 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/capitalizenow.png"  alt="CapitalizeNow" />

          </div>

          <p className="text-gray-400 text-sm mb-4">
            Your organic source for trends before they go mainstream.
          </p>

          <p className="text-gray-500 text-sm">
            © 2025 CapitalNow. All rights reserved.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-2">Explore</h3>
        <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <Link href="/">Home</Link>
            <Link href="/trends">Trending Topics</Link>
            <Link href="/submit">Submit a Trend</Link>
        </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
