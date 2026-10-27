import type { MetadataRoute } from 'next';
import { PROGRAMMATIC_SEO_ITEMS } from '../utils/programmaticSeo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skyidevelopers.in';

  // Primary Canonical Pages
  const primaryPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
      images: [
        `${baseUrl}/og-image.jpg`,
        `${baseUrl}/songbirds-1.webp`,
        `${baseUrl}/bungalow-plots.jpg`,
      ],
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
      images: [
        `${baseUrl}/og-image.jpg`,
        `${baseUrl}/images/projects/skyi-songbirds.webp`,
        `${baseUrl}/images/projects/skyi-manas-lake-apartment.webp`,
        `${baseUrl}/images/projects/skyi-tigers-nest-bhugaon.webp`,
        `${baseUrl}/images/projects/skyi-pwc-towers.webp`,
      ],
    },
    {
      url: `${baseUrl}/na-plots-bhukum`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
      images: [`${baseUrl}/bungalow-plots.jpg`],
    },
    {
      url: `${baseUrl}/songbirds`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
      images: [
        `${baseUrl}/songbirds-1.webp`,
        `${baseUrl}/songbirds-2.webp`,
        `${baseUrl}/songbirds-3.webp`,
      ],
    },
    {
      url: `${baseUrl}/manas-lake`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
      images: [
        `${baseUrl}/bungalow-plots.jpg`,
        `${baseUrl}/songbirds-2.webp`,
      ],
    },
    {
      url: `${baseUrl}/bhugaon`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
      images: [
        `${baseUrl}/songbirds-1.webp`,
        `${baseUrl}/images/projects/skyi-tigers-nest-bhugaon.webp`,
      ],
    },
    {
      url: `${baseUrl}/five-racecourse`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
      images: [`${baseUrl}/images/projects/skyi-five-racecourse.webp`],
    },
    {
      url: `${baseUrl}/five-aguada`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
      images: [`${baseUrl}/images/projects/skyi-five-racecourse.webp`],
    },
    {
      url: `${baseUrl}/five-maidan`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
      images: [`${baseUrl}/images/projects/skyi-five-maidan.webp`],
    },
    {
      url: `${baseUrl}/tigers-nest`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
      images: [`${baseUrl}/images/projects/skyi-tigers-nest.webp`],
    },
    {
      url: `${baseUrl}/star-city`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
      images: [`${baseUrl}/images/projects/skyi-star-city.webp`],
    },
    {
      url: `${baseUrl}/plot-estimator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${baseUrl}/bungalow-plots.jpg`],
    },
    {
      url: `${baseUrl}/virtual-tour`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        `${baseUrl}/songbirds-2.webp`,
        `${baseUrl}/songbirds-1.webp`,
      ],
    },
    {
      url: `${baseUrl}/connectivity`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/nri-hub`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [`${baseUrl}/songbirds-1.webp`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stories/songbirds`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${baseUrl}/songbirds-1.webp`],
    },
    {
      url: `${baseUrl}/stories/manas-lake`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${baseUrl}/bungalow-plots.jpg`],
    },
    {
      url: `${baseUrl}/stories/tigers-nest`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${baseUrl}/images/projects/skyi-tigers-nest-bhugaon.webp`],
    },
  ];

  // Programmatic SEO Micro-Location Pages
  const programmaticPages: MetadataRoute.Sitemap = PROGRAMMATIC_SEO_ITEMS.map((item) => ({
    url: `${baseUrl}/na-plots/${item.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
    images: [`${baseUrl}/bungalow-plots.jpg`],
  }));

  return [...primaryPages, ...programmaticPages];
}
