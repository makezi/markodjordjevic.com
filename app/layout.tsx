import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';

import { cn } from '@/lib/utils';
import { Footer } from '@/components/layout/footer';
import { env } from '@/lib/env.mjs';
import { Sidebar } from '@/components/layout/sidebar';

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
    url: env.DOMAIN,
    siteName: 'Marko Djordjevic',
    images: [
      {
        url: `${env.DOMAIN}/og.png`,
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
        'bg-neutral-200 font-body text-body antialiased',
        calSans.variable,
        inter.variable
      )}
    >
      <body className="mx-auto max-w-4xl">
        {/* <Header /> */}
        <div className="pointer-events-none sticky top-0 z-10 h-20 w-full bg-gradient-to-b from-neutral-200 to-transparent" />
        <div className="flex flex-row px-10 pb-40">
          <Sidebar />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
