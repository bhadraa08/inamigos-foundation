/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, ArrowRight, ShieldCheck, CheckCircle2, Award, Clock } from 'lucide-react';
import { FOUNDATION_EVENTS } from '../data';

export default function Events() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [activeRSVPId, setActiveRSVPId] = useState<string | null>(null);
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');

  const filteredEvents = FOUNDATION_EVENTS.filter((ev) => {
    if (filter === 'all') return true;
    return ev.category === filter;
  });

  const handleRSVPSubmit = (eventId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!attendeeName || !attendeeEmail) {
      alert('Kindly supply your parameters to reserve your change credentials.');
      return;
    }
    setRegisteredEvents([...registeredEvents, eventId]);
    setActiveRSVPId(null);
    setAttendeeName('');
    setAttendeeEmail('');
  };

  return (
    <div id="events-page-root" className="bg-[#111F18] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Decorative environment sparkles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#4B5D41]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#7C7913]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-[#7C7913] uppercase tracking-[0.25em] font-bold block mb-3">Chapters & Awareness Campaigns</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none">
            Unified Local <br />
            <span className="italic font-normal text-gradient-gold">Movements</span>
          </h1>
          <p className="font-sans text-base text-[#8B976B] leading-relaxed mt-6 max-w-xl">
            Socio-restorative actions in real time. Filter, review, or attend upcoming summits or explore direct historic outcomes.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex bg-[#253B26]/30 border border-[#8B976B]/15 p-1 rounded-xl max-w-md mb-16">
          {(['all', 'upcoming', 'past'] as const).map((tab) => (
            <button
              key={tab}
              id={`tab-event-${tab}`}
              onClick={() => setFilter(tab)}
              className={`flex-1 py-3 text-center rounded-lg font-headings text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === tab
                  ? 'bg-[#253B26] border border-[#8B976B]/25 text-white shadow-md'
                  : 'text-[#8B976B]/70 hover:text-white'
              }`}
            >
              {tab === 'all' ? 'All Gatherings' : tab === 'upcoming' ? 'Upcoming' : 'Past Success'}
            </button>
          ))}
        </div>

        {/* Dynamic Card/Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout animate-fade-in">
            {filteredEvents.map((ev) => {
              const isPast = ev.category === 'past';
              const isRegistered = registeredEvents.includes(ev.id);
              return (
                <motion.div
                  key={ev.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#253B26]/10 border border-[#8B976B]/15 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#7C7913]/30 transition-all shadow-xl group"
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* Dark gradient blur */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111F18]/90 via-transparent to-transparent z-10" />
                    <img
                      src={ev.image}
                      alt={ev.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform"
                    />

                    {/* Operational Tag */}
                    <span className={`absolute top-4 left-4 z-20 px-3 py-1 rounded text-[9px] font-mono tracking-wider uppercase ${
                      isPast
                        ? 'bg-black-emerald border border-[#8B976B]/20 text-[#8B976B]/80'
                        : 'bg-[#7C7913] hover:bg-[#8B976B] text-[#111F18] font-bold shadow-md'
                    }`}>
                      {isPast ? 'Audit Ledger Available' : 'Upcoming Event'}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col gap-1.5 font-mono text-[10px] text-[#8B976B]/90 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#7C7913]" />
                          {ev.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#7C7913]" />
                          {ev.location}
                        </span>
                      </div>

                      <h3 className="font-headings font-bold text-lg text-white mb-3 group-hover:text-[#8B976B] transition-colors">
                        {ev.title}
                      </h3>

                      <p className="font-sans text-xs text-[#8B976B] leading-relaxed mb-6">
                        {ev.description}
                      </p>
                    </div>

                    {/* Action Panel base of Card */}
                    <div className="pt-6 border-t border-[#8B976B]/10">
                      {isPast ? (
                        <div className="bg-[#111F18]/85 border border-[#8B976B]/10 p-3 rounded-xl flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#253B26] border border-[#8B976B]/20 flex items-center justify-center text-[#8B976B] flex-shrink-0">
                            ✓
                          </div>
                          <div>
                            <span className="block font-mono text-[8px] uppercase text-[#8B976B]/60">Verified Outcome Record</span>
                            <span className="block font-headings font-bold text-xs text-white">{ev.metrics}</span>
                          </div>
                        </div>
                      ) : (
                        <div>
                          {isRegistered ? (
                            <div className="w-full py-3 rounded-xl bg-[#253B26]/40 border border-[#8B976B]/30 text-center font-mono text-[10px] uppercase text-[#8B976B] flex items-center justify-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#7C7913]" />
                              Entry Verified Spot Spon
                            </div>
                          ) : (
                            <button
                              onClick={() => setActiveRSVPId(ev.id)}
                              id={`btn-open-rsvp-${ev.id}`}
                              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#253B26] to-[#4B5D41] border border-[#8B976B]/35 text-white font-headings text-xs font-bold uppercase tracking-wider hover:from-[#7C7913] hover:to-[#8B976B] transition-colors cursor-pointer text-center"
                            >
                              Reserve Entry Spot
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Interactive RSVP Overlay Modal */}
        <AnimatePresence>
          {activeRSVPId && (
            <div className="fixed inset-0 bg-black-emerald/85 backdrop-blur-md z-50 flex items-center justify-center px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-[#111F18] border border-[#8B976B]/30 rounded-3xl p-8 max-w-md w-full relative"
              >
                <h3 className="font-display text-2xl font-bold text-white mb-2">RSVP Entry Spot</h3>
                <p className="font-sans text-xs text-[#8B976B] mb-6">
                  Sponsor your entry credential to join this interactive chapter. Sandboxed check-in ticket will be sent to your email.
                </p>

                <form onSubmit={(e) => handleRSVPSubmit(activeRSVPId, e)} className="flex flex-col gap-4">
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-widest text-[#8B976B] mb-2">Attendee Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bhadra Nair"
                      value={attendeeName}
                      onChange={(e) => setAttendeeName(e.target.value)}
                      className="w-full bg-[#253B26]/30 border border-[#8B976B]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/30 focus:outline-none focus:border-[#7C7913]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-widest text-[#8B976B] mb-2">Steward Email</label>
                    <input
                      type="email"
                      required
                      placeholder="bhadra@domain.com"
                      value={attendeeEmail}
                      onChange={(e) => setAttendeeEmail(e.target.value)}
                      className="w-full bg-[#253B26]/30 border border-[#8B976B]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#8B976B]/30 focus:outline-none focus:border-[#7C7913]"
                    />
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() => setActiveRSVPId(null)}
                      className="flex-1 py-3 rounded-xl border border-[#8B976B]/20 text-[#8B976B] hover:text-white font-mono text-xs uppercase cursor-pointer"
                    >
                      Dismiss
                    </button>
                    <button
                      type="submit"
                      id="btn-confirm-rsvp"
                      className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#253B26] to-[#4B5D41] border border-[#8B976B]/35 text-white font-headings text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Authenticate
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
