
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SocialShare } from '@/components/magazine/SocialShare';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';

const caseStudy = {
  title: 'The Saint T Collective',
  category: 'Creative',
  heroImage: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80',
  dataAiHint: 'corporate meeting collaboration',
  url: '/discover/case-studies/global-rebrand',
  overview: "We orchestrated a complete brand evolution for an elite Event Design firm, elevating their identity to mirror the artistry and exclusivity of their work. The new brand narrative and visual system led to a marked increase in inquiries from their target high-net-worth clientele and solidified their position as a leader in the luxury Wedding event space.",
  keyMetrics: [
    { metric: '40%', label: 'Increase in Premium Bookings' },
    { metric: '25%', label: 'Growth in International Clientele' },
    { metric: '95%', label: 'Positive Media & Partner Feedback' },
  ],
  challenge: "The client, a celebrated name in luxury events, found their brand presence no longer captured the sublime quality of their creations. Their identity felt disconnected from the bespoke, high-touch experiences they delivered, creating a gap between their reputation and their visual representation in a competitive market.",
  solution: "We embarked on a journey of rediscovery, delving into the core of their artistic philosophy. Our solution was a new brand identity rooted in quiet luxury and timeless elegance. This encompassed a refined logo, a sophisticated color palette inspired by natural elements, and a narrative that spoke to the heart of their discerning clientele. We crafted a suite of exquisite marketing materials and a digital presence that was as breathtaking as their events, ensuring every touchpoint was an experience in itself.",
  results: 'The transformed brand was met with acclaim. The new identity resonated deeply, attracting a surge of ideal clients and prestigious media features. The cohesive and elegant brand language clarified their unique value proposition, directly contributing to a significant increase in high-caliber projects and reinforcing their status as a paragon of event design.',
};

export default function CaseStudyDetailPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <article>
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            {caseStudy.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            {caseStudy.overview}
          </p>
        </header>

        <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-lg mb-12">
          <Image
            src={caseStudy.heroImage}
            alt={caseStudy.title}
            fill
            className="object-cover"
            data-ai-hint={caseStudy.dataAiHint}
            sizes="100vw"
            priority
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mx-auto">
              <h2 className="font-headline">The Challenge</h2>
              <p>{caseStudy.challenge}</p>
              
              <h2 className="font-headline">The Solution</h2>
              <p>{caseStudy.solution}</p>
              
              <h2 className="font-headline">The Results</h2>
              <p>{caseStudy.results}</p>

              <div className="mt-12 not-prose">
                <h3 className="text-2xl font-headline font-semibold mb-6 border-b pb-3">Key Outcomes</h3>
                 <ul className="space-y-4">
                  {caseStudy.keyMetrics.map(item => (
                      <li key={item.label} className="flex items-start gap-4">
                          <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                              <span className="font-bold text-lg text-foreground">{item.metric}</span>
                              <p className="text-muted-foreground">{item.label}</p>
                          </div>
                      </li>
                  ))}
                </ul>
              </div>
          </div>
          
          <Separator className="my-12" />

          <div className="flex justify-center">
            <SocialShare url={caseStudy.url} title={caseStudy.title} />
          </div>

        </div>
      </article>
    </div>
  );
}
