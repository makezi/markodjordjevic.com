import type { Metadata } from 'next';

const description =
  "Here's everything that I'm currently using for coding as well as other things such as services and desk setup.";

export const metadata: Metadata = {
  title: 'Uses',
  description
};

export default function UsesPage() {
  return (
    <section className="prose max-w-4xl sm:prose-lg">
      <h1>Uses</h1>
      <p>{description}</p>

      <h2>Editor</h2>
      <ul>
        <li>
          <a
            href="https://code.visualstudio.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            VSCode
          </a>
        </li>
        <li>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github Dark Default
          </a>
        </li>
        <li>
          <a
            href="https://www.monolisa.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            MonoLisa font
          </a>
        </li>
      </ul>

      <h2>Tech Stack</h2>
      <ul>
        <li>
          <a
            href="https://reactjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            React
          </a>{' '}
          - The frontend library that I've used since 2018.
        </li>
        <li>
          <a
            href="https://nextjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.JS
          </a>{' '}
          - My framework of choice to build modern web apps.
        </li>
        <li>
          <a
            href="https://www.typescriptlang.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            TypeScript
          </a>{' '}
          - Only started transitioning to TypeScript since late 2021 but I can't
          imagine building web apps without it now.
        </li>
        <li>
          <a
            href="https://prettier.io/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Prettier
          </a>{' '}
          - An opinionated code formatter. Why live in chaos?
        </li>
        <li>
          <a
            href="https://www.radix-ui.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Radix UI
          </a>{' '}
          - Hands down the best unstyled and accessible react components. Highly
          highly recommend!
        </li>
        <li>
          <a
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            TailwindCSS
          </a>{' '}
          - A quick and efficient way to get a design system up and running
          consistently.
        </li>
        <li>
          <a
            href="https://playwright.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Playwright
          </a>{' '}
          - What I use for E2E testing. Previously it was Cypress.
        </li>

        <li>
          <a
            href="https://vitest.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vitest
          </a>{' '}
          - My testing framework of choice. Previously it was Jest.
        </li>
        <li>
          <a
            href="https://github.com/colinhacks/zod"
            rel="noopener noreferrer"
            target="_blank"
          >
            Zod
          </a>{' '}
          - Great for validating against forms, environment variables, external
          APIs... Anything really.
        </li>
      </ul>

      <h2>Software</h2>
      <ul>
        <li>
          <a
            href="https://1password.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            1Password
          </a>
        </li>
        <li>
          <a
            href="https://folivora.ai/bettersnaptool"
            rel="noopener noreferrer"
            target="_blank"
          >
            BetterSnapTool
          </a>
        </li>
        <li>
          <a
            href="https://www.figma.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Figma
          </a>
        </li>
        <li>
          <a
            href="https://gifox.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Gifox
          </a>
        </li>
        <li>
          <a
            href="https://www.gitkraken.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitKraken
          </a>
        </li>
        <li>
          <a
            href="https://iterm2.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            iTerm
          </a>
        </li>
        <li>
          <a
            href="https://www.spotify.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Spotify
          </a>
        </li>
        <li>
          <a
            href="https://www.dropbox.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Dropbox
          </a>
        </li>
        <li>
          <a
            href="https://www.notion.so/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Notion
          </a>
        </li>
        <li>
          <a
            href="https://www.postman.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Postman
          </a>
        </li>
        <li>
          <a
            href="https://www.raycast.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Raycast
          </a>
        </li>
      </ul>

      <h2>Desk Setup</h2>
      <ul>
        <li>15" MacBook Pro (2016)</li>
        <li>
          <a
            href="https://amzn.to/3KeRBVH"
            rel="noopener noreferrer"
            target="_blank"
          >
            34" Acer Predator x34 Ultrawide Monitor
          </a>{' '}
          - This is my main monitor.
        </li>
        <li>
          <a
            href="https://amzn.to/3mcETPh"
            rel="noopener noreferrer"
            target="_blank"
          >
            23.8" HP EliteDisplay E243 Monitor
          </a>{' '}
          - My second monitor.
        </li>
        <li>
          <a
            href="https://amzn.to/41an3Lo"
            rel="noopener noreferrer"
            target="_blank"
          >
            Dell WD15 Monitor Dock
          </a>{' '}
          - Everything runs through this before connecting to my laptop.
        </li>
        <li>
          <a
            href="https://amzn.to/3zLkUtT"
            rel="noopener noreferrer"
            target="_blank"
          >
            Apple Magic Keyboard
          </a>
        </li>
        <li>
          <a
            href="https://amzn.to/43cwbkF"
            rel="noopener noreferrer"
            target="_blank"
          >
            Apple Magic Trackpad
          </a>{' '}
          - I have the old one with replaceable batteries.
        </li>
        <li>
          <a
            href="https://amzn.to/3KkcX3M"
            rel="noopener noreferrer"
            target="_blank"
          >
            Satechi USB-C Hub
          </a>{' '}
          - What I use when I'm out and about.
        </li>
        <li>
          <a
            href="https://amzn.to/3KDbg2W"
            rel="noopener noreferrer"
            target="_blank"
          >
            SteelSeries Qck XXL Thick Cloth
          </a>{' '}
          - Covers a huge amount of space on my desk to fit my keyboard and
          trackpad.
        </li>
        <li>
          <a
            href="https://amzn.to/3KlPhfH"
            rel="noopener noreferrer"
            target="_blank"
          >
            Apple AirPods (2nd Generation)
          </a>{' '}
          - Used sometimes for video call meetings, in office, or a nice stroll
          in the sun.
        </li>
        <li>
          <a
            href="https://amzn.to/3ma5E71"
            rel="noopener noreferrer"
            target="_blank"
          >
            Anker Wireless Charger Stand
          </a>
        </li>
        <li>
          Remax Desk Fan - Summer sometimes gets quite crazy here Australia 🥵.
        </li>
        <li>
          Custom Made Automatic Height Adjustable Table (Black Frame, Dark Oak
          Top)
        </li>
        <li>
          <a
            href="https://www.ikea.com/au/en/p/markus-office-chair-vissle-dark-grey-50261151/"
            rel="noopener noreferrer"
            target="_blank"
          >
            IKEA Markus Dark Grey Office Chair
          </a>
        </li>
      </ul>
    </section>
  );
}
