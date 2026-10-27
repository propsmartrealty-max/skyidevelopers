import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'Max Light™ Design Philosophy & Green Architecture',
  description: 'Explore SKYi Developers architectural philosophy: Max Light™ daylighting, zero wastage layout design, and IGBC Platinum sustainable green townships across Pune.',
  alternates: {
    canonical: 'https://skyidevelopers.in/philosophy',
  },
  openGraph: {
    title: 'Max Light™ Design Philosophy & Green Architecture | SKYi Developers',
    description: 'Explore SKYi Developers architectural ethos: Max Light™ daylighting, zero wastage layout design, and IGBC Platinum green certified eco-townships.',
    url: 'https://skyidevelopers.in/philosophy',
    siteName: 'SKYi Developers',
    images: [{ url: 'https://skyidevelopers.in/og-image.jpg', width: 1200, height: 630, alt: 'SKYi Design Philosophy & Architecture' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max Light™ Design Philosophy & Green Architecture | SKYi Developers',
    description: 'Explore SKYi Developers architectural ethos: Max Light™ daylighting and IGBC Platinum townships.',
    images: ['https://skyidevelopers.in/og-image.jpg'],
  },
};

export default function PhilosophyPage() {
  return <Home />;
}
