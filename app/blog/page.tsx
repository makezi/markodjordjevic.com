import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'ADD DESCRIPTION!!'
};

export default function BlogPage() {
  return (
    <section className="prose">
      <h1>Blog</h1>
    </section>
  );
}
