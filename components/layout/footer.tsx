import { cn } from '@/lib/utils';
import { GithubIcon, TwitterIcon } from '@/components/icons';

const navLinkClass = cn(
  'p-2 text-lg text-body-secondary transition-all hover:text-body'
);

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-neutral-300 px-10 py-4">
      <ul className="-ml-4 flex flex-row">
        <li className="flex">
          <a
            href="https:twitter.com/makezid"
            className={navLinkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </a>
        </li>
        <li className="flex">
          <a
            href="httpsgithub.com/makezi"
            className={navLinkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </li>
      </ul>

      <span className="font-heading">© Marko Djordjevic 2023</span>
    </footer>
  );
}
