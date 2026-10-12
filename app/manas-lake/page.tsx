import type { Metadata } from 'next';
import ManasLakeHubContent from '../../components/ManasLakeHubContent';

export const metadata: Metadata = {
  title: 'SKYi Manas Lake Bhukum Bavdhan Pune | PMRDA NA Bungalow Plots & 90+ Acre Township',
  description: 'SKYi Manas Lake at Paud Road, Bhukum / Bavdhan Pune: 90+ Acre Lakefront Eco-Township featuring PMRDA Sanctioned Clear Title NA Bungalow Plots (2,000-5,000+ SF, FSI 1.5) from ₹95L* & 2, 3 BHK Lakeside Flats. 6 Mins from Chandani Chowk.',
  keywords: [
    'Skyi Manas Lake',
    'Skyi Manas Lake plots',
    'Manas Lake NA bungalow plots',
    'PMRDA NA plots Bhukum',
    'plots in Bhukum Paud Road',
    'Skyi Manas Lake Bhukum',
    'Skyi Manas Lake Bavdhan',
    'clear title NA plots Pune',
    'lake view plots Pune',
    'Manas Lake 2000 sqft plot price',
    'Skyi Manas Lake Paud Road Pune',
    'Flats in Bhukum near Chandani Chowk',
    '2 BHK in Manas Lake',
    '3 BHK in Manas Lake',
    'Skyi Developers Manas Lake',
    'Lakeside apartments Pune',
    'gated community plots Manas Lake Pune',
  ],
  alternates: {
    canonical: 'https://skyidevelopers.in/manas-lake',
  },
  openGraph: {
    title: 'SKYi Manas Lake Bhukum Bavdhan Pune | PMRDA NA Plots & Lakefront Township',
    description: 'IGBC Platinum Certified 90+ Acre lakefront township featuring clear title PMRDA NA bungalow plots (2,000-5,000 SF) & 2, 3 BHK apartments near Chandani Chowk.',
    url: 'https://skyidevelopers.in/manas-lake',
    siteName: 'Skyi Developers',
    images: [
      {
        url: 'https://skyidevelopers.in/manaslake-1.webp',
        width: 1200,
        height: 630,
        alt: 'SKYi Manas Lake PMRDA NA Plots & Township Pune',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKYi Manas Lake Bhukum Bavdhan Pune | NA Plots & Apartments',
    description: '90+ Acre Lakefront Township near Chandani Chowk. PMRDA NA Plots with FSI 1.5 & Lakeside Flats.',
    images: ['https://skyidevelopers.in/manaslake-1.webp'],
  },
};

const manasLakeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ApartmentComplex",
      "@id": "https://skyidevelopers.in/manas-lake#complex",
      name: "SKYi Manas Lake Eco-Township & PMRDA NA Bungalow Plots",
      description: "90+ Acre IGBC Platinum certified residential lakefront township located in Bhukum / Bavdhan along Paud Road, Pune. Featuring PMRDA sanctioned clear title NA bungalow plots (2,000 - 5,000+ Sq.Ft. with FSI 1.5) and lakeside 2 & 3 BHK residences.",
      url: "https://skyidevelopers.in/manas-lake",
      telephone: "+91-20-66143000",
      priceRange: "₹65 Lakhs - ₹2.50 Crores",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Paud Road, Bhukum",
        addressLocality: "Bavdhan / Bhukum",
        addressRegion: "Pune, Maharashtra",
        postalCode: "412115",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.5085,
        longitude: 73.7380,
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "🌊 PMRDA Sanctioned Clear Title NA Bungalow Plots", value: true },
        { "@type": "LocationFeatureSpecification", name: "1.5 FSI Permissible for G+2 Custom Villa Construction", value: true },
        { "@type": "LocationFeatureSpecification", name: "Lakeside Promenade & Bird Sanctuaries", value: true },
        { "@type": "LocationFeatureSpecification", name: "IGBC Platinum Certified Green Architecture", value: true },
        { "@type": "LocationFeatureSpecification", name: "Full-Service Sports Clubhouse & Amphitheatre", value: true },
      ],
      identifier: "MahaRERA: P52100000513, P52100000514, P52100026954, P52100052033 / PMRDA Sanctioned Layout",
    },
    {
      "@type": "FAQPage",
      "@id": "https://skyidevelopers.in/manas-lake#faq",
      mainEntity: [
        {
          "@type": "Question",
          "name": "Are NA bungalow plots available at SKYi Manas Lake Bhukum?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SKYi Manas Lake offers PMRDA-sanctioned clear title residential NA bungalow plots ranging from 2,000 Sq.Ft. to 5,000+ Sq.Ft. with individual 7/12 extracts, FSI 1.5 (sanctioned for Ground + 2 Floors villa construction), and ready underground utilities."
          }
        },
        {
          "@type": "Question",
          "name": "What is the price of NA plots in SKYi Manas Lake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PMRDA NA bungalow plots at SKYi Manas Lake start from ₹95 Lakhs* onwards, with up to 90% bank loan pre-approvals from SBI, HDFC, and ICICI Bank."
          }
        },
        {
          "@type": "Question",
          "name": "How far is SKYi Manas Lake from Chandani Chowk and Kothrud?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SKYi Manas Lake is located on the 6-lane Paud Road at Bhukum, just 6 minutes from Chandani Chowk and 10 minutes from Kothrud."
          }
        }
      ]
    }
  ]
};

export default function ManasLakePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manasLakeSchema) }}
      />
      <ManasLakeHubContent />
    </>
  );
}
