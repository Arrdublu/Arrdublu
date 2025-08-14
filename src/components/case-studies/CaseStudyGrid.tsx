
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'case-study-1',
    title: 'The Saint T Collective',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'We orchestrated a complete brand evolution for an elite event design firm, elevating their identity to mirror their artistry.',
    link: '/discover/case-studies/global-rebrand',
    dataAiHint: 'corporate rebranding',
  },
  {
    id: 'case-study-2',
    title: 'Driving Organic Growth for a Fashion Retailer',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Our targeted SEO strategy resulted in a 200% increase in organic traffic and a 50% boost in online sales within the first year.',
    link: '#',
    dataAiHint: 'fashion retail online',
  },
  {
    id: 'case-study-3',
    title: 'Lifestyle Campaign for a Luxury Hotel Chain',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'We produced a visually stunning photography and video campaign that increased bookings by 30% for their flagship locations.',
    link: '#',
    dataAiHint: 'luxury hotel campaign',
  },
  {
    id: 'case-study-4',
    title: 'Launching a B2B SaaS Platform',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'From brand identity to launch campaign, we provided end-to-end creative services that helped secure initial funding and user adoption.',
    link: '#',
    dataAiHint: 'saas platform launch',
  },
];

export function CaseStudyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {caseStudies.map((project) => (
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
                View Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
