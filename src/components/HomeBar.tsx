'use client';

import Link from 'next/link';
import * as Shad from './ui';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function HomeBar() {
  const { theme, setTheme } = useTheme();

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

          <div className="flex justify-between items-center">
            <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
              <Shad.Button asChild variant="ghost">
                <Link href="/help">Do you need help?</Link>
              </Shad.Button>
            </nav>

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
