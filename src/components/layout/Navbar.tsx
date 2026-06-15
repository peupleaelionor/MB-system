'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Le Système', href: '/systeme' },
  { label: 'MB Score', href: '/score' },
  { label: 'Offres', href: '/offres' },
  { label: 'Manifeste', href: '/manifeste' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-[#2A2418]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="text-cream font-serif font-bold text-xl tracking-wider group-hover:text-gold-light transition-colors duration-300">
              MB
            </span>
            <span className="text-[#A8A29A] text-[9px] font-body tracking-[0.25em] uppercase -mt-0.5 group-hover:text-gold transition-colors duration-300">
              SYSTÈME
            </span>
            <span className="text-[#A8A29A]/50 text-[7px] font-body tracking-[0.15em] uppercase -mt-0.5 hidden lg:block">
              Millionaire Behavior System
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <div key={link.href} className="flex items-center">
                {i > 0 && (
                  <span className="w-1 h-1 rounded-full bg-gold/30 mx-3" />
                )}
                <Link
                  href={link.href}
                  className="text-[#A8A29A] hover:text-cream text-sm font-body transition-colors duration-200 relative group py-1"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/access"
              className="flex items-center gap-2 px-4 py-2 border border-gold/40 text-cream text-xs font-body font-medium tracking-widest uppercase rounded hover:border-gold hover:text-gold transition-all duration-300"
            >
              Accéder à mon compte
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-cream origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-cream"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-cream origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#2A2418] bg-[#050505]/98 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#A8A29A] hover:text-cream text-base font-body transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="divider-gold my-2" />
              <Link
                href="/access"
                className="inline-flex items-center gap-2 px-4 py-3 border border-gold/40 text-cream text-xs tracking-widest uppercase font-body font-medium rounded text-center justify-center hover:border-gold hover:text-gold transition-all"
                onClick={() => setMenuOpen(false)}
              >
                Accéder à mon compte
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
