import { Nav } from './nav';

function Logo() {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-950">
      <span className="mb-1 font-heading text-neutral-50">md</span>
    </div>
  );
}

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 md:py-10">
      <Logo />
      <Nav />
    </header>
  );
}
