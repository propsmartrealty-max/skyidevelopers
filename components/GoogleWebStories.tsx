'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Pause,
  Share2,
  ExternalLink,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import './GoogleWebStories.css';

export interface WebStorySlide {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  ctaText: string;
  ctaLink?: string;
  ctaAction?: 'site-visit' | 'whatsapp' | 'call' | 'navigate';
  metricBadge?: { label: string; value: string };
}

export interface WebStory {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  location: string;
  priceStarting: string;
  tag: string;
  tagColor: string;
  ringGradient: string;
  slides: WebStorySlide[];
  viewsCount: string;
}

export const SKYI_GOOGLE_WEB_STORIES: WebStory[] = [
  /* ── 1. Skyi Songbirds (1 BHK New Launch & Township) ── */
  {
    id: 'story-songbirds-1bhk',
    title: 'Skyi Songbirds — 1 BHK New Launch',
    category: 'Eco-Township & Smart Homes',
    coverImage: '/songbirds-1.webp',
    location: 'Bhugaon Foothills, Paud Road',
    priceStarting: '₹38 Lakhs*',
    tag: '🔥 NEW LAUNCH',
    tagColor: '#ff6b35',
    ringGradient: 'linear-gradient(135deg, #ff6b35, #ffd700, #ff4081)',
    viewsCount: '14.2k views',
    slides: [
      {
        id: 'sb-s1',
        badge: '45-ACRE ZERO-WASTE TOWNSHIP',
        title: 'Skyi Songbirds Eco-Township',
        subtitle: 'Bhugaon Foothills, Paud Road, Pune',
        description: 'Overlooking 7,000-acre NDA forest reserve with 180° uninterrupted valley views. Home to over 2,000 happy resident families.',
        highlights: [
          '45-Acre Master-Planned Sanctuary',
          '7,000-Acre NDA Forest Panorama',
          'Zero Waste STP & Solar Power Grid',
        ],
        image: '/songbirds-1.webp',
        ctaText: 'Explore Eco-Township',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Green Certification', value: 'IGBC Platinum' },
      },
      {
        id: 'sb-s2',
        badge: '🔥 EXCLUSIVE NEW RELEASE',
        title: 'Smart 1 BHK Eco-Homes (430 Sq.Ft.)',
        subtitle: 'Starting from ₹38 Lakhs*',
        description: 'Precision-engineered on Zero-Dead-Space principles. Maximizing usable carpet area with private scenic balconies facing lush green hills.',
        highlights: [
          '430 Sq.Ft. Usable RERA Carpet Area',
          'Scenic Hillside Balcony Deck',
          'Zero Space Wastage Architecture',
        ],
        image: '/songbirds-2.webp',
        ctaText: 'View 1 BHK Floor Plan',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Starting Price', value: '₹38 Lakhs*' },
      },
      {
        id: 'sb-s3',
        badge: '5-ACRE SPORTS CLUB ON CAMPUS',
        title: 'Poona Western Club (PWC)',
        subtitle: 'Championship Sports Infrastructure',
        description: 'Direct complimentary club access including full Olympic-length swimming pool, cricket pitch, squash, and tennis academies.',
        highlights: [
          'Olympic 50m Swimming Pool',
          'Professional Cricket Turf',
          'Wellness Spa & Multi-Cuisine Dining',
        ],
        image: '/songbirds-3.webp',
        ctaText: 'Tour Sports Club',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Sports Club', value: '5 Acres' },
      },
      {
        id: 'sb-s4',
        badge: 'CONNECTIVITY & MAHARERA',
        title: '10 Mins to Kothrud Metro',
        subtitle: 'Chandani Chowk & Expressway Link',
        description: 'Effortless commute to Hinjewadi IT Park and Pune-Bangalore Highway via 6-lane Paud Road expressway.',
        highlights: [
          'MahaRERA: P52100000769 / P52100001117',
          '90% Pre-Approved Bank Loans',
          '100% Clear Title Documentation',
        ],
        image: '/songbirds-1.webp',
        ctaText: 'Book VIP Site Visit',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Metro Access', value: '10 Mins' },
      },
    ],
  },

  /* ── 2. SKYi Manas Lake & PMRDA NA Plots ── */
  {
    id: 'story-manas-lake-plots',
    title: 'SKYi Manas Lake — PMRDA NA Plots',
    category: 'Waterfront Villa Plots & Homes',
    coverImage: '/bungalow-plots.jpg',
    location: 'Bhukum Lakeside, Paud Road',
    priceStarting: '₹95 Lakhs*',
    tag: '🌊 PMRDA NA PLOTS',
    tagColor: '#38bdf8',
    ringGradient: 'linear-gradient(135deg, #38bdf8, #3b82f6, #06b6d4)',
    viewsCount: '19.8k views',
    slides: [
      {
        id: 'ml-s1',
        badge: '90-ACRE LAKEFRONT TOWNSHIP',
        title: 'SKYi Manas Lake Sanctuary',
        subtitle: 'Paud Road, Bhukum / Bavdhan, Pune',
        description: 'Pune’s benchmark 90-acre waterfront community with natural lakefront promenade, clean mountain breeze, and IGBC Platinum green standards.',
        highlights: [
          '90+ Acres Integrated Lakefront Layout',
          'Direct Manas Lake Waterline Access',
          '6 Minutes to Chandani Chowk Junction',
        ],
        image: '/bungalow-plots.jpg',
        ctaText: 'Explore Waterfront Sector',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Township Size', value: '90 Acres' },
      },
      {
        id: 'ml-s2',
        badge: 'PMRDA SANCTIONED VILLA PLOTS',
        title: 'Clear Title NA Bungalow Plots',
        subtitle: '2,000 to 5,000+ Sq.Ft. Independent Plots',
        description: 'Collector-approved R-zone residential plotting with separate demarcation, underground utilities, and individual 7/12 extract.',
        highlights: [
          '2,000 - 5,000+ Sq.Ft. Demarcated Plots',
          'Individual 7/12 Extract per Plot',
          'Underground Electrical & Water Lines',
        ],
        image: '/bungalow-plots.jpg',
        ctaText: 'Check Plot Sizes & Rates',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Plot Starting', value: '₹95 Lakhs*' },
      },
      {
        id: 'ml-s3',
        badge: '1.5 FSI ARCHITECTURAL FREEDOM',
        title: 'Build Ground + 2 Floors Villa',
        subtitle: 'Complete Design Independence',
        description: 'Permissible 1.5 FSI allows building your dream custom lakeside villa with private garden, terrace plunge pool, and car porch.',
        highlights: [
          '1.5 Sanctioned FSI Allowance',
          'G+2 Floors Permissible Construction',
          '40ft & 50ft Wide Concrete Avenues',
        ],
        image: '/bungalow-plots.jpg',
        ctaText: 'Get Villa Layout Plans',
        ctaAction: 'site-visit',
        metricBadge: { label: 'FSI Permissible', value: '1.5 FSI' },
      },
      {
        id: 'ml-s4',
        badge: 'LEGAL SECURITY & BANK LOANS',
        title: '100% Clear Title Documentation',
        subtitle: 'Pre-Approved by SBI, HDFC & ICICI',
        description: 'Purchase with complete legal safety. Up to 90% plot purchase and villa construction loans available with nationalized banks.',
        highlights: [
          'PMRDA Sanctioned Collector NA Layout',
          'Zero Encumbrance Legal Guarantee',
          'Immediate 7/12 Mutation on Purchase',
        ],
        image: '/bungalow-plots.jpg',
        ctaText: 'Schedule Plot Inspection',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Bank Approvals', value: 'SBI / HDFC' },
      },
    ],
  },

  /* ── 3. SKYi Tigers Nest (Bhugaon Hillside) ── */
  {
    id: 'story-tigers-nest',
    title: 'SKYi Tigers Nest — Hillside Sanctuaries',
    category: 'Ultra Luxury Hillside 4 BHK',
    coverImage: '/songbirds-3.webp',
    location: 'Bhugaon Hillside, Paud Road',
    priceStarting: '₹1.79 Crores*',
    tag: '🌲 4 BHK SANCTUARY',
    tagColor: '#10b981',
    ringGradient: 'linear-gradient(135deg, #10b981, #059669, #34d399)',
    viewsCount: '11.5k views',
    slides: [
      {
        id: 'tn-s1',
        badge: 'HILLSIDE FOREST PANORAMA',
        title: 'SKYi Tigers Nest Bhugaon',
        subtitle: 'Overlooking 7,000-Acre Protected Forest',
        description: 'Perched high on the Bhugaon hillside with sweeping 180° valley views, pristine air quality, and low-density architecture.',
        highlights: [
          '180° Unhindered Valley Panorama',
          'Zero Noise & Clean Mountain Air',
          '10 Mins to Kothrud Metro Flyover',
        ],
        image: '/songbirds-3.webp',
        ctaText: 'Experience Tigers Nest',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Forest Reserve', value: '7,000 Acres' },
      },
      {
        id: 'tn-s2',
        badge: 'EXPANSIVE 4-BED RESIDENCES',
        title: 'Sprawling 4 BHK Sanctuaries',
        subtitle: '1,650 to 2,800 Sq.Ft. Carpet Area',
        description: 'Ultra-exclusive 4-bed residences starting from ₹1.79 Cr* featuring private sundecks, imported marble, and zero space wastage.',
        highlights: [
          '1,650 - 2,800 Sq.Ft. Living Space',
          'Private Panoramic Balcony Decks',
          'Private Elevator Lobbies',
        ],
        image: '/songbirds-2.webp',
        ctaText: 'Request 4 BHK Brochure',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Starting Price', value: '₹1.79 Cr*' },
      },
      {
        id: 'tn-s3',
        badge: 'HILLTOP CLUB & CONCIERGE',
        title: 'Infinity Pool & Private Club',
        subtitle: 'Five-Star Hospitality Lifestyle',
        description: 'Exclusive heated infinity pool hanging over the valley, wellness lounge, cigar terrace, and 24/7 dedicated concierge.',
        highlights: [
          'Heated Infinity Valley Pool',
          'Exclusive Hilltop Clubhouse',
          'Private Valet & Concierge Desk',
        ],
        image: '/songbirds-3.webp',
        ctaText: 'View Club Amenities',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Lifestyle', value: '5-Star Club' },
      },
      {
        id: 'tn-s4',
        badge: 'MAHARERA & INVESTMENT',
        title: 'RERA P52100000769 Assured',
        subtitle: 'Safe High-Appreciation Real Estate',
        description: 'Strict MahaRERA compliance with pre-approved loans from SBI, HDFC, and ICICI Bank.',
        highlights: [
          'MahaRERA: P52100000769 Registered',
          'Full Architectural Sanction Orders',
          'Timely Delivery Escrow Account',
        ],
        image: '/songbirds-1.webp',
        ctaText: 'Book Private Preview',
        ctaAction: 'site-visit',
        metricBadge: { label: 'RERA Reg.', value: 'P52100000769' },
      },
    ],
  },

  /* ── 4. SKYi Five Racecourse (Sopan Baug) ── */
  {
    id: 'story-five-racecourse',
    title: 'SKYi Five Racecourse — Sky Mansions',
    category: 'Ultra-Luxury Sky Mansions',
    coverImage: '/songbirds-2.webp',
    location: 'Sopan Baug / Racecourse Annexe',
    priceStarting: '₹3.85 Crores*',
    tag: '🏆 4 & 5 BHK MANSIONS',
    tagColor: '#ab47bc',
    ringGradient: 'linear-gradient(135deg, #ab47bc, #8e24aa, #e91e63)',
    viewsCount: '8.9k views',
    slides: [
      {
        id: 'fr-s1',
        badge: 'SOPAN BAUG ELITE ADDRESS',
        title: 'SKYi Five Racecourse',
        subtitle: 'Pune Racecourse Facing Sky Estates',
        description: 'The pinnacle of luxury in Sopan Baug. Panoramic 360° views overlooking the historic Pune Racecourse and green Cantonment belt.',
        highlights: [
          'Prime Sopan Baug Elite Location',
          'Uninterrupted Racecourse Views',
          'Rare Limited Edition Residences',
        ],
        image: '/songbirds-2.webp',
        ctaText: 'Explore Racecourse Estate',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Location', value: 'Sopan Baug' },
      },
      {
        id: 'fr-s2',
        badge: '4 & 5 BHK SKY MANSIONS',
        title: '2,800 to 5,200 Sq.Ft. Estates',
        subtitle: 'Double-Height Living & Private Decks',
        description: 'Sprawling floor plans designed with dual master bedrooms, imported Italian marble, private plunge pools, and family lounges.',
        highlights: [
          '2,800 - 5,200 Sq.Ft. Living Mansions',
          'Private Keycard Elevator Lobbies',
          'Double-Height Viewing Sundecks',
        ],
        image: '/songbirds-3.webp',
        ctaText: 'Download Mansion Plans',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Starting Price', value: '₹3.85 Cr*' },
      },
      {
        id: 'fr-s3',
        badge: 'WHITE-GLOVE CONCIERGE',
        title: '5-Star Hospitality Standard',
        subtitle: 'Sommelier Lounge & Rooftop Pool',
        description: 'Private chauffeur lounge, temperature-controlled sky pool, wellness spa, and round-the-clock bespoke hospitality service.',
        highlights: [
          'Temperature-Controlled Sky Pool',
          'Private Sommelier & Dining Lounge',
          '24/7 White-Glove Butler Concierge',
        ],
        image: '/songbirds-1.webp',
        ctaText: 'Schedule Mansion Tour',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Hospitality', value: 'Bespoke' },
      },
      {
        id: 'fr-s4',
        badge: 'CLEAR TITLE & RERA REGISTERED',
        title: 'Pre-Approved Private Wealth Loans',
        subtitle: 'Centrally Located Near Koregaon Park',
        description: 'Quick connectivity to Pune Railway Station, Airport, and MG Road with MahaRERA registered architectural layouts.',
        highlights: [
          'MahaRERA Sanctioned Architecture',
          'Private Wealth Banking Approved',
          'Highest Capital Appreciation Asset',
        ],
        image: '/songbirds-2.webp',
        ctaText: 'Request Private Briefing',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Central Pune', value: 'Prime' },
      },
    ],
  },

  /* ── 5. SKYi Five Maidan (Baner) ── */
  {
    id: 'story-five-maidan',
    title: 'SKYi Five Maidan — Baner Luxury',
    category: 'Urban Luxury Residences',
    coverImage: '/songbirds-1.webp',
    location: 'Pancard Club Road, Baner',
    priceStarting: '₹2.45 Crores*',
    tag: '💎 4 BHK LUXURY',
    tagColor: '#00e5ff',
    ringGradient: 'linear-gradient(135deg, #00e5ff, #00b0ff, #2979ff)',
    viewsCount: '13.4k views',
    slides: [
      {
        id: 'fm-s1',
        badge: 'PANCARD CLUB ROAD BANER',
        title: 'SKYi Five Maidan Baner',
        subtitle: 'Prime Urban Sanctuary in West Pune',
        description: 'Nestled on coveted Pancard Club Road. Surrounded by greenery with instant walking access to Baner High Street and gourmet dining.',
        highlights: [
          'Pancard Club Road Baner Address',
          '3 Mins to Baner High Street',
          'Direct Link to Mumbai-Pune Highway',
        ],
        image: '/songbirds-1.webp',
        ctaText: 'Explore Five Maidan',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Micro-Market', value: 'Baner Prime' },
      },
      {
        id: 'fm-s2',
        badge: '4 BHK RESIDENCES',
        title: '2,100 to 3,200 Sq.Ft. Spaces',
        subtitle: 'Engineered for Elite Family Living',
        description: 'Spacious 4-bed residences with wide panoramic living balconies, separate servant quarters, and imported fixtures.',
        highlights: [
          '2,100 - 3,200 Sq.Ft. Carpet Area',
          'Cross-Ventilated Three-Side Open',
          'Smart Home Automation Controls',
        ],
        image: '/songbirds-2.webp',
        ctaText: 'View 4 BHK Floor Plan',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Starting Price', value: '₹2.45 Cr*' },
      },
      {
        id: 'fm-s3',
        badge: 'SKYLINE AMENITIES',
        title: 'Rooftop Sky Lounge & Club',
        subtitle: 'Fitness Studio & EV Charging',
        description: 'Curated rooftop leisure facilities, yoga pavilion, high-speed elevators, and EV charging provisions at parking bays.',
        highlights: [
          'Rooftop Sky Recreation Lounge',
          'High-Tech Fitness Studio',
          'Dedicated EV Charging Stations',
        ],
        image: '/songbirds-3.webp',
        ctaText: 'Tour Amenities',
        ctaAction: 'site-visit',
        metricBadge: { label: 'EV Ready', value: '100% Bays' },
      },
      {
        id: 'fm-s4',
        badge: 'RAPID HINJEWADI COMMUTE',
        title: '15 Mins to Hinjewadi IT Park',
        subtitle: 'Zero Toll Bypass & Metro Connectivity',
        description: 'Save hours daily with direct highway access to Balewadi High Street, Hinjewadi Phase 1, and upcoming Metro corridor.',
        highlights: [
          'MahaRERA Registered Project',
          '15 Mins to Hinjewadi IT Park',
          'Top Tier Bank Loan Pre-Approvals',
        ],
        image: '/songbirds-1.webp',
        ctaText: 'Book VIP Site Visit',
        ctaAction: 'site-visit',
        metricBadge: { label: 'IT Park', value: '15 Mins' },
      },
    ],
  },

  /* ── 6. SKYi Park (Paud Road / Manas Lake) ── */
  {
    id: 'story-park',
    title: 'SKYi Park — Sustainable Living',
    category: 'Eco-Centric 2 & 3 BHK',
    coverImage: '/songbirds-2.webp',
    location: 'Paud Road / Manas Lake Belt',
    priceStarting: '₹65 Lakhs*',
    tag: '🌿 2 & 3 BHK ECO',
    tagColor: '#84cc16',
    ringGradient: 'linear-gradient(135deg, #84cc16, #65a30d, #4d7c0f)',
    viewsCount: '10.1k views',
    slides: [
      {
        id: 'pk-s1',
        badge: 'IGBC GOLD SUSTAINABILITY',
        title: 'SKYi Park Eco-Residences',
        subtitle: 'Paud Road, Bhugaon / Bhukum Belt',
        description: 'Built around life with solar panels, rainwater harvesting, zero wastage layout design, and scenic green mountain backdrop.',
        highlights: [
          'IGBC Gold Green Certified',
          'Solar Photovoltaic Power Grid',
          '70% Open Landscaped Spaces',
        ],
        image: '/songbirds-2.webp',
        ctaText: 'Explore Green Homes',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Rating', value: 'IGBC Gold' },
      },
      {
        id: 'pk-s2',
        badge: 'OPTIMIZED 2 & 3 BHK HOMES',
        title: '780 to 1,450 Sq.Ft. Carpet',
        subtitle: 'Starting from ₹65 Lakhs*',
        description: 'Spacious living rooms opening onto scenic sundecks, cross-ventilated bedrooms, and functional modular utility spaces.',
        highlights: [
          '780 - 1,450 Sq.Ft. Usable Space',
          'Mountain & Lake Facing Decks',
          'Zero Hallway Space Wastage',
        ],
        image: '/songbirds-1.webp',
        ctaText: 'Check Price & Cost Sheet',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Starting Price', value: '₹65 Lakhs*' },
      },
      {
        id: 'pk-s3',
        badge: 'MAHARERA & READY PHASES',
        title: 'Delivered & Ongoing Phases',
        subtitle: 'MahaRERA: P52100000449',
        description: 'Complete peace of mind with legal documentation, occupancy certificate received towers, and verified MahaRERA compliance.',
        highlights: [
          'MahaRERA: P52100000449',
          'Occupancy Certificate Received Phases',
          'Approved by SBI, HDFC & ICICI',
        ],
        image: '/songbirds-3.webp',
        ctaText: 'Schedule Visit Today',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Handover', value: 'Ready / New' },
      },
    ],
  },

  /* ── 7. SKYi PWC Towers & Hillside (Club Living) ── */
  {
    id: 'story-pwc-towers',
    title: 'SKYi PWC Towers — Sports Club Homes',
    category: 'Club-Integrated Residences',
    coverImage: '/songbirds-1.webp',
    location: 'Songbirds Campus, Bhugaon',
    priceStarting: '₹1.15 Crores*',
    tag: '🏊 CLUB HOMES',
    tagColor: '#f59e0b',
    ringGradient: 'linear-gradient(135deg, #f59e0b, #d97706, #b45309)',
    viewsCount: '12.8k views',
    slides: [
      {
        id: 'pwc-s1',
        badge: 'INTEGRATED WITH 5-ACRE CLUB',
        title: 'SKYi PWC Towers & Hillside',
        subtitle: 'Live Inside Poona Western Club',
        description: 'India’s celebrated residential development directly integrated into a 5-acre sports club with Olympic pool and professional academies.',
        highlights: [
          'Direct Poona Western Club Access',
          'Olympic 50m Swimming Pool',
          'Tennis, Cricket & Badminton Academies',
        ],
        image: '/songbirds-1.webp',
        ctaText: 'Tour Club Residences',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Club Campus', value: '5 Acres' },
      },
      {
        id: 'pwc-s2',
        badge: '3 & 4 BHK CLUB RESIDENCES',
        title: '1,250 to 2,100 Sq.Ft. Living',
        subtitle: 'Starting from ₹1.15 Crores*',
        description: 'Hillside balconies fronting green sports grounds and NDA forest canopy. Designed for health-conscious modern families.',
        highlights: [
          '1,250 - 2,100 Sq.Ft. Carpet Plans',
          'Acoustically Insulated Glazing',
          'Large Sunlit Decks with Valley View',
        ],
        image: '/songbirds-2.webp',
        ctaText: 'Download Floor Plans',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Starting Price', value: '₹1.15 Cr*' },
      },
      {
        id: 'pwc-s3',
        badge: 'MAHARERA REGISTERED',
        title: 'P52100000643 & P52100000805',
        subtitle: '10 Mins to Kothrud & Metro',
        description: 'Established community of over 500 sports-loving families with on-campus fitness trainers and wellness dining.',
        highlights: [
          'MahaRERA: P52100000643 / P52100000805',
          '10 Mins from Kothrud Metro Flyover',
          'Full Bank Loan Sanctions',
        ],
        image: '/songbirds-3.webp',
        ctaText: 'Book VIP Site Visit',
        ctaAction: 'site-visit',
        metricBadge: { label: 'RERA Assured', value: 'Compliant' },
      },
    ],
  },

  /* ── 8. SKYi Star City (Dhayari) ── */
  {
    id: 'story-star-city',
    title: 'SKYi Star City — Dhayari Township',
    category: '20-Acre Integrated Township',
    coverImage: '/songbirds-3.webp',
    location: 'Dhayari, Sinhagad Road',
    priceStarting: '₹42 Lakhs*',
    tag: '⭐ 20-ACRE TOWNSHIP',
    tagColor: '#ec4899',
    ringGradient: 'linear-gradient(135deg, #ec4899, #db2777, #be185d)',
    viewsCount: '16.7k views',
    slides: [
      {
        id: 'sc-s1',
        badge: '20-ACRE INTEGRATED TOWNSHIP',
        title: 'SKYi Star City Dhayari',
        subtitle: 'South-West Pune Self-Sufficient Living',
        description: '20-acre master-planned green township with 70% open spaces, scenic Sinhagad hillside breeze, and vibrant community living.',
        highlights: [
          '20-Acre Master-Planned Township',
          'Over 1,500 Families Residing',
          '70% Open Space & Night Gardens',
        ],
        image: '/songbirds-3.webp',
        ctaText: 'Explore Star City',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Township', value: '20 Acres' },
      },
      {
        id: 'sc-s2',
        badge: 'VALUE & PREMIUM HOMES',
        title: '1, 2 & 3 BHK Smart Homes',
        subtitle: 'Starting from ₹42 Lakhs*',
        description: 'Intelligently planned 450 to 1,100 Sq.Ft. apartments maximizing living comfort and storage with zero dead space.',
        highlights: [
          '1 BHK Smart Homes from ₹42L*',
          '2 & 3 BHK Family Residences',
          'Scenic Hillside Balconies',
        ],
        image: '/songbirds-1.webp',
        ctaText: 'Check Price List',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Starting Price', value: '₹42 Lakhs*' },
      },
      {
        id: 'sc-s3',
        badge: 'ALL AMENITIES ON CAMPUS',
        title: 'Retail Plaza & Temple Grounds',
        subtitle: 'Amphitheatre & Senior Citizen Pavilions',
        description: 'Everything you need without leaving your township gates: daily shopping, clubhouse, gymnasium, children’s play, and sports courts.',
        highlights: [
          'On-Campus Shopping Plaza',
          'Ganesh Mandir & Cultural Lawn',
          '15 Mins to Swargate & Highway',
        ],
        image: '/songbirds-2.webp',
        ctaText: 'Schedule Visit in Dhayari',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Families', value: '1,500+' },
      },
    ],
  },

  /* ── 9. SKYi Aura Heights (Bavdhan / Bhugaon) ── */
  {
    id: 'story-aura-heights',
    title: 'SKYi Aura Heights — Hillside Views',
    category: 'Hillside View Residences',
    coverImage: '/songbirds-2.webp',
    location: 'Bavdhan / Bhugaon Hillside',
    priceStarting: '₹95 Lakhs*',
    tag: '🌄 3 BHK HILLSIDE',
    tagColor: '#a855f7',
    ringGradient: 'linear-gradient(135deg, #a855f7, #9333ea, #7e22ce)',
    viewsCount: '9.3k views',
    slides: [
      {
        id: 'ah-s1',
        badge: 'ELEVATED HILLTOP PLACEMENT',
        title: 'SKYi Aura Heights',
        subtitle: '6 Mins from Chandani Chowk',
        description: 'Elevated residential towers above the city bustle with panoramic natural valley views and pristine mountain air.',
        highlights: [
          'Elevated Hilltop Placement',
          'Panoramic Valley Decks',
          '6 Mins to Bavdhan & Highway',
        ],
        image: '/songbirds-2.webp',
        ctaText: 'Explore Aura Heights',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Chandani Chowk', value: '6 Mins' },
      },
      {
        id: 'ah-s2',
        badge: '3 BHK HILLSIDE HOMES',
        title: '1,150 to 1,580 Sq.Ft. Carpet',
        subtitle: 'Starting from ₹95 Lakhs*',
        description: 'Spacious three-bedroom configurations with cross-ventilation, panoramic decks, and premium branded finishes.',
        highlights: [
          'Zero-Dead-Space Layouts',
          'Double-Glazed Panoramic Decks',
          'Rooftop Stargazing Terrace',
        ],
        image: '/songbirds-3.webp',
        ctaText: 'Download 3 BHK Plan',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Starting Price', value: '₹95 Lakhs*' },
      },
      {
        id: 'ah-s3',
        badge: 'MAHARERA & LEGAL SECURITY',
        title: 'Clear Title Documentation',
        subtitle: 'Approved by Nationalized Banks',
        description: 'Transparent buying process with complete MahaRERA compliance and fast home loan sanction support.',
        highlights: [
          'MahaRERA Registered Extension',
          'Pre-Approved Home Loans',
          'High Capital Growth Corridor',
        ],
        image: '/songbirds-1.webp',
        ctaText: 'Book Private Preview',
        ctaAction: 'site-visit',
        metricBadge: { label: 'RERA Assured', value: '100%' },
      },
    ],
  },

  /* ── 10. SKYi Delivered Landmarks (7,000+ Homes) ── */
  {
    id: 'story-delivered-landmarks',
    title: 'SKYi Delivered Legacy — 7,000+ Homes',
    category: 'Delivered Architectural Legacy',
    coverImage: '/songbirds-1.webp',
    location: 'Baner, Bavdhan, Aundh, Pune',
    priceStarting: 'Delivered Heritage',
    tag: '🏛️ 20+ LANDMARKS',
    tagColor: '#ffd700',
    ringGradient: 'linear-gradient(135deg, #ffd700, #ffb300, #ff8f00)',
    viewsCount: '22.4k views',
    slides: [
      {
        id: 'dl-s1',
        badge: '20+ YEARS OF EXCELLENCE',
        title: 'SKYi 20-Year Pune Legacy',
        subtitle: 'Building Thoughtful Homes Since 2004',
        description: 'Over two decades of architectural integrity, delivering 7,000+ homes across 20+ landmarks recognized with 150+ industry awards.',
        highlights: [
          'Founded 2004 in Pune',
          'Over 7,000 Homes Delivered',
          'IGBC Platinum & Gold Certified',
        ],
        image: '/songbirds-1.webp',
        ctaText: 'Explore Delivered Legacy',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Homes Delivered', value: '7,000+' },
      },
      {
        id: 'dl-s2',
        badge: 'DELIVERED URBAN LANDMARKS',
        title: 'Baner, Bavdhan & Aundh Projects',
        subtitle: 'SKYi First, Iris, Seher, Aquila, Nilay',
        description: 'Iconic completed communities where thousands of families thrive today with 100% Occupancy Certificates and clear titles.',
        highlights: [
          'SKYi First & Lighthouse Bavdhan',
          'SKYi Five Baner, Iris & Seher',
          'SKYi Nilay in Prime Aundh',
        ],
        image: '/songbirds-2.webp',
        ctaText: 'View Landmark Directory',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Occupancy (OC)', value: '100% Received' },
      },
      {
        id: 'dl-s3',
        badge: 'TRUSTED BY GLOBAL NRI CLIENTS',
        title: 'Lifetime Customer Support',
        subtitle: 'Digital Escrow & FEMA Compliance',
        description: 'Global NRIs from USA, UAE, UK, and Singapore trust SKYi for transparent transactions, asset appreciation, and clear legal titles.',
        highlights: [
          'FEMA & RBI Guidelines Compliant',
          'Dedicated NRI VIP Concierge',
          'Comprehensive Resale & Rental Desk',
        ],
        image: '/songbirds-3.webp',
        ctaText: 'Connect with SKYi Team',
        ctaAction: 'site-visit',
        metricBadge: { label: 'Global Clients', value: '1,200+ NRIs' },
      },
    ],
  },
];

