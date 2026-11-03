import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/FloatingActions';
import { ShieldCheck, Lock, FileText, Globe, AlertCircle, ArrowLeft, ExternalLink, Mail, Phone, CheckCircle2 } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Privacy Policy & DPDP Compliance | SKYi Developers Marketing Portal',
  description: 'Official Privacy Policy, Data Protection (DPDP Act 2023), Cookie Disclosures, and MahaRERA Compliance for skyidevelopers.in, managed by PropSmart Realty (Authorized Channel Partner).',
  alternates: {
    canonical: 'https://skyidevelopers.in/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy & DPDP Compliance | SKYi Developers Marketing Portal',
    description: 'Learn how your data is protected under DPDP Act 2023. Channel partner disclosures, MahaRERA registrations, and transparent privacy practices.',
    url: 'https://skyidevelopers.in/privacy-policy',
    siteName: 'SKYi Developers Marketing Portal',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | SKYi Developers Marketing Portal',
    description: 'Data protection and channel partner disclosures for skyidevelopers.in.',
  },
};

const RERA_PROJECT_REGISTRATIONS = [
  {
    name: 'Skyi Songbirds (Ph A, B, E & Extensions)',
    location: 'Bhugaon Foothills, Paud Road, Pune',
    type: 'Eco-Township Residential Apartments',
    rera: 'P52100000769, P52100001117, P52100019348, P52100047992, P52100000764, P52100000643, P52100000805',
    status: 'Delivered & Ongoing',
  },
  {
    name: 'SKYi Manas Lake (Ph II, III, VI, VIII & Plotting)',
    location: 'Manas Lake Campus, Bhukum, Paud Road, Pune',
    type: 'Lakefront Township & PMRDA NA Plots',
    rera: 'P52100000513, P52100000514, P52100026954, P52100052033, P52100079680',
    status: 'Delivered & Launching Soon',
  },
  {
    name: 'SKYi Manas Lake PMRDA NA Bungalow Plots (Bhukum)',
    location: 'Manas Lake Waterfront, Bhukum, Paud Road, Pune',
    type: 'PMRDA Sanctioned Collector NA Villa Plots',
    rera: 'PMRDA Sanctioned Collector NA Layout / 100% Clear Title 7/12 Extract',
    status: 'Clear Title / Immediate Registration',
  },
  {
    name: 'Five Racecourse (Sopan Baug, Pune)',
    location: 'Sopan Baug / Racecourse, Pune',
    type: 'Ultra Luxury 4 & 5 BHK Panoramic Residences',
    rera: 'MahaRERA Registered Signature Living',
    status: 'Under Construction',
  },
  {
    name: 'Five Aguada (Bandstand, Bandra West, Mumbai)',
    location: 'Bandstand, Bandra West, Mumbai',
    type: 'Ultra Luxury 4, 5 & 6 BHK Sea-Facing Residences',
    rera: 'MahaRERA Registered Oceanfront Signature Collection',
    status: 'Exclusive Collection',
  },
  {
    name: 'Five Maidan (Baner, Pune)',
    location: 'Pancard Club Road, Baner, Pune',
    type: 'Exclusive 4 BHK Parkland Living',
    rera: 'MahaRERA Registered Baner Parkland Living',
    status: 'Under Construction',
  },
  {
    name: 'SKYi Tigers Nest & PWC Towers',
    location: 'Bhugaon Hilltop / Songbirds Campus, Pune',
    type: 'Hillside Sanctuary & Club Homes',
    rera: 'P52100000769, P52100000643, P52100000805',
    status: 'Ongoing & Ready Phases',
  },
  {
    name: 'SKYi Iris & Iris Riverside',
    location: 'Baner / Bavdhan, Pune',
    type: 'Luxury Boutique Residences',
    rera: 'P52100019348',
    status: 'Delivered & OC Received',
  },
  {
    name: 'SKYi Star City (Ph I to V)',
    location: 'Dhayari Hillside, Sinhagad Road, Pune',
    type: 'Integrated Residential Township',
    rera: 'P52100026727, P52100029481, P52100029474, P52100034274, P52100050099',
    status: 'Delivered & OC Received',
  },
];

