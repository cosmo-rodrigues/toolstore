'use client';

import { ProductOnSale } from '@/components/store/ProductOnSale';
import { Product } from '@/types/product';

interface ProductListProps {
  products: Product[];
  shouldUseCarousel?: boolean;
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="sm:px-20 md:px-10 space-y-7">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductOnSale key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
