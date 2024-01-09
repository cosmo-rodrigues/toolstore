'use client';

import Link from 'next/link';
import * as Shad from '../ui';

const links = [
  {
    id: 1,
    label: 'Link 01',
    href: '/link_01',
  },
  {
    id: 2,
    label: 'Link 02',
    href: '/link_02',
  },
  {
    id: 3,
    label: 'Link 03',
    href: '/link_03',
  },
  {
    id: 4,
    label: 'Link 04',
    href: '/link_04',
  },
  {
    id: 5,
    label: 'Link 05',
    href: '/link_05',
  },
];

export function Footer() {
  return (
    <footer className="sm:flex sm:flex-col sm:justify-between py-3 px-4 border-b">
      <Shad.Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <nav className="mx-auto flex items-center space-x-4 lg:space-x-6">
            {links.map((each) => (
              <Shad.Button key={each.id} asChild variant="ghost">
                <Link href={each.href}>{each.label}</Link>
              </Shad.Button>
            ))}
          </nav>
        </div>
      </Shad.Container>
    </footer>
  );
}
