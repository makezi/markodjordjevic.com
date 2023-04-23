'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const navItems = {
  '/': {
    name: 'Home'
  },
  '/blog': {
    name: 'Blog'
  }
};

export function NavBar() {
  let pathname = usePathname() || '/';

  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <nav>
      <ul className="-ml-2 flex items-center sm:-ml-0 sm:-mr-2">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;

          return (
            <li key={path}>
              <Link
                href={path}
                className={cn(
                  'p-2 font-heading text-body transition-all hover:text-heading sm:text-lg',
                  {
                    'text-heading hover:text-heading': isActive
                  }
                )}
              >
                <span>{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
