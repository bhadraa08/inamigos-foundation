/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart, Users, Sparkles, Sprout } from 'lucide-react';
import { AppPage } from '../types';

interface HeaderProps {
  activePage: AppPage;
  onPageChange: (page: AppPage) => void;
}

export default function Header({ activePage, onPageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: AppPage.Home, label: 'Home' },
    { id: AppPage.About, label: 'About' },
    { id: AppPage.Initiatives, label: 'Initiatives' },
    { id: AppPage.Impact, label: 'Impact' },
    { id: AppPage.Events, label: 'Events' },
    { id: AppPage.Gallery, label: 'Gallery' },
    { id: AppPage.Volunteer, label: 'Volunteer' },
    { id: AppPage.Contact, label: 'Contact' }
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#111F18]/90 backdrop-blur-md py-4 border-b border-[#8B976B]/15 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          id="logo-brand"
          onClick={() => {
            onPageChange(AppPage.Home);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#253B26] to-[#111F18] border border-[#8B976B]/30 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-[#7C7913]/60 transition-colors">
            <span className="text-[#8B976B] font-display font-semibold text-lg group-hover:scale-110 duration-500 transition-transform">In</span>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#7C7913] rounded-full blur-xs opacity-80 group-hover:scale-150 transition-transform duration-500" />
          </div>
          <div>
            <span className="block font-headings font-bold text-lg tracking-wider text-white group-hover:text-[#8B976B] transition-colors">
              InAmigos
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-widest text-[#8B976B] group-hover:text-[#7C7913] transition-colors">
              Foundation
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-[#253B26]/30 px-2 py-1.5 rounded-full border border-[#8B976B]/10 backdrop-blur-xs">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => {
                  onPageChange(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative px-4 py-1.5 rounded-full font-headings text-xs font-semibold tracking-wider transition-all duration-300 uppercase cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-[#8B976B]/80 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-[#253B26]/85 border border-[#8B976B]/25 rounded-full shadow-md -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            id="header-cta-volunteer"
            onClick={() => onPageChange(AppPage.Volunteer)}
            className="font-headings text-xs font-semibold uppercase tracking-wider text-[#8B976B] hover:text-[#7C7913] transition-colors cursor-pointer"
          >
            Join Us
          </button>
          <button
            id="header-cta-donate"
            onClick={() => onPageChange(AppPage.Donate)}
            className="relative overflow-hidden group px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#253B26] to-[#4B5D41] border border-[#8B976B]/35 font-headings text-xs font-semibold uppercase tracking-wider text-white shadow-xl hover:shadow-[#7C7913]/10 transition-all duration-300 cursor-pointer flex items-center gap-2"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#7C7913] to-[#8B976B] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out -z-10" />
            <Heart className="w-3.5 h-3.5 text-[#8B976B] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="btn-toggle-mobile"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-[#8B976B] hover:text-white hover:bg-[#253B26]/30 border border-[#8B976B]/15 transition-all cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden w-full bg-[#111F18] border-b border-[#8B976B]/20 overflow-hidden shadow-2xl absolute top-full left-0"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => {
                      onPageChange(item.id);
                      setMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`py-3 px-4 rounded-xl text-left font-headings text-sm font-semibold tracking-wider transition-all border ${
                      isActive
                        ? 'text-white bg-[#253B26] border-[#8B976B]/30'
                        : 'text-[#8B976B] border-transparent hover:bg-[#253B26]/20'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="h-px bg-[#8B976B]/10 my-2" />

              <div className="grid grid-cols-2 gap-4 pt-2">
                <button
                  id="mobile-nav-join"
                  onClick={() => {
                    onPageChange(AppPage.Volunteer);
                    setMobileMenuOpen(false);
                  }}
                  className="py-3 px-4 rounded-xl border border-[#8B976B]/20 text-[#8B976B] font-headings text-xs font-semibold uppercase text-center hover:bg-[#253B26]/20 cursor-pointer"
                >
                  Join Us
                </button>
                <button
                  id="mobile-nav-donate"
                  onClick={() => {
                    onPageChange(AppPage.Donate);
                    setMobileMenuOpen(false);
                  }}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#253B26] to-[#4B5D41] text-white font-headings text-xs font-semibold uppercase text-center border border-[#8B976B]/30 cursor-pointer hover:from-[#7C7913] hover:to-[#8B976B] transition-colors duration-300"
                >
                  Donate
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
