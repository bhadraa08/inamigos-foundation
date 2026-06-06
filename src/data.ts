/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Initiative, Milestone, VolunteerOpportunity, FoundationEvent, GalleryItem, Testimonial } from './types';

export const INITIATIVES: Initiative[] = [
  {
    id: 'bachpanshala',
    title: 'Bachpanshala',
    tagline: 'Education & Dignity for Every Child',
    description: 'Nurturing young minds through holistic education, robust foundational care, and essential resources, giving underprivileged children the wings to break free from generational boundaries.',
    color: '#8B976B', // Bullfrog
    accentColor: '#7C7913', // Tool Green
    bgGradient: 'from-black-emerald via-black-leather to-[#152e20]',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
    story: 'Education is not a privilege; it is the fundamental architecture of human potential. At Bachpanshala, we rewrite the future of children living in vulnerable communities. By establishing local learning hives, providing active digital literacy, and deploying compassionate educators, we ensure no light is left behind. Our pedagogy marries standard curricula with emotional intelligence and environmental care.',
    impactMetrics: [
      { label: 'Children Educated', value: '4,500+' },
      { label: 'Learning Centers', value: '32' },
      { label: 'Digital Labs Built', value: '12' },
      { label: 'Retention Rate', value: '96%' }
    ],
    highlights: [
      'Tailored child-centric responsive curriculum',
      'Digital literacy acceleration modules',
      'Nutritional support and regular clinical checks',
      'Expressive arts, music, and physical education'
    ]
  },
  {
    id: 'seva',
    title: 'Seva',
    tagline: 'Community Welfare & Immediate Relief',
    description: 'Providing immediate socio-humanitarian relief, feeding the hungry, distributing winter kits, and launching critical response care during crises to support our most vulnerable communities.',
    color: '#44201C', // Marmite
    accentColor: '#8B976B', // Bullfrog
    bgGradient: 'from-black-emerald via-[#2d1b19] to-black-leather',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop',
    story: 'Humankind thrives when compassion is active. Through the Seva initiative, we construct safety nets under the lives of those facing extreme poverty, temporary displacement, or emergency crisis situations. From clean water distribution channels to warm midnight blanket drives, Seva acts swiftly, locally, and with deepest respect for human dignity.',
    impactMetrics: [
      { label: 'Meals Distributed', value: '180,000+' },
      { label: 'Relief Camps Run', value: '85+' },
      { label: 'Winter Kits Given', value: '12,500+' },
      { label: 'Clean Water Liters', value: '2.5M+' }
    ],
    highlights: [
      'Emergency survival kits with absolute transparency',
      'Daily nutritional feeding corridors in urban slums',
      'Hygiene kit distribution and sanitization training',
      'Rapid response humanitarian mobilization network'
    ]
  },
  {
    id: 'udaan',
    title: 'Udaan',
    tagline: 'Women Empowerment & Financial Sovereignty',
    description: 'Empowering women with vocal leadership, legal knowledge, occupational skills, and sustainable micro-entrepreneurship programs to craft independent futures.',
    color: '#7C7913', // Tool Green
    accentColor: '#8B976B', // Bullfrog
    bgGradient: 'from-[#1e2315] via-black-leather to-black-emerald',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop',
    story: 'An empowered woman shifts the center of gravity of an entire generation. Udaan delivers a dynamic incubation framework designed for rural and semi-urban female leaders. Through targeted micro-finance coaching, industrial vocational training (including green eco-packaging and design), and rigorous legal rights education, we equip women to command their economic destiny.',
    impactMetrics: [
      { label: 'Women Transformed', value: '3,200+' },
      { label: 'Micro-Enterprises Built', value: '140+' },
      { label: 'Vocational Graduates', value: '2,100+' },
      { label: 'Socio-Legal Seminars', value: '80+' }
    ],
    highlights: [
      'Micro-finance seed funding and mentorship plans',
      'Artisanal product development and digital marketplace support',
      'Community healing and self-defense clinics',
      'Leadership training for self-governing local circles'
    ]
  },
  {
    id: 'jeev',
    title: 'Jeev',
    tagline: 'Compassionate Care for Animal Companions',
    description: 'Nurturing stray and wild animals through emergency medical rescues, community water feeder zones, active vaccination runs, and sustainable adoption advocacy.',
    color: '#4B5D41', // Knarloc Green
    accentColor: '#7C7913', // Tool Green
    bgGradient: 'from-black-emerald via-[#2a3622] to-[#121c13]',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop',
    story: 'Tenderness must extend to all breathing things. Jeev is our dedicated shield protecting stray animals and urban wildlife left in the margins of concrete progress. Our active mobile trauma units reach animals in painful crises, while our community-based vaccination networks stop contagious outbreaks locally.',
    impactMetrics: [
      { label: 'Animals Healed', value: '8,400+' },
      { label: 'Mobile Ambulance Runs', value: '3,100+' },
      { label: 'Spay/Neuter Procedures', value: '2,500+' },
      { label: 'Water Feeders Placed', value: '4,000+' }
    ],
    highlights: [
      '24/7 localized mobile veterinary trauma team',
      'Anti-rabies vaccination grids across cities',
      'Reflective collar drives to prevent road accidents',
      'Animal love and rescue sensitivity workshops'
    ]
  },
  {
    id: 'prakriti',
    title: 'Prakriti',
    tagline: 'Environmental Restorations & Circularity',
    description: 'Restoring green balance through mass micro-forestation, waste audit campaigns, clean river walks, and community-driven energy conversion setups.',
    color: '#253B26', // Black Leather Jacket
    accentColor: '#8B976B', // Bullfrog
    bgGradient: 'from-[#0e1611] via-black-leather to-[#1a2e1d]',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
    story: 'Nature does not need us; we require nature to persist. Under Prakriti, we pioneer local re-forestation using Miyawaki tactics to construct high-speed urban green buffers. Collaborating with public entities and conscious citizens, we transform degraded barren lands into multi-species ecological hubs that breathe clean life back into communities.',
    impactMetrics: [
      { label: 'Native Trees Planted', value: '55,000+' },
      { label: 'Land Area Restored', value: '120 Acres' },
      { label: 'Carbon Offset (Est.)', value: '1.2M kg/yr' },
      { label: 'Waste Audited/Cleaned', value: '450 Tons' }
    ],
    highlights: [
      'Biodiversity restoration utilizing Miyawaki micro-forest models',
      'Aggressive beach, riverfront, and wetland cleanup initiatives',
      'Community solar charging post installs',
      'Zero-waste workshops and single-use plastic transition kits'
    ]
  },
  {
    id: 'vikas',
    title: 'Vikas',
    tagline: 'Next-Gen Skill Incubation & Growth',
    description: 'Bridging the workspace preparation divide through specialized tech internships, vocational certification programs, and localized job placement partnerships.',
    color: '#8B976B', // Bullfrog
    accentColor: '#44201C', // Marmite
    bgGradient: 'from-black-emerald via-black-leather to-[#1e231e]',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    story: 'Potential is distributed equally, but opportunities are not. Vikas acts as a high-potential bridge preparing youngsters to excel inside the modern digital economy. Through specialized certification workshops, active design labs, software bootcamps, and fully supported internships, we bring industrial competence directly to underprivileged scholars.',
    impactMetrics: [
      { label: 'Youth Certified', value: '1,800+' },
      { label: 'Placed Interns', value: '850+' },
      { label: 'Industry Partners', value: '64' },
      { label: 'Avg Salary Increase', value: '120%' }
    ],
    highlights: [
      'Fullstack Web, UI/UX, and Social Media management training',
      'Resume refining and mock interview simulator cycles',
      'Fully-paid vocational internship opportunities',
      'Entrepreneurial start-up incubation modules'
    ]
  }
];

