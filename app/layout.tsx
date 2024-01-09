import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

import { Header } from './_components/header';

import './globals.css';

import { Socials } from './_components/socials';

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600', '700'] });

export const metadata: Metadata = {
  title: {
    default: 'Marko Djordjevic',
    template: '%s | Marko Djordjevic'
  },
  description: 'Welcome to my little corner of the web.',
  openGraph: {
    title: 'Marko Djordjevic',
    description: 'Welcome to my little corner of the web.',
    url: 'https://www.markodjordjevic.com',
    siteName: 'Marko Djordjevic',
    locale: 'en-US',
    type: 'website'
  },
  icons: {
    shortcut: '/favicon.ico'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.className,
          'mx-auto max-w-screen-lg py-20 antialiased'
        )}
      >
        <Header />
        {children}
        <div className="block px-6 pt-10 md:hidden">
          <Socials />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
