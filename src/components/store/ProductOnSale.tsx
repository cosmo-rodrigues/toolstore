'use client';

import * as Shad from '@/components/ui';

import { Product } from '@/types/product';
import { Carousel } from './Carousel';
import { useCartStore } from '@/zustand-store/cartStore';

interface ProductOnSale {
  product: Product;
}

export function ProductOnSale({ product }: ProductOnSale) {
  const cartProduct = useCartStore();

  function handleAddToCart(product: Product) {
    cartProduct.addProduct(product);
  }

  return (
    <Shad.Card className="flex flex-col items-center justify-between px-7 aspect-square bg-foreground/5 rounded-lg h-full w-[370px]">
      <Shad.CardContent className="pt-4">
        <Carousel product={product} />
      </Shad.CardContent>
      <Shad.CardFooter className="flex-col items-start self-start">
        <div>
          <p className="font-semibold text-lg">{product.title}</p>
          <p className="text-sm text-primary/80">{product.category}</p>
        </div>
        <div>{product?.price}</div>
      </Shad.CardFooter>
      <Shad.CardFooter className="flex items-center self-end -mt-10">
        <Shad.Button onClick={() => handleAddToCart(product)}>ADD</Shad.Button>
      </Shad.CardFooter>
    </Shad.Card>
  );
}
