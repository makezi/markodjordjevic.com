import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { cn } from '@/lib/utils';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer';

const calSans = localFont({
  src: '../public/fonts/cal-sans-semibold.woff2',
  display: 'swap',
  variable: '--font-cal-sans'
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
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
      className={cn(
        'bg-background text-neutral-300',
        calSans.variable,
        inter.variable
      )}
    >
      <body>
        <Header />
        <main className="container max-w-4xl py-6 lg:pb-20 lg:pt-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
