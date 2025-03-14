'use client';

import { Product } from '@/Types/global';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { useShallow } from 'zustand/shallow';
import { Button } from './ui/button';
import { useState } from 'react';
import { Separator } from './ui/separator';
import { CartStore } from '@/store/CartStore';

interface AddCartType {
  product: Product;
}

const AddCart = (props: AddCartType) => {
  const { product } = props;
  const [value, setValue] = useState('');
  const { cartList, addToCart, isItemInCart, updateQuantity } = CartStore(
    useShallow((state) => {
      return {
        cartList: state.cartList,
        addToCart: state.addToCart,
        removeFromCart: state.removeFromCart,
        isItemInCart: state.isItemInCart,
        updateQuantity: state.updateQuantity,
      };
    })
  );

  const handleValueChange = (value: string) => {
    setValue(value);
  };

  const handleClick = () => {
    const index = isItemInCart(product.name, value);
    if (index < 0)
      addToCart({
        product,
        quantity: 1,
        selecVariant: value,
      });
    else updateQuantity(index, cartList[index].quantity + 1);
    setValue('');
  };
  return (
    <div className="w-80 py-12">
      <h2 className="text-xl mb-4">Select Variant</h2>
      <ToggleGroup
        variant={'outline'}
        className="justify-start mb-6"
        type="single"
        size="default"
        value={value}
        onValueChange={handleValueChange}
      >
        {product.variant.map((item) => (
          <ToggleGroupItem
            key={item}
            className="px-4 bg-slate-50 mr-3"
            style={{ fontSize: '18px' }}
            value={item}
          >
            {item}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Separator className="w-[1px] mb-4" />
      <h3>Price</h3>
      <p className="text-2xl font-bold text-red-400 mb-6">{product.price}</p>
      <Button
        disabled={!value.length}
        onClick={handleClick}
        className="cursor-pointer"
      >
        Add to cart
      </Button>
    </div>
  );
};

export default AddCart;
