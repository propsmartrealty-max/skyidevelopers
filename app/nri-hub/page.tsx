import type { Metadata } from 'next';
import NRIHubContent from '../../components/NRIHubContent';

export const metadata: Metadata = {
  title: '🌍 Global NRI Real Estate Hub Pune | FEMA & RBI Compliant SKYi Investments | High ROI',
  description: '⭐ SKYi Developers Global NRI Advisory Hub. 100% FEMA/RBI compliant property purchase in Pune (USA, UAE, UK, Singapore, Australia, Canada). NRE/NRO banking, digital escrow, verified MahaRERA titles, high rental yields. Connect with VIP NRI Desk!',
  keywords: [
    'NRI real estate investment Pune', 'NRI property purchase India guide', 'Skyi Songbirds NRI booking',
    'SKYi Manas Lake plots NRI', 'SKYi Tigers Nest Bhugaon NRI', 'FEMA guidelines property purchase NRI',
    'buy flat in Pune from USA', 'buy flat in Pune from Dubai UAE', 'buy flat in Pune from Singapore',
    'buy flat in Pune from UK', 'NRE NRO account property buying India', 'PMRDA clear title NA plots NRI Pune',
    'SKYi Developers global NRI desk', 'NRI real estate taxation India DTAA', 'repatriation of sale proceeds India property'
  ],
  alternates: {
    canonical: 'https://skyidevelopers.in/nri-hub',
    languages: {
      'en-IN': 'https://skyidevelopers.in/nri-hub',
      'en-US': 'https://skyidevelopers.in/nri-hub',
      'en-GB': 'https://skyidevelopers.in/nri-hub',
      'en-AE': 'https://skyidevelopers.in/nri-hub',
      'en-SG': 'https://skyidevelopers.in/nri-hub',
      'en-AU': 'https://skyidevelopers.in/nri-hub',
      'en-CA': 'https://skyidevelopers.in/nri-hub',
      'x-default': 'https://skyidevelopers.in/nri-hub',
    },
  },
  openGraph: {
    title: '🌍 Global NRI Property Investment in Pune | SKYi Developers NRI Desk',
    description: 'Comprehensive guide for overseas investors: FEMA compliance, NRE/NRO banking, digital escrow, 3D tours, and high-yield residential townships in Pune.',
    url: 'https://skyidevelopers.in/nri-hub',
    siteName: 'Skyi Developers',
    images: [{ url: 'https://skyidevelopers.in/songbirds-1.webp', width: 1200, height: 630, alt: 'SKYi Songbirds NRI Real Estate Pune' }],
  },
};

const nriSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://skyidevelopers.in/nri-hub#webpage",
      "url": "https://skyidevelopers.in/nri-hub",
      "name": "Global NRI Real Estate Investment Portal Pune — SKYi Developers",
      "description": "FEMA/RBI compliant real estate acquisition guide, NRE/NRO funding, tax advisory, and virtual booking for Non-Resident Indians investing in Pune property.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skyidevelopers.in/" },
          { "@type": "ListItem", "position": 2, "name": "Global NRI Hub", "item": "https://skyidevelopers.in/nri-hub" }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://skyidevelopers.in/nri-hub#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can Non-Resident Indians (NRIs) and OCIs legally buy property in Pune through SKYi Developers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under the Foreign Exchange Management Act (FEMA) and Reserve Bank of India (RBI) general permissions, NRIs and Overseas Citizens of India (OCIs) can freely purchase residential apartments and PMRDA-sanctioned NA plots in Pune without needing prior RBI approval."
          }
        },
        {
          "@type": "Question",
          "name": "How do NRIs remit funds for property booking in SKYi developments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Payments can be made via normal banking channels through inward remittances from abroad into an NRE (Non-Resident External), NRO (Non-Resident Ordinary), or FCNR (Foreign Currency Non-Resident) bank account maintained with authorized dealers in India."
          }
        },
        {
          "@type": "Question",
          "name": "Are sale proceeds and rental income fully repatriable for NRIs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If purchased using NRE/FCNR funds, the principal investment and capital appreciation from up to two residential properties can be fully repatriated abroad under RBI guidelines, subject to applicable tax certificates (Form 15CA/15CB)."
          }
        },
        {
          "@type": "Question",
          "name": "Can NRIs get home loans for SKYi properties in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, leading banks including SBI, HDFC Bank, and ICICI Bank offer NRI home loans up to 80-85% of property value with competitive interest rates and flexible tenures of up to 20 years."
          }
        }
      ]
    }
  ]
};

export default function NRIHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nriSchema) }}
      />
      <NRIHubContent />
    </>
  );
}
