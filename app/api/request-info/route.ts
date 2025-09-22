import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/serviceClient'

export async function POST(req: Request) {
  try {
    const { email } = await req.json().catch(() => ({} as any))
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 })
    }
    const supabase = createServiceClient()
    const { error } = await supabase.from('student_requests').insert({
      name: 'Website Request',
      email,
      phone: '',
      course: 'General',
      message: 'Homepage request info form',
    })
    if (error) throw error
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Unexpected error' }, { status: 500 })
  }
}
