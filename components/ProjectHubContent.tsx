'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import SiteVisitModal from './SiteVisitModal';
import FloorPlanModal from './FloorPlanModal';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  FileText,
  MapPin,
  Building2,
  Home,
  Star,
  Award,
  Compass,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

export interface ProjectHubDetail {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  badge: string;
  location: string;
  priceStarting: string;
  configurations: string;
  scale: string;
  reraNumber: string;
  heroImage: string;
  overview: string;
  keyHighlights: Array<{ label: string; value: string; desc: string }>;
  amenities: string[];
  faqs: Array<{ q: string; a: string }>;
}

export default function ProjectHubContent({ project }: { project: ProjectHubDetail }) {
  const [isVisitOpen, setIsVisitOpen] = useState(false);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Navbar onOpenVisitModal={() => setIsVisitOpen(true)} />

      <main style={{ minHeight: '100vh', background: '#070b1f', color: '#ffffff', paddingTop: '80px' }}>
        {/* ─── Hero Section ─── */}
        <section
          style={{
            position: 'relative',
            padding: '90px 24px 70px',
            textAlign: 'center',
            background: 'radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.18) 0%, rgba(7, 11, 31, 1) 80%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid #f59e0b',
                color: '#f59e0b',
                fontSize: '0.85rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '8px 18px',
                borderRadius: '30px',
                marginBottom: '20px',
              }}
            >
              <Sparkles size={16} /> {project.badge}
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: '16px',
                color: '#ffffff',
              }}
            >
              {project.title}
              <br />
              <span style={{ color: '#f59e0b' }}>{project.subtitle}</span>
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                color: '#cbd5e1',
                maxWidth: '750px',
                margin: '0 auto 28px',
                lineHeight: 1.6,
              }}
            >
              {project.overview}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '12px',
                marginBottom: '36px',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <MapPin size={16} color="#f59e0b" />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{project.location}</span>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Home size={16} color="#38bdf8" />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>{project.configurations}</span>
              </div>

              <div
                style={{
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  padding: '10px 18px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Award size={16} color="#f59e0b" />
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fef08a' }}>
                  {project.priceStarting}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <button
                type="button"
                className="btn-primary"
                onClick={() => setIsVisitOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 32px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  color: '#000000',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(245, 158, 11, 0.35)',
                }}
              >
                <Calendar size={18} />
                <span>Book VIP Site Tour (Complimentary Cab)</span>
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => setIsPlanOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 28px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                }}
              >
                <FileText size={18} />
                <span>Download Floor Plans &amp; Pricing PDF</span>
              </button>
            </div>
          </div>
        </section>

        {/* ─── Highlights Grid ─── */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '70px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Architectural Benchmarks
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginTop: '8px' }}>
              Why Choose {project.title}
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {project.keyHighlights.map((hl) => (
              <div
                key={hl.label}
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'transform 0.2s ease',
                }}
              >
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f59e0b', marginBottom: '6px' }}>
                  {hl.value}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  {hl.label}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  {hl.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Amenities & Max Light™ Strip ─── */}
        <section
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '70px 24px',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ fontSize: '0.85rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Lifestyle &amp; Recreation
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginTop: '8px' }}>
                Signature Amenities &amp; Services
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px',
              }}
            >
              {project.amenities.map((amenity) => (
                <div
                  key={amenity}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(30, 41, 59, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    padding: '14px 18px',
                    borderRadius: '12px',
                  }}
                >
                  <Star size={16} color="#f59e0b" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', color: '#e2e8f0', fontWeight: 500 }}>
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MahaRERA Legal Registration Box ─── */}
        <section style={{ maxWidth: '960px', margin: '60px auto', padding: '0 24px' }}>
          <div
            style={{
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '16px',
              padding: '24px 30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#34d399', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>
                <ShieldCheck size={20} />
                <span>MahaRERA Sanctioned &amp; 100% Clear Title Verification</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: '#e2e8f0', fontFamily: 'monospace' }}>
                {project.reraNumber}
              </div>
            </div>

            <a
              href="https://maharera.maharashtra.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.85rem',
                color: '#60a5fa',
                textDecoration: 'none',
                fontWeight: 600,
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid rgba(96, 165, 250, 0.3)',
              }}
            >
              Verify on maharera.maharashtra.gov.in →
            </a>
          </div>
        </section>

        {/* ─── FAQ Accordion (Google SERP Rich Snippet Target) ─── */}
        <section style={{ maxWidth: '960px', margin: '0 auto 80px', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Frequently Asked Questions
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginTop: '8px' }}>
              Common Inquiries About {project.title}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {project.faqs.map((faq, idx) => (
              <div
                key={faq.q}
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '18px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: 700,
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {openFaq === idx && (
                  <div
                    style={{
                      padding: '0 24px 20px',
                      color: '#94a3b8',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                      paddingTop: '16px',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── Footer ─── */}
        <Footer onOpenSiteVisit={() => setIsVisitOpen(true)} />
      </main>

      {/* Modals */}
      <SiteVisitModal
        isOpen={isVisitOpen}
        onClose={() => setIsVisitOpen(false)}
        defaultProject={project.title}
      />

      <FloorPlanModal
        isOpen={isPlanOpen}
        onClose={() => setIsPlanOpen(false)}
        projectTitle={project.title}
        onBookVisit={() => {
          setIsPlanOpen(false);
          setIsVisitOpen(true);
        }}
      />

      <FloatingActions onOpenVisitModal={() => setIsVisitOpen(true)} />
    </>
  );
}
