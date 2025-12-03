"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, password, rememberMe });
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-white font-sans">
      <div className="w-[960px] max-w-full">
        {/* Main Card */}
        <div className="relative rounded-3xl border border-white/30 bg-[#0A0212]/95 backdrop-blur-xl p-12 shadow-[0_0_60px_rgba(255,255,255,0.15),0_0_100px_rgba(255,255,255,0.08),0_0_140px_rgba(0,0,0,0.5)] min-h-[858px] flex flex-col justify-center">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-3">Join CapitalizeNow</h1>
            <p className="text-gray-400 text-base">
              100% free. No email required. Just a username and password.
            </p>
          </div>

          {/* Features Box */}
          <div className="mb-8 p-5 rounded-2xl bg-[#0F0A14] border border-white/10">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-base">
                <FaCheckCircle className="w-5 h-5 text-[#FF4765]" />
                <span className="text-gray-300">No email collection</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaCheckCircle className="w-4 h-4 text-[#FF4765]" />
                <span className="text-gray-300">100% free forever - non-profit</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaCheckCircle className="w-4 h-4 text-[#FF4765]" />
                <span className="text-gray-300">Community-run platform</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaCheckCircle className="w-4 h-4 text-[#FF4765]" />
                <span className="text-gray-300">Unlock trends by contributing</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-base font-semibold mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF4765]/50 focus:ring-2 focus:ring-[#FF4765]/20 transition-all"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FF4765]/50 focus:ring-2 focus:ring-[#FF4765]/20 transition-all"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-black/40 text-[#FF4765] focus:ring-[#FF4765]/20"
                />
                <span className="text-base text-gray-300">Remember Me</span>
              </label>
              <Link href="/forgot-password" className="text-base text-[#FF4765] hover:text-[#ff5c77] transition-colors">
                Forget Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#FF4765] text-white font-bold text-lg hover:bg-[#ff5c77] transition-all shadow-[0_0_40px_rgba(255,71,101,0.6),0_0_60px_rgba(255,71,101,0.3)]"
            >
              Sign In
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-base text-gray-400">
              Don't have an account?{" "}
              <Link href="/signup" className="text-[#FF4765] font-semibold hover:text-[#ff5c77] transition-colors">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
