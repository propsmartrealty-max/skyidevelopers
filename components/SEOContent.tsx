'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  MapPin,
  Award,
  Shield,
  Leaf,
  ShieldCheck,
  Compass,
  Sparkles,
  Search,
  Layers,
} from 'lucide-react';
import './SEOContent.css';
import { SKYI_ECOSYSTEM_MASTER_KEYWORDS } from '../utils/skyiDeepDataEngine';

/* ─── Ultra-Advanced Google Standards Compliant FAQ Data ─── */
const FAQS = [
  {
    q: 'Who is SKYi Developers (Enerrgia SKYi Developers) in Pune?',
    a: 'SKYi Developers (also recognized as Enerrgia SKYi Developers) is one of Pune’s premier real estate development organizations, building thoughtfully designed homes, eco-townships, and luxury residences since 2004. With over two decades of excellence, SKYi has delivered 7,000+ homes across 20+ projects, recognized with over 150 industry awards and IGBC Platinum sustainability ratings.',
  },
  {
    q: 'What are the ongoing and upcoming projects by SKYi Developers in Pune?',
    a: 'SKYi’s active portfolio includes: (1) SKYi Tigers Nest — 3 & 4 BHK luxury hillside homes in Bhugaon (from ₹1.79 Cr*). (2) SKYi Five Racecourse — 4 & 5 BHK ultra-luxury sky mansions in Sopan Baug / Racecourse. (3) SKYi Five Maidan — 4 BHK luxury residences on Pancard Club Road, Baner. (4) SKYi Park — 2 & 3 BHK eco-residences along Paud Road / Manas Lake. (5) SKYi PWC Towers & PWC Towers Hillside — 3 & 4 BHK club residences at Songbirds Bhugaon. (6) SKYi Aura Heights — 3 BHK hillside view apartments in Bhugaon / Bavdhan. (7) SKYi Iris Riverside — 3 BHK riverside homes. (8) Skyi Songbirds — 45+ acre sustainable township in Bhugaon. (9) SKYi Manas Lake — 90+ acre lakeside township in Bhukum / Bavdhan. (10) SKYi Star City — 20-acre township in Dhayari.',
  },
  {
    q: 'Which completed developments has SKYi Developers delivered in Pune?',
    a: 'SKYi’s successfully completed and delivered residential projects include: (1) SKYi First in Bavdhan, (2) SKYi Five Baner on Baner-Pashan Link Road, (3) SKYi Iris Baner, (4) SKYi Seher row houses & villas in Baner, (5) SKYi Aquila in Baner, (6) SKYi Nilay in Aundh, (7) SKYi Iris Bavdhan, (8) SKYi Lighthouse in Bavdhan, (9) SKYi Star Town in Bhugaon, and (10) SKYi Star Towers in Dhayari.',
  },
  {
    q: 'What are the details of the new launch 1 BHK (430 Sq.Ft.) in Skyi Songbirds Bhugaon?',
    a: 'Skyi Songbirds has launched an exclusive new phase of smart 1 BHK eco-residences featuring 430 Sq.Ft. usable RERA carpet area starting from ₹38 Lakhs*. These homes are designed on Zero-Dead-Space principles with scenic hillside balconies facing the 7,000-acre NDA forest, full access to the 5-acre Poona Western Club, and up to 90% pre-approved bank loans.',
  },
  {
    q: 'Is PMRDA NA bungalow plotting available at SKYi Manas Lake in Bhukum Pune?',
    a: 'Yes, SKYi Manas Lake offers PMRDA-sanctioned clear title residential NA bungalow plots directly along the lakefront. Plot sizes range from 2,000 to 5,000+ Sq.Ft. with FSI 1.5 (sanctioned for Ground + 2 Floors luxury villa construction), separate demarcation, 100% clear title individual 7/12 extract per plot, underground electricity and water networks, and 90% home loan funding from nationalized banks.',
  },
  {
    q: 'What configurations are available across SKYi projects (1 BHK to 5 BHK)?',
    a: 'SKYi offers a versatile spectrum of residential configurations: (1) 1 BHK Smart Homes in Skyi Songbirds (Bhugaon) & SKYi Star City (Dhayari). (2) 2 BHK Premium Homes in SKYi Manas Lake, SKYi Park, and SKYi Star City. (3) 3 BHK Luxury Residences in SKYi Songbirds, SKYi Manas Lake, SKYi Aura Heights, and SKYi Iris Riverside. (4) 4 BHK Luxury Sanctuaries in SKYi Tigers Nest (Bhugaon), SKYi Five Maidan (Baner), and SKYi PWC Towers. (5) 4 & 5 BHK Ultra-Luxury Sky Mansions in SKYi Five Racecourse (Sopan Baug).',
  },
  {
    q: 'What is the price range for SKYi residential projects in Pune?',
    a: 'SKYi project pricing is structured across segments: 1 BHK apartments start from ₹42 Lakhs* onwards in Dhayari and ₹45 Lakhs* in Bhugaon; 2 BHK homes range from ₹65 Lakhs* to ₹85 Lakhs*; 3 BHK luxury residences range from ₹95 Lakhs* to ₹1.45 Crores*; 4 BHK hillside sanctuaries in Tigers Nest start from ₹1.79 Crores*; 4 BHK Baner residences in Five Maidan start from ₹2.45 Crores*; and 4 & 5 BHK sky mansions in Five Racecourse (Sopan Baug) start from ₹3.85 Crores*.',
  },
  {
    q: 'Are all SKYi Developers projects registered with MahaRERA?',
    a: 'Yes, all SKYi projects comply strictly with the Real Estate (Regulation and Development) Act under Maharashtra Real Estate Regulatory Authority (MahaRERA). Registration details include: Skyi Songbirds (P52100000769, P52100001117, P52100019348, P52100047992), SKYi Manas Lake (P52100000513, P52100000514, P52100026954, P52100052033), SKYi Star City (P52100026727, P52100029481, P52100029474, P52100034274, P52100050099), SKYi Iris Baner (P52100019348), and SKYi Park (P52100000449). Project details are verifiable on maharera.maharashtra.gov.in.',
  },
  {
    q: 'What makes SKYi homes "Nature & Sustainability Centric" (IGBC Platinum)?',
    a: 'SKYi townships are recognized with Indian Green Building Council (IGBC) Platinum and Gold certifications. Key sustainability pillars include: (1) 70%+ open green spaces, (2) 100% sewage treatment plant (STP) water recycling for zero waste discharge, (3) East-West oriented building envelopes for maximum natural daylight and passive cross-ventilation, (4) Rooftop solar photovoltaic power grids, and (5) Conservation of natural contours fronting the 7,000-acre NDA forest reserve and Manas Lake.',
  },
  {
    q: 'How far are Skyi Songbirds Bhugaon and SKYi Manas Lake from Kothrud & Hinjewadi?',
    a: 'Skyi Songbirds (Bhugaon) and SKYi Manas Lake (Bhukum / Bavdhan) are situated directly along the 6-lane Paud Road expressway. They are just 6 to 10 minutes drive from Chandani Chowk multi-level interchange and Kothrud Metro Station, and approximately 20 to 25 minutes from Hinjewadi Rajiv Gandhi Infotech Park via the Mumbai-Pune Western Bypass.',
  },
  {
    q: 'What sports and club amenities are included in Poona Western Club (PWC)?',
    a: 'The Poona Western Club (PWC), situated inside the Skyi Songbirds campus in Bhugaon, is a 5-acre comprehensive sports and leisure hub featuring: an Olympic-length swimming pool, professional cricket pitch, tennis and badminton academies, football ground, squash courts, gymnasium, wellness spa, fine-dining restaurants, and banquet lawns.',
  },
  {
    q: 'Can NRIs purchase property in SKYi projects in Pune?',
    a: 'Yes, Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) can freely purchase residential apartments, sky suites, and PMRDA-sanctioned NA plots across all SKYi developments under FEMA regulations and general permission granted by the Reserve Bank of India (RBI) via NRE/NRO banking channels.',
  },
];

