import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import nookies from 'nookies';

const hash = process.env.COOKIE_HASH

export function middleware(request: NextRequest) {


  const cookieFromRequest = request.cookies.get('admin')


  const isAuth = cookieFromRequest == hash
  if (isAuth) {
    return NextResponse.next()
    
  }
  console.log(isAuth)
  const loginUrl = new URL('/', request.url)
  loginUrl.searchParams.set('from', request.nextUrl.pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/admin', '/api/getOrders', '/api/deleteOrder'],
}