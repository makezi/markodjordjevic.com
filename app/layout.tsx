import './global.css';
import { DM_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';

import { cn } from '@/lib/utils';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer';

const calSans = localFont({
  src: '../public/fonts/cal-sans-semibold.woff2',
  display: 'swap',
  variable: '--font-cal-sans'
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '700']
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
    url: 'https://markodjordjevic.com',
    siteName: 'Marko Djordjevic',
    images: [
      {
        url: 'https://markodjordjevic.com/og.png',
        width: 1920,
        height: 1080
      }
    ],
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
    <html
      lang="en"
      className={cn(
        'bg-zinc-900 font-body text-body antialiased',
        calSans.variable,
        dmSans.variable
      )}
    >
      <body>
        <Header />
        <main className="min-h-screen px-4 pb-20 sm:px-6">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