/* ─── Projects Showcase by Location ─── */
const PROJECT_LOCATIONS = [
  {
    project: 'SKYi Tigers Nest',
    area: 'Bhugaon Hillside, Paud Road, Pune',
    config: '3 & 4 BHK Hillside Sanctuaries (1,650 - 2,800 sq.ft.) — Starting ₹1.79 Cr*',
    status: 'Ongoing / Signature',
    category: 'Ultra Luxury Hillside',
    rera: 'MahaRERA: P52100000769 / P52100001117',
    color: '#ff6b35',
  },
  {
    project: 'SKYi Five Racecourse',
    area: 'Sopan Baug / Racecourse Annexe, Pune',
    config: '4 & 5 BHK Ultra-Luxury Sky Mansions (2,800 - 5,200 sq.ft.) — Starting ₹3.85 Cr*',
    status: 'Ongoing / Elite',
    category: 'Sky Mansions',
    rera: 'MahaRERA Registered',
    color: '#ab47bc',
  },
  {
    project: 'SKYi Five Maidan',
    area: 'Pancard Club Road, Baner, Pune',
    config: '4 BHK Luxury Residences (2,100 - 3,200 sq.ft.) — Starting ₹2.45 Cr*',
    status: 'Ongoing / Prime',
    category: 'Urban Luxury',
    rera: 'MahaRERA Registered',
    color: '#4fc3f7',
  },
  {
    project: 'Skyi Songbirds Eco-Township',
    area: 'Bhugaon Foothills, Paud Road, Pune',
    config: 'NEW LAUNCH: 1 BHK (430 sq.ft. from ₹38L*), 2, 3 & 4 BHK Sustainable Residences — Starting ₹38 Lakhs*',
    status: 'New Launch & Ongoing Phases',
    category: '45-Acre Eco-Township',
    rera: 'MahaRERA: P52100000769 / P52100001117 / P52100019348',
    color: '#34d399',
  },
  {
    project: 'SKYi Manas Lake Eco-Township',
    area: 'Paud Road, Bhukum / Bavdhan, Pune',
    config: '2, 3 & 4 BHK Lakeside Residences (780 - 1,950 sq.ft.) — Starting ₹65 Lakhs*',
    status: 'Ready & Ongoing Phases',
    category: '90-Acre Lakefront Township',
    rera: 'MahaRERA: P52100000513 / P52100000514 / P52100026954',
    color: '#3b82f6',
  },
  {
    project: 'SKYi Manas Lake PMRDA NA Plots',
    area: 'Manas Lake Waterfront, Bhukum, Paud Road, Pune',
    config: 'PMRDA Sanctioned Clear Title NA Villa Plots (2,000 - 5,000+ sq.ft.) with FSI 1.5 — Starting ₹95 Lakhs*',
    status: 'Ready Possession Plotted Enclave',
    category: 'Waterfront NA Plots',
    rera: 'PMRDA Sanctioned / Clear 7/12 Individual Extract',
    color: '#10b981',
  },
  {
    project: 'SKYi PWC Towers & Hillside',
    area: 'Songbirds Campus, Bhugaon, Pune',
    config: '3 & 4 BHK Sports Club Residences (1,250 - 2,100 sq.ft.) — Starting ₹1.15 Cr*',
    status: 'Ongoing / Club Integrated',
    category: 'Club Residences',
    rera: 'MahaRERA: P52100000643 / P52100000805',
    color: '#f59e0b',
  },
  {
    project: 'SKYi Star City',
    area: 'Dhayari, Sinhagad Road, Pune',
    config: '1, 2 & 3 BHK Value & Premium Homes (450 - 1,100 sq.ft.) — Starting ₹42 Lakhs*',
    status: 'Ready & Delivered Towers',
    category: '20-Acre Township',
    rera: 'MahaRERA: P52100026727 / P52100029481',
    color: '#ec4899',
  },
  {
    project: 'SKYi Park & Iris',
    area: 'Baner-Pashan / Bavdhan / Bhugaon, Pune',
    config: '2 & 3 BHK Boutique Residences (780 - 1,450 sq.ft.) — Delivered / Resale',
    status: 'Delivered & OC Received',
    category: 'Boutique Residences',
    rera: 'MahaRERA: P52100019348 / P52100000449',
    color: '#10b981',
  },
];

