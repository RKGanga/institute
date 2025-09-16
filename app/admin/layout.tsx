"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  const nav = [
    { href: "/admin/courses", label: "Courses" },
    { href: "/admin/demo-classes", label: "Demo Classes" },
    { href: "/admin/trainers", label: "Trainers" },
    { href: "/admin/inquiries", label: "Inquiries" },
    { href: "/admin/homepage-analytics", label: "Homepage" },
    { href: "/admin/contact-links", label: "Contact & Social" },
  ];

  async function onLogout() {
    setSigningOut(true);
    try {
      const res = await fetch("/api/admin-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "logout" }),
      });
      await res.json().catch(() => null);
    } finally {
      setSigningOut(false);
      router.replace("/admin-auth/login");
    }
  }

  return (
    <div className="min-h-screen bg-[#111418] text-white">
      <header className="flex items-center justify-between border-b border-[#283039] px-10 py-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1172d4] flex items-center justify-center text-white font-bold text-lg">R</div>
          <h1 className="text-lg font-semibold">Ram Tech</h1>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-3">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-white/80 hover:text-white text-sm px-3 py-2 rounded-md">
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={onLogout}
            disabled={signingOut}
            className="rounded-md bg-[#283039] hover:bg-[#3b4754] px-4 h-9 text-sm"
          >
            {signingOut ? "Signing out…" : "Logout"}
          </button>
        </div>
      </header>
      <main className="px-10 py-6">{children}</main>
    </div>
  );
}
