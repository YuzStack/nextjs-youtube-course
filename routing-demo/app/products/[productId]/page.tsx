import { Metadata } from 'next';

interface Props {
  params: Promise<{ productId: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;

  const title = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 1_00);
  });

  return {
    // title: `Product ${id}`,
    title: `Product ${title}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  // const productId = (await params).productId; // OR
  const { productId } = await params;

  return <h1>Details about product {productId}</h1>;
}
