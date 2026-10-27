import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SKYI_ALL_ECOSYSTEM_KEYWORDS } from '../utils/skyiDeepDataEngine';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#070b1f',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: {
    default: '⭐ SKYi Developers Pune™ | 1-4 BHK & NA Plots From ₹38L* | 2026 Floor Plans & Price List',
    template: '%s | SKYi Developers™',
  },
  description: '【Direct Developer Booking — 0% Brokerage】⭐ Explore SKYi Developers Pune: Skyi Songbirds (New Launch 1 BHK from ₹38L*), SKYi Manas Lake (PMRDA NA Plots from ₹95L*), Tigers Nest, Five Racecourse Sopan Baug, Five Aguada Bandra Mumbai. MahaRERA Approved. Download 2026 Floor Plans PDF & Book Free AC Cab Site Visit!',
  keywords: SKYI_ALL_ECOSYSTEM_KEYWORDS,
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
      'en-US': 'https://skyidevelopers.in/',
      'en-GB': 'https://skyidevelopers.in/',
      'en-AE': 'https://skyidevelopers.in/',
      'en-SG': 'https://skyidevelopers.in/',
      'en-AU': 'https://skyidevelopers.in/',
      'en-CA': 'https://skyidevelopers.in/',
      'en-NZ': 'https://skyidevelopers.in/',
      'en-QA': 'https://skyidevelopers.in/',
      'en-SA': 'https://skyidevelopers.in/',
      'en-OM': 'https://skyidevelopers.in/',
      'en-DE': 'https://skyidevelopers.in/',
      'en': 'https://skyidevelopers.in/',
      'x-default': 'https://skyidevelopers.in/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://skyidevelopers.in/',
    title: 'SKYi Developers | Eco-Townships & Ultra-Luxury Residences | 0% Brokerage',
    description: '⭐ Featured Project Showcase. 20+ Years, 7,000+ Families, 7M+ Sq.Ft. delivered. Explore Songbirds, Manas Lake, Five Racecourse, Five Aguada Bandra, Five Maidan, and Tiger’s Nest. Zero brokerage direct developer booking.',
    siteName: 'Skyi Developers',
    locale: 'en_IN',
    alternateLocale: ['en_US', 'en_GB', 'en_AE', 'en_SG', 'en_AU', 'en_CA'],
    images: [
      {
        url: 'https://skyidevelopers.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Skyi Developers Pune — Master Portfolio & Eco-Townships',
      },
      {
        url: 'https://skyidevelopers.in/images/projects/skyi-songbirds.webp',
        width: 1200,
        height: 630,
        alt: 'Skyi Songbirds Bhugaon Pune Eco-Township',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKYi Developers | Eco-Townships & Ultra-Luxury Residences',
    description: '⭐ Direct Developer Booking (0% Brokerage). 1, 2, 3, 4 BHK & Ultra-Luxury Residences from ₹38L*. Download Floor Plans PDF & Schedule Site Tour!',
    images: ['https://skyidevelopers.in/og-image.jpg'],
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
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  verification: {
    google: 'google-site-verification=skyidevelopers-pune-portal',
  },
  category: 'real estate',
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Pune',
    'geo.position': '18.4988;73.7431',
    'ICBM': '18.4988, 73.7431',
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://skyidevelopers.in/#organization",
      "name": "Skyi Developers",
      "alternateName": ["SKYi Developers", "Skyi Developer Pune", "SKYi Properties", "SKYi Real Estate", "Enerrgia SKYi Developers"],
      "url": "https://skyidevelopers.in/",
      "logo": "https://skyidevelopers.in/favicon.svg",
      "foundingDate": "2004",
      "sameAs": [
        "https://facebook.com/skyidevelopers",
        "https://instagram.com/skyi_developers",
        "https://youtube.com/@skyidevelopers",
        "https://www.linkedin.com/company/skyi-developers"
      ],
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Singapore" },
        { "@type": "Country", "name": "Australia" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "Germany" },
        { "@type": "Country", "name": "Qatar" },
        { "@type": "Country", "name": "Saudi Arabia" },
        { "@type": "Country", "name": "Oman" }
      ],
      "knowsAbout": [
        "Pune Real Estate",
        "Sustainable Eco-Townships",
        "IGBC Platinum Green Certification",
        "MahaRERA Regulatory Compliance",
        "PMRDA Sanctioned Layouts",
        "NRI Real Estate Investment India",
        "FEMA & RBI NRI Property Acquisition Guidelines",
        "Luxury Hillside Residences Pune"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "VIP Sales Desk",
          "url": "https://skyidevelopers.in/#contact",
          "areaServed": ["IN", "US", "AE", "GB", "SG", "AU", "CA"],
          "availableLanguage": ["English", "Hindi", "Marathi"]
        }
      ],
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
      "url": "https://skyidevelopers.in/",
      "priceRange": "₹42 Lakhs - ₹7.50 Crores",
      "areaServed": ["Pune", "Maharashtra", "India", "Global NRI Clients"],
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
            "name": "SKYi Five Aguada 4, 5 & 6 BHK Sea-Facing Mansions Bandstand Bandra Mumbai",
            "identifier": "MahaRERA: Sanctioned Bandra Coastal Listing",
            "price": "120000000",
            "priceCurrency": "INR",
            "address": { "@type": "PostalAddress", "streetAddress": "Bandstand", "addressLocality": "Bandra West, Mumbai", "addressRegion": "Maharashtra", "addressCountry": "IN" }
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
            "name": "SKYi Iris Riverside 3 BHK Waterfront Residences Bavdhan",
            "identifier": "MahaRERA: P52100019348",
            "price": "10500000",
            "priceCurrency": "INR",
            "address": { "@type": "PostalAddress", "addressLocality": "Bavdhan, Pune", "addressRegion": "Maharashtra", "addressCountry": "IN" }
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
            "name": "Skyi Songbirds New Tower Launch: Aria Heights 1 BHK (430 Sq.Ft. Smart Eco-Home)",
            "identifier": "MahaRERA: P52100028121 (Aria Heights Phase I) / P52100000769",
            "price": "3800000",
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
            "name": "SKYi Manas Lake PMRDA NA Bungalow Plots (Waterfront Sector)",
            "identifier": "PMRDA Sanctioned Collector NA Layout / Clear 7/12",
            "price": "9500000",
            "priceCurrency": "INR",
            "address": { "@type": "PostalAddress", "addressLocality": "Manas Lake Waterfront, Bhukum, Paud Road", "addressRegion": "Pune", "addressCountry": "IN" }
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
      "description": "Showcase of SKYi Developers (Enerrgia SKYi Developers) — Premium Eco-Townships & Luxury Residences in Pune",
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
            "text": "Yes, all residential townships by Skyi Developers are registered under Maharashtra Real Estate Regulatory Authority (MahaRERA). Registration details include Skyi Aria Heights (P52100028121), Skyi Songbirds (P52100000769, P52100001117, P52100019348, P52100047992), SKYi Manas Lake (P52100000513, P52100000514, P52100026954, P52100052033), SKYi Star City (P52100026727, P52100029481, P52100029474, P52100034274, P52100050099), and SKYi Iris Baner (P52100019348). Project documents are verifiable on maharera.maharashtra.gov.in."
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
          "name": "What are the specifications of the new launch 1 BHK (430 Sq.Ft.) at Skyi Songbirds Bhugaon?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Skyi Songbirds in Bhugaon features an exclusive new launch of 1 BHK smart eco-homes with 430 Sq.Ft. usable RERA carpet area starting at ₹38 Lakhs*. Built with zero-dead-space architecture, private scenic decks facing the 7,000-acre NDA forest reserve, and direct access to the 5-acre Poona Western Club."
          }
        },
        {
          "@type": "Question",
          "name": "Is PMRDA NA bungalow plotting available at SKYi Manas Lake in Bhukum Pune?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SKYi Manas Lake offers PMRDA-sanctioned clear title residential NA bungalow plots directly on the waterfront. Sizes range from 2,000 to 5,000+ Sq.Ft. with FSI 1.5 (Ground + 2 floors permissible), separate 7/12 extract per plot, underground electricity and water infrastructure, starting from ₹95 Lakhs*."
          }
        },
        {
          "@type": "Question",
          "name": "Can NRIs buy property in Pune through SKYi Developers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) holding valid Indian passports can legally purchase residential properties, apartments, and PMRDA-approved NA bungalow plots under RBI and FEMA general permission using NRE/NRO banking channels."
          }
        },
        {
          "@type": "Question",
          "name": "How can I book flats or PMRDA NA plots directly with SKYi Developers without paying brokerage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Booking directly through skyidevelopers.in connects you directly with the priority SKYi sales desk, ensuring 0% brokerage, exclusive direct-developer pricing benefits, guaranteed inventory allocation, and verified MahaRERA registered documentation without third-party agency markups."
          }
        },
        {
          "@type": "Question",
          "name": "How to schedule a complimentary VIP site visit with private AC cab pickup?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can schedule a guided VIP site visit directly on skyidevelopers.in/contact or click 'Book Site Visit' on the homepage. SKYi Developers provides complimentary private AC cab pickup and drop from any location across Pune, Kothrud, Baner, Hinjawadi, and Pune Airport."
          }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://skyidevelopers.in/#site-navigation",
      "name": "SKYi Developers Sitelinks & Portals",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Skyi Songbirds Bhugaon (1 to 4 BHK)",
          "description": "45-Acre Eco-Township, smart 1 BHK from ₹38L* and 3-4 BHK hillside homes next to NDA forest.",
          "url": "https://skyidevelopers.in/songbirds"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "SKYi Manas Lake PMRDA NA Plots",
          "description": "90-Acre lakefront township with clear title 7/12 PMRDA approved bungalow plots from ₹95L*.",
          "url": "https://skyidevelopers.in/na-plots-bhukum"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "All Delivered & Ongoing Projects",
          "description": "Master portfolio: Baner, Bavdhan, Bhugaon, Bhukum, Dhayari, Sopan Baug.",
          "url": "https://skyidevelopers.in/projects"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "NA Plot Valuation Calculator",
          "description": "Instant valuation, FSI 1.5 construction area estimator, and bank loan EMI calculator.",
          "url": "https://skyidevelopers.in/plot-estimator"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "360° Drone Virtual Tours",
          "description": "Interactive aerial sightseeing, campus walkthroughs, and Sahyadri hillside panoramas.",
          "url": "https://skyidevelopers.in/virtual-tour"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Global NRI Real Estate Hub",
          "description": "FEMA/RBI compliant acquisition, NRE/NRO banking, virtual tours, and VIP NRI concierge.",
          "url": "https://skyidevelopers.in/nri-hub"
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
    },
    {
      "@type": "Product",
      "@id": "https://skyidevelopers.in/#product-songbirds",
      "name": "Skyi Songbirds Bhugaon | 1, 2, 3 & 4 BHK Eco-Township Residences",
      "image": [
        "https://skyidevelopers.in/songbirds-1.webp",
        "https://skyidevelopers.in/songbirds-2.webp",
        "https://skyidevelopers.in/songbirds-3.webp"
      ],
      "description": "IGBC Platinum certified 45-acre master eco-township in Bhugaon along Paud Road, Pune. Features hillside luxury apartments, 70% open green landscapes, and direct access to the 5-acre Poona Western Club.",
      "brand": {
        "@type": "Brand",
        "name": "SKYi Developers"
      },
      "sku": "SKYI-SONGBIRDS-BHUGAON",
      "mpn": "P52100000769",
      "category": "Real Estate > Residential Townships > Apartments",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "3800000",
        "highPrice": "17900000",
        "priceCurrency": "INR",
        "offerCount": "450",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "url": "https://skyidevelopers.in/songbirds",
        "seller": {
          "@id": "https://skyidevelopers.in/#organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1840",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Vikram Deshmukh" },
          "datePublished": "2026-03-15",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Skyi Songbirds is hands down the best eco-township on Paud Road. The 5-acre Poona Western Club, 70% green cover, and 6-minute drive to Chandani Chowk made it an effortless choice for our family."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ananya Joshi" },
          "datePublished": "2026-05-22",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Purchased a 3 BHK hillside home in Songbirds. Incredible panoramic views of the NDA hills, zero dead space floor plan, and 100% IGBC green compliance."
        }
      ]
    },
    {
      "@type": "Product",
      "@id": "https://skyidevelopers.in/#product-manas-lake",
      "name": "SKYi Manas Lake Bhukum | 90-Acre Lakeside Township & PMRDA NA Plots",
      "image": [
        "https://skyidevelopers.in/bungalow-plots.jpg",
        "https://skyidevelopers.in/songbirds-2.webp"
      ],
      "description": "90-acre lakefront residential ecosystem in Bhukum, Pune offering premium 2 & 3 BHK homes and PMRDA-sanctioned clear title NA bungalow plots with separate 7/12 extract.",
      "brand": {
        "@type": "Brand",
        "name": "SKYi Developers"
      },
      "sku": "SKYI-MANAS-LAKE-BHUKUM",
      "mpn": "P52100000513",
      "category": "Real Estate > Lakeside Townships > Bungalow Plots & Residences",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "6500000",
        "highPrice": "25000000",
        "priceCurrency": "INR",
        "offerCount": "280",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "url": "https://skyidevelopers.in/manas-lake",
        "seller": {
          "@id": "https://skyidevelopers.in/#organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1260",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rajesh Khurana" },
          "datePublished": "2026-04-18",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Clear title PMRDA NA bungalow plots with separate 7/12 extracts right next to Manas Lake. The infrastructure and scenic lake views make it unmatched in West Pune."
        }
      ]
    },
    {
      "@type": "Product",
      "@id": "https://skyidevelopers.in/#product-na-plots-bhukum",
      "name": "PMRDA NA Bungalow Plots Bhukum Paud Road Pune | SKYi Manas Lake",
      "image": [
        "https://skyidevelopers.in/bungalow-plots.jpg"
      ],
      "description": "PMRDA Sanctioned Collector NA Layout residential bungalow plots from 2,000 to 5,000+ sq.ft. with FSI 1.5, individual 7/12 land titles, underground water and electricity lines, and 90% pre-approved bank loans.",
      "brand": {
        "@type": "Brand",
        "name": "SKYi Developers"
      },
      "sku": "SKYI-NA-PLOTS-BHUKUM",
      "category": "Real Estate > Land > Residential NA Plots",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "9500000",
        "highPrice": "35000000",
        "priceCurrency": "INR",
        "offerCount": "120",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "url": "https://skyidevelopers.in/na-plots-bhukum",
        "seller": {
          "@id": "https://skyidevelopers.in/#organization"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.95",
        "reviewCount": "890",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "SaleEvent",
      "@id": "https://skyidevelopers.in/#event-vip-expo-2026",
      "name": "SKYi Developers VIP Township Preview & Direct Developer Site Visit Expo 2026",
      "description": "Exclusive developer-assisted site tour and launch pricing event for Skyi Songbirds (Bhugaon) and SKYi Manas Lake NA Plots (Bhukum). Complimentary private AC cab pick-up from anywhere in Pune.",
      "startDate": "2026-10-15T09:00:00+05:30",
      "endDate": "2026-11-30T19:00:00+05:30",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "Skyi Songbirds Experience Centre",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Paud Road, Bhugaon",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "412115",
          "addressCountry": "IN"
        }
      },
      "offers": {
        "@type": "Offer",
        "url": "https://skyidevelopers.in/songbirds",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-10-01"
      },
      "organizer": {
        "@id": "https://skyidevelopers.in/#organization"
      }
    },
    {
      "@type": "SaleEvent",
      "@id": "https://skyidevelopers.in/#event-na-plots-investor-meet",
      "name": "SKYi Manas Lake PMRDA NA Plots Waterfront Investor Meet 2026",
      "description": "Private investor session for clear title 7/12 PMRDA approved residential NA bungalow plots on Paud Road, Bhukum. On-spot title verification and bank loan sanction desks.",
      "startDate": "2026-10-18T10:00:00+05:30",
      "endDate": "2026-11-25T18:00:00+05:30",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": "SKYi Manas Lake Pavilion",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Manas Lake, Bhukum",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "postalCode": "412115",
          "addressCountry": "IN"
        }
      },
      "offers": {
        "@type": "Offer",
        "url": "https://skyidevelopers.in/na-plots-bhukum",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-10-01"
      },
      "organizer": {
        "@id": "https://skyidevelopers.in/#organization"
      }
    },
    {
      "@type": "ApartmentComplex",
      "@id": "https://skyidevelopers.in/#complex-songbirds",
      "name": "Skyi Songbirds Eco-Township Bhugaon",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Paud Road, Bhugaon",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "412115",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.4988",
        "longitude": "73.7431"
      },
      "numberOfAccommodationUnits": 2200,
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "5-Acre Poona Western Club", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Olympic Swimming Pool", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "IGBC Platinum Green Campus", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "70% Open Space", "value": true }
      ]
    },
    {
      "@type": "ApartmentComplex",
      "@id": "https://skyidevelopers.in/#complex-manas-lake",
      "name": "SKYi Manas Lake Eco-Township Bhukum",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Manas Lake, Bhukum, Paud Road",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "412115",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "18.5100",
        "longitude": "73.7500"
      },
      "numberOfAccommodationUnits": 1500,
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Direct Manas Lake Waterfront", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "PMRDA Sanctioned NA Plots", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Lakeside Promenade", "value": true }
      ]
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" />
        <link rel="dns-prefetch" href="https://challenges.cloudflare.com" />
        <link rel="dns-prefetch" href="https://static.cloudflareinsights.com" />
        <link rel="dns-prefetch" href="https://formsubmit.co" />
        <link rel="alternate" type="application/rss+xml" title="SKYi Developers RSS Feed" href="https://skyidevelopers.in/feed.xml" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="https://skyidevelopers.in/sitemap.xml" />
        <link rel="alternate" href="https://skyidevelopers.in/llms.txt" type="text/plain" title="LLM Context" />
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
