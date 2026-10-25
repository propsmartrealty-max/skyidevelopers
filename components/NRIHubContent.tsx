'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import SiteVisitModal from './SiteVisitModal';
import {
  Globe,
  ShieldCheck,
  TrendingUp,
  Video,
  PhoneCall,
  Compass,
  Award,
  CheckCircle2,
  ArrowRight,
  Calculator,
  ChevronDown,
} from 'lucide-react';
import '../app/nri-hub/nri-hub.css';

const CURRENCIES = [
  { code: 'USD', name: 'US Dollar ($)', rate: 87.2, symbol: '$' },
  { code: 'AED', name: 'UAE Dirham (د.إ)', rate: 23.7, symbol: 'AED ' },
  { code: 'GBP', name: 'British Pound (£)', rate: 110.5, symbol: '£' },
  { code: 'SGD', name: 'Singapore Dollar (S$)', rate: 65.4, symbol: 'S$' },
  { code: 'AUD', name: 'Australian Dollar (A$)', rate: 56.8, symbol: 'A$' },
  { code: 'CAD', name: 'Canadian Dollar (C$)', rate: 62.1, symbol: 'C$' },
  { code: 'EUR', name: 'Euro (€)', rate: 94.8, symbol: '€' },
];

export default function NRIHubContent() {
  const [isVisitOpen, setIsVisitOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [inrAmountLakhs, setInrAmountLakhs] = useState<number>(85);
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(0);

  const curr = CURRENCIES.find((c) => c.code === selectedCurrency) || CURRENCIES[0];
  const convertedValue = Math.round((inrAmountLakhs * 100000) / curr.rate);
  const formattedConverted = `${curr.symbol}${convertedValue.toLocaleString('en-US')}`;

  const toggleFaq = (idx: number) => {
    setActiveFaqIdx(activeFaqIdx === idx ? null : idx);
  };

  return (
    <>
      <Navbar onOpenVisitModal={() => setIsVisitOpen(true)} />

      <main className="nri-main-container">
        {/* ─── Hero Section ─── */}
        <section className="nri-hero">
          <div className="nri-hero-content">
            <div className="nri-badge">
              <Globe size={16} /> Global NRI &amp; International Investor Desk
            </div>
            <h1 className="nri-title">
              Invest in Pune’s Highest-Yielding<br />
              <span className="gradient-text">Eco-Townships &amp; PMRDA NA Plots</span>
            </h1>
            <p className="nri-subtitle">
              FEMA &amp; RBI compliant acquisition, 100% repatriable capital, MahaRERA escrow security, and seamless digital booking from the USA, UAE (Dubai), UK, Singapore, Australia, Canada, and Europe.
            </p>

            <div className="nri-cta-group">
              <button
                type="button"
                onClick={() => setIsVisitOpen(true)}
                className="nri-btn-primary"
              >
                <PhoneCall size={18} /> Schedule VIP Video Consultation / Visit
              </button>
              <Link href="/virtual-tour" className="nri-btn-secondary">
                <Video size={18} /> Experience 360° Virtual Tours
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Global Trust Pillars Strip ─── */}
        <section className="nri-pillars-section">
          <div className="nri-container">
            <div className="nri-pillars-grid">
              <div className="nri-pillar-card">
                <ShieldCheck size={28} className="text-amber-400" />
                <h3>100% FEMA &amp; RBI Compliant</h3>
                <p>General permission for NRIs &amp; OCIs to acquire residential properties and PMRDA-sanctioned NA plots with clean 7/12 title deeds.</p>
              </div>

              <div className="nri-pillar-card">
                <Globe size={28} className="text-emerald-400" />
                <h3>NRE / NRO Repatriation</h3>
                <p>Seamless international fund transfers and capital repatriation under standard RBI Form 15CA/CB documentation.</p>
              </div>

              <div className="nri-pillar-card">
                <TrendingUp size={28} className="text-sky-400" />
                <h3>14-18% Target Capital CAGR</h3>
                <p>Rapidly appreciating infrastructure corridors: 6-Lane Paud Road Expressway, Pune Ring Road, and Hinjewadi Metro extensions.</p>
              </div>

              <div className="nri-pillar-card">
                <Award size={28} className="text-purple-400" />
                <h3>IGBC Platinum Sustainability</h3>
                <p>Award-winning green townships with 70%+ open greens, zero-waste water recycling, and 5-acre Poona Western Club amenities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Interactive Global Currency Investment Estimator ─── */}
        <section className="nri-calc-section" style={{ padding: '70px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="nri-container">
            <div className="nri-section-header">
              <span className="nri-tag"><Calculator size={14} className="inline mr-1" /> Multi-Currency Estimator</span>
              <h2>Global Currency Investment Calculator</h2>
              <p>Calculate your investment outlay in your home currency with real-time conversion parity.</p>
            </div>

            <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '36px', borderRadius: '20px', border: '1px solid rgba(255,107,53,0.3)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
                    Select Currency
                  </label>
                  <select
                    value={selectedCurrency}
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    style={{ width: '100%', background: '#0d1233', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', padding: '12px 16px', borderRadius: '10px', fontSize: '1rem', fontWeight: 600 }}
                  >
                    {CURRENCIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>
                    Property Value (INR ₹ Lakhs): <strong>₹{inrAmountLakhs} Lakhs</strong>
                  </label>
                  <input
                    type="range"
                    min="45"
                    max="500"
                    step="5"
                    value={inrAmountLakhs}
                    onChange={(e) => setInrAmountLakhs(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#ff6b35', marginTop: '10px' }}
                  />
                </div>
              </div>

              <div style={{ background: 'rgba(7, 11, 31, 0.8)', padding: '20px 24px', borderRadius: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 4px 0' }}>Estimated Global Outlay ({selectedCurrency}):</p>
                  <h3 style={{ color: '#ffd700', fontSize: '2rem', fontWeight: 900, margin: 0 }}>{formattedConverted}*</h3>
                </div>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0 0 4px 0' }}>Estimated Rental Yield:</p>
                  <h4 style={{ color: '#4ade80', fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>4.5% - 6.2% p.a.</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── NRI Strategic Investment Corridors ─── */}
        <section className="nri-corridors-section">
          <div className="nri-container">
            <div className="nri-section-header">
              <span className="nri-tag">High-Growth Micro-Markets</span>
              <h2>Top Pune Growth Corridors for NRI Portfolios</h2>
              <p>Explore high-yield residential landmarks and luxury master-planned communities.</p>
            </div>

            <div className="nri-projects-showcase">
              <div className="nri-project-item">
                <div className="nri-proj-header">
                  <h3>Skyi Songbirds — 45-Acre Eco-Township</h3>
                  <span className="nri-status">Bhugaon / Paud Road</span>
                </div>
                <p>IGBC Platinum certified hillside township just 6 mins from Kothrud &amp; Chandani Chowk. Features 1, 2, 3 &amp; 4 BHK homes, 5-acre sports club, Olympic pool, and 4,000+ resident families.</p>
                <div className="nri-proj-meta">
                  <span><strong>Configurations:</strong> 1, 2, 3 &amp; 4 BHK Residences</span>
                  <span><strong>Starting From:</strong> ₹45 Lakhs* / USD $54K*</span>
                  <span><strong>MahaRERA:</strong> P52100000769</span>
                </div>
                <Link href="/songbirds" className="nri-link">
                  Explore Songbirds Township <ArrowRight size={16} />
                </Link>
              </div>

              <div className="nri-project-item">
                <div className="nri-proj-header">
                  <h3>SKYi Manas Lake — 90-Acre Township &amp; NA Plots</h3>
                  <span className="nri-status">Bhukum / Bavdhan Belt</span>
                </div>
                <p>Prime lakefront township offering both luxury apartments and PMRDA-sanctioned clear title NA bungalow plots with FSI 1.5, dedicated 40ft wide internal tar roads, underground electricity, and water grids.</p>
                <div className="nri-proj-meta">
                  <span><strong>Configurations:</strong> 2, 3 BHK Flats &amp; NA Villa Plots</span>
                  <span><strong>Starting From:</strong> ₹65 Lakhs* / USD $78K*</span>
                  <span><strong>MahaRERA:</strong> P52100000513</span>
                </div>
                <Link href="/manas-lake" className="nri-link">
                  Explore Manas Lake Township <ArrowRight size={16} />
                </Link>
              </div>

              <div className="nri-project-item">
                <div className="nri-proj-header">
                  <h3>SKYi Tigers Nest &amp; Luxury Line</h3>
                  <span className="nri-status">Bhugaon &amp; Sopan Baug</span>
                </div>
                <p>Boutique 4 &amp; 5 BHK hillside sky mansions overlooking Sahyadri ranges. Exceptional privacy, private elevators, sprawling party decks, and bespoke concierge services for discerning global buyers.</p>
                <div className="nri-proj-meta">
                  <span><strong>Configurations:</strong> 4 &amp; 5 BHK Sky Mansions</span>
                  <span><strong>Starting From:</strong> ₹1.79 Cr* / USD $215K*</span>
                  <span><strong>MahaRERA:</strong> Registered</span>
                </div>
                <Link href="/projects" className="nri-link">
                  View Full Luxury Portfolio <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FEMA & Legal Advisory Guide ─── */}
        <section className="nri-legal-section">
          <div className="nri-container">
            <div className="nri-section-header">
              <span className="nri-tag">Regulatory Framework</span>
              <h2>Step-by-Step NRI Real Estate Acquisition in India</h2>
              <p>Everything you need to know about FEMA, RBI, Power of Attorney, and taxation.</p>
            </div>

            <div className="nri-steps-grid">
              <div className="nri-step-card">
                <div className="step-num">01</div>
                <h4>Select Property &amp; Virtual Due Diligence</h4>
                <p>Schedule a live video walk-through, review MahaRERA registration certificates, sanctioned PMRDA layout drawings, and verified 7/12 land records online.</p>
              </div>

              <div className="nri-step-card">
                <div className="step-num">02</div>
                <h4>Digital Booking &amp; Escrow Token</h4>
                <p>Reserve your unit with an initial token transfer directly via authorized banking channels into the project’s dedicated MahaRERA escrow bank account.</p>
              </div>

              <div className="nri-step-card">
                <div className="step-num">03</div>
                <h4>Power of Attorney (POA) or E-Registration</h4>
                <p>Execute a registered Special Power of Attorney (POA) attested by the Indian Consulate / Embassy in your country of residence, or complete direct e-registration.</p>
              </div>

              <div className="nri-step-card">
                <div className="step-num">04</div>
                <h4>Bank Funding &amp; Timely Possession</h4>
                <p>Avail pre-approved NRI home loans from SBI, HDFC, or ICICI Bank up to 80-85% value with doorstep international document pickup.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── NRI FAQ Section ─── */}
        <section className="nri-faq-section">
          <div className="nri-container">
            <div className="nri-section-header">
              <span className="nri-tag">Knowledge Base</span>
              <h2>Frequently Asked Questions by International Buyers</h2>
            </div>

            <div className="nri-faq-list">
              {[
                {
                  q: 'Do NRIs need Reserve Bank of India (RBI) approval to buy property in Pune?',
                  a: 'No. Under RBI general permissions under FEMA, NRIs and OCIs do not require any prior approval from the Reserve Bank of India to purchase residential properties or sanctioned NA plots in India.',
                },
                {
                  q: 'Which bank accounts can be used to fund property purchases?',
                  a: 'Purchases can be funded through inward remittances from abroad via normal banking channels or through funds held in NRE, NRO, or FCNR accounts in India.',
                },
                {
                  q: 'Can rental income be credited to overseas accounts?',
                  a: 'Rental income from properties in India is credited to an NRO account. After payment of applicable Indian income tax (TDS), the net rental income can be freely remitted overseas under the USD 1 Million Scheme.',
                },
                {
                  q: 'How does SKYi support overseas buyers during site visits?',
                  a: 'SKYi provides a comprehensive VIP NRI Concierge Service including complimentary airport and city cab pickups, personalized 1-on-1 legal documentation briefings, and dedicated video consultations for family members abroad.',
                },
              ].map((faq, idx) => (
                <div
                  key={faq.q}
                  className="nri-faq-item"
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleFaq(idx)}
                >
                  <h4 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span><CheckCircle2 size={18} className="text-emerald-400 inline mr-2" /> {faq.q}</span>
                    <ChevronDown size={18} style={{ transform: activeFaqIdx === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                  </h4>
                  {activeFaqIdx === idx && (
                    <p style={{ marginTop: '12px' }}>{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── NRI Dedicated VIP Desk Trigger ─── */}
        <section className="nri-contact-cta" id="nri-contact">
          <div className="nri-container">
            <div className="nri-cta-card">
              <Compass size={40} className="text-amber-400 mb-4" />
              <h2>Connect with SKYi Global NRI Desk</h2>
              <p>Speak directly with our senior investment managers for customized portfolio allocations, live video walk-throughs, and legal assistance.</p>
              <div className="nri-desk-contact">
                <button
                  type="button"
                  onClick={() => setIsVisitOpen(true)}
                  className="nri-btn-primary"
                >
                  Book Priority Video Consultation
                </button>
                <button
                  type="button"
                  onClick={() => setIsVisitOpen(true)}
                  className="nri-btn-secondary"
                >
                  Schedule VIP Consultation
                </button>
                <a
                  href="https://wa.me/917744009295?text=Hello%20SKYi%20NRI%20Desk%2C%20I%20am%20an%20overseas%20investor%20interested%20in%20Pune%20properties."
                  className="nri-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions onOpenVisitModal={() => setIsVisitOpen(true)} />
      <SiteVisitModal isOpen={isVisitOpen} onClose={() => setIsVisitOpen(false)} />
    </>
  );
}
