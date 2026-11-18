'use client';

import { deleteProductAction } from '@/actions/products';
import Link from 'next/link';
import { useOptimistic } from 'react';
import type { Product } from './page';
import Form from 'next/form';

export default function ProductDetail({ products }: { products: Product[] }) {
  const [optimisticProducts, optimisticDelete] = useOptimistic(
    products,
    (curProducts, productId) => {
      return curProducts.filter(product => product.id !== productId);
    },
  );

  async function deleteProductById(productId: number) {
    optimisticDelete(productId);
    await deleteProductAction(productId);
  }

  return (
    <ul className='space-y-4 p-4'>
      {optimisticProducts.map(product => (
        <li
          key={product.id}
          className='p-4 bg-white shadow-md rounded-lg text-gray-700'
        >
          <h2 className='text-xl font-semibold'>
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
          </h2>

          <p>{product.description}</p>
          <p className='text-lg font-medium'>${product.price}</p>
          <Form action={deleteProductById.bind(null, product.id)}>
            <button
              type='submit'
              className='px-4 py-2 mt-4 text-white rounded-lg bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600'
            >
              Delete
            </button>
          </Form>
        </li>
      ))}
    </ul>
  );
}
