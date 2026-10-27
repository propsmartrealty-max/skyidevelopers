import type { Metadata } from 'next';
import ProjectHubContent from '../../components/ProjectHubContent';
import type { ProjectHubDetail } from '../../components/ProjectHubContent';

export const metadata: Metadata = {
  title: '⭐ 【Official】SKYi Star City Dhayari Pune | 1 & 2 BHK From ₹42L* | 20-Acre Township',
  description: '【Official Developer Portal】SKYi Star City in Dhayari, Pune (Near DSK Vishwa / Sinhagad Road). 20-Acre integrated residential township featuring 70% open green space, zero-wastage 1 & 2 BHK smart homes, central night garden & on-campus retail plaza. MahaRERA P52100026727. 0% Brokerage. Download Floor Plans & Schedule Site Tour!',
  keywords: [
    'Skyi Star City',
    'Skyi Star City Dhayari',
    'flats in Dhayari Pune',
    '1 BHK in Dhayari',
    '2 BHK in Dhayari Sinhagad Road',
    'integrated township Dhayari',
    'Skyi Developers Star City price',
    'affordable flats Pune',
    'ready possession flats Dhayari',
  ],
  alternates: {
    canonical: 'https://skyidevelopers.in/star-city',
  },
  openGraph: {
    title: '⭐ 【Official】SKYi Star City Dhayari Pune | 1 & 2 BHK From ₹42L*',
    description: '20-Acre Master-Planned Township with 70% Green Cover & Zero-Wastage Smart Homes in Dhayari. Direct Developer Booking (0% Brokerage).',
    url: 'https://skyidevelopers.in/star-city',
    siteName: 'Skyi Developers',
    images: [
      {
        url: 'https://skyidevelopers.in/images/projects/skyi-star-city.webp',
        width: 1200,
        height: 630,
        alt: 'SKYi Star City 20-Acre Integrated Township Dhayari Pune',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '⭐ 【Official】SKYi Star City Dhayari | 1 & 2 BHK From ₹42L*',
    description: '20-Acre Integrated Township with 70% Greenery in South Pune. Download Brochure & Schedule Site Visit!',
    images: ['https://skyidevelopers.in/images/projects/skyi-star-city.webp'],
  },
};

const PROJECT_DATA: ProjectHubDetail = {
  slug: 'star-city',
  title: 'SKYi Star City',
  subtitle: 'Dhayari, Pune',
  tagline: '20-Acre Self-Sufficient Integrated Township in South Pune',
  badge: 'INTEGRATED ECO-TOWNSHIP',
  location: 'Dhayari, Sinhagad Road Corridor, Pune (Near DSK Vishwa)',
  priceStarting: 'Starting ₹42 Lakhs*',
  configurations: '1 & 2 BHK Zero-Wastage Smart Homes',
  scale: '20 Acres Master-Planned Community',
  reraNumber: 'MahaRERA: P52100026727 / P52100029481 / P52100029474',
  heroImage: '/images/projects/skyi-star-city.webp',
  overview:
    'A masterfully planned 20-acre self-sufficient residential township in Dhayari, South Pune. Built on the core philosophy of Zero-Wastage design, SKYi Star City maximizes usable living space by eliminating unnecessary internal corridors, surrounded by 70% open green parklands, on-campus daily convenience retail, and active community plazas.',
  keyHighlights: [
    {
      value: '20 Acres',
      label: 'Integrated Campus Living',
      desc: 'Self-sufficient township with internal wide roadways, street lighting, and 24/7 security.',
    },
    {
      value: '70% Open',
      label: 'Parklands & Green Spaces',
      desc: 'Extensive central landscaped gardens, children play zones, and senior citizen pavilions.',
    },
    {
      value: 'Zero Wastage',
      label: 'Layout Architecture',
      desc: '100% usable carpet area design ensuring maximum space for your living and bedrooms.',
    },
    {
      value: 'On-Campus',
      label: 'Convenience Retail Plaza',
      desc: 'Supermarkets, pharmacies, and daily convenience shops right within the township gates.',
    },
  ],
  amenities: [
    '70% Open Green Spaces & Night Garden',
    'Grand Community Hall & Celebration Lawns',
    'On-Campus Daily Retail & Convenience Shops',
    'Fully Equipped Fitness Centre & Yoga Pavilion',
    'Dedicated Children Adventure Play Haven',
    'Covered Vehicle Parking with Security Access',
    'Rainwater Harvesting & Solar Street Grids',
    '24/7 Multi-Tier Guarded Security Checkpoints',
  ],
  faqs: [
    {
      q: 'Where is SKYi Star City situated in Dhayari?',
      a: 'SKYi Star City is located in Dhayari, near DSK Vishwa along the Sinhagad Road corridor, Pune. It offers rapid access to the Mumbai-Bangalore Highway bypass, Swargate, and Sinhagad Fort.',
    },
    {
      q: 'What types of homes are offered at SKYi Star City?',
      a: 'SKYi Star City offers efficiently planned 1 BHK and 2 BHK residences engineered with Zero-Dead-Corridor floor plans to maximize usable interior carpet area.',
    },
    {
      q: 'Is SKYi Star City ready for possession?',
      a: 'SKYi Star City has active, fully delivered phases with hundreds of happy families already residing, alongside select newly released phases with immediate possession options.',
    },
    {
      q: 'Are bank loans available from State Bank of India and other national banks?',
      a: 'Yes, SKYi Star City has complete legal clearances and pre-approved home loan facilities from SBI, HDFC Bank, ICICI Bank, Axis Bank, and Bank of Maharashtra.',
    },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ApartmentComplex',
      '@id': 'https://skyidevelopers.in/star-city#complex',
      name: 'SKYi Star City Integrated Township Dhayari Pune',
      description:
        '20-Acre integrated residential township offering 1 & 2 BHK zero-wastage homes with 70% open green space in Dhayari, Pune.',
      url: 'https://skyidevelopers.in/star-city',
      image: ['https://skyidevelopers.in/images/projects/skyi-star-city.webp'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dhayari, Near DSK Vishwa',
        addressLocality: 'Dhayari, Pune',
        addressRegion: 'Maharashtra',
        postalCode: '411041',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 18.4412,
        longitude: 73.8123,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '920',
        bestRating: '5',
        worstRating: '1',
      },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '4200000',
        highPrice: '7500000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://skyidevelopers.in/star-city#faq',
      mainEntity: PROJECT_DATA.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://skyidevelopers.in/star-city#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://skyidevelopers.in/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://skyidevelopers.in/projects' },
        { '@type': 'ListItem', position: 3, name: 'SKYi Star City Dhayari', item: 'https://skyidevelopers.in/star-city' },
      ],
    },
  ],
};

export default function StarCityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectHubContent project={PROJECT_DATA} />
    </>
  );
}
