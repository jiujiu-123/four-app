import { productsAction } from '@/actions/products';
import Products from '@/components/Products';
import Sort from '@/components/Sort';

const page = async () => {
  const res = await productsAction();

  return (
    <div className="container flex py-6">
      <Sort />
      <Products data={res.data} />
    </div>
  );
};

export default page;
