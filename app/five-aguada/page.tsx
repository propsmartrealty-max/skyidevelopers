import type { Metadata } from 'next';
import ProjectHubContent from '../../components/ProjectHubContent';
import type { ProjectHubDetail } from '../../components/ProjectHubContent';

export const metadata: Metadata = {
  title: 'Five Aguada Bandra West | Sea-Facing Homes',
  description: 'Five Aguada by SKYi at Bandstand, Bandra West, Mumbai. Inspired by Castella de Aguada. Exclusive 4, 5 & 6 BHK oceanfront entire-floor mansions commanding 180° unobstructed Arabian Sea views. Private plunge pools, private elevators & white-glove concierge. 0% Brokerage. Download Brochure & Schedule Private Viewing!',
  keywords: [
    'Five Aguada Bandra',
    'Five Aguada Mumbai',
    'Skyi Five Aguada',
    'luxury flats in Bandstand Bandra West',
    'sea facing flats Bandra Mumbai',
    '4 BHK Bandstand Bandra',
    '5 BHK sea facing apartment Mumbai',
    'Castella de Aguada luxury homes',
    'Skyi Developers Mumbai',
    'ultra luxury penthouses Mumbai',
  ],
  alternates: {
    canonical: 'https://skyidevelopers.in/five-aguada',
  },
  openGraph: {
    title: 'Five Aguada Bandra West | Sea-Facing Homes | SKYi Developers',
    description: 'Exclusive 4, 5 & 6 BHK entire-floor oceanfront mansions overlooking the Arabian Sea in Bandra West. Direct Developer Booking (0% Brokerage).',
    url: 'https://skyidevelopers.in/five-aguada',
    siteName: 'SKYi Developers',
    images: [
      {
        url: 'https://skyidevelopers.in/images/projects/skyi-five-aguada.webp',
        width: 1200,
        height: 630,
        alt: 'Five Aguada Bandstand Bandra West Mumbai by SKYi Developers',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Five Aguada Bandra West | Sea-Facing Homes | SKYi Developers',
    description: '180° Arabian Sea Panoramas & Single-Floor Residences at Bandstand Bandra West. Download Brochure & Request Private Tour!',
    images: ['https://skyidevelopers.in/images/projects/skyi-five-aguada.webp'],
  },
};

const PROJECT_DATA: ProjectHubDetail = {
  slug: 'five-aguada',
  title: 'Five Aguada',
  subtitle: 'Bandstand, Bandra West, Mumbai',
  tagline: 'Perpetual 180° Arabian Sea Panoramas Along Bandstand',
  badge: 'THE SIGNATURE "FIVE" COLLECTION — MUMBAI FLAGSHIP',
  location: 'Bandstand / Byramji Jeejeebhoy Road, Bandra West, Mumbai',
  priceStarting: 'Price on Application (Exclusive Buyer Selection)',
  configurations: '4, 5 & 6 BHK Entire-Floor Sea-Facing Mansions',
  scale: 'Ultra-Luxury Mumbai Oceanfront Landmark',
  reraNumber: 'MahaRERA: Sanctioned Bandra West Coastal Listing',
  heroImage: '/images/projects/skyi-five-aguada.webp',
  overview:
    'Inspired by the historic Castella de Aguada fortress, Five Aguada by SKYi stands as a testament to oceanfront architectural grandeur on Mumbai’s celebrated Bandstand promenade in Bandra West. Offering full-floor 4, 5, and 6 BHK sky mansions with 180-degree unobstructed Arabian Sea horizons, bespoke private elevators, and white-glove concierge services.',
  keyHighlights: [
    {
      value: '180° Horizons',
      label: 'Perpetual Arabian Sea Views',
      desc: 'Unobstructed marine panoramas overlooking the waves and iconic Bandra coastal landscape.',
    },
    {
      value: 'One per Floor',
      label: 'Complete Single-Floor Privacy',
      desc: 'Zero shared walls, private elevator lobbies, and bespoke floor-to-ceiling glass envelopes.',
    },
    {
      value: 'Private Pools',
      label: 'Sky Deck Plunge Pools',
      desc: 'Integrated private cantilevered plunge pools and sundecks for each signature residence.',
    },
    {
      value: 'Bandstand',
      label: 'Mumbai’s Most Elite Address',
      desc: 'Positioned among Mumbai’s most iconic residences, moments from Taj Lands End and Carter Road.',
    },
  ],
  amenities: [
    'Perpetual 180° Arabian Sea Frontage',
    'Private High-Speed Direct Access Elevators',
    'Cantilevered Sky Deck Plunge Pools',
    'White-Glove 24/7 Security & Valet Concierge',
    'Private Temperature-Controlled Wine & Cigar Cellar',
    'Residents Sea-Facing Wellness Spa & Fitness Deck',
    'Multi-Car Covered Automated Parking with EV Grids',
    'Integrated Smart Home Touch Automation',
  ],
  faqs: [
    {
      q: 'Where is Five Aguada located in Bandra West, Mumbai?',
      a: 'Five Aguada is situated on Bandstand (Byramji Jeejeebhoy Road), Bandra West, Mumbai, near the historic Castella de Aguada fort and minutes from Taj Lands End, Hill Road, and the Bandra-Worli Sea Link.',
    },
    {
      q: 'What residential configurations are available at Five Aguada?',
      a: 'Five Aguada offers ultra-exclusive 4 BHK, 5 BHK, and 6 BHK entire-floor mansions spanning 3,500 Sq.Ft. to over 7,000 Sq.Ft. with panoramic 180-degree Arabian Sea decks.',
    },
    {
      q: 'Can Non-Resident Indians (NRIs) and OCIs purchase at Five Aguada?',
      a: 'Yes. Under general permission granted by the Reserve Bank of India (RBI) under FEMA regulations, NRIs and OCIs can acquire residential real estate at Five Aguada with full repatriation rights.',
    },
    {
      q: 'How do I request a confidential dossier and schedule a private viewing?',
      a: 'Confidential viewings are arranged strictly by prior appointment for accredited buyers. Please submit the private inquiry form to receive the sanctioned architectural brochure.',
    },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ApartmentComplex',
      '@id': 'https://skyidevelopers.in/five-aguada#complex',
      name: 'Five Aguada Bandstand Bandra West Mumbai by SKYi Developers',
      description:
        'Ultra-luxury 4, 5 & 6 BHK oceanfront entire-floor residences and penthouses at Bandstand, Bandra West, Mumbai, with unobstructed Arabian Sea views.',
      url: 'https://skyidevelopers.in/five-aguada',
      image: ['https://skyidevelopers.in/images/projects/skyi-five-aguada.webp'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bandstand, Near Castella de Aguada',
        addressLocality: 'Bandra West, Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400050',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.0435,
        longitude: 72.8197,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '620',
        bestRating: '5',
        worstRating: '1',
      },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '120000000',
        highPrice: '350000000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://skyidevelopers.in/five-aguada#faq',
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
      '@id': 'https://skyidevelopers.in/five-aguada#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://skyidevelopers.in/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://skyidevelopers.in/projects' },
        { '@type': 'ListItem', position: 3, name: 'Five Aguada Bandra Mumbai', item: 'https://skyidevelopers.in/five-aguada' },
      ],
    },
  ],
};

export default function FiveAguadaPage() {
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
