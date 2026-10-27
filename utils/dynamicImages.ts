/**
 * ══════════════════════════════════════════════════════════════════════════════
 * DYNAMIC PROJECT IMAGE ENGINE — NON-REDUNDANT ARCHITECTURAL VISUALS
 * Generates unique vector graphic artwork & dynamic SVG data URIs for all SKYi projects
 * ══════════════════════════════════════════════════════════════════════════════
 */

function createProjectSvgDataUri(
  title: string,
  badgeText: string,
  gradientStart: string,
  gradientEnd: string,
  accentColor: string,
  patternType: 'plots' | 'towers' | 'lake' | 'forest' | 'hillside'
): string {
  const encodedTitle = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const encodedBadge = badgeText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  let patternSvg = '';

  if (patternType === 'plots') {
    // Plotting grid pattern with boundary lines and plot numbers
    patternSvg = `
      <g opacity="0.25">
        <rect x="60" y="80" width="160" height="120" rx="12" fill="none" stroke="${accentColor}" stroke-width="2" stroke-dasharray="6 4"/>
        <text x="140" y="145" fill="${accentColor}" font-size="14" font-weight="bold" text-anchor="middle">PLOT 01 • 2,400 SQ.FT</text>
        <rect x="240" y="80" width="160" height="120" rx="12" fill="none" stroke="${accentColor}" stroke-width="2" stroke-dasharray="6 4"/>
        <text x="320" y="145" fill="${accentColor}" font-size="14" font-weight="bold" text-anchor="middle">PLOT 02 • 3,200 SQ.FT</text>
        <rect x="60" y="220" width="340" height="100" rx="12" fill="none" stroke="${accentColor}" stroke-width="2"/>
        <text x="230" y="275" fill="${accentColor}" font-size="13" font-weight="bold" text-anchor="middle">40FT CONCRETE AVENUE • PMRDA R-ZONE</text>
      </g>
    `;
  } else if (patternType === 'lake') {
    // Water wave & lakefront promenade pattern
    patternSvg = `
      <g opacity="0.3">
        <path d="M0,220 C150,180 350,260 500,210 L500,340 L0,340 Z" fill="${accentColor}" />
        <path d="M0,260 C180,230 320,290 500,250 L500,340 L0,340 Z" fill="#38bdf8" opacity="0.5"/>
        <circle cx="380" cy="110" r="45" fill="${accentColor}" opacity="0.2" />
      </g>
    `;
  } else if (patternType === 'forest') {
    // Forest tree canopy & hill contours
    patternSvg = `
      <g opacity="0.25">
        <path d="M-50,300 Q120,160 280,240 T550,180 L550,340 L-50,340 Z" fill="${accentColor}" />
        <polygon points="80,220 110,160 140,220" fill="${accentColor}" />
        <polygon points="120,240 150,180 180,240" fill="${accentColor}" />
        <polygon points="340,210 370,150 400,210" fill="${accentColor}" />
      </g>
    `;
  } else if (patternType === 'hillside') {
    // Hillside deck villa silhouette
    patternSvg = `
      <g opacity="0.3">
        <path d="M0,280 L180,180 L380,240 L500,160 L500,340 L0,340 Z" fill="${accentColor}" />
        <rect x="200" y="140" width="120" height="70" rx="8" fill="none" stroke="${accentColor}" stroke-width="2"/>
        <line x1="200" y1="175" x2="320" y2="175" stroke="${accentColor}" stroke-width="2"/>
      </g>
    `;
  } else {
    // High-rise glass tower architecture facade
    patternSvg = `
      <g opacity="0.25">
        <rect x="120" y="60" width="100" height="260" rx="8" fill="none" stroke="${accentColor}" stroke-width="2"/>
        <line x1="120" y1="120" x2="220" y2="120" stroke="${accentColor}" stroke-width="1.5"/>
        <line x1="120" y1="180" x2="220" y2="180" stroke="${accentColor}" stroke-width="1.5"/>
        <line x1="120" y1="240" x2="220" y2="240" stroke="${accentColor}" stroke-width="1.5"/>
        <rect x="250" y="100" width="120" height="220" rx="8" fill="none" stroke="${accentColor}" stroke-width="2"/>
      </g>
    `;
  }

  const rawSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 340" width="500" height="340" fill="none">
      <defs>
        <linearGradient id="cardBg" x1="0" y1="0" x2="500" y2="340" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${gradientStart}" />
          <stop offset="100%" stop-color="${gradientEnd}" />
        </linearGradient>
      </defs>
      <rect width="500" height="340" rx="16" fill="url(#cardBg)" />
      ${patternSvg}
      
      <!-- Overlay Card Badge -->
      <rect x="24" y="24" width="220" height="32" rx="16" fill="rgba(0,0,0,0.5)" stroke="${accentColor}" stroke-width="1.5"/>
      <text x="36" y="45" fill="${accentColor}" font-size="11" font-weight="bold" font-family="system-ui, sans-serif" letter-spacing="1">${encodedBadge}</text>

      <!-- Project Title overlay -->
      <text x="24" y="295" fill="#ffffff" font-size="20" font-weight="800" font-family="system-ui, sans-serif">${encodedTitle}</text>
      <text x="24" y="318" fill="#94a3b8" font-size="12" font-weight="600" font-family="system-ui, sans-serif">SKYi Developers • Featured Development</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(rawSvg)}`;
}

export const DYNAMIC_PROJECT_IMAGES: Record<string, string> = {
  // Real static assets with optimized dimensions for Googlebot & Open Graph
  'skyi-songbirds': '/images/projects/skyi-songbirds.webp',
  'skyi-manas-lake-apartment': '/images/projects/skyi-manas-lake.webp',
  'skyi-manas-lake-na-plots': '/images/projects/skyi-manas-lake-na-plots.jpg',
  'skyi-tigers-nest-bhugaon': '/images/projects/skyi-tigers-nest.webp',
  'skyi-five-racecourse': '/images/projects/skyi-five-racecourse.webp',
  'skyi-five-maidan': '/images/projects/skyi-five-maidan.webp',
  'skyi-star-city-dhayari': '/images/projects/skyi-star-city.webp',
  'skyi-park-iris-baner': '/images/projects/skyi-iris-baner.webp',
  'skyi-pwc-towers': '/images/projects/skyi-songbirds-club.webp',
  'skyi-five-aguada': createProjectSvgDataUri(
    'Five Aguada by SKYi',
    'BANDSTAND BANDRA MUMBAI',
    '#051525',
    '#020b14',
    '#f59e0b',
    'lake'
  ),
  'skyi-aura-heights': '/images/projects/skyi-tigers-nest.webp',
  'skyi-iris-riverside': '/images/projects/skyi-iris-baner.webp',
  'skyi-nilay-aundh': createProjectSvgDataUri(
    'Nilay by SKYi',
    'AUNDH PUNE • DELIVERED',
    '#0f172a',
    '#020617',
    '#38bdf8',
    'forest'
  ),
  'skyi-aquila-baner': createProjectSvgDataUri(
    'Aquila Townhouses by SKYi',
    'BANER PUNE • DELIVERED',
    '#18181b',
    '#09090b',
    '#eab308',
    'towers'
  ),
  'skyi-star-town-na-plots': createProjectSvgDataUri(
    'SKYi Star Town NA Plots',
    'BHUGAON VILLA PLOTS',
    '#1c132b',
    '#090514',
    '#ffd700',
    'plots'
  ),
  'skyi-pirangut-valley-na-plots': createProjectSvgDataUri(
    'SKYi Valley NA Estate',
    'PIRANGUT NA PLOTS',
    '#0a2218',
    '#040d09',
    '#34d399',
    'plots'
  ),
  'skyi-lakeside-meadows-kasarsai': createProjectSvgDataUri(
    'SKYi Lakeside Meadows',
    'KASARSAI DAM LAKEFRONT',
    '#032236',
    '#010e17',
    '#38bdf8',
    'lake'
  ),
  'skyi-ridge-sus-bavdhan': createProjectSvgDataUri(
    'SKYi Ridge Villa Plots',
    'SUS-BAVDHAN URBAN PLOTS',
    '#210f33',
    '#0b0414',
    '#c084fc',
    'plots'
  ),
  'skyi-breeze-talegaon': createProjectSvgDataUri(
    'SKYi Breeze Eco Estate',
    'TALEGAON EXPRESSWAY',
    '#0e2621',
    '#05120f',
    '#2dd4bf',
    'forest'
  ),
  'skyi-waterside-khadakwasla': createProjectSvgDataUri(
    'SKYi Waterside Resort',
    'KHADAKWASLA DAM RESORT',
    '#091d36',
    '#030a14',
    '#60a5fa',
    'lake'
  ),
  'skyi-eastgate-wagholi': createProjectSvgDataUri(
    'SKYi Eastgate Sector',
    'WAGHOLI KHARADII IT LINK',
    '#1a102b',
    '#080312',
    '#a855f7',
    'plots'
  ),
};

export function getProjectImage(projectIdOrTitle: string): string {
  const normalizedKey = projectIdOrTitle.toLowerCase().replace(/[^a-z0-9]/g, '-');
  
  if (DYNAMIC_PROJECT_IMAGES[normalizedKey]) {
    return DYNAMIC_PROJECT_IMAGES[normalizedKey];
  }

  // Matching heuristics
  if (normalizedKey.includes('aguada')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-five-aguada'];
  }
  if (normalizedKey.includes('racecourse')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-five-racecourse'];
  }
  if (normalizedKey.includes('maidan')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-five-maidan'];
  }
  if (normalizedKey.includes('nilay')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-nilay-aundh'];
  }
  if (normalizedKey.includes('aquila')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-aquila-baner'];
  }
  if (normalizedKey.includes('riverside')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-iris-riverside'];
  }
  if (normalizedKey.includes('aura')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-aura-heights'];
  }
  if (normalizedKey.includes('songbirds')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-songbirds'];
  }
  if (normalizedKey.includes('manas-lake')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-manas-lake-apartment'];
  }
  if (normalizedKey.includes('star-town')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-star-town-na-plots'];
  }
  if (normalizedKey.includes('kasarsai') || normalizedKey.includes('meadows')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-lakeside-meadows-kasarsai'];
  }
  if (normalizedKey.includes('pirangut') || normalizedKey.includes('valley')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-pirangut-valley-na-plots'];
  }
  if (normalizedKey.includes('sus') || normalizedKey.includes('ridge')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-ridge-sus-bavdhan'];
  }
  if (normalizedKey.includes('talegaon') || normalizedKey.includes('breeze')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-breeze-talegaon'];
  }
  if (normalizedKey.includes('khadakwasla') || normalizedKey.includes('waterside')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-waterside-khadakwasla'];
  }
  if (normalizedKey.includes('wagholi') || normalizedKey.includes('eastgate')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-eastgate-wagholi'];
  }
  if (normalizedKey.includes('baner') || normalizedKey.includes('iris') || normalizedKey.includes('park')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-park-iris-baner'];
  }
  if (normalizedKey.includes('dhayari') || normalizedKey.includes('star-city')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-star-city-dhayari'];
  }
  if (normalizedKey.includes('tigers-nest') || normalizedKey.includes('aura')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-tigers-nest-bhugaon'];
  }
  if (normalizedKey.includes('pwc')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-pwc-towers'];
  }

  return DYNAMIC_PROJECT_IMAGES['skyi-manas-lake-na-plots'];
}
