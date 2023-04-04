import { NavBar } from './nav-bar';

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-8 lg:px-0">
      <h1 className="text-2xl font-medium">Marko Djordjevic</h1>
      <NavBar />
    </header>
  );
}
