"use client";

import { useEffect, useState } from "react";

export default function HomepageAnalyticsPage() {
  const [values, setValues] = useState({ years: "", courses: "", students: "", placements: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/settings", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to load");
      const s = data.data || {};
      setValues({
        years: s.home_years ?? "10",
        courses: s.home_courses ?? "20",
        students: s.home_students ?? "5000",
        placements: s.home_placements ?? "4000",
      });
    } catch (e: any) {
      setError(e?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function save() {
    setSaving(true);
    setError(null);
    setOk(null);
    const updates: Record<string, string> = {
      home_years: values.years,
      home_courses: values.courses,
      home_students: values.students,
      home_placements: values.placements,
    };
    const res = await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ updates }),
    });
    const data = await res.json();
    if (!res.ok || !data?.ok) {
      setError(data?.error || "Failed to save");
    } else {
      setOk("Saved");
    }
    setSaving(false);
  }

  return (
    <div className="px-10 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h2 className="text-white text-3xl font-bold tracking-tight">Homepage Statistics</h2>
          <p className="text-white/60 mt-1">Update the numbers displayed on the homepage.</p>
        </div>

        {error ? <p className="text-red-400 mb-4">{error}</p> : null}
        {ok ? <p className="text-green-400 mb-4">{ok}</p> : null}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <p className="text-white text-sm font-medium">Years</p>
                <input type="number" className="form-input w-full rounded-md border border-[#55553a] bg-[#27271b] px-4 py-3" value={values.years} onChange={(e)=>setValues(v=>({...v,years:e.target.value}))} />
              </label>
              <label className="flex flex-col gap-2">
                <p className="text-white text-sm font-medium">Courses</p>
                <input type="number" className="form-input w-full rounded-md border border-[#55553a] bg-[#27271b] px-4 py-3" value={values.courses} onChange={(e)=>setValues(v=>({...v,courses:e.target.value}))} />
              </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <p className="text-white text-sm font-medium">Students</p>
                <input type="number" className="form-input w-full rounded-md border border-[#55553a] bg-[#27271b] px-4 py-3" value={values.students} onChange={(e)=>setValues(v=>({...v,students:e.target.value}))} />
              </label>
              <label className="flex flex-col gap-2">
                <p className="text-white text-sm font-medium">Placements</p>
                <input type="number" className="form-input w-full rounded-md border border-[#55553a] bg-[#27271b] px-4 py-3" value={values.placements} onChange={(e)=>setValues(v=>({...v,placements:e.target.value}))} />
              </label>
            </div>
            <div className="flex justify-end mt-4">
              <button disabled={saving} onClick={save} className="flex items-center justify-center gap-2 rounded-md bg-[#f9f506] px-6 py-3 text-sm font-bold text-[#181811] hover:bg-yellow-300">
                {saving ? "Saving…" : "Update Statistics"}
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-xl font-bold mb-4">Live Preview</h3>
            <div className="grid grid-cols-2 gap-4 rounded-lg border border-[#3a3927] bg-[#27271b]/50 p-6">
              <div className="flex flex-col gap-1 rounded-md p-4">
                <p className="text-4xl font-bold text-[#f9f506]">{Number(values.years || 0)}+</p>
                <p className="text-sm text-white/60">Years of Experience</p>
              </div>
              <div className="flex flex-col gap-1 rounded-md p-4">
                <p className="text-4xl font-bold text-[#f9f506]">{Number(values.courses || 0)}+</p>
                <p className="text-sm text-white/60">SAP Courses</p>
              </div>
              <div className="flex flex-col gap-1 rounded-md p-4">
                <p className="text-4xl font-bold text-[#f9f506]">{Number(values.students || 0).toLocaleString()}+</p>
                <p className="text-sm text-white/60">Students Trained</p>
              </div>
              <div className="flex flex-col gap-1 rounded-md p-4">
                <p className="text-4xl font-bold text-[#f9f506]">{Number(values.placements || 0).toLocaleString()}+</p>
                <p className="text-sm text-white/60">Successful Placements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
