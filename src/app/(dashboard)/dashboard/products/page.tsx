'use client';

import * as Shad from '@/components/ui';
import { ProductsEmptyList } from '@/components/dashboard/products/EmptyList';
import { useProductStore } from '@/zustand-store/producttStore';
import { RegisteredProductsList } from '@/components/dashboard/products/RegisteredProductsList';
import { AddProduct } from '@/components/dashboard/products/AddProduct';

export default function Products() {
  const products = useProductStore((state) => state.products);

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <Shad.Dialog>
        <Shad.DialogTrigger asChild>
          <Shad.Button size="sm" className="relative">
            Add Products
          </Shad.Button>
        </Shad.DialogTrigger>
        <Shad.DialogContent>
          <AddProduct />
        </Shad.DialogContent>
      </Shad.Dialog>
      {products.length > 0 ? (
        <RegisteredProductsList products={products} />
      ) : (
        <ProductsEmptyList />
      )}
    </div>
  );
}
