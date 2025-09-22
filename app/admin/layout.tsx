"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstMenuItemRef = useRef<HTMLAnchorElement | null>(null);

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

  // Handle ESC to close, focus management, and lock body scroll
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => firstMenuItemRef.current?.focus(), 0);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) menuButtonRef.current?.focus();
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-[#111418] text-white">
      <header className={`sticky top-0 ${menuOpen ? 'z-[9999]' : 'z-40'} flex items-center justify-between border-b border-[#283039] px-4 sm:px-6 md:px-10 py-3 bg-[#111418]/90 backdrop-blur`}>
        <div className="flex items-center gap-3">
          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-[#283039] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="admin-mobile-menu"
            onClick={() => setMenuOpen(v => !v)}
            ref={menuButtonRef}
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
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
        {/* Mobile drawer */}
        {menuOpen && (
          <div id="admin-mobile-menu" className="fixed inset-0 z-[10000] md:hidden" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
            <div className="absolute left-0 top-0 h-dvh w-full md:w-80 md:max-w-none bg-[#0f1419] border-r border-[#283039] p-4 overflow-y-auto pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Admin Menu</h3>
                <button
                  className="h-10 w-10 grid place-items-center rounded-md hover:bg-[#283039]"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                >
                  ✕
                </button>
              </div>
              <nav className="flex flex-col">
                {nav.map((n, i) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    ref={i === 0 ? firstMenuItemRef : undefined}
                    className="text-white/90 hover:text-white px-3 py-2 rounded-md"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4">
                <button
                  onClick={() => { setMenuOpen(false); onLogout(); }}
                  disabled={signingOut}
                  className="w-full rounded-md bg-[#283039] hover:bg-[#3b4754] px-4 h-10 text-sm"
                >
                  {signingOut ? "Signing out…" : "Logout"}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="px-4 sm:px-6 md:px-10 py-6">{children}</main>
    </div>
  );
}
