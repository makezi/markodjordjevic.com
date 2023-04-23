import type { Metadata } from 'next';
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';

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
    <section className="container prose prose-invert md:prose-lg sm:px-10">
      <h1>Blog</h1>

      <div className="-mx-4 -mt-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="no-underline"
          >
            <div className="not-prose flex flex-col space-y-4 rounded-md p-4 hover:bg-zinc-800">
              <div className="flex flex-col-reverse items-start justify-between sm:flex-row">
                <h2 className="flex-[2_2_0%] font-heading text-xl">
                  {post.title}
                </h2>
                <span className="flex-1 shrink-0 text-right font-normal text-body-secondary">
                  {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
                </span>
              </div>
              <p className="font-normal text-body">{post.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
