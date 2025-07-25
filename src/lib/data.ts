
import type { Service, Order } from './types';

export const services: Service[] = [
  {
    id: 'seo-audit',
    name: 'Comprehensive SEO Audit',
    category: 'SEO',
    description: 'A deep dive into your website\'s SEO health. We analyze on-page, off-page, and technical SEO factors to provide a detailed report with actionable recommendations for improvement.',
    price: 499,
    image: 'https://images.unsplash.com/photo-1560472354-b3330b6433f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  {
    id: 'keyword-research',
    name: 'Strategic Keyword Research',
    category: 'SEO',
    description: 'Unlock your organic growth potential. We identify high-value keywords tailored to your business, analyzing search volume, competition, and user intent to build a powerful SEO foundation.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1554224536-1246b8265b64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity Suite',
    category: 'Creative',
    description: 'Craft a memorable brand that resonates. Our package includes logo design, color palette creation, typography guidelines, and a comprehensive brand style guide to ensure consistency across all platforms.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1556740772-1a741367b93e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1497032628192-86f99d791ba7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  {
    id: 'social-media-visuals',
    name: 'Social Media Visuals Pack',
    category: 'Creative',
    description: 'Elevate your social media presence with stunning, on-brand visuals. We provide a set of custom templates and graphics for posts, stories, and profiles, optimized for engagement.',
    price: 750,
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  {
    id: 'lifestyle-photography',
    name: 'Lifestyle Product Photography',
    category: 'Lifestyle',
    description: 'Showcase your products in their natural element. Our lifestyle photography session captures your products in authentic, relatable scenarios that connect with your target audience.',
    price: 950,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  {
    id: 'portrait-session',
    name: 'Artisanal Portrait Session',
    category: 'Lifestyle',
    description: 'Capture your essence with a professional portrait session. Ideal for entrepreneurs, artists, and professionals looking for high-quality headshots and personal branding images.',
    price: 600,
    image: 'https://images.unsplash.com/photo-1594744803329-e58b3145af38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1588516624929-23606c45f415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  {
    id: 'content-strategy',
    name: 'Content Marketing Strategy',
    category: 'SEO',
    description: 'A bespoke content roadmap designed to attract, engage, and convert your target audience. We plan blog topics, content formats, and distribution channels to maximize your reach and impact.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1586953208448-49503a378345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  {
    id: 'video-production',
    name: 'Promotional Video Production',
    category: 'Creative',
    description: 'Tell your story through compelling video. From concept to final cut, we produce high-quality promotional videos that captivate your audience and communicate your brand message effectively.',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1528795267340-de238b036c64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1551873493-6c471519a9e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
  },
  {
    id: 'makeup-cosmetics',
    name: 'MakeUp/Production Cosmetics',
    category: 'Creative',
    description: 'Professional makeup and cosmetics services for film, photo shoots, and events. Our artists ensure talent looks flawless on camera.',
    price: 800,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    previews: ['https://images.unsplash.com/photo-1620462229921-22b0a04911e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1512496015851-a90137ba0a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'],
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
