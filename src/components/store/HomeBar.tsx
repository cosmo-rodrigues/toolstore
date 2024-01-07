'use client';

import Link from 'next/link';
import * as Shad from '../ui';
import Image from 'next/image';

export function HomeBar() {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b ">
      <Shad.Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/store" className="flex items-center">
              <Image src="favicon.svg" height={40} width={40} alt="log" />
              <h1 className="text-xl font-bold ml-3">TOOLSTORE</h1>
            </Link>
          </div>

          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            <Shad.Button asChild variant="ghost">
              <Link href="/help">Do you need help?</Link>
            </Shad.Button>
          </nav>
        </div>
      </Shad.Container>
    </header>
  );
}
