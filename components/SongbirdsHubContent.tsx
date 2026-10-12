'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import SiteVisitModal from './SiteVisitModal';
import FloorPlanModal from './FloorPlanModal';
import {
  Sparkles,
  TreePine,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Download,
  PhoneCall,
  MapPin,
  Clock,
  Car,
  Award,
} from 'lucide-react';
import './Portfolio.css';

export default function SongbirdsHubContent() {
  const [isVisitOpen, setIsVisitOpen] = useState(false);
  const [isPlanOpen, setIsPlanOpen] = useState(false);

  return (
    <>
      <Navbar onOpenVisitModal={() => setIsVisitOpen(true)} />

      <main style={{ minHeight: '100vh', background: '#070b1f', color: '#ffffff', paddingTop: '80px' }}>
        {/* ─── Hero Section ─── */}
        <section style={{
          position: 'relative',
          padding: '90px 24px 70px',
          textAlign: 'center',
          background: 'radial-gradient(circle at 50% 20%, rgba(255, 107, 53, 0.22) 0%, rgba(7, 11, 31, 1) 75%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 107, 53, 0.15)',
              border: '1px solid #ff6b35',
              color: '#ff6b35',
              fontSize: '0.88rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              padding: '8px 18px',
              borderRadius: '30px',
              marginBottom: '20px'
            }}>
              <Sparkles size={16} /> 🔥 NEW LAUNCH: Smart 1 BHK (430 Sq.Ft.) Residences
            </div>

            <h1 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.15, marginBottom: '20px', color: '#ffffff' }}>
              Skyi Songbirds Eco-Township<br />
              <span className="gradient-text">Bhugaon, Paud Road, Pune</span>
            </h1>

            <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: '#cbd5e1', maxWidth: '820px', margin: '0 auto 36px' }}>
              45+ Acre IGBC Platinum Certified Township overlooking 7,000-acre NDA Forest reserve. 
              Featuring the <strong>All-New 1 BHK (430 Sq.Ft. Carpet) Smart Eco-Homes</strong> from ₹38 Lakhs* 
              alongside signature 3 &amp; 4 BHK hillside residences, integrated with the 5-Acre Poona Western Club.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setIsVisitOpen(true)}
                style={{
                  background: 'linear-gradient(135deg, #ff6b35 0%, #d97706 100%)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(255, 107, 53, 0.4)'
                }}
              >
                <Calendar size={18} /> Book VIP Site Visit (Free Cab Pickup)
              </button>

              <button
                type="button"
                onClick={() => setIsPlanOpen(true)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Download size={18} /> View 1 BHK (430 SF) Floor Plans
              </button>
            </div>
          </div>
        </section>

        {/* ─── Highlights Strip ─── */}
        <section style={{ padding: '50px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
              <Sparkles size={26} className="text-amber-400" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '12px 0 6px', color: '#ffffff' }}>New Launch 1 BHK</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>430 Sq.Ft. Carpet Area with zero-dead-space layout, hillside deck, and smart modular kitchen.</p>
            </div>

            <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
              <Award size={26} className="text-emerald-400" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '12px 0 6px', color: '#ffffff' }}>5-Acre Sports Club</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>On-campus Poona Western Club: Olympic pool, cricket academy, squash, tennis &amp; dining lawns.</p>
            </div>

            <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
              <TreePine size={26} className="text-sky-400" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '12px 0 6px', color: '#ffffff' }}>NDA Forest Reserve</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>Surrounded by 7,000+ acres of untouched defense forest canopy with fresh mountain breeze.</p>
            </div>

            <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
              <ShieldCheck size={26} className="text-purple-400" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '12px 0 6px', color: '#ffffff' }}>MahaRERA Approved</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>P52100000769 (Ph A), P52100001117 (Ph B), P52100019348 (Ph E). Over 2,000+ resident families.</p>
            </div>
          </div>
        </section>

        {/* ─── 1 BHK New Launch Feature Section ─── */}
        <section style={{ padding: '80px 24px', background: 'rgba(0,0,0,0.25)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{ color: '#ff6b35', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Exclusive Phase Release
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', marginTop: '8px' }}>
                Why Songbirds 1 BHK (430 Sq.Ft.) is Pune’s Smartest Investment
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '700px', margin: '10px auto 0' }}>
                Engineered with Zero Dead Space architecture, offering the luxury and open space of a full township at an unbeatable entry price.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', alignItems: 'center' }}>
              <div className="glass" style={{ padding: '36px', borderRadius: '20px', border: '1px solid rgba(255, 107, 53, 0.35)' }}>
                <span style={{ background: 'rgba(255, 107, 53, 0.2)', color: '#ff6b35', padding: '4px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800 }}>
                  SPECIFICATION HIGHLIGHTS
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, margin: '16px 0' }}>
                  Smart 1 BHK Eco-Residence
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <strong>Carpet Area:</strong> 430 Sq.Ft. RERA Usable Carpet Area
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <strong>Starting Price:</strong> Starting from ₹38 Lakhs* (All Inclusive Packages Available)
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <strong>Balcony:</strong> Dedicated Private Scenic Deck overlooking Sahyadri Hills
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <strong>Kitchen:</strong> Granitoid Platform with Stainless Steel Sink &amp; Utility Space
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <strong>Target Rental Yield:</strong> 5.8% - 6.5% p.a. (High demand from Hinjewadi &amp; Kothrud IT pros)
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={() => setIsPlanOpen(true)}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #ff6b35, #d97706)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Download Complete 430 Sq.Ft. Floor Plan &amp; Cost Sheet
                </button>
              </div>

              <div className="glass" style={{ padding: '36px', borderRadius: '20px' }}>
                <h3 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '20px' }}>
                  Location &amp; Commute Advantages
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <Clock size={20} className="text-amber-400" />
                    <div>
                      <h4 style={{ color: '#ffffff', margin: 0, fontSize: '1rem', fontWeight: 700 }}>6-8 Minutes to Chandani Chowk</h4>
                      <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.88rem' }}>Direct 6-lane Paud Road expressway connection</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <Car size={20} className="text-emerald-400" />
                    <div>
                      <h4 style={{ color: '#ffffff', margin: 0, fontSize: '1rem', fontWeight: 700 }}>10 Minutes to Kothrud Metro</h4>
                      <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.88rem' }}>Rapid transit into Deccan, Shivajinagar, and Central Pune</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <MapPin size={20} className="text-sky-400" />
                    <div>
                      <h4 style={{ color: '#ffffff', margin: 0, fontSize: '1rem', fontWeight: 700 }}>20 Minutes to Hinjewadi Phase 3</h4>
                      <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.88rem' }}>Easy bypass via Pirangut-Hinjewadi Link Road</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(7, 11, 31, 0.7)', borderRadius: '12px' }}>
                  <p style={{ color: '#e2e8f0', fontSize: '0.9rem', margin: 0 }}>
                    <strong>Bank Loan Eligibility:</strong> Pre-approved by SBI, HDFC, ICICI, Axis Bank. Pay just 10% booking amount and avail low EMI options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA Strip ─── */}
        <section style={{ padding: '70px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff', marginBottom: '14px' }}>
              Experience Skyi Songbirds in Person
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', marginBottom: '28px' }}>
              Book your private VIP guided tour with free cab pickup anywhere in Pune. Visit the newly inaugurated sample 1 BHK (430 SF) and sample 3 BHK homes.
            </p>
            <button
              type="button"
              onClick={() => setIsVisitOpen(true)}
              style={{
                background: 'linear-gradient(135deg, #ff6b35, #d97706)',
                color: '#ffffff',
                border: 'none',
                padding: '16px 36px',
                borderRadius: '12px',
                fontSize: '1.05rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)'
              }}
            >
              <PhoneCall size={18} style={{ display: 'inline', marginRight: '8px' }} />
              Schedule Free VIP Site Visit Now
            </button>
          </div>
        </section>
      </main>

      <Footer onOpenSiteVisit={() => setIsVisitOpen(true)} />
      <FloatingActions onOpenVisitModal={() => setIsVisitOpen(true)} />
      <SiteVisitModal isOpen={isVisitOpen} onClose={() => setIsVisitOpen(false)} defaultProject="Skyi Songbirds (Bhugaon)" />
      <FloorPlanModal isOpen={isPlanOpen} onClose={() => setIsPlanOpen(false)} projectTitle="Skyi Songbirds New Launch" onBookVisit={() => { setIsPlanOpen(false); setIsVisitOpen(true); }} />
    </>
  );
}
