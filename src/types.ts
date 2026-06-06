/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum AppPage {
  Home = 'home',
  About = 'about',
  Initiatives = 'initiatives',
  Impact = 'impact',
  Donate = 'donate',
  Volunteer = 'volunteer',
  Events = 'events',
  Gallery = 'gallery',
  Contact = 'contact'
}

export interface Initiative {
  id: string;
  title: string;
  tagline: string;
  description: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  color: string;
  accentColor: string;
  image: string;
  bgGradient: string;
  story: string;
  highlights: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  category: string;
  description: string;
  requirements: string[];
  duration: string;
}

export interface FoundationEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  category: 'upcoming' | 'past' | 'campaign';
  metrics?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  initiative: 'bachpanshala' | 'seva' | 'udaan' | 'jeev' | 'prakriti' | 'vikas';
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}
