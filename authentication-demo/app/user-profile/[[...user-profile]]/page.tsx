import { UserProfile } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

export default async function UserProfilePage() {
  await auth.protect();

  return (
    <div className='flex justify-center items-center py-8'>
      <UserProfile path='/user-profile' />
    </div>
  );
}
