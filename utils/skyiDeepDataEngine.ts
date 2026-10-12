/**
 * ══════════════════════════════════════════════════════════════════════════════
 * SKYI DEVELOPERS PUNE — MASTER PROJECT DATA & ULTRA-ADVANCED SERP ENGINE
 * Exhaustive structural mapping of ALL ongoing, completed, and township
 * developments across Bhugaon, Bhukum, Paud Road, Baner, Bavdhan, Dhayari,
 * Sopan Baug, Aundh, and West Pune micro-markets.
 * ══════════════════════════════════════════════════════════════════════════════
 */

export interface SkyiProjectDeepSpec {
  id: string;
  projectName: string;
  statusCategory: 'Ongoing' | 'Completed' | 'Township' | 'Plotted';
  category: 'Townships & Residences' | 'Ultra Luxury & Boutique' | 'Club Residences' | 'NA Bungalow Plots';
  location: string;
  microLocation: 'Bhugaon' | 'Bhukum' | 'Paud Road' | 'Baner' | 'Bavdhan' | 'Dhayari' | 'Sopan Baug' | 'Aundh' | 'Kasarsai' | 'Pirangut' | 'Sus';
  corridor: string;
  acreage: string;
  type: string;
  priceStarting: string;
  priceRange: string;
  configurations: string[];
  sizes: string;
  fsiRatio: string;
  roadWidth: string;
  reraNumbers: string;
  titleStatus: string;
  bankApprovals: string[];
  keyHighlights: string[];
  serpKeywords: string[];
  coordinates: { lat: number; lng: number };
}

