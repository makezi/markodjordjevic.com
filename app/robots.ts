import { env } from '@/lib/env';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*'
      }
    ],
    sitemap: `${env.DOMAIN}/sitemap.xml`,
    host: env.DOMAIN
  };
}
