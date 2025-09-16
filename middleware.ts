import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  // Match only '/admin' or '/admin/*' and NOT '/admin-auth/*'
  const isAdminRoute = pathname === '/admin' || pathname.startsWith('/admin/')
  const isLoginRoute = pathname === '/admin-auth' || pathname.startsWith('/admin-auth/')

  const adminCookie = req.cookies.get('admin-auth')?.value
  const isAuthed = adminCookie === '1'

  // TEMP debug log
  console.log('[middleware]', { pathname, isAdminRoute, isLoginRoute, isAuthed })

  // Protect /admin/* routes
  if (isAdminRoute && !isAuthed) {
    const url = req.nextUrl.clone()
    url.pathname = '/admin-auth/login'
    return NextResponse.redirect(url)
  }

  // If already authed, keep them out of /admin-auth/* pages
  if (isLoginRoute && isAuthed) {
    const url = req.nextUrl.clone()
    url.pathname = '/admin'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/admin-auth/:path*'],
}
