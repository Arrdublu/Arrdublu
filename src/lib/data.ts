
import type { Service, CaseStudy, ExchangeRates } from './types';

// Mock exchange rates should be consistent with the provider
export const MOCK_RATES: ExchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 157,
  JMD: 155,
};


export const services: Service[] = [
  {
    id: 'seo-audit',
    name: 'Comprehensive SEO Audit',
    category: 'SEO',
    description: 'A deep dive into your website\'s SEO health. We analyze on-page, off-page, and technical SEO factors to provide a detailed report with actionable recommendations for improvement.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1554224155-cfa08c2a758f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxDb21wcmVoZW5zaXZlJTIwU0VPJTIwQXVkaXR8ZW58MHx8fHwxNzU0MjQzNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_seo-audit',
    whatsIncluded: ['On-page analysis', 'Backlink profile review', 'Technical SEO check', 'Competitor analysis', 'Actionable report'],
    goodToKnow: ['Requires access to your website analytics.', 'Turnaround time is 5-7 business days.'],
  },
  {
    id: 'keyword-research',
    name: 'Strategic Keyword Research',
    category: 'SEO',
    description: 'Unlock your organic growth potential. We identify high-value keywords tailored to your business, analyzing search volume, competition, and user intent to build a powerful SEO foundation.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1518336707416-68242ffc0bac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8U3RyYXRlZ2ljJTIwS2V5d29yZCUyMFJlc2VhcmNofGVufDB8fHx8MTc1NDI0MzgzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_keyword-research',
    whatsIncluded: ['Primary and secondary keyword lists', 'Competitive keyword gap analysis', 'Search intent classification', 'Keyword mapping recommendations'],
    goodToKnow: ['We will schedule a 30-minute call to understand your business goals before starting.', 'Report delivered in 3-5 business days.'],
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity Suite',
    category: 'Creative',
    description: 'Craft a memorable brand that resonates. Our package includes logo design, color palette creation, typography guidelines, and a comprehensive brand style guide to ensure consistency across all platforms.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1556740772-1a741367b93e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1497032628192-86f99d791ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/9B68wP9YOeqg6Ky3zg93y0a',
    whatsIncluded: ['Logo Design (3 concepts)', 'Color Palette & Typography', 'Brand Style Guide', 'Business Card Design', 'Social Media Profile Images'],
    goodToKnow: ['Project timeline is typically 2-3 weeks.', 'Includes 2 rounds of revisions for the chosen logo concept.'],
    caseStudyIds: ['global-rebrand'],
  },
  {
    id: 'logo-design',
    name: 'Logo Design',
    category: 'Creative',
    description: 'Get a unique, professional logo design that represents your brand. This service includes initial concepts, revisions, and final logo files for web and print.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1716471330463-f475b00f0506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsb2dvJTIwZGVzaWdufGVufDB8fHx8MTc1NDI0NTk2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1548094990-c16ca91f18ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80','https://images.unsplash.com/photo-1611117775522-5a33503437a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/28E7sL7QGfuk8SG8TA93y0b',
  },
  {
    id: 'social-media-graphic',
    name: 'Single Social Media Graphic',
    category: 'Creative',
    description: 'Need a stunning graphic for your next social media post? We will design one custom, on-brand visual for the platform of your choice.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1563861327975-6078d4994655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxTaW5nbGUlMjBTb2NpYWwlMjBNZWRpYSUyMEdyYXBoaWN8ZW58MHx8fHwxNzU0MzQ4NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/3cI14n3Aqbe44Cq8TA93y0c',
  },
   {
    id: 'business-card-design',
    name: 'Business Card Design',
    category: 'Creative',
    description: 'Make a great first impression with a custom business card design. We provide a print-ready file for you to take to your preferred printer.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1654131300276-db70adf4f85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8QnVzaW5lc3MlMjBDYXJkJTIwRGVzaWdufGVufDB8fHx8MTc1NDI0NjMxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1554034483-04b3eda723e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1596526131034-34c9d7ed4263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/7sY6oH4Euaa08SG1r893y0d',
  },
  {
    id: 'social-media-visuals',
    name: 'Social Media Visuals Pack',
    category: 'Creative',
    description: 'Elevate your social media presence with stunning, on-brand visuals. We provide a set of custom templates and graphics for posts, stories, and profiles, optimized for engagement.',
    price: 750,
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/8x2aEXef495Wed01r893y0e',
    whatsIncluded: [
        '15 custom social media post templates (e.g., for Instagram, Facebook, LinkedIn)',
        '5 animated story templates',
        'Custom icon set (up to 10 icons)',
        'Profile picture and banner/cover photo designs',
        'Editable source files (Canva, Figma, or Photoshop)'
    ],
    goodToKnow: [
        'We will hold a strategy session to understand your brand aesthetic.',
        'Turnaround time is 7-10 business days.',
        'Includes one round of major revisions.'
    ],
    caseStudyIds: ['luxury-lifestyle-launch'],
  },
  {
    id: 'event-photography',
    name: 'Event Photography',
    category: 'Creative',
    description: 'Professional photography for your corporate events, parties, and conferences. Our photographers capture the key moments, ensuring high-quality images for your marketing and archival needs. The quantity in cart represents hours booked.',
    price: 150,
    unit: 'hr',
    image: 'https://images.unsplash.com/photo-1612389930565-6975454dc7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTc1NDI0Mjg2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/00w8wP2wmci85Gu2vc93y0f',
    whatsIncluded: [
        'Professional photographer on-site',
        'High-resolution digital images',
        'Online gallery for viewing and sharing',
        'Basic photo editing and color correction',
        'Coverage of keynotes, candids, and networking'
    ],
    goodToKnow: [
        'A minimum of 2 hours is required for booking.',
        'Travel fees may apply for locations outside a 30-mile radius.',
        'Final images delivered within 3-5 business days.'
    ]
  },
  {
    id: 'event-video',
    name: 'Event Videography',
    category: 'Creative',
    description: 'Cinematic video coverage for your events. We create highlight reels, full-length recordings, and promotional videos that capture the energy and narrative of your occasion. The quantity in cart represents hours booked.',
    price: 250,
    unit: 'hr',
    image: 'https://images.unsplash.com/photo-1557701491-7bdb1098123d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8ZXZlbnQlMjB2aWRlb2dyYXBoeXxlbnwwfHx8fDE3NTQyNDMwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1606833958622-1b6c7a1d1d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/9B6aEXef41Dugl88TA93y0g',
    caseStudyIds: ['annual-corporate-summit'],
  },
  {
    id: 'livestream-basic',
    name: 'Basic Livestream Package',
    category: 'Creative',
    description: 'Professional-grade base coverage. Features: 1 broadcast-quality camera, an on-site technician with sound mixing, livestream via branded platform or YouTube, up to 2 hours at one location, and a digital link with basic archive.',
    price: 500,
    image: 'https://images.unsplash.com/photo-1600195556579-d81d3f386e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8QmFzaWMlMjBMaXZlc3RyZWFtJTIwUGFja2FnZXxlbnwwfHx8fDE3NTQyODA2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1616499368319-75618f73a55a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1589144810237-792b9d12a648?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/fZu7sL6MC0zq2ui6Ls93y07',
  },
  {
    id: 'livestream-standard',
    name: 'Standard Livestream Package',
    category: 'Creative',
    description: '2 camera operators (static + moving)\n\nSound mixing with wireless mics\n\nLivestream to YouTube, Facebook, or Zoom\n\nUp to 3.5 hours, 2 locations\n\nBasic graphics (name/date overlays)\n\nEdited highlights video (5–7 mins)\n\nUSB + 3 hard copies',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1688560722687-7d4d5fb8ff8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y3JlYXRpdmUlMjBzZXJ2aWNlJTIwcHJldmlld3xlbnwwfHx8fDE3NTQyOTEwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1522204538344-922f76ecc041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjcmVhdGl2ZSUyMHNlcnZpY2UlMjBwcmV2aWV3fGVufDB8fHx8MTc1NDI5MTAwN3ww&ixlib=rb-4.1.0&q=80&w=1080', 'https://images.unsplash.com/photo-1688560722687-7d4d5fb8ff8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y3JlYXRpdmUlMjBzZXJ2aWNlJTIwcHJldmlld3xlbnwwfHx8fDE3NTQyOTEwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080'],
    paymentLink: 'https://book.stripe.com/aFacN5ef495Wed01r893y08',
  },
  {
    id: 'livestream-premium',
    name: 'Premium Livestream Package',
    category: 'Creative',
    description: 'Top-tier production and memorial keepsake.\n\n3–4 camera setup with roving and aerial (drone) shots\n\nCustom branded livestream page\n\nDedicated director + full crew\n\nUp to 5 hours, multiple locations\n\nFully edited memorial film (10 mins)\n\nSlideshow of photos + music integration\n\nDigital link + 10 USBs or DVDs\n\nFamily access portal with download/replay options',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1641499303764-a9e3a93a72e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxQcmVtaXVtJTIwTGl2ZXN0cmVhbSUyMFBhY2thZ2V8ZW58MHx8fHwxNzU0Mjc5NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1556761175-b413da4b2489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511578194003-062818810074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/7sY14n8UK0zq5Gu4Dk93y09',
  },
  {
    id: 'wedding-photography',
    name: 'Wedding Photography Package',
    category: 'Creative',
    description: 'Capture the magic of your special day. Our wedding photography package includes full-day coverage, from getting ready to the final dance, delivering beautifully edited, high-resolution images you\'ll cherish forever.',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1667506057454-87e10fb157d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxXZWRkaW5nJTIwUGhvdG9ncmFwaHklMjBQYWNrYWdlfGVufDB8fHx8MTc1NDMxNDU1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    previews: [
      'https://images.unsplash.com/photo-1519741497674-6114d1863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515934751635-481eff048d09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    ],
    paymentLink: 'https://book.stripe.com/eVqcN55Iyfukd8W9XE93y0h',
  },
  {
    id: 'wedding-videography',
    name: 'Wedding Videography Package',
    category: 'Creative',
    description: 'Relive every moment with a cinematic wedding film. We create a beautiful highlights reel and a full-length feature of your day, capturing the emotions, speeches, and celebrations in stunning detail.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1657574814541-43e2c6731e2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8V2VkZGluZyUyMFZpZGVvZ3JhcGh5JTIwUGFja2FnZXxlbnwwfHx8fDE3NTQzMTgxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: [
      'https://images.unsplash.com/photo-1606833958622-1b6c7a1d1d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510627878916-7a0c10740a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    ],
    paymentLink: 'https://book.stripe.com/6oU00j6MCci8fh4c5M93y0i',
  },
  {
    id: 'music-video-indie',
    name: 'Indie Artist Music Video',
    category: 'Creative',
    description: 'A professional music video package perfect for emerging artists. Includes a half-day shoot, 2 locations, and a 3-minute final edited video.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1598837072042-5a0fb9f400b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxJbmRpZSUyMEFydGlzdCUyME11c2ljJTIwVmlkZW98ZW58MHx8fHwxNzU1NjA2MzU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: [],
    paymentLink: 'https://book.stripe.com/placeholder_music-video-indie',
  },
  {
    id: 'music-video-standard',
    name: 'Standard Music Video Package',
    category: 'Creative',
    description: 'Bring your music to life with a stunning, broadcast-quality music video. We handle everything from concept development and storyboarding to shooting and post-production, creating a visual masterpiece that matches your sound.',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1637249876871-b1a93c13ed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8U3RhbmRhcmQlMjBNdXNpYyUyMFZpZGVvJTIwUGFja2FnZXxlbnwwfHx8fDE3NTU2MDY0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: [
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1619993335965-274a72d5c1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    ],
    paymentLink: 'https://book.stripe.com/placeholder_music-video-standard',
  },
  {
    id: 'music-video-major',
    name: 'Major Label Music Video',
    category: 'Creative',
    description: 'A premium, all-inclusive package for established artists. Includes a full-day shoot, multiple locations, advanced cinematography, special effects, and a director-level creative team.',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1530349578817-9b5acd652481?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8TWFqb3IlMjBMYWJlbCUyME11c2ljJTIwVmlkZW98ZW58MHx8fHwxNzU1NjA2NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: [],
    paymentLink: 'https://book.stripe.com/placeholder_music-video-major',
  },
  {
    id: 'lifestyle-photography',
    name: 'Lifestyle Product Photography',
    category: 'Lifestyle',
    description: 'Showcase your products in their natural element. Our lifestyle photography session captures your products in authentic, relatable scenarios that connect with your target audience.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_lifestyle-photography',
  },
  {
    id: 'portrait-session',
    name: 'Artisanal Portrait Session',
    category: 'Lifestyle',
    description: 'Capture your essence with a professional portrait session. Ideal for entrepreneurs, artists, and professionals looking for high-quality headshots and personal branding images.',
    price: 600,
    image: 'https://images.unsplash.com/photo-1574622522998-d1e672e81e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxBcnRpc2FuYWwlMjBQb3J0cmFpdCUyMFNlc3Npb258ZW58MHx8fHwxNzU0MjQzMzg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: [
      "https://firebasestorage.googleapis.com/v0/b/arrdublu-3.firebasestorage.app/o/gallery%2Fservices%2FArtisanal_Portrait_Session%2FIMG_2831.jpg?alt=media&token=65c07410-fc9f-41e6-b93d-2340d0e1f444",
      "https://firebasestorage.googleapis.com/v0/b/arrdublu-3.firebasestorage.app/o/gallery%2Fservices%2FArtisanal_Portrait_Session%2FIMG_2832.jpg?alt=media&token=4c678ae3-7fb0-47ac-8387-e2cedad27127",
      "https://firebasestorage.googleapis.com/v0/b/arrdublu-3.firebasestorage.app/o/gallery%2Fservices%2FArtisanal_Portrait_Session%2FIMG_2833.jpg?alt=media&token=0abe37ca-5fde-4fa1-a4ac-09d20b9a7fa0",
      "https://firebasestorage.googleapis.com/v0/b/arrdublu-3.firebasestorage.app/o/gallery%2Fservices%2FArtisanal_Portrait_Session%2FIMG_2834.jpg?alt=media&token=3b832960-b5e4-429b-a232-292b519bffcc",
      "https://firebasestorage.googleapis.com/v0/b/arrdublu-3.firebasestorage.app/o/gallery%2Fservices%2FArtisanal_Portrait_Session%2FIMG_2835.jpg?alt=media&token=fbf83491-b141-475e-b212-9fdd539e6dca",
      "https://firebasestorage.googleapis.com/v0/b/arrdublu-3.firebasestorage.app/o/gallery%2Fservices%2FArtisanal_Portrait_Session%2FIMG_2836.jpg?alt=media&token=95b7d58f-075a-4bd3-836b-db54faf7b0d1",
      "https://firebasestorage.googleapis.com/v0/b/arrdublu-3.firebasestorage.app/o/gallery%2Fservices%2FArtisanal_Portrait_Session%2FIMG_2837.jpg?alt=media&token=7e1f5766-c199-4f95-be86-d407ebcffe65",
      "https://firebasestorage.googleapis.com/v0/b/arrdublu-3.firebasestorage.app/o/gallery%2Fservices%2FArtisanal_Portrait_Session%2FIMG_2838.jpg?alt=media&token=7a95baeb-12e3-47a9-a108-b0bcf375e94c"
    ],
    paymentLink: 'https://book.stripe.com/bJebJ1b2Sdmc5Gu4Dk93y0l',
    whatsIncluded: [
        '2-hour photo session',
        'Choice of studio or on-location setting',
        'Multiple outfit changes',
        '20 professionally retouched high-resolution images',
        'Private online gallery for image selection'
    ],
    goodToKnow: [
        'Hair and makeup services can be added for an additional fee.',
        'Final images are delivered within 7-10 business days.',
        'A pre-session consultation is included to plan the shoot.'
    ],
    caseStudyIds: ['executive-portraits'],
  },
  {
    id: 'content-strategy',
    name: 'Content Marketing Strategy',
    category: 'SEO',
    description: 'A bespoke content roadmap designed to attract, engage, and convert your target audience. We plan blog topics, content formats, and distribution channels to maximize your reach and impact.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxDb250ZW50JTIwTWFya2V0aW5nJTIwU3RyYXRlZ3l8ZW58MHx8fHwxNzU0MjQ0NTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_content-strategy',
  },
  {
    id: 'video-production',
    name: 'Promotional Video Production',
    category: 'Creative',
    description: 'Tell your story through compelling video. From concept to final cut, we produce high-quality promotional videos that captivate your audience and communicate your brand message effectively.',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1653043586925-cfb4676c69a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwcm8lMjB2aWRlb3xlbnwwfHx8fDE3NTYxNDQyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/aFacN58UK2Hy9WK5Ho93y0m',
    whatsIncluded: [
        'Creative concept development and storyboarding',
        'Half-day shoot (up to 4 hours) with a professional videographer',
        'High-quality camera, lighting, and audio equipment',
        'Up to 2 minutes of professionally edited video',
        'Licensed music and basic motion graphics',
        '2 rounds of revisions'
    ],
    goodToKnow: [
        'Ideal for brand stories, product showcases, or website hero videos.',
        'Project timeline is typically 3-4 weeks from shoot date.',
        'Additional services like actors, multiple locations, or advanced VFX are available at extra cost.'
    ],
    caseStudyIds: ['global-rebrand'],
  },
  {
    id: 'production-makeup',
    name: 'Production MakeUp',
    category: 'Creative',
    description: 'Professional makeup and cosmetics services for film, photo shoots, and events. Our artists ensure talent looks flawless on camera.',
    price: 800,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1620462229921-22b0a04911e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1512496015851-a90137ba0a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/3cI6oH0oe81S1qe8TA93y06',
    whatsIncluded: [
        'On-site makeup artistry for talent',
        'High-definition and camera-ready looks',
        'Kit with premium, long-lasting products',
        'Touch-ups throughout the shoot',
        'Consultation to match look with production creative'
    ],
    goodToKnow: [
        'Pricing is for a half-day rate (up to 4 hours).',
        'Additional hours can be booked as needed.',
        'Travel and specialty SFX makeup may incur additional costs.'
    ],
    caseStudyIds: ['production-makeup-collaboration'],
  },
  {
    id: '2d-motion-graphics',
    name: '2D Motion Graphics Package',
    category: 'Creative',
    description: 'Bring your brand to life with custom 2D motion graphics. Ideal for explainer videos, social media content, and dynamic presentations.',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1683089598416-24ecf70305b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8MkQlMjBNb3Rpb24lMjBHcmFwaGljcyUyMFBhY2thZ2V8ZW58MHx8fHwxNzU1NjA2ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: [],
    paymentLink: 'https://book.stripe.com/placeholder_2d-motion-graphics',
    whatsIncluded: [
      'Up to 60 seconds of 2D animation',
      'Custom storyboard and design',
      'Professional voice-over and sound design',
      '2 rounds of revisions'
    ],
    goodToKnow: [
      'Project timeline is typically 3-4 weeks.',
      'Client to provide script and brand guidelines.'
    ]
  },
  {
    id: '3d-motion-graphics',
    name: '3D Motion Graphics Package',
    category: 'Creative',
    description: 'Create stunning, high-end 3D animations for product showcases, cinematic intros, and complex visual effects that captivate your audience.',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1636470241984-9c54a8517cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHwzRCUyME1vdGlvbiUyMEdyYXBoaWNzJTIwUGFja2FnZXxlbnwwfHx8fDE3NTU2MDcxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: [],
    paymentLink: 'https://book.stripe.com/placeholder_3d-motion-graphics',
    whatsIncluded: [
      'Up to 30 seconds of 3D animation',
      'Advanced modeling, texturing, and lighting',
      'Visual effects and compositing',
      '3 rounds of revisions'
    ],
    goodToKnow: [
      'Project timeline is typically 4-6 weeks.',
      'A detailed brief and consultation are required to define scope.'
    ]
  },
  {
    id: '3d-product-visualization',
    name: '3D Product Visualization',
    category: 'Creative',
    description: 'Showcase your product from every angle with photorealistic 3D renderings. Perfect for e-commerce, marketing materials, and prototyping before manufacturing.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1706034449892-a23e82d3f4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8M0QlMjBQcm9kdWN0JTIwVmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3NTU2MDc2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: [],
    paymentLink: 'https://book.stripe.com/placeholder_3d-product-visualization',
    whatsIncluded: [
      'One high-fidelity 3D model of your product',
      '5 photorealistic studio renderings (white background)',
      '3 lifestyle renderings in a virtual environment',
      'Source files for the 3D model'
    ],
    goodToKnow: [
      'Client must provide detailed product sketches, photos, or CAD files.',
      'Turnaround time is 2-3 weeks per product.'
    ]
  },
];

