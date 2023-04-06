import { NavBar } from './nav-bar';

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-14 lg:px-0">
      <div className="flex items-center gap-4">
        <h1 className="font-heading text-2xl text-neutral-300">
          Marko Djordjevic
        </h1>
      </div>
      <NavBar />
    </header>
  );
}
