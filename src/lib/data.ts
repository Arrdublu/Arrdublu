
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
    previews: ['https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80'],
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
    previews: ['https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1497032628192-86f99d791ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80'],
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
    description: 'Stop the scroll with a stunning, custom-designed graphic for your social media. Whether for an announcement, promotion, or a special post, we\'ll create a single on-brand visual optimized for your chosen platform to capture attention and drive engagement.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1563861327975-6078d4994655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxTaW5nbGUlMjBTb2NpYWwlMjBNZWRpYSUyMEdyYXBoaWN8ZW58MHx8fHwxNzU0MzQ4NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/3cI14n3Aqbe44Cq8TA93y0c',
    whatsIncluded: [
        'One custom social media graphic',
        'Sized for your chosen platform (e.g., Instagram, Facebook, Twitter)',
        'Royalty-free stock imagery if needed',
        'High-resolution final file (PNG or JPG)'
    ],
    goodToKnow: [
        'Standard turnaround is 1-2 business days.',
        'You\'ll need to provide your brand guidelines (logo, colors, fonts) and the text for the graphic.',
        'Includes one round of revisions.'
    ],
    caseStudyIds: ['viral-post'],
  },
   {
    id: 'business-card-design',
    name: 'Business Card Design',
    category: 'Creative',
    description: 'Make a great first impression with a custom business card design. We provide a print-ready file for you to take to your preferred printer.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1654131300276-db70adf4f85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8QnVzaW5lc3MlMjBDYXJkJTIwRGVzaWdufGVufDB8fHx8MTc1NDI0NjMxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1596526131034-085524213d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/7sY6oH4Euaa08SG1r893y0d',
    whatsIncluded: [
      'Custom double-sided business card design',
      '3 initial design concepts to choose from',
      'Print-ready files in PDF format',
      'Digital mockups for your portfolio'
    ],
    goodToKnow: [
      'Client must provide logo and contact information.',
      'Includes two rounds of revisions.',
      'This is a design service only; printing is not included.'
    ],
    caseStudyIds: ['executive-identity'],
  },
  {
    id: 'social-media-visuals',
    name: 'Social Media Visuals Pack',
    category: 'Creative',
    description: 'Elevate your social media presence with stunning, on-brand visuals. We provide a set of custom templates and graphics for posts, stories, and profiles, optimized for engagement.',
    price: 750,
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80'],
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
    image: 'https://images.unsplash.com/photo-1764726354660-5e64ffbffe79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxhbm51YWwlMjBjb3Jwb3JhdGUlMjBzdW1taXR8ZW58MHx8fHwxNzY1NDA2NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1758788505792-38d65b41699e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxFdmVudCUyMFZpZGVvZ3JhcGh5JTIwfGVufDB8fHx8MTc1OTI3MTI1OXww&ixlib=rb-4.1.0&q=80&w=1080', 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/9B6aEXef41Dugl88TA93y0g',
    whatsIncluded: [
      'Professional videographer and equipment',
      '1-2 minute cinematic highlight reel',
      'Professionally mixed audio',
      'Licensed background music',
      'Digital delivery of final video',
    ],
    caseStudyIds: ['annual-corporate-summit'],
  },
  {
    id: 'video-editing',
    name: 'Video Editing',
    category: 'Creative',
    description: 'Professional video editing to transform your raw footage into a polished, engaging story. We handle color correction, sound mixing, transitions, and final exports for any platform.',
    price: 300,
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmd8ZW58MHx8fHwxNzY1NzE2MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: [
        'https://images.unsplash.com/photo-1579493934963-9b2f38d7c13e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1616499368319-75618f73a55a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    ],
    paymentLink: 'https://book.stripe.com/placeholder_video-editing',
    whatsIncluded: [
        'Editing of up to 15 minutes of raw footage',
        'Color correction and grading',
        'Audio mixing and enhancement',
        'Custom titles and basic motion graphics',
        'Final export in your desired format (e.g., for YouTube, Instagram)'
    ],
    goodToKnow: [
        'Price is per final minute of edited video.',
        'Client must provide all raw footage and a clear editing brief.',
        'Includes two rounds of revisions.'
    ],
  },
  {
    id: 'livestream-basic',
    name: 'Basic Livestream Package',
    category: 'Creative',
    description: 'Professional-grade base coverage. Features: 1 broadcast-quality camera, an on-site technician with sound mixing, livestream via branded platform or YouTube, up to 2 hours at one location, and a digital link with basic archive.',
    price: 500,
    image: 'https://images.unsplash.com/photo-1600195556579-d81d3f386e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8QmFzaWMlMjBMaXZlc3RyZWFtJTIwUGFja2FnZXxlbnwwfHx8fDE3NTQyODA2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1616499368319-75618f73a55a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1589144810237-792b9d12a648?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
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
      'https://images.unsplash.com/photo-1515934751635-481eff048d09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80'
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
      'https://images.unsplash.com/photo-1510627878916-7a0c10740a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80'
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
    previews: ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
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
        'https://images.unsplash.com/photo-1619993335965-274a72d5c1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80'
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
    previews: ['https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/placeholder_music-video-major',
  },
  {
    id: 'lifestyle-photography',
    name: 'Lifestyle Product Photography',
    category: 'Lifestyle',
    description: 'Showcase your products in their natural element. Our lifestyle photography session captures your products in authentic, relatable scenarios that connect with your target audience.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_lifestyle-photography',
  },
  {
    id: 'artisanal-portrait-session',
    name: 'Artisanal Portrait Session',
    category: 'Lifestyle',
    description: 'Capture your essence with a professional portrait session. Ideal for entrepreneurs, artists, and professionals looking for high-quality headshots and personal branding images.',
    price: 600,
    image: 'https://images.unsplash.com/photo-1674159085094-6f1874d7767c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxBcnRpc2FuYWx8ZW58MHx8fHwxNzU3MjkwMzk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
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
    id: 'professional-headshot',
    name: 'Professional Headshot Session',
    category: 'Lifestyle',
    description: 'A dedicated session to capture professional headshots for your LinkedIn profile, company website, or personal branding. We focus on creating a look that is both professional and approachable.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDB8fHx8MTc2NTQ5ODg0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    previews: [
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    ],
    paymentLink: 'https://buy.stripe.com/placeholder_headshot',
    whatsIncluded: [
      '1-hour photo session',
      'Studio setting with multiple backdrops',
      'Up to 2 outfit changes',
      '5 professionally retouched high-resolution images',
      'Private online gallery for image selection',
    ],
    goodToKnow: [
      'Ideal for individuals and small teams.',
      'Quick turnaround time of 2-3 business days.',
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
    id: 'promotional-video',
    name: 'Promotional Video Production',
    category: 'Creative',
    description: 'Tell your story through compelling video. From concept to final cut, we produce high-quality promotional videos that captivate your audience and communicate your brand message effectively.',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1653043586925-cfb4676c69a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxwcm8lMjB2aWRlb3xlbnwwfHx8fDE3NTYxNDQyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/3cIfZh8UK6XO1qeedU93y0j',
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
    previews: ['https://images.unsplash.com/photo-1620462229921-22b0a04911e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1512496015851-a90137ba0a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80'],
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
    previews: ['https://images.unsplash.com/photo-1635399812499-5364b63574c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
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
    previews: ['https://images.unsplash.com/photo-1598214771231-629a8a3a413a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/14AaEX5Iy4PG3ym6Ls93y0n',
    whatsIncluded: [
      'Up to 30 seconds of 3D animation',
      'Advanced modeling, texturing, and lighting',
      'Visual effects and compositing',
      '3 rounds of revisions'
    ],
    goodToKnow: [
      'Project timeline is typically 4-6 weeks.',
      'A detailed brief and consultation are required to define scope.'
    ],
    caseStudyIds: ['futuristic-tech-launch']
  },
  {
    id: '3d-product-visualization',
    name: '3D Product Visualization',
    category: 'Creative',
    description: 'Showcase your product from every angle with photorealistic 3D renderings. Perfect for e-commerce, marketing materials, and prototyping before manufacturing.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1706034449892-a23e82d3f4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8M0QlMjBQcm9kdWN0JTIwVmlzdWFsaXphdGlvbnxlbnwwfHx8fDE3NTU2MDc2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1590123936698-382c617c6999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
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
  {
    id: 'real-estate-photo',
    name: 'Real Estate Photography Package',
    category: 'Lifestyle',
    description: 'High-quality, professional photos to make your property listing stand out. We capture the best angles to showcase the space and attract potential buyers.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: [
        'https://images.unsplash.com/photo-1600585152225-358EA60c75b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80'
    ],
    paymentLink: 'https://book.stripe.com/placeholder_real-estate-photo',
    whatsIncluded: [
        '25-35 High-Resolution Digital Photos',
        'Interior & Exterior Shots',
        'Professional Editing & Color Correction',
        '24-48 Hour Turnaround Time',
        'Online Gallery for Download'
    ],
    goodToKnow: [
        'Pricing is for properties up to 2,500 sq ft.',
        'Drone photography and virtual staging available as add-ons.'
    ]
  },
  {
      id: 'real-estate-video',
      name: 'Cinematic Home Tour',
      category: 'Creative',
      description: 'Engage buyers with a stunning, cinematic video tour of your property. Our videos highlight the key features and flow of the home, creating an emotional connection.',
      price: 650,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80',
      previews: [
          'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1734417511653-252ab0709e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxIb21lJTIwVG91ciUyMHxlbnwwfHx8fDE3NTg2NTg1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      paymentLink: 'https://book.stripe.com/aFaeVd0oefuked0edU93y0o',
      whatsIncluded: [
          '1-2 Minute Cinematic Video',
          'Stabilized Walkthrough Footage',
          'Licensed Background Music',
          'Professional Color Grading',
          'Formatted for MLS and Social Media'
      ],
      goodToKnow: [
          'Pricing for properties up to 2,500 sq ft.',
          'Drone footage and agent intro can be included for an additional fee.'
      ],
      caseStudyIds: ['luxury-real-estate-showcase'],
  }
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
        image: 'https://images.unsplash.com/photo-1695891583421-3cbbf1c2e3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwY29ycG9yYXRlfGVufDB8fHx8MTc1OTI3Mzg0OHww&ixlib=rb-4.1.0&q=80&w=1080',
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
        link: '/discover/case-studies/executive-portraits',
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
    },
    {
        id: 'viral-post',
        title: 'Viral Visual: The Power of a Single Post',
        category: 'Social Media Graphic',
        image: 'https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        description: 'How one strategically designed graphic for a local cafe led to a 500% increase in weekly engagement and record foot traffic.',
        link: '/discover/case-studies/viral-post',
        dataAiHint: 'social media engagement',
    },
    {
        id: 'executive-identity',
        title: 'Executive Identity: Crafting a Lasting Impression',
        category: 'Business Card Design',
        image: 'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        description: 'Designed a premium business card for a top consulting firm, resulting in a measurable increase in client callbacks.',
        link: '/discover/case-studies/executive-identity',
        dataAiHint: 'business card meeting',
    },
    {
        id: 'futuristic-tech-launch',
        title: 'Futuristic Tech Launch: A 3D Animated Reveal',
        category: '3D Motion Graphics',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        description: 'Created a stunning 3D animated product reveal for a next-generation gadget, generating massive pre-launch buzz.',
        link: '/discover/case-studies/futuristic-tech-launch',
        dataAiHint: 'tech animation',
    },
    {
        id: 'luxury-real-estate-showcase',
        title: 'Luxury Real Estate Showcase',
        category: 'Cinematic Home Tour',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        description: 'A compelling video tour that brought a high-value property to life, resulting in a faster sale at the desired price point.',
        link: '/discover/case-studies/luxury-real-estate-showcase',
        dataAiHint: 'luxury home cinematic',
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

    

    




    












