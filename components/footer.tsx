import Link, { LinkProps } from 'next/link';
import type { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

import { GithubIcon, TwitterIcon } from './icons';

const navLinkClass = cn(
  'font-heading text-lg text-neutral-400 transition-all hover:text-neutral-300'
);

function FooterLink({ children, ...props }: PropsWithChildren<LinkProps>) {
  return (
    <li>
      <Link {...props} className={navLinkClass}>
        {children}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="container flex flex-col justify-between space-y-10 border-t border-zinc-800 py-8 sm:flex-row sm:space-y-0 sm:py-14">
      <ul className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0 md:space-x-8">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/blog">Blog</FooterLink>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/uses">Uses</FooterLink>

        <div className="flex items-center space-x-6 sm:space-x-6 md:space-x-8">
          <li>
            <a
              href="https://twitter.com/makezid"
              className={navLinkClass}
              rel="noopener noreferrer"
              target="_blank"
            >
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/makezi"
              className={navLinkClass}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIcon />
            </a>
          </li>
        </div>
      </ul>
      <span>© Marko Djordjevic 2023</span>
    </footer>
  );
}
