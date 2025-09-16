import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// POST /api/admin-auth
// Body: { action: 'login' | 'logout' }
export async function POST(req: Request) {
  try {
    const { action, userId, password } = await req.json()
    const cookieStore = cookies()

    if (action === 'login') {
      let ADMIN_USER = (process.env.ADMIN_USER ?? '').trim()
      let ADMIN_PASSWORD = (process.env.ADMIN_PASSWORD ?? '').trim()

      // TEMP debug log: prints whether envs exist and the provided userId
      console.log('[admin-auth] login attempt', {
        hasUser: Boolean(ADMIN_USER),
        hasPassword: Boolean(ADMIN_PASSWORD),
        providedUserId: String(userId || '').slice(0, 64),
        cwd: process.cwd(),
      })

      if (!ADMIN_USER || !ADMIN_PASSWORD) {
        if (process.env.NODE_ENV !== 'production') {
          // Dev fallback to unblock local testing if .env.local is not picked up for some reason
          ADMIN_USER = 'Admin@gmail.com'
          ADMIN_PASSWORD = 'Admin@123'
          console.warn('[admin-auth] Using DEV fallback credentials because env vars are missing')
        } else {
          return NextResponse.json({ ok: false, error: 'Admin credentials are not configured on the server' }, { status: 500 })
        }
      }

      if (String(userId).trim() !== ADMIN_USER || String(password) !== ADMIN_PASSWORD) {
        return NextResponse.json({ ok: false, error: 'Invalid credentials' }, { status: 401 })
      }

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
