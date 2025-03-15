import { addressesAction } from '@/actions/addresses';
import { authAction } from '@/actions/users';
import Account from '@/components/Account';
import NotAccount from '@/components/NotAccount';

const page = async () => {
  const auth = await authAction();
  if (auth.status !== 200 || !auth.data) {
    return <NotAccount />;
  }
  const addresses = await addressesAction(auth.data.userId);

  return (
    <div>
      <Account
        addressesData={addresses.data!}
        authData={auth.data}
      />
    </div>
  );
};

export default page;
