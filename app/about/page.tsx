import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'About SKYi Developers | Eco-Townships & Luxury Homes',
  description: 'Learn about SKYi Developers: over 20 years of excellence, 7+ Million Sq.Ft. built, 7,000+ homes delivered, and IGBC Platinum certified green developments in Pune.',
  alternates: {
    canonical: 'https://skyidevelopers.in/about',
  },
  openGraph: {
    title: 'About SKYi Developers | Eco-Townships & Luxury Homes',
    description: '20+ years of pioneering eco-townships and luxury residences in Pune. 7,000+ homes delivered across 7+ Million Sq.Ft.',
    url: 'https://skyidevelopers.in/about',
    siteName: 'SKYi Developers',
    images: [{ url: 'https://skyidevelopers.in/og-image.jpg', width: 1200, height: 630, alt: 'About SKYi Developers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SKYi Developers | Eco-Townships & Luxury Homes',
    description: '20+ years of pioneering eco-townships and luxury residences in Pune.',
    images: ['https://skyidevelopers.in/og-image.jpg'],
  },
};

export default function AboutPage() {
  return <Home />;
}
