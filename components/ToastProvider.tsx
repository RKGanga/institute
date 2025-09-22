"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type ToastType = "success" | "error" | "info";

type Toast = {
  id: number;
  type: ToastType;
  message: string;
  duration?: number;
};

type ToastContextValue = {
  show: (message: string, type?: ToastType, durationMs?: number) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const show = useCallback((message: string, type: ToastType = "info", durationMs = 3000) => {
    setToasts((t) => [...t, { id: Date.now() + Math.random(), type, message, duration: durationMs }]);
  }, []);

  useEffect(() => {
    if (toasts.length === 0) return;
    const timers = toasts.map((t) =>
      setTimeout(() => {
        setToasts((all) => all.filter((x) => x.id !== t.id));
      }, t.duration ?? 3000)
    );
    return () => timers.forEach(clearTimeout);
  }, [toasts]);

  const value = useMemo(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* Container */}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[11000] mx-auto flex w-full max-w-[92vw] flex-col gap-3 sm:inset-auto sm:right-4 sm:top-4 sm:bottom-auto sm:max-w-sm">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={
              "pointer-events-auto rounded-lg border px-4 py-3 shadow-lg backdrop-blur " +
              (t.type === "success"
                ? "border-green-500/30 bg-green-600/20 text-green-100"
                : t.type === "error"
                ? "border-red-500/30 bg-red-600/20 text-red-100"
                : "border-blue-500/30 bg-blue-600/20 text-blue-100")
            }
            role="status"
            aria-live="polite"
          >
            <span className="text-sm font-medium">{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
