import { PROGRAMMATIC_SEO_ITEMS } from '../../utils/programmaticSeo';
import { getProjectImage } from '../../utils/dynamicImages';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://skyidevelopers.in';

  const canonicalItems = [
    {
      title: 'SKYi Developers | Eco-Townships & Luxury Residences Pune',
      link: `${baseUrl}/`,
      description: 'Featured showcase of SKYi Developers in Pune: Skyi Songbirds (1 BHK All-Inclusive Only ₹49L* & 3-4 BHK), SKYi Manas Lake (PMRDA NA Plots from ₹95L*), SKYi Tigers Nest, and Poona Western Club.',
      image: `${baseUrl}/og-image.jpg`,
    },
    {
      title: 'Skyi Songbirds Bhugaon | 1 BHK From ₹49L* | SKYi Developers',
      link: `${baseUrl}/songbirds`,
      description: 'Skyi Songbirds: New Tower Launch Aria Heights smart 1 BHK (430 Sq.Ft. Carpet) All-Inclusive Only ₹49L* plus 3 & 4 BHK hillside residences along Paud Road. 5-acre sports club and Olympic pool. MahaRERA P52100028121.',
      image: `${baseUrl}/songbirds-1.webp`,
    },
    {
      title: 'SKYi Manas Lake | PMRDA NA Plots & Flats | SKYi Developers',
      link: `${baseUrl}/manas-lake`,
      description: 'SKYi Manas Lake: Lakefront luxury apartments and PMRDA-sanctioned clear title NA bungalow plots (2,000-5,000+ SF, FSI 1.5) connecting Bavdhan and Kothrud from ₹95L*.',
      image: `${baseUrl}/bungalow-plots.jpg`,
    },
    {
      title: 'PMRDA NA Plots Bhukum | SKYi Manas Lake | SKYi Developers',
      link: `${baseUrl}/na-plots-bhukum`,
      description: '100% clear title 7/12 PMRDA approved residential NA bungalow plots with FSI 1.5 and 90% pre-approved bank loans.',
      image: `${baseUrl}/bungalow-plots.jpg`,
    },
    {
      title: 'SKYi Projects Bhugaon | 1 BHK From ₹49L* | SKYi Developers',
      link: `${baseUrl}/bhugaon`,
      description: 'Comprehensive property guide for Bhugaon: infrastructure investments, 6-lane expressway, metro connectivity, and hillside luxury living from ₹38L*.',
      image: `${baseUrl}/songbirds-1.webp`,
    },
    {
      title: 'NRI Real Estate Investment Desk Pune | SKYi Developers',
      link: `${baseUrl}/nri-hub`,
      description: 'FEMA & RBI compliant acquisition guide, NRE/NRO banking, digital escrow, 3D virtual tours, and dedicated NRI VIP concierge desk.',
      image: `${baseUrl}/songbirds-1.webp`,
    },
    {
      title: 'All Projects & Townships | Pune & Mumbai | SKYi Developers',
      link: `${baseUrl}/projects`,
      description: 'Complete directory of ongoing and delivered developments across Bhugaon, Bhukum, Baner, Bavdhan, Sopan Baug, Bandra West Mumbai, Dhayari, and Aundh.',
      image: `${baseUrl}/og-image.jpg`,
    },
    {
      title: 'Five Racecourse Sopan Baug | 4 & 5 BHK | SKYi Developers',
      link: `${baseUrl}/five-racecourse`,
      description: 'Ultra-luxury 4 & 5 BHK single-floor and duplex sky residences overlooking the historic 120-acre Pune Racecourse and Empress Botanical Gardens.',
      image: `${baseUrl}/images/projects/skyi-five-racecourse.webp`,
    },
    {
      title: 'Five Aguada Bandra West | Sea-Facing Homes | SKYi Developers',
      link: `${baseUrl}/five-aguada`,
      description: 'Ultra-luxury 4, 5 & 6 BHK oceanfront entire-floor mansions commanding 180° unobstructed Arabian Sea views along Bandstand, Bandra West.',
      image: `${baseUrl}/images/projects/skyi-five-aguada.webp`,
    },
    {
      title: 'Five Maidan Baner Pune | 4 BHK Residences | SKYi Developers',
      link: `${baseUrl}/five-maidan`,
      description: 'Rare low-density 4 BHK luxury residences set within expansive landscaped green maidans and private forest walkways in Baner.',
      image: `${baseUrl}/images/projects/skyi-five-maidan.webp`,
    },
    {
      title: 'Tigers Nest Bhugaon | 4 BHK Forest Decks | SKYi Developers',
      link: `${baseUrl}/tigers-nest`,
      description: 'Secluded 4 BHK hillside residences directly facing the 7,000-acre NDA Forest Reserve in Bhugaon with heated valley-view pool.',
      image: `${baseUrl}/images/projects/skyi-tigers-nest.webp`,
    },
    {
      title: 'SKYi Star City Dhayari | 1 & 2 BHK Homes | SKYi Developers',
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

  const programmaticXml = PROGRAMMATIC_SEO_ITEMS.map((item) => {
    const isPlot = item.id.includes('manas-lake') && item.type.toLowerCase().includes('plot');
    const shortPrice = item.priceRange.split('-')[0].trim().replace('Lakhs*', 'L*').replace('Crores', 'Cr*').replace('Lakhs', 'L*');
    const cleanProject = item.project.replace(/^SKYi\s+/i, '').replace(/NA Bungalow Plots/i, 'Plots').replace(/NA Villa Plots/i, 'Plots').replace(/Eco-Township/i, '').trim();
    const itemTitle = isPlot
      ? `${cleanProject} ${item.microLocation} | Plots From ${shortPrice} | SKYi Developers`
      : `${cleanProject} ${item.microLocation} | From ${shortPrice} | SKYi Developers`;
    const projectImg = `${baseUrl}${getProjectImage(item.id)}`;
    const desc = isPlot
      ? `PMRDA Sanctioned 100% Clear Title 7/12 ${item.type} at ${item.location}. Size: ${item.plotSize || '2,000 SQFT Onwards'}. Price: ${item.priceRange}. Bank Loans: ${item.bankLoans.join(', ')}. Direct Developer Booking.`
      : `MahaRERA Sanctioned ${item.type} at ${item.location}. Configurations: ${item.plotSize || 'Expansive Carpet'}. Price: ${item.priceRange}. Bank Loans: ${item.bankLoans.join(', ')}. Direct Developer Booking.`;

    return `
    <item>
      <title><![CDATA[${itemTitle}]]></title>
      <link>${baseUrl}/na-plots/${item.id}</link>
      <guid isPermaLink="true">${baseUrl}/na-plots/${item.id}</guid>
      <description><![CDATA[${desc}]]></description>
      <enclosure url="${projectImg}" length="65000" type="image/webp" />
      <media:content url="${projectImg}" medium="image" />
      <pubDate>${new Date().toUTCString()}</pubDate>
    </item>
  `;
  }).join('');

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
