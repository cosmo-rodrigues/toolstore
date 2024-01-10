import { StoreFooter } from '@/components/store/StoreFooter';
import { ProductList } from '@/components/store/ProductList';
import { StoreBar } from '@/components/store/StoreBar';
import * as Shad from '@/components/ui';
import { products } from '@/data/prodcts';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { useCallback } from 'react';

export default function Store() {
  const supabase = createServerComponentClient({ cookies });
  const getAllProds = useCallback(async () => {
    try {
      const { error, data } = await supabase.from('profiles').select('*');
      console.log(data);

      if (error) console.error('LIST: ', error);
    } catch (error) {
      console.error('LIST: ', error);
    }
  }, [supabase]);

  getAllProds();

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
