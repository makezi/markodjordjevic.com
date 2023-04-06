'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { TwitterIcon, GithubIcon } from '@/components/icons';
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

const navLinkClass = cn(
  'font-heading text-lg text-neutral-400 transition-all hover:text-neutral-300'
);

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
                className={cn(navLinkClass, {
                  'text-neutral-300': isActive
                })}
              >
                <span>{name}</span>
                {isActive ? (
                  <div
                    className={cn(
                      'absolute inset-0 -z-10 h-full rounded-lg bg-zinc-800'
                    )}
                  />
                ) : null}
              </Link>
            </li>
          );
        })}

        <li className="relative px-4 py-2">
          <a
            href="https://twitter.com/makezid"
            className={navLinkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </a>
        </li>

        <li className="relative px-4 py-2">
          <a
            href="https://github.com/makezi"
            className={navLinkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
