import { PROGRAMMATIC_SEO_ITEMS } from '../../utils/programmaticSeo';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://skyidevelopers.in';

  const canonicalItems = [
    {
      title: 'SKYi Developers Pune™ | Songbirds & NA Plots From ₹38L* | 0% Brokerage',
      link: `${baseUrl}/`,
      description: 'Featured showcase of SKYi Developers in Pune: Skyi Songbirds (1-4 BHK from ₹38L*), SKYi Manas Lake (PMRDA NA Plots from ₹95L*), SKYi Tigers Nest, and Poona Western Club.',
      image: `${baseUrl}/og-image.jpg`,
    },
    {
      title: '⭐ Skyi Songbirds Bhugaon™ | New Launch 1 BHK (430 Sq.Ft.) & 3, 4 BHK Luxury Homes',
      link: `${baseUrl}/songbirds`,
      description: 'Skyi Songbirds: 1, 2, 3 & 4 BHK hillside residences along Paud Road, 6 mins from Chandani Chowk and Kothrud. 5-acre sports club and Olympic pool. Starting ₹38L*.',
      image: `${baseUrl}/songbirds-1.webp`,
    },
    {
      title: '⭐ SKYi Manas Lake™ | 90-Acre Lakeside Township & PMRDA NA Plots',
      link: `${baseUrl}/manas-lake`,
      description: 'SKYi Manas Lake: Lakefront luxury apartments and PMRDA-sanctioned clear title NA bungalow plots (2,000-5,000+ SF, FSI 1.5) connecting Bavdhan and Kothrud from ₹95L*.',
      image: `${baseUrl}/bungalow-plots.jpg`,
    },
    {
      title: '【PMRDA NA Plots】SKYi Manas Lake Bhukum | 2,000+ SQFT From ₹95L* | Clear 7/12',
      link: `${baseUrl}/na-plots-bhukum`,
      description: '100% clear title 7/12 PMRDA approved residential NA bungalow plots with FSI 1.5 and 90% pre-approved bank loans.',
      image: `${baseUrl}/bungalow-plots.jpg`,
    },
    {
      title: '⭐ SKYi Bhugaon Real Estate Growth Corridor | Paud Road Pune Townships',
      link: `${baseUrl}/bhugaon`,
      description: 'Comprehensive property guide for Bhugaon: infrastructure investments, 6-lane expressway, metro connectivity, and hillside luxury living from ₹38L*.',
      image: `${baseUrl}/songbirds-1.webp`,
    },
    {
      title: '🌍 Global NRI Real Estate Investment Portal Pune | SKYi Developers NRI Desk',
      link: `${baseUrl}/nri-hub`,
      description: 'FEMA & RBI compliant acquisition guide, NRE/NRO banking, digital escrow, 3D virtual tours, and dedicated NRI VIP concierge desk.',
      image: `${baseUrl}/songbirds-1.webp`,
    },
    {
      title: '🏡 All Projects & Completed Landmarks | SKYi Developers Master Portfolio',
      link: `${baseUrl}/projects`,
      description: 'Complete directory of ongoing and delivered developments across Bhugaon, Bhukum, Baner, Bavdhan, Sopan Baug, Bandra West Mumbai, Dhayari, and Aundh.',
      image: `${baseUrl}/og-image.jpg`,
    },
    {
      title: '⭐ Five Racecourse Sopan Baug Pune | 4 & 5 BHK Sky Mansions',
      link: `${baseUrl}/five-racecourse`,
      description: 'Ultra-luxury 4 & 5 BHK single-floor and duplex sky residences overlooking the historic 120-acre Pune Racecourse and Empress Botanical Gardens.',
      image: `${baseUrl}/images/projects/skyi-five-racecourse.webp`,
    },
    {
      title: '⭐ Five Aguada Bandstand Bandra West Mumbai | Sea-Facing Homes',
      link: `${baseUrl}/five-aguada`,
      description: 'Ultra-luxury 4, 5 & 6 BHK oceanfront entire-floor mansions commanding 180° unobstructed Arabian Sea views along Bandstand, Bandra West.',
      image: `${baseUrl}/images/projects/skyi-five-racecourse.webp`,
    },
    {
      title: '⭐ Five Maidan Baner Pune | 4 BHK Tower in Sprawling Greens',
      link: `${baseUrl}/five-maidan`,
      description: 'Rare low-density 4 BHK luxury residences set within expansive landscaped green maidans and private forest walkways in Baner.',
      image: `${baseUrl}/images/projects/skyi-five-maidan.webp`,
    },
    {
      title: '⭐ Tiger’s Nest Bhugaon Pune | 4 BHK Forest Decks From ₹1.79 Cr*',
      link: `${baseUrl}/tigers-nest`,
      description: 'Secluded 4 BHK hillside residences directly facing the 7,000-acre NDA Forest Reserve in Bhugaon with heated valley-view pool.',
      image: `${baseUrl}/images/projects/skyi-tigers-nest.webp`,
    },
    {
      title: '⭐ SKYi Star City Dhayari Pune | 1 & 2 BHK Zero-Wastage Homes',
      link: `${baseUrl}/star-city`,
      description: '20-Acre integrated residential township featuring 70% open green space and zero-dead-corridor smart homes in Dhayari from ₹42L*.',
      image: `${baseUrl}/images/projects/skyi-star-city.webp`,
    },
  ];

  const canonicalXml = canonicalItems.map((item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description><![CDATA[${item.description}]]></description>
      <enclosure url="${item.image}" length="65000" type="image/webp" />
      <media:content url="${item.image}" medium="image" />
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  `).join('');

  const programmaticXml = PROGRAMMATIC_SEO_ITEMS.map((item) => `
    <item>
      <title><![CDATA[⭐ ${item.project} ${item.microLocation} Pune | PMRDA NA Plots From ${item.priceRange.split('-')[0].trim()}*]]></title>
      <link>${baseUrl}/na-plots/${item.id}</link>
      <guid isPermaLink="true">${baseUrl}/na-plots/${item.id}</guid>
      <description><![CDATA[PMRDA Sanctioned 100% Clear Title 7/12 ${item.type} at ${item.location}. Size: ${item.plotSize || '2,000 SQFT Onwards'}. Price: ${item.priceRange}. Bank Loans: ${item.bankLoans.join(', ')}. Direct Developer Booking.]]></description>
      <enclosure url="${baseUrl}/bungalow-plots.jpg" length="65000" type="image/jpeg" />
      <media:content url="${baseUrl}/bungalow-plots.jpg" medium="image" />
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  `).join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>SKYi Developers Pune | Master Real Estate &amp; Township Feed</title>
    <link>${baseUrl}</link>
    <description>Real-time updates for SKYi Developers eco-townships, luxury residences, and PMRDA approved NA bungalow plots across Pune.</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${canonicalXml}
    ${programmaticXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
