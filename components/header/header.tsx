import Link from 'next/link';

import { NavBar } from './nav-bar';

export function Header() {
  return (
    <header className="flex items-center justify-between py-12">
      <h1 className="font-heading text-2xl">
        <Link href="/">Marko Djordjevic</Link>
      </h1>
      <NavBar />
    </header>
  );
}
