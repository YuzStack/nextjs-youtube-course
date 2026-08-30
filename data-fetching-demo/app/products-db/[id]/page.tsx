import { getProduct } from '@/prisma-db';
import UpdateProductForm from './product-update-form';
import type { Product } from '../page';
import { notFound } from 'next/navigation';

export default async function UpdateProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    notFound();
  }

  return <UpdateProductForm product={product} />;
}
