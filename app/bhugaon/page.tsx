import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: '⭐ SKYi Projects in Bhugaon Pune™ | Songbirds & Tigers Nest From ₹38L*',
  description: '【SKYi Bhugaon Hub】Discover premier townships along 6-lane Paud Road: Skyi Songbirds (1-4 BHK from ₹38L*), SKYi Tigers Nest & PWC Towers. Next to 7,000-acre NDA Forest. Download Brochures & Book Free AC Cab Site Visit!',
  keywords: [
    'Skyi Bhugaon',
    'Skyi Songbirds Bhugaon',
    'Skyi Tigers Nest Bhugaon',
    'Skyi Developers Bhugaon Pune',
    'Flats in Bhugaon Paud Road',
    'Apartments near Kothrud Pune',
    'Poona Western Club Bhugaon',
    'Luxury residences Bhugaon',
    '1 BHK in Bhugaon Pune',
  ],
  alternates: {
    canonical: 'https://skyidevelopers.in/bhugaon',
  },
  openGraph: {
    title: '⭐ SKYi Projects in Bhugaon Pune™ | Songbirds & Tigers Nest From ₹38L*',
    description: '【SKYi Bhugaon Hub】Skyi Songbirds, Tigers Nest & PWC Towers in Bhugaon near Chandani Chowk & Kothrud, Pune. Direct developer booking & zero brokerage.',
    url: 'https://skyidevelopers.in/bhugaon',
    siteName: 'Skyi Developers',
    images: [
      {
        url: 'https://skyidevelopers.in/songbirds-1.webp',
        width: 1200,
        height: 630,
        alt: 'Skyi Bhugaon Townships Pune',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '⭐ SKYi Projects in Bhugaon Pune™ | Songbirds & Tigers Nest From ₹38L*',
    description: 'Skyi Songbirds, Tigers Nest & PWC Towers in Bhugaon near Kothrud. Download 2026 Floor Plans!',
    images: ['https://skyidevelopers.in/songbirds-1.webp'],
  },
};

export default function BhugaonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Place',
            name: 'SKYi Developments Bhugaon Hub',
            description: 'Integrated residential townships including Skyi Songbirds, SKYi Tigers Nest, and PWC Towers in Bhugaon, Paud Road, Pune.',
            url: 'https://skyidevelopers.in/bhugaon',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 18.4988,
              longitude: 73.7431,
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Bhugaon, Paud Road',
              addressRegion: 'Pune, Maharashtra',
              postalCode: '412115',
              addressCountry: 'IN',
            },
            containsPlace: [
              {
                '@type': 'ApartmentComplex',
                name: 'Skyi Songbirds Township',
                identifier: 'MahaRERA: P52100000769, P52100001117, P52100019348, P52100047992',
              },
              {
                '@type': 'ApartmentComplex',
                name: 'SKYi Tigers Nest Hillside Sanctuaries',
                identifier: 'MahaRERA: P52100000769 (Songbirds Hillside Enclave)',
              },
              {
                '@type': 'SportsActivityLocation',
                name: 'Poona Western Club & Sports Academies',
                description: '5-Acre Olympic-Standard Sports complex with Olympic pool, tennis, football, and badminton.',
              },
            ],
          }),
        }}
      />
      <Home />
    </>
  );
}
