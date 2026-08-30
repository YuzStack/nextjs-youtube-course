import { auth } from '@clerk/nextjs/server';

export default async function AboutPage() {
  await auth.protect();

  return <h1>About Page</h1>;
}
