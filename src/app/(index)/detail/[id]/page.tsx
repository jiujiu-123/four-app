import { productAction, productsAction } from '@/actions/products';
import AddCart from '@/components/AddCart';
import Image from 'next/image';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// 做详情页的SSG
export const generateStaticParams = async () => {
  const res = await productsAction();
  return res.data.map((item) => ({
    id: item.id.toString(),
  }));
};

const Page = async (props: PageProps) => {
  // 地址栏param参数
  const { id } = await props.params;
  const { data: product } = await productAction(Number(id));

  return (
    <div className="container flex py-6">
      <div className="w-64">
        <h2 className="font-sans text-3xl leading-10 font-bold my-8">{product.name}</h2>
        <p className="leading-10">{product.description}</p>
      </div>
      <div className="h-[500px] flex-1 mx-10 bg-slate-50 p-4 rounded-lg shadow-md relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          sizes="300"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <AddCart product={product} />
    </div>
  );
};

export default Page;
