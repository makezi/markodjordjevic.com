import { getMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

import { BackArrow } from '@/components/icons';
import { allPosts } from 'contentlayer/generated';

export const generateStaticParams = () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    return;
  }

  const Content = getMDXComponent(post.body.code);

  return (
    <article className="prose max-w-4xl sm:prose-lg">
      <div className="mb-8 flex flex-col space-y-6 sm:mb-12 sm:space-y-10">
        <Link
          href="/blog"
          className="flex w-fit items-center space-x-2 font-heading text-lg text-body no-underline transition-all hover:text-heading"
        >
          <BackArrow /> <span>Back to Posts</span>
        </Link>
        <div className="flex flex-col items-center border-b border-background-highlight pb-8 sm:pb-12">
          <h1 className="!mb-4">{post.title}</h1>
          <span className="text-disabled">
            {format(parseISO(post.publishedAt), 'LLLL d, yyyy')} -{' '}
            {post.readingTime.text}
          </span>
        </div>
      </div>
      <Content />
    </article>
  );
}
