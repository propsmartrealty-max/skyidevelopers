import type { Metadata } from 'next';
import SongbirdsHubContent from '../../components/SongbirdsHubContent';

export const metadata: Metadata = {
  title: '⭐ Skyi Songbirds Bhugaon™ | New Tower Launch: Aria Heights 1 BHK From ₹38L* | 2026 Price List',
  description: '【Project Showcase & Booking】Explore Skyi Songbirds 45-Acre Township in Bhugaon, Paud Road (10 Mins from Kothrud & Chandani Chowk). New Tower Launch: Aria Heights Smart 1 BHK (430 Sq.Ft.) from ₹38L* & Luxury 3 & 4 BHK Hillside Homes. 5-Acre Poona Western Club. MahaRERA P52100028121 / P52100000769. Download Verified Floor Plans PDF & Book Free Cab Site Visit!',
  keywords: [
    'Skyi Songbirds',
    'Skyi Songbirds Bhugaon',
    'Aria Heights Songbirds',
    'Skyi Aria Heights',
    'Skyi Aria Heights 1 BHK',
    'Songbirds 1 BHK new tower launch',
    'Songbirds 1 BHK 430 sqft',
    'Skyi Songbirds 1 BHK',
    'Skyi Songbirds new launch',
    'Skyi Songbirds price list 2026',
    '1 BHK flat Bhugaon Songbirds',
    'Skyi Songbirds 430 sqft price',
    'Songbirds 1 BHK floor plan',
    '1 BHK under 40 lakhs Pune',
    'Skyi Songbirds Paud Road Pune',
    'Songbirds Bhugaon Pune',
    'Aria Heights Bhugaon Pune',
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
    title: '⭐ Skyi Songbirds Bhugaon™ | New Tower Launch: Aria Heights 1 BHK From ₹38L*',
    description: '【Project Showcase & Booking】45+ Acre IGBC Platinum Certified Eco-Township in Bhugaon near Chandani Chowk & Kothrud. New Tower Launch: Aria Heights Smart 1 BHK (430 Sq.Ft.) starting ₹38L*. Download Floor Plans PDF!',
    url: 'https://skyidevelopers.in/songbirds',
    siteName: 'Skyi Developers',
    images: [
      {
        url: 'https://skyidevelopers.in/songbirds-1.webp',
        width: 1200,
        height: 630,
        alt: 'Skyi Songbirds Aria Heights New Tower Launch 1 BHK Township Bhugaon Pune',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '⭐ Skyi Songbirds Bhugaon™ | New Tower Launch: Aria Heights 1 BHK From ₹38L*',
    description: '45+ Acre IGBC Platinum Township near Kothrud. Aria Heights Smart 1 BHK from ₹38 Lakhs*. Download Floor Plans PDF & Schedule Site Tour!',
    images: ['https://skyidevelopers.in/songbirds-1.webp'],
  },
};

const songbirdsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      "@id": "https://skyidevelopers.in/songbirds#complex",
      name: "Skyi Songbirds Eco-Township (New Tower Launch: Aria Heights 1 BHK & Hillside Residences)",
      description: "45+ Acre IGBC Platinum certified residential township located in Bhugaon along Paud Road, Pune. New tower launch featuring Aria Heights smart 1 BHK (430 Sq.Ft. Carpet Area) residences alongside luxury 3 & 4 BHK hillside homes.",
      url: "https://skyidevelopers.in/songbirds",
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
        { "@type": "LocationFeatureSpecification", name: "🔥 New Tower Launch: Aria Heights 1 BHK 430 Sq.Ft. Residences", value: true },
        { "@type": "LocationFeatureSpecification", name: "5-Acre Poona Western Club with Olympic Pool", value: true },
        { "@type": "LocationFeatureSpecification", name: "Adjacent to 7,000-Acre NDA Forest Reserve", value: true },
        { "@type": "LocationFeatureSpecification", name: "IGBC Platinum Certified Green Township", value: true },
        { "@type": "LocationFeatureSpecification", name: "Zero Waste Sustainable Architecture", value: true },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1840",
        bestRating: "5",
        worstRating: "1",
      },
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "3800000",
        highPrice: "17900000",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      identifier: "MahaRERA: P52100028121 (Aria Heights Phase I), P52100000769 (Ph A), P52100001117 (Ph B), P52100019348 (Ph E), P52100047992",
    },
    {
      "@type": "FAQPage",
      "@id": "https://skyidevelopers.in/songbirds#faq",
      mainEntity: [
        {
          "@type": "Question",
          "name": "What is the new 1 BHK tower launch at Skyi Songbirds Bhugaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The new tower launch at Skyi Songbirds is Aria Heights, featuring smart 1 BHK eco-residences with 430 Sq.Ft. usable RERA carpet area starting from ₹38 Lakhs*. These homes are designed with Zero-Dead-Space layouts, private hillside deck balconies, and full access to township amenities."
          }
        },
        {
          "@type": "Question",
          "name": "What is the starting price of 1 BHK in Skyi Songbirds Aria Heights?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 1 BHK (430 Sq.Ft. Carpet) in Skyi Songbirds Aria Heights starts at ₹38 Lakhs* (base agreement value, ~₹42.5L* all-inclusive) with pre-approved bank loans up to 90% from SBI, HDFC, and ICICI Bank."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Skyi Songbirds located in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Skyi Songbirds is located along the 6-lane Paud Road in Bhugaon, just 6-8 minutes from Chandani Chowk and 10 minutes from Kothrud Metro Station."
          }
        },
        {
          "@type": "Question",
          "name": "What is the MahaRERA number for Aria Heights at Songbirds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Skyi Aria Heights Phase I is registered under MahaRERA number P52100028121. The master Songbirds township phases are registered under P52100000769, P52100001117, and P52100019348."
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
