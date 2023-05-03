import { getMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { Metadata } from 'next';

import { BackArrow } from '@/components/icons';
import { Post, allPosts } from 'contentlayer/generated';
import { env } from '@/lib/env.mjs';

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
}

export function generateMetadata({
  params
}: {
  params: Post;
}): Metadata | undefined {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, publishedAt, summary: description, slug } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: publishedAt,
      url: `${env.DOMAIN}/blog/${slug}`
    }
  };
}

export default function PostPage({ params }: { params: Post }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    return;
  }

  const Content = getMDXComponent(post.body.code);

  return (
    <article className="container prose prose-invert md:prose-lg sm:px-10">
      <div className="mb-8 flex flex-col space-y-6 sm:mb-10 sm:space-y-10">
        <Link
          href="/blog"
          className="flex w-fit items-center space-x-2 font-heading text-body no-underline transition-all hover:text-heading"
        >
          <BackArrow /> <span>Back to Posts</span>
        </Link>
        <div className="flex flex-col space-y-2 border-b border-neutral-800">
          <span className="text-body-secondary">
            {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
          </span>
          <div className="!mb-8 flex flex-col space-y-4 sm:!mb-10">
            <h1 className="!mb-0 leading-tight">{post.title}</h1>
            <p>{post.summary}</p>
          </div>
        </div>
      </div>
      <Content />
    </article>
  );
}
