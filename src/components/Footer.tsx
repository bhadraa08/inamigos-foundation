/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Github, Heart, Sparkles } from 'lucide-react';
import { AppPage } from '../types';

interface FooterProps {
  onPageChange: (page: AppPage) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Prisist email context required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please provide a realistic email structure.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const menuLinks = [
    { page: AppPage.Home, label: 'Story Desk' },
    { page: AppPage.About, label: 'Our Mission' },
    { page: AppPage.Initiatives, label: 'Action Portals' },
    { page: AppPage.Impact, label: 'Impact Dashboard' },
    { page: AppPage.Events, label: 'Live Chapters' },
    { page: AppPage.Gallery, label: 'Media Archive' }
  ];

  const pillars = [
    { label: 'Bachpanshala Care', id: 'bachpanshala' },
    { label: 'Seva Humanitarian', id: 'seva' },
    { label: 'Udaan Women Leads', id: 'udaan' },
    { label: 'Jeev Stray Rescue', id: 'jeev' },
    { label: 'Prakriti Ecosystems', id: 'prakriti' },
    { label: 'Vikas Tech Incubation', id: 'vikas' }
  ];

  return (
    <footer id="foundation-footer" className="bg-[#111F18] border-t border-[#8B976B]/15 pt-20 pb-12 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#4B5D41]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#7C7913]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Brand Presentation */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#253B26] to-[#111F18] border border-[#8B976B]/30 flex items-center justify-center">
                <span className="text-[#8B976B] font-display font-semibold text-lg">In</span>
              </div>
              <div>
                <span className="block font-headings font-bold text-lg tracking-wider text-white">
                  InAmigos
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-[#8B976B]">
                  Foundation
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-[#8B976B]/80 leading-relaxed max-w-sm">
              We design and execute sustainable, high-impact socio-ecological modules. Uniting conscious minds to generate generational change.
            </p>

            <div className="flex flex-col gap-3 font-sans text-sm text-[#8B976B]/90 mt-2">
              <span className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#7C7913] flex-shrink-0" />
                <span>Sector 15, Vashi, Navi Mumbai, MH, IN</span>
              </span>
              <span className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#7C7913] flex-shrink-0" />
                <a href="mailto:contact@inamigos.org" className="hover:text-white transition-colors">contact@inamigos.org</a>
              </span>
              <span className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#7C7913] flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </span>
            </div>
          </div>

          {/* Quick Pillars */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="font-headings font-bold text-xs uppercase tracking-widest text-white border-b border-[#8B976B]/15 pb-2">
              Core Pillars
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              {pillars.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onPageChange(AppPage.Initiatives);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#8B976B] hover:text-white transition-colors text-left font-medium cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="font-headings font-bold text-xs uppercase tracking-widest text-white border-b border-[#8B976B]/15 pb-2">
              Explore
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              {menuLinks.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      onPageChange(item.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#8B976B] hover:text-white transition-colors text-left font-medium cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Newsletter Box */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <h4 className="font-headings font-bold text-xs uppercase tracking-widest text-white border-b border-[#8B976B]/15 pb-2">
              Chronicle Dispatch
            </h4>
            <p className="font-sans text-sm text-[#8B976B]/80 leading-relaxed">
              Get detailed, transparent bimonthly impact reports and exclusive volunteer priority dispatches.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                placeholder="Enter email for impact logs..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                className="w-full bg-[#253B26]/30 border border-[#8B976B]/25 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/50 focus:outline-none focus:border-[#7C7913] transition-colors pr-12 font-sans"
              />
              <button
                type="submit"
                className="absolute right-2 top-1.5 bottom-1.5 w-9 h-9 bg-[#253B26] hover:bg-[#7C7913] border border-[#8B976B]/35 rounded-lg flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <AnimatePresence mode="wait">
              {error && (
                <motion.span
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-xs text-red-400 font-mono"
                >
                  {error}
                </motion.span>
              )}
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="flex items-center gap-2 text-xs text-[#8B976B] font-mono"
                >
                  <CheckCircle className="w-4 h-4 text-[#7C7913]" />
                  <span>Success! Registered for digital logs.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer Base */}
        <div className="border-t border-[#8B976B]/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8B976B]/60">
          <div>
            <span>&copy; {new Date().getFullYear()} InAmigos Foundation. Registered NGO. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onPageChange(AppPage.Contact)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy & Safeguarding
            </button>
            <span className="flex items-center gap-1.5">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-[#44201C] fill-current" />
              <span>for change</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