export const SKYI_ALL_PROJECTS_DEEP_DATA: SkyiProjectDeepSpec[] = [
  /* ══════════════════════════════════════════════════════════════════════════════
     1. ONGOING / ACTIVE PORTFOLIO
  ══════════════════════════════════════════════════════════════════════════════ */

  /* ── 1. SKYi Tigers Nest (Bhugaon) ── */
  {
    id: 'skyi-tigers-nest-bhugaon',
    projectName: 'SKYi Tigers Nest',
    statusCategory: 'Ongoing',
    category: 'Ultra Luxury & Boutique',
    location: 'Bhugaon Hillside, Paud Road, Pune',
    microLocation: 'Bhugaon',
    corridor: 'West Pune / Sahyadri Valley Corridor',
    acreage: 'Hilltop Forest Sanctuary Enclave',
    type: '3 & 4 BHK Luxury Hillside Sanctuaries',
    priceStarting: '₹1.79 Crores*',
    priceRange: '₹1.79 Cr* - ₹3.25 Cr',
    configurations: ['3 BHK Hillside Residence', '4 BHK Luxury Sanctuary', 'Penthouse'],
    sizes: '1,650 - 2,800 Sq.Ft. Carpet Area',
    fsiRatio: 'Sanctioned Hillside Residential FSI',
    roadWidth: '40ft Concrete Access Boulevard',
    reraNumbers: 'MahaRERA: P52100000769 / P52100001117 (Songbirds Hillside Enclave)',
    titleStatus: '100% Clear Title & Sanctioned Architectural Layout',
    bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bank of Maharashtra'],
    keyHighlights: [
      'Overlooking 7,000-acre NDA forest reserve with 180° uninterrupted valley panorama',
      'Ultra-exclusive 4-bed residences starting from ₹1.79 Cr*',
      'Private deck balconies with zero-dead-space luxury architecture',
      'Exclusive hilltop club amenities, infinity heated pool, and concierge',
      '10 minutes from Kothrud Metro and Chandani Chowk junction',
    ],
    serpKeywords: [
      'SKYi Tigers Nest', 'SKYi Tigers Nest Pune', 'SKYi Tigers Nest Bhugaon',
      'SKYi Tigers Nest price', 'SKYi Tigers Nest 4 BHK', 'SKYi Tigers Nest 4 BHK price',
      'SKYi Tigers Nest floor plan', 'SKYi Tigers Nest amenities', 'SKYi Tigers Nest location',
      'SKYi Tigers Nest brochure', 'SKYi Tigers Nest RERA', 'SKYi Tigers Nest possession',
      'SKYi Tigers Nest forest facing', 'SKYi Tigers Nest luxury apartments', 'SKYi Tigers Nest luxury homes',
      'SKYi Tigers Nest review', 'SKYi Tigers Nest investment',
    ],
    coordinates: { lat: 18.4988, lng: 73.7431 },
  },

  /* ── 2. SKYi Five Racecourse (Sopan Baug / Racecourse) ── */
  {
    id: 'skyi-five-racecourse-sopan-baug',
    projectName: 'SKYi Five Racecourse',
    statusCategory: 'Ongoing',
    category: 'Ultra Luxury & Boutique',
    location: 'Sopan Baug / Racecourse Annexe, Pune',
    microLocation: 'Sopan Baug',
    corridor: 'East-Central Pune / Prime Elite Belt',
    acreage: 'Ultra-Exclusive Private Estate',
    type: '4 & 5 BHK Ultra-Luxury Sky Mansions',
    priceStarting: '₹3.85 Crores*',
    priceRange: '₹3.85 Cr* - ₹7.50 Cr',
    configurations: ['4 BHK Sky Mansion', '5 BHK Ultra-Luxury Estate', 'Duplex Penthouse'],
    sizes: '2,800 - 5,200 Sq.Ft. Carpet Area',
    fsiRatio: 'Prime Urban Residential FSI',
    roadWidth: '60ft Avenue Access',
    reraNumbers: 'MahaRERA Registered / Sanctioned Layout',
    titleStatus: '100% Clear Title Legal Documentation',
    bankApprovals: ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Standard Chartered'],
    keyHighlights: [
      'Iconic racecourse facing luxury sky residences in elite Sopan Baug',
      'Grand 4 & 5 BHK floor plans with private elevator lobbies and double-height decks',
      'Panoramic 360° views across Pune Racecourse and Cantonment green cover',
      'Five-star hospitality concierge, temperature-controlled pool, and spa',
    ],
    serpKeywords: [
      'SKYi Five Racecourse', 'Skyi Five Racecourse', 'SKYi Five Racecourse Pune',
      'SKYi Five Racecourse Sopan Baug', 'SKYi Five Racecourse price', 'SKYi Five Racecourse 4 BHK',
      'SKYi Five Racecourse 5 BHK', 'SKYi Five Racecourse 4 BHK price', 'SKYi Five Racecourse 5 BHK price',
      'SKYi Five Racecourse floor plan', 'SKYi Five Racecourse amenities', 'SKYi Five Racecourse location',
      'SKYi Five Racecourse brochure', 'SKYi Five Racecourse RERA', 'SKYi Five Racecourse review',
      'SKYi Five Racecourse luxury homes', 'SKYi Five Racecourse racecourse view',
    ],
    coordinates: { lat: 18.5150, lng: 73.8850 },
  },

  /* ── 3. SKYi Five Maidan (Baner) ── */
  {
    id: 'skyi-five-maidan-baner',
    projectName: 'SKYi Five Maidan',
    statusCategory: 'Ongoing',
    category: 'Ultra Luxury & Boutique',
    location: 'Pancard Club Road, Baner, Pune',
    microLocation: 'Baner',
    corridor: 'West Pune / Prime Baner High Street IT Corridor',
    acreage: 'Boutique Urban Luxury Campus',
    type: '4 BHK Luxury Residences',
    priceStarting: '₹2.45 Crores*',
    priceRange: '₹2.45 Cr* - ₹3.95 Cr',
    configurations: ['4 BHK Luxury Apartment', '4 BHK Grand Suite', 'Penthouse'],
    sizes: '2,100 - 3,200 Sq.Ft. Carpet Area',
    fsiRatio: 'Baner Urban Residential FSI',
    roadWidth: '80ft Pancard Club Arterial Road',
    reraNumbers: 'MahaRERA Registered / Approved Layout',
    titleStatus: '100% Clear Title 30-Year Search Certified',
    bankApprovals: ['HDFC Bank', 'ICICI Bank', 'SBI', 'Kotak Mahindra', 'Axis Bank'],
    keyHighlights: [
      'Located on prestigious Pancard Club Road in prime Baner',
      'Spacious 4 BHK luxury residences tailored for corporate executives and entrepreneurs',
      '3 minutes from Baner High Street, Balewadi High Street, and Mumbai-Pune Expressway',
      'Rooftop sky lounge, heated lap pool, state-of-the-art gymnasium, and EV charging',
    ],
    serpKeywords: [
      'SKYi Five Maidan', 'Skyi Five Maidan', 'SKYi Five Maidan Baner',
      'SKYi Five Maidan Pune', 'SKYi Five Maidan price', 'SKYi Five Maidan 4 BHK',
      'SKYi Five Maidan 4 BHK price', 'SKYi Five Maidan floor plan', 'SKYi Five Maidan amenities',
      'SKYi Five Maidan location', 'SKYi Five Maidan Pancard Club Road', 'SKYi Five Maidan luxury apartments',
      'SKYi Five Maidan premium homes', 'SKYi Five Maidan brochure', 'SKYi Five Maidan RERA',
      'SKYi Five Maidan review',
    ],
    coordinates: { lat: 18.5600, lng: 73.7850 },
  },

  /* ── 4. SKYi Park (Baner / Bhugaon / Paud Road) ── */
  {
    id: 'skyi-park-pune',
    projectName: 'SKYi Park',
    statusCategory: 'Ongoing',
    category: 'Townships & Residences',
    location: 'Paud Road / Manas Lake / Baner, Pune',
    microLocation: 'Paud Road',
    corridor: 'West Pune / Bavdhan-Paud Road Corridor',
    acreage: 'Integrated Green Community',
    type: '2 & 3 BHK Contemporary Residences',
    priceStarting: '₹65 Lakhs*',
    priceRange: '₹65 Lakhs* - ₹1.25 Crores',
    configurations: ['2 BHK Comfort Home', '3 BHK Premium Residence'],
    sizes: '780 - 1,350 Sq.Ft. Carpet Area',
    fsiRatio: 'Approved Residential FSI',
    roadWidth: '50ft Concrete Arterial Road',
    reraNumbers: 'MahaRERA: P52100000449 / Sanctioned Layout',
    titleStatus: '100% Clear Title & Occupancy Certified',
    bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bank of Baroda'],
    keyHighlights: [
      'IGBC Platinum certified green building design with central landscaped parks',
      'Zero-wastage floor plans maximizing usable carpet area',
      '5 minutes from Chandani Chowk and Kothrud connection',
      'Full lifestyle amenities including clubhouse, jogging track, and children play plazas',
    ],
    serpKeywords: [
      'SKYi Park', 'SKYi Park Pune', 'SKYi Park Bhugaon', 'SKYi Park Manas Lake',
      'SKYi Park Paud Road', 'SKYi Park 2 BHK', 'SKYi Park 3 BHK', 'SKYi Park price',
      'SKYi Park floor plan', 'SKYi Park amenities', 'SKYi Park location', 'SKYi Park brochure',
      'SKYi Park RERA', 'SKYi Park possession', 'SKYi Park review', 'SKYi Park township',
      'SKYi Park investment',
    ],
    coordinates: { lat: 18.5085, lng: 73.7400 },
  },

  /* ── 5. SKYi PWC Towers & PWC Towers Hillside ── */
  {
    id: 'skyi-pwc-towers-bhugaon',
    projectName: 'SKYi PWC Towers & PWC Towers Hillside',
    statusCategory: 'Ongoing',
    category: 'Club Residences',
    location: 'Skyi Songbirds Campus, Bhugaon, Paud Road, Pune',
    microLocation: 'Bhugaon',
    corridor: 'West Pune / Songbirds Foothills',
    acreage: 'Integrated with 5-Acre Poona Western Club',
    type: '3 & 4 BHK Sports Club Residences',
    priceStarting: '₹1.15 Crores*',
    priceRange: '₹1.15 Cr* - ₹2.40 Cr',
    configurations: ['3 BHK Club Residence', '4 BHK Hillside Club Suite'],
    sizes: '1,250 - 2,100 Sq.Ft. Carpet Area',
    fsiRatio: 'Township Sanctioned High-Rise FSI',
    roadWidth: '60ft Township Boulevard',
    reraNumbers: 'MahaRERA: P52100000643 / P52100000805 / P52100000769',
    titleStatus: '100% Clear Title with Pre-Approved Bank Mortgages',
    bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'PNB Housing'],
    keyHighlights: [
      'Direct on-campus access to the 5-acre Poona Western Club sports complex',
      'Olympic-standard swimming pool, professional cricket pitch, and tennis academies',
      'Hillside views overlooking NDA forest and Mula river watershed',
      'Zero-dead-space architecture with premium designer fittings',
    ],
    serpKeywords: [
      'SKYi PWC Towers', 'SKYi PWC Towers Pune', 'SKYi PWC Towers Bhugaon',
      'SKYi PWC Towers Paud Road', 'SKYi PWC Towers 4 BHK', 'SKYi PWC Towers price',
      'SKYi PWC Towers floor plan', 'SKYi PWC Towers amenities', 'SKYi PWC Towers location',
      'SKYi PWC Towers brochure', 'SKYi PWC Towers RERA', 'SKYi PWC Towers review',
      'SKYi PWC Towers hillside', 'SKYi PWC Towers Hillside', 'SKYi PWC Towers Hillside price',
      'SKYi PWC Towers Hillside 4 BHK', 'SKYi PWC Towers club residence',
    ],
    coordinates: { lat: 18.4988, lng: 73.7431 },
  },

  /* ── 6. SKYi Aura Heights (Bhugaon / Bavdhan) ── */
  {
    id: 'skyi-aura-heights-bhugaon',
    projectName: 'SKYi Aura Heights',
    statusCategory: 'Ongoing',
    category: 'Townships & Residences',
    location: 'Bhugaon / Bavdhan Valley, Paud Road, Pune',
    microLocation: 'Bhugaon',
    corridor: 'West Pune / Bavdhan-Bhugaon Hillside',
    acreage: 'Hillside Residential Enclave',
    type: '3 BHK Premium Residences',
    priceStarting: '₹95 Lakhs*',
    priceRange: '₹95 Lakhs* - ₹1.45 Crores',
    configurations: ['3 BHK Hillside View Home', '3 BHK Premium Sanctuary'],
    sizes: '1,150 - 1,550 Sq.Ft. Carpet Area',
    fsiRatio: 'Sanctioned Residential FSI',
    roadWidth: '40ft Concrete Access Road',
    reraNumbers: 'MahaRERA: P52100000769 (Extension) / Sanctioned Layout',
    titleStatus: '100% Clear Title Documentation',
    bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank'],
    keyHighlights: [
      'Scenic valley facing homes with pristine mountain air and forest proximity',
      'Spacious 3 BHK configurations with wrap-around balconies and modern modular kitchens',
      '10 minutes from Kothrud and Chandani Chowk multi-level flyover',
      'IGBC green rating, solar lighting, and rainwater harvesting infrastructure',
    ],
    serpKeywords: [
      'SKYi Aura Heights', 'SKYi Aura Heights Pune', 'SKYi Aura Heights Bhugaon',
      'SKYi Aura Heights price', 'SKYi Aura Heights 3 BHK', 'SKYi Aura Heights 3 BHK price',
      'SKYi Aura Heights floor plan', 'SKYi Aura Heights amenities', 'SKYi Aura Heights location',
      'SKYi Aura Heights brochure', 'SKYi Aura Heights RERA', 'SKYi Aura Heights review',
      'SKYi Aura Heights township', 'SKYi Aura Heights premium residences',
    ],
    coordinates: { lat: 18.5020, lng: 73.7450 },
  },

  /* ── 7. SKYi Iris Riverside (Bhugaon / Songbirds) ── */
  {
    id: 'skyi-iris-riverside-bhugaon',
    projectName: 'SKYi Iris Riverside',
    statusCategory: 'Ongoing',
    category: 'Townships & Residences',
    location: 'Skyi Songbirds Waterfront, Bhugaon, Pune',
    microLocation: 'Bhugaon',
    corridor: 'West Pune / Mula River Watershed',
    acreage: 'Riverfront Enclave within 45-Acre Township',
    type: '3 BHK Riverside Luxury Residences',
    priceStarting: '₹98 Lakhs*',
    priceRange: '₹98 Lakhs* - ₹1.55 Crores',
    configurations: ['3 BHK Riverside Home', '3 BHK Scenic Deck Residence'],
    sizes: '1,180 - 1,600 Sq.Ft. Carpet Area',
    fsiRatio: 'Township Sanctioned FSI',
    roadWidth: '50ft Internal Township Boulevard',
    reraNumbers: 'MahaRERA: P52100019348 / Approved Layout',
    titleStatus: '100% Clear Title & OC in Phases',
    bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bank of Maharashtra'],
    keyHighlights: [
      'Waterfront residences fronting the natural Mula river corridor',
      'Uninterrupted green views with bird watching decks and riverfront trails',
      'Complete access to Poona Western Club and Songbirds on-campus retail',
      'Sustainable zero-waste community infrastructure',
    ],
    serpKeywords: [
      'SKYi Iris Riverside', 'SKYi Iris Riverside Pune', 'SKYi Iris Riverside Bhugaon',
      'SKYi Iris Riverside Songbirds', 'SKYi Iris Riverside price', 'SKYi Iris Riverside 3 BHK',
      'SKYi Iris Riverside 3 BHK price', 'SKYi Iris Riverside floor plan', 'SKYi Iris Riverside amenities',
      'SKYi Iris Riverside location', 'SKYi Iris Riverside brochure', 'SKYi Iris Riverside RERA',
      'SKYi Iris Riverside review', 'SKYi Iris Riverside riverside homes', 'SKYi Iris Riverside premium apartments',
    ],
    coordinates: { lat: 18.4988, lng: 73.7431 },
  },

  /* ── 8. SKYi Star City (Dhayari / Sinhagad Road) ── */
  {
    id: 'skyi-star-city-dhayari',
    projectName: 'SKYi Star City',
    statusCategory: 'Ongoing',
    category: 'Townships & Residences',
    location: 'Dhayari Hillside, Near DSK Vishwa, Sinhagad Road, Pune',
    microLocation: 'Dhayari',
    corridor: 'South-West Pune / Sinhagad Road Corridor',
    acreage: '20+ Acres Self-Sufficient Integrated Township',
    type: '1, 2 & 3 BHK Value & Premium Apartments',
    priceStarting: '₹42 Lakhs*',
    priceRange: '₹42 Lakhs* - ₹85 Lakhs',
    configurations: ['1 BHK Smart Home', '2 BHK Compact', '2 BHK Premium', '3 BHK Family Home'],
    sizes: '450 - 1,100 Sq.Ft. Carpet Area',
    fsiRatio: 'Township Sanctioned High-Density FSI',
    roadWidth: '60ft DP Sanctioned Road',
    reraNumbers: 'MahaRERA: P52100026727, P52100029481, P52100029474, P52100034274, P52100050099',
    titleStatus: '100% Clear Title & OC Received for Delivered Towers',
    bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bank of Maharashtra', 'LIC Housing'],
    keyHighlights: [
      '20-acre master-planned township with 70% open green space and dedicated night gardens',
      'Built on Zero-Wastage design principles to maximize usable living space',
      'On-campus shopping convenience, temple, amphitheatre, and senior citizen pavilions',
      '15 minutes from Swargate and Pune-Bangalore National Highway',
    ],
    serpKeywords: [
      'SKYi Star City', 'Skyi Star City', 'SKYi Star City Dhayari', 'SKYi Star City Pune',
      'SKYi Star City price', 'SKYi Star City 1 BHK', 'SKYi Star City 2 BHK', 'SKYi Star City 3 BHK',
      'SKYi Star City floor plan', 'SKYi Star City amenities', 'SKYi Star City location',
      'SKYi Star City brochure', 'SKYi Star City RERA', 'SKYi Star City possession',
      'SKYi Star City review', 'flats in Dhayari Sinhagad Road',
    ],
    coordinates: { lat: 18.4480, lng: 73.8050 },
  },

  /* ── 9. Skyi Songbirds (Bhugaon) ── */
  {
    id: 'skyi-songbirds-bhugaon',
    projectName: 'Skyi Songbirds Eco-Township (New Launch & Hillside Residences)',
    statusCategory: 'Township',
    category: 'Townships & Residences',
    location: 'Bhugaon Foothills, Paud Road, Pune',
    microLocation: 'Bhugaon',
    corridor: 'West Pune / Paud Road Corridor',
    acreage: '45+ Acres Zero-Waste Eco Township',
    type: '1, 2, 3 & 4 BHK Sustainable Residences (New Launch: 1 BHK 430 Sq.Ft.)',
    priceStarting: '₹38 Lakhs*',
    priceRange: '₹38 Lakhs* - ₹2.10 Crores',
    configurations: ['1 BHK Smart Eco-Home (430 Sq.Ft. New Launch)', '2 BHK Premium', '3 BHK Luxury', '4 BHK Sky Suite'],
    sizes: '430 - 1,850 Sq.Ft. Carpet Area',
    fsiRatio: 'Township Sanctioned High-Rise FSI',
    roadWidth: '60ft Wide Township Arterial Road',
    reraNumbers: 'MahaRERA: P52100000769 (Ph A), P52100001117 (Ph B), P52100019348 (Ph E), P52100047992, P52100000764, P52100000643, P52100000805',
    titleStatus: 'Full Clear Title & Occupancy Certificate (OC) Received for Ready Towers / New Launch Registered',
    bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'PNB Housing'],
    keyHighlights: [
      '🔥 NEW LAUNCH: Smart 1 BHK Residences (430 Sq.Ft. Carpet Area) starting ₹38 Lakhs*',
      'Zero-Dead-Space architectural planning maximizing usable living and storage space',
      '45-acre integrated eco-township facing 7,000-acre NDA forest reserve',
      'Home to 5-acre Poona Western Club with Olympic pool & sports academies',
      'Zero Waste Township with 100% STP water recycling & solar power grid',
      '10 minutes from Kothrud Metro Station & Chandani Chowk multi-level flyover',
      'Over 2,000+ happy families residing in ready & ongoing phases',
    ],
    serpKeywords: [
      'SKYi Songbirds', 'Skyi Songbirds', 'SKYi Songbirds Pune', 'SKYi Songbirds Bhugaon',
      'SKYi Songbirds Paud Road', 'SKYi Songbirds price', 'SKYi Songbirds 1 BHK', 'SKYi Songbirds 1 BHK 430 sqft',
      'Songbirds 1 BHK new launch', 'Skyi Songbirds new launch', '1 BHK flat in Bhugaon Songbirds',
      'Skyi Songbirds 430 sqft price', 'Skyi Songbirds 430 sqft floor plan', '1 BHK under 40 lakhs Pune',
      'SKYi Songbirds 3 BHK', 'SKYi Songbirds 4 BHK', 'SKYi Songbirds floor plan',
      'SKYi Songbirds amenities', 'SKYi Songbirds review', 'SKYi Songbirds location',
      'SKYi Songbirds RERA', 'SKYi Songbirds possession', 'SKYi Songbirds township',
      'SKYi Songbirds master plan', 'SKYi Songbirds forest facing', 'SKYi Songbirds NDA forest',
      'SKYi Songbirds Mula river', 'SKYi Songbirds investment',
    ],
    coordinates: { lat: 18.4988, lng: 73.7431 },
  },

  /* ── 10. SKYi Manas Lake (Bhukum / Bavdhan) ── */
  {
    id: 'skyi-manas-lake-bhukum',
    projectName: 'SKYi Manas Lake Eco-Township',
    statusCategory: 'Township',
    category: 'Townships & Residences',
    location: 'Manas Lake Campus, Paud Road, Bhukum / Bavdhan, Pune',
    microLocation: 'Bhukum',
    corridor: 'West Pune / Bavdhan-Bhukum Lakeside',
    acreage: '90+ Acres Integrated Lakefront Township',
    type: '2, 3 & 4 BHK Lakeside Apartments & Gated Community',
    priceStarting: '₹65 Lakhs*',
    priceRange: '₹65 Lakhs* - ₹1.65 Crores',
    configurations: ['2 BHK Lakeview', '3 BHK Premium Lakefront', '4 BHK Penthouse'],
    sizes: '780 - 1,950 Sq.Ft. Carpet Area',
    fsiRatio: 'Township Sanctioned High-Rise FSI',
    roadWidth: '6-Lane Paud Road Direct Access + 50ft Internal Avenues',
    reraNumbers: 'MahaRERA: P52100000513, P52100000514, P52100026954, P52100052033, P52100079680',
    titleStatus: '100% Clear Title & OC in Multiple Phases',
    bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bank of Maharashtra'],
    keyHighlights: [
      '90+ acre IGBC Platinum certified lakefront eco-township',
      'Direct lakeside promenade, bird sanctuaries, and picnic lawns',
      'East-West cross-ventilated homes with maximum sunlight and mountain views',
      '6 minutes from Chandani Chowk and Bavdhan commercial hub',
    ],
    serpKeywords: [
      'SKYi Manas Lake', 'Skyi Manas Lake', 'SKYi Manas Lake Pune', 'SKYi Manas Lake Bhukum',
      'SKYi Manas Lake Paud Road', 'SKYi Manas Lake price', 'SKYi Manas Lake flats',
      'SKYi Manas Lake apartments', 'SKYi Manas Lake 2 BHK', 'SKYi Manas Lake 3 BHK',
      'SKYi Manas Lake 4 BHK', 'SKYi Manas Lake floor plan', 'SKYi Manas Lake amenities',
      'SKYi Manas Lake township', 'SKYi Manas Lake reviews', 'SKYi Manas Lake location',
      'SKYi Manas Lake RERA', 'SKYi Manas Lake lake view', 'SKYi Manas Lake investment',
    ],
    coordinates: { lat: 18.5085, lng: 73.7380 },
  },

  /* ── 10B. SKYi Manas Lake PMRDA NA Bungalow Plots (Bhukum / Paud Road) ── */
  {
    id: 'skyi-manas-lake-na-plots-bhukum',
    projectName: 'SKYi Manas Lake PMRDA NA Bungalow Plots',
    statusCategory: 'Plotted',
    category: 'NA Bungalow Plots',
    location: 'Manas Lake Waterfront, Paud Road, Bhukum / Bavdhan, Pune',
    microLocation: 'Bhukum',
    corridor: 'West Pune / Bavdhan-Bhukum Lakeside Plotted Corridor',
    acreage: 'Waterfront Gated Villa Sector in 90-Acre Township',
    type: 'PMRDA Sanctioned Clear Title NA Bungalow Plots',
    priceStarting: '₹95 Lakhs*',
    priceRange: '₹95 Lakhs* - ₹2.50 Crores',
    configurations: ['2,000 Sq.Ft. Villa Plot', '3,000 Sq.Ft. Lakefront Plot', '5,000+ Sq.Ft. Estate Plot'],
    sizes: '2,000 - 5,500 Sq.Ft. Independent Plots',
    fsiRatio: '1.5 FSI Permissible (Ground + 2 Floors Villa Construction)',
    roadWidth: '40ft & 50ft Wide Concrete/Tar Roads with LED Streetlights',
    reraNumbers: 'PMRDA Sanctioned Collector NA Layout / 100% Clear Title 7/12 RERA Compliant',
    titleStatus: '100% Clear Title Individual 7/12 Mutation, Demarcated & Zero Encumbrance',
    bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Bank of Maharashtra', 'Axis Bank'],
    keyHighlights: [
      '🌊 Exclusive PMRDA Sanctioned NA Bungalow Plotting right on the Manas Lake waterfront',
      '1.5 FSI sanctioned: Full architectural freedom to build your custom G+2 luxury lakefront villa',
      'Individual 7/12 extract for each plot with separate demarcation stones and compound fencing',
      'Complete underground utilities: dedicated water lines, MSEB electrical cabling, and optical fiber',
      'Direct access to 90-acre township amenities: lakeside promenade, clubhouse, security gatehouse',
      '90% plot purchase and construction home loans pre-approved by leading nationalized banks',
      'Just 6 minutes from Chandani Chowk, Bavdhan, and upcoming Metro Station',
    ],
    serpKeywords: [
      'SKYi Manas Lake NA plots', 'Manas Lake plots Pune', 'NA plots in Bhukum Manas Lake',
      'SKYi Manas Lake bungalow plots', 'PMRDA NA plots Bhukum', 'plots near Bavdhan Manas Lake',
      'SKYi Manas Lake plot price', 'Manas Lake 2000 sqft plot', 'clear title NA plots Paud Road',
      'villa plots Manas Lake Pune', 'lake view plots in Pune', 'NA plots Bhukum with 7/12',
      'bungalow plots near Chandani Chowk', 'buy plot in Manas Lake', 'SKYi plots Bhukum',
      'gated community plots Manas Lake', 'PMRDA approved plots Paud Road Pune',
    ],
    coordinates: { lat: 18.5085, lng: 73.7380 },
  },

  /* ══════════════════════════════════════════════════════════════════════════════
     2. COMPLETED DEVELOPMENTS PORTFOLIO
  ══════════════════════════════════════════════════════════════════════════════ */

  /* ── 11. SKYi First (Bavdhan) ── */
  {
    id: 'skyi-first-bavdhan',
    projectName: 'SKYi First',
    statusCategory: 'Completed',
    category: 'Ultra Luxury & Boutique',
    location: 'Bavdhan, Pune',
    microLocation: 'Bavdhan',
    corridor: 'West Pune / Bavdhan Prime',
    acreage: 'Completed Boutique Community',
    type: '2 & 3 BHK Contemporary Residences',
    priceStarting: '₹75 Lakhs (Delivered)',
    priceRange: '₹75 Lakhs - ₹1.35 Cr (Resale)',
    configurations: ['2 BHK', '3 BHK'],
    sizes: '850 - 1,400 Sq.Ft.',
    fsiRatio: 'PMC Sanctioned FSI',
    roadWidth: '40ft Municipal Road',
    reraNumbers: 'Delivered / Completed Project',
    titleStatus: '100% Clear Title, Fully Occupied, Conveyance Completed',
    bankApprovals: ['SBI', 'HDFC', 'ICICI'],
    keyHighlights: [
      'Milestone residential project established in prime Bavdhan',
      '100% occupied with active cooperative housing society',
      'Minutes from Chandani Chowk and Kothrud',
    ],
    serpKeywords: ['SKYi First', 'SKYi First Bavdhan', 'SKYi First Pune', 'SKYi completed projects Bavdhan'],
    coordinates: { lat: 18.5150, lng: 73.7750 },
  },

  /* ── 12. SKYi Five Baner (Baner) ── */
  {
    id: 'skyi-five-baner',
    projectName: 'SKYi Five Baner',
    statusCategory: 'Completed',
    category: 'Ultra Luxury & Boutique',
    location: 'Baner-Pashan Link Road, Baner, Pune',
    microLocation: 'Baner',
    corridor: 'West Pune / Baner IT Belt',
    acreage: 'Delivered Luxury Boutique Tower',
    type: '3 & 4 BHK Luxury Residences',
    priceStarting: '₹1.50 Crores (Delivered)',
    priceRange: '₹1.50 Cr - ₹2.75 Cr (Resale)',
    configurations: ['3 BHK Luxury', '4 BHK Penthouse'],
    sizes: '1,450 - 2,400 Sq.Ft.',
    fsiRatio: 'PMC Urban FSI',
    roadWidth: '60ft Link Road Access',
    reraNumbers: 'MahaRERA: P52100000449 / Completed',
    titleStatus: '100% Clear Title & OC Received',
    bankApprovals: ['HDFC Bank', 'ICICI Bank', 'SBI'],
    keyHighlights: [
      'Iconic boutique architecture on Baner-Pashan Link Road',
      'Minutes from Baner High Street and Balewadi sports complex',
    ],
    serpKeywords: ['SKYi Five Baner', 'SKYi Five Baner Pune', 'flats in Baner Pashan Link Road'],
    coordinates: { lat: 18.5550, lng: 73.7850 },
  },

  /* ── 13. SKYi Iris Baner (Baner) ── */
  {
    id: 'skyi-iris-baner',
    projectName: 'SKYi Iris Baner',
    statusCategory: 'Completed',
    category: 'Ultra Luxury & Boutique',
    location: 'Baner, Pune',
    microLocation: 'Baner',
    corridor: 'West Pune / Baner Corridor',
    acreage: 'Boutique Residential Enclave',
    type: '2 & 3 BHK Luxury Residences',
    priceStarting: '₹85 Lakhs (Delivered)',
    priceRange: '₹85 Lakhs - ₹1.65 Cr (Resale)',
    configurations: ['2 BHK', '3 BHK'],
    sizes: '900 - 1,500 Sq.Ft.',
    fsiRatio: 'PMC Approved FSI',
    roadWidth: '40ft Avenue',
    reraNumbers: 'MahaRERA: P52100019348 / Completed',
    titleStatus: 'Full Clear Title & Occupancy Certificate Issued',
    bankApprovals: ['SBI', 'HDFC', 'ICICI'],
    keyHighlights: ['Zero-wastage layout design in prime Baner', 'Rapid connectivity to Hinjewadi IT Park'],
    serpKeywords: ['SKYi Iris Baner', 'SKYi Iris Baner Pune', 'SKYi Iris review Baner'],
    coordinates: { lat: 18.5580, lng: 73.7890 },
  },

  /* ── 14. SKYi Seher (Baner) ── */
  {
    id: 'skyi-seher-baner',
    projectName: 'SKYi Seher',
    statusCategory: 'Completed',
    category: 'Ultra Luxury & Boutique',
    location: 'Baner, Pune',
    microLocation: 'Baner',
    corridor: 'West Pune / Baner',
    acreage: 'Completed Villa & Apartment Enclave',
    type: 'Row Houses & Luxury Apartments',
    priceStarting: 'Delivered',
    priceRange: 'Delivered / Resale on Request',
    configurations: ['3 BHK Row House', '4 BHK Luxury Villa'],
    sizes: '1,800 - 3,000 Sq.Ft.',
    fsiRatio: 'PMC Sanctioned Layout',
    roadWidth: '40ft Internal Roads',
    reraNumbers: 'Completed & Delivered',
    titleStatus: '100% Clear Title Society Registered',
    bankApprovals: ['SBI', 'HDFC', 'ICICI'],
    keyHighlights: ['Serene green living in core Baner', 'Timeless architectural aesthetic'],
    serpKeywords: ['SKYi Seher', 'SKYi Seher Baner', 'SKYi Seher Pune', 'row houses in Baner'],
    coordinates: { lat: 18.5520, lng: 73.7820 },
  },

  /* ── 15. SKYi Aquila (Baner) ── */
  {
    id: 'skyi-aquila-baner',
    projectName: 'SKYi Aquila',
    statusCategory: 'Completed',
    category: 'Ultra Luxury & Boutique',
    location: 'Baner, Pune',
    microLocation: 'Baner',
    corridor: 'West Pune / Baner Prime',
    acreage: 'Delivered Residential Project',
    type: '2 & 3 BHK Apartments',
    priceStarting: 'Delivered',
    priceRange: 'Delivered / Resale',
    configurations: ['2 BHK', '3 BHK'],
    sizes: '850 - 1,450 Sq.Ft.',
    fsiRatio: 'PMC Approved',
    roadWidth: '40ft Road',
    reraNumbers: 'Completed Project',
    titleStatus: '100% Clear Title',
    bankApprovals: ['SBI', 'HDFC', 'ICICI'],
    keyHighlights: ['Central Baner location with walking access to schools and markets'],
    serpKeywords: ['SKYi Aquila', 'SKYi Aquila Baner', 'SKYi Aquila Pune'],
    coordinates: { lat: 18.5560, lng: 73.7860 },
  },

  /* ── 16. SKYi Nilay (Aundh) ── */
  {
    id: 'skyi-nilay-aundh',
    projectName: 'SKYi Nilay',
    statusCategory: 'Completed',
    category: 'Ultra Luxury & Boutique',
    location: 'Aundh, Pune',
    microLocation: 'Aundh',
    corridor: 'North-West Pune / Aundh Elite Belt',
    acreage: 'Prime City Development',
    type: '2 & 3 BHK Premium Residences',
    priceStarting: 'Delivered',
    priceRange: 'Delivered / Resale',
    configurations: ['2 BHK', '3 BHK'],
    sizes: '950 - 1,600 Sq.Ft.',
    fsiRatio: 'PMC Sanctioned',
    roadWidth: '50ft Municipal Road',
    reraNumbers: 'Completed & Delivered',
    titleStatus: '100% Clear Title Society Registered',
    bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank'],
    keyHighlights: [
      'Situated in prime Aundh near Westend Mall and Bremen Chowk',
      'Established community living with mature tree canopy',
    ],
    serpKeywords: ['SKYi Nilay', 'SKYi Nilay Aundh', 'SKYi Nilay Pune', 'SKYi projects Aundh', 'flats in Aundh Pune'],
    coordinates: { lat: 18.5620, lng: 73.8050 },
  },

  /* ── 17. SKYi Iris Bavdhan (Bavdhan) ── */
  {
    id: 'skyi-iris-bavdhan',
    projectName: 'SKYi Iris Bavdhan',
    statusCategory: 'Completed',
    category: 'Ultra Luxury & Boutique',
    location: 'Bavdhan, Pune',
    microLocation: 'Bavdhan',
    corridor: 'West Pune / Bavdhan',
    acreage: 'Completed Enclave',
    type: '2 & 3 BHK Residences',
    priceStarting: 'Delivered',
    priceRange: 'Delivered / Resale',
    configurations: ['2 BHK', '3 BHK'],
    sizes: '880 - 1,420 Sq.Ft.',
    fsiRatio: 'PMC Sanctioned',
    roadWidth: '40ft Road',
    reraNumbers: 'Completed Project',
    titleStatus: '100% Clear Title',
    bankApprovals: ['SBI', 'HDFC', 'ICICI'],
    keyHighlights: ['Overlooking Bavdhan hills with instant access to NDA road and Mumbai highway'],
    serpKeywords: ['SKYi Iris Bavdhan', 'SKYi Iris Bavdhan Pune', 'flats in Bavdhan near Chandani Chowk'],
    coordinates: { lat: 18.5130, lng: 73.7720 },
  },

  /* ── 18. SKYi Lighthouse (Bavdhan) ── */
  {
    id: 'skyi-lighthouse-bavdhan',
    projectName: 'SKYi Lighthouse',
    statusCategory: 'Completed',
    category: 'Ultra Luxury & Boutique',
    location: 'Bavdhan, Pune',
    microLocation: 'Bavdhan',
    corridor: 'West Pune / Bavdhan',
    acreage: 'Delivered Landmark',
    type: '2 & 3 BHK Apartments',
    priceStarting: 'Delivered',
    priceRange: 'Delivered / Resale',
    configurations: ['2 BHK', '3 BHK'],
    sizes: '850 - 1,380 Sq.Ft.',
    fsiRatio: 'PMC Sanctioned',
    roadWidth: '40ft Road',
    reraNumbers: 'Completed Project',
    titleStatus: '100% Clear Title',
    bankApprovals: ['SBI', 'HDFC', 'ICICI'],
    keyHighlights: ['Modern architecture in peaceful Bavdhan residential neighborhood'],
    serpKeywords: ['SKYi Lighthouse', 'SKYi Lighthouse Bavdhan', 'SKYi Lighthouse Pune'],
    coordinates: { lat: 18.5140, lng: 73.7740 },
  },
];

