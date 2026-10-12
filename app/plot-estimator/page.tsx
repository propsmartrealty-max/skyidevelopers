import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'PMRDA NA Plot Valuation Calculator Pune | Skyi Developers',
  description: 'Estimate PMRDA NA Bungalow Plot Valuation, permissible FSI footprint, and 75% bank loan funding across Pune micro-locations (Bhukum, Bhugaon, Pirangut, Kasarsai, Sus).',
  alternates: {
    canonical: 'https://skyidevelopers.in/plot-estimator',
  },
  openGraph: {
    title: 'PMRDA NA Plot Valuation Calculator Pune | SKYi Developers',
    description: 'Estimate PMRDA NA Bungalow Plot Valuation, permissible FSI footprint, and bank loan funding across Pune micro-locations.',
    url: 'https://skyidevelopers.in/plot-estimator',
    siteName: 'Skyi Developers',
    images: [{ url: 'https://skyidevelopers.in/og-image.jpg', width: 1200, height: 630, alt: 'SKYi Plot Valuation & EMI Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PMRDA NA Plot Valuation Calculator Pune | SKYi Developers',
    description: 'Calculate residential NA plot sizes, FSI construction potential, and down payments.',
    images: ['https://skyidevelopers.in/og-image.jpg'],
  },
};

export default function PlotEstimatorPage() {
  return <Home />;
}
