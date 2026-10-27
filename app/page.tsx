'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import Portfolio from '../components/Portfolio';
import DesignPhilosophy from '../components/DesignPhilosophy';
import Connectivity from '../components/Connectivity';
import Testimonials from '../components/Testimonials';
import ProgrammaticSEOSection from '../components/ProgrammaticSEOSection';
import SEOContent from '../components/SEOContent';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import OfflineBanner from '../components/OfflineBanner';

/* Code-split heavy interactive calculators and below-the-fold widgets */
const InteractiveMasterPlan = dynamic(() => import('../components/InteractiveMasterPlan'), { ssr: true });
const VirtualTourGallery = dynamic(() => import('../components/VirtualTourGallery'), { ssr: true });
const MortgageCalculator = dynamic(() => import('../components/MortgageCalculator'), { ssr: true });
const VideoSection = dynamic(() => import('../components/VideoSection'), { ssr: true });

/* Code-split client-only modals to eliminate initial main-thread load */
const SiteVisitModal = dynamic(() => import('../components/SiteVisitModal'), { ssr: false });
const FloorPlanModal = dynamic(() => import('../components/FloorPlanModal'), { ssr: false });
const PrivacyPolicyModal = dynamic(() => import('../components/PrivacyPolicyModal'), { ssr: false });
const AIMatchmakerModal = dynamic(() => import('../components/AIMatchmakerModal'), { ssr: false });

function HomeContent() {
  const pathname = usePathname() || '/';

  /* Auto-scroll to section if navigated directly to clean routes like /projects, /contact, /connectivity, /philosophy */
  useEffect(() => {
    const sectionMap: Record<string, string> = {
      '/projects': 'portfolio',
      '/contact': 'contact',
      '/connectivity': 'connectivity',
      '/philosophy': 'philosophy',
      '/about': 'philosophy',
      '/virtual-tour': 'virtual-tour',
      '/master-plan': 'master-plan',
      '/plot-estimator': 'calculator',
    };

    const targetId = sectionMap[pathname];
    if (targetId) {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  /* Modal States */
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [visitDefaultProject, setVisitDefaultProject] = useState<string | undefined>();

  const [isFloorModalOpen, setIsFloorModalOpen] = useState(false);
  const [floorProjectTitle, setFloorProjectTitle] = useState<string | undefined>();

  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isAiMatchmakerOpen, setIsAiMatchmakerOpen] = useState(false);

  const handleOpenVisit = (projectName?: string) => {
    setVisitDefaultProject(projectName);
    setIsVisitModalOpen(true);
  };

  const handleOpenFloorPlan = (projectTitle?: string) => {
    setFloorProjectTitle(projectTitle);
    setIsFloorModalOpen(true);
  };

  return (
    <>
      {/* Network Offline Resilience Banner */}
      <OfflineBanner />

      {/* Navigation */}
      <Navbar onOpenVisitModal={() => handleOpenVisit()} />

      {/* Hero Header */}
      <Hero onOpenSiteVisit={() => handleOpenVisit()} />

      {/* Metrics & Statistics */}
      <Metrics />

      {/* Townships Portfolio & Filter Tabs */}
      <Portfolio
        onOpenSiteVisit={handleOpenVisit}
        onOpenFloorPlan={handleOpenFloorPlan}
      />

      {/* Architectural Ethos & Max Light™ Design Philosophy */}
      <ErrorBoundary sectionName="DesignPhilosophy" silent>
        <DesignPhilosophy />
      </ErrorBoundary>

      {/* 2D/3D Interactive Master Layout Visualizer */}
      <ErrorBoundary sectionName="InteractiveMasterPlan" silent>
        <InteractiveMasterPlan />
      </ErrorBoundary>

      {/* 360° Virtual Tour & Drone Sightseeing Gallery */}
      <ErrorBoundary sectionName="VirtualTourGallery" silent>
        <VirtualTourGallery onBookSiteVisit={handleOpenVisit} />
      </ErrorBoundary>

      {/* Home Loan & EMI Calculator */}
      <ErrorBoundary sectionName="MortgageCalculator" silent>
        <MortgageCalculator onBookSiteVisit={() => handleOpenVisit()} />
      </ErrorBoundary>

      {/* Connectivity & Proximity Matrix */}
      <ErrorBoundary sectionName="Connectivity" silent>
        <Connectivity />
      </ErrorBoundary>

      {/* Video & Virtual Tours */}
      <ErrorBoundary sectionName="VideoSection" silent>
        <VideoSection />
      </ErrorBoundary>

      {/* Customer Testimonials & Verified Reviews */}
      <ErrorBoundary sectionName="Testimonials" silent>
        <Testimonials />
      </ErrorBoundary>

      {/* Programmatic SEO Search Engine Hub */}
      <ErrorBoundary sectionName="ProgrammaticSEOSection" silent>
        <ProgrammaticSEOSection onBookVisit={handleOpenVisit} />
      </ErrorBoundary>

      {/* Comprehensive SEO Content & FAQ Accordion */}
      <SEOContent />

      {/* Footer */}
      <Footer
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        onOpenSiteVisit={handleOpenVisit}
      />

      {/* Interactive Modals — Isolated Fail-Safe Boundaries */}
      <ErrorBoundary sectionName="SiteVisitModal" silent>
        <SiteVisitModal
          isOpen={isVisitModalOpen}
          onClose={() => setIsVisitModalOpen(false)}
          defaultProject={visitDefaultProject}
        />
      </ErrorBoundary>

      <ErrorBoundary sectionName="FloorPlanModal" silent>
        <FloorPlanModal
          isOpen={isFloorModalOpen}
          onClose={() => setIsFloorModalOpen(false)}
          projectTitle={floorProjectTitle}
          onBookVisit={() => handleOpenVisit(floorProjectTitle)}
        />
      </ErrorBoundary>

      <ErrorBoundary sectionName="PrivacyPolicyModal" silent>
        <PrivacyPolicyModal
          isOpen={isPrivacyModalOpen}
          onClose={() => setIsPrivacyModalOpen(false)}
        />
      </ErrorBoundary>

      <ErrorBoundary sectionName="AIMatchmakerModal" silent>
        <AIMatchmakerModal
          isOpen={isAiMatchmakerOpen}
          onClose={() => setIsAiMatchmakerOpen(false)}
          onSelectProject={(project) => handleOpenVisit(project)}
        />
      </ErrorBoundary>

      {/* Floating Quick Action Buttons */}
      <FloatingActions onOpenVisitModal={() => handleOpenVisit()} />
    </>
  );
}

export default function Home() {
  return <HomeContent />;
}
