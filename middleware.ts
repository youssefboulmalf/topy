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
  if (request.nextUrl.pathname.startsWith('/admin')) {

    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }
  else{
    return NextResponse.json({ message: 'Auth required' }, { status: 401 })
  }
}

export const config = {
  matcher: ['/admin', '/api/getOrders', '/api/deleteOrder', '/api/changeStatus', '/api/createNewProduct', '/api/deleteImage', '/api/updateProduct' ],
}

