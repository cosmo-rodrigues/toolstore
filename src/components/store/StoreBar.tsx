'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import * as Shad from '../ui';
import { Menu, Moon, ShoppingCart, Sun } from 'lucide-react';
import SearchBar from './SearchBar';
import Image from 'next/image';

export function StoreBar() {
  const { theme, setTheme } = useTheme();
  const routes = [
    {
      href: '/store',
      label: 'Products',
    },
    {
      href: '/store',
      label: 'Categories',
    },
  ];

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b bg-orange-600 dark:bg-black text-white">
      <Shad.Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center lg:space-x-6 hidden md:block">
            <Link href="/store" className="flex items-center">
              <Image src="favicon.svg" height={40} width={40} alt="log" />
              <h1 className="text-xl font-bold ml-3">TOOLSTORE</h1>
            </Link>
          </div>
          <nav className="w-full max-w-xl mx-6 flex items-center space-x-4 lg:space-x-6">
            <SearchBar />
          </nav>
          <div className="flex items-center">
            <Shad.Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Shad.Button>
            <Shad.Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Shad.Button>
          </div>
        </div>
      </Shad.Container>
    </header>
  );
}
