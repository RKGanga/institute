"use client"

import { useState } from 'react'

type CourseCard = {
  name: string
  code: string
  desc: string
  reasons: [string, string]
  start: string
  img?: string
}

const COURSES: CourseCard[] = [
  { name: 'FICO', code: 'FICO', desc: 'Financial accounting and reporting with SAP S/4HANA.', reasons: ['Master core financial processes end‑to‑end.', 'Boost your profile for analyst/controller roles.'], start: '25th July', img: 'https://images.unsplash.com/photo-1707075891545-41b982930351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NzMzMDcwOXww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'MM', code: 'MM', desc: 'Materials & inventory management.', reasons: ['Work across procurement and supply chain.', 'High demand in manufacturing/logistics.'], start: '10th August', img: 'https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzU3MzAxMDA2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'EWM', code: 'EWM', desc: 'Extended Warehouse Management essentials.', reasons: ['Optimize complex warehouse operations.', 'Hands‑on focus on real WMS flows.'], start: '12th August', img: 'https://images.unsplash.com/photo-1644079446600-219068676743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzU3MzMwNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'SD', code: 'SD', desc: 'Sales & Distribution lifecycle.', reasons: ['Learn pricing, delivery, billing in depth.', 'Ideal for client‑facing roles.'], start: '8th August', img: 'https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzU3MzMwNzExfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'PP', code: 'PP', desc: 'Production Planning & execution.', reasons: ['Plan MRP, BOM, routing effectively.', 'Bridge between shop‑floor and ERP.'], start: '15th August', img: 'https://images.unsplash.com/photo-1706759755831-bbbcca338f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMHJlc291cmNlcyUyMGRpZ2l0YWx8ZW58MXx8fHwxNzU3MzMwNzEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'HR/HCM', code: 'HR/HCM', desc: 'Human Capital Management basics.', reasons: ['Implement core HR processes.', 'Foundation for SuccessFactors path.'], start: '1st August', img: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3MjE1NzExfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Success Factors', code: 'SF', desc: 'SAP HR cloud suite.', reasons: ['Modern HR modules and workflows.', 'Strong enterprise adoption and demand.'], start: '18th August', img: 'https://images.unsplash.com/photo-1721444127971-b7d0023bbef2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGVudGVycHJpc2V8ZW58MXx8fHwxNzU3MzMwNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Ariba', code: 'ARIBA', desc: 'Spend management & procurement.', reasons: ['Source‑to‑pay best practices.', 'Great for procurement careers.'], start: '20th August', img: 'https://images.unsplash.com/photo-1741275270905-b4c6e4c4b1aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9jdXJlbWVudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc1NzMzMDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'S/4 HANA', code: 'S/4', desc: 'Next‑gen ERP suite overview.', reasons: ['Understand the S/4 digital core.', 'Future‑proof your SAP career.'], start: '22nd August', img: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3MjE1NzExfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'ABAP', code: 'ABAP', desc: 'Programming for SAP.', reasons: ['Build custom logic & extensions.', 'Solid foundation for SAP dev roles.'], start: '25th August', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MXx8fHwxNzU3MzMwNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'CPI', code: 'CPI', desc: 'Integration suite fundamentals.', reasons: ['Design integrations and flows.', 'Connect SAP with cloud apps.'], start: '27th August', img: 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlZ3JhdGlvbiUyMHBsYXRmb3JtfGVufDF8fHx8MTc1NzMzMDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'BASIS', code: 'BASIS', desc: 'SAP system administration.', reasons: ['Manage, monitor and secure systems.', 'Valuable for infra/ops careers.'], start: '30th August', img: 'https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhZG1pbmlzdHJhdG9yfGVufDF8fHx8MTc1NzMzMDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'PI/PO', code: 'PI/PO', desc: 'Process Integration/Orchestration.', reasons: ['Master middleware concepts.', 'Map enterprise integration patterns.'], start: '2nd Sept', img: 'https://picourse.com/wp-content/uploads/2015/03/kozzi-notebook_against_colour_background_with_images-1620x1296-300x240.jpg' },
  { name: 'Security and GRC', code: 'GRC', desc: 'Governance, Risk & Compliance.', reasons: ['Enforce access controls & audits.', 'Critical for regulated industries.'], start: '5th Sept', img: 'https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZW50ZXJwcmlzZXxlbnwxfHx8fDE3NTczMzA3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Fiori & HANA Security', code: 'Fiori', desc: 'Modern UX & security practices.', reasons: ['Design delightful SAP experiences.', 'Learn core HANA/Fiori security.'], start: '7th Sept', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc1NzI2MjU2Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
]
type Form = {
  name: string
  email: string
  phone: string
  course: string
  message: string
}

const empty: Form = { name: '', email: '', phone: '', course: '', message: '' }

type Props = { embedded?: boolean }

export default function CoursesStaticGrid({ embedded = false }: Props) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<Form>(empty)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState<string>('')
  const [error, setError] = useState<string>('')

  function startRegister(course: string) {
    setForm({ ...empty, course })
    setDone('')
    setError('')
    setOpen(true)
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setDone('')
    try {
      const res = await fetch('/api/register-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json?.error || 'Failed to submit')
      setDone('Thank you! We will contact you shortly.')
      setForm(empty)
    } catch (e: any) {
      setError(e?.message ?? 'Failed to submit')
    } finally {
      setLoading(false)
    }
  }

  const Grid = (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {COURSES.map((c) => (
        <div key={c.name} className="bg-gray-800 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="h-40 bg-center bg-cover" style={{ backgroundImage: c.img ? `url(${c.img})` : undefined }} />
          <div className="p-5">
            <h3 className="text-lg font-bold">SAP {c.name}</h3>
            <p className="mt-3 text-gray-300 text-sm">{c.reasons[0]}</p>
            <p className="text-gray-300 text-sm">{c.reasons[1]}</p>
            <button onClick={() => startRegister(c.name)} className="mt-4 w-full rounded-full h-10 bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-300 transition-colors">Register Now</button>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <>
      {embedded ? (
        Grid
      ) : (
        <section className="py-20 sm:py-28 bg-gray-950" id="popular-courses">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Trained In</h2>
            {Grid}
          </div>
        </section>
      )}

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg bg-gray-900 rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Register for {form.course}</h3>
              <button onClick={() => setOpen(false)} className="h-8 w-8 grid place-items-center rounded hover:bg-gray-800">✕</button>
            </div>
            <form onSubmit={submit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required className="w-full h-10 rounded-md px-3 bg-gray-800 border border-gray-700" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required className="w-full h-10 rounded-md px-3 bg-gray-800 border border-gray-700" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Phone Number</label>
                  <input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} required className="w-full h-10 rounded-md px-3 bg-gray-800 border border-gray-700" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Course Name</label>
                  <input value={form.course} readOnly className="w-full h-10 rounded-md px-3 bg-gray-800 border border-gray-700" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea rows={3} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} className="w-full rounded-md px-3 py-2 bg-gray-800 border border-gray-700" />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              {done && <p className="text-green-400 text-sm">{done}</p>}
              <div className="flex justify-end gap-2">
                <button type="button" onClick={()=>setOpen(false)} className="rounded-md h-10 px-4 bg-gray-800 hover:bg-gray-700">Cancel</button>
                <button disabled={loading} className="rounded-md h-10 px-4 bg-[--primary-color] hover:bg-indigo-500">
                  {loading ? 'Submitting…' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
