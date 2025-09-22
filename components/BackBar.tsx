"use client";

import { useRouter } from "next/navigation";

export default function BackBar({ title = "" }: { title?: string }) {
  const router = useRouter();
  return (
    <div className="sm:hidden sticky top-0 z-40 bg-gray-900/90 backdrop-blur border-b border-gray-800 px-3 py-3 flex items-center gap-3">
      <button
        onClick={() => router.back()}
        aria-label="Go back"
        className="h-10 w-10 inline-flex items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700 text-white"
      >
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      {title ? <p className="font-semibold">{title}</p> : null}
    </div>
  );
}
