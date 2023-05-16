'use client';

// import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { useEffect } from 'react';
// import { z } from 'zod';

import { Post } from '@/.contentlayer/generated';

// const viewSchema = z.object({
//   slug: z.string(),
//   views: z.number()
// });

// type View = z.infer<typeof viewSchema>;

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

async function incrementCount(url: string) {
  await fetch(url, { method: 'POST' });
}

export function ViewCounter({
  slug,
  shouldTrack = false
}: {
  slug: Post['slug'];
  shouldTrack?: boolean;
}) {
  // const { data } = useSWR<View>(`/api/views/${slug}`, fetcher);
  const { trigger } = useSWRMutation(`/api/views/${slug}`, incrementCount);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return;

    if (shouldTrack) {
      void trigger();
    }
  }, [shouldTrack, trigger]);

  return null;
  // return <span>{data?.views ?? 0} views</span>;
}
