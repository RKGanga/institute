"use client";

import { useState } from "react";
import { useToast } from "./ToastProvider";

export default function RequestInfoForm() {
  const { show } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      show("Please enter a valid email.", "error");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/request-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) throw new Error(json?.error || "Failed to submit request");
      show("Thanks! We'll reach out shortly.", "success");
      setEmail("");
    } catch (err: any) {
      show(err?.message || "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-4">
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow h-14 px-6 rounded-full bg-gray-800 border-2 border-gray-700 focus:border-[--primary-color] focus:ring-0 text-white placeholder-gray-500"
        placeholder="Your Email"
        type="email"
        required
        autoComplete="email"
        inputMode="email"
      />
      <button
        disabled={loading}
        className="flex-shrink-0 inline-flex items-center justify-center rounded-full h-14 px-8 bg-[--primary-color] text-white text-base font-bold hover:bg-indigo-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        type="submit"
      >
        {loading ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
