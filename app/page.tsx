import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marko Djordjevic',
  description: 'Welcome to my little corner of the web.'
};

export default function HomePage() {
  return (
    <section className="container prose prose-invert md:prose-lg sm:px-10">
      <p>
        Hey, I'm Marko Djordjevic. But you can call me <strong>Makezi</strong>{' '}
        if you'd like.
      </p>

      <p>
        I'm a <strong>Senior Web Developer at Metcash</strong>, where I spend
        most of my time building and maintaining their first e-commerce solution
        for IGA. It's been a wild ride, but I'm proud of what our team has
        accomplished so far and what else we can accomplish in the future.
      </p>

      <p>
        When I'm not coding away, you can find me indulging in some of my
        favourite hobbies. I love playing video games, especially Dota 2 and
        Apex Legends. And let's not forget about my obsession with ramen. I eat
        it so often that I need to work out just to avoid turning into a giant
        wet noodle.
      </p>

      <p>
        Speaking of working out, I started doing it again after taking some very
        very long time off after experiencing sciatica to ease it and prevent
        any further injuries. And when the weather's not freezing, you can catch
        me swimming laps at the local pool. I've also taken up bouldering as a
        new challenge and the occasional drawing here and there.
      </p>

      <p>
        But I'm not just about fun and games. I'm passionate about web
        development, which is why I started sharing my experiences through my
        writing. You can find some of my content on my{' '}
        <Link href="/blog">blog</Link>.
      </p>

      <p>
        Thanks for taking the time stopping by. If you want to connect with me,
        feel free to reach out on{' '}
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

      <h3>Why is your nickname "Makezi" and how do you pronounce it?</h3>
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
        up and still a huge fan ❤️). I then kept coding video games through the
        rest of high school (from GameMaker to{' '}
        <a href="https://unity.com/" rel="noopener noreferrer" target="_blank">
          Unity
        </a>
        ) and did it in parallel whilst I learned Java and C# during my
        Bachelors in Computer Science. Finally I moved onto web development,
        building lots and lots and lots of things whilst I studied my Masters of
        IT, majoring in Web Development.
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

      <h3>Can you tell us what else you use (desk setup, tech stack, etc.)?</h3>
      <p>
        Everything I'm using can be found <Link href="/uses">here.</Link>
      </p>
    </section>
  );
}
