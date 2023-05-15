import { format, parseISO } from 'date-fns';
import { Metadata } from 'next';

import { Post, allPosts } from 'contentlayer/generated';
import env from '@/lib/env';

import { MDXComponents } from '../_components/mdx-components';
import { ViewCounter } from '../_components/view-counter';

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

  return (
    <article className="container prose">
      <div className="mb-8 flex flex-col border-b border-neutral-300 pb-8">
        <h1 className="!mb-2">{post.title}</h1>
        <span className="text-body-secondary">
          {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
        </span>
        <ViewCounter slug={post.slug} shouldTrack />
      </div>

      <MDXComponents code={post.body.code} />
    </article>
  );
}
