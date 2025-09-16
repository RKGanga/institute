import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/serviceClient'

// List trainer applications
export async function GET() {
  const supabase = createServiceClient()
  const { data, error } = await supabase
    .from('teachers')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
  return NextResponse.json({ ok: true, data })
}

// Update status: { id, status: 'pending'|'approved'|'rejected' }
export async function PUT(req: Request) {
  const body = await req.json()
  if (!body.id || !body.status) {
    return NextResponse.json({ ok: false, error: 'id and status are required' }, { status: 400 })
  }
  const supabase = createServiceClient()
  const { data, error } = await supabase
    .from('teachers')
    .update({ status: body.status })
    .eq('id', body.id)
    .select('*')
    .single()

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
  return NextResponse.json({ ok: true, data })
}
