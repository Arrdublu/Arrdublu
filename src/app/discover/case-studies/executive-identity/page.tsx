
'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { SocialShare } from '@/components/magazine/SocialShare';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Briefcase, TrendingUp, Handshake } from 'lucide-react';
import type { Metadata } from 'next';

const caseStudy = {
  title: 'Executive Identity: Crafting a Lasting Impression',
  category: 'Business Card Design',
  heroImage: 'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
  dataAiHint: 'business meeting networking',
  url: '/discover/case-studies/executive-identity',
  overview: "A top-tier financial consulting firm, 'Apex Advisors,' approached us to redesign their most crucial networking tool: their business card. They needed a card that didn't just share contact info, but communicated prestige, trust, and confidence. Our 'Business Card Design' service delivered an elegant, tactile card that immediately elevated their brand perception.",
  keyMetrics: [
    { metric: '25%', label: 'Increase in Callback Rate', icon: TrendingUp },
    { metric: 'Top 5%', label: 'Positive Partner Feedback', icon: Handshake },
    { metric: '100%', label: 'Executive Team Satisfaction', icon: Briefcase },
  ],
  challenge: "Apex Advisors' existing business cards were generic and forgettable. In a world of fleeting digital connections, they needed a physical artifact that would leave a lasting, premium impression long after a handshake. The card needed to be a conversation starter and a testament to their high-caliber services.",
  solution: "We focused on a multi-sensory design approach. This included selecting a premium, heavy-weight cardstock, using a minimalist layout with elegant typography, and employing a subtle yet impactful embossed logo. The design was clean, confident, and sophisticated. We provided a print-ready file with precise specifications to ensure the final product was flawless.",
  results: "The new business cards were a resounding success. Partners reported a noticeable increase in follow-up calls from new contacts, attributing it to the professional and memorable card. Internally, the executive team felt a renewed sense of pride and confidence when exchanging information, knowing their card perfectly represented their firm's elite status.",
  services: [
    { name: 'Custom Business Card Design', icon: CheckCircle },
    { name: 'Premium Stock & Finish Consultation', icon: CheckCircle },
    { name: 'Typography & Layout', icon: CheckCircle },
    { name: 'Print-Ready File Preparation', icon: CheckCircle },
  ]
};

export const metadata: Metadata = {
    title: `${caseStudy.title} | Arrdublu Case Study`,
    description: caseStudy.overview,
    openGraph: {
        title: caseStudy.title,
        description: caseStudy.overview,
        images: [
            {
                url: caseStudy.heroImage,
                width: 1200,
                height: 630,
                alt: caseStudy.title,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: caseStudy.title,
        description: caseStudy.overview,
        images: [caseStudy.heroImage],
    },
};


export default function ExecutiveIdentityPage() {

  return (
    <div className="bg-background text-foreground">
      <header className="relative h-[60vh] w-full">
        <Image
          src={caseStudy.heroImage}
          alt={caseStudy.title}
          fill
          className="object-cover"
          data-ai-hint={caseStudy.dataAiHint}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="container mx-auto px-4 absolute bottom-0 pb-12">
          <Badge variant="secondary" className="mb-4">{caseStudy.category}</Badge>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">
            {caseStudy.title}
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-headline font-semibold text-primary mb-4">Project Overview</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {caseStudy.overview}
            </p>
          </section>

          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {caseStudy.keyMetrics.map((item) => (
                <div key={item.label} className="p-6 bg-muted/50 rounded-lg">
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <p className="text-4xl font-bold text-accent-foreground dark:text-accent">{item.metric}</p>
                  <p className="text-muted-foreground mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          <div className="grid md:grid-cols-2 gap-12">
             <section>
              <h2 className="text-2xl font-headline font-semibold text-primary mb-4">The Challenge</h2>
              <p className="text-foreground/80 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </section>
             <section>
              <h2 className="text-2xl font-headline font-semibold text-primary mb-4">Our Solution</h2>
               <p className="text-foreground/80 leading-relaxed mb-6">{caseStudy.solution}</p>
            </section>
          </div>
          
           <section className="mt-12">
                <h2 className="text-2xl font-headline font-semibold text-primary mb-4">Services Provided</h2>
                 <ul className="space-y-4">
                  {caseStudy.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                          <service.icon className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-foreground/80 leading-relaxed">{service.name}</span>
                      </li>
                  ))}
              </ul>
            </section>

          <Separator className="my-12" />

          <section className="mb-12">
            <h2 className="text-3xl font-headline font-semibold text-primary mb-4">Results & Impact</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {caseStudy.results}
            </p>
          </section>

          <div className="text-center">
            <SocialShare url={caseStudy.url} title={caseStudy.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
