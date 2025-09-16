"use client";

import { useEffect, useState } from "react";

export default function ContactLinksPage() {
  const [values, setValues] = useState({
    email: "",
    phone_in: "",
    phone_au: "",
    phone_uk: "",
    phone_us: "",
    whatsapp: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  });
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
        email: s.contact_email ?? "",
        phone_in: s.contact_phone_in ?? "",
        phone_au: s.contact_phone_au ?? "",
        phone_uk: s.contact_phone_uk ?? "",
        phone_us: s.contact_phone_us ?? "",
        whatsapp: s.contact_whatsapp ?? "",
        instagram: s.social_instagram ?? "",
        linkedin: s.social_linkedin ?? "",
        youtube: s.social_youtube ?? "",
      });
    } catch (e: any) {
      setError(e?.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setOk(null);
    const updates: Record<string,string> = {
      contact_email: values.email,
      contact_phone_in: values.phone_in,
      contact_phone_au: values.phone_au,
      contact_phone_uk: values.phone_uk,
      contact_phone_us: values.phone_us,
      contact_whatsapp: values.whatsapp,
      social_instagram: values.instagram,
      social_linkedin: values.linkedin,
      social_youtube: values.youtube,
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
    <div className="min-h-screen bg-[#111418] text-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Contact & Social Links</h1>
          <p className="text-gray-400 mt-2">Update your institute's contact information and social media profiles.</p>
        </div>

        {error ? <p className="text-red-400 mb-4">{error}</p> : null}
        {ok ? <p className="text-green-400 mb-4">{ok}</p> : null}

        <form onSubmit={save} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-300 mb-2">Email</span>
              <input id="email" type="email" placeholder="you@example.com" className="form-input rounded-md bg-[#283039] py-3 px-3" value={values.email} onChange={(e)=>setValues(v=>({...v,email:e.target.value}))} />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-300 mb-2">Phone (India)</span>
              <input id="phone_in" type="tel" placeholder="+91 98765 43210" className="form-input rounded-md bg-[#283039] py-3 px-3" value={values.phone_in} onChange={(e)=>setValues(v=>({...v,phone_in:e.target.value}))} />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-300 mb-2">Phone (Australia)</span>
              <input id="phone_au" type="tel" placeholder="+61 4 1234 5678" className="form-input rounded-md bg-[#283039] py-3 px-3" value={values.phone_au} onChange={(e)=>setValues(v=>({...v,phone_au:e.target.value}))} />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-300 mb-2">Phone (UK)</span>
              <input id="phone_uk" type="tel" placeholder="+44 7700 900000" className="form-input rounded-md bg-[#283039] py-3 px-3" value={values.phone_uk} onChange={(e)=>setValues(v=>({...v,phone_uk:e.target.value}))} />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium text-gray-300 mb-2">Phone (US)</span>
              <input id="phone_us" type="tel" placeholder="+1 (555) 123-4567" className="form-input rounded-md bg-[#283039] py-3 px-3" value={values.phone_us} onChange={(e)=>setValues(v=>({...v,phone_us:e.target.value}))} />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-300 mb-2">WhatsApp</span>
            <input id="whatsapp" type="text" placeholder="https://wa.me/1234567890" className="form-input rounded-md bg-[#283039] py-3 px-3" value={values.whatsapp} onChange={(e)=>setValues(v=>({...v,whatsapp:e.target.value}))} />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-300 mb-2">Instagram</span>
            <input id="instagram" type="url" placeholder="https://instagram.com/yourprofile" className="form-input rounded-md bg-[#283039] py-3 px-3" value={values.instagram} onChange={(e)=>setValues(v=>({...v,instagram:e.target.value}))} />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-300 mb-2">LinkedIn</span>
            <input id="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" className="form-input rounded-md bg-[#283039] py-3 px-3" value={values.linkedin} onChange={(e)=>setValues(v=>({...v,linkedin:e.target.value}))} />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-gray-300 mb-2">YouTube</span>
            <input id="youtube" type="url" placeholder="https://youtube.com/c/yourchannel" className="form-input rounded-md bg-[#283039] py-3 px-3" value={values.youtube} onChange={(e)=>setValues(v=>({...v,youtube:e.target.value}))} />
          </label>

          <div className="flex justify-end pt-4">
            <button type="submit" disabled={saving} className="rounded-md bg-[#1173d4] px-6 h-12 font-bold hover:bg-[#1173d4]/90">
              {saving ? 'Saving…' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