/* ══════════════════════════════════════════════════════════════════════════════
   MASTER SEO & SERP KEYWORD ECOSYSTEM FOR TOP GOOGLE #1 RANKINGS
   Pillar-by-pillar classification compliant with Google Search Essentials
   ══════════════════════════════════════════════════════════════════════════════ */

export const SKYI_CORE_BRAND_KEYWORDS: string[] = [
  'SKYi Developers', 'SKYi Developers Pune', 'Skyi Developers Pune', 'SKYi Developer Pune',
  'Skyi Developer Pune', 'SKYi Properties Pune', 'Skyi Properties Pune', 'SKYi real estate Pune',
  'Skyi real estate Pune', 'SKYi builder Pune', 'Skyi builder Pune', 'SKYi builders Pune',
  'Skyi builders Pune', 'SKYi residential projects Pune', 'Skyi residential projects Pune',
  'SKYi projects Pune', 'Skyi projects Pune', 'SKYi upcoming projects Pune', 'Skyi upcoming projects Pune',
  'SKYi new projects Pune', 'Skyi new projects Pune', 'SKYi new launch Pune', 'Skyi new launch Pune',
  'SKYi luxury projects Pune', 'Skyi luxury projects Pune', 'SKYi premium projects Pune',
  'Skyi premium projects Pune', 'SKYi flats Pune', 'Skyi flats Pune', 'SKYi apartments Pune',
  'Skyi apartments Pune', 'SKYi homes Pune', 'Skyi homes Pune', 'Enerrgia SKYi Developers',
  'Enerrgia SKYi Developers Pune'
];

