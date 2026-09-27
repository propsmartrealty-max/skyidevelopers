import { PROGRAMMATIC_SEO_ITEMS } from '../../utils/programmaticSeo';

export async function GET() {
  const baseUrl = 'https://skyidevelopers.in';

  const canonicalItems = [
    {
      title: 'SKYi Developers Pune | Official Portfolio & Eco-Townships',
      link: `${baseUrl}/`,
      description: 'Official portfolio of SKYi Developers in Pune: Skyi Songbirds (Bhugaon), SKYi Manas Lake (Bhukum), SKYi Tigers Nest, SKYi Five Racecourse, and PMRDA NA bungalow plots.',
    },
    {
      title: 'Skyi Songbirds Bhugaon | 45-Acre IGBC Platinum Eco-Township',
      link: `${baseUrl}/songbirds`,
      description: 'Skyi Songbirds: 1, 2, 3 & 4 BHK hillside residences along Paud Road, 6 mins from Chandani Chowk and Kothrud. 5-acre sports club and Olympic pool.',
    },
    {
      title: 'SKYi Manas Lake Bhukum | 90-Acre Lakeside Township & NA Plots',
      link: `${baseUrl}/manas-lake`,
      description: 'SKYi Manas Lake: Lakefront luxury apartments and PMRDA-sanctioned clear title NA bungalow plots connecting Bavdhan and Kothrud.',
    },
    {
      title: 'SKYi Bhugaon Real Estate Growth Corridor | Paud Road Pune',
      link: `${baseUrl}/bhugaon`,
      description: 'Comprehensive property guide for Bhugaon: infrastructure investments, 6-lane expressway, metro connectivity, and hillside luxury living.',
    },
    {
      title: 'Global NRI Real Estate Investment Portal Pune | SKYi Developers',
      link: `${baseUrl}/nri-hub`,
      description: 'FEMA & RBI compliant acquisition guide, NRE/NRO banking, digital escrow, 3D virtual tours, and dedicated NRI VIP concierge desk.',
    },
    {
      title: 'All Projects & Completed Landmarks | SKYi Developers Pune',
      link: `${baseUrl}/projects`,
      description: 'Complete directory of ongoing and delivered developments across Bhugaon, Bhukum, Baner, Bavdhan, Sopan Baug, Dhayari, and Aundh.',
    },
    {
      title: 'PMRDA NA Bungalow Plots Bhukum Paud Road Pune | SKYi Manas Lake',
      link: `${baseUrl}/na-plots-bhukum`,
      description: '100% clear title 7/12 PMRDA approved residential NA bungalow plots with FSI 1.5 and 90% pre-approved bank loans.',
    },
  ];

  const canonicalXml = canonicalItems.map((item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  `).join('');

  const programmaticXml = PROGRAMMATIC_SEO_ITEMS.map((item) => `
    <item>
      <title><![CDATA[${item.project} ${item.microLocation} Pune | PMRDA NA Plots]]></title>
      <link>${baseUrl}/na-plots/${item.id}</link>
      <guid isPermaLink="true">${baseUrl}/na-plots/${item.id}</guid>
      <description><![CDATA[PMRDA Sanctioned 100% Clear Title 7/12 ${item.type} at ${item.location}. Size: ${item.plotSize || '2,000 SQFT Onwards'}. Price: ${item.priceRange}. Bank Loans: ${item.bankLoans.join(', ')}.]]></description>
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  `).join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
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