export const MILESTONES: Milestone[] = [
  { year: '2020', title: 'The Genesis', description: 'Founded during global shifts, focusing on immediate pandemic relief, survival kits, and setting up primary food distribution systems.' },
  { year: '2021', title: 'Inauguration of Bachpanshala', description: 'Established our first 5 child-learning hives, opening educational doors to 400+ street children under extreme hardship.' },
  { year: '2022', title: 'Empowerment Takes Flight', description: 'Launched Udaipur and Thane Udaan micro-incubators, empowering the first cohort of 250 women with real sewing and tailoring businesses.' },
  { year: '2023', title: 'Eco and Animal Expansion', description: 'Rolled out the Prakriti Miyawaki Forest model. Launched Jeev Veterinary Trauma Support, offering continuous health support for urban strays.' },
  { year: '2024', title: 'Vikas & Corporate Alignment', description: 'Established full enterprise partnerships for internships, placed over 400 youth in modern production and digital roles.' },
  { year: '2025', title: 'The National Compassion Grid', description: 'Integrated all 6 sister initiatives into a unified tracking portal, pushing total lives directly impacted past 100,000.' },
  { year: '2026', title: 'Today & Beyond', description: 'Scaling operations to implement deep-learning modules, clean water grids, and active, real-time community resource sharing.' }
];

