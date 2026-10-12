'use client';

import { useState } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import VideoSection from '../components/VideoSection';
import Portfolio from '../components/Portfolio';
import InteractiveMasterPlan from '../components/InteractiveMasterPlan';
import MortgageCalculator from '../components/MortgageCalculator';
import VirtualTourGallery from '../components/VirtualTourGallery';
import Connectivity from '../components/Connectivity';
import Testimonials from '../components/Testimonials';
import ProgrammaticSEOSection from '../components/ProgrammaticSEOSection';
import SEOContent from '../components/SEOContent';
import Footer from '../components/Footer';
import SiteVisitModal from '../components/SiteVisitModal';
import FloorPlanModal from '../components/FloorPlanModal';
import PrivacyPolicyModal from '../components/PrivacyPolicyModal';
import AIMatchmakerModal from '../components/AIMatchmakerModal';
import FloatingActions from '../components/FloatingActions';
import OfflineBanner from '../components/OfflineBanner';

function HomeContent() {
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

      {/* 2D/3D Interactive Master Layout Visualizer */}
      <InteractiveMasterPlan />

      {/* 360° Virtual Tour & Drone Sightseeing Gallery */}
      <VirtualTourGallery onBookSiteVisit={handleOpenVisit} />

      {/* Home Loan & EMI Calculator */}
      <MortgageCalculator onBookSiteVisit={() => handleOpenVisit()} />

      {/* Connectivity & Proximity Matrix */}
      <Connectivity />

      {/* Video & Virtual Tours */}
      <VideoSection />

      {/* Customer Testimonials & Verified Reviews */}
      <Testimonials />

      {/* Programmatic SEO Search Engine Hub */}
      <ProgrammaticSEOSection onBookVisit={handleOpenVisit} />

      {/* Comprehensive SEO Content & FAQ Accordion */}
      <SEOContent />

      {/* Footer */}
      <Footer
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        onOpenSiteVisit={handleOpenVisit}
      />

      {/* Interactive Modals */}
      <SiteVisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
        defaultProject={visitDefaultProject}
      />

      <FloorPlanModal
        isOpen={isFloorModalOpen}
        onClose={() => setIsFloorModalOpen(false)}
        projectTitle={floorProjectTitle}
        onBookVisit={() => handleOpenVisit(floorProjectTitle)}
      />

      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      <AIMatchmakerModal
        isOpen={isAiMatchmakerOpen}
        onClose={() => setIsAiMatchmakerOpen(false)}
        onSelectProject={(project) => handleOpenVisit(project)}
      />

      {/* Floating Quick Action Buttons */}
      <FloatingActions onOpenVisitModal={() => handleOpenVisit()} />
    </>
  );
}

export default function Home() {
  return (
    <ErrorBoundary>
      <HomeContent />
    </ErrorBoundary>
  );
}
