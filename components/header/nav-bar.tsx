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
  },
  '/about': {
    name: 'About'
  }
};

export function NavBar() {
  let pathname = usePathname() || '/';

  if (pathname.includes('/blog/')) {
    pathname = '/blog/';
  }

  return (
    <nav>
      <ul className="flex items-center justify-between transition-all">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;

          return (
            <li key={path} className="relative px-4 py-2">
              <Link
                href={path}
                className={cn(
                  'font-medium text-neutral-500 transition-all hover:text-neutral-200',
                  {
                    'text-neutral-200': isActive
                  }
                )}
              >
                <span>{name}</span>
                {isActive ? (
                  <div
                    className={cn(
                      'absolute inset-0 -z-10 h-full rounded-lg bg-zinc-900'
                    )}
                  />
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
