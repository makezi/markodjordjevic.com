import Link from 'next/link';

import { NavBar } from './nav-bar';

export function Header() {
  return (
    <header className="container flex flex-col justify-between space-y-4 py-8 md:flex-row md:items-center md:space-y-0 md:py-10">
      <div className="flex items-center gap-4">
        <h1 className="font-heading text-2xl text-neutral-300">
          <Link href="/">Marko Djordjevic</Link>
        </h1>
      </div>
      <NavBar />
    </header>
  );
}
