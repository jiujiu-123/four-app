import { authAction } from '@/actions/users';
import Cart from '@/components/Cart';

const page = async () => {
  const res = await authAction();
  return (
    <div>
      <Cart status={res.status} />
    </div>
  );
};

export default page;
