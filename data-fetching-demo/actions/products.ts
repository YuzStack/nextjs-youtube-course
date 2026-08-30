'use server';

import { addProduct, deleteProduct, updateProduct } from '@/prisma-db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export interface Errors {
  title?: string;
  price?: string;
  description?: string;
}

export interface FormState {
  errors: Errors;
}

export async function addProductAction(
  prevState: FormState,
  formData: FormData,
) {
  const title = formData.get('title') as string;
  const price = formData.get('price') as string;
  const description = formData.get('description') as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = 'Title is required';
  }

  if (!price) {
    errors.price = 'Price is required';
  }

  if (!description) {
    errors.description = 'Description is required';
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addProduct(title, parseInt(price), description);
  redirect('/products-db');
}

export async function updateProductAction(
  id: number,
  prevState: FormState,
  formData: FormData,
) {
  const title = formData.get('title') as string;
  const price = formData.get('price') as string;
  const description = formData.get('description') as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = 'Title is required';
  }

  if (!price) {
    errors.price = 'Price is required';
  }

  if (!description) {
    errors.description = 'Description is required';
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await updateProduct(id, title, parseInt(price), description);
  redirect('/products-db');
}

export async function deleteProductAction(id: number) {
  await deleteProduct(id);
  revalidatePath('/products-db');
}
