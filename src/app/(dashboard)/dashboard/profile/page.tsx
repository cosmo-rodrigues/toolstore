import * as Shad from '@/components/ui';
import Link from 'next/link';
export default function Profile() {
  return (
    <Shad.Container className="flex flex-1 flex-col justify-start items-center w-screen h-screen pt-10">
      <h1 className="text-5xl">Awesome Profile Page</h1>

      <ol className="flex mt-5 space-x-5">
        <li>
          <Link href="/store">Store</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </Shad.Container>
  );
}
