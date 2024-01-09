import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import * as Shad from '@/components/ui/carousel';

import { Product } from '@/types/product';
import Image from 'next/image';

export function Carousel({ product }: { product: Product }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Shad.Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <Shad.CarouselContent>
        {product.images.map((image, index) => (
          <Shad.CarouselItem key={`${index}__${product.title}`}>
            <Image
              src={image}
              alt={product.title}
              height={1200}
              width={1200}
              className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
          </Shad.CarouselItem>
        ))}
      </Shad.CarouselContent>
      <Shad.CarouselPrevious />
      <Shad.CarouselNext />
    </Shad.Carousel>
  );
}
