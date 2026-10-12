import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'Location & Connectivity Matrix | Skyi Developers Pune',
  description: 'View distance matrix and commute times from Skyi developments at Bhugaon & Bhukum to Chandani Chowk Metro Station, Kothrud, Hinjewadi IT Park, and Pune Station.',
  alternates: {
    canonical: 'https://skyidevelopers.in/connectivity',
  },
  openGraph: {
    title: 'Location & Connectivity Matrix | SKYi Developers Pune',
    description: 'Distance matrix and commute times from Skyi Songbirds (Bhugaon) & SKYi Manas Lake (Bhukum) to Chandani Chowk, Kothrud, Hinjewadi IT Park.',
    url: 'https://skyidevelopers.in/connectivity',
    siteName: 'Skyi Developers',
    images: [{ url: 'https://skyidevelopers.in/og-image.jpg', width: 1200, height: 630, alt: 'SKYi Location & Connectivity Matrix' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location & Connectivity Matrix | SKYi Developers Pune',
    description: 'Explore commute times and road connectivity from Bhugaon & Bhukum to central Pune.',
    images: ['https://skyidevelopers.in/og-image.jpg'],
  },
};

export default function ConnectivityPage() {
  return <Home />;
}
