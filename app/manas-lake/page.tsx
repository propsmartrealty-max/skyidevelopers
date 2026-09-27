import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'SKYi Manas Lake Bhukum Bavdhan Pune | 90+ Acre Eco-Township | 2 & 3 BHK Apartments',
  description: 'SKYi Manas Lake at Paud Road, Bhukum / Bavdhan Pune — 90+ Acre IGBC Platinum Certified Lakeside Township near Chandani Chowk & Kothrud. Premium 2 & 3 BHK Apartments with Sahyadri Views.',
  keywords: [
    'Skyi Manas Lake',
    'Skyi Manas Lake Bhukum',
    'Skyi Manas Lake Bavdhan',
    'Skyi Manas Lake Paud Road Pune',
    'Flats in Bhukum near Chandani Chowk',
    '2 BHK in Manas Lake',
    '3 BHK in Manas Lake',
    'Skyi Developers Manas Lake',
    'Lakeside apartments Pune',
  ],
  alternates: {
    canonical: 'https://skyidevelopers.in/manas-lake',
  },
  openGraph: {
    title: 'SKYi Manas Lake Bhukum Bavdhan Pune | 90+ Acre Eco-Township',
    description: 'IGBC Platinum Certified 90+ Acre lakeside residential township by SKYi Developers on Paud Road near Chandani Chowk.',
    url: 'https://skyidevelopers.in/manas-lake',
    siteName: 'Skyi Developers',
    images: [
      {
        url: 'https://skyidevelopers.in/manaslake-1.webp',
        width: 1200,
        height: 630,
        alt: 'SKYi Manas Lake Eco-Township Pune',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKYi Manas Lake Bhukum Bavdhan Pune | 90+ Acre Eco-Township',
    description: 'IGBC Platinum Certified 90+ Acre lakeside residential township near Chandani Chowk.',
    images: ['https://skyidevelopers.in/manaslake-1.webp'],
  },
};

export default function ManasLakePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ApartmentComplex',
            name: 'SKYi Manas Lake Eco-Township',
            description: '90+ Acre IGBC Platinum certified residential township located in Bhukum / Bavdhan along Paud Road, Pune.',
            url: 'https://skyidevelopers.in/manas-lake',
            telephone: '+91-20-66143000',
            priceRange: '₹65 Lakhs - ₹1.45 Crores',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Paud Road, Bhukum',
              addressLocality: 'Bavdhan / Bhukum',
              addressRegion: 'Pune, Maharashtra',
              postalCode: '412115',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 18.5085,
              longitude: 73.7380,
            },
            amenityFeature: [
              { '@type': 'LocationFeatureSpecification', name: 'Lakeside Promenade', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'IGBC Platinum Certified Architecture', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Zero Waste Water Recycling', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Full-Service Sports Clubhouse', value: true },
            ],
            identifier: 'MahaRERA: P52100000513, P52100000514, P52100026954, P52100052033',
          }),
        }}
      />
      <Home />
    </>
  );
}
