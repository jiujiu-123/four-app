'use client';
import Link from 'next/link';
import { ArrowUpRight, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Select, SelectContent, SelectItem, SelectValue } from './ui/select';
import { SelectTrigger } from '@radix-ui/react-select';
import { Button } from './ui/button';
import { CartStore } from '@/store/CartStore';
import { useShallow } from 'zustand/shallow';

const Cart = () => {
  const { cartList, updateQuantity, removeFromCart } = CartStore(
    useShallow((state) => {
      return {
        cartList: state.cartList,
        removeFromCart: state.removeFromCart,
        updateQuantity: state.updateQuantity,
      };
    })
  );
  console.log(cartList);
  const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleClick = (value: number) => {
    removeFromCart(value);
  };

  const handleValueChange = (index: number, value: string) => {
    updateQuantity(index, parseInt(value));
  };
  return (
    <div className="container">
      {cartList.length ? (
        <div className="py-24 px-2 flex">
          <div className="flex-1 mr-14">
            <h2 className="text-2xl font-bold">Cart</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[400px]">Item</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cartList.map((cartItem, index) => (
                  <TableRow key={cartItem.product.id + index}>
                    <TableCell>
                      <div className="flex items-center">
                        <Image
                          src={cartItem.product.image}
                          alt={cartItem.product.name}
                          width={64}
                          height={64}
                          priority
                          style={{
                            width: '64px',
                            height: '64px',
                            objectFit: 'cover',
                          }}
                        />
                        <div className="ml-4 space-y-3">
                          <p className="text-sm font-medium">{cartItem.product.name}</p>
                          <p className="text-xs text-gray-400">{cartItem.selecVariant}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Trash2
                          className="mr-1"
                          color="gray"
                          cursor={'pointer'}
                          onClick={() => handleClick(index)}
                        />
                        <Select
                          value={cartItem.quantity.toString()}
                          onValueChange={(value) => handleValueChange(index, value)}
                        >
                          <SelectTrigger className="w-14">
                            <SelectValue placeholder="Select"></SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {quantityOptions.map((quantity) => (
                              <SelectItem
                                key={quantity}
                                value={quantity.toString()}
                              >
                                {quantity}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </TableCell>
                    <TableCell>{cartItem.product.price}</TableCell>
                    <TableCell className="text-right">
                      ${cartItem.product.price * cartItem.quantity}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="w-56">
            <h2 className="font-sans font-medium flex flex-row text-2xl mb-6">Total</h2>
            <p className="text-2xl font-bold text-red-400 mb-6">
              ${cartList.reduce((pre, cur) => pre + Number(cur.product.price * cur.quantity), 0)}
            </p>
            <Link href="/checkout">
              <Button className="w-full cursor-pointer">Checkout</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="py-48 px-2">
          <h2 className="text-2xl font-bold">Cart</h2>
          <p className="text-sm w-[400px] mt-4 mb-6">
            You have no items in your cart. Start adding some! let&apos;s go shopping!
          </p>
          <div className="flex text-sm items-center underline text-orange-400">
            <Link href={'/'}>Start Shopping</Link>
            <ArrowUpRight width={18} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
