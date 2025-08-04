
import type { Service, Order } from './types';

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
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity Suite',
    category: 'Creative',
    description: 'Craft a memorable brand that resonates. Our package includes logo design, color palette creation, typography guidelines, and a comprehensive brand style guide to ensure consistency across all platforms.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1556740772-1a741367b93e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1497032628192-86f99d791ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_brand-identity',
  },
  {
    id: 'logo-design',
    name: 'Logo Design',
    category: 'Creative',
    description: 'Get a unique, professional logo design that represents your brand. This service includes initial concepts, revisions, and final logo files for web and print.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1716471330463-f475b00f0506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsb2dvJTIwZGVzaWdufGVufDB8fHx8MTc1NDI0NTk2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1548094990-c16ca91f18ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1611117775522-5a33503437a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_logo-design',
  },
  {
    id: 'social-media-graphic',
    name: 'Single Social Media Graphic',
    category: 'Creative',
    description: 'Need a stunning graphic for your next social media post? We will design one custom, on-brand visual for the platform of your choice.',
    price: 75,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1611162616805-669c3fa0de13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_social-media-graphic',
  },
   {
    id: 'business-card-design',
    name: 'Business Card Design',
    category: 'Creative',
    description: 'Make a great first impression with a custom business card design. We provide a print-ready file for you to take to your preferred printer.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1654131300276-db70adf4f85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8QnVzaW5lc3MlMjBDYXJkJTIwRGVzaWdufGVufDB8fHx8MTc1NDI0NjMxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1554034483-04b3eda723e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1596526131034-34c9d7ed4263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_business-card-design',
  },
  {
    id: 'social-media-visuals',
    name: 'Social Media Visuals Pack',
    category: 'Creative',
    description: 'Elevate your social media presence with stunning, on-brand visuals. We provide a set of custom templates and graphics for posts, stories, and profiles, optimized for engagement.',
    price: 750,
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_social-media-visuals',
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
    paymentLink: 'https://buy.stripe.com/placeholder_event-photography',
  },
  {
    id: 'event-video',
    name: 'Event Videography',
    category: 'Creative',
    description: 'Cinematic video coverage for your events. We create highlight reels, full-length recordings, and promotional videos that capture the energy and narrative of your occasion. The quantity in cart represents hours booked.',
    price: 250,
    unit: 'hr',
    image: 'https://images.unsplash.com/photo-1557701491-7bdb1098123d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8ZXZlbnQlMjB2aWRlb2dyYXBoeXxlbnwwfHx8fDE3NTQyNDMwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1606833958622-1b6c7a1d1d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_event-video',
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
    description: '2 camera operators (static + moving)\nSound mixing with wireless mics\nLivestream to YouTube, Facebook, or Zoom\nUp to 3.5 hours, 2 locations\nBasic graphics (name/date overlays)\nEdited highlights video (5–7 mins)\nUSB + 3 hard copies',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1688560722687-7d4d5fb8ff8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y3JlYXRpdmUlMjBzZXJ2aWNlJTIwcHJldmlld3xlbnwwfHx8fDE3NTQyOTEwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1522204538344-922f76ecc041?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjcmVhdGl2ZSUyMHNlcnZpY2UlMjBwcmV2aWV3fGVufDB8fHx8MTc1NDI5MTAwN3ww&ixlib=rb-4.1.0&q=80&w=1080', 'https://images.unsplash.com/photo-1688560722687-7d4d5fb8ff8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y3JlYXRpdmUlMjBzZXJ2aWNlJTIwcHJldmlld3xlbnwwfHx8fDE3NTQyOTEwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080'],
    paymentLink: 'https://buy.stripe.com/placeholder_livestream-standard',
  },
  {
    id: 'livestream-premium',
    name: 'Premium Livestream Package',
    category: 'Creative',
    description: 'The complete solution for high-production value events. Includes a multi-camera setup, custom on-screen graphics, pre-recorded video roll-ins, and a dedicated stream director.',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1641499303764-a9e3a93a72e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxQcmVtaXVtJTIwTGl2ZXN0cmVhbSUyMFBhY2thZ2V8ZW58MHx8fHwxNzU0Mjc5NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1556761175-b413da4b2489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511578194003-062818810074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_livestream-premium',
  },
  {
    id: 'lifestyle-photography',
    name: 'Lifestyle Product Photography',
    category: 'Lifestyle',
    description: 'Showcase your products in their natural element. Our lifestyle photography session captures your products in authentic, relatable scenarios that connect with your target audience.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D%3D&auto=format&fit=crop&w=1200&q=80',
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
    previews: ['https://images.unsplash.com/photo-1588516624929-23606c45f415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_portrait-session',
  },
  {
    id: 'content-strategy',
    name: 'Content Marketing Strategy',
    category: 'SEO',
    description: 'A bespoke content roadmap designed to attract, engage, and convert your target audience. We plan blog topics, content formats, and distribution channels to maximize your reach and impact.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxDb250ZW50JTIwTWFya2V0aW5nJTIwU3RyYXRlZ3l8ZW58MHx8fHwxNzU0MjQ0NTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_content-strategy',
  },
  {
    id: 'video-production',
    name: 'Promotional Video Production',
    category: 'Creative',
    description: 'Tell your story through compelling video. From concept to final cut, we produce high-quality promotional videos that captivate your audience and communicate your brand message effectively.',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1664277497095-424e085175e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxQcm9tb3Rpb25hbCUyMFZpZGVvJTIwUHJvZHVjdGlvbnxlbnwwfHx8fDE3NTQyNDMyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    previews: ['https://images.unsplash.com/photo-1551873493-6c471519a9e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://buy.stripe.com/placeholder_video-production',
  },
  {
    id: 'production-makeup',
    name: 'Production MakeUp',
    category: 'Creative',
    description: 'Professional makeup and cosmetics services for film, photo shoots, and events. Our artists ensure talent looks flawless on camera.',
    price: 800,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1620462229921-22b0a04911e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1512496015851-a90137ba0a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%D3D&auto=format&fit=crop&w=1200&q=80'],
    paymentLink: 'https://book.stripe.com/3cI6oH0oe81S1qe8TA93y06',
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
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






    

    
