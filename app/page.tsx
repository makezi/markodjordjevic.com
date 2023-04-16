import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marko Djordjevic',
  description: 'Welcome to my little corner of the web.'
};

export default function HomePage() {
  return (
    <section className="prose max-w-4xl sm:prose-lg sm:px-4">
      <h1>Hey there, I'm Marko Djordjevic</h1>
    </section>
  );
}
