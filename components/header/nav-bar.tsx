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
    pathname = '/blog';
  }

  return (
    <nav>
      <ul className="flex items-center">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;

          return (
            <li key={path}>
              <Link
                href={path}
                className={cn(
                  'px-4 py-2 font-heading text-body-secondary transition-all hover:text-body hover:underline hover:decoration-2 hover:underline-offset-4 sm:text-lg',
                  {
                    'underline underline-offset-4 decoration-2 text-body ':
                      isActive
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
