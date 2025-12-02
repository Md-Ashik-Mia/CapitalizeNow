"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/capitalizenow.png" alt="CapitalizeNow" width={150} height={80} />
        </Link>

        {/* Right: Buttons */}
        <div className="flex items-center gap-4">
          <span className="px-5 py-2 text-white text-sm font-medium border border-[#FF4765] rounded-full bg-[#FF4765]/10">
            • 100% Free Forever
          </span>

          <Link
            href="/signin"
            className="px-6 py-2 bg-[#FF4765] text-white rounded-full text-sm font-semibold hover:bg-[#ff5c77] transition-all shadow-[0_0_20px_rgba(255,71,101,0.3)]"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
