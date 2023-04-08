import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import avatarPic from '../../public/images/avatar.jpg';

export const metadata: Metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <section className="prose max-w-4xl sm:prose-lg">
      <h1>About Me</h1>

      <div className="flex flex-col items-center md:flex-row md:space-x-12">
        <Image
          className="h-full max-w-[60vw] rotate-3 border-8 grayscale"
          alt="Marko Djordjevic"
          src={avatarPic}
          placeholder="blur"
          width={250}
          priority
        ></Image>

        <div>
          <p>
            Hey, I'm Marko Djordjevic. But you can call me{' '}
            <strong>makezi</strong> if you'd like.
          </p>

          <p>WORK HERE</p>

          <p>
            Outside of work in my free time, I like playing video games (Dota 2,
            Apex Legends), eating ramen, working out, swimming, eating more
            ramen (please help me) and the occassional drawing! I've also
            started picking up bouldering, Brazilian jiu-jitsu, and writing{' '}
            <Link href="/blog">content</Link> of my web development experiences.
          </p>
        </div>
      </div>

      <div>
        <h2>FAQ</h2>

        <h3>Why is your nickname "makezi" and how do you pronounce it?</h3>
        <p>
          My nickname was given to me by my uncle on my dad's side when I was a
          child. I've heard many pronounciations such as "Mac-Air-Zee" and
          "Mac-E-Zee", but the proper way to pronounce it is "Mar-Care-Zee".
          Either way, I'm not too fussed.
        </p>

        <h3>When did you start coding?</h3>
        <p>
          Started coding in 10th grade by making a fighting game in{' '}
          <a
            href="https://gamemaker.io/en"
            rel="noopener noreferrer"
            target="_blank"
          >
            GameMaker
          </a>{' '}
          based on Dragon Ball Z (loved watching that show before school growing
          up and still a huge fan ❤️). I then kept coding video games through
          the rest of high school (from GameMaker to{' '}
          <a
            href="https://unity.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Unity
          </a>
          ) and did it in parallel whilst I learned Java and C# during my
          Bachelors in Computer Science. Finally I moved onto web development,
          building lots and lots and lots of things whilst I studied my Masters
          of IT, majoring in Web Development.
        </p>
        <p>
          <strong>TLDR:</strong> Started in high school and just kept building
          things!
        </p>

        <h3>What code editor do you use?</h3>
        <p>
          Currently using{' '}
          <a
            href="https://code.visualstudio.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            VSCode
          </a>{' '}
          with the{' '}
          <a
            href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github Dark Default
          </a>{' '}
          theme and{' '}
          <a
            href="https://www.monolisa.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            MonoLisa
          </a>{' '}
          font.
        </p>

        <h3>
          Can you tell us what else you use (desk setup, tech stack, etc.)?
        </h3>
        <p>
          Everything I'm using can be found <Link href="/uses">here.</Link>
        </p>

        <h3>What rank are you in Dota 2 and Apex Legends?</h3>
        <p>
          For Dota 2, I'm currently hovering between 4 and 5 star divine.
          Immortal has escaped me many times 🥹.
        </p>
        <p>
          As for Apex Legends (PS5), I usually get to Diamond II-IV then get
          stomped by Predators on my way to Masters.
        </p>
      </div>
    </section>
  );
}
