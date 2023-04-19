import Link from 'next/link';

import { NavBar } from './nav-bar';

export function Header() {
  return (
    <header className="container flex max-w-4xl items-center justify-between px-6 py-16">
      <h1 className="font-heading text-xl text-heading">
        <Link href="/">Marko Djordjevic</Link>
      </h1>
      <NavBar />
    </header>
  );
}
