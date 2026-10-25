import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: '📞 Official Sales Desk & VIP Site Visit Booking | SKYi Developers Pune | Free AC Cab',
  description: '⭐ Official SKYi Sales Desk. Schedule an exclusive developer-assisted site tour for Skyi Songbirds (Bhugaon) & SKYi Manas Lake NA Plots (Bhukum). Includes free private AC cab pickup & drop from anywhere in Pune. Zero brokerage direct booking!',
  alternates: {
    canonical: 'https://skyidevelopers.in/contact',
  },
  openGraph: {
    title: '📞 Official Sales Desk & VIP Site Visit Booking | SKYi Developers Pune',
    description: 'Book your VIP site visit for SKYi Manas Lake NA Bungalow Plots Bhukum or Skyi Songbirds Bhugaon with complimentary private AC cab pickup.',
    url: 'https://skyidevelopers.in/contact',
    siteName: 'Skyi Developers',
    images: [{ url: 'https://skyidevelopers.in/og-image.jpg', width: 1200, height: 630, alt: 'SKYi Developers Contact & Experience Centre' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '📞 Official Sales Desk & VIP Site Visit Booking | SKYi Developers Pune',
    description: 'Book your VIP site visit with complimentary cab pickup. Connect with our dedicated sales desk.',
    images: ['https://skyidevelopers.in/og-image.jpg'],
  },
};

export default function ContactPage() {
  return <Home />;
}
