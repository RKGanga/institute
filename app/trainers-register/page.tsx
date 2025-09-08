"use client"

import { useState } from 'react'

export default function TrainersRegisterPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', expertise: '', experience: '', bio: ''
  })
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMsg('')
    setErr('')
    try {
      const res = await fetch('/api/trainers-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          experience: form.experience ? Number(form.experience) : null,
        }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json?.error || 'Failed to submit')
      setMsg('Application submitted! Our team will contact you soon.')
      setForm({ name: '', email: '', phone: '', expertise: '', experience: '', bio: '' })
    } catch (e: any) {
      setErr(e?.message || 'Submission failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Become a Trainer</h1>
          <p className="text-center text-gray-300 mt-2">Join our team of experts and shape the future of SAP professionals.</p>

          <form onSubmit={submit} className="bg-gray-800 mt-10 rounded-2xl p-6 md:p-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required className="w-full h-10 rounded-md px-3 bg-gray-900 border border-gray-700" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email address</label>
                <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required className="w-full h-10 rounded-md px-3 bg-gray-900 border border-gray-700" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} required className="w-full h-10 rounded-md px-3 bg-gray-900 border border-gray-700" />
              </div>
              <div>
                <label className="block text-sm mb-1">Expertise (e.g., SAP FICO, SAP MM)</label>
                <input value={form.expertise} onChange={e=>setForm({...form, expertise:e.target.value})} required className="w-full h-10 rounded-md px-3 bg-gray-900 border border-gray-700" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Experience (in years)</label>
              <input type="number" min="0" step="1" value={form.experience} onChange={e=>setForm({...form, experience:e.target.value})} className="w-full h-10 rounded-md px-3 bg-gray-900 border border-gray-700" />
            </div>
            <div>
              <label className="block text-sm mb-1">Bio</label>
              <textarea rows={5} value={form.bio} onChange={e=>setForm({...form, bio:e.target.value})} className="w-full rounded-md px-3 py-2 bg-gray-900 border border-gray-700" />
            </div>

            {err && <p className="text-red-400 text-sm">{err}</p>}
            {msg && <p className="text-green-400 text-sm">{msg}</p>}

            <button disabled={loading} className="w-full h-12 rounded-full bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-300">
              {loading ? 'Submitting…' : 'Submit Application'}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
