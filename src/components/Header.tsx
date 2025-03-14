'use client';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { MenuList, Title } from '@/lib/constans';
import { Fragment } from 'react';
import { CartStore } from '@/store/CartStore';
const Header = () => {
  const { cartList } = CartStore();
  return (
    <div className=" h-[64px] px-10 border-b bg-white">
      <div className="container flex items-center justify-between h-full">
        <h1 className="text-2xl">
          <Link href="/">{Title}</Link>
        </h1>
        <div className="flex gap-4 justify-end text-sm h-1/3">
          {MenuList.map((item, index) => (
            <Fragment key={index}>
              <Link
                key={index}
                href={item.href}
              >
                {item.text}
              </Link>
              {index !== MenuList.length - 1 && <Separator orientation="vertical" />}
            </Fragment>
          ))}
          ({cartList.length ? cartList.length.toString() : 0})
        </div>
      </div>
    </div>
  );
};

export default Header;
