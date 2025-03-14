import { CartItem } from "@/Types/global";
import { create } from "zustand";
import { persist } from "zustand/middleware"

interface CartState {
  cartList: CartItem[]
}

interface CartStroeAction {
  addToCart: (product: CartItem) => void
  removeFromCart: (productId: number) => void
  isItemInCart: (name: string, selectVariant: string) => number
  updateQuantity: (index: number, quantity: number) => void

}

export const CartStore = create<CartState & CartStroeAction>()(persist((set, get) => {
  return {
    cartList: [] as CartItem[],
    addToCart: (product) => {
      set((state) => {
        return {
          cartList: [...state.cartList, product]
        }
      })
    },
    removeFromCart: (number: number) => {
      set((state) => {
        const newCartList = [...state.cartList]
        newCartList.splice(number, 1)
        return { cartList: newCartList }
      })
    },
    isItemInCart: (name, selectVariant): number => {
      return get().cartList.findIndex((item) => item.product.name === name && item.selecVariant === selectVariant)
    },
    updateQuantity: (index, quantity) => {
      set((state) => {
        const newCartList = [...state.cartList]
        newCartList[index].quantity = quantity
        return { cartList: newCartList }

      })
    },
  }
}, { name: 'cart' }))