export const VOLUNTEER_OPPORTUNITIES: VolunteerOpportunity[] = [
  { id: '1', title: 'Bachpanshala Educator', category: 'Education', description: 'Inspire kids with conceptual knowledge, story narration, or math tutoring while assisting center leads.', requirements: ['Basic English/Regional language fluency', 'Compassion for kids', 'Commitment of 3+ hours/week'], duration: 'Minimum 3 Months' },
  { id: '2', title: 'Community Outreach Ambassador', category: 'Social Welfare', description: 'Co-lead local health camps, gather local feedback, organize materials distribution, and manage field logs.', requirements: ['Strong communication skills', 'Empathy', 'Willingness to travel locally'], duration: 'Flexi / Project-based' },
  { id: '3', title: 'Digital & Content Creator', category: 'Technology', description: 'Help build digital stories, manage social outreach campaigns, write premium copy, or compile impact newsletters.', requirements: ['Basic graphic/video design or copywriting skill', 'Reliable internet connection'], duration: 'Minimum 2 Months' },
  { id: '4', title: 'Environmental Conservationist', category: 'Sustainability', description: 'Assist in planning and executing Miyawaki tree planting sessions, municipal eco-audits, and local river cleanups.', requirements: ['Physical stamina for outdoor work', 'Love for soil and restoration'], duration: 'Saturdays / Weekends' },
  { id: '5', title: 'Emergency Animal Rescuer', category: 'Animal Welfare', description: 'Assist Vet drivers on dispatch, arrange temporary stray shelter beds, and distribute critical food and water pots.', requirements: ['Zero pet/animal allergies', 'Gentle handling temperament', 'Basic first-aid interest'], duration: 'On-Call / Periodic' },
  { id: '6', title: 'Campus Ambassador Lead', category: 'Youth Leadership', description: 'Represent InAmigos at your college, arrange donation and recycling collections, and coordinate student registrations.', requirements: ['Current college student status', 'Organizing skills'], duration: '1 Semester' }
];

