"use client";

import { useEffect, useState } from "react";

type Course = {
  id: number;
  name: string;
  faculty_name: string | null;
  start_date: string | null;
  timings: string | null;
  description: string | null;
  is_published: boolean;
};

export default function AdminCoursesPage() {
  const [items, setItems] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    faculty_name: "",
    start_date: "",
    timings: "",
    description: "",
    is_published: false,
  });

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/courses", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to load");
      setItems(data.data as Course[]);
    } catch (e: any) {
      setError(e?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function createCourse(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const payload = {
      ...form,
      faculty_name: form.faculty_name || null,
      start_date: form.start_date || null,
      timings: form.timings || null,
      description: form.description || null,
    };
    const res = await fetch("/api/admin/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok || !data?.ok) {
      setError(data?.error || "Failed to create course");
      return;
    }
    setForm({ name: "", faculty_name: "", start_date: "", timings: "", description: "", is_published: false });
    load();
  }

  async function togglePublish(course: Course) {
    const res = await fetch("/api/admin/courses", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: course.id, is_published: !course.is_published }),
    });
    const data = await res.json();
    if (!res.ok || !data?.ok) {
      setError(data?.error || "Failed to update course");
      return;
    }
    load();
  }

  async function remove(id: number) {
    const res = await fetch("/api/admin/courses", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    if (!res.ok || !data?.ok) {
      setError(data?.error || "Failed to delete course");
      return;
    }
    load();
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold">Manage Courses</h1>
        <p className="text-white/60 mt-2">Create, update, and manage all the courses on the platform.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-1 bg-[#1c2127] p-6 rounded-lg">
          <h3 className="text-white text-xl font-bold">Create Course</h3>
          {error ? <p className="text-red-400 mt-2">{error}</p> : null}
          <form onSubmit={createCourse} className="flex flex-col gap-4 mt-6">
            <label className="flex flex-col">
              <p className="text-sm pb-2">Course Name</p>
              <input className="form-input rounded-md bg-[#283039] h-10 p-3" value={form.name} onChange={(e)=>setForm(f=>({...f,name:e.target.value}))} required />
            </label>
            <label className="flex flex-col">
              <p className="text-sm pb-2">Faculty Name</p>
              <input className="form-input rounded-md bg-[#283039] h-10 p-3" value={form.faculty_name} onChange={(e)=>setForm(f=>({...f,faculty_name:e.target.value}))} />
            </label>
            <label className="flex flex-col">
              <p className="text-sm pb-2">Start Date</p>
              <input type="date" className="form-input rounded-md bg-[#283039] h-10 p-3" value={form.start_date} onChange={(e)=>setForm(f=>({...f,start_date:e.target.value}))} />
            </label>
            <label className="flex flex-col">
              <p className="text-sm pb-2">Timings</p>
              <input className="form-input rounded-md bg-[#283039] h-10 p-3" value={form.timings} onChange={(e)=>setForm(f=>({...f,timings:e.target.value}))} />
            </label>
            <label className="flex flex-col">
              <p className="text-sm pb-2">Description</p>
              <textarea className="form-input rounded-md bg-[#283039] min-h-24 p-3" value={form.description} onChange={(e)=>setForm(f=>({...f,description:e.target.value}))} />
            </label>
            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-sm">Published</p>
              <label className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-[#3b4754] p-1">
                <input type="checkbox" className="absolute inset-0 opacity-0" checked={form.is_published} onChange={(e)=>setForm(f=>({...f,is_published:e.target.checked}))} />
                <div className={`h-4 w-4 rounded-full bg-white transition-transform ${form.is_published?"translate-x-5":"translate-x-0"}`}></div>
              </label>
            </div>
            <button className="h-10 rounded-md bg-[#1173d4] hover:bg-[#1173d4]/90 font-bold">Add Course</button>
          </form>
        </div>

        <div className="lg:col-span-2">
          <div className="overflow-x-auto rounded-lg border border-[#3b4754] bg-[#1c2127]">
            <table className="w-full">
              <thead>
                <tr className="bg-[#283039]">
                  <th className="px-4 py-3 text-left text-xs uppercase">Name</th>
                  <th className="px-4 py-3 text-left text-xs uppercase">Faculty</th>
                  <th className="px-4 py-3 text-left text-xs uppercase">Start Date</th>
                  <th className="px-4 py-3 text-left text-xs uppercase">Timings</th>
                  <th className="px-4 py-3 text-left text-xs uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3b4754]">
                {loading ? (
                  <tr><td className="px-4 py-6" colSpan={6}>Loading…</td></tr>
                ) : items.length === 0 ? (
                  <tr><td className="px-4 py-6" colSpan={6}>No courses found</td></tr>
                ) : items.map((c)=> (
                  <tr key={c.id} className="hover:bg-[#283039]/50">
                    <td className="px-4 py-3">{c.name}</td>
                    <td className="px-4 py-3 text-white/70">{c.faculty_name ?? "-"}</td>
                    <td className="px-4 py-3 text-white/70">{c.start_date ?? "-"}</td>
                    <td className="px-4 py-3 text-white/70">{c.timings ?? "-"}</td>
                    <td className="px-4 py-3 text-sm">{c.is_published ? <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs">Published</span> : <span className="px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">Draft</span>}</td>
                    <td className="px-4 py-3 space-x-2 text-sm">
                      <button onClick={()=>togglePublish(c)} className="px-2 py-1 rounded-md bg-[#283039] hover:bg-[#3b4754]">{c.is_published?"Unpublish":"Publish"}</button>
                      <button onClick={()=>remove(c.id)} className="px-2 py-1 rounded-md bg-red-600 hover:bg-red-700">Delete</button>
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
