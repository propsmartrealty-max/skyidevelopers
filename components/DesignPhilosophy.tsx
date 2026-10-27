'use client';

import { motion } from 'framer-motion';
import { Sun, Maximize2, Leaf, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';
import './DesignPhilosophy.css';

interface PhilosophyPillar {
  icon: typeof Sun;
  theme: 'gold' | 'blue' | 'green' | 'purple';
  badge: string;
  title: string;
  description: string;
  metrics: string[];
}

const PILLARS: PhilosophyPillar[] = [
  {
    icon: Sun,
    theme: 'gold',
    badge: 'Proprietary Innovation',
    title: 'Max Light™ Daylighting',
    description:
      'Engineered with seasonal sun-path analysis and rigorous LUX simulation studies. Maximizes natural illumination during winter days while utilizing deep overhangs to mitigate summer thermal heat gain.',
    metrics: [
      'Exceeds National Building Code LUX benchmarks',
      'Up to 40% reduction in daytime artificial lighting',
      'Dual-aspect natural sunlight in all habitable rooms',
    ],
  },
  {
    icon: Maximize2,
    theme: 'blue',
    badge: 'Spatial Intelligence',
    title: 'Zero Wastage Architecture',
    description:
      'Eliminating dead internal corridors to deliver 100% usable carpet area. Every square foot is meticulously planned for living, dining, and unobstructed Sahyadri cross-ventilation.',
    metrics: [
      '100% usable carpet area efficiency',
      'Zero wasted square feet in dead hallways',
      'Optimized natural wind corridors from NDA forests',
    ],
  },
  {
    icon: Leaf,
    theme: 'green',
    badge: 'Environmental Benchmark',
    title: 'IGBC Platinum Sustainability',
    description:
      'Sustainability as a core foundation. Incorporates 100% rainwater harvesting, decentralized sewage treatment plants, organic waste converters, and preservation of natural hill contours.',
    metrics: [
      'Certified IGBC Platinum Green Homes Rating',
      '100% on-site greywater recycling for landscapes',
      '70%+ open green spaces directly facing forests & lakes',
    ],
  },
  {
    icon: Trophy,
    theme: 'purple',
    badge: 'Active Community Living',
    title: 'Integrated Sports & Wellness',
    description:
      'Pioneering integrated sports townships. Homes are connected to the 5-acre Poona Western Club featuring professional football, cricket, tennis, and Olympic-length swimming facilities.',
    metrics: [
      '5-Acre fully operational Poona Western Club',
      'Olympic-length heated swimming pool & squash courts',
      'Over 150+ industry and architecture awards won',
    ],
  },
];

export default function DesignPhilosophy() {
  return (
    <section className="philosophy-section" id="philosophy">
      <div className="philosophy-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subtitle">Architectural Ethos</span>
          <h2 className="section-title">
            Built Around Life.<br />
            <span className="gradient-text">Shaped by Light, Air, and Proportion.</span>
          </h2>
          <p style={{ maxWidth: '780px', margin: '14px auto 0', color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>
            Every SKYi development is rooted in acute environmental observation — evaluating light angles, air circulation, and topography so architecture functions naturally and intuitively.
          </p>
          <div className="glow-line" style={{ margin: '18px auto 0' }} />
        </motion.div>

        <div className="philosophy-grid">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="philosophy-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`philosophy-icon-wrap ${pillar.theme}`}>
                  <Icon size={26} />
                </div>
                <span className="philosophy-badge">{pillar.badge}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <ul className="philosophy-metrics">
                  {pillar.metrics.map((m) => (
                    <li key={m} className="philosophy-metric-item">
                      <span className="philosophy-metric-bullet" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="philosophy-quote-strip"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="philosophy-quote-text">
            “Architecture should not compete with nature; it should channel nature into everyday living. From Max Light™ to Zero Wastage, our homes are designed for generations.”
          </div>
          <div className="philosophy-quote-author">
            — SKYi Design Principles (skyi.com)
          </div>
        </motion.div>
      </div>
    </section>
  );
}
