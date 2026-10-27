import type { Metadata } from 'next';
import ProjectHubContent from '../../components/ProjectHubContent';
import type { ProjectHubDetail } from '../../components/ProjectHubContent';

export const metadata: Metadata = {
  title: 'Tigers Nest Bhugaon | 4 BHK Forest Decks',
  description: 'Tiger’s Nest by SKYi in Bhugaon, Paud Road, Pune (Near Chandani Chowk). Secluded 4 BHK hillside residences directly facing the 7,000-acre NDA Forest Reserve. Heated infinity pool, 180° valley decks, and pure mountain air. MahaRERA P52100000769. 0% Brokerage. Download Floor Plans & Book Free Cab Visit!',
  keywords: [
    'Tigers Nest Bhugaon',
    'Skyi Tigers Nest',
    'luxury flats in Bhugaon Pune',
    '4 BHK flats Bhugaon Paud Road',
    'forest facing flats Pune',
    'NDA forest view homes Pune',
    'hillside luxury homes Pune',
    'Tigers Nest price list',
    'Skyi Developers Tigers Nest',
  ],
  alternates: {
    canonical: 'https://skyidevelopers.in/tigers-nest',
  },
  openGraph: {
    title: 'Tigers Nest Bhugaon | 4 BHK Forest Decks | SKYi Developers',
    description: 'Secluded 4 BHK hillside homes facing the 7,000-acre NDA Forest Reserve in Bhugaon. Direct Developer Booking (0% Brokerage).',
    url: 'https://skyidevelopers.in/tigers-nest',
    siteName: 'SKYi Developers',
    images: [
      {
        url: 'https://skyidevelopers.in/images/projects/skyi-tigers-nest.webp',
        width: 1200,
        height: 630,
        alt: 'Tiger’s Nest Hillside Residences Bhugaon Pune by SKYi',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tigers Nest Bhugaon | 4 BHK Forest Decks | SKYi Developers',
    description: 'Secluded Hillside Sanctuary Facing 7,000-Acre NDA Forest. Download Brochure & Book VIP Tour!',
    images: ['https://skyidevelopers.in/images/projects/skyi-tigers-nest.webp'],
  },
};

const PROJECT_DATA: ProjectHubDetail = {
  slug: 'tigers-nest',
  title: 'Tiger’s Nest',
  subtitle: 'Bhugaon, Paud Road, Pune',
  tagline: 'Secluded Hillside Sanctuary Facing the 7,000-Acre NDA Forest',
  badge: 'HILLSIDE & CLUB SANCTUARY',
  location: 'Bhugaon Foothills / Paud Road, Pune (10 Mins to Kothrud)',
  priceStarting: 'Starting ₹1.79 Crores*',
  configurations: '4 BHK Luxury Hillside Forest Decks',
  scale: 'Hillside Sanctuary Edition',
  reraNumber: 'MahaRERA: P52100000769 / P52100001117',
  heroImage: '/images/projects/skyi-tigers-nest.webp',
  overview:
    'Ultra-luxury forest-facing 4 BHK residences nestled directly against the protected 7,000-acre NDA forest reserve along Paud Road, Bhugaon. Tiger’s Nest offers an extraordinary lifestyle shaped by untouched nature, pristine air quality, 180-degree deep observation deck terraces, and heated valley-view infinity swimming pools.',
  keyHighlights: [
    {
      value: '7,000 Acres',
      label: 'NDA Forest Reserve Border',
      desc: 'Wake up to the Sahyadri mountains and untouched forest canopies directly from your master suite.',
    },
    {
      value: '180° Decks',
      label: 'Panoramic Hill Balconies',
      desc: 'Extra-wide cantilevered decks designed for sunset entertaining and fresh mountain cross-breezes.',
    },
    {
      value: 'Heated Pool',
      label: 'Valley-View Infinity Pool',
      desc: 'Year-round temperature-controlled pool overlooking the lush natural hillside contours.',
    },
    {
      value: '10 Mins',
      label: 'To Chandani Chowk Kothrud',
      desc: 'Pristine hill resort serenity combined with immediate highway connectivity to Pune city.',
    },
  ],
  amenities: [
    'Direct 7,000-Acre NDA Forest Sanctuary Panoramas',
    'Heated Valley-View Infinity Swimming Pool',
    '180° Deep Deck Balconies in All Living Areas',
    'Private Gated Security Gatehouse & 24/7 Patrol',
    'Dedicated Clubhouse, Steam Bath & Fitness Studio',
    'Access to 5-Acre Poona Western Club Complex',
    'Covered Automated Car Parking with EV Charging',
    'Zero-Waste Water Treatment & Rainwater Harvesting',
  ],
  faqs: [
    {
      q: 'Where is Tiger’s Nest located in Bhugaon?',
      a: 'Tiger’s Nest is situated in the hillside sanctuary of Bhugaon along Paud Road, Pune, bordering the 7,000-acre NDA forest reserve. It is located 6 minutes from Chandani Chowk and 10 minutes from Kothrud.',
    },
    {
      q: 'What makes Tiger’s Nest unique compared to other Pune developments?',
      a: 'Tiger’s Nest is directly surrounded by a non-buildable, protected 7,000-acre forest reserve, guaranteeing perpetual unpolluted air, unmatched privacy, zero noise pollution, and cooling Sahyadri wind corridors.',
    },
    {
      q: 'Is Tiger’s Nest MahaRERA approved?',
      a: 'Yes, Tiger’s Nest is registered under MahaRERA: P52100000769 and P52100001117 with 100% clear legal titles and approved loans from major nationalized banks.',
    },
    {
      q: 'How can I schedule a private visit to Tiger’s Nest?',
      a: 'We provide complimentary door-to-door private AC cab pick-up across Pune for scheduled viewings. Simply select your preferred date on our VIP tour booking form.',
    },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ApartmentComplex',
      '@id': 'https://skyidevelopers.in/tigers-nest#complex',
      name: 'Tiger’s Nest Hillside Residences Bhugaon Pune by SKYi Developers',
      description:
        'Ultra-luxury 4 BHK forest-facing hillside residences bordering the 7,000-acre NDA Forest Reserve in Bhugaon, Paud Road, Pune.',
      url: 'https://skyidevelopers.in/tigers-nest',
      image: ['https://skyidevelopers.in/images/projects/skyi-tigers-nest.webp'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bhugaon Hillside, Paud Road',
        addressLocality: 'Bhugaon, Pune',
        addressRegion: 'Maharashtra',
        postalCode: '412115',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 18.5020,
        longitude: 73.7410,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '490',
        bestRating: '5',
        worstRating: '1',
      },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '17900000',
        highPrice: '32000000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://skyidevelopers.in/tigers-nest#faq',
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
      '@id': 'https://skyidevelopers.in/tigers-nest#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://skyidevelopers.in/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://skyidevelopers.in/projects' },
        { '@type': 'ListItem', position: 3, name: 'Tiger’s Nest Bhugaon', item: 'https://skyidevelopers.in/tigers-nest' },
      ],
    },
  ],
};

export default function TigersNestPage() {
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
