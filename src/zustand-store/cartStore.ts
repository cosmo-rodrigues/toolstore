import {create} from "zustand"
import { devtools, persist } from "zustand/middleware"
import { Product } from '@/types/product';

interface CartProduct {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
}

type SetState = (fn: (prevState: CartProduct) => CartProduct) => void

const cartStore = (set: SetState): CartProduct => ({
  // initial state
  products: [],
  // methods for manipulating state
  addProduct(product: Product) {
    set((state) => ({
      ...state,
      products: [
        ...state.products,
          product,
      ],
    }));
  },
  removeProduct: (id) => {
    set((state) => ({
      ...state,
      products: state.products.filter((todo) => todo.id !== id),
    }));
  },
});

export const useCartStore = create(devtools(persist(cartStore, { name: "cartStore" })))
