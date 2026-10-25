import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: '🏡 All Projects | SKYi Developers Pune™ | 1, 2, 3, 4 BHK & NA Plots | Official Master List',
  description: '⭐ Official Master Project Directory of SKYi Developers Pune. Explore ongoing & delivered townships: Skyi Songbirds (Bhugaon), SKYi Manas Lake PMRDA NA Plots (Bhukum), Tigers Nest, SKYi Park Baner, SKYi Iris Bavdhan, Star City. Direct developer booking & zero brokerage!',
  alternates: {
    canonical: 'https://skyidevelopers.in/projects',
  },
  openGraph: {
    title: '🏡 All Projects | SKYi Developers Pune™ | 1, 2, 3, 4 BHK & NA Plots',
    description: 'Explore all delivered and ongoing landmarks by SKYi Developers: Skyi Songbirds, SKYi Manas Lake, PMRDA NA Plots, SKYi Tigers Nest, SKYi Park Baner.',
    url: 'https://skyidevelopers.in/projects',
    siteName: 'Skyi Developers',
    images: [{ url: 'https://skyidevelopers.in/og-image.jpg', width: 1200, height: 630, alt: 'SKYi Developers Projects Directory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🏡 All Projects | SKYi Developers Pune™ | Master Portfolio',
    description: 'Explore all delivered and ongoing landmarks by SKYi Developers in Pune. Direct booking & 0% brokerage.',
    images: ['https://skyidevelopers.in/og-image.jpg'],
  },
};

export default function ProjectsPage() {
  return <Home />;
}
