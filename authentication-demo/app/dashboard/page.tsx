import { auth, currentUser } from '@clerk/nextjs/server';

export default async function DashbaordPage() {
  await auth.protect();

  const authObj = await auth();
  const userObj = await currentUser();
  console.log(authObj, userObj);

  return <h1>Dashbaord</h1>;
}
