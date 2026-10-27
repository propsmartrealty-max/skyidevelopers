import type { Metadata } from 'next';
import ProjectHubContent from '../../components/ProjectHubContent';
import type { ProjectHubDetail } from '../../components/ProjectHubContent';

export const metadata: Metadata = {
  title: '⭐ 【Official】Five Maidan Baner Pune | 4 BHK Tower in Sprawling Greens | SKYi Developers',
  description: '【Official Developer Portal】Five Maidan by SKYi in Baner, Pune. A rare single-tower luxury residential development set within sprawling landscaped open maidans and lush grounds. Expansive 4 BHK homes with double-height decks, zero-wastage layouts & resort amenities. 0% Brokerage. Download Floor Plans & Schedule Site Tour!',
  keywords: [
    'Five Maidan Baner',
    'Skyi Five Maidan',
    'luxury flats in Baner Pune',
    '4 BHK flats in Baner',
    'Skyi projects Baner',
    'Pancard Club Road luxury flats',
    'flats near Balewadi High Street',
    'Skyi Developers Five Maidan price',
    '4 BHK penthouses Baner Pune',
  ],
  alternates: {
    canonical: 'https://skyidevelopers.in/five-maidan',
  },
  openGraph: {
    title: '⭐ 【Official】Five Maidan Baner Pune | 4 BHK Tower in Sprawling Greens',
    description: 'Exclusive 4 BHK luxury residences set within expansive green open fields in Baner. Direct Developer Booking (0% Brokerage).',
    url: 'https://skyidevelopers.in/five-maidan',
    siteName: 'Skyi Developers',
    images: [
      {
        url: 'https://skyidevelopers.in/images/projects/skyi-five-maidan.webp',
        width: 1200,
        height: 630,
        alt: 'Five Maidan Baner Pune by SKYi Developers',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '⭐ 【Official】Five Maidan Baner Pune | 4 BHK Tower in Greens',
    description: 'Exclusive 4 BHK Tower in Sprawling Greens near Balewadi High Street. Download Brochure & Schedule Site Tour!',
    images: ['https://skyidevelopers.in/images/projects/skyi-five-maidan.webp'],
  },
};

const PROJECT_DATA: ProjectHubDetail = {
  slug: 'five-maidan',
  title: 'Five Maidan',
  subtitle: 'Baner, Pune',
  tagline: 'Rare Low-Density Tower Surrounded by Sprawling Green Maidans',
  badge: 'THE SIGNATURE "FIVE" COLLECTION',
  location: 'Pancard Club Road / Baner, Pune (3 Mins to Balewadi High Street)',
  priceStarting: 'Starting ₹2.45 Crores*',
  configurations: '4 BHK Exclusive Luxury Tower Residences',
  scale: 'Low-Density Green Parkland Living',
  reraNumber: 'MahaRERA: Official Baner Signature Listing',
  heroImage: '/images/projects/skyi-five-maidan.webp',
  overview:
    'A rare jewel of low-density urban luxury. Five Maidan by SKYi is an exclusive single-tower residential sanctuary immersed in vast landscaped green fields, private forest walkways, and serene sporting grounds in prime Baner. Offering expansive 4 BHK homes with zero-wastage layout designs, double-height viewing decks, and instant connectivity to Balewadi High Street and Hinjawadi IT Park.',
  keyHighlights: [
    {
      value: 'Vast Greens',
      label: 'Sprawling Open Maidans',
      desc: 'Set within acres of lush landscaped lawns, tree canopies, and serene outdoor sporting fields.',
    },
    {
      value: '4 BHK Exclusive',
      label: 'Generous Spatial Proportion',
      desc: 'Designed with zero dead corridors to maximize usable living, dining, and master suite space.',
    },
    {
      value: '3 Mins',
      label: 'To Balewadi High Street',
      desc: 'Walking distance to premier retail hubs, gourmet dining, and rapid Mumbai Expressway link.',
    },
    {
      value: 'IGBC Rating',
      label: 'Platinum Green Standard',
      desc: 'Eco-conscious construction with 100% rainwater harvesting and solar-powered common utilities.',
    },
  ],
  amenities: [
    'Olympic-Length Swimming Pool & Deck',
    'Squash & Badminton Courts',
    'Double-Height Designer Sun Decks',
    'Landscaped Jogging & Nature Walkways',
    'EV Charging Bays for Every Apartment',
    'State-of-the-Art Fitness Gymnasium',
    'Grand Double-Height Reception Lobby',
    'Multi-Tier 24/7 Security & CCTV Grids',
  ],
  faqs: [
    {
      q: 'Where is Five Maidan located in Baner?',
      a: 'Five Maidan is located along the prestigious Pancard Club Road corridor in Baner, Pune, just 3 minutes from Balewadi High Street, 10 minutes from Hinjawadi IT Park, and 5 minutes from the Mumbai-Bangalore Highway.',
    },
    {
      q: 'What is the configuration and carpet area of homes at Five Maidan?',
      a: 'Five Maidan features expansive 4 BHK luxury residences with usable RERA carpet areas ranging from 2,150 Sq.Ft. to 2,750 Sq.Ft., featuring deep deck balconies and servant room provisions.',
    },
    {
      q: 'Are bank loans approved for Five Maidan Baner?',
      a: 'Yes, Five Maidan has full legal sanctions and pre-approved home loan financing from State Bank of India, HDFC Bank, ICICI Bank, and Axis Bank with zero processing fee offers.',
    },
    {
      q: 'How can I download floor plans and book a site visit?',
      a: 'You can download the verified floor plans PDF and book a complimentary AC cab site visit through our official booking portal on this page.',
    },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ApartmentComplex',
      '@id': 'https://skyidevelopers.in/five-maidan#complex',
      name: 'Five Maidan Baner Pune by SKYi Developers',
      description:
        'Exclusive 4 BHK single-tower luxury residences set within sprawling green open fields along Pancard Club Road, Baner, Pune.',
      url: 'https://skyidevelopers.in/five-maidan',
      image: ['https://skyidevelopers.in/images/projects/skyi-five-maidan.webp'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Pancard Club Road, Baner',
        addressLocality: 'Baner, Pune',
        addressRegion: 'Maharashtra',
        postalCode: '411045',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 18.5590,
        longitude: 73.7868,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '540',
        bestRating: '5',
        worstRating: '1',
      },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '24500000',
        highPrice: '45000000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://skyidevelopers.in/five-maidan#faq',
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
      '@id': 'https://skyidevelopers.in/five-maidan#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://skyidevelopers.in/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://skyidevelopers.in/projects' },
        { '@type': 'ListItem', position: 3, name: 'Five Maidan Baner', item: 'https://skyidevelopers.in/five-maidan' },
      ],
    },
  ],
};

export default function FiveMaidanPage() {
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
