import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Using Custom Matching Config
  // return NextResponse.redirect(new URL('/', request.url));

  // Using Conditional Statement
  // if (request.nextUrl.pathname === '/profile') {
  //   // return NextResponse.redirect(new URL('/hello', request.nextUrl));

  //   // Or redirecting to another route without changing the url
  //   return NextResponse.rewrite(new URL('/hello', request.nextUrl));
  // }

  const response = NextResponse.next();
  const themePreference = request.cookies.get('theme');
  if (!themePreference) {
    response.cookies.set('theme', 'dark');
  }

  response.headers.set('custom-header', 'custom-value');

  return response;
}

// export const config = {
//   matcher: '/profile',
// };
