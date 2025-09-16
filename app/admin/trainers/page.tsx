"use client";

import { useEffect, useState } from "react";

type Trainer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  expertise: string;
  experience: number | null;
  status: "pending" | "approved" | "rejected";
};

export default function AdminTrainersPage() {
  const [items, setItems] = useState<Trainer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/teachers", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to load");
      setItems(data.data as Trainer[]);
    } catch (e: any) {
      setError(e?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function setStatus(id: number, status: Trainer["status"]) {
    setError(null);
    const res = await fetch("/api/admin/teachers", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    const data = await res.json();
    if (!res.ok || !data?.ok) {
      setError(data?.error || "Failed to update status");
      return;
    }
    load();
  }

  return (
    <div className="px-4 md:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Trainer Applications</h1>
      </div>
      {error ? <p className="text-red-400 mb-4">{error}</p> : null}
      <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-900 shadow-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">Expertise</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">Experience</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {loading ? (
                <tr><td className="px-6 py-4" colSpan={7}>Loading…</td></tr>
              ) : items.length === 0 ? (
                <tr><td className="px-6 py-4" colSpan={7}>No applications found</td></tr>
              ) : items.map((t) => (
                <tr key={t.id}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">{t.name}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">{t.email}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">{t.phone}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">{t.expertise}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-400">{t.experience ?? "-"}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold leading-5 ${t.status === 'approved' ? 'bg-green-600/20 text-green-400' : t.status === 'rejected' ? 'bg-red-600/20 text-red-400' : 'bg-gray-600/20 text-gray-300'}`}>{t.status}</span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <button onClick={()=>setStatus(t.id,'approved')} className="rounded-md bg-green-600 px-3 py-1.5 text-xs text-white hover:bg-green-700">Approve</button>
                      <button onClick={()=>setStatus(t.id,'rejected')} className="rounded-md bg-red-600 px-3 py-1.5 text-xs text-white hover:bg-red-700">Reject</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
