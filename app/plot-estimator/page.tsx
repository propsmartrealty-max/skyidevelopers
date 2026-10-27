import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
  title: 'Pune NA Plot Price & EMI Calculator',
  description: 'Instant Pune PMRDA NA Bungalow Plot Valuation Calculator. Estimate market rates, FSI 1.5 villa construction footprint, circle rates, and 75-90% bank loan EMI across Bhukum, Bhugaon, Pirangut, and West Pune. Try Free Now!',
  alternates: {
    canonical: 'https://skyidevelopers.in/plot-estimator',
  },
  openGraph: {
    title: 'Pune NA Plot Price & EMI Calculator | SKYi Developers',
    description: 'Estimate PMRDA NA Bungalow Plot Valuation, permissible FSI footprint, and bank loan funding across Pune micro-locations.',
    url: 'https://skyidevelopers.in/plot-estimator',
    siteName: 'SKYi Developers',
    images: [{ url: 'https://skyidevelopers.in/og-image.jpg', width: 1200, height: 630, alt: 'SKYi Plot Valuation & EMI Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pune NA Plot Price & EMI Calculator | SKYi Developers',
    description: 'Calculate residential NA plot sizes, FSI construction potential, and down payments.',
    images: ['https://skyidevelopers.in/og-image.jpg'],
  },
};

export default function PlotEstimatorPage() {
  return <Home />;
}
