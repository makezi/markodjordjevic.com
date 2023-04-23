import Link, { LinkProps } from 'next/link';
import type { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';
import { GithubIcon, TwitterIcon } from '@/components/icons';

const navLinkClass = cn(
  'p-2 font-heading text-body transition-all hover:text-heading sm:text-lg'
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
    <footer className="border-t border-neutral-800 p-4 sm:p-6">
      <div className="container flex max-w-4xl flex-col items-center justify-between space-y-6 sm:flex-row sm:space-y-0">
        <ul className="flex items-center space-x-4">
          <div className="-ml-2 flex">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/uses">Uses</FooterLink>
          </div>

          <div className="flex flex-row space-x-4">
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
                href="https//github.com/makezi"
                className={navLinkClass}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GithubIcon />
              </a>
            </li>
          </div>
        </ul>

        <span className="font-heading text-body sm:text-lg">
          © Marko Djordjevic 2023
        </span>
      </div>
    </footer>
  );
}
