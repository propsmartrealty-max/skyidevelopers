import type { Metadata } from 'next';
import SongbirdsHubContent from '../../components/SongbirdsHubContent';

export const metadata: Metadata = {
  title: 'Skyi Songbirds Bhugaon Pune | New Launch 1 BHK (430 Sq.Ft.) & 3, 4 BHK Luxury Residences',
  description: 'Skyi Songbirds New Launch: Smart 1 BHK (430 Sq.Ft. Carpet) from ₹38L* & Luxury 3, 4 BHK Hillside Homes in 45-Acre Eco-Township, Bhugaon, Paud Road, Pune. 10 Mins from Kothrud & Chandani Chowk. 5-Acre Poona Western Club. MahaRERA P52100000769.',
  keywords: [
    'Skyi Songbirds',
    'Skyi Songbirds Bhugaon',
    'Songbirds 1 BHK 430 sqft',
    'Skyi Songbirds 1 BHK',
    'Skyi Songbirds new launch',
    '1 BHK flat Bhugaon Songbirds',
    'Skyi Songbirds 430 sqft price',
    'Songbirds 1 BHK floor plan',
    '1 BHK under 40 lakhs Pune',
    'Skyi Songbirds Paud Road Pune',
    'Songbirds Bhugaon Pune',
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
    title: 'Skyi Songbirds Bhugaon Pune | New Launch 1 BHK (430 Sq.Ft.) & 3, 4 BHK Homes',
    description: '45+ Acre IGBC Platinum Certified Eco-Township in Bhugaon near Chandani Chowk & Kothrud. New launch 1 BHK (430 Sq.Ft.) starting ₹38L*.',
    url: 'https://skyidevelopers.in/songbirds',
    siteName: 'Skyi Developers',
    images: [
      {
        url: 'https://skyidevelopers.in/songbirds-1.webp',
        width: 1200,
        height: 630,
        alt: 'Skyi Songbirds New Launch 1 BHK Township Bhugaon Pune',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skyi Songbirds Bhugaon Pune | New Launch 1 BHK (430 Sq.Ft.)',
    description: '45+ Acre IGBC Platinum Township near Kothrud. Smart 1 BHK from ₹38 Lakhs*.',
    images: ['https://skyidevelopers.in/songbirds-1.webp'],
  },
};

const songbirdsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      "@id": "https://skyidevelopers.in/songbirds#complex",
      name: "Skyi Songbirds Eco-Township (New Launch 1 BHK & Hillside Residences)",
      description: "45+ Acre IGBC Platinum certified residential township located in Bhugaon along Paud Road, Pune. New launch featuring smart 1 BHK (430 Sq.Ft. Carpet Area) residences alongside luxury 3 & 4 BHK hillside homes.",
      url: "https://skyidevelopers.in/songbirds",
      telephone: "+91-20-66143000",
      priceRange: "₹38 Lakhs - ₹2.10 Crores",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Paud Road, Bhugaon",
        addressLocality: "Bhugaon / Kothrud Extension",
        addressRegion: "Pune, Maharashtra",
        postalCode: "412115",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.4988,
        longitude: 73.7431,
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "🔥 New Launch: Smart 1 BHK 430 Sq.Ft. Residences", value: true },
        { "@type": "LocationFeatureSpecification", name: "5-Acre Poona Western Club with Olympic Pool", value: true },
        { "@type": "LocationFeatureSpecification", name: "Adjacent to 7,000-Acre NDA Forest Reserve", value: true },
        { "@type": "LocationFeatureSpecification", name: "IGBC Platinum Certified Green Township", value: true },
        { "@type": "LocationFeatureSpecification", name: "Zero Waste Sustainable Architecture", value: true },
      ],
      identifier: "MahaRERA: P52100000769 (Ph A), P52100001117 (Ph B), P52100019348 (Ph E), P52100047992",
    },
    {
      "@type": "FAQPage",
      "@id": "https://skyidevelopers.in/songbirds#faq",
      mainEntity: [
        {
          "@type": "Question",
          "name": "What is the new launch at Skyi Songbirds Bhugaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The new launch at Skyi Songbirds features smart 1 BHK eco-residences with 430 Sq.Ft. usable RERA carpet area starting from ₹38 Lakhs*. These homes are designed with Zero-Dead-Space layouts, private hillside deck balconies, and full access to township amenities."
          }
        },
        {
          "@type": "Question",
          "name": "What is the starting price of 1 BHK in Skyi Songbirds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 1 BHK (430 Sq.Ft. Carpet) in Skyi Songbirds starts at ₹38 Lakhs* with pre-approved bank loans up to 90% from SBI, HDFC, and ICICI Bank."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Skyi Songbirds located in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Skyi Songbirds is located along the 6-lane Paud Road in Bhugaon, just 6-8 minutes from Chandani Chowk and 10 minutes from Kothrud Metro Station."
          }
        }
      ]
    }
  ]
};

export default function SongbirdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(songbirdsSchema) }}
      />
      <SongbirdsHubContent />
    </>
  );
}
