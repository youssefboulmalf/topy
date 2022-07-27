import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const hash = '3878b70d527f55975b5f2f502e65d00ce122a73d955d2acccec51b0897a94f17'

export function middleware(request: NextRequest) {

  let cookieObj: any = request.cookies
  let cookieFromRequest = cookieObj.get('admin')
  console.log(cookieFromRequest)
  if (cookieFromRequest === hash) {
    return NextResponse.next()
    
  }
  const loginUrl = new URL('/', request.url)
  loginUrl.searchParams.set('from', request.nextUrl.pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/admin'],
}