import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'Contact Us & VIP Site Visit Booking | Skyi Developers Pune',
  description: 'Book your VIP site visit for SKYi Manas Lake NA Bungalow Plots Bhukum or Skyi Songbirds Bhugaon. Contact Skyi Developers at +91 20 6614 3000.',
  alternates: {
    canonical: 'https://skyidevelopers.in/contact',
  },
  openGraph: {
    title: 'Contact Us & VIP Site Visit Booking | SKYi Developers Pune',
    description: 'Book your VIP site visit for SKYi Manas Lake NA Bungalow Plots Bhukum or Skyi Songbirds Bhugaon. Call +91 20 6614 3000.',
    url: 'https://skyidevelopers.in/contact',
    siteName: 'Skyi Developers',
    images: [{ url: 'https://skyidevelopers.in/og-image.jpg', width: 1200, height: 630, alt: 'SKYi Developers Contact & Experience Centre' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us & VIP Site Visit Booking | SKYi Developers Pune',
    description: 'Book your VIP site visit with complimentary cab pickup. Call +91 20 6614 3000.',
    images: ['https://skyidevelopers.in/og-image.jpg'],
  },
};

export default function ContactPage() {
  return <Home />;
}
