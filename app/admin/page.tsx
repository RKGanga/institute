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
    <div style={{ maxWidth: 720, margin: "64px auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Admin Dashboard</h1>
      <p style={{ color: "#555", marginBottom: 24 }}>
        You are signed in as admin. Build the admin UI here.
      </p>
      {error ? <p style={{ color: "#b00020" }}>{error}</p> : null}
      <button
        onClick={onLogout}
        disabled={loading}
        style={{
          background: "#ef4444",
          color: "white",
          padding: "10px 16px",
          borderRadius: 6,
          border: 0,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Signing out..." : "Sign out"}
      </button>
    </div>
  );
}
