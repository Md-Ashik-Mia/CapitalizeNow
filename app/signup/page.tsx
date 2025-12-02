"use client";
import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match!");
      return;
    }
  };

  return (
    <div className="flex justify-center items-start w-full min-h-screen px-4 pb-40">

      <div className="w-full max-w-xl mt-32 bg-[#0d0b0f]/70 border border-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-xl">

        {/* Title */}
        <h1 className="text-3xl font-semibold text-white">Join CapitalizeNow</h1>
        <p className="text-gray-400 mt-1">
          100% free. No email required. Just a username and password.
        </p>

        {/* Features Box */}
        <div className="bg-black/40 mt-6 p-5 rounded-xl border border-white/5">
          <div className="space-y-3 text-gray-300 text-sm">
            <p>🔴 No email collection</p>
            <p>🔴 100% free forever - non-profit</p>
            <p>🔴 Community-run platform</p>
            <p>🔴 Unlock trends by contributing</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          {/* Username */}
          <div>
            <label className="text-gray-300 text-sm">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 text-white outline-none focus:border-pink-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 text-white outline-none focus:border-pink-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-300 text-sm">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-md bg-black/40 border border-white/10 text-white outline-none focus:border-pink-500"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          {/* Button */}
          <button
            className="w-full py-3 rounded-lg text-white font-medium bg-gradient-to-r from-pink-500 to-pink-400 hover:opacity-90 transition"
          >
            Sign up
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link href="/signin" className="text-pink-400 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
