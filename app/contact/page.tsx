import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'Sales Desk & VIP Site Visit Booking',
  description: 'Priority SKYi Sales Desk. Schedule an exclusive site tour for Skyi Songbirds (Bhugaon) & SKYi Manas Lake NA Plots (Bhukum). Includes free private AC cab pickup & drop from anywhere in Pune. Zero brokerage direct booking!',
  alternates: {
    canonical: 'https://skyidevelopers.in/contact',
  },
  openGraph: {
    title: 'Sales Desk & VIP Site Visit Booking | SKYi Developers',
    description: 'Book your VIP site visit for SKYi Manas Lake NA Bungalow Plots Bhukum or Skyi Songbirds Bhugaon with complimentary private AC cab pickup.',
    url: 'https://skyidevelopers.in/contact',
    siteName: 'SKYi Developers',
    images: [{ url: 'https://skyidevelopers.in/og-image.jpg', width: 1200, height: 630, alt: 'SKYi Developers Contact & Experience Centre' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sales Desk & VIP Site Visit Booking | SKYi Developers',
    description: 'Book your VIP site visit with complimentary cab pickup. Connect with our dedicated sales desk.',
    images: ['https://skyidevelopers.in/og-image.jpg'],
  },
};

export default function ContactPage() {
  return <Home />;
}
