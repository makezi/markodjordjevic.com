import { Nav } from './nav';

function Logo() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950">
      <span className="mb-1 font-heading text-neutral-50">md</span>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-20 flex w-[160px] shrink-0 flex-col space-y-8 self-start">
      <Logo />
      <Nav />
    </aside>
  );
}
