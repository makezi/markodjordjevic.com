import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container prose prose-lg text-muted-foreground">
      <p>
        Hello there! I'm Marko Djordjevic and I live in Sydney Australia. I'm a
        Senior Web Developer at Metcash, where I spend most of my time building
        and maintaining their first e-commerce solution for IGA (Independent
        Grocers of Australia). It's been a wild ride, but I'm proud of what our
        team has accomplished so far and what else we can accomplish in the
        future.
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
        development, which is why I started sharing my experiences through my
        videos.
      </p>
      <p>
        Thanks for stopping by! You can check out what's{' '}
        <Link href="/uses">my setup like</Link> or if you want to get in touch
        to ask any questions or just to say hello, you can always message me on
        any of my socials and I'll get back to you as soon as I can! Let's chat!
      </p>
    </main>
  );
}
