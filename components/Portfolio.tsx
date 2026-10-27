'use client';

import { useState, useEffect, useRef } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, MapPin, Building2, Home, Star, Calendar, FileText, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import { getProjectImage } from '../utils/dynamicImages';
import './Portfolio.css';

export type ProjectCategory =
  | 'Townships'
  | 'Ultra Luxury ("Five")'
  | 'Hillside & Club'
  | 'Urban & Delivered';

interface Project {
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  bgImage: string;
  scale: string;
  configuration: string;
  location: string;
  amenities: string[];
  seoContent: string;
  status: 'Ongoing' | 'Delivered' | 'Launching Soon';
  year: string;
  reraNumber: string;
}

const PROJECTS: Project[] = [
  /* ── 1. INTEGRATED TOWNSHIPS ── */
  {
    title: 'Skyi Songbirds',
    category: 'Townships',
    tagline: '45+ Acre Award-Winning Eco-Township',
    description: 'Surrounded by the Sahyadri Hills and 7,000-acre NDA forest reserve. NEW TOWER LAUNCH: Aria Heights Smart 1 BHK (430 Sq.Ft. Carpet) All-Inclusive Only ₹49L* plus 3 & 4 BHK sustainable hillside homes.',
    bgImage: getProjectImage('skyi-songbirds'),
    scale: '45+ Acres, 2,000+ Families',
    configuration: '1 BHK (Aria Heights 430 Sq.Ft. New Launch), 2, 3 & 4 BHK Residences',
    location: 'Bhugaon, Paud Road, Pune (10 mins from Kothrud & Chandani Chowk)',
    amenities: ['🔥 NEW TOWER LAUNCH: Aria Heights 1 BHK (430 Sq.Ft.)', '5-Acre Poona Western Club', 'Sports Academies (Football, Cricket, Tennis)', 'Zero Waste Campus & NDA Forest Facing', 'Max Light™ Daylighting Engineering'],
    seoContent: 'Skyi Songbirds in Bhugaon, Paud Road, Pune, is an iconic IGBC Platinum certified eco-township spread across 45+ acres bordering the 7,000-acre NDA forest reserve. Featuring the newly launched Aria Heights smart 1 BHK starter homes (430 Sq.Ft. Carpet) alongside 3 & 4 BHK hillside residences, this development integrates zero-waste environmental infrastructure, Max Light™ daylighting technology, and the 5-acre Poona Western Club.',
    status: 'Ongoing',
    year: '2024 New Launch',
    reraNumber: 'MahaRERA: P52100028121 (Aria Heights Ph I) / P52100000769 (Ph A) / P52100001117 (Ph B) / P52100019348 (Ph E)',
  },
  {
    title: 'SKYi Manas Lake',
    category: 'Townships',
    tagline: '90+ Acre Benchmark Lakefront Eco-Township',
    description: 'A benchmark 90-acre lakefront eco-township featuring lakeside luxury 2 & 3 BHK residences, scenic nature boardwalks, and a grand full-service clubhouse.',
    bgImage: getProjectImage('skyi-manas-lake-apartment'),
    scale: '90+ Acres, 2,000+ Families',
    configuration: '2 & 3 BHK Lakeside Residences',
    location: 'Paud Road, Bhukum / Bavdhan, Pune (Near Chandani Chowk)',
    amenities: ['🌊 Lakefront Promenade & Nature Walkways', 'Fully Equipped Grand Clubhouse & Swimming Pool', 'Badminton, Tennis & Sports Courts', 'Zero-Waste Water Treatment & Rainwater Harvesting', 'Direct 6-Lane Paud Road Access'],
    seoContent: 'SKYi Manas Lake is a premier 90+ acre residential township on Paud Road at the junction of Bavdhan and Bhukum, Pune, just minutes from Chandani Chowk. Featuring lakeside 2 & 3 BHK residences, this master community offers panoramic Sahyadri views, pristine air, and rapid highway connectivity.',
    status: 'Ongoing',
    year: 'Active & Delivered Phases',
    reraNumber: 'MahaRERA: P52100000513 / P52100000514',
  },

  /* ── 2. THE "FIVE" ULTRA-LUXURY COLLECTION ── */
  {
    title: 'Five Racecourse',
    category: 'Ultra Luxury ("Five")',
    tagline: 'Unobstructed 120-Acre Racecourse Panoramas',
    description: 'The pinnacle of Pune luxury. Single-floor and duplex 4 & 5 BHK sky mansions offering perpetual, unobstructed vistas of the Pune Racecourse and Empress Botanical Gardens in prestigious Sopan Baug.',
    bgImage: getProjectImage('skyi-five-racecourse'),
    scale: 'Signature High-Rise Luxury',
    configuration: '4 & 5 BHK Ultra-Luxury Panoramic Residences',
    location: 'Sopan Baug / Empress Garden, Pune',
    amenities: ['🏇 Unobstructed Pune Racecourse Views', 'Single Residence per Wing / Floor', 'Private High-Speed Elevator Lobbies', 'Rooftop Horizon Pool & Sky Observatory', 'Bespoke 24/7 Concierge & Valet'],
    seoContent: 'Five Racecourse by SKYi in Sopan Baug, Pune, represents ultra-luxury living with panoramic vistas overlooking the historic Pune Racecourse and Empress Gardens. Featuring expansive 4 & 5 BHK full-floor sky residences with private elevator access, double-height sundecks, and five-star hospitality services.',
    status: 'Ongoing',
    year: 'Signature Collection',
    reraNumber: 'MahaRERA: Sanctioned Sopan Baug Landmark Listing',
  },
  {
    title: 'Five Aguada',
    category: 'Ultra Luxury ("Five")',
    tagline: 'Sea-Facing Bandstand Residences, Mumbai',
    description: 'Inspired by the iconic Castella de Aguada. Entire-floor sea-facing 4, 5 & 6 BHK luxury mansions along Bandstand, Bandra West, Mumbai, commanding uninterrupted 180° Arabian Sea horizons.',
    bgImage: getProjectImage('skyi-five-aguada'),
    scale: 'Ultra-Luxury Mumbai Oceanfront',
    configuration: '4, 5 & 6 BHK Sea-Facing Entire-Floor Mansions',
    location: 'Bandstand, Bandra West, Mumbai',
    amenities: ['🌊 Perpetual 180° Arabian Sea Horizons', 'Single Residence per Floor Privacy', 'Private Plunge Pools & Sky Decks', 'Private Elevators & Direct Lobby Entry', 'VIP Concierge & Smart Security'],
    seoContent: 'Five Aguada by SKYi is an ultra-exclusive residential landmark located at Bandstand, Bandra West, Mumbai. Offering full-floor 4, 5, and 6 BHK oceanfront residences with 180-degree unobstructed Arabian Sea views, bespoke architectural craftsmanship, and world-class security.',
    status: 'Launching Soon',
    year: '2025 Flagship',
    reraNumber: 'MahaRERA: Sanctioned Bandra West Coastal Listing',
  },
  {
    title: 'Five Maidan',
    category: 'Ultra Luxury ("Five")',
    tagline: 'Exclusive 4 BHK Tower in Sprawling Greens',
    description: 'A rare low-density luxury high-rise development in Baner immersed in expansive landscaped green maidans, private forest walkways, and serene sporting grounds.',
    bgImage: getProjectImage('skyi-five-maidan'),
    scale: 'Vast Open Green Parkland Living',
    configuration: '4 BHK Exclusive Luxury Residences',
    location: 'Baner, Pune',
    amenities: ['🌿 Sprawling Landscaped Green Maidans', 'Double-Height Designer Sun Decks', 'Olympic-Length Swimming Pool & Squash', 'EV Charging Bays & Dual Car Parkings', 'Zero Common Walls Architecture'],
    seoContent: 'Five Maidan by SKYi in Baner, Pune, is an exclusive single-tower residential sanctuary set within sprawling green open fields. Offering expansive 4 BHK homes with zero-wastage layout designs, private balconies, and proximity to Balewadi High Street.',
    status: 'Ongoing',
    year: 'Signature Edition',
    reraNumber: 'MahaRERA: Sanctioned Baner Signature Listing',
  },

  /* ── 3. HILLSIDE & CLUB RESIDENCES ── */
  {
    title: 'Tiger’s Nest',
    category: 'Hillside & Club',
    tagline: '4 BHK Forest-Facing Hillside Sanctuary',
    description: 'Ultra-luxury forest-facing 4 BHK residences nestled directly against the 7,000-acre NDA forest reserve along Paud Road, Bhugaon. Unmatched privacy and Sahyadri valley breezes.',
    bgImage: getProjectImage('skyi-tigers-nest'),
    scale: 'Hillside Sanctuary',
    configuration: '4 BHK Luxury Hillside Forest Decks',
    location: 'Bhugaon / Paud Road, Pune',
    amenities: ['🌲 Direct 7,000-Acre NDA Forest Vistas', '180° Deep Deck Balconies', 'Private Gated Security & Clubhouse', 'Heated Valley-View Infinity Pool', 'Max Light™ Daylighting Engineering'],
    seoContent: 'Tiger’s Nest by SKYi is an ultra-luxury hillside sanctuary located in Bhugaon, Paud Road, Pune. Facing the protected 7,000-acre NDA forest reserve, these 4 BHK residences provide pristine air quality, natural tranquility, and panoramic Sahyadri views.',
    status: 'Ongoing',
    year: 'Hillside Sanctuary Edition',
    reraNumber: 'MahaRERA: P52100000769 / P52100001117',
  },
  {
    title: 'SKYi PWC Towers & Hillside',
    category: 'Hillside & Club',
    tagline: 'Integrated 5-Acre Sports Club Residences',
    description: 'Flagship high-rise towers built around the 5-acre Poona Western Club at Skyi Songbirds campus, Bhugaon. Doorstep access to Olympic-grade sports academies, tennis, cricket, and fine dining.',
    bgImage: getProjectImage('skyi-pwc-towers'),
    scale: '5-Acre Sports Club Campus',
    configuration: '3 & 4 BHK Club-Integrated Residences',
    location: 'Skyi Songbirds, Bhugaon, Paud Road, Pune',
    amenities: ['🎾 Direct Doorstep Poona Western Club Access', 'Olympic-Length Swimming Pool', 'Badminton, Squash & Cricket Academies', 'Fine Dining Restaurant & Banquet Lawns', 'Multi-Tier Security & Concierge'],
    seoContent: 'SKYi PWC Towers and PWC Towers Hillside are club-integrated residences inside the Skyi Songbirds campus in Bhugaon, Paud Road, Pune. Built around the 5-acre Poona Western Club sports complex, these residences offer sports coaching and fine dining at your doorstep.',
    status: 'Ongoing',
    year: 'Club Collection',
    reraNumber: 'MahaRERA: P52100000643 / P52100000805',
  },
  {
    title: 'Aura Heights',
    category: 'Hillside & Club',
    tagline: 'Panoramic Mountain-View 3 BHK Residences',
    description: 'Boutique hillside skyline residences capturing cool mountain breezes and panoramic valley vistas along the Bavdhan-Bhugaon corridor.',
    bgImage: getProjectImage('skyi-aura-heights'),
    scale: 'Hillside Skyline Residences',
    configuration: '3 BHK Panoramic Mountain-View Residences',
    location: 'Bavdhan / Bhugaon Corridor, Pune',
    amenities: ['⛰️ 180° Sahyadri Valley & Hill Panoramas', 'Zero-Passage High-Efficiency Layouts', 'Rooftop Stargazing Deck & Yoga Lawn', 'Rapid 5-Min Drive to Chandani Chowk'],
    seoContent: 'SKYi Aura Heights in Bhugaon / Bavdhan represents hillside luxury living along Paud Road, Pune. Positioned next to the Sahyadri mountains with pristine air and panoramic valley views.',
    status: 'Ongoing',
    year: 'Hillside Series',
    reraNumber: 'MahaRERA: P52100000769',
  },
  {
    title: 'Iris Riverside',
    category: 'Hillside & Club',
    tagline: 'Premium 3 BHK Riverside Residences',
    description: 'Tranquil waterfront living along the river corridor in Bavdhan. Exceptional connectivity to Kothrud, Baner, and Mumbai-Bangalore Highway paired with natural riverside serenity.',
    bgImage: getProjectImage('skyi-iris-riverside'),
    scale: 'Riverside Living',
    configuration: '3 BHK Premium Waterfront Residences',
    location: 'Bavdhan, Pune',
    amenities: ['🌊 Riverbank Jogging & Promenade Track', 'Landscaped Riverfront Central Courtyard', 'Fully Equipped Gymnasium & Steam Room', 'Covered Car Parking with EV Ready Points'],
    seoContent: 'Iris Riverside by SKYi in Bavdhan, Pune, delivers modern riverside apartments situated minutes from Pune University and Chandani Chowk with serene water views and cross ventilation.',
    status: 'Ongoing',
    year: 'Riverside Series',
    reraNumber: 'MahaRERA: P52100019348',
  },

  /* ── 4. URBAN BOUTIQUES & DELIVERED HERITAGE ── */
  {
    title: 'SKYi Park',
    category: 'Urban & Delivered',
    tagline: 'Modern 2 & 3 BHK High-Rise Residences',
    description: 'Contemporary boutique high-rises in the Baner-Bavdhan corridor near Hinjawadi IT Park. Designed with zero-passage efficiency and rooftop infinity lounges.',
    bgImage: getProjectImage('skyi-park'),
    scale: 'Prime Urban Residential',
    configuration: '2 & 3 BHK Urban High-Rise Homes',
    location: 'Baner / Bavdhan Corridor, Pune',
    amenities: ['🏙️ Rooftop Infinity Sky Lounge', 'High-Speed Elevators & EV Charging', 'Zero-Passage Efficient Floor Plans', 'Multi-Tier Digital Security Systems'],
    seoContent: 'SKYi Park in Baner / Bavdhan, Pune, showcases modern 2 and 3 BHK luxury residences close to Aundh, Pashan, Sus, and Hinjewadi IT Park with zero-wastage floor plans.',
    status: 'Delivered',
    year: '2016',
    reraNumber: 'MahaRERA: P52100000449',
  },
  {
    title: 'SKYi Iris',
    category: 'Urban & Delivered',
    tagline: '2 & 3 BHK Prime Urban Homes, Baner',
    description: 'Boutique residential community in Baner with high connectivity to Pune University, Aundh, and Balewadi High Street.',
    bgImage: getProjectImage('skyi-iris-baner'),
    scale: 'Prime Urban Landmark',
    configuration: '2 & 3 BHK Contemporary Residences',
    location: 'Baner, Pune',
    amenities: ['Designer Entrance Lobby', 'Solar-Powered Common Utility Grids', 'Rainwater Harvesting & Green Landscapes', 'Dedicated Children Play Haven'],
    seoContent: 'SKYi Iris in Baner, Pune, provides 2 and 3 BHK homes featuring Max Light™ design and high-end urban lifestyle amenities.',
    status: 'Delivered',
    year: '2016',
    reraNumber: 'MahaRERA: P52100019348',
  },
  {
    title: 'Skyi Star City',
    category: 'Townships',
    tagline: '20-Acre Integrated Township, Dhayari',
    description: 'A well-planned community spread across 20 acres with self-sufficient infrastructure and 70% open green spaces in South Pune.',
    bgImage: getProjectImage('skyi-star-city'),
    scale: '20 Acres Integrated Township',
    configuration: '1 & 2 BHK Zero-Wastage Smart Homes',
    location: 'Dhayari, Pune (Near DSK Vishwa)',
    amenities: ['🌳 70% Open & Green Spaces', 'Zero-Wastage Home Designs', 'Dedicated Night Garden', 'On-Campus Retail & Convenience Stores'],
    seoContent: 'SKYi Star City is an integrated 20-acre residential township located in Dhayari, Pune, maximizing usable living space with zero-dead-corridor engineering.',
    status: 'Delivered',
    year: '2012',
    reraNumber: 'MahaRERA: P52100026727 / P52100029481 / P52100029474',
  },
  {
    title: 'Nilay',
    category: 'Urban & Delivered',
    tagline: 'Award-Winning 5-Acre Landmark, Aundh',
    description: 'One of SKYi’s most celebrated heritage developments in Aundh. Spanning 5 acres, Nilay pioneered residences with zero common walls for total acoustic and visual privacy.',
    bgImage: getProjectImage('skyi-nilay'),
    scale: '5-Acre Award-Winning Heritage',
    configuration: 'Landmark Residences (Zero Common Walls)',
    location: 'Aundh, Pune',
    amenities: ['🏆 Awarded Best Residential Architecture', 'Zero Common Walls Between Apartments', 'Lush Mature Tree Groves & Gardens', 'Serene Low-Density Living'],
    seoContent: 'Nilay by SKYi in Aundh, Pune, is an award-winning residential landmark spanning 5 acres, designed with zero shared walls for supreme privacy and ventilation.',
    status: 'Delivered',
    year: 'Delivered Heritage',
    reraNumber: 'Fully Delivered Heritage Community',
  },
  {
    title: 'Aquila',
    category: 'Urban & Delivered',
    tagline: 'Split-Level Luxury Townhouses, Baner',
    description: 'Spanning 60,000 sq.ft. of prime land in Baner, Aquila features European-inspired split-level luxury townhouses with private courtyards and dedicated internal roadways.',
    bgImage: getProjectImage('skyi-aquila'),
    scale: '60,000 Sq.Ft. Luxury Townhouse Enclave',
    configuration: 'Split-Level Signature Luxury Townhouses',
    location: 'Baner, Pune',
    amenities: ['🏡 European-Inspired Split-Level Architecture', 'Private Landscaped Entry Courtyards', 'Dedicated Covered Parking & Security', 'Prime Baner Central Proximity'],
    seoContent: 'Aquila by SKYi in Baner, Pune, offers split-level luxury townhouses with private courtyard access and zero common walls.',
    status: 'Delivered',
    year: 'Delivered Heritage',
    reraNumber: 'Fully Delivered Luxury Enclave',
  },
  {
    title: 'Seher',
    category: 'Urban & Delivered',
    tagline: 'Signature Luxury Enclave, Baner',
    description: 'Premier residential enclave in Baner engineered with Max Light™ design, private terraces, and serene landscaped surroundings.',
    bgImage: getProjectImage('skyi-seher'),
    scale: 'Boutique Luxury Enclave',
    configuration: 'Luxury 3 BHK Residences with Private Terraces',
    location: 'Baner, Pune',
    amenities: ['Private Landscaped Terraces', 'Max Light™ Daylighting Engineering', 'Central Garden & Children Play Zone', 'Covered Car Parking & Security'],
    seoContent: 'Seher by SKYi in Baner, Pune, is an exclusive delivered residential enclave featuring spacious 3 BHK residences with private terraces and abundant daylight.',
    status: 'Delivered',
    year: 'Delivered Heritage',
    reraNumber: 'Fully Delivered Heritage Community',
  },
  {
    title: 'Lighthouse',
    category: 'Urban & Delivered',
    tagline: 'Modern Hill-Facing High-Rise, Bavdhan',
    description: 'Distinctive architectural tower in Bavdhan with expansive glass facades capturing mountain breezes and panoramic Sahyadri views.',
    bgImage: getProjectImage('skyi-lighthouse'),
    scale: 'Panoramic Hill-Facing High-Rise',
    configuration: 'Contemporary 2 & 3 BHK Hill-View Residences',
    location: 'Bavdhan, Pune',
    amenities: ['Panoramic Sahyadri Hill Views', 'Modern High-Rise Architecture', 'Sky Deck & Community Hall', 'Rapid 3-Min Access to Highway'],
    seoContent: 'Lighthouse by SKYi in Bavdhan, Pune, provides contemporary hill-facing apartments designed with expansive glazing and panoramic valley views.',
    status: 'Delivered',
    year: 'Delivered Heritage',
    reraNumber: 'Fully Delivered Heritage Community',
  },
  {
    title: 'Star Town',
    category: 'Urban & Delivered',
    tagline: 'Hillside Residential Enclave, Bhugaon',
    description: 'Peaceful residential development nestled in the scenic foothills of Bhugaon with green open spaces and pure air.',
    bgImage: getProjectImage('skyi-star-town'),
    scale: 'Hillside Residential Enclave',
    configuration: '1 & 2 BHK Foothill Smart Homes',
    location: 'Bhugaon, Paud Road, Pune',
    amenities: ['Scenic Foothills Location', 'Landscaped Courtyards & Walking Trails', 'Clubhouse & Children Play Area', 'Gated Multi-Tier Security'],
    seoContent: 'Star Town by SKYi in Bhugaon, Paud Road, Pune, is a delivered hillside residential community surrounded by Sahyadri foothills and greenery.',
    status: 'Delivered',
    year: 'Delivered Heritage',
    reraNumber: 'Fully Delivered Heritage Community',
  },
  {
    title: 'Five Sopan Baug',
    category: 'Urban & Delivered',
    tagline: 'Flagship Ultra-Luxury Sky Mansions, Sopan Baug',
    description: 'SKYi’s iconic first-edition ultra-luxury development in Sopan Baug featuring exclusive full-floor residences and private elevators.',
    bgImage: getProjectImage('skyi-five-sopanbaug'),
    scale: 'Exclusive Sopan Baug Landmark',
    configuration: '4 & 5 BHK Full-Floor Sky Mansions',
    location: 'Sopan Baug, Pune',
    amenities: ['Full-Floor Privacy & Dedicated Elevators', 'Double-Height Living Rooms & Sundecks', 'Swimming Pool & Concierge Services', 'Prestigious Sopan Baug Address'],
    seoContent: 'Five Sopan Baug by SKYi is a landmark delivered ultra-luxury development in Sopan Baug, Pune, establishing the gold standard of full-floor private residences.',
    status: 'Delivered',
    year: 'Delivered Heritage',
    reraNumber: 'Fully Delivered Landmark Listing',
  },
];

