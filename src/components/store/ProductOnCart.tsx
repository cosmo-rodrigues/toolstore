'use client';

import { Product } from '@/types/product';
import * as Shad from '@/components/ui';
import { Carousel } from './Carousel';
import { useCartStore } from '@/zustand-store/cartStore';

export function ProductOnCart() {
  const removeProduct = useCartStore((state) => state.removeProduct);
  const products = useCartStore((state) => state.products);

  function handleRemoveFromCart(productId: string) {
    removeProduct(productId);
  }

  return (
    <>
      {products.map((product) => (
        <Shad.Card
          key={product.id}
          className="flex flex-col items-center justify-between aspect-square bg-foreground/5 rounded-lg h-fit w-[270px]"
        >
          <Shad.CardContent className="pt-2">
            <Carousel product={product} />
          </Shad.CardContent>
          <Shad.CardFooter className="flex-col items-start self-start">
            <div>
              <p className="font-semibold text-lg">{product.title}</p>
            </div>
            <div>
              {product.currency || '$'}
              {product?.price}
            </div>
          </Shad.CardFooter>
          <Shad.CardFooter className="flex items-center self-end -mt-10">
            <Shad.Button
              variant="destructive"
              onClick={() => handleRemoveFromCart(product.id!)}
            >
              REMOVE
            </Shad.Button>
          </Shad.CardFooter>
        </Shad.Card>
      ))}
    </>
  );
}
