import type { MetadataRoute } from 'next';
import { publicRoutes } from '@/content/tools';

const siteUrl = 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8
  }));
}
