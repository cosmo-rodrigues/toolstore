'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import * as Shad from '../ui';
import { Moon, ShoppingCart, Sun } from 'lucide-react';
import SearchInput from './SearchInput';
import Image from 'next/image';
import { products } from '@/data/products';
import { useUserStore } from '@/zustand-store/userStore';
import { ProfileButton } from '../ProfileButton';

export function StoreBar() {
  const { theme, setTheme } = useTheme();
  const userStore = useUserStore();

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
    <header className="sm:flex sm:justify-between py-3 px-4 border-b bg-orange-600 dark:bg-slate-950 text-white">
      <Shad.Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center lg:space-x-6 hidden md:block">
            <Link href="/store" className="flex items-center">
              <Image src="/favicon.svg" height={40} width={40} alt="log" />
              <h1 className="text-xl font-bold ml-3">TOOLSTORE</h1>
            </Link>
          </div>
          <nav className="w-full max-w-xl mx-6 flex items-center space-x-4 lg:space-x-6">
            <SearchInput />
          </nav>
          <div className="flex items-center">
            <Shad.Sheet>
              <Shad.SheetTrigger>
                <ShoppingCart className="h-6 w-6" />
              </Shad.SheetTrigger>
              <Shad.SheetContent
                side="right"
                className="px-10  w-[300px] sm:w-[400px] overflow-auto"
              >
                <div className="flex flex-col gap-4">
                  <p className="text-lg font-bold">
                    {products.length} products on cart
                  </p>
                  <p>Product 01</p>
                  <p>Product 02</p>
                  <p>Product 03</p>
                  <p>Product 04</p>
                  <p>Product 05</p>
                  <p>Product 06</p>
                  <p>Product 07</p>
                </div>
              </Shad.SheetContent>
            </Shad.Sheet>
            <Shad.Button
              className="ml-3 mr-6"
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Shad.Button>
            {userStore.isAuthenticated ? (
              <ProfileButton />
            ) : (
              <Shad.Button asChild variant="ghost" className="ml-3">
                <Link href="/">LOGIN</Link>
              </Shad.Button>
            )}
          </div>
        </div>
      </Shad.Container>
    </header>
  );
}
