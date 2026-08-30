'use client';

import { addProductAction, FormState } from '@/actions/products';
import Submit from '@/components/submit';

import { useActionState } from 'react';

export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
  };

  const [curState, formAction, isPending] = useActionState(
    addProductAction,
    initialState,
  );

  return (
    <form action={formAction} className='p-4 space-y-4 max-w-96'>
      <div>
        <label className='text-white block'>
          Title
          <input
            type='text'
            className='block w-full bg-white p-2 text-black border rounded'
            name='title'
          />
        </label>
        {curState.errors.title && (
          <p className='text-red-500'>{curState.errors.title}</p>
        )}
      </div>

      <div>
        <label className='text-white block'>
          Price
          <input
            type='number'
            className='block w-full bg-white p-2 text-black border rounded'
            name='price'
          />
        </label>
        {curState.errors.price && (
          <p className='text-red-500'>{curState.errors.price}</p>
        )}
      </div>

      <div>
        <label className='text-white block'>
          Description
          <textarea
            className='block w-full bg-white p-2 text-black border rounded'
            name='description'
          />
        </label>
        {curState.errors.description && (
          <p className='text-red-500'>{curState.errors.description}</p>
        )}
      </div>

      {/* <Submit /> */}

      <button
        type='submit'
        className='block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500'
        disabled={isPending}
      >
        Submit
      </button>
    </form>
  );
}
