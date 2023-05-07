import { cn } from '@/lib/utils';
import { GithubIcon, MailIcon, TwitterIcon } from '@/components/icons';

const navLinkClass = cn(
  'p-2 text-lg text-body-secondary transition-all hover:text-body'
);

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-neutral-300 p-4 md:px-10">
      <ul className="-ml-2 flex flex-row md:-ml-4">
        <li className="flex">
          <a
            href="https://twitter.com/makezid"
            className={navLinkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </a>
        </li>
        <li className="flex">
          <a
            href="https://github.com/makezi"
            className={navLinkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </li>
        <li className="flex">
          <a href="mailto:hello@markodjordjevic.com" className={navLinkClass}>
            <MailIcon />
          </a>
        </li>
      </ul>

      <span className="font-heading text-body-secondary">
        © Marko Djordjevic 2023
      </span>
    </footer>
  );
}
