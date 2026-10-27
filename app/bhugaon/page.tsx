import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'SKYi Projects Bhugaon | 1 BHK From ₹49L*',
  description: 'Discover premier townships along 6-lane Paud Road: Skyi Songbirds (1 BHK All-Inclusive Only ₹49L* & 3-4 BHK), SKYi Tigers Nest & PWC Towers. Next to 7,000-acre NDA Forest. Download 2026 Floor Plans PDF & Book Free AC Cab Site Visit!',
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
    'Aria Heights Bhugaon',
    'Songbirds 1 BHK 49 lakhs all inclusive',
    'Songbirds 1 BHK 430 sqft',
  ],
  alternates: {
    canonical: 'https://skyidevelopers.in/bhugaon',
  },
  openGraph: {
    title: 'SKYi Projects Bhugaon | 1 BHK From ₹49L* | SKYi Developers',
    description: 'Skyi Songbirds (1 BHK All-Inclusive ₹49L*), Tigers Nest & PWC Towers in Bhugaon near Chandani Chowk & Kothrud, Pune. Download 2026 Price List & Plans!',
    url: 'https://skyidevelopers.in/bhugaon',
    siteName: 'SKYi Developers',
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
    title: 'SKYi Projects Bhugaon | 1 BHK From ₹49L* | SKYi Developers',
    description: 'Skyi Songbirds (1 BHK All-Inclusive ₹49L*), Tigers Nest & PWC Towers in Bhugaon near Kothrud. Download 2026 Floor Plans & Book Cab Tour!',
    images: ['https://skyidevelopers.in/songbirds-1.webp'],
  },
};

const bhugaonSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
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
          identifier: 'MahaRERA: P52100028121, P52100000769, P52100001117, P52100019348, P52100047992',
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1840',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://skyidevelopers.in/bhugaon#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What residential projects are offered by SKYi in Bhugaon, Pune?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SKYi Developers offers the 45-acre Skyi Songbirds eco-township (featuring the newly launched Aria Heights 1 BHK with all-inclusive price of only ₹49 Lacs* and 3 & 4 BHK hillside homes), SKYi Tigers Nest (luxury 4 BHK forest homes starting ₹1.79 Cr*), and PWC Towers integrated with the 5-acre Poona Western Club.',
          },
        },
        {
          '@type': 'Question',
          name: 'How far is Bhugaon from Kothrud and Chandani Chowk?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bhugaon is just 6 to 8 minutes from the Chandani Chowk multi-level flyover via the 6-lane Paud Road expressway, and 10 minutes from Vanaz Metro Station in Kothrud.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are projects in Bhugaon MahaRERA approved?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, all projects in Bhugaon are registered under MahaRERA: Aria Heights (P52100028121), Songbirds Phase A (P52100000769), Songbirds Phase B (P52100001117), Songbirds Phase E (P52100019348), and Tigers Nest (P52100000769).',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I schedule a site visit with free AC cab pickup to Bhugaon?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can book directly on skyidevelopers.in/contact or call/WhatsApp +91 7744009295. Complimentary private AC cab pickup and drop is provided anywhere in Pune. Zero brokerage.',
          },
        },
      ],
    },
  ],
};

export default function BhugaonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bhugaonSchema),
        }}
      />
      <Home />
    </>
  );
}