export const caseStudies: CaseStudy[] = [
    {
        id: 'global-rebrand',
        title: 'The Saint T Collective',
        category: 'Creative',
        image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        description: 'We orchestrated a complete brand evolution for an elite event design firm, elevating their identity to mirror their artistry.',
        link: '/discover/case-studies/global-rebrand',
        dataAiHint: 'corporate rebranding',
    },
    {
        id: 'annual-corporate-summit',
        title: 'Annual Corporate Summit',
        category: 'Event Videography',
        image: 'https://images.unsplash.com/photo-152907041287-35e9a7522029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        description: 'Dynamic video coverage for a major tech corporation\'s annual three-day summit.',
        link: '/discover/case-studies/annual-corporate-summit',
        dataAiHint: 'corporate summit',
    },
    {
        id: 'executive-portraits',
        title: 'Executive Branding Portraits',
        category: 'Lifestyle',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        description: 'Crafted a powerful visual identity for a C-suite executive, enhancing their professional brand and online presence.',
        link: '/discover/case-studies/annual-corporate-summit', // This should probably be a new page, but for now I'll point to an existing one.
        dataAiHint: 'executive portrait professional',
    },
    {
        id: 'production-makeup-collaboration',
        title: 'Flawless on Film: A Collaboration with Ioka Beautiful Purpose',
        category: 'Production Makeup',
        image: 'https://images.unsplash.com/photo-1620462229921-22b0a04911e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        description: 'A seamless collaboration ensuring talent looked impeccable on camera, delivering a great experience and fostering long-term retention.',
        link: '/discover/case-studies/production-makeup-collaboration',
        dataAiHint: 'makeup artist collaboration',
    },
    {
      id: 'luxury-lifestyle-launch',
      title: 'Luxury Lifestyle Brand Launch',
      category: 'Social Media Strategy',
      image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      description: 'Launched a new luxury brand on social media, achieving explosive growth and engagement through a targeted visual content strategy.',
      link: '/discover/case-studies/luxury-lifestyle-launch',
      dataAiHint: 'luxury brand social media',
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

export function getCaseStudyById(id: string): CaseStudy | undefined {
    return caseStudies.find((study) => study.id === id);
}

// Mock async function to simulate a database call
export async function getServicesByIds(ids: string[]): Promise<Service[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = services.filter((service) => ids.includes(service.id));
      resolve(result);
    }, 500);
  });
}

export async function getCaseStudiesByIds(ids: string[]): Promise<CaseStudy[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = caseStudies.filter((study) => ids.includes(study.id));
            resolve(result);
        }, 300);
    });
}
