import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: '⭐ SKYi Projects Directory™ | All Townships & Luxury Residences From ₹49L* | 2026 Price List & PDF',
  description: '【Direct Developer Booking — 0% Brokerage】⭐ Explore all landmark developments by SKYi: Skyi Songbirds (1 BHK All-Inclusive Only ₹49L*), SKYi Manas Lake (PMRDA NA Plots from ₹95L*), Tigers Nest, Five Racecourse Sopan Baug, Five Aguada Bandra Mumbai, Star City. Download 2026 Floor Plans PDF & Schedule Free AC Cab Site Visit!',
  alternates: {
    canonical: 'https://skyidevelopers.in/projects',
  },
  openGraph: {
    title: '⭐ SKYi Projects Directory™ | All Townships & Luxury Residences From ₹49L*',
    description: 'Explore all delivered and ongoing landmarks by SKYi Developers: Skyi Songbirds (1 BHK All-Inclusive Only ₹49L*), SKYi Manas Lake, Five Racecourse, Five Aguada, Five Maidan, Tiger’s Nest, PWC Towers, and SKYi Park. Direct developer booking & zero brokerage.',
    url: 'https://skyidevelopers.in/projects',
    siteName: 'Skyi Developers',
    images: [{ url: 'https://skyidevelopers.in/og-image.jpg', width: 1200, height: 630, alt: 'SKYi Developers Projects Directory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '⭐ SKYi Projects Directory™ | All Townships & Luxury Residences From ₹49L*',
    description: 'Explore all delivered and ongoing landmarks by SKYi Developers in Pune & Mumbai. Direct booking & 0% brokerage.',
    images: ['https://skyidevelopers.in/og-image.jpg'],
  },
};

const projectsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      name: 'SKYi Developers Landmark Projects Directory',
      description: 'Comprehensive directory of ongoing and delivered master developments by SKYi Developers in Pune and Mumbai.',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Skyi Songbirds Eco-Township (Aria Heights 1 BHK New Launch & 3, 4 BHK)',
          url: 'https://skyidevelopers.in/songbirds',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'SKYi Manas Lake PMRDA NA Bungalow Plots & Lakefront Residences',
          url: 'https://skyidevelopers.in/na-plots-bhukum',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'SKYi Tigers Nest 4 BHK Hillside Forest Sanctuaries',
          url: 'https://skyidevelopers.in/tigers-nest',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'SKYi Five Racecourse Sopan Baug Ultra-Luxury Mansions',
          url: 'https://skyidevelopers.in/five-racecourse',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'SKYi Five Aguada Bandra West Mumbai Sea-Facing Mansions',
          url: 'https://skyidevelopers.in/five-aguada',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'SKYi Five Maidan Baner 4 BHK Parkland Tower Residences',
          url: 'https://skyidevelopers.in/five-maidan',
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'SKYi Star City 20-Acre Township Dhayari',
          url: 'https://skyidevelopers.in/star-city',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://skyidevelopers.in/projects#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What types of properties does SKYi Developers develop?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SKYi Developers specializes in large-scale IGBC Platinum certified eco-townships (Skyi Songbirds, SKYi Manas Lake, SKYi Star City), PMRDA-sanctioned clear title NA bungalow plots, and the ultra-luxury "Five" collection (Five Racecourse Sopan Baug, Five Aguada Bandra West, Five Maidan Baner).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the starting price for SKYi Developers properties?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Property prices start from only ₹49 Lakhs* All-Inclusive for smart 1 BHK eco-homes at Aria Heights Songbirds, ₹65 Lakhs* for lakeside apartments at Manas Lake, ₹95 Lakhs* for clear title PMRDA NA bungalow plots, up to ₹12.00+ Crores* for sea-facing mansions in Bandra West Mumbai.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I book direct developer inventory with 0% brokerage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Booking through skyidevelopers.in connects you directly with the developer sales desk, guaranteeing zero brokerage, exclusive price benefits, and free VIP AC cab pickup anywhere across Pune.',
          },
        },
      ],
    },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsSchema),
        }}
      />
      <Home />
    </>
  );
}
