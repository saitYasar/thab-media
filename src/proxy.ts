import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from './lib/i18n/config'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Default locale (tr) does not get a prefix — rewrite internally
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.rewrite(request.nextUrl)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|models/|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|glb|gltf|obj|mtl|bin|woff2?)$).*)'],
}