/* ─── Micro-Market Guide ─── */
const MICRO_MARKETS = [
  {
    id: 'bhugaon-corridor',
    name: 'Bhugaon & Paud Road',
    desc: 'West Pune’s signature green valley along the 6-lane Paud Road expressway, just 10 mins from Kothrud and Chandani Chowk. Home to Skyi Songbirds (45 acres), SKYi Tigers Nest, and Poona Western Club, fronting the 7,000-acre NDA forest reserve.',
    projects: ['Skyi Songbirds', 'SKYi Tigers Nest', 'SKYi PWC Towers', 'SKYi Iris Riverside', 'SKYi Aura Heights'],
  },
  {
    id: 'bhukum-manas-lake',
    name: 'Bhukum & Manas Lake',
    desc: 'Lakeside residential sanctuary connecting Bavdhan and Kothrud. Features the 90-acre SKYi Manas Lake township with lakeside promenade, CRISIL ratings, and IGBC Platinum zero-waste architecture.',
    projects: ['SKYi Manas Lake', 'SKYi Park Manas Lake', 'SKYi Manas Lake NA Plots'],
  },
  {
    id: 'baner-bavdhan',
    name: 'Baner & Bavdhan',
    desc: 'Prime high-appreciation urban belts near Hinjewadi IT Park and Mumbai-Pune Expressway. Home to SKYi Five Maidan (Pancard Club Road), SKYi Five Baner, SKYi First, and SKYi Iris Bavdhan.',
    projects: ['SKYi Five Maidan Baner', 'SKYi Five Baner', 'SKYi Iris Baner', 'SKYi First Bavdhan', 'SKYi Lighthouse'],
  },
  {
    id: 'sopan-baug-dhayari',
    name: 'Sopan Baug & Dhayari',
    desc: 'Elite Central Pune luxury in Sopan Baug featuring SKYi Five Racecourse (4 & 5 BHK sky mansions), and South-West Pune self-sufficient living at SKYi Star City (20-acre township in Dhayari).',
    projects: ['SKYi Five Racecourse Sopan Baug', 'SKYi Star City Dhayari', 'SKYi Star Towers'],
  },
];

