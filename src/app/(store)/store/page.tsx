import { StoreBar } from '@/components/store/StoreBar';
import * as Shad from '@/components/ui';

export default function Store() {
  return (
    <>
      <StoreBar />
      <Shad.Container className="h-full">
        <h1>Store</h1>
      </Shad.Container>
    </>
  );
}
