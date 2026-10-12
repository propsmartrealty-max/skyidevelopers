import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: '360° Drone Virtual Tours & Sightseeing | Skyi Developers Pune',
  description: 'Explore 360° aerial drone virtual tours of Skyi Songbirds Bhugaon, SKYi Manas Lake NA Bungalow Plots Bhukum, Poona Western Club, and Sahyadri hillside views.',
  alternates: {
    canonical: 'https://skyidevelopers.in/virtual-tour',
  },
  openGraph: {
    title: '360° Drone Virtual Tours & Sightseeing | SKYi Developers Pune',
    description: 'Explore 360° aerial drone virtual tours of Skyi Songbirds Bhugaon, SKYi Manas Lake NA Bungalow Plots Bhukum, and Poona Western Club.',
    url: 'https://skyidevelopers.in/virtual-tour',
    siteName: 'Skyi Developers',
    images: [{ url: 'https://skyidevelopers.in/og-image.jpg', width: 1200, height: 630, alt: 'SKYi 360° Virtual Tour & Drone Walkthrough' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '360° Drone Virtual Tours & Sightseeing | SKYi Developers Pune',
    description: 'Explore 360° aerial virtual tours of Skyi developments in Pune.',
    images: ['https://skyidevelopers.in/og-image.jpg'],
  },
};

export default function VirtualTourPage() {
  return <Home />;
}