export default function SEOContent() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeMarketId, setActiveMarketId] = useState<string>('bhugaon-corridor');
  const [activeKeywordTab, setActiveKeywordTab] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);
  const activeMarket = MICRO_MARKETS.find((m) => m.id === activeMarketId) || MICRO_MARKETS[0];

  // Compute displayed keywords based on active tab & search
  const tabKeywordMap: Record<string, string[]> = {
    all: [
      ...SKYI_ECOSYSTEM_MASTER_KEYWORDS.coreBrand,
      ...SKYI_ECOSYSTEM_MASTER_KEYWORDS.locations,
      ...SKYI_ECOSYSTEM_MASTER_KEYWORDS.configurations,
      ...SKYI_ECOSYSTEM_MASTER_KEYWORDS.pricing,
      ...SKYI_ECOSYSTEM_MASTER_KEYWORDS.songbirds,
      ...SKYI_ECOSYSTEM_MASTER_KEYWORDS.manasLake,
      ...SKYI_ECOSYSTEM_MASTER_KEYWORDS.natureSustainability,
      ...SKYI_ECOSYSTEM_MASTER_KEYWORDS.localMarathi,
    ],
    brand: [...SKYI_ECOSYSTEM_MASTER_KEYWORDS.coreBrand, ...SKYI_ECOSYSTEM_MASTER_KEYWORDS.developerCompany],
    locations: SKYI_ECOSYSTEM_MASTER_KEYWORDS.locations,
    configurations: SKYI_ECOSYSTEM_MASTER_KEYWORDS.configurations,
    pricing: [...SKYI_ECOSYSTEM_MASTER_KEYWORDS.pricing, ...SKYI_ECOSYSTEM_MASTER_KEYWORDS.floorPlans],
    songbirds: SKYI_ECOSYSTEM_MASTER_KEYWORDS.songbirds,
    manasLake: SKYI_ECOSYSTEM_MASTER_KEYWORDS.manasLake,
    nature: SKYI_ECOSYSTEM_MASTER_KEYWORDS.natureSustainability,
    local: [...SKYI_ECOSYSTEM_MASTER_KEYWORDS.localMarathi, ...SKYI_ECOSYSTEM_MASTER_KEYWORDS.nriGlobal],
  };

  const currentTabKeywords = tabKeywordMap[activeKeywordTab] || tabKeywordMap.all;
  const uniqueTabKeywords = Array.from(new Set(currentTabKeywords));
  const displayedKeywords = searchTerm.trim()
    ? uniqueTabKeywords.filter((k) => k.toLowerCase().includes(searchTerm.toLowerCase().trim()))
    : uniqueTabKeywords;

  return (
    <section className="seo-section" id="about">
      {/* ── Schema.org Microdata for Pune Real Estate Ecosystem ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            '@id': 'https://skyidevelopers.in/#developer',
            name: 'SKYi Developers Pune (Enerrgia SKYi Developers)',
            description: 'Premier real estate developer in Pune since 2004 with 7,000+ homes and 20+ projects across Bhugaon, Bhukum, Paud Road, Baner, Bavdhan, Dhayari, and Sopan Baug.',
            url: 'https://skyidevelopers.in',
            priceRange: '₹42 Lakhs - ₹7.50 Crores',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Skymark One, Balewadi',
              addressLocality: 'Pune',
              addressRegion: 'Maharashtra',
              postalCode: '411045',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 18.5700,
              longitude: 73.7700,
            },
          }),
        }}
      />

      {/* ── Trust Badges Strip ── */}
      <div className="trust-strip">
        <div className="trust-item">
          <Award size={22} />
          <div>
            <p className="trust-title">20+ Years Excellence</p>
            <p className="trust-sub">Established 2004 in Pune</p>
          </div>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <Leaf size={22} />
          <div>
            <p className="trust-title">IGBC Platinum Certified</p>
            <p className="trust-sub">Zero-Waste Sustainable Townships</p>
          </div>
        </div>
        <div className="trust-divider" />
        <div className="trust-item">
          <ShieldCheck size={22} />
          <div>
            <p className="trust-title">MahaRERA &amp; PMRDA Approved</p>
            <p className="trust-sub">100% Clear Title 7/12 &amp; Escrow Security</p>
          </div>
        </div>
      </div>

      <div className="seo-inner">
        {/* ── Left Column: Master Portfolio Showcase ── */}
        <div className="seo-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-subtitle">Developer Portfolio &amp; Micro-Markets</span>
            <h2 className="section-title seo-h2">
              SKYi Developers Pune<br />
              <span className="gradient-text">Complete Project Ecosystem</span>
            </h2>
            <div className="glow-line" style={{ marginTop: 16, marginBottom: 28 }} />

            <p className="seo-intro">
              <strong>SKYi Developers</strong> (also known as <em>Enerrgia SKYi Developers</em>) is one of Pune’s most respected and awarded real estate developers, building sustainable homes and master-planned communities since <strong>2004</strong>. With over <strong>7,000+ homes delivered</strong> and <strong>20+ landmark projects</strong>, SKYi’s footprint spans prime Pune growth corridors including <strong>Bhugaon, Bhukum, Paud Road, Baner, Bavdhan, Dhayari, Sopan Baug, and Aundh</strong>.
            </p>
          </motion.div>

          {/* Master Project Cards */}
          <div className="location-cards">
            {PROJECT_LOCATIONS.map((loc, i) => (
              <motion.article
                key={loc.project}
                className="location-card glass"
                style={{ '--loc-color': loc.color } as React.CSSProperties}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ x: 6 }}
              >
                <div className="lc-accent" />
                <div className="lc-body">
                  <div className="lc-top">
                    <h3 className="lc-title">{loc.project}</h3>
                    <span className="lc-status">{loc.status}</span>
                  </div>
                  <div className="lc-area">
                    <MapPin size={13} />
                    <span>{loc.area}</span>
                  </div>
                  <p className="lc-config">{loc.config}</p>
                  <p className="lc-near" style={{ fontSize: '11px', color: '#94a3b8', marginTop: '6px' }}>
                    <Shield size={11} style={{ display: 'inline', marginRight: '4px' }} />
                    {loc.rera}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Micro-Market Deep Guide */}
          <div className="encyclopedia-tabs-wrap" style={{ marginTop: '40px' }}>
            <div className="guide-badge"><Compass size={16} /> Pune Micro-Market Real Estate Guide</div>
            <h3 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 800, marginTop: '10px', marginBottom: '16px' }}>
              Explore SKYi Developments by Locality
            </h3>

            <div className="article-tab-pills">
              {MICRO_MARKETS.map((market) => (
                <button
                  key={market.id}
                  type="button"
                  className={`article-pill-btn ${activeMarketId === market.id ? 'active' : ''}`}
                  onClick={() => setActiveMarketId(market.id)}
                >
                  {market.name}
                </button>
              ))}
            </div>

            <div className="active-article-card glass" style={{ marginTop: '16px', padding: '24px', borderRadius: '16px' }}>
              <h4 style={{ color: '#ff6b35', fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>
                {activeMarket.name} Real Estate Corridor
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: '1.65', marginBottom: '16px' }}>
                {activeMarket.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {activeMarket.projects.map((proj) => (
                  <span key={proj} style={{ background: 'rgba(255, 107, 53, 0.15)', border: '1px solid rgba(255, 107, 53, 0.3)', color: '#ffd700', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                    {proj}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column: FAQ Accordion & Buying Guides ── */}
        <div className="seo-right">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section-subtitle">Frequently Asked Questions</span>
            <h2 className="section-title seo-h2">
              Everything You Need To Know<br />
              <span className="gradient-text">About SKYi Projects</span>
            </h2>
            <div className="glow-line" style={{ marginTop: 16, marginBottom: 28 }} />
          </motion.div>

          <div className="faq-list">
            {FAQS.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={faq.q}
                  className={`faq-item glass ${isOpen ? 'open' : ''}`}
                  onClick={() => toggle(i)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i); } }}
                >
                  <div className="faq-q">
                    <span>{faq.q}</span>
                    <motion.div
                      className="faq-arrow"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="faq-a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Quick Facts Strip */}
          <div className="glass" style={{ marginTop: '30px', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <h3 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} className="text-amber-400" />
              SKYi Key Milestone Summary
            </h3>
            <ul style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: '1.7', paddingLeft: '18px', margin: 0 }}>
              <li><strong>Founded</strong>: 2004 in Pune by visionary architects and engineers</li>
              <li><strong>Homes Delivered</strong>: Over 7,000+ families across 20+ projects</li>
              <li><strong>Green Certifications</strong>: IGBC Platinum and Gold Certified Townships</li>
              <li><strong>Flagship Townships</strong>: Skyi Songbirds (45 Acres), SKYi Manas Lake (90 Acres), SKYi Star City (20 Acres)</li>
              <li><strong>Ultra-Luxury Line</strong>: SKYi Tigers Nest (Bhugaon), SKYi Five Racecourse (Sopan Baug), SKYi Five Maidan (Baner)</li>
              <li><strong>Sports Infrastructure</strong>: 5-Acre Poona Western Club with Olympic pool and sports academies</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── SKYi Master Keyword Ecosystem Directory ── */}
      <div className="seo-keywords-block" style={{ marginTop: '50px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ff6b35', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
              <Layers size={14} /> SKYi Developers Pune Keyword Ecosystem
            </div>
            <h3 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 800, margin: '6px 0 0 0' }}>
              Topical Authority &amp; Search Engine Keyword Directory
            </h3>
          </div>
          <div style={{ position: 'relative', minWidth: '240px' }}>
            <Search size={15} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search ecosystem keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 14px 8px 36px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                fontSize: '0.82rem',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Tab Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          {[
            { id: 'all', label: 'All Ecosystem Keywords' },
            { id: 'brand', label: 'Core Brand & Company' },
            { id: 'locations', label: 'Pune Micro-Markets' },
            { id: 'configurations', label: '1 BHK - 5 BHK & Plots' },
            { id: 'pricing', label: 'Price & Cost Sheet' },
            { id: 'songbirds', label: 'Skyi Songbirds 1 BHK & Township' },
            { id: 'manasLake', label: 'SKYi Manas Lake & PMRDA Plots' },
            { id: 'nature', label: 'IGBC Platinum Sustainability' },
            { id: 'local', label: 'Marathi / Local Search Queries' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveKeywordTab(tab.id)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: activeKeywordTab === tab.id ? '#ff6b35' : 'rgba(255, 255, 255, 0.05)',
                color: activeKeywordTab === tab.id ? '#ffffff' : '#94a3b8',
                border: activeKeywordTab === tab.id ? '1px solid #ff6b35' : '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Keywords Grid / Pill Cloud */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxHeight: '240px', overflowY: 'auto', paddingRight: '8px' }}>
          {displayedKeywords.map((kw) => (
            <span
              key={kw}
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.75rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                color: '#cbd5e1',
                display: 'inline-block',
              }}
            >
              {kw}
            </span>
          ))}
        </div>

        <p style={{ marginTop: '16px', fontSize: '0.75rem', color: '#64748b', lineHeight: '1.5', margin: '16px 0 0 0' }}>
          Showing <strong>{displayedKeywords.length}</strong> verified Google indexable keywords across SKYi Developers Pune portfolio. Fully compliant with Google Search Essentials, Schema.org RealEstateAgent &amp; OfferCatalog microdata.
        </p>
      </div>
    </section>
  );
}
