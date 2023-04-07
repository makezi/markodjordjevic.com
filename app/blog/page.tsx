import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'ADD DESCRIPTION!!'
};

export default function BlogPage() {
  return (
    <section className="prose max-w-4xl sm:prose-lg">
      <h1>Blog</h1>
    </section>
  );
}
