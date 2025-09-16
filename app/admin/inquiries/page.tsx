"use client";

import { useEffect, useState } from "react";

type Inquiry = {
  id: number;
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string | null;
  created_at?: string;
};

export default function AdminInquiriesPage() {
  const [items, setItems] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/inquiries", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to load");
      setItems(data.data as Inquiry[]);
    } catch (e: any) {
      setError(e?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function remove(id: number) {
    const res = await fetch("/api/admin/inquiries", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    if (!res.ok || !data?.ok) {
      setError(data?.error || "Failed to delete");
      return;
    }
    load();
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Student Inquiries</h1>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-md bg-[#283039] text-white text-sm hover:bg-[#3b4754]">Filter</button>
          <button className="px-4 py-2 rounded-md bg-[#1173d4] text-white text-sm hover:bg-[#1173d4]/90">New Inquiry</button>
        </div>
      </div>
      {error ? <p className="text-red-400 mb-3">{error}</p> : null}
      <div className="overflow-x-auto bg-[#1c2127] rounded-lg border border-[#283039]">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#283039]">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Message</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Received</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#283039]">
            {loading ? (
              <tr><td className="px-6 py-4" colSpan={6}>Loading…</td></tr>
            ) : items.length === 0 ? (
              <tr><td className="px-6 py-4" colSpan={6}>No inquiries</td></tr>
            ) : items.map((row) => (
              <tr key={row.id} className="hover:bg-[#283039]/50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{row.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                  <div>{row.email}</div>
                  <div>{row.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{row.course}</td>
                <td className="px-6 py-4 max-w-xs whitespace-normal text-sm text-gray-400">{row.message ?? '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{row.created_at?.replace('T',' ').slice(0,16) ?? '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={()=>remove(row.id)} className="text-red-400 hover:text-red-300">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
