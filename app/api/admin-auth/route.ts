import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// POST /api/admin-auth
// Body: { action: 'login' | 'logout' }
export async function POST(req: Request) {
  try {
    const { action } = await req.json()
    const cookieStore = await cookies()

    if (action === 'login') {
      cookieStore.set('admin-auth', '1', {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 8, // 8 hours
      })
      return NextResponse.json({ ok: true })
    }

    if (action === 'logout') {
      cookieStore.set('admin-auth', '', {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 0,
      })
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json({ ok: false, error: 'Invalid action' }, { status: 400 })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message ?? 'Unexpected error' }, { status: 500 })
  }
}
