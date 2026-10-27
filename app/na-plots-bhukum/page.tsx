import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'PMRDA NA Plots Bhukum | SKYi Manas Lake',
  description: 'SKYi Manas Lake NA Bungalow Plots on Paud Road, Bhukum (6 Mins to Chandani Chowk). PMRDA Sanctioned, FSI 1.5, Clear 7/12 & PR Cards, 40-50ft Concrete Roads, Underground Utilities. 90% Bank Loan Approved. Download Layout Blueprint & Book Free Cab Site Visit!',
  keywords: [
    'PMRDA NA plots Bhukum',
    'NA bungalow plots Paud Road Pune',
    'SKYi Manas Lake plots',
    'plots near Chandani Chowk Kothrud',
    'clear title 7/12 plots Pune',
    'villa plots Bhukum Pune',
    'gated community plots Pune',
    'Manas Lake plots price',
  ],
  alternates: {
    canonical: 'https://skyidevelopers.in/na-plots-bhukum',
  },
  openGraph: {
    title: 'PMRDA NA Plots Bhukum | SKYi Manas Lake | SKYi Developers',
    description: 'SKYi Manas Lake NA Bungalow Plots on Paud Road, Bhukum. PMRDA Sanctioned, FSI 1.5, Clear 7/12 & PR Cards, 40-50ft Concrete Roads. 90% Bank Loan Approved. Download Blueprint!',
    url: 'https://skyidevelopers.in/na-plots-bhukum',
    siteName: 'SKYi Developers',
    images: [
      {
        url: 'https://skyidevelopers.in/bungalow-plots.jpg',
        width: 1200,
        height: 630,
        alt: 'PMRDA NA Bungalow Plots Bhukum SKYi Manas Lake Pune',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PMRDA NA Plots Bhukum | SKYi Manas Lake | SKYi Developers',
    description: 'PMRDA Sanctioned Clear Title NA Bungalow Plots with FSI 1.5. 90% Bank Loans Approved. Download Layout Plan!',
    images: ['https://skyidevelopers.in/bungalow-plots.jpg'],
  },
};

const naPlotsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      '@id': 'https://skyidevelopers.in/na-plots-bhukum#product',
      name: 'SKYi Manas Lake PMRDA NA Bungalow Plots Bhukum Pune',
      description: 'PMRDA Sanctioned Collector NA Layout residential bungalow plots from 2,000 to 5,000+ sq.ft. with FSI 1.5, individual 7/12 land titles, underground water and electricity lines, and 90% pre-approved bank loans.',
      image: ['https://skyidevelopers.in/bungalow-plots.jpg'],
      brand: { '@type': 'Brand', name: 'SKYi Developers' },
      sku: 'SKYI-NA-PLOTS-BHUKUM',
      category: 'Real Estate > Land > Residential NA Plots',
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '9500000',
        highPrice: '35000000',
        priceCurrency: 'INR',
        offerCount: '120',
        availability: 'https://schema.org/InStock',
        url: 'https://skyidevelopers.in/na-plots-bhukum',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.95',
        reviewCount: '890',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://skyidevelopers.in/na-plots-bhukum#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the plot sizes and starting prices at SKYi Manas Lake Bhukum?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plot sizes start at 2,000 Sq.Ft. up to 6,000+ Sq.Ft. with pricing starting from ₹95 Lakhs*. Bank loans up to 90% are pre-sanctioned with SBI, HDFC, and ICICI Bank.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are these NA plots approved by PMRDA with separate 7/12 extract?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, 100% of plots at SKYi Manas Lake have PMRDA Sanctioned Collector NA Layout approval, individual 7/12 extract, and individual PR cards with zero legal encumbrances.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the permissible FSI for villa construction?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'These plots feature an FSI of 1.5, allowing Ground + 2 floor custom bungalow / villa construction with complete architectural flexibility.',
          },
        },
      ],
    },
  ],
};

export default function NaPlotsBhukumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(naPlotsSchema) }}
      />
      <Home />
    </>
  );
}
