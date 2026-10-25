import { PROGRAMMATIC_SEO_ITEMS } from '../../utils/programmaticSeo';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://skyidevelopers.in';

  const canonicalItems = [
    {
      title: '【Official】SKYi Developers Pune™ | Songbirds & NA Plots From ₹38L* | 0% Brokerage',
      link: `${baseUrl}/`,
      description: 'Official developer portal of SKYi Developers in Pune: Skyi Songbirds (1-4 BHK from ₹38L*), SKYi Manas Lake (PMRDA NA Plots from ₹95L*), SKYi Tigers Nest, and Poona Western Club.',
      image: `${baseUrl}/og-image.jpg`,
    },
    {
      title: '⭐ Skyi Songbirds Bhugaon™ | New Launch 1 BHK (430 Sq.Ft.) & 3, 4 BHK Luxury Homes',
      link: `${baseUrl}/songbirds`,
      description: 'Skyi Songbirds: 1, 2, 3 & 4 BHK hillside residences along Paud Road, 6 mins from Chandani Chowk and Kothrud. 5-acre sports club and Olympic pool. Starting ₹38L*.',
      image: `${baseUrl}/songbirds-1.webp`,
    },
    {
      title: '【Official】SKYi Manas Lake™ | 90-Acre Lakeside Township & PMRDA NA Plots',
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
      title: '🌍 Global NRI Real Estate Investment Portal Pune | SKYi Developers Official Desk',
      link: `${baseUrl}/nri-hub`,
      description: 'FEMA & RBI compliant acquisition guide, NRE/NRO banking, digital escrow, 3D virtual tours, and dedicated NRI VIP concierge desk.',
      image: `${baseUrl}/songbirds-1.webp`,
    },
    {
      title: '🏡 All Projects & Completed Landmarks | SKYi Developers Pune Master Portfolio',
      link: `${baseUrl}/projects`,
      description: 'Complete directory of ongoing and delivered developments across Bhugaon, Bhukum, Baner, Bavdhan, Sopan Baug, Dhayari, and Aundh.',
      image: `${baseUrl}/og-image.jpg`,
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
    <description>Official real-time RSS feed for SKYi Developers eco-townships, luxury residences, and PMRDA approved NA bungalow plots across Pune.</description>
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
