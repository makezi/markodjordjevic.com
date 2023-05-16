import './global.css';

import { Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';

import { cn } from '@/lib/utils';
import { Footer } from '@/components/layout/footer';
import env from '@/lib/env';
import { Header } from '@/components/layout/header';

const calSans = localFont({
  src: '../public/fonts/cal-sans-semibold.woff2',
  display: 'swap',
  variable: '--font-cal-sans'
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta'
});

export const metadata: Metadata = {
  title: {
    default: 'Marko Djordjevic',
    template: '%s | Marko Djordjevic'
  },
  description: 'Welcome to my little corner of the web.',
  openGraph: {
    title: 'Marko Djordjevic',
    description: 'Welcome to my little corner of the web.',
    url: env.DOMAIN,
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
  },
  twitter: {
    card: 'summary_large_image',
    site: '@makezid',
    creator: '@makezid'
  }
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
        'bg-neutral-200 font-body text-body antialiased',
        calSans.variable,
        jakarta.variable
      )}
    >
      <body className="mx-auto flex min-h-screen max-w-4xl flex-col justify-between">
        <div className="flex flex-col px-4 pb-20 md:px-10">
          <Header />
          <main className="w-full pt-10">{children}</main>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
