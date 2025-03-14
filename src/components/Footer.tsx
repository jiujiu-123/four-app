import Link from 'next/link';
import React from 'react';
import { Separator } from './ui/separator';

const Footer = async () => {
  return (
    <div className=" border-t mt-6">
      <div className="container flex py-32 justify-between">
        <h2 className=" text-2xl">
          <Link href="/">JChing Store</Link>
        </h2>
        <div className="flex grid-cols-3 gap-10">
          <div>
            <span>getadoia</span>
            <ul className="m-4 space-y-3">
              <li>clothing</li>
              <li>clothing</li>
              <li>clothing</li>
            </ul>
          </div>
          <Separator
            className="w-[1px]"
            orientation="vertical"
          />
          <div>
            <span>getadoia</span>
            <ul className="m-4 space-y-3">
              <li>clothing</li>
              <li>clothing</li>
              <li>clothing</li>
            </ul>
          </div>
          <Separator orientation="vertical" />
          <div>
            <span>getadoia</span>
            <ul className="m-4 space-y-3">
              <li>clothing</li>
              <li>clothing</li>
              <li>clothing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
