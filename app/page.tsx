import { Metadata } from 'next';
import Link from 'next/link';

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
    </section>
  );
}
