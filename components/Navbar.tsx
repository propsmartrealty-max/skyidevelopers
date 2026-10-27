'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import './Navbar.css';

interface NavLinkItem {
  name: string;
  href: string;
  id: string;
  sectionId: string | null;
}

const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home',         href: '/',            id: 'home',         sectionId: 'home' },
  { name: 'Portfolio',    href: '/projects',    id: 'portfolio',    sectionId: 'portfolio' },
  { name: 'Songbirds',    href: '/songbirds',    id: 'songbirds',    sectionId: null },
  { name: 'Manas Lake',   href: '/manas-lake',   id: 'manas-lake',   sectionId: null },
  { name: 'Philosophy',   href: '/philosophy',   id: 'philosophy',   sectionId: 'philosophy' },
  { name: 'Connectivity', href: '/connectivity', id: 'connectivity', sectionId: 'connectivity' },
  { name: 'Contact',      href: '/contact',      id: 'contact',      sectionId: 'contact' },
];

const SECTIONS = ['home', 'portfolio', 'philosophy', 'master-plan', 'virtual-tour', 'connectivity', 'contact'];

interface NavbarProps {
  onOpenVisitModal?: () => void;
}

export default function Navbar({ onOpenVisitModal }: NavbarProps) {
  const pathname = usePathname() || '/';
  const router = useRouter();

  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeSection,  setActiveSection]  = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  /* Sync active state based on route pathname */
  useEffect(() => {
    if (pathname === '/songbirds') {
      setActiveSection('songbirds');
    } else if (pathname === '/manas-lake') {
      setActiveSection('manas-lake');
    } else if (pathname === '/projects') {
      setActiveSection('portfolio');
    } else if (pathname === '/philosophy' || pathname === '/about') {
      setActiveSection('philosophy');
    } else if (pathname === '/connectivity') {
      setActiveSection('connectivity');
    } else if (pathname === '/contact') {
      setActiveSection('contact');
    } else if ((pathname === '/' || pathname === '') && typeof window !== 'undefined' && window.scrollY < 100) {
      setActiveSection('home');
    }
  }, [pathname]);

  /* Scroll + progress */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section via IntersectionObserver when on home page */
  useEffect(() => {
    if (pathname !== '/' && pathname !== '') return;

    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [pathname]);

  /* Keyboard & scroll lock for mobile menu */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    if (mobileOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (link: NavLinkItem, e?: React.MouseEvent) => {
    setMobileOpen(false);
    const isHomePage = pathname === '/' || pathname === '';

    if (isHomePage) {
      if (link.id === 'home') {
        if (e) e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
        setActiveSection('home');
        return;
      }

      if (link.sectionId) {
        const targetEl = document.getElementById(link.sectionId);
        if (targetEl) {
          if (e) e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', link.href);
          setActiveSection(link.id);
          return;
        }
      }
      // Separate routes like /songbirds, /manas-lake navigate naturally via Link
    } else {
      // Subpages
      if (link.href === pathname) {
        if (e) e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      // Navigating to other pages handled cleanly by Next.js Link
    }
  };

  const handleBookVisit = () => {
    setMobileOpen(false);
    if (onOpenVisitModal) {
      onOpenVisitModal();
    } else {
      router.push('/contact');
    }
  };

  return (
    <>
      {/* Scroll Progress Line */}
      <div className="nav-progress-track">
        <motion.div
          className="nav-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav-container">
          {/* Logo - clean link to '/' */}
          <Link
            href="/"
            className="logo"
            onClick={(e) => {
              setMobileOpen(false);
              if (pathname === '/' || pathname === '') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', '/');
                setActiveSection('home');
              }
            }}
          >
            <img src="/logo-white.svg" alt="SKYi Developers" width="65" height="30" style={{ height: '30px', width: 'auto' }} />
          </Link>

          {/* Desktop links */}
          <div className="nav-links">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(link, e)}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.span
                      className="nav-active-dot"
                      layoutId="nav-dot"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            className="btn-enquire"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookVisit}
          >
            <Calendar size={15} style={{ marginRight: '6px' }} />
            Book Site Visit
          </motion.button>

          {/* Mobile toggle */}
          <button
            className="mobile-menu-btn"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMobileOpen(v => !v)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileOpen ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer with backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-nav-menu"
              role="navigation"
              aria-label="Mobile Navigation Menu"
              className="mobile-menu glass"
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  style={{ width: '100%' }}
                >
                  <Link
                    href={link.href}
                    className={activeSection === link.id ? 'active' : ''}
                    onClick={(e) => handleNavClick(link, e)}
                    style={{ width: '100%' }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <button
                type="button"
                className="btn-enquire full-width"
                onClick={handleBookVisit}
              >
                <Calendar size={15} style={{ marginRight: '6px' }} />
                Book Site Visit
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
