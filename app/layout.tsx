import './global.css';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

export const metadata = {
  title: {
    default: 'Marko Djordjevic',
    template: '%s | Marko Djordjevic'
  },
  description: 'Developer'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn('bg-zinc-950', inter.className)}>
      <body>{children}</body>
    </html>
  );
}
