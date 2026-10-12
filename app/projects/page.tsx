import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'All Projects | Skyi Developers Pune | Songbirds, NA Plots Bhukum, Tigers Nest, Park Baner',
  description: 'Explore official Skyi Developers projects in Pune: PMRDA NA Bungalow Plots at Bhukum, Skyi Songbirds at Bhugaon, SKYi Park Baner, SKYi Iris Bavdhan, Skyi Star City Dhayari.',
  alternates: {
    canonical: 'https://skyidevelopers.in/projects',
  },
  openGraph: {
    title: 'All Projects | SKYi Developers Pune Official Master Portfolio',
    description: 'Explore all delivered and ongoing landmarks by SKYi Developers: Skyi Songbirds, SKYi Manas Lake, PMRDA NA Plots, SKYi Tigers Nest, SKYi Park Baner.',
    url: 'https://skyidevelopers.in/projects',
    siteName: 'Skyi Developers',
    images: [{ url: 'https://skyidevelopers.in/og-image.jpg', width: 1200, height: 630, alt: 'SKYi Developers Projects Directory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Projects | SKYi Developers Pune Official Master Portfolio',
    description: 'Explore all delivered and ongoing landmarks by SKYi Developers in Pune.',
    images: ['https://skyidevelopers.in/og-image.jpg'],
  },
};

export default function ProjectsPage() {
  return <Home />;
}
