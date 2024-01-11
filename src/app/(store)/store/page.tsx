// @ts-nocheck
'use client';

import { useCookies } from 'next-client-cookies';

import { StoreFooter } from '@/components/store/StoreFooter';
import { ProductList } from '@/components/store/ProductList';
import { StoreBar } from '@/components/store/StoreBar';
import * as Shad from '@/components/ui';
import { products } from '@/data/products';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { useCallback } from 'react';
import { useProductStore } from '@/zustand-store/producttStore';
import { Product } from '@/types/product';
import { PostgrestError } from '@supabase/supabase-js';

export default function Store() {
  const setProducts = useProductStore((state) => state.setProducts);
  const cookies = useCookies();

  const supabase = createServerComponentClient({ cookies: () => cookies });
  const getAllProds = useCallback(async () => {
    try {
      const { error, data } = await supabase.from('products').select('*');

      console.log(data);
      if (error) {
        console.error('LIST: ', error);
        return error;
      }

      setProducts(data);
    } catch (error) {
      console.error('LIST: ', error);
    }
  }, [supabase, setProducts]);

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
