"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";

/**
 * Renders the public SiteHeader on all public pages, but hides it on
 * admin and admin-auth routes.
 */
export default function AppHeaderController() {
  const pathname = usePathname();
  const hideHeader = pathname?.startsWith("/admin") || pathname?.startsWith("/admin-auth");
  if (hideHeader) return null;
  return <SiteHeader />;
}
