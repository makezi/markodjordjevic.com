import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { cn } from '@/lib/utils';

export function MDXComponents({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <Component
      components={{
        pre: ({ className, ...props }) => (
          <pre
            className={cn('-mx-4 md:-mx-14 lg:-mx-20', className)}
            {...props}
          />
        ),
        Image
      }}
    />
  );
}
