import { MetadataRoute } from 'next';

import { allPosts } from 'contentlayer/generated';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `https://markodjordjevic.com/blog/${post.slug}`,
    lastModified: post.publishedAt
  }));

  const routes = ['', '/blog', '/about', '/uses'].map((route) => ({
    url: `https://markodjordjevic.com${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  return [...routes, ...posts];
}
