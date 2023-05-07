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
    <section className="container prose">
      <h1>Blog</h1>

      <ul className="group p-0">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="not-prose inline-block w-full border-t border-neutral-300 no-underline"
          >
            <li className="flex items-center justify-between py-4 hover:!opacity-100 group-hover:opacity-50">
              <h2 className="flex-[2_2_0%] font-heading text-lg">
                {post.title}
              </h2>
              <span className="flex-1 shrink-0 text-right font-normal text-body-secondary">
                {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
