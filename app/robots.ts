import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://skyidevelopers.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Google Family of Crawlers
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Google-InspectionTool',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/', '/*.webp', '/*.jpg', '/*.png', '/*.svg'],
      },
      {
        userAgent: 'Googlebot-Video',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-News',
        allow: '/',
      },
      {
        userAgent: 'Storebot-Google',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Mobile',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: '/',
      },
      {
        userAgent: 'AdsBot-Google',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Major Search Engine Crawlers
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'msnbot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/api/'],
      },
      // Social & Rich Previews
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
      },
      {
        userAgent: 'Pinterestbot',
        allow: '/',
      },
      // AI Search Engines & LLM Answer Engines
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-images.xml`,
      `${baseUrl}/feed.xml`,
      `${baseUrl}/google-merchant-products.xml`,
    ],
    host: baseUrl,
  };
}
