'use client';
import { JwtData, Address as addressType } from '@/Types/global';
import React from 'react';
import { Button } from './ui/button';
import Address from './Address';
import { loginOutAction } from '@/actions/users';
import { useRouter } from 'next/navigation';

interface AccountType {
  authData: JwtData;
  addressesData: addressType[];
}
const Account = (props: AccountType) => {
  const router = useRouter();
  const { authData, addressesData } = props;
  const handleClick = async () => {
    const res = await loginOutAction();
    if (res.status === 200) {
      router.push('/account');
      localStorage.removeItem('cart');
    }
    return;
  };
  return (
    <div className="container2 py-10">
      <div className="border-b py-4">
        <h2 className="text-lg leading-10 font-bold">Account</h2>
        <div className="flex justify-between items-center">
          <div>
            <p>Hello: {authData.name}</p>
            <p>Signed in as : {authData.email}</p>
          </div>
          <Button
            className="cursor-pointer"
            onClick={handleClick}
          >
            Login Out
          </Button>
        </div>
      </div>
      <div className="border-b py-4">
        <h2 className="text-lg leading-10 font-bold">Addresses</h2>
        <div>
          <p>View and update your shipping addresses, you can add as many as you like.</p>
          <p>Saving your addresses will make them available during checkout.</p>
        </div>
        <Address
          authData={authData}
          addressesData={addressesData}
        />
      </div>
      <div className="py-4">
        <h2 className="text-lg leading-10 font-bold">Orders</h2>
        <div>
          <p>There is currently no order information available</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
