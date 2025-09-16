import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/serviceClient'

// Site settings stored in a key-value table `site_settings` with columns: key (text, pk), value (text)

export async function GET() {
  const supabase = createServiceClient()
  const { data, error } = await supabase
    .from('site_settings')
    .select('key,value')

  // If table is missing, return empty settings instead of error, so admin UI can still render
  if (error) {
    // Postgres undefined_table: 42P01
    // Supabase JS exposes error.code for PostgREST errors
    const code = (error as any)?.code || (error as any)?.details || ''
    const msg = ((error as any)?.message || '').toString()
    if (
      String(code).includes('42P01') ||
      msg.includes('Could not find the table') ||
      msg.includes('schema cache')
    ) {
      return NextResponse.json({ ok: true, data: {} })
    }
    return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
  }
  const obj: Record<string, string> = {}
  for (const row of data || []) obj[row.key] = row.value
  return NextResponse.json({ ok: true, data: obj })
}

// Update multiple settings in one request
// Body: { updates: Record<string,string> }
export async function PUT(req: Request) {
  const supabase = createServiceClient()
  const body = await req.json()
  const updates: Record<string, string> = body?.updates || {}
  const rows = Object.entries(updates).map(([key, value]) => ({ key, value }))
  if (rows.length === 0) return NextResponse.json({ ok: true })
  const { error } = await supabase.from('site_settings').upsert(rows, { onConflict: 'key' })
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 400 })
  return NextResponse.json({ ok: true })
}
