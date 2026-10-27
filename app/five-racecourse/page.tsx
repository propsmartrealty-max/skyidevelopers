import type { Metadata } from 'next';
import ProjectHubContent from '../../components/ProjectHubContent';
import type { ProjectHubDetail } from '../../components/ProjectHubContent';

export const metadata: Metadata = {
  title: '⭐ 【Official】Five Racecourse Sopan Baug Pune | 4 & 5 BHK From ₹3.85 Cr* | SKYi Developers',
  description: '【Official Developer Portal】Five Racecourse by SKYi in prestigious Sopan Baug, Pune. Exclusive 4 & 5 BHK full-floor sky mansions with unobstructed 180° views of the 120-acre Pune Racecourse and Empress Botanical Gardens. Private elevators, rooftop infinity pool & 24/7 concierge. 0% Brokerage. Download Floor Plans & Book VIP Site Visit!',
  keywords: [
    'Five Racecourse Sopan Baug',
    'Skyi Five Racecourse',
    'luxury flats in Sopan Baug Pune',
    '4 BHK Sopan Baug Pune',
    '5 BHK luxury homes Pune',
    'flats overlooking Pune Racecourse',
    'Skyi projects Sopan Baug',
    'Empress Garden flats Pune',
    'luxury penthouses Pune',
    'Skyi Developers Five Racecourse price',
  ],
  alternates: {
    canonical: 'https://skyidevelopers.in/five-racecourse',
  },
  openGraph: {
    title: '⭐ 【Official】Five Racecourse Sopan Baug Pune | 4 & 5 BHK From ₹3.85 Cr*',
    description: 'Exclusive 4 & 5 BHK full-floor sky residences with unobstructed Pune Racecourse and Empress Garden vistas. Direct Developer Booking (0% Brokerage).',
    url: 'https://skyidevelopers.in/five-racecourse',
    siteName: 'Skyi Developers',
    images: [
      {
        url: 'https://skyidevelopers.in/images/projects/skyi-five-racecourse.webp',
        width: 1200,
        height: 630,
        alt: 'Five Racecourse Sopan Baug Pune by SKYi Developers',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '⭐ 【Official】Five Racecourse Sopan Baug | 4 & 5 BHK From ₹3.85 Cr*',
    description: 'Panoramic Racecourse Views & Ultra-Luxury Living in Sopan Baug Pune. Download Brochure & Schedule Private Tour!',
    images: ['https://skyidevelopers.in/images/projects/skyi-five-racecourse.webp'],
  },
};

const PROJECT_DATA: ProjectHubDetail = {
  slug: 'five-racecourse',
  title: 'Five Racecourse',
  subtitle: 'Sopan Baug, Pune',
  tagline: 'Perpetual 120-Acre Racecourse & Empress Garden Panoramas',
  badge: 'THE SIGNATURE "FIVE" COLLECTION',
  location: 'Sopan Baug / Near Empress Botanical Garden, Pune',
  priceStarting: 'Starting ₹3.85 Crores*',
  configurations: '4 & 5 BHK Full-Floor Sky Mansions & Duplexes',
  scale: 'Iconic Low-Density Luxury High-Rise',
  reraNumber: 'MahaRERA: Official Sopan Baug Luxury Listing',
  heroImage: '/images/projects/skyi-five-racecourse.webp',
  overview:
    'The pinnacle of Pune luxury. Five Racecourse by SKYi offers single-floor and duplex 4 & 5 BHK sky mansions commanding perpetual, unobstructed vistas of the historic 120-acre Pune Racecourse and lush Empress Botanical Gardens. Designed with private high-speed elevators, double-height viewing decks, and personalized five-star concierge services.',
  keyHighlights: [
    {
      value: '120 Acres',
      label: 'Unobstructed Green Panoramas',
      desc: 'Guaranteed uninterrupted views of the historic Pune Racecourse and Empress Botanical Gardens.',
    },
    {
      value: 'Single Residence',
      label: 'Per Floor / Wing Privacy',
      desc: 'Exclusive private elevator foyer ensuring total security, acoustic insulation, and discretion.',
    },
    {
      value: 'Max Light™',
      label: 'Daylighting Architecture',
      desc: 'Engineered with deep overhangs and seasonal sun-path orientation to optimize natural illumination.',
    },
    {
      value: '5-Star Hospitality',
      label: 'Dedicated Concierge',
      desc: '24/7 valet, private chef banqueting support, and rooftop horizon observatory lounge.',
    },
  ],
  amenities: [
    'Rooftop Horizon Edge Swimming Pool',
    'Private High-Speed Direct Access Elevators',
    'Panoramic Double-Height Viewing Decks',
    'Bespoke 24/7 Valet & Concierge Desk',
    'State-of-the-Art Wellness Centre & Steam Spa',
    'Private Resident Lounge & Banquet Suite',
    'EV Charging Infrastructure for Every Bay',
    'Multi-Tier Biometric & Smart Home Security',
  ],
  faqs: [
    {
      q: 'What is the exact location advantage of Five Racecourse Sopan Baug?',
      a: 'Five Racecourse is situated in the serene, heritage enclave of Sopan Baug, Pune, adjacent to the 120-acre Pune Racecourse and Empress Botanical Garden. It is 5 minutes from Camp/MG Road, 10 minutes from Koregaon Park, and 20 minutes from Pune International Airport.',
    },
    {
      q: 'What are the configurations and carpet areas available at Five Racecourse?',
      a: 'Five Racecourse features ultra-luxury 4 BHK and 5 BHK sky mansions spanning from 2,800 Sq.Ft. to over 4,500 Sq.Ft. usable carpet area, available in both single-floor residences and expansive duplex penthouses.',
    },
    {
      q: 'Are home loans approved from nationalized banks for Five Racecourse?',
      a: 'Yes, Five Racecourse has clear legal titles and pre-approved home loan financing from State Bank of India (SBI), HDFC Bank, ICICI Bank, and Axis Bank with preferential luxury tier interest rates.',
    },
    {
      q: 'How can I schedule a private viewing or site tour of Five Racecourse?',
      a: 'You can schedule a confidential VIP site tour by submitting the inquiry form or calling our sales desk directly. Complimentary private chauffeur-driven AC cab pick-up is arranged across Pune for prospective buyers.',
    },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ApartmentComplex',
      '@id': 'https://skyidevelopers.in/five-racecourse#complex',
      name: 'Five Racecourse Sopan Baug Pune by SKYi Developers',
      description:
        'Ultra-luxury 4 & 5 BHK full-floor sky residences and duplex penthouses in Sopan Baug, Pune, commanding perpetual views of the Pune Racecourse and Empress Botanical Gardens.',
      url: 'https://skyidevelopers.in/five-racecourse',
      image: ['https://skyidevelopers.in/images/projects/skyi-five-racecourse.webp'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sopan Baug, Near Empress Garden',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        postalCode: '411001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 18.5158,
        longitude: 73.8894,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '780',
        bestRating: '5',
        worstRating: '1',
      },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '38500000',
        highPrice: '95000000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://skyidevelopers.in/five-racecourse#faq',
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
      '@id': 'https://skyidevelopers.in/five-racecourse#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://skyidevelopers.in/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://skyidevelopers.in/projects' },
        { '@type': 'ListItem', position: 3, name: 'Five Racecourse Sopan Baug', item: 'https://skyidevelopers.in/five-racecourse' },
      ],
    },
  ],
};

export default function FiveRacecoursePage() {
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
