
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"
import { Product } from '@/types/product';

interface Products {
  products: Product[];
  setProducts?: (product: Product[]) => void;
}

type SetState = (fn: (prevState: Products) => Products) => void

const productStore = (set: SetState): Products => ({
  // initial state
  products: [],
  // methods for manipulating state
  setProducts(product: Product[]) {
    set(() => ({
      products: [
        ...product,
      ],
    }));
  },
});

export const useProductStore = create(devtools(persist(productStore, { name: "productStore" })))
