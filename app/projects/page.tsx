import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: '🏡 All Projects | SKYi Developers Master Directory | Townships & Ultra-Luxury ("Five")',
  description: '⭐ Master Project Directory of SKYi Developers. Explore award-winning eco-townships and signature residences: Skyi Songbirds (Bhugaon), SKYi Manas Lake, Five Racecourse (Sopan Baug), Five Aguada (Bandra Mumbai), Five Maidan (Baner), Tiger’s Nest, PWC Towers, SKYi Park, Star City, and Nilay. Direct developer booking & zero brokerage!',
  alternates: {
    canonical: 'https://skyidevelopers.in/projects',
  },
  openGraph: {
    title: '🏡 All Projects | SKYi Developers Master Directory',
    description: 'Explore all delivered and ongoing landmarks by SKYi Developers: Skyi Songbirds, SKYi Manas Lake, Five Racecourse, Five Aguada, Five Maidan, Tiger’s Nest, PWC Towers, and SKYi Park.',
    url: 'https://skyidevelopers.in/projects',
    siteName: 'Skyi Developers',
    images: [{ url: 'https://skyidevelopers.in/og-image.jpg', width: 1200, height: 630, alt: 'SKYi Developers Projects Directory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🏡 All Projects | SKYi Developers Master Portfolio',
    description: 'Explore all delivered and ongoing landmarks by SKYi Developers in Pune & Mumbai. Direct booking & 0% brokerage.',
    images: ['https://skyidevelopers.in/og-image.jpg'],
  },
};

export default function ProjectsPage() {
  return <Home />;
}
