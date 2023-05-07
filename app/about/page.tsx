import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'About',
  description: 'Get to know me, Marko Djordjevic.'
};

export default function AboutPage() {
  return (
    <section className="container prose">
      <h1>About</h1>
      <Image
        src="/images/avatar.jpeg"
        alt="Marko Djordjevic"
        className="mx-auto mt-2 rounded-full grayscale sm:float-right sm:ml-6"
        priority
        height={148}
        width={148}
      />
      <p>
        Hey, I'm Marko Djordjevic. But you can call me <strong>Makezi</strong>{' '}
        if you'd like. I'm a <strong>Senior Web Developer at Metcash</strong>,
        where I spend most of my time building and maintaining their first
        e-commerce solution for IGA (Independent Grocers of Australia). It's
        been a wild ride, but I'm proud of what our team has accomplished so far
        and what else we can accomplish in the future.
      </p>

      <p>
        When I'm not coding away, you can find me indulging in some of my
        favourite hobbies. I love playing video games and have an obsession with
        ramen. I eat it so often that I need to work out just to avoid turning
        into a giant wet noodle. And when the weather's not freezing, you can
        catch me swimming laps at the local pool. I've also taken up bouldering
        as a new challenge and the occasional drawing here and there.
      </p>

      <p>
        But I'm not just about fun and games. I'm passionate about web
        development, which is why I started sharing my experiences through my{' '}
        <Link href="/blog">writing</Link>.
      </p>

      <p>
        Thanks for taking the time stopping by. If you want to connect with me
        to say hello or ask any questions, feel free to reach out on{' '}
        <a
          href="https://twitter.com/makezid"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </a>{' '}
        or{' '}
        <a
          href="https://github.com/makezi"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        . Let's chat!
      </p>

      <h2>FAQ</h2>

      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Why is your nickname "Makezi" and how do you pronounce it?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              My nickname was given to me by my uncle on my dad's side when I
              was a child. I've heard many pronounciations such as "Mac-Air-Zee"
              and "Mac-E-Zee", but the proper way to pronounce it is
              "Mar-Care-Zee". Either way, I'm not too fussed.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>When did you start coding?</AccordionTrigger>
          <AccordionContent>
            <p>
              Started coding in 10th grade by making a fighting game in{' '}
              <a
                href="https://gamemaker.io/en"
                rel="noopener noreferrer"
                target="_blank"
              >
                GameMaker
              </a>{' '}
              based on Dragon Ball Z (loved watching that show before school
              growing up and still a huge fan ❤️). I then kept coding video
              games through the rest of high school (from GameMaker to{' '}
              <a
                href="https://unity.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Unity
              </a>
              ) and did it in parallel whilst I learned Java and C# during my
              Bachelors in Computer Science. Finally I moved onto web
              development, building lots and lots and lots of things whilst I
              studied my Masters of IT, majoring in Web Development.
            </p>

            <p>
              <strong>TLDR:</strong> Started in high school and just kept
              building things!
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>What code editor do you use?</AccordionTrigger>
          <AccordionContent>
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
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            {' '}
            Can you tell us what else you use (desk setup, tech stack, etc.)?
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Everything I'm using can be found <Link href="/uses">here.</Link>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
