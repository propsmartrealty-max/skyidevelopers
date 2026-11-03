import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FloatingActions from '../../components/FloatingActions';
import { ShieldAlert, FileText, AlertTriangle, Building2, CheckCircle2, ArrowLeft, ExternalLink, Mail, Phone } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Legal Disclaimer & MahaRERA Disclosures | SKYi Developers Marketing Portal',
  description: 'Official Legal Disclaimer, Authorized Channel Partner (PropSmart Realty) Statement, MahaRERA Registrations, and Pricing Terms for skyidevelopers.in.',
  alternates: {
    canonical: 'https://skyidevelopers.in/disclaimer',
  },
  openGraph: {
    title: 'Legal Disclaimer & MahaRERA Disclosures | SKYi Developers Marketing Portal',
    description: 'Read the official marketing disclaimer, channel partner disclosure, and MahaRERA compliance for skyidevelopers.in.',
    url: 'https://skyidevelopers.in/disclaimer',
    siteName: 'SKYi Developers Marketing Portal',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Legal Disclaimer | SKYi Developers Marketing Portal',
    description: 'Official channel partner disclosure, pricing terms, and MahaRERA details for skyidevelopers.in.',
  },
};

const RERA_PROJECT_REGISTRATIONS = [
  {
    name: 'Skyi Songbirds (Ph A, B, E & Extensions)',
    location: 'Bhugaon Foothills, Paud Road, Pune',
    type: 'Eco-Township Residential Apartments',
    rera: 'P52100000769, P52100001117, P52100019348, P52100047992, P52100000764, P52100000643, P52100000805',
  },
  {
    name: 'SKYi Manas Lake (Ph II, III, VI, VIII & Plotting)',
    location: 'Manas Lake Campus, Bhukum, Paud Road, Pune',
    type: 'Lakefront Township & PMRDA NA Plots',
    rera: 'P52100000513, P52100000514, P52100026954, P52100052033, P52100079680',
  },
  {
    name: 'SKYi Manas Lake PMRDA NA Bungalow Plots (Bhukum)',
    location: 'Manas Lake Waterfront, Bhukum, Paud Road, Pune',
    type: 'PMRDA Sanctioned Collector NA Villa Plots',
    rera: 'PMRDA Sanctioned Collector NA Layout / 100% Clear Title 7/12 Extract',
  },
  {
    name: 'Five Racecourse (Sopan Baug, Pune)',
    location: 'Sopan Baug / Racecourse, Pune',
    type: 'Ultra Luxury 4 & 5 BHK Panoramic Residences',
    rera: 'MahaRERA Registered Signature Living',
  },
  {
    name: 'Five Aguada (Bandstand, Bandra West, Mumbai)',
    location: 'Bandstand, Bandra West, Mumbai',
    type: 'Ultra Luxury 4, 5 & 6 BHK Sea-Facing Residences',
    rera: 'MahaRERA Registered Oceanfront Signature Collection',
  },
  {
    name: 'Five Maidan (Baner, Pune)',
    location: 'Pancard Club Road, Baner, Pune',
    type: 'Exclusive 4 BHK Parkland Living',
    rera: 'MahaRERA Registered Baner Parkland Living',
  },
  {
    name: 'SKYi Tigers Nest & PWC Towers',
    location: 'Bhugaon Hilltop / Songbirds Campus, Pune',
    type: 'Hillside Sanctuary & Club Homes',
    rera: 'P52100000769, P52100000643, P52100000805',
  },
  {
    name: 'SKYi Iris & Iris Riverside',
    location: 'Baner / Bavdhan, Pune',
    type: 'Luxury Boutique Residences',
    rera: 'P52100019348',
  },
  {
    name: 'SKYi Star City (Ph I to V)',
    location: 'Dhayari Hillside, Sinhagad Road, Pune',
    type: 'Integrated Residential Township',
    rera: 'P52100026727, P52100029481, P52100029474, P52100034274, P52100050099',
  },
];

