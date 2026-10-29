'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import SiteVisitModal from './SiteVisitModal';
import FloorPlanModal from './FloorPlanModal';
import Portfolio from './Portfolio';
import Connectivity from './Connectivity';
import type { ProgrammaticItem } from '../utils/programmaticSeo';
import {
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Download,
  Landmark,
  Compass,
  ChevronDown,
  Car,
  FileText,
  BadgePercent,
  Sparkles,
} from 'lucide-react';
import './Portfolio.css';

interface MicroLocationLandingProps {
  item: ProgrammaticItem;
}

export default function MicroLocationLanding({ item }: MicroLocationLandingProps) {
  const [isVisitOpen, setIsVisitOpen] = useState(false);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const isPlot = item.id.includes('manas-lake') && (item.type.toLowerCase().includes('plot') || item.project.toLowerCase().includes('plot'));

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  const faqs = isPlot
    ? [
        {
          q: `What is the price range and plot size for ${item.project} at Manas Lake Bhukum?`,
          a: `${item.project} offers collector NA villa plot sizes starting from ${item.plotSize || '2,000 Sq.Ft.'} with price range starting from ${item.priceRange}. Permissible construction FSI is ${item.fsiRatio || '1.4 - 1.5'}.`,
        },
        {
          q: `Are the plots at ${item.project} PMRDA sanctioned with individual 7/12 extract?`,
          a: `Yes, all bungalow plots at ${item.project} are 100% Collector NA sanctioned under PMRDA residential zoning with separate 7/12 extract, clear PR card title, and individual sub-division demarcation.`,
        },
        {
          q: `Which banks provide land purchase and villa construction loans for ${item.project}?`,
          a: `Pre-approved land purchase and composite construction loans are offered by leading nationalized and private banks including ${item.bankLoans.join(', ')} with up to 80% funding.`,
        },
        {
          q: `How to schedule a free VIP site visit with AC cab pickup for ${item.project}?`,
          a: `You can book an exclusive developer site visit directly on skyidevelopers.in/contact or via WhatsApp at 7744009295. SKYi Developers provides complimentary private AC cab pickup and drop across Pune. 0% brokerage.`,
        },
      ]
    : [
        {
          q: `What configurations and prices are available for ${item.project} in ${item.microLocation}?`,
          a: `${item.project} at ${item.location} offers ${item.type} with configurations spanning ${item.plotSize || 'expansive usable carpet areas'} starting from ${item.priceRange}.`,
        },
        {
          q: `Is ${item.project} MahaRERA approved with clear title documentation?`,
          a: `Yes, ${item.project} is fully sanctioned under MahaRERA and local municipal planning authorities with 100% clear title documentation and zero encumbrances.`,
        },
        {
          q: `Which banks provide pre-approved home loans for ${item.project}?`,
          a: `Pre-approved home loans up to 90% funding with competitive interest rates are available from leading financial institutions including ${item.bankLoans.join(', ')}.`,
        },
        {
          q: `How to schedule a free VIP site visit with AC cab pickup for ${item.project}?`,
          a: `You can schedule a complimentary site visit with private AC cab pickup and drop from anywhere across Pune via WhatsApp at 7744009295 or by booking through our direct developer desk. 0% brokerage.`,
        },
      ];

  return (
    <>
      <Navbar onOpenVisitModal={() => setIsVisitOpen(true)} />

      <main style={{ minHeight: '100vh', background: '#070b1f', color: '#ffffff', paddingTop: '80px' }}>
        {/* ─── Breadcrumbs ─── */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
            <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link>
                <span style={{ marginLeft: '8px', color: '#475569' }}>/</span>
              </li>
              <li>
                <Link href={isPlot ? '/na-plots-bhukum' : '/projects'} style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  {isPlot ? 'PMRDA NA Plots' : 'Projects'}
                </Link>
                <span style={{ marginLeft: '8px', color: '#475569' }}>/</span>
              </li>
              <li style={{ color: '#c8a96e', fontWeight: 600 }}>{item.project}</li>
            </ol>
          </nav>
        </div>

        {/* ─── Hero Section ─── */}
        <section style={{
          position: 'relative',
          padding: '40px 24px 60px',
          textAlign: 'center',
          background: 'radial-gradient(circle at 50% 15%, rgba(200, 169, 110, 0.15) 0%, rgba(7, 11, 31, 1) 75%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            {/* Authority Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(200, 169, 110, 0.12)',
              border: '1px solid rgba(200, 169, 110, 0.5)',
              color: '#e2ca9c',
              fontSize: '0.85rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              padding: '8px 18px',
              borderRadius: '30px',
              marginBottom: '20px'
            }}>
              <ShieldCheck size={16} /> {isPlot ? '⭐ PMRDA Approved • Clear Title 7/12 • 0% Brokerage' : '⭐ MahaRERA Approved • Clear Title • 0% Brokerage'}
            </div>

            {/* H1 Heading */}
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.18, marginBottom: '18px', color: '#ffffff' }}>
              {item.project}<br />
              <span className="gradient-text">{item.microLocation}, {item.corridor.includes('Mumbai') ? 'Mumbai' : 'Pune'}</span>
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#cbd5e1', lineHeight: 1.6, maxWidth: '820px', margin: '0 auto 28px' }}>
              {isPlot ? (
                <>
                  Collector NA sanctioned gated villa plotting at <strong style={{ color: '#ffffff' }}>{item.location}</strong>.
                  Starting from <strong style={{ color: '#c8a96e' }}>{item.priceRange}*</strong> with separate 7/12 extract, FSI {item.fsiRatio || '1.4 - 1.5'}, and 80% bank loans.
                </>
              ) : (
                <>
                  Thoughtfully designed {item.type} at <strong style={{ color: '#ffffff' }}>{item.location}</strong>.
                  Starting from <strong style={{ color: '#c8a96e' }}>{item.priceRange}*</strong> with spacious usable carpet area, scenic balconies, and verified clear title.
                </>
              )}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', marginBottom: '32px' }}>
              <button
                type="button"
                onClick={() => setIsVisitOpen(true)}
                style={{
                  background: 'linear-gradient(135deg, #c8a96e 0%, #a28347 100%)',
                  color: '#070b1f',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(200, 169, 110, 0.35)',
                }}
              >
                <Calendar size={18} /> Schedule VIP Site Visit (Free AC Cab)
              </button>

              <button
                type="button"
                onClick={() => setIsPlanOpen(true)}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '14px 24px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Download size={18} /> {isPlot ? 'Download Layout Blueprint PDF' : 'Download 2026 Floor Plans PDF'}
              </button>

              <a
                href={`https://wa.me/917744009295?text=Hi%20SKYi%20Developers%2C%20I%20am%20interested%20in%20${encodeURIComponent(item.project)}%20at%20${encodeURIComponent(item.microLocation)}.%20Please%20share%20floor%20plans%20and%20pricing.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(37, 211, 102, 0.15)',
                  color: '#25d366',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '14px 24px',
                  borderRadius: '10px',
                  border: '1px solid rgba(37, 211, 102, 0.4)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                💬 WhatsApp Developer Desk
              </a>
            </div>

            {/* Direct Trust Badges Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px',
              maxWidth: '920px',
              margin: '0 auto',
              textAlign: 'left'
            }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Price Range</span>
                <p style={{ fontSize: '1.15rem', fontWeight: 800, color: '#c8a96e', margin: '4px 0 0' }}>{item.priceRange}*</p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{isPlot ? 'Plot Sizes' : 'Carpet / Unit Sizes'}</span>
                <p style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 0' }}>{item.plotSize || (isPlot ? '2,000 - 5,000 Sq.Ft.' : 'Expansive Carpet')}</p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Sanction & Title</span>
                <p style={{ fontSize: '1.15rem', fontWeight: 800, color: '#10b981', margin: '4px 0 0' }}>{isPlot ? 'Clear 7/12 & PMRDA' : 'MahaRERA Sanctioned'}</p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{isPlot ? 'Permissible FSI' : 'Architecture'}</span>
                <p style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: '4px 0 0' }}>{isPlot ? (item.fsiRatio || '1.4 - 1.5 FSI') : 'IGBC Platinum Design'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Micro-Location Highlights & Features ─── */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ color: '#c8a96e', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Micro-Location Specifications
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800, marginTop: '8px', color: '#ffffff' }}>
              Why Choose {item.project} in {item.microLocation}?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {/* Key Features Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '30px',
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#c8a96e', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={22} color="#10b981" /> Layout Infrastructure &amp; Approvals
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {item.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: '#cbd5e1' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bank Approvals & Connectivity Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '30px',
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#c8a96e', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Landmark size={22} color="#c8a96e" /> Pre-Approved Bank Loans &amp; Access
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '16px' }}>
                {isPlot ? 'Up to 80% funding available on plot purchase and composite bungalow construction from nationalized & leading private banks:' : 'Up to 90% pre-approved home loans available from nationalized & leading private banks:'}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {item.bankLoans.map((bank, idx) => (
                  <span key={idx} style={{ background: 'rgba(200, 169, 110, 0.12)', border: '1px solid rgba(200, 169, 110, 0.4)', color: '#e2ca9c', padding: '6px 14px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>
                    {bank}
                  </span>
                ))}
              </div>

              <div style={{ padding: '16px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#6ee7b7' }}>
                  <strong>🚘 Free AC Cab Pickup:</strong> Guided site inspection available daily. Direct developer booking with 0% brokerage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Dedicated Micro-Location FAQ Accordion ─── */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ color: '#c8a96e', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Frequently Asked Questions
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginTop: '8px', color: '#ffffff' }}>
              Questions About {item.project} in {item.microLocation}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: 700,
                    textAlign: 'left',
                    cursor: 'pointer',
                    gap: '12px',
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: expandedFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s',
                      flexShrink: 0,
                      color: '#c8a96e',
                    }}
                  />
                </button>
                {expandedFaq === idx && (
                  <div style={{ padding: '0 20px 20px', color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '14px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── Other Ongoing Landmarked Projects ─── */}
        <Portfolio
          onOpenSiteVisit={() => setIsVisitOpen(true)}
          onOpenFloorPlan={() => setIsPlanOpen(true)}
        />

        {/* ─── Connectivity Network ─── */}
        <Connectivity />

        {/* ─── Footer ─── */}
        <Footer />

        {/* ─── Floating WhatsApp & Quick Actions ─── */}
        <FloatingActions onOpenVisitModal={() => setIsVisitOpen(true)} />

        {/* ─── Interactive Modals ─── */}
        <SiteVisitModal
          isOpen={isVisitOpen}
          onClose={() => setIsVisitOpen(false)}
          defaultProject={`${item.project} (${item.microLocation})`}
        />

        <FloorPlanModal
          isOpen={isPlanOpen}
          onClose={() => setIsPlanOpen(false)}
          projectTitle={item.project}
          onBookVisit={() => {
            setIsPlanOpen(false);
            setIsVisitOpen(true);
          }}
        />
      </main>
    </>
  );
}
