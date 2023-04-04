import './global.css';
import { Montserrat } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Header } from '@/components/header/header';

const montserrat = Montserrat({
  subsets: ['latin'],
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
    <html
      lang="en"
      className={cn('bg-background text-neutral-200', montserrat.className)}
    >
      <body className="max-w-5xl lg:mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
