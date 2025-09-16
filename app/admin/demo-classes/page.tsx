"use client";

import { useEffect, useState } from "react";

type DemoClass = {
  id: number;
  name: string;
  faculty: string | null;
  start_date: string | null;
  timings: string | null;
  description: string | null;
  is_published: boolean;
};

export default function AdminDemoClassesPage() {
  const [items, setItems] = useState<DemoClass[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    faculty: "",
    start_date: "",
    timings: "",
    description: "",
    is_published: false,
  });

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/demo-classes", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to load");
      setItems(data.data as DemoClass[]);
    } catch (e: any) {
      setError(e?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function createItem(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const payload = {
      ...form,
      faculty: form.faculty || null,
      start_date: form.start_date || null,
      timings: form.timings || null,
      description: form.description || null,
    };
    const res = await fetch("/api/admin/demo-classes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok || !data?.ok) {
      setError(data?.error || "Failed to create");
      return;
    }
    setForm({ name: "", faculty: "", start_date: "", timings: "", description: "", is_published: false });
    load();
  }

  async function togglePublish(row: DemoClass) {
    const res = await fetch("/api/admin/demo-classes", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: row.id, is_published: !row.is_published }),
    });
    const data = await res.json();
    if (!res.ok || !data?.ok) {
      setError(data?.error || "Failed to update");
      return;
    }
    load();
  }

  async function remove(id: number) {
    const res = await fetch("/api/admin/demo-classes", {
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
    <div className="flex-1 p-4 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Demo Classes</h1>
        <button className="hidden md:flex items-center gap-2 rounded-md h-10 px-4 bg-[#1172d4] text-white">
          <span className="material-symbols-outlined">add</span>
          <span>Add Demo Class</span>
        </button>
      </div>

      <div className="bg-[#1c2127] rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-6">Add/Edit Demo Class</h2>
        {error ? <p className="text-red-400 mb-4">{error}</p> : null}
        <form onSubmit={createItem} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="flex flex-col">
            <p className="text-sm pb-2">Name</p>
            <input className="form-input rounded-md bg-[#283039] h-10 p-3" value={form.name} onChange={(e)=>setForm(f=>({...f,name:e.target.value}))} required />
          </label>
          <label className="flex flex-col">
            <p className="text-sm pb-2">Faculty</p>
            <input className="form-input rounded-md bg-[#283039] h-10 p-3" value={form.faculty} onChange={(e)=>setForm(f=>({...f,faculty:e.target.value}))} />
          </label>
          <label className="flex flex-col">
            <p className="text-sm pb-2">Start Date</p>
            <input type="date" className="form-input rounded-md bg-[#283039] h-10 p-3" value={form.start_date} onChange={(e)=>setForm(f=>({...f,start_date:e.target.value}))} />
          </label>
          <label className="flex flex-col">
            <p className="text-sm pb-2">Timings</p>
            <input className="form-input rounded-md bg-[#283039] h-10 p-3" value={form.timings} onChange={(e)=>setForm(f=>({...f,timings:e.target.value}))} />
          </label>
          <label className="flex flex-col md:col-span-2">
            <p className="text-sm pb-2">Description</p>
            <textarea className="form-input rounded-md bg-[#283039] min-h-24 p-3" value={form.description} onChange={(e)=>setForm(f=>({...f,description:e.target.value}))} />
          </label>
          <div className="md:col-span-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <p className="text-sm">Publish</p>
              <label className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-[#283039] p-0.5">
                <input type="checkbox" className="absolute inset-0 opacity-0" checked={form.is_published} onChange={(e)=>setForm(f=>({...f,is_published:e.target.checked}))} />
                <div className={`h-5 w-5 rounded-full bg-white transition-transform ${form.is_published?"translate-x-5":"translate-x-0"}`}></div>
              </label>
            </div>
            <button className="h-10 px-6 rounded-md bg-[#1172d4] hover:bg-[#1172d4]/90">Save</button>
          </div>
        </form>
      </div>

      <div className="bg-[#1c2127] rounded-lg">
        <h2 className="text-xl font-bold p-6">Existing Demo Classes</h2>
        <div className="px-6 pb-6">
          <div className="overflow-x-auto rounded-md">
            <table className="w-full text-left">
              <thead className="bg-[#283039]">
                <tr>
                  <th className="px-4 py-3 text-left text-xs uppercase">Name</th>
                  <th className="px-4 py-3 text-left text-xs uppercase">Faculty</th>
                  <th className="px-4 py-3 text-left text-xs uppercase">Start Date</th>
                  <th className="px-4 py-3 text-left text-xs uppercase">Timings</th>
                  <th className="px-4 py-3 text-center text-xs uppercase">Status</th>
                  <th className="px-4 py-3 text-right text-xs uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#283039]">
                {loading ? (
                  <tr><td className="px-4 py-6" colSpan={6}>Loading…</td></tr>
                ) : items.length === 0 ? (
                  <tr><td className="px-4 py-6" colSpan={6}>No items</td></tr>
                ) : items.map((r)=> (
                  <tr key={r.id} className="hover:bg-[#283039]/50">
                    <td className="h-[60px] px-4 py-2">{r.name}</td>
                    <td className="h-[60px] px-4 py-2 text-white/70">{r.faculty ?? '-'}</td>
                    <td className="h-[60px] px-4 py-2 text-white/70">{r.start_date ?? '-'}</td>
                    <td className="h-[60px] px-4 py-2 text-white/70">{r.timings ?? '-'}</td>
                    <td className="h-[60px] px-4 py-2 text-sm text-center">{r.is_published? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/20 text-green-400">Published</span>:<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">Draft</span>}</td>
                    <td className="h-[60px] px-4 py-2 text-sm font-bold text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={()=>togglePublish(r)} className="p-1 text-gray-400 hover:text-white">{r.is_published?"Unpublish":"Publish"}</button>
                        <button onClick={()=>remove(r.id)} className="p-1 text-gray-400 hover:text-red-500">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
