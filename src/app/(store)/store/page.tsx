import { StoreFooter } from '@/components/store/StoreFooter';
import { ProductList } from '@/components/store/ProductList';
import { StoreBar } from '@/components/store/StoreBar';
import * as Shad from '@/components/ui';
import { products } from '@/data/prodcts';

export default function Store() {
  return (
    <>
      <StoreBar />
      <Shad.Container className="py-10 flex flex-grow-0 items-center justify-center h-auto w-screen dark:bg-slate-900">
        <ProductList products={products} shouldUseCarousel={true} />
      </Shad.Container>
      <StoreFooter />
    </>
  );
}
