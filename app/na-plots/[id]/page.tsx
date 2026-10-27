import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MicroLocationLanding from '../../../components/MicroLocationLanding';
import { PROGRAMMATIC_SEO_ITEMS } from '../../../utils/programmaticSeo';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROGRAMMATIC_SEO_ITEMS.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const item = PROGRAMMATIC_SEO_ITEMS.find((p) => p.id === id);

  if (!item) {
    return {
      title: 'Real Estate Projects & NA Plots Pune & Mumbai | SKYi Developers',
      description: 'PMRDA Sanctioned Clear Title NA Bungalow Plots and Luxury Residences across Pune and Mumbai.',
    };
  }

  const isPlot = item.type.toLowerCase().includes('plot');
  const title = isPlot
    ? `⭐ ${item.project} ${item.microLocation}™ | PMRDA NA Plots From ${item.priceRange.split('-')[0].trim()}* | 2026 Layout & Clear 7/12`
    : `⭐ ${item.project} ${item.microLocation}™ | ${item.type.split('&')[0].trim()} From ${item.priceRange.split('-')[0].trim()}* | 2026 Price List & Plans`;

  const description = isPlot
    ? `【Direct Developer Booking — 0% Brokerage】⭐ 100% Clear Title 7/12 & PR Card PMRDA Sanctioned ${item.type} at ${item.location}. Plot Size: ${item.plotSize || '2,000 SQFT Onwards'}, FSI ${item.fsiRatio || '1.4 - 1.5'}. Approved Bank Loans (${item.bankLoans.join(', ')}). Download Sanctioned Layout Blueprint & Book Free AC Cab Site Visit!`
    : `【Direct Developer Booking — 0% Brokerage】⭐ ${item.project} at ${item.location}. ${item.type}. Configurations: ${item.plotSize || 'Expansive Carpet Areas'}. Approved Bank Loans (${item.bankLoans.join(', ')}). Download 2026 Floor Plans PDF & Schedule VIP Site Visit with Free Cab Pickup!`;

  const canonicalUrl = `https://skyidevelopers.in/na-plots/${item.id}`;

  return {
    title,
    description,
    keywords: isPlot
      ? [...item.keywords, 'NA bungalow plots Pune', 'PMRDA NA plots Pune', 'clear title 7/12 plots Pune']
      : [...item.keywords, `${item.project} price`, `${item.project} floor plan`, `${item.project} brochure`, 'SKYi Developers'],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: item.location.includes('Mumbai') ? 'Skyi Developers Mumbai' : 'Skyi Developers Pune',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: 'https://skyidevelopers.in/bungalow-plots.jpg',
          width: 1200,
          height: 630,
          alt: `${item.project} ${item.microLocation} Pune`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://skyidevelopers.in/bungalow-plots.jpg'],
    },
  };
}

export default async function ProgrammaticNaPlotPage({ params }: PageProps) {
  const { id } = await params;
  const item = PROGRAMMATIC_SEO_ITEMS.find((p) => p.id === id);

  if (!item) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateListing',
        '@id': `https://skyidevelopers.in/na-plots/${item.id}#listing`,
        name: item.project,
        description: `【Project Showcase & Booking】100% Clear Title 7/12 & PR Card PMRDA Sanctioned ${item.type} at ${item.location}. Size: ${item.plotSize || '2,000 SQFT Onwards'}, FSI ${item.fsiRatio || '1.4 - 1.5'}. 0% Brokerage direct booking.`,
        url: `https://skyidevelopers.in/na-plots/${item.id}`,
        datePosted: '2026-01-15T00:00:00+05:30',
        offers: {
          '@type': 'Offer',
          price: item.priceRange.includes('Crore') ? '11500000' : '9500000',
          priceCurrency: 'INR',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          url: `https://skyidevelopers.in/na-plots/${item.id}`,
          seller: {
            '@type': 'Organization',
            name: item.location.includes('Mumbai') ? 'SKYi Developers Mumbai' : 'SKYi Developers Pune',
            url: 'https://skyidevelopers.in/',
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.95',
          reviewCount: '890',
          bestRating: '5',
          worstRating: '1',
        },
        place: {
          '@type': 'Place',
          name: item.location,
          address: {
            '@type': 'PostalAddress',
            addressLocality: item.microLocation,
            addressRegion: item.location.includes('Mumbai') ? 'Mumbai, Maharashtra' : 'Pune, Maharashtra',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: item.geocoordinates.latitude,
            longitude: item.geocoordinates.longitude,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://skyidevelopers.in/na-plots/${item.id}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://skyidevelopers.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'PMRDA NA Plots',
            item: 'https://skyidevelopers.in/na-plots-bhukum',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `${item.project} ${item.microLocation}`,
            item: `https://skyidevelopers.in/na-plots/${item.id}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `https://skyidevelopers.in/na-plots/${item.id}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `What is the price range and plot size for ${item.project} in ${item.microLocation}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${item.project} at ${item.location} offers plot sizes starting from ${item.plotSize || '2,000 Sq.Ft.'} with price range starting from ${item.priceRange}. Permissible construction FSI is ${item.fsiRatio || '1.4 - 1.5'}.`,
            },
          },
          {
            '@type': 'Question',
            name: `Are the plots at ${item.project} PMRDA sanctioned with individual 7/12 extract?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, all plots at ${item.project} are 100% Collector NA sanctioned under PMRDA residential zoning with separate 7/12 extract, clear PR card title, and individual sub-division demarcation.`,
            },
          },
          {
            '@type': 'Question',
            name: `Which banks provide home and land purchase loans for ${item.project}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Pre-approved land purchase and composite construction loans are offered by leading nationalized and private banks including ${item.bankLoans.join(', ')} with up to 80% funding.`,
            },
          },
          {
            '@type': 'Question',
            name: `How to schedule a free VIP site visit with AC cab pickup for ${item.project}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `You can book an exclusive developer site visit directly on skyidevelopers.in/contact or via WhatsApp at 7744009295. SKYi Developers provides complimentary private AC cab pickup and drop across Pune. 0% brokerage.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MicroLocationLanding item={item} />
    </>
  );
}
