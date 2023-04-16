import './global.css';
import { Inter } from 'next/font/google';
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
        'bg-background text-body antialiased',
        calSans.variable,
        inter.variable
      )}
    >
      <body>
        <Header />
        <main className="container max-w-4xl p-6 pt-0 sm:px-8 sm:py-6 sm:pb-20 lg:pt-10">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
