"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", userId, password }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Login failed");
      router.replace("/admin");
    } catch (err: any) {
      setError(err?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen" style={{ fontFamily: '"Spline Sans", "Noto Sans", sans-serif' }}>
      <div className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-10 py-4 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-[#f9f506] flex items-center justify-center text-gray-900">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4.22 5.22a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM15.78 5.22a1 1 0 00-1.414-1.414l-.707.707a1 1 0 101.414 1.414l.707-.707zM3 10a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-6 5a1 1 0 00-1 1v1a1 1 0 102 0v-1a1 1 0 00-1-1zm-3.78 1.22a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM14.364 14.364a1 1 0 001.414-1.414l.707.707a1 1 0 00-1.414 1.414l-.707-.707z" fillRule="evenodd"></path>
                <path d="M10 5a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 100-6 3 3 0 000 6z"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold">Ram Tech Solutions</h2>
          </div>
        </header>

        <div className="flex flex-1 justify-center items-center py-5">
          <div className="bg-gray-800 rounded-2xl shadow-lg w-full max-w-md p-8">
            <h2 className="text-3xl font-bold text-center pb-6">Admin Login</h2>

            {error ? (
              <div className="flex items-center text-red-500 text-sm font-medium mb-4">
                <span className="material-symbols-outlined mr-2">error</span>
                <span>{error}</span>
              </div>
            ) : null}

            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label className="sr-only" htmlFor="user-id">User ID</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">person</span>
                  <input
                    id="user-id"
                    placeholder="User ID"
                    className="form-input w-full rounded-full text-white focus:outline-none focus:ring-2 focus:ring-[#f9f506] focus:border-transparent border-gray-700 bg-gray-900 h-14 pl-12 pr-4"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="password">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">lock</span>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="form-input w-full rounded-full text-white focus:outline-none focus:ring-2 focus:ring-[#f9f506] focus:border-transparent border-gray-700 bg-gray-900 h-14 pl-12 pr-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-full h-12 px-4 bg-[#f9f506] text-gray-900 font-bold hover:brightness-90 transition-all"
                >
                  {loading ? "Signing in..." : "Login"}
                </button>
              </div>
              <div className="text-center">
                <a href="#" className="text-gray-400 hover:text-[#f9f506] text-sm underline">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}