interface PortfolioProps {
  onOpenSiteVisit: (projectTitle?: string) => void;
  onOpenFloorPlan: (projectTitle?: string) => void;
}

/* ─── 3D Tilt Card ─── */
function TiltCard({
  project,
  onExplore,
  onOpenVisit,
  onOpenPlan,
}: {
  project: Project;
  onExplore: () => void;
  onOpenVisit: () => void;
  onOpenPlan: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setTilt({ x, y });
  };

  const onLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="portfolio-card glass"
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) ${
          hovered ? 'scale(1.03)' : 'scale(1)'
        }`,
        transition: hovered
          ? 'transform 0.12s ease'
          : 'transform 0.65s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Crawlable SEO Image */}
      <div className="card-image">
        <img
          src={project.bgImage}
          alt={`${project.title} — ${project.scale} at ${project.location} by SKYi Developers`}
          loading="lazy"
          decoding="async"
          width="600"
          height="340"
          className="card-actual-img"
        />
        <div className="card-image-overlay" />
        <span
          className={`card-status ${
            project.status === 'Ongoing'
              ? 'status-ongoing'
              : project.status === 'Launching Soon'
              ? 'status-launching'
              : 'status-delivered'
          }`}
        >
          {project.status}
        </span>
        <span className="card-year">{project.year}</span>
      </div>

      {/* Content */}
      <div className="card-content">
        <div className="card-location">
          <MapPin size={13} />
          <span>{project.location.split('(')[0].trim()}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="card-tagline" style={{ fontSize: '0.82rem', color: '#f59e0b', fontWeight: 600, margin: '4px 0 8px 0' }}>
          {project.tagline}
        </p>
        <p className="card-desc">{project.description}</p>

        {/* MahaRERA Compliance Pill */}
        <div className="card-rera-pill">
          <ShieldCheck size={13} className="text-emerald-400" />
          <span>{project.reraNumber.split('/')[0].trim()}</span>
        </div>

        <div className="card-config">
          <Home size={13} />
          <span>{project.configuration}</span>
        </div>

        <div className="card-actions-row">
          <button className="card-action-btn secondary" onClick={onOpenPlan}>
            <FileText size={13} /> Floor Plans
          </button>
          <button className="card-action-btn primary" onClick={onOpenVisit}>
            <Calendar size={13} /> Book Visit
          </button>
        </div>

        <button className="explore-btn" onClick={onExplore}>
          Explore Full Details <ArrowRight size={14} className="arrow" />
        </button>
      </div>

      {/* Hover glow */}
      <div className="card-hover-glow" />
    </motion.div>
  );
}

/* ─── Main Component ─── */
export default function Portfolio({ onOpenSiteVisit, onOpenFloorPlan }: PortfolioProps) {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All');

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  const filteredProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const CATEGORY_TABS: Array<'All' | ProjectCategory> = [
    'All',
    'Townships',
    'Ultra Luxury ("Five")',
    'Hillside & Club',
    'Urban & Delivered',
  ];

  return (
    <section className="portfolio" id="portfolio">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
      >
        <span className="section-subtitle">Master Project Directory</span>
        <h2 className="section-title">
          The SKYi Master Portfolio<br />
          <span className="gradient-text">Crafted Around Life. Shaped by Light &amp; Space.</span>
        </h2>
        <p style={{ maxWidth: '750px', margin: '14px auto 0', color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>
          Explore our certified IGBC Platinum eco-townships, signature “FIVE” ultra-luxury collection across Pune &amp; Mumbai, and hillside residences nestled against the Sahyadri mountains.
        </p>
        <div className="glow-line" style={{ margin: '18px auto 0' }} />

        {/* Filter buttons */}
        <div className="portfolio-filter-tabs">
          {CATEGORY_TABS.map((cat) => (
            <button
              key={cat}
              className={`port-filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'All' ? 'All Projects (14)' : cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div className="portfolio-grid" layout>
        {filteredProjects.map((p) => (
          <TiltCard
            key={p.title}
            project={p}
            onExplore={() => setSelected(p)}
            onOpenVisit={() => onOpenSiteVisit(p.title)}
            onOpenPlan={() => onOpenFloorPlan(p.title)}
          />
        ))}
      </motion.div>

      {/* ── Fullscreen Detail Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
          >
            <div
              className="project-modal-backdrop"
              style={{ backgroundImage: `url(${selected.bgImage})` }}
            />
            <div className="modal-overlay" />

            <motion.div
              className="modal-sheet glass"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close project modal"
              >
                <X size={22} />
              </button>

              <div className="modal-header">
                <p className="modal-location">
                  <MapPin size={14} />
                  {selected.location}
                </p>
                <h2 className="modal-title">{selected.title}</h2>
                <p style={{ color: '#f59e0b', fontSize: '0.95rem', fontWeight: 600, margin: '4px 0 12px 0' }}>
                  {selected.tagline}
                </p>
                <div className="modal-pills">
                  <span className="modal-pill">
                    <Building2 size={13} /> {selected.scale}
                  </span>
                  <span className="modal-pill">
                    <Home size={13} /> {selected.configuration}
                  </span>
                  <span className="modal-pill" style={{ borderColor: 'rgba(245, 158, 11, 0.4)', color: '#fcd34d' }}>
                    <Sparkles size={13} /> {selected.category}
                  </span>
                </div>
              </div>

              <div className="modal-body">
                {/* MahaRERA Legal Registration Box */}
                <div className="modal-rera-highlight">
                  <div className="modal-rera-badge">
                    <ShieldCheck size={18} />
                    <strong>MahaRERA &amp; Legal Sanction</strong>
                  </div>
                  <p className="modal-rera-text">{selected.reraNumber}</p>
                  <a
                    href="https://maharera.maharashtra.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-rera-link"
                  >
                    Verify on MahaRERA Portal (maharera.maharashtra.gov.in) →
                  </a>
                </div>

                <div className="modal-section">
                  <h4 className="modal-section-title">Architectural Overview</h4>
                  <p className="modal-seo">{selected.seoContent}</p>
                </div>

                <div className="modal-section">
                  <h4 className="modal-section-title">Signature Amenities &amp; Max Light™ Features</h4>
                  <div className="modal-amenities">
                    {selected.amenities.map((a) => (
                      <div className="modal-amenity-chip" key={a}>
                        <Star size={13} />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <button
                  className="modal-cta-btn secondary"
                  onClick={() => {
                    const title = selected.title;
                    setSelected(null);
                    onOpenFloorPlan(title);
                  }}
                >
                  <FileText size={16} /> View Floor Plans
                </button>
                <button
                  className="modal-cta-btn primary"
                  onClick={() => {
                    const title = selected.title;
                    setSelected(null);
                    onOpenSiteVisit(title);
                  }}
                >
                  <Calendar size={16} /> Book VIP Site Visit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
