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

export function Nav() {
  let pathname = usePathname() || '/';

  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <nav>
      <ul className="flex flex-col">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;

          return (
            <li key={path} className="w-full">
              <Link
                href={path}
                className={cn(
                  'inline-block h-full w-full py-1 font-heading text-lg text-body-secondary transition-all hover:text-body',
                  {
                    'text-body': isActive
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
