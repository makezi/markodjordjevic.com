import Link from 'next/link';

import { NavBar } from './nav-bar';

export function Header() {
  return (
    <header className="container flex max-w-4xl flex-col justify-between space-y-4 px-4 py-8 sm:flex-row sm:items-center sm:space-y-0 sm:px-6 sm:py-16">
      <h1 className="font-heading text-xl text-heading sm:text-2xl">
        <Link href="/">Marko Djordjevic</Link>
      </h1>
      <NavBar />
    </header>
  );
}