export const SKYI_DEVELOPER_COMPANY_KEYWORDS: string[] = [
  'SKYi Developers company', 'SKYi Developers Pune company', 'SKYi Developers history',
  'SKYi Developers profile', 'SKYi Developers about', 'SKYi Developers founder',
  'SKYi Developers management', 'SKYi Developers office', 'SKYi Developers corporate office',
  'SKYi Developers contact', 'SKYi Developers address', 'SKYi Developers phone number',
  'SKYi Developers sales office', 'SKYi Developers reviews', 'SKYi Developers reputation',
  'SKYi Developers projects', 'SKYi Developers portfolio', 'SKYi Developers completed projects',
  'SKYi Developers ongoing projects', 'SKYi Developers upcoming projects', 'SKYi Developers new projects',
  'SKYi Developers customer care', 'SKYi Developers RERA registration'
];

export const SKYI_LOCATION_ECOSYSTEM_KEYWORDS: string[] = [
  // Bhugaon
  'SKYi Bhugaon', 'SKYi projects Bhugaon', 'SKYi residential projects Bhugaon',
  'SKYi flats Bhugaon', 'SKYi apartments Bhugaon', 'SKYi luxury homes Bhugaon',
  'SKYi new project Bhugaon', 'SKYi upcoming project Bhugaon', 'SKYi 1 BHK Bhugaon',
  'SKYi 2 BHK Bhugaon', 'SKYi 3 BHK Bhugaon', 'SKYi 4 BHK Bhugaon', 'SKYi property Bhugaon',
  'flats in Bhugaon Pune', 'apartments in Bhugaon Paud Road',
  // Bhukum
  'SKYi Bhukum', 'SKYi projects Bhukum', 'SKYi residential projects Bhukum',
  'SKYi Manas Lake Bhukum', 'SKYi property Bhukum', 'SKYi plots Bhukum',
  'SKYi bungalow plots Bhukum', 'SKYi NA plots Bhukum', 'PMRDA NA plots Bhukum',
  'clear title plots Bhukum', 'lake view plots Bhukum',
  // Paud Road
  'SKYi Paud Road', 'SKYi projects Paud Road', 'SKYi flats Paud Road',
  'SKYi apartments Paud Road', 'SKYi luxury projects Paud Road', 'SKYi residential projects Paud Road',
  'SKYi property Paud Road', 'SKYi 1 BHK Paud Road', 'SKYi 2 BHK Paud Road',
  'SKYi 3 BHK Paud Road', 'SKYi 4 BHK Paud Road', 'flats on Paud Road Pune',
  // Baner
  'SKYi Baner', 'SKYi projects Baner', 'SKYi residential projects Baner',
  'SKYi luxury projects Baner', 'SKYi premium apartments Baner', 'SKYi 4 BHK Baner',
  'SKYi Five Maidan Baner', 'SKYi Five Baner', 'SKYi Iris Baner', 'SKYi Seher Baner',
  'SKYi Aquila Baner', 'luxury flats in Baner Pune',
  // Bavdhan
  'SKYi Bavdhan', 'SKYi projects Bavdhan', 'SKYi flats Bavdhan', 'SKYi apartments Bavdhan',
  'SKYi residential projects Bavdhan', 'SKYi Aura Heights Bavdhan', 'SKYi Iris Bavdhan',
  'SKYi luxury homes Bavdhan', 'SKYi First Bavdhan', 'SKYi Lighthouse Bavdhan',
  'flats in Bavdhan near Chandani Chowk',
  // Dhayari
  'SKYi Dhayari', 'SKYi Star City Dhayari', 'SKYi projects Dhayari', 'SKYi flats Dhayari',
  'SKYi apartments Dhayari', 'SKYi 1 BHK Dhayari', 'SKYi 2 BHK Dhayari', 'SKYi 3 BHK Dhayari',
  'flats in Dhayari Sinhagad Road',
  // Aundh & Sopan Baug
  'SKYi Aundh', 'SKYi Nilay Aundh', 'SKYi projects Aundh', 'SKYi property Aundh',
  'SKYi Sopan Baug', 'SKYi Five Racecourse Sopan Baug', 'SKYi 4 BHK Sopan Baug', 'SKYi 5 BHK Sopan Baug'
];

