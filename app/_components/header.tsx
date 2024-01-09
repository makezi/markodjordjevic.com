import Link from 'next/link';

import { Socials } from './socials';

export function Header() {
  return (
    <header className="flex w-full items-center justify-between px-8 pb-20">
      <Link href="/">
        <h1 className="text-3xl font-bold">Marko Djordjevic</h1>
      </Link>

      <div className="hidden md:block">
        <Socials />
      </div>
    </header>
  );
}
