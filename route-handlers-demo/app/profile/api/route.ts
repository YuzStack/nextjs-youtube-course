import { cookies, headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // Using the classic 'Headers' API (works completely fine)
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get('Authorization'));

  // Using the Next.js 'Headers' (also works too)
  const headersList = await headers();
  console.log(headersList.get('Authorization'));

  // Using the 'request' parameter
  const theme = request.cookies.get('theme');
  console.log(theme);

  // Using the 'Next.js' cookies function
  const cookiesStore = await cookies();
  cookiesStore.set('resultsPerPage', '20');
  console.log(cookiesStore.get('resultsPerPage'));

  return new Response('<h1>Profile API Data</h1>', {
    headers: { 'Content-Type': 'text/html', 'Set-Cookie': 'theme=dark' },
  });
}
