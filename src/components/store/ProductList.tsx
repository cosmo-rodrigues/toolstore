'use client';

import { ProductOnSale } from '@/components/store/ProductOnSale';
import { useProductStore } from '@/zustand-store/producttStore';

export function ProductList() {
  const products = useProductStore((state) => state.products);

  return (
    <>
      {products.length > 0 && (
        <div className="sm:px-20 md:px-10 space-y-7">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductOnSale key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