export default function PrivacyPolicyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy — SKYi Developers Marketing Portal',
    url: 'https://skyidevelopers.in/privacy-policy',
    description: 'Privacy Policy and data processing disclosures under DPDP Act 2023 for skyidevelopers.in, managed by PropSmart Realty.',
    publisher: {
      '@type': 'Organization',
      name: 'PropSmart Realty',
      email: 'propsmartrealty@gmail.com',
      telephone: '+917744009295',
      url: 'https://skyidevelopers.in',
    },
    inLanguage: 'en-IN',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main style={{ minHeight: '100vh', background: '#070b1f', color: '#e2e8f0', paddingTop: '90px', paddingBottom: '60px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '24px' }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px', color: '#475569' }}>/</span>
            <span style={{ color: '#c8a96e', fontWeight: 600 }}>Privacy Policy</span>
          </nav>

          {/* Header Banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(200, 169, 110, 0.12) 0%, rgba(15, 23, 42, 0.6) 100%)',
            border: '1px solid rgba(200, 169, 110, 0.25)',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '40px',
          }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '20px', padding: '6px 14px', fontSize: '0.8rem', color: '#34d399', fontWeight: 600, marginBottom: '16px' }}>
              <ShieldCheck size={16} /> DPDP Act 2023 &amp; Google Ads Compliant
            </div>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ffffff', margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Privacy Policy &amp; Data Protection
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>
              Effective Date: January 1, 2026 | Last Updated: March 2026. Learn how your data is collected, processed, and safeguarded across skyidevelopers.in.
            </p>
          </div>

          {/* Partner & Non-Affiliation Disclosure */}
          <section style={{
            background: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <AlertCircle size={22} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#38bdf8', margin: '0 0 8px' }}>
                  Channel Partner Transparency &amp; Operator Identification
                </h2>
                <p style={{ fontSize: '0.92rem', color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>
                  This website (<strong>skyidevelopers.in</strong>) is operated and managed by <strong>PropSmart Realty</strong>, an authorized real estate channel partner and marketing agency for projects developed by SKYi Developers. This website is not the official corporate website of the developer. It is an informational marketing portal designed to showcase available residential properties and PMRDA NA plots. All bookings through our advisory desk carry <strong>0% Brokerage</strong> for developer inventory.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Information We Collect */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileText size={20} style={{ color: '#c8a96e' }} /> 1. Information We Collect
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '12px' }}>
              We collect information you voluntarily provide when inquiring about projects, booking VIP site visits, requesting floor plans, or using financial calculators:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem', color: '#cbd5e1' }}>
              <li><strong>Contact Information:</strong> Full Name, Email Address, and Phone Number (used for SMS, WhatsApp, and call communications).</li>
              <li><strong>Property Preferences:</strong> Project of interest (e.g., Skyi Songbirds, SKYi Manas Lake NA Plots, Five Racecourse), preferred budget, configuration (1, 2, 3, 4 BHK or Plot size), and expected timeline.</li>
              <li><strong>Site Visit Scheduling Data:</strong> Preferred visit date, time slot, and cab pickup location (if complimentary AC cab service is requested).</li>
              <li><strong>Technical &amp; Usage Data:</strong> Anonymized IP addresses, browser types, operating systems, and page navigation patterns collected via Google Analytics and Cloudflare for website security and optimization.</li>
            </ul>
          </section>

          {/* Section 2: Purpose of Data Collection */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Lock size={20} style={{ color: '#c8a96e' }} /> 2. Purpose and Legal Basis of Processing
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '12px' }}>
              In compliance with the <strong>Digital Personal Data Protection (DPDP) Act 2023</strong> and Google Ads Lead Generation Policies, your data is processed solely for legitimate real estate advisory purposes:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginTop: '16px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '16px' }}>
                <CheckCircle2 size={18} style={{ color: '#10b981', marginBottom: '8px' }} />
                <strong style={{ display: 'block', color: '#f8fafc', marginBottom: '4px' }}>VIP Consultation &amp; Booking</strong>
                <span style={{ fontSize: '0.88rem', color: '#94a3b8' }}>Arranging site visits, confirming private AC cab pickups, and providing authorized inventory pricing.</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '16px' }}>
                <CheckCircle2 size={18} style={{ color: '#10b981', marginBottom: '8px' }} />
                <strong style={{ display: 'block', color: '#f8fafc', marginBottom: '4px' }}>Brochure &amp; Layout Delivery</strong>
                <span style={{ fontSize: '0.88rem', color: '#94a3b8' }}>Transmitting sanctioned floor plans, PMRDA 7/12 land extract documents, and price cost sheets.</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '10px', padding: '16px' }}>
                <CheckCircle2 size={18} style={{ color: '#10b981', marginBottom: '8px' }} />
                <strong style={{ display: 'block', color: '#f8fafc', marginBottom: '4px' }}>MahaRERA &amp; Regulatory Verification</strong>
                <span style={{ fontSize: '0.88rem', color: '#94a3b8' }}>Sharing statutory registration details, sanction orders, and quarterly progress updates.</span>
              </div>
            </div>
          </section>

          {/* Section 3: Data Sharing & Non-Disclosure */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={20} style={{ color: '#c8a96e' }} /> 3. Data Protection, Security &amp; Zero Spam Guarantee
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1' }}>
              We enforce strict confidentiality safeguards:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem', color: '#cbd5e1' }}>
              <li><strong>No Data Brokering:</strong> We never sell, rent, trade, or distribute your personal details to external marketing agencies or lead aggregators.</li>
              <li><strong>Secure Transmission:</strong> All form submissions are encrypted in transit via industry-standard SSL/TLS protocols.</li>
              <li><strong>Direct Developer Sales Desk Integration:</strong> Inquiries are handled exclusively by PropSmart Realty advisors in direct coordination with SKYi Developers sales management.</li>
            </ul>
          </section>

          {/* Section 4: Cookies & Google Ads Compliance */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Globe size={20} style={{ color: '#c8a96e' }} /> 4. Cookies, Google Ads &amp; Conversion Tracking
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1' }}>
              We use first-party cookies and Google tracking tags to improve user experience and measure marketing efficacy:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem', color: '#cbd5e1' }}>
              <li><strong>Google Ads &amp; Analytics:</strong> Cookies help track ad clicks and form conversions. Users may opt out of personalized Google advertising via <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline' }}>Google Ad Settings <ExternalLink size={12} style={{ display: 'inline' }} /></a>.</li>
              <li><strong>Strict Prohibition of Sensitive Data:</strong> In accordance with Google Ads policy, we never collect sensitive financial data, government IDs, biometric data, or health records through this portal.</li>
            </ul>
          </section>

          {/* Section 5: MahaRERA Sanctioned Registrations Table */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileText size={20} style={{ color: '#c8a96e' }} /> 5. MahaRERA Sanctioned Project Registrations
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '14px' }}>
              In full compliance with MahaRERA guidelines, all projects represented on this marketing portal are registered with the Maharashtra Real Estate Regulatory Authority. Official filings can be verified at <a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline' }}>maharera.maharashtra.gov.in <ExternalLink size={12} style={{ display: 'inline' }} /></a>:
            </p>
            <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'rgba(255, 255, 255, 0.06)', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
                    <th style={{ padding: '12px 16px', color: '#f8fafc', fontWeight: 600 }}>Project Name</th>
                    <th style={{ padding: '12px 16px', color: '#f8fafc', fontWeight: 600 }}>Location</th>
                    <th style={{ padding: '12px 16px', color: '#f8fafc', fontWeight: 600 }}>Development Type</th>
                    <th style={{ padding: '12px 16px', color: '#f8fafc', fontWeight: 600 }}>MahaRERA Registration Number(s)</th>
                  </tr>
                </thead>
                <tbody>
                  {RERA_PROJECT_REGISTRATIONS.map((p, idx) => (
                    <tr key={p.name} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', background: idx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.02)' }}>
                      <td style={{ padding: '12px 16px', color: '#ffffff', fontWeight: 600 }}>{p.name}</td>
                      <td style={{ padding: '12px 16px', color: '#94a3b8' }}>{p.location}</td>
                      <td style={{ padding: '12px 16px', color: '#c8a96e' }}>{p.type}</td>
                      <td style={{ padding: '12px 16px', fontFamily: 'monospace', color: '#34d399', fontSize: '0.82rem' }}>{p.rera}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '10px' }}>
              * Note: Plotting projects are strictly restricted to SKYi Manas Lake (Bhukum). All other featured properties are residential apartments, townhomes, or high-rise residences.
            </p>
          </section>

          {/* Section 6: Grievance Officer & Contact Details */}
          <section style={{
            background: 'rgba(200, 169, 110, 0.08)',
            border: '1px solid rgba(200, 169, 110, 0.25)',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '40px',
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#c8a96e', margin: '0 0 12px' }}>
              6. Grievance Officer &amp; Consent Revocation (DPDP 2023)
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 16px' }}>
              Under the Digital Personal Data Protection Act, you have the right to review, update, or revoke consent for marketing communications at any time. To request data deletion or raise a privacy grievance, please reach out directly:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} style={{ color: '#c8a96e' }} />
                <span>Email: <a href="mailto:propsmartrealty@gmail.com" style={{ color: '#38bdf8', textDecoration: 'underline' }}>propsmartrealty@gmail.com</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} style={{ color: '#c8a96e' }} />
                <span>Hotline: <a href="tel:+917744009295" style={{ color: '#38bdf8', textDecoration: 'underline' }}>+91 7744009295</a></span>
              </div>
              <div style={{ width: '100%', color: '#94a3b8', fontSize: '0.85rem' }}>
                Office: PropSmart Realty Desk, SKYi Experience Partner, Skymark One, Balewadi / Bhugaon, Pune — 411045
              </div>
            </div>
          </section>

          {/* Back to Home CTA */}
          <div style={{ textAlign: 'center', paddingTop: '20px' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: '#c8a96e',
                color: '#070b1f',
                fontWeight: 700,
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease',
              }}
            >
              <ArrowLeft size={16} /> Return to Homepage
            </Link>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}