export default function DisclaimerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Legal Disclaimer — SKYi Developers Marketing Portal',
    url: 'https://skyidevelopers.in/disclaimer',
    description: 'Statutory disclaimer and authorized channel partner transparency for skyidevelopers.in.',
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
            <span style={{ color: '#c8a96e', fontWeight: 600 }}>Legal Disclaimer</span>
          </nav>

          {/* Header Banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(15, 23, 42, 0.6) 100%)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
            borderRadius: '16px',
            padding: '32px',
            marginBottom: '40px',
          }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '20px', padding: '6px 14px', fontSize: '0.8rem', color: '#f87171', fontWeight: 600, marginBottom: '16px' }}>
              <ShieldAlert size={16} /> Statutory Transparency &amp; Real Estate Disclosures
            </div>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ffffff', margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
              Legal Disclaimer &amp; Regulatory Disclosures
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#94a3b8', margin: 0, lineHeight: '1.6' }}>
              Mandatory disclosures under MahaRERA, Advertising Standards Council of India (ASCI), and Google Advertising Policies.
            </p>
          </div>

          {/* Section 1: Channel Partner Status */}
          <section style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
          }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', margin: '0 0 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Building2 size={20} style={{ color: '#c8a96e' }} /> 1. Authorized Channel Partner Notice (Not Developer Official Site)
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1', margin: '0 0 12px' }}>
              This portal (<code>https://skyidevelopers.in/</code>) is operated and managed by <strong>PropSmart Realty</strong>, an authorized real estate channel partner and digital marketing partner for properties developed by <strong>SKYi Developers</strong>.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1', margin: 0 }}>
              This website is <strong>not the official corporate portal of SKYi Developers</strong>. It serves strictly as an informational and sales assistance platform for prospective buyers, investors, and channel partners looking for verified project details, floor plans, and VIP site visit coordination. All bookings facilitated through PropSmart Realty are direct with the developer and carry <strong>0% Brokerage</strong> for developer inventory.
            </p>
          </section>

          {/* Section 2: Strict Plotting Restriction */}
          <section style={{
            background: 'rgba(200, 169, 110, 0.08)',
            border: '1px solid rgba(200, 169, 110, 0.25)',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '32px',
          }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#c8a96e', margin: '0 0 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AlertTriangle size={20} style={{ color: '#c8a96e' }} /> 2. Plotting Projects Policy (Strictly Restricted to SKYi Manas Lake)
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1', margin: '0 0 12px' }}>
              Notice is hereby given that <strong>plotted developments are strictly restricted to SKYi Manas Lake (Bhukum, Paud Road, Pune)</strong>. Plotted offerings at SKYi Manas Lake feature PMRDA Sanctioned Collector NA Villa Plots with individual 7/12 extract demarcation.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1', margin: 0 }}>
              No other project listed on this portal offers land plots. <strong>Skyi Songbirds, Five Racecourse, Five Aguada, Five Maidan, Tigers Nest, and SKYi Star City are strictly residential apartments, sky mansions, townhomes, or club suites</strong>.
            </p>
          </section>

          {/* Section 3: Pricing & Asterisk Explanations */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileText size={20} style={{ color: '#c8a96e' }} /> 3. Pricing, Special Offers &amp; Asterisk Disclosures
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '12px' }}>
              In compliance with ASCI guidelines and consumer protection norms:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', fontSize: '0.95rem', color: '#cbd5e1' }}>
              <li><strong>Starting &amp; Indicative Pricing:</strong> All prices mentioned (including &ldquo;1 BHK All-Inclusive Only ₹49 Lacs*&rdquo; or &ldquo;PMRDA NA Plots from ₹95 Lacs*&rdquo;) are base starting rates for select configurations/inventory tiers at the time of publication and are subject to revision without prior notice.</li>
              <li><strong>Government Taxes &amp; Statutory Dues:</strong> Asterisks (*) indicate that prices may exclude or specify statutory charges such as Stamp Duty, Registration Fees, GST, Infra/Development charges, society maintenance, and preferential location charges (PLC / Floor rise), unless explicitly itemized as &ldquo;all-inclusive&rdquo; in the developer agreement.</li>
              <li><strong>No Binding Contract:</strong> The pricing and offers displayed do not constitute an offer for sale or a binding contract. Definitive commercial terms are governed solely by the formal Agreement for Sale executed between the purchaser and SKYi Developers.</li>
            </ul>
          </section>

          {/* Section 4: Architectural Visuals & Renderings */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileText size={20} style={{ color: '#c8a96e' }} /> 4. Artistic Impressions &amp; Layout Visuals
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1' }}>
              All 3D renderings, computer-generated walk-throughs, elevation visuals, sample flat photographs, and landscaped surroundings shown on this portal are artist impressions and conceptual representations. Furniture, interior decor, electronic appliances, and decorative finishes shown in blueprints or sample flats are illustrative and do not form part of standard developer deliverables. Actual layout, dimensions, elevation, and specifications are subject to sanction approvals from PMRDA, PMC, or competent planning authorities.
            </p>
          </section>

          {/* Section 5: MahaRERA Registrations Master Table */}
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={20} style={{ color: '#10b981' }} /> 5. MahaRERA Sanctioned Project Registrations
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '14px' }}>
              Project details, approved blueprints, commencement certificates, and quarterly disclosure records can be examined directly on the official Maharashtra Real Estate Regulatory Authority portal: <a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8', textDecoration: 'underline' }}>maharera.maharashtra.gov.in <ExternalLink size={12} style={{ display: 'inline' }} /></a>.
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
          </section>

          {/* Section 6: Official Communication */}
          <section style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '24px',
            marginBottom: '40px',
          }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', margin: '0 0 12px' }}>
              6. Channel Partner Contact &amp; Clarifications
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: '1.6', margin: '0 0 16px' }}>
              For verification of project approvals, title documents, or clarifications regarding any listing:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} style={{ color: '#c8a96e' }} />
                <span>Email: <a href="mailto:propsmartrealty@gmail.com" style={{ color: '#38bdf8', textDecoration: 'underline' }}>propsmartrealty@gmail.com</a></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} style={{ color: '#c8a96e' }} />
                <span>Sales Desk Hotline: <a href="tel:+917744009295" style={{ color: '#38bdf8', textDecoration: 'underline' }}>+91 7744009295</a></span>
              </div>
            </div>
          </section>

          {/* Action Button */}
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
