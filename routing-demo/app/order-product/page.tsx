'use client';

import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter();

  function handleClick() {
    console.log('Placing your order...');

    router.push('/'); // OR
    // router.replace('/') // for swapping the current entry
    // router.back(); // to go a step back in the history stack
    // router.forward(); // to go a step forward in the history stack
  }

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
