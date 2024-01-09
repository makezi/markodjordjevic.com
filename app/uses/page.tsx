import type { Metadata } from 'next';

const description =
  "Here's everything that I'm currently using for coding as well as other things such as services and desk setup.";

export const metadata: Metadata = {
  title: 'Uses',
  description
};

type Uses = {
  label: string;
  description?: string;
  href?: string;
};

const editorUses: Uses[] = [
  {
    label: 'VSCode',
    href: 'https://code.visualstudio.com/'
  },
  {
    label: 'Github Dark Default',
    href: 'https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme'
  },
  {
    label: 'MonoLisa font',
    href: 'https://www.monolisa.dev/'
  }
];

const techStackUses: Uses[] = [
  {
    label: 'React',
    href: 'https://reactjs.org/',
    description: "The frontend library that I've used since 2018."
  },
  {
    label: 'NextJS',
    href: 'https://nextjs.org/',
    description: 'My framework of choice to build modern web apps.'
  },
  {
    label: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    description:
      "Only started transitioning to TypeScript since late 2021 but I can't imagine building web apps without it now."
  },
  {
    label: 'Prettier',
    href: 'https://prettier.io/',
    description: 'An opinionated code formatter. Why live in chaos?'
  },
  {
    label: 'shadcn/ui',
    href: 'https://ui.shadcn.com/',
    description:
      'Hands down the best, most accessible and customizable react components ever. Built on top of Radix UI. Highly highly recommended!'
  },
  {
    label: 'TailwindCSS',
    href: 'https://tailwindcss.com/',
    description:
      'A quick and efficient way to get a design system up and running consistently.'
  },
  {
    label: 'Playright',
    href: 'https://playwright.dev/',
    description: 'What I use for E2E testing. Previously it was Cypress.'
  },
  {
    label: 'Vitest',
    href: 'https://vitest.dev/',
    description: 'My testing framework of choice. Previously it was Jest.'
  },
  {
    label: 'Zod',
    href: 'https://github.com/colinhacks/zod',
    description:
      'Great for validating against forms, environment variables, external APIs... Anything really.'
  }
];

const softwareUses: Uses[] = [
  {
    label: 'Default Mac Terminal'
  },
  {
    label: 'Oh My Zsh',
    href: 'https://ohmyz.sh/',
    description:
      'Includes plugins like `zsh-autosuggestions` and `zsh-syntax-highlighting`.'
  },
  {
    label: 'Raycast',
    href: 'https://www.raycast.com/',
    description:
      'Replaces my Spotlight with cool plugins and window management.'
  },
  {
    label: '1Password',
    href: 'https://1password.com/'
  },
  {
    label: 'Figma',
    href: 'https://www.figma.com/'
  },
  {
    label: 'Spotify',
    href: 'https://www.spotify.com/'
  },
  {
    label: 'Google Drive',
    href: 'https://www.google.com/intl/en_au/drive/'
  },
  {
    label: 'Notion',
    href: 'https://www.notion.so/',
    description: 'For organizing my personal and work notes.'
  },
  {
    label: 'Postman',
    href: 'https://www.postman.com/',
    description: 'Testing APIs.'
  }
];

const deskSetupUses: Uses[] = [
  {
    label: '15" Macbook Air (2023)',
    description: '1TB, 16GB ram'
  },
  {
    label: 'Gigabyte M27Q P',
    href: 'https://www.amazon.com/GIGABYTE-M27Q-PRO-Monitor-Response/dp/B09Z6VRX8F',
    description: 'This is my main monitor (and for gaming 🤓).'
  },
  {
    label: 'Keychron K3 Ultra-slim Wireless Mechanical Keyboard (Version 2)',
    href: 'https://www.amazon.com.au/Keychron-Bluetooth-Ultra-Slim-Aluminium-Keyboard/dp/B08LS6FMWC/ref=sr_1_2?crid=UHCAWT9ID1NS&keywords=keychron%2Bk3&qid=1704797222&sprefix=keychron%2Bk3%2Caps%2C219&sr=8-2&th=1',
    description: 'Low Profile Gateron Mechanical (Brown Switches)'
  },
  {
    label: 'Apple Magic Trackpad',
    href: 'https://amzn.to/43cwbkF',
    description: 'I have the old one with replaceable batteries.'
  },
  {
    label: 'SteelSeries Qck XXL Thick Cloth',
    href: 'https://amzn.to/3KDbg2W',
    description:
      'Covers a huge amount of space on my desk to fit my keyboard and trackpad.'
  },
  {
    label: 'Satechi USB-C Hub',
    href: 'https://amzn.to/3KkcX3M',
    description: "What I use when I'm out and about."
  },
  {
    label: 'Apple AirPods (2nd Generation)',
    href: 'https://amzn.to/3KlPhfH',
    description:
      'Used sometimes for video call meetings, in office, or a nice stroll in the sun.'
  },
  {
    label:
      'Custom Made Automatic Height Adjustable Table (Black Frame, Dark Oak Top)'
  },
  {
    label: 'IKEA Markus Dark Grey Office Chair',
    href: 'https://www.ikea.com/au/en/p/markus-office-chair-vissle-dark-grey-50261151/'
  }
];

function UsesLinkListItem({ label, description, href }: Uses) {
  return (
    <li>
      {href ? (
        <a href={href} rel="noopener noreferrer" target="_blank">
          {label}
        </a>
      ) : (
        label
      )}
      {description ? <> - {description}</> : null}
    </li>
  );
}

export default function UsesPage() {
  return (
    <main className="container prose prose-lg text-muted-foreground">
      <h2>Uses</h2>
      <p>{description}</p>

      <h3>Editor</h3>
      <ul>
        {editorUses.map((item) => (
          <UsesLinkListItem key={item.label} {...item} />
        ))}
      </ul>

      <h3>Tech Stack</h3>
      <ul>
        {techStackUses.map((item) => (
          <UsesLinkListItem key={item.label} {...item} />
        ))}
      </ul>

      <h3>Software</h3>
      <ul>
        {softwareUses.map((item) => (
          <UsesLinkListItem key={item.label} {...item} />
        ))}
      </ul>

      <h3>Desk Setup</h3>
      <ul>
        {deskSetupUses.map((item) => (
          <UsesLinkListItem key={item.label} {...item} />
        ))}
      </ul>
    </main>
  );
}
