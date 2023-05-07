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
    <aside className="flex w-full shrink-0 items-center justify-between self-start md:sticky md:top-20 md:w-[160px] md:flex-col md:items-start md:justify-normal md:space-y-8">
      <Logo />
      <Nav />
    </aside>
  );
}
