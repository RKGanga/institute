import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/serviceClient'

export async function GET() {
  const supabase = createServiceClient()
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
  return NextResponse.json({ ok: true, data })
}

export async function POST(req: Request) {
  const body = await req.json()
  const supabase = createServiceClient()
  const { data, error } = await supabase
    .from('courses')
    .insert({
      name: body.name,
      faculty_name: body.faculty_name ?? null,
      start_date: body.start_date ?? null,
      timings: body.timings ?? null,
      description: body.description ?? null,
      is_published: body.is_published ?? false,
    })
    .select('*')
    .single()

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
  return NextResponse.json({ ok: true, data })
}

export async function PUT(req: Request) {
  const body = await req.json()
  if (!body.id) return NextResponse.json({ ok: false, error: 'id is required' }, { status: 400 })
  const supabase = createServiceClient()
  const { data, error } = await supabase
    .from('courses')
    .update({
      name: body.name,
      faculty_name: body.faculty_name,
      start_date: body.start_date,
      timings: body.timings,
      description: body.description,
      is_published: body.is_published,
    })
    .eq('id', body.id)
    .select('*')
    .single()

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
  return NextResponse.json({ ok: true, data })
}

export async function DELETE(req: Request) {
  const body = await req.json()
  if (!body.id) return NextResponse.json({ ok: false, error: 'id is required' }, { status: 400 })
  const supabase = createServiceClient()
  const { error } = await supabase
    .from('courses')
    .delete()
    .eq('id', body.id)

  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
  return NextResponse.json({ ok: true })
}