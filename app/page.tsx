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
