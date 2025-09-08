import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/serviceClient'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const supabase = createServiceClient()

    const payload = {
      name: String(body.name || '').trim(),
      email: String(body.email || '').trim(),
      phone: String(body.phone || '').trim(),
      course: String(body.course || '').trim(),
      message: String(body.message || '').trim() || null,
    }

    if (!payload.name || !payload.email || !payload.phone || !payload.course) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
    }

    const { error } = await supabase.from('student_requests').insert(payload)
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 400 })

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Unexpected error' }, { status: 500 })
  }
}