export const SKYI_CONFIGURATION_KEYWORDS: string[] = [
  // 1 BHK
  'SKYi 1 BHK Pune', 'SKYi 1 BHK Bhugaon', 'SKYi 1 BHK Paud Road', 'SKYi 1 BHK price',
  'SKYi 1 BHK flats', 'SKYi 1 BHK apartments', 'SKYi 1 BHK floor plan', 'SKYi 1 BHK projects',
  'Skyi Songbirds 1 BHK 430 sqft', 'Songbirds 1 BHK new launch', 'Skyi Songbirds new launch',
  '1 BHK flat Bhugaon Songbirds', 'Skyi Songbirds 430 sqft price', 'Songbirds 1 BHK floor plan',
  '1 BHK under 40 lakhs Pune', 'buy 1 BHK flat Pune',
  // 2 BHK
  'SKYi 2 BHK Pune', 'SKYi 2 BHK Bhugaon', 'SKYi 2 BHK Bavdhan', 'SKYi 2 BHK Dhayari',
  'SKYi 2 BHK Paud Road', 'SKYi 2 BHK price', 'SKYi 2 BHK flats', 'SKYi 2 BHK apartments',
  'SKYi 2 BHK floor plan', 'SKYi 2 BHK new projects', 'buy 2 BHK flat Pune',
  // 3 BHK
  'SKYi 3 BHK Pune', 'SKYi 3 BHK Bhugaon', 'SKYi 3 BHK Bavdhan', 'SKYi 3 BHK Baner',
  'SKYi 3 BHK Paud Road', 'SKYi 3 BHK price', 'SKYi 3 BHK flats', 'SKYi 3 BHK apartments',
  'SKYi 3 BHK floor plan', 'SKYi luxury 3 BHK', 'SKYi premium 3 BHK', 'buy 3 BHK flat Pune',
  // 4 BHK
  'SKYi 4 BHK Pune', 'SKYi 4 BHK Bhugaon', 'SKYi 4 BHK Baner', 'SKYi 4 BHK Sopan Baug',
  'SKYi 4 BHK Paud Road', 'SKYi 4 BHK price', 'SKYi 4 BHK floor plan', 'SKYi luxury 4 BHK',
  'SKYi premium 4 BHK', 'SKYi 4 BHK residences', 'buy 4 BHK flat Pune',
  // 5 BHK
  'SKYi 5 BHK Pune', 'SKYi 5 BHK Racecourse', 'SKYi 5 BHK Sopan Baug', 'SKYi 5 BHK price',
  'SKYi 5 BHK floor plan', 'SKYi luxury 5 BHK', 'SKYi premium 5 BHK', 'SKYi 5 BHK apartments',
  // NA Villa Plots
  'SKYi Manas Lake NA plots', 'Manas Lake plots Pune', 'NA plots in Bhukum Manas Lake',
  'SKYi Manas Lake bungalow plots', 'PMRDA NA plots Bhukum', 'plots near Bavdhan Manas Lake',
  'SKYi Manas Lake plot price', 'Manas Lake 2000 sqft plot', 'clear title NA plots Paud Road',
  'villa plots Manas Lake Pune', 'lake view plots in Pune', 'NA plots Bhukum with 7/12',
  'bungalow plots near Chandani Chowk', 'buy plot in Manas Lake', 'SKYi plots Bhukum',
  'gated community plots Manas Lake', 'PMRDA approved plots Paud Road Pune',
  'NA bungalow plots Pune', 'PMRDA NA plots Pune', 'clear title 7/12 NA plots Pune',
  'NA plots 2000 sqft Pune', 'NA plots 95 lakhs Pune'
];

