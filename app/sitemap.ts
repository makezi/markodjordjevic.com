import { MetadataRoute } from 'next';

import { allPosts } from 'contentlayer/generated';
import { env } from '@/lib/env.mjs';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `${env.DOMAIN}/blog/${post.slug}`,
    lastModified: post.publishedAt
  }));

  const routes = ['', '/blog', '/about', '/uses'].map((route) => ({
    url: `${env.DOMAIN}${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  return [...routes, ...posts];
}
