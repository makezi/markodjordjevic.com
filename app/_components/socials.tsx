import { ExternalLink } from 'lucide-react';

const socials = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/makezid'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/makezi'
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@onlywebdevs'
  },
  {
    label: 'Email',
    href: 'mailto:hello@markodjordjevic.com'
  }
];

export function Socials() {
  return (
    <nav className="flex flex-col gap-2 md:flex-row">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="flex items-center p-2 text-lg text-muted-foreground hover:text-foreground"
        >
          {social.label}
          <ExternalLink className="ml-2" size="18" />
        </a>
      ))}
    </nav>
  );
}
