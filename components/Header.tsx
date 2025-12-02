"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2">
        <Image src="/capitalizenow.png" alt="CapitalizeNow" width={150} height={80} />
          {/* <img src="/capitalizenow.png" className="h-10" alt="CapitalizeNow" /> */}

        </Link>

        {/* Right: Buttons */}
        <div className="flex items-center gap-4">
          <span className="px-4 py-2 text-pink-300 border border-pink-400/40 rounded-full">
            • 100% Free Forever
          </span>

          <Link
            href="/signin"
            className="px-6 py-2 bg-pink-500 rounded-full font-medium hover:bg-pink-600 transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
