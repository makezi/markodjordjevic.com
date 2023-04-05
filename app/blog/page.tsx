import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'ADD DESCRIPTION!!'
};

export default function BlogPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold">Blog</h1>
    </section>
  );
}
