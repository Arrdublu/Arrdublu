
import type { Service, Order } from './types';

export const services: Service[] = [
  {
    id: 'seo-audit',
    name: 'Comprehensive SEO Audit',
    category: 'SEO',
    description: 'A deep dive into your website\'s SEO health. We analyze on-page, off-page, and technical SEO factors to provide a detailed report with actionable recommendations for improvement.',
    price: 499,
    image: 'https://placehold.co/600x400.png',
    previews: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 'keyword-research',
    name: 'Strategic Keyword Research',
    category: 'SEO',
    description: 'Unlock your organic growth potential. We identify high-value keywords tailored to your business, analyzing search volume, competition, and user intent to build a powerful SEO foundation.',
    price: 299,
    image: 'https://placehold.co/600x400.png',
    previews: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity Suite',
    category: 'Creative',
    description: 'Craft a memorable brand that resonates. Our package includes logo design, color palette creation, typography guidelines, and a comprehensive brand style guide to ensure consistency across all platforms.',
    price: 1200,
    image: 'https://placehold.co/600x400.png',
    previews: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 'social-media-visuals',
    name: 'Social Media Visuals Pack',
    category: 'Creative',
    description: 'Elevate your social media presence with stunning, on-brand visuals. We provide a set of custom templates and graphics for posts, stories, and profiles, optimized for engagement.',
    price: 750,
    image: 'https://placehold.co/600x400.png',
    previews: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 'lifestyle-photography',
    name: 'Lifestyle Product Photography',
    category: 'Lifestyle',
    description: 'Showcase your products in their natural element. Our lifestyle photography session captures your products in authentic, relatable scenarios that connect with your target audience.',
    price: 950,
    image: 'https://placehold.co/600x400.png',
    previews: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 'portrait-session',
    name: 'Artisanal Portrait Session',
    category: 'Lifestyle',
    description: 'Capture your essence with a professional portrait session. Ideal for entrepreneurs, artists, and professionals looking for high-quality headshots and personal branding images.',
    price: 600,
    image: 'https://placehold.co/600x400.png',
    previews: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 'content-strategy',
    name: 'Content Marketing Strategy',
    category: 'SEO',
    description: 'A bespoke content roadmap designed to attract, engage, and convert your target audience. We plan blog topics, content formats, and distribution channels to maximize your reach and impact.',
    price: 850,
    image: 'https://placehold.co/600x400.png',
    previews: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 'video-production',
    name: 'Promotional Video Production',
    category: 'Creative',
    description: 'Tell your story through compelling video. From concept to final cut, we produce high-quality promotional videos that captivate your audience and communicate your brand message effectively.',
    price: 2500,
    image: 'https://placehold.co/600x400.png',
    previews: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    id: 'makeup-cosmetics',
    name: 'MakeUp/Production Cosmetics',
    category: 'Creative',
    description: 'Professional makeup and cosmetics services for film, photo shoots, and events. Our artists ensure talent looks flawless on camera.',
    price: 800,
    image: 'https://placehold.co/600x400.png',
    previews: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
];

export const orders: Order[] = [
  {
    id: 'ORD-001',
    date: '2023-10-26',
    total: 1699,
    status: 'Completed',
    items: [
      { service: services[2], quantity: 1 },
      { service: services[0], quantity: 1 },
    ],
  },
  {
    id: 'ORD-002',
    date: '2023-11-15',
    total: 750,
    status: 'Completed',
    items: [{ service: services[3], quantity: 1 }],
  },
  {
    id: 'ORD-003',
    date: '2024-01-05',
    total: 1550,
    status: 'Processing',
    items: [
      { service: services[4], quantity: 1 },
      { service: services[5], quantity: 1 },
    ],
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
