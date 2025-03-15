'use client';
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import { NotAccountType } from '@/Types/global';

const NotAccount = () => {
  const [noAccountType, setNoAccountType] = useState<NotAccountType>('login');
  return (
    <div>
      {noAccountType === 'login' ? (
        <Login setNoAccountType={setNoAccountType} />
      ) : (
        <Register setNoAccountType={setNoAccountType} />
      )}
    </div>
  );
};

export default NotAccount;
