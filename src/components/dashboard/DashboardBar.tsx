'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, Moon, ShoppingCart, Sun } from 'lucide-react';

import * as Shad from '@/components/ui';
import { ProfileButton } from '../ProfileButton';
import Image from 'next/image';

export function DashboardBar() {
  const { theme, setTheme } = useTheme();

  const routes = [
    {
      href: '/dashboard/products',
      label: 'Products',
    },
    {
      href: '/dashboard/categories',
      label: 'Categories',
    },
    {
      href: '/store',
      label: 'On Sale',
    },
  ];

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b dark:bg-slate-950">
      <Shad.Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Shad.Sheet>
              <Shad.SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </Shad.SheetTrigger>
              <Shad.SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </Shad.SheetContent>
            </Shad.Sheet>
            <Link href="/store" className="flex items-center">
              <Image src="/favicon.svg" height={40} width={40} alt="log" />
              <h1 className="text-xl font-bold ml-3">TOOLSTORE</h1>
            </Link>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            {routes.map((route, i) => (
              <Shad.Button key={i} asChild variant="ghost">
                <Link
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Shad.Button>
            ))}
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
              className="mr-6"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Shad.Button>
            <ProfileButton />
          </div>
        </div>
      </Shad.Container>
    </header>
  );
}