export const FOUNDATION_EVENTS: FoundationEvent[] = [
  { id: 'ev-1', title: 'Udaan Eco-Artisanal Trade Show', date: 'June 25, 2026', location: 'Navi Mumbai Culture Center', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop', description: 'Celebrate economic liberation. This special expo showcases handmade organic apparel, sustainable pottery, and hand-woven lifestyle items crafted directly by our newest cohort of Udaan graduates.', category: 'upcoming', metrics: 'Goal: ₹5,00,000 of direct artisan revenue' },
  { id: 'ev-2', title: 'Miyawaki Forest Cleanup & Planting Drive', date: 'July 12, 2026', location: 'Prakriti Zone 4, Thane Creek', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop', description: 'Bring gloves, dynamic spirits, and comfortable boots! Join us as we plant 1,200 native saplings in a modern Miyawaki dense sequence to build a protective shield around urban creek waters.', category: 'upcoming', metrics: 'Expected: 150+ Registered Green Guardians' },
  { id: 'ev-3', title: 'Bachpanshala annual Science & Innovation Expo', date: 'August 04, 2026', location: 'InAmigos Hub, Pune Central', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop', description: 'Underprivileged youngsters display high-tech gravity solutions, eco-friendly models, and interactive software modules programmed by themselves inside InAmigos Digital Labs.', category: 'upcoming', metrics: '80+ Child Scientists presenting live' },
  { id: 'ev-4', title: 'The Seva Monsoon Relief Campaign', date: 'May 10, 2026', location: 'Low-lying Urban Habitats, Mumbai', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop', description: 'Pre-monsoon safety distribution of high-durability waterproof tarpaulins, warm dry nutrition bags, and critical water-filtration tablets across 20 waterlogged areas.', category: 'past', metrics: 'Impact: 4,000 waterproof setups successfully raised' },
  { id: 'ev-5', title: 'Jeev Safe Strays Collar Initiative', date: 'March 18, 2026', location: 'Suburban Highway Borders', image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=600&auto=format&fit=crop', description: 'Combatting fatal night road accidents of stray dogs by placing 2,500 highly reflective fluorescent canvas protective collars in high-speed zones.', category: 'past', metrics: 'Output: 89% drop in nighttime animal hit-and-runs' },
  { id: 'ev-6', title: 'Vikas Digital Launch Summit', date: 'December 15, 2025', location: 'Bengaluru Tech Incubation Center', image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop', description: 'A highly professional hackathon and interview sequence uniting our technical skill bootcamp trainees with recruiters from 14 leading corporate entities.', category: 'past', metrics: 'Outcome: 88 direct trainees secured long-term roles' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g-1', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop', title: 'Class in Full Flow', initiative: 'bachpanshala', caption: 'Bright bright eyes of child scholars discovering the universe of geometry.' },
  { id: 'g-2', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop', title: 'Building Digital Confidence', initiative: 'bachpanshala', caption: 'Interactive session exploring scratch coding on customized web terminals.' },
  { id: 'g-3', url: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop', title: 'Empowering Community Kitchens', initiative: 'seva', caption: 'Clean and highly standardized community preparation of wholesome meals.' },
  { id: 'g-4', url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop', title: 'Stitching Independence', initiative: 'udaan', caption: 'Women artisans crafting handmade and chemical-free linen pouches.' },
  { id: 'g-5', url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop', title: 'Udaan Circle Discussing Budgets', initiative: 'udaan', caption: 'A self-governing rural micro-finance circle making communal investments.' },
  { id: 'g-6', url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop', title: 'Safe Recovery Diagnostics', initiative: 'jeev', caption: 'Veterinary expert examining a street dog after a complex highway rescue.' },
  { id: 'g-7', url: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=800&auto=format&fit=crop', title: 'Urban Bird Feeder Deployment', initiative: 'jeev', caption: 'Placing custom pottery water feeder stations across dry urban structures.' },
  { id: 'g-8', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop', title: 'Prakriti Miyawaki Progress', initiative: 'prakriti', caption: 'Twelve months of exponential growth inside Thane Creek Miyawaki block.' },
  { id: 'g-9', url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop', title: 'Mass Sapling Distribution', initiative: 'prakriti', caption: 'Citizens picking up zero-cost native fruit saplings for home growth.' },
  { id: 'g-10', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop', title: 'Tech Career Preparation Lab', initiative: 'vikas', caption: ' bootcamp attendee presenting full-stack interface mockups.' },
  { id: 'g-11', url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop', title: 'Care & Happiness Always', initiative: 'seva', caption: 'Warm clothing distribution and interactive street carols.' },
  { id: 'g-12', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop', title: 'Vikas Cohort Peer Reviews', initiative: 'vikas', caption: 'Active peer feedback session focusing on layout responsiveness.' }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't-1', name: 'Dr. Aranya Iyer', role: 'Chief Ecological Analyst, SFI', quote: 'InAmigos Foundation does not treat environmental action as a side publicity project. Their Miyawaki initiative shows highly researched, mathematically structured execution.', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop' },
  { id: 't-2', name: 'Sarita Deshmukh', role: 'Udaan Community Leader', quote: 'With Udaan, I was trained in advanced sewing systems and bookkeeping. Today, I lead a cooperative that supports eight families in Navi Mumbai. Our lives are completely transformed.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop' },
  { id: 't-3', name: 'Manoj Bajpayee', role: 'Corporate CSR VP, Nexus Tech', quote: 'Partnering with Vikas Bootcamp has filled our entry-level digital design demands with incredibly hungry, hyper-prepared local talent. A phenomenal bridging pipeline.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop' },
  { id: 't-4', name: 'Rohan Sharma', role: 'Lead Educator Volunteer', quote: 'Teaching math and basic web logic at Bachpanshala learned me more about gratitude and community than my entire college life. An essential experience.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop' }
];

export const IMPACT_DASHBOARD = {
  headline: 'Measuring True Transformation',
  subheading: 'We hold ourselves to mathematical rigour. Every Rupee, seed, hour, and hand is logged with deep operational accountability.',
  lifetimeDirectImpact: '124,500+',
  categories: [
    { title: 'Education', text: 'Unterprivileged children brought into standard schooling pathways & digital literacy setups.', metric: '4,500+', percent: 88, color: '#8B976B' },
    { title: 'Humanitarian Care', text: 'Absolute survival support nutritious meals, seasonal dry kits, water channels.', metric: '180,000+', percent: 94, color: '#44201C' },
    { title: 'Women Empowerment', text: 'Crafting financial sovereignty, legal resilience, and technical micro-credit lines.', metric: '3,200+', percent: 79, color: '#7C7913' },
    { title: 'Animal Guardianship', text: 'Strays vaccinated, sterilized, healed from painful trauma, and fed daily.', metric: '8,400+', percent: 85, color: '#4B5D41' },
    { title: 'Reforestation Buffer', text: 'Native saplings rooted with Miyawaki logic, forming natural oxygen cells.', metric: '55,000+', percent: 92, color: '#253B26' },
    { title: 'Direct Internships', text: 'Bootcamp scholars transitioning into fully-paid professional tech/service roles.', metric: '1,800+', percent: 81, color: '#8B976B' }
  ]
};
