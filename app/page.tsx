import { Metadata } from 'next';
import Link from 'next/link';

import { GithubIcon, MailIcon, TwitterIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Marko Djordjevic',
  description: 'Welcome to my little corner of the web.'
};

export default function HomePage() {
  return (
    <section className="container prose">
      <h1>Hello There! I'm Marko Djordjevic</h1>

      <p>
        I'm a <strong>Senior Web Developer at Metcash</strong> where my team
        built the e-commerce shop for IGA (Independent Grocers of Australia).
        I'm super passionate about web development, hence I've started sharing
        my experiences through my <Link href="/blog">writing</Link>.
      </p>

      <p>
        If you want to get in touch to ask a question or just to say hello, you
        can always message me on any of the below socials and I'll get back to
        you as soon as I can!
      </p>

      <ul className="group -ml-4 pl-0">
        <li className="my-0 flex">
          <a
            href="https://twitter.com/makezid"
            className="my-0 flex flex-row items-center p-3 no-underline hover:!opacity-100 group-hover:opacity-50"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon />
            <span className="pl-4">Twitter</span>
          </a>
        </li>
        <li className="my-0 flex">
          <a
            href="https://github.com/makezi"
            className="my-0 flex flex-row items-center p-3 no-underline hover:!opacity-100 group-hover:opacity-50"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon />
            <span className="pl-4">GitHub</span>
          </a>
        </li>
        <li className="my-0 flex">
          <a
            href="mailto:hello@markodjordjevic.com"
            className="my-0 flex flex-row items-center p-3 no-underline hover:!opacity-100 group-hover:opacity-50"
          >
            <MailIcon />
            <span className="pl-4">Email</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
