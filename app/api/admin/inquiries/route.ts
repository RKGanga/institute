import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/serviceClient'

// List student inquiries (from student_requests)
export async function GET() {
  const supabase = createServiceClient()
  const { data, error } = await supabase
    .from('student_requests')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
  return NextResponse.json({ ok: true, data })
}

// Delete an inquiry by id
export async function DELETE(req: Request) {
  const body = await req.json()
  if (!body.id) return NextResponse.json({ ok: false, error: 'id is required' }, { status: 400 })
  const supabase = createServiceClient()
  const { error } = await supabase
    .from('student_requests')
    .delete()
    .eq('id', body.id)

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
  return NextResponse.json({ ok: true })
}
