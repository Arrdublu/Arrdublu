
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
  overview: 'We led a comprehensive rebranding initiative that modernized a tech giant\'s image, unified its global brand messaging, and resulted in a 40% improvement in brand recognition and a 25% increase in market share.',
  keyMetrics: [
    { metric: '40%', label: 'Increase in Brand Recognition' },
    { metric: '25%', label: 'Market Share Growth' },
    { metric: '95%', label: 'Positive Brand Sentiment' },
  ],
  challenge: 'The client, a leader in the tech industry for over two decades, faced brand dilution due to rapid global expansion and a portfolio of acquisitions. Their visual identity was dated and inconsistent across different markets, leading to customer confusion and a weakened brand message.',
  solution: 'Our team conducted an in-depth global market analysis and developed a new brand strategy centered on innovation, simplicity, and connection. This strategy informed a complete visual overhaul, including a new logo, a dynamic color palette, and a unified typography system. We created a comprehensive digital brand guide and executed a phased global rollout, providing training and assets to all regional marketing teams to ensure seamless adoption.',
  results: 'The rebrand was a resounding success. The new, modern identity was met with overwhelmingly positive feedback from customers and employees alike. The unified messaging clarified the company\'s value proposition, directly contributing to a significant increase in both market share and positive brand sentiment online. The project solidified the client\'s position as a forward-thinking industry leader.',
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
