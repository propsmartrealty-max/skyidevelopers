import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'Skyi Songbirds Bhugaon Pune | 45+ Acre Eco-Township | 1, 3 & 4 BHK Luxury Residences',
  description: 'Skyi Songbirds at Bhugaon, Paud Road, Pune — 45+ Acre IGBC Platinum Certified Township surrounded by Sahyadri Hills and 7,000-acre NDA forest reserve. 10 Mins from Kothrud & Chandani Chowk.',
  keywords: [
    'Skyi Songbirds',
    'Skyi Songbirds Bhugaon',
    'Skyi Songbirds Paud Road Pune',
    'Songbirds Bhugaon Pune',
    '1 BHK in Songbirds',
    '3 BHK in Songbirds',
    '4 BHK in Songbirds',
    'Flats in Bhugaon near Kothrud',
    'Skyi Developers Songbirds',
    'Poona Western Club Songbirds',
  ],
  alternates: {
    canonical: 'https://skyidevelopers.in/songbirds',
  },
  openGraph: {
    title: 'Skyi Songbirds Bhugaon Pune | 45+ Acre Eco-Township',
    description: '45+ Acre IGBC Platinum Certified Eco-Township in Bhugaon near Chandani Chowk and Kothrud, Pune.',
    url: 'https://skyidevelopers.in/songbirds',
    siteName: 'Skyi Developers',
    images: [
      {
        url: 'https://skyidevelopers.in/songbirds-1.webp',
        width: 1200,
        height: 630,
        alt: 'Skyi Songbirds Township Bhugaon Pune',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skyi Songbirds Bhugaon Pune | 45+ Acre Eco-Township',
    description: '45+ Acre IGBC Platinum Certified Eco-Township in Bhugaon near Kothrud.',
    images: ['https://skyidevelopers.in/songbirds-1.webp'],
  },
};

export default function SongbirdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ApartmentComplex',
            name: 'Skyi Songbirds Eco-Township',
            description: '45+ Acre IGBC Platinum certified residential township located in Bhugaon along Paud Road, Pune.',
            url: 'https://skyidevelopers.in/songbirds',
            telephone: '+91-20-66143000',
            priceRange: '₹45 Lakhs - ₹2.10 Crores',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Paud Road, Bhugaon',
              addressLocality: 'Bhugaon / Kothrud Extension',
              addressRegion: 'Pune, Maharashtra',
              postalCode: '412115',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 18.4988,
              longitude: 73.7431,
            },
            amenityFeature: [
              { '@type': 'LocationFeatureSpecification', name: '5-Acre Poona Western Club', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Adjacent to 7,000-Acre NDA Forest', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'IGBC Platinum Certified Green Township', value: true },
              { '@type': 'LocationFeatureSpecification', name: 'Zero Waste Sustainable Living', value: true },
            ],
            identifier: 'MahaRERA: P52100000769 (Ph A), P52100001117 (Ph B), P52100019348 (Ph E), P52100047992',
          }),
        }}
      />
      <Home />
    </>
  );
}
