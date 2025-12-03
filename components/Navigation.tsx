import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './ui/Icons';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Projets', href: '#work' },
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tighter z-50 relative">
          woodoo<span className="text-woodoo-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-1 p-1.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-white/5 backdrop-blur-md border border-white/5' : 'bg-transparent'}`}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-5 py-2 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="hidden md:block px-5 py-2.5 text-sm font-semibold bg-white text-black rounded-full hover:bg-neutral-200 transition-colors">
          Parlons-en
        </a>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden z-50 p-2 text-white relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
        >
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-y-0 right-0 w-full bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-light hover:text-woodoo-accent transition-colors transform hover:translate-x-2 duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;