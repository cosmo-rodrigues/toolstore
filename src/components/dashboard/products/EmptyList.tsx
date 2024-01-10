import * as Shad from '@/components/ui';
import { AddProduct } from './AddProduct';

export function ProductsEmptyList() {
  return (
    <div className="flex h-full shrink-0 items-center justify-center bg-slate-400">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-store"
        >
          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
          <path d="M2 7h20" />
          <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
        </svg>

        <h3 className="mt-4 text-lg font-semibold">No products added</h3>
        <p className="mb-4 mt-2 text-sm text-muted">
          You have not added any products yet. Add one below.
        </p>
        <Shad.Dialog>
          <Shad.DialogTrigger asChild>
            <Shad.Button size="sm" className="relative">
              Add Products
            </Shad.Button>
          </Shad.DialogTrigger>
          <Shad.DialogContent>
            <AddProduct />
          </Shad.DialogContent>
        </Shad.Dialog>
      </div>
    </div>
  );
}
