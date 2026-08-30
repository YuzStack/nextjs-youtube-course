import { cookies } from 'next/headers';

export default async function AboutPage() {
  console.log('About Server Components');

  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');
  console.log(theme);

  return <h1>About page {new Date().toLocaleTimeString()}</h1>;
}
