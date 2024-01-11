import * as Shad from '@/components/ui';
import { Product } from '@/types/product';

export function RegisteredProductsList({ products }: { products: Product[] }) {
  return (
    <Shad.Container className="flex flex-col justify-center items-center py-10 w-fit sm:w-full px-5">
      <Shad.Table>
        <Shad.TableCaption>A list of your recent invoices.</Shad.TableCaption>
        <Shad.TableHeader>
          <Shad.TableRow>
            <Shad.TableHead>Title</Shad.TableHead>
            <Shad.TableHead>Price</Shad.TableHead>
            <Shad.TableHead>Category</Shad.TableHead>
            <Shad.TableHead className="text-right">Description</Shad.TableHead>
          </Shad.TableRow>
        </Shad.TableHeader>
        <Shad.TableBody>
          {products.map((product) => (
            <Shad.TableRow
              key={product.id}
              className="whitespace-nowrap text-ellipsis overflow-hidden"
            >
              <Shad.TableCell className="whitespace-nowrap text-ellipsis overflow-hidden max-w-[100px]">
                {product.title}
              </Shad.TableCell>
              <Shad.TableCell>{product.price}</Shad.TableCell>
              <Shad.TableCell>{product.category}</Shad.TableCell>
              <Shad.TableCell className="whitespace-nowrap text-ellipsis overflow-hidden max-w-[100px]">
                {product.description}
              </Shad.TableCell>
            </Shad.TableRow>
          ))}
        </Shad.TableBody>
        <Shad.TableFooter>
          <Shad.TableRow>
            <Shad.TableCell colSpan={3}>Total</Shad.TableCell>
            <Shad.TableCell className="text-right">
              ${products.reduce((a, b) => a + b.price, 0).toFixed(2)}
            </Shad.TableCell>
          </Shad.TableRow>
        </Shad.TableFooter>
      </Shad.Table>
    </Shad.Container>
  );
}