export const SKYI_PRICE_KEYWORDS: string[] = [
  'SKYi projects price', 'SKYi Pune price', 'SKYi flats price', 'SKYi apartment price',
  'SKYi property price', 'SKYi price list', 'SKYi latest price', 'SKYi current price',
  'SKYi starting price', 'SKYi price per sq ft', 'SKYi rate per sq ft', 'SKYi 1 BHK price',
  'SKYi 2 BHK price', 'SKYi 3 BHK price', 'SKYi 4 BHK price', 'SKYi 5 BHK price',
  'SKYi penthouse price', 'SKYi luxury home price', 'SKYi premium home price',
  'SKYi booking amount', 'SKYi payment plan', 'SKYi cost sheet',
  'SKYi Tigers Nest 4 BHK price', 'SKYi Park 2 BHK price', 'SKYi Park 3 BHK price',
  'SKYi Five Maidan 4 BHK price', 'SKYi Five Racecourse 4 BHK price',
  'SKYi Five Racecourse 5 BHK price', 'SKYi PWC Towers 4 BHK price',
  'SKYi Aura Heights 3 BHK price', 'SKYi Iris Riverside 3 BHK price'
];

export const SKYI_FLOOR_PLAN_KEYWORDS: string[] = [
  'SKYi floor plans', 'SKYi project floor plans', 'SKYi apartment floor plans',
  'SKYi flat floor plans', 'SKYi 1 BHK floor plan', 'SKYi 2 BHK floor plan',
  'SKYi 3 BHK floor plan', 'SKYi 4 BHK floor plan', 'SKYi 5 BHK floor plan',
  'SKYi penthouse floor plan', 'SKYi master plan', 'SKYi masterplan', 'SKYi site plan',
  'SKYi tower plan', 'SKYi unit plan', 'SKYi carpet area', 'SKYi built up area',
  'SKYi layout', 'SKYi floor plan PDF', 'SKYi brochure PDF'
];

