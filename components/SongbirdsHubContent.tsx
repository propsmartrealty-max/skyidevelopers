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
  Building,
  Home,
  Check,
  Compass,
  FileText,
  BadgePercent,
  Layers,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import './Portfolio.css';

export default function SongbirdsHubContent() {
  const [isVisitOpen, setIsVisitOpen] = useState(false);
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'specs' | 'pricing' | 'amenities'>('specs');

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello, I am interested in the New Tower Launch: Aria Heights 1 BHK (430 Sq.Ft.) at Skyi Songbirds (starting ₹38L*). Please share the complete brochure, floor plan PDF, and cost sheet.'
    );
    window.open(`https://wa.me/917744009295?text=${text}`, '_blank');
  };

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
            background: 'radial-gradient(circle at 50% 20%, rgba(255, 107, 53, 0.25) 0%, rgba(7, 11, 31, 1) 80%)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 107, 53, 0.16)',
                border: '1px solid #ff6b35',
                color: '#ff6b35',
                fontSize: '0.88rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '8px 20px',
                borderRadius: '30px',
                marginBottom: '20px',
                boxShadow: '0 4px 20px rgba(255, 107, 53, 0.25)',
              }}
            >
              <Sparkles size={16} /> 🔥 NEW TOWER LAUNCH: ARIA HEIGHTS AT SONGBIRDS
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '20px', color: '#ffffff' }}>
              Skyi Songbirds Eco-Township<br />
              <span className="gradient-text">New 1 BHK Tower Launch from ₹38 Lakhs*</span>
            </h1>

            <p style={{ fontSize: '1.15rem', lineHeight: 1.6, color: '#cbd5e1', maxWidth: '840px', margin: '0 auto 36px' }}>
              45+ Acre IGBC Platinum Certified Eco-Township in Bhugaon, Paud Road (10 Mins from Kothrud &amp; Chandani Chowk).
              Presenting <strong>Tower Aria Heights</strong>: Smart 1 BHK Residences (430 Sq.Ft. Carpet) with Zero Dead Corridor layout
              and 180° Sahyadri &amp; NDA Forest views, integrated with the 5-Acre Poona Western Club.
            </p>

            {/* Quick Metrics Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
                maxWidth: '860px',
                margin: '0 auto 36px',
                textAlign: 'center',
              }}
            >
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ff6b35' }}>430 Sq.Ft.</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>RERA Usable Carpet</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#10b981' }}>₹38 Lakhs*</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Starting Price</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#38bdf8' }}>G+14 High Rise</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>4 Units / Core Elevation</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#a855f7' }}>P52100028121</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>MahaRERA Registered</div>
              </div>
            </div>

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
                  boxShadow: '0 8px 24px rgba(255, 107, 53, 0.4)',
                }}
              >
                <Calendar size={18} /> Book Free VIP Cab Site Visit
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
                  gap: '8px',
                }}
              >
                <Download size={18} /> View 1 BHK (430 SF) Floor Plan
              </button>

              <button
                type="button"
                onClick={openWhatsApp}
                style={{
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid #25D366',
                  color: '#25D366',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '14px 24px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <PhoneCall size={18} /> WhatsApp Cost Sheet
              </button>
            </div>
          </div>
        </section>

        {/* ─── Highlights Strip ─── */}
        <section style={{ padding: '50px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
              <Building size={26} className="text-amber-400" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '12px 0 6px', color: '#ffffff' }}>New Tower: Aria Heights</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>G+14 High-Rise residential tower dedicated to smart 1 BHK eco-residences with 4 apartments per floor core.</p>
            </div>

            <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
              <Layers size={26} className="text-emerald-400" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '12px 0 6px', color: '#ffffff' }}>Zero Dead Corridor Layout</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>100% space efficiency with 430 Sq.Ft. carpet area, independent master bedroom, and wide hillside deck.</p>
            </div>

            <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
              <TreePine size={26} className="text-sky-400" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '12px 0 6px', color: '#ffffff' }}>7,000-Acre NDA Forest Views</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>Direct unobstructed green views and Sahyadri breeze from your private deck. Zero pollution micro-climate.</p>
            </div>

            <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
              <Award size={26} className="text-purple-400" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: '12px 0 6px', color: '#ffffff' }}>5-Acre Poona Western Club</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0 }}>Operational sports club on campus: Olympic pool, cricket academy, squash, tennis &amp; dining lawns.</p>
            </div>
          </div>
        </section>

        {/* ─── 1 BHK New Tower Launch Spotlight ─── */}
        <section style={{ padding: '80px 24px', background: 'rgba(0,0,0,0.25)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{ color: '#ff6b35', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Exclusive Phase Spotlight
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 900, color: '#ffffff', marginTop: '8px' }}>
                Aria Heights at Songbirds: Smart 1 BHK (430 Sq.Ft.)
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '750px', margin: '10px auto 0' }}>
                Engineered with Zero Dead Space architecture, offering the luxury, ventilation, and amenities of a 45-acre master township at an unbeatable entry price starting ₹38 Lakhs*.
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '36px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setActiveTab('specs')}
                style={{
                  padding: '10px 24px',
                  borderRadius: '30px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: 'none',
                  background: activeTab === 'specs' ? '#ff6b35' : 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  transition: 'all 0.2s ease',
                }}
              >
                📐 Room Dimensions &amp; Layout
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('pricing')}
                style={{
                  padding: '10px 24px',
                  borderRadius: '30px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: 'none',
                  background: activeTab === 'pricing' ? '#ff6b35' : 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  transition: 'all 0.2s ease',
                }}
              >
                💰 Cost Sheet &amp; EMI Breakdown
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('amenities')}
                style={{
                  padding: '10px 24px',
                  borderRadius: '30px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: 'none',
                  background: activeTab === 'amenities' ? '#ff6b35' : 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  transition: 'all 0.2s ease',
                }}
              >
                🏊 Township Amenities &amp; Club Access
              </button>
            </div>

            {/* Tab 1: Specs & Dimensions */}
            {activeTab === 'specs' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '30px', alignItems: 'start' }}>
                <div className="glass" style={{ padding: '32px', borderRadius: '20px', border: '1px solid rgba(255, 107, 53, 0.35)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                    <span style={{ background: 'rgba(255, 107, 53, 0.2)', color: '#ff6b35', padding: '4px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800 }}>
                      ROOM-BY-ROOM SPECIFICATIONS
                    </span>
                    <span style={{ color: '#10b981', fontWeight: 800, fontSize: '0.9rem' }}>430 SQ.FT. CARPET</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                        <span>Living &amp; Dining Room</span>
                        <span style={{ color: '#fed7aa' }}>10&apos;0&quot; × 13&apos;6&quot;</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Large French sliding windows, full cross-ventilation, TV/broadband points.</p>
                    </div>

                    <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                        <span>Private Hillside Sundeck</span>
                        <span style={{ color: '#c084fc' }}>10&apos;0&quot; × 4&apos;6&quot;</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Attached to living room, anti-skid wooden-finish tiles, panoramic forest views.</p>
                    </div>

                    <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                        <span>Master Bedroom</span>
                        <span style={{ color: '#60a5fa' }}>10&apos;0&quot; × 11&apos;0&quot;</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>King bed space with dedicated wardrobe niche, natural daylight window.</p>
                    </div>

                    <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                        <span>Modular Kitchen + Utility</span>
                        <span style={{ color: '#fbbf24' }}>7&apos;0&quot; × 8&apos;0&quot;</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Polished black granite counter, SS sink, separate 3&apos;6&quot;×5&apos;0&quot; washing machine balcony.</p>
                    </div>

                    <div style={{ padding: '12px 16px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                        <span>Designer Eco Bathroom</span>
                        <span style={{ color: '#34d399' }}>7&apos;0&quot; × 4&apos;6&quot;</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Jaquar/Grohe CP fittings, anti-skid ceramic flooring, solar hot water pre-piping.</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPlanOpen(true)}
                    style={{
                      width: '100%',
                      marginTop: '24px',
                      background: 'linear-gradient(135deg, #ff6b35, #d97706)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '14px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Open Architectural Blueprint &amp; Layout
                  </button>
                </div>

                {/* Blueprint Card */}
                <div className="glass" style={{ padding: '32px', borderRadius: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>
                      Architectural Blueprint Preview
                    </h3>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontSize: '0.85rem' }}>
                      <Compass size={16} /> Vastu Compliant
                    </span>
                  </div>

                  {/* Vector SVG Blueprint */}
                  <div style={{ background: '#0a1026', borderRadius: '14px', padding: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '20px' }}>
                    <svg viewBox="0 0 400 270" style={{ width: '100%', height: 'auto', display: 'block' }}>
                      <rect x="5" y="5" width="390" height="260" rx="10" fill="#0b1329" stroke="#ff6b35" strokeWidth="2" strokeDasharray="6 4" />
                      {/* Living & Dining */}
                      <rect x="25" y="25" width="180" height="135" fill="rgba(255, 107, 53, 0.15)" stroke="#ff6b35" strokeWidth="1.5" />
                      <text x="115" y="85" fill="#fed7aa" fontSize="13" textAnchor="middle" fontWeight="bold">Living &amp; Dining</text>
                      <text x="115" y="105" fill="#fed7aa" fontSize="11" textAnchor="middle">10&apos;0&quot; × 13&apos;6&quot;</text>
                      {/* Master Bedroom */}
                      <rect x="215" y="25" width="160" height="135" fill="rgba(59, 130, 246, 0.15)" stroke="#60a5fa" strokeWidth="1.5" />
                      <text x="295" y="85" fill="#bfdbfe" fontSize="13" textAnchor="middle" fontWeight="bold">Master Bedroom</text>
                      <text x="295" y="105" fill="#bfdbfe" fontSize="11" textAnchor="middle">10&apos;0&quot; × 11&apos;0&quot;</text>
                      {/* Kitchen */}
                      <rect x="25" y="170" width="110" height="85" fill="rgba(245, 158, 11, 0.15)" stroke="#fbbf24" strokeWidth="1.5" />
                      <text x="80" y="210" fill="#fde68a" fontSize="11" textAnchor="middle" fontWeight="bold">Kitchen + Dry</text>
                      <text x="80" y="226" fill="#fde68a" fontSize="10" textAnchor="middle">7&apos;0&quot; × 8&apos;0&quot;</text>
                      {/* Bath */}
                      <rect x="145" y="170" width="100" height="85" fill="rgba(16, 185, 129, 0.15)" stroke="#34d399" strokeWidth="1.5" />
                      <text x="195" y="210" fill="#a7f3d0" fontSize="11" textAnchor="middle" fontWeight="bold">Bath / Toilet</text>
                      <text x="195" y="226" fill="#a7f3d0" fontSize="10" textAnchor="middle">7&apos;0&quot; × 4&apos;6&quot;</text>
                      {/* Sundeck */}
                      <rect x="255" y="170" width="120" height="85" fill="rgba(168, 85, 247, 0.15)" stroke="#c084fc" strokeWidth="1.5" />
                      <text x="315" y="210" fill="#e9d5ff" fontSize="11" textAnchor="middle" fontWeight="bold">Hillside Deck</text>
                      <text x="315" y="226" fill="#e9d5ff" fontSize="10" textAnchor="middle">10&apos;0&quot; × 4&apos;6&quot;</text>
                    </svg>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      <span><strong>Tower Core:</strong> Only 4 units per floor for maximum privacy</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      <span><strong>Elevators:</strong> 2 high-speed automated passenger lifts</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      <span><strong>Ventilation:</strong> 3-side open elevation capturing Sahyadri breeze</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Cost Sheet & Pricing */}
            {activeTab === 'pricing' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '30px' }}>
                <div className="glass" style={{ padding: '32px', borderRadius: '20px', border: '1px solid rgba(16, 185, 129, 0.35)' }}>
                  <span style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '4px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800 }}>
                    ESTIMATED COST SHEET
                  </span>
                  <h3 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 800, margin: '14px 0 20px' }}>
                    Transparent Price Structure
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <span style={{ color: '#cbd5e1' }}>Agreement Value (Base)</span>
                      <strong style={{ color: '#ffffff' }}>₹38,00,000*</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <span style={{ color: '#cbd5e1' }}>Stamp Duty (~6% Pune) &amp; Reg</span>
                      <strong style={{ color: '#ffffff' }}>~₹2,58,000*</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <span style={{ color: '#cbd5e1' }}>GST (1% Affordable Housing)</span>
                      <strong style={{ color: '#ffffff' }}>~₹38,000*</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <span style={{ color: '#cbd5e1' }}>Infra &amp; Development Charges</span>
                      <strong style={{ color: '#ffffff' }}>~₹1,50,000*</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 14px', background: 'rgba(16, 185, 129, 0.12)', borderRadius: '10px' }}>
                      <span style={{ color: '#ffffff', fontWeight: 700 }}>Est. All-Inclusive Total</span>
                      <strong style={{ color: '#10b981', fontSize: '1.15rem' }}>~₹42,46,000*</strong>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: '0 0 20px 0' }}>
                    *Prices are subject to floor rise and orientation. Government taxes and statutory charges as applicable at the time of registration.
                  </p>

                  <button
                    type="button"
                    onClick={openWhatsApp}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '14px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Request Detailed Unit-Wise Cost Sheet on WhatsApp
                  </button>
                </div>

                <div className="glass" style={{ padding: '32px', borderRadius: '20px' }}>
                  <span style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '4px 12px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800 }}>
                    FINANCING &amp; RETURN ON INVESTMENT
                  </span>
                  <h3 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 800, margin: '14px 0 20px' }}>
                    Home Loan &amp; Rental Yield
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px' }}>
                      <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase' }}>Token Booking Amount</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>₹51,000*</div>
                      <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '4px 0 0' }}>Pay just ₹51,000 to block your preferred floor and orientation.</p>
                    </div>

                    <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px' }}>
                      <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase' }}>Estimated Monthly Loan EMI</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#38bdf8' }}>~₹24,999 / mo*</div>
                      <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '4px 0 0' }}>Based on 90% loan sanction from SBI, HDFC Bank, ICICI Bank at 8.4% for 30 years.</p>
                    </div>

                    <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px' }}>
                      <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase' }}>Projected Rental Yield</div>
                      <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#10b981' }}>5.8% - 6.5% p.a.</div>
                      <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '4px 0 0' }}>Expected monthly rental of ₹16,000 - ₹20,000 driven by Hinjewadi IT and Kothrud corporate hubs.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Amenities & Club Access */}
            {activeTab === 'amenities' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
                <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
                  <Award size={24} className="text-amber-400" />
                  <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, margin: '12px 0 8px' }}>Poona Western Club (5 Acres)</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>Full membership access to Pune&apos;s celebrated sports club: Olympic pool, cricket academy, football turf, badminton &amp; squash courts.</p>
                </div>

                <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
                  <TreePine size={24} className="text-emerald-400" />
                  <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, margin: '12px 0 8px' }}>NDA Forest Nature Trails</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>Dedicated 2.5 km paved jogging track, bird-watching decks, and morning yoga lawns along the 7,000-acre forest boundary.</p>
                </div>

                <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
                  <ShieldCheck size={24} className="text-sky-400" />
                  <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, margin: '12px 0 8px' }}>IGBC Platinum Green Township</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>Zero-waste solid waste treatment, 100% sewage treated water reuse, solar grid lighting, and rainwater recharge pits.</p>
                </div>

                <div className="glass" style={{ padding: '24px', borderRadius: '16px' }}>
                  <Car size={24} className="text-purple-400" />
                  <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, margin: '12px 0 8px' }}>EV Charging &amp; On-Campus Retail</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>High-speed EV fast-chargers, supermarket, medical pharmacy, ATM, café, and convenience retail right inside the campus.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ─── Location & Commute Matrix ─── */}
        <section style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{ color: '#ff6b35', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Strategic Connectivity
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 900, color: '#ffffff', marginTop: '8px' }}>
                6-Lane Paud Road Expressway Advantage
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '720px', margin: '10px auto 0' }}>
                Located right off the Paud Road corridor in Bhugaon, minutes from western Pune&apos;s leading commercial and IT landmarks.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              <div className="glass" style={{ padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
                <Clock size={28} className="text-amber-400" style={{ margin: '0 auto 12px' }} />
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>6 Mins</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ff6b35', margin: '4px 0' }}>Chandani Chowk</div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>8-lane multi-level interchange connecting NH-48</p>
              </div>

              <div className="glass" style={{ padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
                <Car size={28} className="text-emerald-400" style={{ margin: '0 auto 12px' }} />
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>10 Mins</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#10b981', margin: '4px 0' }}>Kothrud Metro</div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Vanaz Metro Station for fast transit to Deccan</p>
              </div>

              <div className="glass" style={{ padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
                <MapPin size={28} className="text-sky-400" style={{ margin: '0 auto 12px' }} />
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>20 Mins</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#38bdf8', margin: '4px 0' }}>Hinjewadi Phase 3</div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Traffic-free bypass via Pirangut-Hinjewadi road</p>
              </div>

              <div className="glass" style={{ padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
                <Building size={28} className="text-purple-400" style={{ margin: '0 auto 12px' }} />
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>20 Mins</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#a855f7', margin: '4px 0' }}>Deccan / FC Road</div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>Direct straight drive along Karve Road corridor</p>
              </div>
            </div>

            <div style={{ marginTop: '36px', padding: '20px 24px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <strong style={{ color: '#ffffff', fontSize: '0.98rem' }}>Top Educational Hubs Within 10-15 Minutes:</strong>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: '4px 0 0' }}>
                  Indus International School, Sanskriti School, Sri Sri Ravishankar Vidya Mandir, FLAME University, Symbiosis International.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsVisitOpen(true)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
              >
                Book VIP Route Tour
              </button>
            </div>
          </div>
        </section>

        {/* ─── MahaRERA & Legal Compliance Strip ─── */}
        <section style={{ padding: '60px 24px', background: 'rgba(0,0,0,0.35)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="glass" style={{ padding: '32px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <ShieldCheck size={28} className="text-emerald-400" />
                <h3 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>
                  MahaRERA Registration &amp; Legal Clearances
                </h3>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Skyi Songbirds and its individual residential towers are 100% registered under the Maharashtra Real Estate Regulatory Authority (MahaRERA) with full clear title, environmental clearances, and pre-approved home loan project files.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', marginBottom: '24px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '12px 16px', borderRadius: '10px' }}>
                  <div style={{ fontSize: '0.8rem', color: '#ff6b35', fontWeight: 700 }}>1 BHK NEW TOWER LINE</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>Aria Heights Phase I</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>MahaRERA: <strong>P52100028121</strong></div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '12px 16px', borderRadius: '10px' }}>
                  <div style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 700 }}>TOWNSHIP PHASE A</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>Songbirds Phase A</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>MahaRERA: <strong>P52100000769</strong></div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '12px 16px', borderRadius: '10px' }}>
                  <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 700 }}>TOWNSHIP PHASE B &amp; E</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>Songbirds Phase B &amp; E</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>MahaRERA: <strong>P52100001117 / P52100019348</strong></div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href="https://maharera.maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ff6b35', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none' }}
                >
                  Verify on Official MahaRERA Portal <ExternalLink size={14} />
                </a>
                <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                  Approved by SBI • HDFC Bank • ICICI Bank • Axis Bank • Bank of Maharashtra
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Frequently Asked Questions ─── */}
        <section style={{ padding: '80px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span style={{ color: '#ff6b35', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Clear Answers
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 900, color: '#ffffff', marginTop: '8px' }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="glass" style={{ padding: '22px 26px', borderRadius: '14px' }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 8px 0' }}>
                  What is the newly launched 1 BHK tower at Skyi Songbirds?
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  The newly launched residential tower line is <strong>Aria Heights</strong> inside the 45-acre Skyi Songbirds master township in Bhugaon, Paud Road, Pune. It features smart 1 BHK eco-residences with 430 Sq.Ft. usable carpet area and zero-dead-corridor layouts overlooking the 7,000-acre NDA forest reserve.
                </p>
              </div>

              <div className="glass" style={{ padding: '22px 26px', borderRadius: '14px' }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 8px 0' }}>
                  What is the exact starting price and booking token for the 1 BHK?
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  The 1 BHK at Aria Heights starts from <strong>₹38 Lakhs*</strong> (base agreement value), with estimated all-inclusive pricing of ~₹42.5 Lakhs* including stamp duty, registration, and 1% GST under affordable housing norms. You can book your preferred unit with a token amount of just <strong>₹51,000*</strong>.
                </p>
              </div>

              <div className="glass" style={{ padding: '22px 26px', borderRadius: '14px' }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 8px 0' }}>
                  What are the room dimensions in the 430 Sq.Ft. layout?
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  The layout includes a Living &amp; Dining Room (10&apos;0&quot; × 13&apos;6&quot;) with an attached Hillside Sundeck (10&apos;0&quot; × 4&apos;6&quot;), a Master Bedroom (10&apos;0&quot; × 11&apos;0&quot;) with wardrobe niche, a Modular Kitchen (7&apos;0&quot; × 8&apos;0&quot;) with separate Dry Balcony (3&apos;6&quot; × 5&apos;0&quot;), and a Designer Bathroom (7&apos;0&quot; × 4&apos;6&quot;).
                </p>
              </div>

              <div className="glass" style={{ padding: '22px 26px', borderRadius: '14px' }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 8px 0' }}>
                  Do 1 BHK residents get access to the 5-Acre Poona Western Club?
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Yes! Aria Heights residents enjoy full access to all campus amenities, including the operational 5-Acre Poona Western Club (Olympic swimming pool, tennis courts, cricket pitch, badminton academy, gym, restaurant, and sports coaching).
                </p>
              </div>

              <div className="glass" style={{ padding: '22px 26px', borderRadius: '14px' }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 8px 0' }}>
                  Which banks have pre-approved home loans for Aria Heights?
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Aria Heights and Skyi Songbirds are pre-approved for up to 90% home loan financing by SBI, HDFC Bank, ICICI Bank, Axis Bank, and Bank of Maharashtra, with low monthly EMI options starting ~₹24,999/month.
                </p>
              </div>

              <div className="glass" style={{ padding: '22px 26px', borderRadius: '14px' }}>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 8px 0' }}>
                  How do I book a site visit with free cab pickup?
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Click on the &ldquo;Book Free VIP Cab Site Visit&rdquo; button or call/WhatsApp <strong>+91 7744009295</strong>. Our team arranges a dedicated air-conditioned cab to pick you up from your doorstep anywhere in Pune, take you on a guided tour of the sample flat and club, and drop you back safely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA Strip ─── */}
        <section style={{ padding: '80px 24px', textAlign: 'center', background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.2) 0%, rgba(7, 11, 31, 1) 75%)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <span style={{ background: 'rgba(255, 107, 53, 0.2)', color: '#ff6b35', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
              Priority Booking Window
            </span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', fontWeight: 900, color: '#ffffff', margin: '16px 0' }}>
              Step Into Songbirds Aria Heights Today
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px' }}>
              Experience the sample 1 BHK (430 Sq.Ft.) and sample 3 BHK residences in person. 
              Schedule your private VIP site tour with complimentary AC cab pickup anywhere across Pune.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
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
                  boxShadow: '0 8px 25px rgba(255, 107, 53, 0.4)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Calendar size={18} /> Schedule Free VIP Site Visit
              </button>

              <button
                type="button"
                onClick={openWhatsApp}
                style={{
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid #25D366',
                  color: '#25D366',
                  padding: '16px 28px',
                  borderRadius: '12px',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <PhoneCall size={18} /> Chat with Sales Desk (+91 7744009295)
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenSiteVisit={() => setIsVisitOpen(true)} />
      <FloatingActions onOpenVisitModal={() => setIsVisitOpen(true)} />
      <SiteVisitModal isOpen={isVisitOpen} onClose={() => setIsVisitOpen(false)} defaultProject="Skyi Songbirds — Aria Heights 1 BHK (Bhugaon)" />
      <FloorPlanModal
        isOpen={isPlanOpen}
        onClose={() => setIsPlanOpen(false)}
        projectTitle="Skyi Songbirds — Aria Heights New Launch"
        onBookVisit={() => {
          setIsPlanOpen(false);
          setIsVisitOpen(true);
        }}
      />
    </>
  );
}
