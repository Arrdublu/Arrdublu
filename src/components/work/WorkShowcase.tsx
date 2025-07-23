'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'project-1',
    title: 'E-commerce SEO Overhaul',
    category: 'SEO',
    image: 'https://placehold.co/600x400.png',
    description: 'Increased organic traffic by 150% in 6 months for a major online retailer through a comprehensive SEO strategy.',
    link: '#',
    dataAiHint: 'ecommerce website',
  },
  {
    id: 'project-2',
    title: 'Startup Brand Identity',
    category: 'Creative',
    image: 'https://placehold.co/600x400.png',
    description: 'Developed a complete brand identity, including logo, messaging, and visual guidelines for a new tech startup.',
    link: '#',
    dataAiHint: 'brand logo',
  },
  {
    id: 'project-3',
    title: 'Luxury Hotel Photography',
    category: 'Lifestyle',
    image: 'https://placehold.co/600x400.png',
    description: 'Captured stunning imagery for a new luxury hotel, showcasing its architecture, amenities, and unique atmosphere.',
    link: '#',
    dataAiHint: 'luxury hotel',
  },
  {
    id: 'project-4',
    title: 'SaaS Content Marketing',
    category: 'SEO',
    image: 'https://placehold.co/600x400.png',
    description: 'Created a content marketing engine that drove a 300% increase in qualified leads for a B2B SaaS company.',
    link: '#',
    dataAiHint: 'saas dashboard',
  },
];

export function WorkShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <Card key={project.id} className="group overflow-hidden">
          <Link href={project.link}>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.dataAiHint}
              />
            </div>
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">{project.category}</Badge>
              <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex items-center text-sm font-semibold text-primary">
                View Project <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
