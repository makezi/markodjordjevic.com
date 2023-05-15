import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { CrossIcon } from '@/components/icons';

import { cn } from '@/lib/utils';

function Callout({
  icon,
  type,
  children,
  className,
  ...props
}: {
  icon?: string;
  type?: 'default' | 'warning' | 'error';
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'flex items-start rounded-r-lg border-l-4 [&>p]:my-0 p-4',
        { 'border-red-700 bg-red-50/50 text-red-700': type === 'error' },
        className
      )}
      {...props}
    >
      {icon ? <span className="mr-2 text-2xl mt-0.5">{icon}</span> : null}
      {children}
    </div>
  );
}

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
        Callout,
        CrossIcon,
        Image
      }}
    />
  );
}
