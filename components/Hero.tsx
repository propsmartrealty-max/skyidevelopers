'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import './Hero.css';

const TYPEWRITER_STRINGS = [
  'by light, air & proportion.',
  'with Max Light™ design.',
  'around life & nature.',
  'for generations to come.',
];

interface HeroProps {
  onOpenSiteVisit: () => void;
}

export default function Hero({ onOpenSiteVisit }: HeroProps) {
  const heroRef   = useRef<HTMLElement>(null);
  const mouseRef  = useRef({ x: 0, y: 0 });
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  /* Typewriter state — initialized with full phrase for instantaneous LCP */
  const [twIndex,   setTwIndex]   = useState(0);
  const [twText,    setTwText]    = useState(TYPEWRITER_STRINGS[0]);
  const [twCharIdx, setTwCharIdx] = useState(TYPEWRITER_STRINGS[0].length);
  const [twDel,     setTwDel]     = useState(false);

  /* Scroll parallax */
  const { scrollY } = useScroll();
  const bgY      = useTransform(scrollY, [0, 700], [0, 220]);
  const contentY = useTransform(scrollY, [0, 700], [0, 90]);
  const fade     = useTransform(scrollY, [0, 520], [1, 0]);

  /* Mouse parallax — guarded for desktop fine pointer only to save mobile main thread */
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }
    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth  - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    let raf: number;
    const tick = () => {
      setParallax(prev => ({
        x: prev.x + (mouseRef.current.x - prev.x) * 0.045,
        y: prev.y + (mouseRef.current.y - prev.y) * 0.045,
      }));
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  /* Typewriter with deferred cycle for clean, stable LCP capture */
  useEffect(() => {
    const str = TYPEWRITER_STRINGS[twIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!twDel) {
      if (twCharIdx < str.length) {
        t = setTimeout(() => setTwCharIdx(c => c + 1), 68);
      } else {
        t = setTimeout(() => setTwDel(true), 3200);
      }
    } else {
      if (twCharIdx > 0) {
        t = setTimeout(() => setTwCharIdx(c => c - 1), 32);
      } else {
        setTwDel(false);
        setTwIndex(i => (i + 1) % TYPEWRITER_STRINGS.length);
      }
    }
    setTwText(str.substring(0, twCharIdx));
    return () => clearTimeout(t);
  }, [twCharIdx, twDel, twIndex]);

  /* Framer variants optimized for instant FCP / LCP */
  const container: Variants = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 1, y: 0 },
    show:   { opacity: 1, y: 0 },
  };

  const scrollToPortfolio = useCallback(() =>
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }), []);

  return (
    <header className="hero" id="home" ref={heroRef}>

      {/* ── Animated background ── */}
      <motion.div className="hero-bg" style={{ y: bgY }}>
        <motion.div className="gradient-sphere g1"
          style={{ x: parallax.x * -32, y: parallax.y * -22 }} />
        <motion.div className="gradient-sphere g2"
          style={{ x: parallax.x * 26, y: parallax.y * 18 }} />
        <motion.div className="gradient-sphere g3"
          style={{ x: parallax.x * -14, y: parallax.y * 28 }} />

        {[...Array(22)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${5 + (i * 4.4) % 90}%`,
            top:  `${8 + (i * 7.1) % 82}%`,
            animationDelay:    `${(i * 0.38) % 7}s`,
            animationDuration: `${7 + (i * 1.05) % 9}s`,
          } as React.CSSProperties} />
        ))}

        <div className="grid-overlay" />
        <div className="corner-glow corner-glow--tl" />
        <div className="corner-glow corner-glow--br" />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: contentY, opacity: fade }}
      >
        {/* Strategic Launch Link Banner */}
        <motion.div className="hero-badge" variants={item}>
          <a href="#portfolio" className="hero-link-badge">
            <span className="badge-dot" />
            <span>⭐ Featured SKYi Portfolio: Songbirds • Manas Lake • Five Racecourse • Five Aguada (Mumbai)</span>
          </a>
        </motion.div>

        {/* Title */}
        <motion.h1 className="hero-title" variants={item}>
          <span className="sr-only">SKYi Developers Portfolio Showcase | Skyi Songbirds Bhugaon 1 BHK All-Inclusive Only ₹49L* &amp; 3, 4 BHK | SKYi Manas Lake 2 &amp; 3 BHK | Five Racecourse Sopan Baug | Five Aguada Bandra Mumbai | </span>
          Built around<br />
          <span className="hero-title-accent">life.</span>{' '}
          <span className="hero-title-sub">Shaped</span><br />
          <span className="hero-typewriter">
            {twText}
            <span className="tw-cursor">|</span>
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p className="hero-description" variants={item}>
          Partner portal showcasing SKYi Developers. For over 20 years, engineering IGBC Platinum eco-townships and signature ultra-luxury residences across 7+ Million Sq.Ft. — built around life and shaped by light, air, and proportion.
        </motion.p>

        {/* CTAs */}
        <motion.div className="hero-actions" variants={item}>
          <button className="btn-primary" onClick={scrollToPortfolio}>
            <span>Explore Portfolio</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="btn-secondary" onClick={onOpenSiteVisit}>
            Book VIP Site Visit
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div className="hero-stats" variants={item}>
          {[
            { num: '20+', label: 'Years' },
            { num: '7M+', label: 'Sq.Ft. Delivered' },
            { num: '7000+', label: 'Families' },
            { num: '150+', label: 'Awards' },
          ].map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              {i > 0 && <div className="stat-divider" />}
              <div className="hero-stat">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </header>
  );
}
