'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import SiteVisitModal from './SiteVisitModal';
import FloorPlanModal from './FloorPlanModal';
import {
  Waves,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Download,
  PhoneCall,
  Clock,
  Landmark,
} from 'lucide-react';
import './Portfolio.css';

export default function ManasLakeHubContent() {
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
          background: 'radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.22) 0%, rgba(7, 11, 31, 1) 75%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid #10b981',
              color: '#34d399',
              fontSize: '0.88rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              padding: '8px 18px',
              borderRadius: '30px',
              marginBottom: '20px'
            }}>
              <Waves size={16} /> 🌊 PMRDA NA Bungalow Plotting &amp; 90-Acre Lakefront Township
            </div>

            <h1 style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.15, marginBottom: '20px', color: '#ffffff' }}>
              SKYi Manas Lake<br />
              <span className="gradient-text">NA Bungalow Plots &amp; Lakeside Residences</span>
            </h1>

            <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: '#cbd5e1', maxWidth: '840px', margin: '0 auto 36px' }}>
              90+ Acre IGBC Platinum Certified lakefront ecosystem in Bhukum / Bavdhan on Paud Road, Pune. 
              Featuring <strong>PMRDA Sanctioned Clear Title NA Bungalow Plots (2,000 - 5,000+ Sq.Ft. with FSI 1.5)</strong> starting ₹95 Lakhs* 
              alongside luxury 2 &amp; 3 BHK lakeside residences, just 6 minutes from Chandani Chowk.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setIsVisitOpen(true)}
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
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
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.35)'
                }}
              >
                <Calendar size={18} /> Book Lakeside Site Visit (Free Cab Pickup)
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
                <Download size={18} /> View NA Plot Layout &amp; Floor Plans
              </button>
            </div>
          </div>
        </section>

        {/* ─── Highlights Strip ─── */}
        <section style={{ padding: '50px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
              <Waves size={26} className="text-emerald-400" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '12px 0 6px', color: '#ffffff' }}>Waterfront NA Plots</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>2,000 to 5,000+ Sq.Ft. clear title plots directly along the scenic lakefront promenade.</p>
            </div>

            <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
              <ShieldCheck size={26} className="text-amber-400" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '12px 0 6px', color: '#ffffff' }}>100% Clear 7/12 &amp; FSI 1.5</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>PMRDA Sanctioned Collector NA Layout with individual 7/12 extracts and FSI 1.5 villa sanctions.</p>
            </div>

            <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
              <Landmark size={26} className="text-sky-400" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '12px 0 6px', color: '#ffffff' }}>90% Bank Pre-Approved</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>Plot loan + composite construction funding approved by SBI, HDFC, ICICI, and Bank of Maharashtra.</p>
            </div>

            <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
              <Clock size={26} className="text-purple-400" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '12px 0 6px', color: '#ffffff' }}>6 Mins to Chandani Chowk</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>Instant connectivity to Bavdhan, Kothrud, Pune-Bangalore Highway, and upcoming metro line.</p>
            </div>
          </div>
        </section>

        {/* ─── Detailed Plotting Specifications Section ─── */}
        <section style={{ padding: '80px 24px', background: 'rgba(0,0,0,0.25)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{ color: '#10b981', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Gated Plotted Enclave
              </span>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', marginTop: '8px' }}>
                PMRDA NA Bungalow Plotting at SKYi Manas Lake
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '750px', margin: '10px auto 0' }}>
                Build your custom lakeside dream bungalow with complete architectural freedom inside a fully secured 90-acre master township.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '30px' }}>
              <div className="glass" style={{ padding: '36px', borderRadius: '20px', border: '1px solid rgba(16, 185, 129, 0.35)' }}>
                <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '4px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800 }}>
                  PLOT SECTOR SPECIFICATIONS
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, margin: '16px 0' }}>
                  Clear Title NA Villa Plots
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <strong>Plot Sizes:</strong> 2,000 Sq.Ft., 3,000 Sq.Ft., and 5,000+ Sq.Ft. Estate Plots
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <strong>Sanction Status:</strong> PMRDA Collector NA Sanctioned Layout
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <strong>Permissible FSI:</strong> 1.5 FSI (Sanctioned for Ground + 2 Floors Villa Construction)
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <strong>Legal Title:</strong> 100% Clear Title Individual 7/12 Extract per Plot
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-emerald-400" />
                    <strong>Starting Price:</strong> ₹95 Lakhs* onwards
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={() => setIsPlanOpen(true)}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #10b981, #059669)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Download NA Plot Layout &amp; Demarcation Drawing
                </button>
              </div>

              <div className="glass" style={{ padding: '36px', borderRadius: '20px' }}>
                <span style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '4px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800 }}>
                  INFRASTRUCTURE &amp; AMENITIES
                </span>
                <h3 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, margin: '16px 0' }}>
                  World-Class Township Integration
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-sky-400" />
                    <strong>Road Network:</strong> 40ft &amp; 50ft Wide Internal Concrete/Tar Roads with Footpaths
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-sky-400" />
                    <strong>Utilities:</strong> Dedicated Underground Electricity, Water Lines &amp; Optical Fiber
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-sky-400" />
                    <strong>Township Lifestyle:</strong> Lakefront Promenade, Amphitheatre, Clubhouse &amp; Lawns
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-sky-400" />
                    <strong>Gated Security:</strong> 24/7 Security Gatehouse, CCTV Surveillance &amp; Perimeter Fencing
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={18} className="text-sky-400" />
                    <strong>Apartment Living:</strong> Also offering Ready &amp; Ongoing 2 &amp; 3 BHK Lakeview Flats
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={() => setIsVisitOpen(true)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    padding: '14px',
                    borderRadius: '10px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Schedule Personal Plot Demarcation Tour
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA Strip ─── */}
        <section style={{ padding: '70px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ffffff', marginBottom: '14px' }}>
              Own Your Lakefront NA Plot at SKYi Manas Lake
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', marginBottom: '28px' }}>
              Book your VIP guided site visit with free cab pickup across Pune. Walk the lakefront promenade and inspect marked plot demarcations in person.
            </p>
            <button
              type="button"
              onClick={() => setIsVisitOpen(true)}
              style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: '#ffffff',
                border: 'none',
                padding: '16px 36px',
                borderRadius: '12px',
                fontSize: '1.05rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)'
              }}
            >
              <PhoneCall size={18} style={{ display: 'inline', marginRight: '8px' }} />
              Schedule VIP Site Visit &amp; Plot Inspection
            </button>
          </div>
        </section>
      </main>

      <Footer onOpenSiteVisit={() => setIsVisitOpen(true)} />
      <FloatingActions onOpenVisitModal={() => setIsVisitOpen(true)} />
      <SiteVisitModal isOpen={isVisitOpen} onClose={() => setIsVisitOpen(false)} defaultProject="Skyi Manas Lake (Bavdhan / Paud Rd)" />
      <FloorPlanModal isOpen={isPlanOpen} onClose={() => setIsPlanOpen(false)} projectTitle="SKYi Manas Lake NA Plots & Apartments" onBookVisit={() => { setIsPlanOpen(false); setIsVisitOpen(true); }} />
    </>
  );
}