export const SKYI_AMENITIES_KEYWORDS: string[] = [
  'SKYi amenities', 'SKYi projects amenities', 'SKYi luxury amenities', 'SKYi premium amenities',
  'SKYi clubhouse', 'SKYi swimming pool', 'SKYi gym', 'SKYi fitness centre',
  'SKYi children play area', 'SKYi landscaped garden', 'SKYi jogging track',
  'SKYi walking track', 'SKYi sports facilities', 'SKYi indoor games', 'SKYi outdoor games',
  'SKYi multipurpose hall', 'SKYi clubhouse amenities', 'SKYi nature amenities',
  'SKYi green spaces', 'SKYi open spaces', 'SKYi sustainable homes',
  'Poona Western Club', 'Poona Western Club Bhugaon', 'Olympic size swimming pool Songbirds'
];

export const SKYI_NATURE_SUSTAINABILITY_KEYWORDS: string[] = [
  'SKYi nature homes', 'SKYi nature-centric homes', 'SKYi sustainable homes',
  'SKYi green homes', 'SKYi eco friendly homes', 'SKYi green buildings',
  'SKYi IGBC projects', 'SKYi IGBC certified', 'SKYi sustainability',
  'SKYi sustainable architecture', 'SKYi green residential projects',
  'SKYi nature inspired homes', 'SKYi homes near forest', 'SKYi homes near hills',
  'SKYi homes near lake', 'SKYi forest facing homes', 'SKYi hillside homes',
  'SKYi lakeside homes', 'SKYi nature living Pune', 'IGBC Platinum Pune township',
  'Zero Waste Township Pune'
];

export const SKYI_SONGBIRDS_KEYWORDS: string[] = [
  'SKYi Songbirds', 'Skyi Songbirds', 'SKYi Songbirds Pune', 'SKYi Songbirds Bhugaon',
  'SKYi Songbirds Paud Road', 'SKYi Songbirds price', 'SKYi Songbirds 1 BHK',
  'SKYi Songbirds 1 BHK 430 sqft', 'Songbirds 1 BHK new launch', 'Skyi Songbirds new launch',
  '1 BHK flat in Bhugaon Songbirds', 'Skyi Songbirds 430 sqft price', 'Skyi Songbirds 430 sqft floor plan',
  '1 BHK under 40 lakhs Pune', 'SKYi Songbirds 2 BHK', 'SKYi Songbirds 3 BHK', 'SKYi Songbirds 4 BHK',
  'SKYi Songbirds floor plan', 'SKYi Songbirds amenities', 'SKYi Songbirds review',
  'SKYi Songbirds location', 'SKYi Songbirds RERA', 'SKYi Songbirds possession',
  'SKYi Songbirds township', 'SKYi Songbirds master plan', 'SKYi Songbirds forest facing',
  'SKYi Songbirds NDA forest', 'SKYi Songbirds Mula river', 'SKYi Songbirds investment'
];

export const SKYI_MANAS_LAKE_KEYWORDS: string[] = [
  'SKYi Manas Lake', 'Skyi Manas Lake', 'SKYi Manas Lake Pune', 'SKYi Manas Lake Bhukum',
  'SKYi Manas Lake Paud Road', 'SKYi Manas Lake price', 'SKYi Manas Lake flats',
  'SKYi Manas Lake apartments', 'SKYi Manas Lake 2 BHK', 'SKYi Manas Lake 3 BHK',
  'SKYi Manas Lake 4 BHK', 'SKYi Manas Lake floor plan', 'SKYi Manas Lake amenities',
  'SKYi Manas Lake township', 'SKYi Manas Lake reviews', 'SKYi Manas Lake location',
  'SKYi Manas Lake RERA', 'SKYi Manas Lake lake view', 'SKYi Manas Lake investment',
  'SKYi Manas Lake NA plots', 'Manas Lake plots Pune', 'NA plots in Bhukum Manas Lake',
  'SKYi Manas Lake bungalow plots', 'PMRDA NA plots Bhukum Manas Lake',
  'Manas Lake 2000 sqft plot price', 'clear title NA plots Paud Road', 'lake view plots Pune',
  'villa plots Manas Lake Pune'
];

