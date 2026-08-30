'use client';

import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();

  const productId = pathname.split('/').at(2);
  const reviewId = pathname.split('/').at(4);

  return (
    <h2>
      Review {reviewId} not found for product {productId}
    </h2>
  );
}
