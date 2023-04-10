/* eslint-disable @typescript-eslint/restrict-template-expressions */
import type { Metadata } from 'next';
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';

import { BackArrow } from '@/components/icons';
import { allPosts } from 'contentlayer/generated';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Take a peek into my thoughts on everything web development related.'
};

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <section className="prose max-w-4xl sm:prose-lg">
      <h1>Blog</h1>

      {posts.map((post) => (
        <div key={post.slug} className="py-2">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="!mb-2">{post.title}</h2>
          </Link>
          <span className="text-disabled">
            {format(parseISO(post.publishedAt), 'LLLL d, yyyy')} -{' '}
            {post.readingTime.text}
          </span>
          <p>{post.summary}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="flex w-fit items-center space-x-2 font-heading text-lg text-body no-underline transition-all hover:text-heading"
          >
            <span>Read More</span> <BackArrow className="rotate-180" />
          </Link>
        </div>
      ))}
    </section>
  );
}