interface GoogleWebStoriesProps {
  onOpenSiteVisit?: (projectName?: string) => void;
}

export default function GoogleWebStories({ onOpenSiteVisit }: GoogleWebStoriesProps) {
  const [activeStory, setActiveStory] = useState<WebStory | null>(null);
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const trayRef = useRef<HTMLDivElement>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION_MS = 5500;
  const TICK_INTERVAL_MS = 50;

  // Scroll story tray
  const scrollTray = (direction: 'left' | 'right') => {
    if (trayRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      trayRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Open story player
  const openStory = (story: WebStory) => {
    setActiveStory(story);
    setActiveSlideIdx(0);
    setProgress(0);
    setIsPaused(false);
  };

  // Close story player
  const closeStory = useCallback(() => {
    setActiveStory(null);
    setActiveSlideIdx(0);
    setProgress(0);
    setIsPaused(false);
  }, []);

  // Next slide
  const nextSlide = useCallback(() => {
    if (!activeStory) return;
    if (activeSlideIdx < activeStory.slides.length - 1) {
      setActiveSlideIdx((prev) => prev + 1);
      setProgress(0);
    } else {
      // If last slide of current story, move to next story or close
      const currentStoryIndex = SKYI_GOOGLE_WEB_STORIES.findIndex((s) => s.id === activeStory.id);
      if (currentStoryIndex < SKYI_GOOGLE_WEB_STORIES.length - 1) {
        const nextStory = SKYI_GOOGLE_WEB_STORIES[currentStoryIndex + 1];
        setActiveStory(nextStory);
        setActiveSlideIdx(0);
        setProgress(0);
      } else {
        closeStory();
      }
    }
  }, [activeStory, activeSlideIdx, closeStory]);

  // Prev slide
  const prevSlide = useCallback(() => {
    if (!activeStory) return;
    if (activeSlideIdx > 0) {
      setActiveSlideIdx((prev) => prev - 1);
      setProgress(0);
    } else {
      // If first slide, move to prev story's last slide
      const currentStoryIndex = SKYI_GOOGLE_WEB_STORIES.findIndex((s) => s.id === activeStory.id);
      if (currentStoryIndex > 0) {
        const prevStory = SKYI_GOOGLE_WEB_STORIES[currentStoryIndex - 1];
        setActiveStory(prevStory);
        setActiveSlideIdx(prevStory.slides.length - 1);
        setProgress(0);
      }
    }
  }, [activeStory, activeSlideIdx]);

  // Handle CTA action
  const handleCtaClick = (_slide: WebStorySlide) => {
    closeStory();
    if (onOpenSiteVisit) {
      onOpenSiteVisit(activeStory?.title || 'Skyi Songbirds (Bhugaon)');
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Share story
  const handleShare = async () => {
    if (!activeStory) return;
    const shareData = {
      title: activeStory.title,
      text: `Check out ${activeStory.title} by SKYi Developers Pune!`,
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User dismissed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Progress Timer
  useEffect(() => {
    if (!activeStory || isPaused) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        const increment = (TICK_INTERVAL_MS / SLIDE_DURATION_MS) * 100;
        if (prev + increment >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, TICK_INTERVAL_MS);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [activeStory, isPaused, activeSlideIdx, nextSlide]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeStory) return;
      if (e.key === 'Escape') closeStory();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPaused((p) => !p);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStory, closeStory, nextSlide, prevSlide]);

  const currentSlide = activeStory ? activeStory.slides[activeSlideIdx] : null;

  return (
    <section className="google-web-stories-section" id="web-stories" aria-label="Google Web Stories for SKYi Projects">
      {/* ── Schema.org Google Web Stories Microdata ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWorkSeries',
            name: 'SKYi Developers Official Google Web Stories',
            description: 'Interactive visual stories covering Skyi Songbirds, SKYi Manas Lake PMRDA NA Plots, Tigers Nest, Five Racecourse, and Star City Dhayari.',
            publisher: {
              '@type': 'Organization',
              name: 'Skyi Developers',
              url: 'https://skyidevelopers.in/',
              logo: 'https://skyidevelopers.in/favicon.svg',
            },
            hasPart: SKYI_GOOGLE_WEB_STORIES.map((story) => ({
              '@type': 'WebPage',
              name: story.title,
              url: `https://skyidevelopers.in/#story-${story.id}`,
              thumbnailUrl: `https://skyidevelopers.in${story.coverImage}`,
              description: story.slides[0]?.description,
            })),
          }),
        }}
      />

      <div className="web-stories-container">
        {/* Header Strip */}
        <div className="web-stories-header">
          <div className="web-stories-title-wrap">
            <div className="web-stories-badge">
              <span className="amp-lightning-icon">⚡</span>
              <span>GOOGLE WEB STORIES</span>
            </div>
            <h3 className="web-stories-title">
              Visual Project Walkthroughs <span className="gradient-text">&amp; New Launches</span>
            </h3>
            <p className="web-stories-subtitle">
              Tap any story to watch instant mobile-first visual tours of 1 BHK 430 sqft, PMRDA NA villa plots, and luxury hillside residences.
            </p>
          </div>

          <div className="web-stories-nav-arrows">
            <button
              type="button"
              className="story-nav-btn"
              onClick={() => scrollTray('left')}
              aria-label="Previous Stories"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="story-nav-btn"
              onClick={() => scrollTray('right')}
              aria-label="Next Stories"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Story Tray */}
        <div className="web-stories-tray" ref={trayRef}>
          {SKYI_GOOGLE_WEB_STORIES.map((story) => (
            <motion.div
              key={story.id}
              className="story-card-wrapper"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openStory(story)}
              role="button"
              tabIndex={0}
              aria-label={`Open Web Story for ${story.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openStory(story);
                }
              }}
            >
              {/* Outer Ring */}
              <div
                className="story-ring"
                style={{ background: story.ringGradient }}
              >
                {/* 9:16 Preview Card */}
                <div className="story-card-inner">
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="story-card-img"
                    loading="lazy"
                  />
                  <div className="story-card-overlay" />

                  {/* Top Tag */}
                  <div className="story-card-top-tag" style={{ borderColor: story.tagColor }}>
                    <span>{story.tag}</span>
                  </div>

                  {/* Lightning Indicator */}
                  <div className="story-lightning-badge">
                    <span>⚡</span>
                  </div>

                  {/* Bottom Text */}
                  <div className="story-card-info">
                    <span className="story-card-price">{story.priceStarting}</span>
                    <h4 className="story-card-name">{story.title}</h4>
                    <p className="story-card-loc">
                      <MapPin size={11} /> {story.location}
                    </p>
                    <span className="story-card-views">{story.viewsCount}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Google Web Story Fullscreen Player Modal ── */}
      <AnimatePresence>
        {activeStory && currentSlide && (
          <motion.div
            className="story-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="story-player-viewport">
              {/* Progress Bars */}
              <div className="story-progress-strip">
                {activeStory.slides.map((s, idx) => {
                  let barWidth = '0%';
                  if (idx < activeSlideIdx) barWidth = '100%';
                  else if (idx === activeSlideIdx) barWidth = `${progress}%`;

                  return (
                    <div key={s.id} className="story-progress-track">
                      <div
                        className="story-progress-fill"
                        style={{ width: barWidth }}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Story Header Controls */}
              <div className="story-player-header">
                <div className="story-player-brand">
                  <img
                    src={activeStory.coverImage}
                    alt=""
                    className="story-player-avatar"
                  />
                  <div>
                    <span className="story-player-author">SKYi Official • {activeStory.category}</span>
                    <span className="story-player-live">⚡ Google Web Story</span>
                  </div>
                </div>

                <div className="story-player-actions">
                  <button
                    type="button"
                    className="story-control-icon-btn"
                    onClick={() => setIsPaused((p) => !p)}
                    aria-label={isPaused ? 'Play' : 'Pause'}
                  >
                    {isPaused ? <Play size={16} /> : <Pause size={16} />}
                  </button>
                  <button
                    type="button"
                    className="story-control-icon-btn"
                    onClick={handleShare}
                    aria-label="Share Story"
                  >
                    <Share2 size={16} />
                  </button>
                  <button
                    type="button"
                    className="story-control-icon-btn close-btn"
                    onClick={closeStory}
                    aria-label="Close Story"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Story Slide Background Visual */}
              <div className="story-slide-media">
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="story-slide-img"
                />
                <div className="story-slide-vignette" />
              </div>

              {/* Tap navigation zones */}
              <div
                className="story-tap-zone tap-left"
                onClick={prevSlide}
                aria-label="Previous Slide"
              />
              <div
                className="story-tap-zone tap-right"
                onClick={nextSlide}
                aria-label="Next Slide"
              />

              {/* Slide Content Card */}
              <div className="story-slide-content">
                <div className="story-slide-badge">
                  <Sparkles size={13} className="text-amber-400" />
                  <span>{currentSlide.badge}</span>
                </div>

                <h2 className="story-slide-title">{currentSlide.title}</h2>
                <p className="story-slide-sub">{currentSlide.subtitle}</p>

                <p className="story-slide-desc">{currentSlide.description}</p>

                {/* Key Highlights */}
                <div className="story-slide-highlights">
                  {currentSlide.highlights.map((h) => (
                    <div key={h} className="story-highlight-pill">
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Metric Badge if present */}
                {currentSlide.metricBadge && (
                  <div className="story-metric-chip">
                    <span className="metric-chip-label">{currentSlide.metricBadge.label}:</span>
                    <span className="metric-chip-value">{currentSlide.metricBadge.value}</span>
                  </div>
                )}

                {/* Bottom Interactive CTA */}
                <div className="story-cta-wrap">
                  <motion.button
                    type="button"
                    className="story-cta-btn"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleCtaClick(currentSlide)}
                  >
                    <span>{currentSlide.ctaText}</span>
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Desktop Nav Indicators */}
              <button
                type="button"
                className="desktop-side-nav prev"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                type="button"
                className="desktop-side-nav next"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <ChevronRight size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
