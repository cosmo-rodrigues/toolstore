import { DotsLoading } from '@/components/Loaging';
import { ProductList } from '@/components/store/ProductList';
import { StoreBar } from '@/components/store/StoreBar';
import * as Shad from '@/components/ui';
import { products } from '@/data/prodcts';

export default function Store() {
  return (
    <>
      <StoreBar />
      <Shad.Container className="py-10 flex flex-grow-0 items-center justify-center h-auto w-screen">
        <ProductList products={products} shouldUseCarousel={true} />
      </Shad.Container>
    </>
  );
}
