/**
 * ══════════════════════════════════════════════════════════════════════════════
 * DYNAMIC PROJECT IMAGE ENGINE — NON-REDUNDANT ORIGINAL ARCHITECTURAL ASSETS
 * Maps each project strictly to its authentic image asset with zero repetition
 * ══════════════════════════════════════════════════════════════════════════════
 */

export const DYNAMIC_PROJECT_IMAGES: Record<string, string> = {
  // Real static project assets
  'skyi-songbirds': '/images/projects/skyi-songbirds.webp',
  'skyi-songbirds-club': '/images/projects/skyi-songbirds-club.webp',
  'skyi-manas-lake': '/images/projects/skyi-manas-lake.webp',
  'skyi-manas-lake-apartment': '/images/projects/skyi-manas-lake.webp',
  'skyi-manas-lake-na-plots': '/images/projects/skyi-manas-lake-na-plots.jpg',
  'skyi-five-racecourse': '/images/projects/skyi-five-racecourse.webp',
  'skyi-five-aguada': '/images/projects/skyi-five-aguada.webp',
  'skyi-five-maidan': '/images/projects/skyi-five-maidan.webp',
  'skyi-five-sopanbaug': '/images/projects/skyi-five-sopanbaug.webp',
  'skyi-tigers-nest': '/images/projects/skyi-tigers-nest.webp',
  'skyi-tigers-nest-bhugaon': '/images/projects/skyi-tigers-nest.webp',
  'skyi-pwc-towers': '/images/projects/skyi-pwc-towers.webp',
  'skyi-pwc-hillside': '/images/projects/skyi-pwc-hillside.webp',
  'skyi-aura-heights': '/images/projects/skyi-aura-heights.webp',
  'skyi-iris-riverside': '/images/projects/skyi-iris-riverside.webp',
  'skyi-star-city': '/images/projects/skyi-star-city.webp',
  'skyi-star-city-dhayari': '/images/projects/skyi-star-city.webp',
  'skyi-star-towers': '/images/projects/skyi-star-towers.webp',
  'skyi-star-town': '/images/projects/skyi-star-town.webp',
  'skyi-park': '/images/projects/skyi-park.webp',
  'skyi-park-iris-baner': '/images/projects/skyi-park.webp',
  'skyi-iris-baner': '/images/projects/skyi-iris-baner.webp',
  'skyi-iris': '/images/projects/skyi-iris-baner.webp',
  'skyi-iris-bavdhan': '/images/projects/skyi-iris-bavdhan.webp',
  'skyi-nilay': '/images/projects/skyi-nilay.webp',
  'skyi-nilay-aundh': '/images/projects/skyi-nilay.webp',
  'skyi-aquila': '/images/projects/skyi-aquila.webp',
  'skyi-aquila-baner': '/images/projects/skyi-aquila.webp',
  'skyi-seher': '/images/projects/skyi-seher.webp',
  'skyi-lighthouse': '/images/projects/skyi-lighthouse.webp',
};

export function getProjectImage(projectIdOrTitle: string): string {
  const normalizedKey = projectIdOrTitle.toLowerCase().replace(/[^a-z0-9]/g, '-');

  // Exact key match first
  if (DYNAMIC_PROJECT_IMAGES[normalizedKey]) {
    return DYNAMIC_PROJECT_IMAGES[normalizedKey];
  }

  // Manas Lake plotting vs apartment
  if (normalizedKey.includes('manas') && (normalizedKey.includes('plot') || normalizedKey.includes('na-plot') || normalizedKey.includes('bungalow'))) {
    return DYNAMIC_PROJECT_IMAGES['skyi-manas-lake-na-plots'];
  }
  if (normalizedKey.includes('manas-lake') || normalizedKey.includes('manaslake')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-manas-lake'];
  }

  // Ultra-Luxury "Five" Collection
  if (normalizedKey.includes('aguada')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-five-aguada'];
  }
  if (normalizedKey.includes('racecourse')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-five-racecourse'];
  }
  if (normalizedKey.includes('maidan')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-five-maidan'];
  }
  if (normalizedKey.includes('sopan') && normalizedKey.includes('baug')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-five-sopanbaug'];
  }

  // Hillside & Club Collection
  if (normalizedKey.includes('tigers-nest') || normalizedKey.includes('tiger')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-tigers-nest'];
  }
  if (normalizedKey.includes('pwc') && normalizedKey.includes('hillside')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-pwc-hillside'];
  }
  if (normalizedKey.includes('pwc') || normalizedKey.includes('poona-western')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-pwc-towers'];
  }
  if (normalizedKey.includes('aura')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-aura-heights'];
  }
  if (normalizedKey.includes('riverside')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-iris-riverside'];
  }

  // Songbirds
  if (normalizedKey.includes('songbirds') || normalizedKey.includes('aria-heights')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-songbirds'];
  }

  // Star City & Star Town (Separate Images!)
  if (normalizedKey.includes('star-city') || normalizedKey.includes('dhayari')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-star-city'];
  }
  if (normalizedKey.includes('star-town')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-star-town'];
  }
  if (normalizedKey.includes('star-tower')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-star-towers'];
  }

  // Urban & Delivered Landmarks
  if (normalizedKey.includes('park')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-park'];
  }
  if (normalizedKey.includes('iris')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-iris-baner'];
  }
  if (normalizedKey.includes('nilay')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-nilay'];
  }
  if (normalizedKey.includes('aquila')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-aquila'];
  }
  if (normalizedKey.includes('seher')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-seher'];
  }
  if (normalizedKey.includes('lighthouse')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-lighthouse'];
  }

  // Default fallback for any plotting query — strictly Manas Lake (the only plotting project)
  if (normalizedKey.includes('plot')) {
    return DYNAMIC_PROJECT_IMAGES['skyi-manas-lake-na-plots'];
  }

  return DYNAMIC_PROJECT_IMAGES['skyi-songbirds'];
}
