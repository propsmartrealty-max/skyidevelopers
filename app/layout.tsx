import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#070b1f',
};

export const metadata: Metadata = {
  title: 'Skyi Developers Pune | Official Projects | Songbirds, Manas Lake, NA Plots, Tigers Nest, Park Baner',
  description: 'Skyi Developers — Pune\'s premier real estate builder since 2004. Official portfolio includes Skyi Songbirds (Bhugaon), SKYi Manas Lake & PMRDA NA Bungalow Plots (Bhukum/Bavdhan), SKYi Tigers Nest, SKYi PWC Towers, SKYi Park (Baner), SKYi Iris, SKYi Aura Heights, Skyi Star City (Dhayari). RERA & IGBC Platinum certified. ☎ +91 20 6614 3000.',
  keywords: [
    'Skyi Developers', 'SKYi Developers', 'Skyi Developer Pune', 'Skyi real estate Pune', 'Skyi properties Pune', 'Skyi builders Pune',
    'Skyi Songbirds', 'Skyi Songbirds Bhugaon', 'Songbirds Bhugaon Pune', 'SKYi Tigers Nest', 'SKYi PWC Towers', 'SKYi PWC Towers Hillside',
    'Manas Lake Pune', 'SKYi Manas Lake', 'Manas Lake Bavdhan', 'Manas Lake Bhukum', 'Manas Lake Paud Road', 'SKYi Manas Lake NA Plots',
    'SKYi Park Baner', 'SKYi Iris Baner', 'SKYi Aura Heights', 'SKYi Five Baner', 'SKYi Five Racecourse', 'SKYi Five Maidan',
    'SKYi Star City Dhayari', 'SKYi Nilay', 'SKYi Aquila', 'SKYi Seher Towers',
    'NA bungalow plots Pune', 'PMRDA NA plots Pune', 'clear title 7/12 NA plots Pune', 'NA plots Bhukum', 'NA plots Bavdhan', 'NA plots Manas Lake', 'NA plots Bhugaon', 'NA plots Chandani Chowk',
    'NA plots Kothrud', 'NA plots Baner', 'NA plots Paud Road', 'NA plots Mulshi', 'NA plots Pirangut', 'NA plots Sus', 'NA plots Hinjewadi', 'NA plots Kasarsai', 'NA plots Talegaon', 'NA plots Khadakwasla', 'NA plots Wagholi', 'NA plots Saswad', 'NA plots Lavasa Road',
    'PMRDA approved NA plots Pune', 'clear title NA plots Pune', 'villa plots Paud Road Pune', 'NRI real estate investment Pune', 'NA plots 2000 sqft Pune', 'NA plots 95 lakhs Pune',
    'buy 1 BHK flat Pune', 'buy 2 BHK flat Pune', 'buy 3 BHK flat Pune', 'buy 4 BHK flat Pune', 'buy NA plot in Pune', 'flat for sale in Kothrud', 'flats for sale in Bavdhan', 'flats for sale in Bhugaon',
    'flats near Hinjewadi IT Park', 'ready possession flats Pune', 'under construction projects Paud Road', 'lakeside apartments Pune', 'top real estate developers Pune', 'best builders in Pune',
    'pune madhe plot', 'pune NA plot sale', 'bhugaon bungalow plot', 'ghar bandhnya sathi plot pune', 'swatacha bungalow pune plot'
  ],
  authors: [{ name: 'Skyi Developers' }],
  publisher: 'Skyi Developers',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  metadataBase: new URL('https://skyidevelopers.in'),
  alternates: {
    canonical: 'https://skyidevelopers.in/',
    types: {
      'application/rss+xml': 'https://skyidevelopers.in/feed.xml',
    },
    languages: {
      'en-IN': 'https://skyidevelopers.in/',
      'en': 'https://skyidevelopers.in/',
      'x-default': 'https://skyidevelopers.in/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://skyidevelopers.in/',
    title: 'Skyi Developers Pune | Luxury Residences & PMRDA NA Bungalow Plots',
    description: 'Explore 23+ delivered projects, 7000+ homes, IGBC Platinum certified townships in Pune.',
    siteName: 'Skyi Developers',
    images: [
      {
        url: '/songbirds-1.webp',
        width: 1200,
        height: 630,
        alt: 'Skyi Songbirds Bhugaon Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skyi Developers Pune | Luxury Flats & NA Plots',
    description: 'IGBC Platinum & RERA Certified Township Developer in Pune.',
    images: ['/songbirds-1.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://skyidevelopers.in/#organization",
      "name": "Skyi Developers",
      "alternateName": ["SKYi Developers", "Skyi Developer Pune", "SKYi Properties", "SKYi Real Estate"],
      "url": "https://skyidevelopers.in/",
      "logo": "https://skyidevelopers.in/favicon.svg",
      "telephone": "+91-20-66143000",
      "email": "info@skyidevelopers.com",
      "foundingDate": "2004",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Skymark One, Balewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411045",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1480",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "RealEstateAgent",
      "@id": "https://skyidevelopers.in/#agent",
      "name": "Skyi Developers Pune",
      "image": "https://skyidevelopers.in/songbirds-1.webp",
      "telephone": "+91-20-66143000",
      "priceRange": "₹45 Lakhs - ₹2.5 Crores",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Skymark One, Balewadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411045",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1480",
        "bestRating": "5"
      }
    },
    {
      "@type": "OfferCatalog",
      "name": "SKYi Developers Pune — Master Real Estate Portfolio",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstateListing",
            "name": "SKYi Tigers Nest Luxury Hillside Residences Bhugaon",
            "identifier": "MahaRERA: P52100000769",
            "price": "17900000",
            "priceCurrency": "INR",
            "address": { "@type": "PostalAddress", "addressLocality": "Bhugaon Hillside, Paud Road", "addressRegion": "Pune", "addressCountry": "IN" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstateListing",
            "name": "SKYi Five Racecourse Ultra-Luxury Sky Mansions Sopan Baug",
            "identifier": "MahaRERA Registered",
            "price": "38500000",
            "priceCurrency": "INR",
            "address": { "@type": "PostalAddress", "addressLocality": "Sopan Baug / Racecourse", "addressRegion": "Pune", "addressCountry": "IN" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstateListing",
            "name": "SKYi Five Maidan 4 BHK Luxury Residences Baner",
            "identifier": "MahaRERA Registered",
            "price": "24500000",
            "priceCurrency": "INR",
            "address": { "@type": "PostalAddress", "addressLocality": "Pancard Club Road, Baner", "addressRegion": "Pune", "addressCountry": "IN" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstateListing",
            "name": "Skyi Songbirds 45-Acre Eco-Township Bhugaon",
            "identifier": "MahaRERA: P52100000769, P52100001117, P52100019348, P52100047992",
            "price": "6800000",
            "priceCurrency": "INR",
            "address": { "@type": "PostalAddress", "addressLocality": "Bhugaon, Paud Road", "addressRegion": "Pune", "addressCountry": "IN" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstateListing",
            "name": "SKYi Manas Lake 90-Acre Eco-Township Bhukum Bavdhan",
            "identifier": "MahaRERA: P52100000513, P52100000514, P52100026954, P52100052033",
            "price": "6500000",
            "priceCurrency": "INR",
            "address": { "@type": "PostalAddress", "addressLocality": "Bhukum, Paud Road", "addressRegion": "Pune", "addressCountry": "IN" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstateListing",
            "name": "SKYi PWC Towers & Hillside Club Residences Bhugaon",
            "identifier": "MahaRERA: P52100000643, P52100000805",
            "price": "11500000",
            "priceCurrency": "INR",
            "address": { "@type": "PostalAddress", "addressLocality": "Songbirds Campus, Bhugaon", "addressRegion": "Pune", "addressCountry": "IN" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstateListing",
            "name": "SKYi Aura Heights Hillside View Residences Bhugaon",
            "identifier": "MahaRERA: P52100000769 (Extension)",
            "price": "9500000",
            "priceCurrency": "INR",
            "address": { "@type": "PostalAddress", "addressLocality": "Bhugaon, Paud Road", "addressRegion": "Pune", "addressCountry": "IN" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "RealEstateListing",
            "name": "SKYi Star City 20-Acre Township Dhayari",
            "identifier": "MahaRERA: P52100026727, P52100029481, P52100029474, P52100034274, P52100050099",
            "price": "4200000",
            "priceCurrency": "INR",
            "address": { "@type": "PostalAddress", "addressLocality": "Dhayari, Sinhagad Road", "addressRegion": "Pune", "addressCountry": "IN" }
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://skyidevelopers.in/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skyidevelopers.in/" },
        { "@type": "ListItem", "position": 2, "name": "SKYi Projects Pune", "item": "https://skyidevelopers.in/projects" },
        { "@type": "ListItem", "position": 3, "name": "Skyi Songbirds Bhugaon", "item": "https://skyidevelopers.in/songbirds" },
        { "@type": "ListItem", "position": 4, "name": "SKYi Manas Lake Bhukum", "item": "https://skyidevelopers.in/manas-lake" },
        { "@type": "ListItem", "position": 5, "name": "SKYi Bhugaon", "item": "https://skyidevelopers.in/bhugaon" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://skyidevelopers.in/#website",
      "url": "https://skyidevelopers.in/",
      "name": "Skyi Developers Pune",
      "description": "Official Website of SKYi Developers (Enerrgia SKYi Developers) — Premium Eco-Townships & Luxury Residences in Pune",
      "publisher": { "@id": "https://skyidevelopers.in/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://skyidevelopers.in/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://skyidevelopers.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is SKYi Developers (Enerrgia SKYi Developers) in Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SKYi Developers (also recognized as Enerrgia SKYi Developers) is a leading real estate developer in Pune established in 2004. Over two decades, SKYi has delivered 7,000+ homes across 20+ landmark developments, recognized with IGBC Platinum certifications and 150+ industry awards."
          }
        },
        {
          "@type": "Question",
          "name": "Are Skyi Developers projects registered with MahaRERA?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all residential townships by Skyi Developers are registered under Maharashtra Real Estate Regulatory Authority (MahaRERA). Registration details include Skyi Songbirds (P52100000769, P52100001117, P52100019348, P52100047992), SKYi Manas Lake (P52100000513, P52100000514, P52100026954, P52100052033), SKYi Star City (P52100026727, P52100029481, P52100029474, P52100034274, P52100050099), and SKYi Iris Baner (P52100019348). Official documents are verifiable on maharera.maharashtra.gov.in."
          }
        },
        {
          "@type": "Question",
          "name": "What projects are offered by SKYi Developers in Bhugaon and Paud Road?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Bhugaon and along the Paud Road corridor, SKYi offers: Skyi Songbirds (45-acre eco-township with 1, 2, 3 & 4 BHK homes), SKYi Tigers Nest (3 & 4 BHK hillside luxury homes starting ₹1.79 Cr*), SKYi PWC Towers & PWC Towers Hillside (club residences with Poona Western Club access), SKYi Aura Heights, and SKYi Iris Riverside."
          }
        },
        {
          "@type": "Question",
          "name": "What is the location advantage of Skyi Songbirds Bhugaon & SKYi Manas Lake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Skyi Songbirds and SKYi Manas Lake are strategically located just 6 to 10 minutes from Chandani Chowk and Kothrud along the 6-lane Paud Road expressway, providing seamless access to Hinjewadi IT Park and Pune-Bangalore Highway."
          }
        },
        {
          "@type": "Question",
          "name": "What amenities are included in SKYi IGBC Platinum Certified Townships?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SKYi Townships offer 70%+ open green space, 100% sewage treatment water recycling, solar electricity grids, 24/7 security, 5-acre Poona Western Club, Olympic-standard swimming pool, sports academies, and lakeside promenades."
          }
        },
        {
          "@type": "Question",
          "name": "Can NRIs buy property in Pune through SKYi Developers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) holding valid Indian passports can legally purchase residential properties, apartments, and PMRDA-approved NA bungalow plots under RBI and FEMA general permission using NRE/NRO banking channels."
          }
        }
      ]
    },
    {
      "@type": "Place",
      "@id": "https://skyidevelopers.in/#location-bhugaon",
      "name": "Skyi Songbirds & SKYi Tigers Nest Bhugaon",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.4988",
        "longitude": "73.7431"
      }
    },
    {
      "@type": "Place",
      "@id": "https://skyidevelopers.in/#location-bhukum",
      "name": "SKYi Manas Lake & NA Bungalow Plots Bhukum",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5100",
        "longitude": "73.7500"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preload" href="/songbirds-1.webp" as="image" type="image/webp" />
        <link rel="preload" href="/bungalow-plots.jpg" as="image" type="image/jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
