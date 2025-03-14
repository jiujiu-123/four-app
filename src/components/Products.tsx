'use client';
import Image from 'next/image';
import { Product } from '@/Types/global';
import { SortStroe } from '@/store/sortStore';
import { useRouter } from 'next/navigation';

interface ProductsType {
  data: Product[];
}
const Products = (props: ProductsType) => {
  const { data } = props;
  const router = useRouter();
  const { value } = SortStroe();
  const productsData = [...data];

  if (value !== 'latest') {
    productsData.sort((a, b) => {
      if (value === 'low') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  const handleClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  return (
    <div className="flex-1">
      <h2 className="mb-8 text-4xl">ALL products</h2>
      <div className="grid grid-cols-3 gap-10">
        {productsData.map((product: Product) => (
          <div
            key={product.id}
            className="bg-slate-50 p-4 rounded-lg shadow-md hover:bg-slate-200 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleClick(product.id)}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              priority
            />
            <div className="flex items-center justify-between mt-4">
              <h3 className="flex-2xl text-slate-700">{product.name}</h3>
              <p className="text-lg font-bold text-red-400">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
