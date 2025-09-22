"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onLogout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "logout" }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Logout failed");
      router.replace("/admin-auth/login");
    } catch (e: any) {
      setError(e?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto my-16 px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">Admin Dashboard</h1>
      <p className="text-white/60 mb-6">
        You are signed in as admin. Build the admin UI here.
      </p>
      {error ? <p className="text-red-400 mb-4">{error}</p> : null}
      <button
        onClick={onLogout}
        disabled={loading}
        className="inline-flex items-center rounded-md bg-red-500 hover:bg-red-600 disabled:opacity-60 disabled:cursor-not-allowed text-white px-4 py-2"
      >
        {loading ? "Signing out..." : "Sign out"}
      </button>
    </div>
  );
}