export const SKYI_TIGERS_NEST_KEYWORDS: string[] = [
  'SKYi Tigers Nest', 'SKYi Tigers Nest Pune', 'SKYi Tigers Nest Bhugaon',
  'SKYi Tigers Nest price', 'SKYi Tigers Nest 4 BHK', 'SKYi Tigers Nest 4 BHK price',
  'SKYi Tigers Nest floor plan', 'SKYi Tigers Nest amenities', 'SKYi Tigers Nest location',
  'SKYi Tigers Nest brochure', 'SKYi Tigers Nest RERA', 'SKYi Tigers Nest possession',
  'SKYi Tigers Nest forest facing', 'SKYi Tigers Nest luxury apartments',
  'SKYi Tigers Nest luxury homes', 'SKYi Tigers Nest review', 'SKYi Tigers Nest investment'
];

export const SKYI_PARK_KEYWORDS: string[] = [
  'SKYi Park', 'SKYi Park Pune', 'SKYi Park Bhugaon', 'SKYi Park Bhukum',
  'SKYi Park Paud Road', 'SKYi Park price', 'SKYi Park 2 BHK', 'SKYi Park 3 BHK',
  'SKYi Park floor plan', 'SKYi Park amenities', 'SKYi Park location',
  'SKYi Park brochure', 'SKYi Park RERA', 'SKYi Park possession',
  'SKYi Park reviews', 'SKYi Park investment'
];

export const SKYI_FIVE_RACECOURSE_KEYWORDS: string[] = [
  'SKYi Five Racecourse', 'Skyi Five Racecourse', 'SKYi Five Racecourse Pune',
  'SKYi Five Racecourse Sopan Baug', 'SKYi Five Racecourse price', 'SKYi Five Racecourse 4 BHK',
  'SKYi Five Racecourse 5 BHK', 'SKYi Five Racecourse 4 BHK price', 'SKYi Five Racecourse 5 BHK price',
  'SKYi Five Racecourse floor plan', 'SKYi Five Racecourse amenities', 'SKYi Five Racecourse location',
  'SKYi Five Racecourse brochure', 'SKYi Five Racecourse RERA', 'SKYi Five Racecourse review',
  'SKYi Five Racecourse luxury homes', 'SKYi Five Racecourse racecourse view'
];

export const SKYI_FIVE_MAIDAN_KEYWORDS: string[] = [
  'SKYi Five Maidan', 'SKYi Five Maidan Baner', 'SKYi Five Maidan Pune',
  'SKYi Five Maidan price', 'SKYi Five Maidan 4 BHK', 'SKYi Five Maidan floor plan',
  'SKYi Five Maidan amenities', 'SKYi Five Maidan location', 'SKYi Five Maidan brochure',
  'SKYi Five Maidan RERA', 'SKYi Five Maidan review', 'SKYi Five Maidan luxury apartments'
];

export const SKYI_PWC_TOWERS_KEYWORDS: string[] = [
  'SKYi PWC Towers', 'SKYi PWC Towers Pune', 'SKYi PWC Towers Bhugaon',
  'SKYi PWC Towers Hillside', 'SKYi PWC Towers price', 'SKYi PWC Towers 3 BHK',
  'SKYi PWC Towers 4 BHK', 'SKYi PWC Towers floor plan', 'SKYi PWC Towers amenities',
  'SKYi PWC Towers Poona Western Club', 'SKYi PWC Towers RERA'
];

export const SKYI_AURA_HEIGHTS_KEYWORDS: string[] = [
  'SKYi Aura Heights', 'SKYi Aura Heights Pune', 'SKYi Aura Heights Bhugaon',
  'SKYi Aura Heights Bavdhan', 'SKYi Aura Heights price', 'SKYi Aura Heights 3 BHK',
  'SKYi Aura Heights floor plan', 'SKYi Aura Heights amenities', 'SKYi Aura Heights RERA'
];

export const SKYI_STAR_CITY_KEYWORDS: string[] = [
  'SKYi Star City', 'Skyi Star City', 'SKYi Star City Dhayari', 'SKYi Star City Pune',
  'SKYi Star City price', 'SKYi Star City 1 BHK', 'SKYi Star City 2 BHK', 'SKYi Star City 3 BHK',
  'SKYi Star City floor plan', 'SKYi Star City amenities', 'SKYi Star City location',
  'SKYi Star City brochure', 'SKYi Star City RERA', 'SKYi Star City possession', 'SKYi Star City review'
];

export const SKYI_LOCAL_MARATHI_KEYWORDS: string[] = [
  'pune madhe plot', 'pune NA plot sale', 'bhugaon bungalow plot', 'ghar bandhnya sathi plot pune',
  'swatacha bungalow pune plot', 'skyi flat pune', 'skyi songbirds bhugaon flat', 'manas lake plot bhukum',
  'bhugaon madhe flat', 'paud road flat sale'
];

export const SKYI_NRI_GLOBAL_KEYWORDS: string[] = [
  'NRI property investment Pune', 'NRI real estate India', 'buy property in Pune from USA',
  'buy flat in Pune from Dubai UAE', 'FEMA rules NRI property purchase Pune',
  'NRI luxury homes Pune', 'NRI NA plots Pune', 'tax on NRI property purchase India'
];

export const SKYI_ECOSYSTEM_MASTER_KEYWORDS = {
  coreBrand: SKYI_CORE_BRAND_KEYWORDS,
  developerCompany: SKYI_DEVELOPER_COMPANY_KEYWORDS,
  locations: SKYI_LOCATION_ECOSYSTEM_KEYWORDS,
  configurations: SKYI_CONFIGURATION_KEYWORDS,
  pricing: SKYI_PRICE_KEYWORDS,
  floorPlans: SKYI_FLOOR_PLAN_KEYWORDS,
  amenities: SKYI_AMENITIES_KEYWORDS,
  natureSustainability: SKYI_NATURE_SUSTAINABILITY_KEYWORDS,
  songbirds: SKYI_SONGBIRDS_KEYWORDS,
  manasLake: SKYI_MANAS_LAKE_KEYWORDS,
  tigersNest: SKYI_TIGERS_NEST_KEYWORDS,
  park: SKYI_PARK_KEYWORDS,
  fiveRacecourse: SKYI_FIVE_RACECOURSE_KEYWORDS,
  fiveMaidan: SKYI_FIVE_MAIDAN_KEYWORDS,
  pwcTowers: SKYI_PWC_TOWERS_KEYWORDS,
  auraHeights: SKYI_AURA_HEIGHTS_KEYWORDS,
  starCity: SKYI_STAR_CITY_KEYWORDS,
  localMarathi: SKYI_LOCAL_MARATHI_KEYWORDS,
  nriGlobal: SKYI_NRI_GLOBAL_KEYWORDS,
};

/**
 * Deduplicated, canonical array containing ALL top keywords of the entire SKYi ecosystem
 */
export const SKYI_ALL_ECOSYSTEM_KEYWORDS: string[] = Array.from(
  new Set([
    ...SKYI_CORE_BRAND_KEYWORDS,
    ...SKYI_DEVELOPER_COMPANY_KEYWORDS,
    ...SKYI_LOCATION_ECOSYSTEM_KEYWORDS,
    ...SKYI_CONFIGURATION_KEYWORDS,
    ...SKYI_PRICE_KEYWORDS,
    ...SKYI_FLOOR_PLAN_KEYWORDS,
    ...SKYI_AMENITIES_KEYWORDS,
    ...SKYI_NATURE_SUSTAINABILITY_KEYWORDS,
    ...SKYI_SONGBIRDS_KEYWORDS,
    ...SKYI_MANAS_LAKE_KEYWORDS,
    ...SKYI_TIGERS_NEST_KEYWORDS,
    ...SKYI_PARK_KEYWORDS,
    ...SKYI_FIVE_RACECOURSE_KEYWORDS,
    ...SKYI_FIVE_MAIDAN_KEYWORDS,
    ...SKYI_PWC_TOWERS_KEYWORDS,
    ...SKYI_AURA_HEIGHTS_KEYWORDS,
    ...SKYI_STAR_CITY_KEYWORDS,
    ...SKYI_LOCAL_MARATHI_KEYWORDS,
    ...SKYI_NRI_GLOBAL_KEYWORDS,
  ])
);

