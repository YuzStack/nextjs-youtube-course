import { auth } from '@clerk/nextjs/server';

export default async function page() {
  await auth.protect();

  return <h1>About Me</h1>;
}
