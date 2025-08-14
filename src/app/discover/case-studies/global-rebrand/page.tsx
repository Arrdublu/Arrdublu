
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SocialShare } from '@/components/magazine/SocialShare';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';

const caseStudy = {
  title: 'Global Rebrand for a Tech Giant',
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
          <Badge variant="secondary" className="mb-4">{caseStudy.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
            {caseStudy.title}
          </h1>
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
          <Card className="mb-12 shadow-md">
            <CardHeader>
                <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg text-muted-foreground">{caseStudy.overview}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-6">
                    {caseStudy.keyMetrics.map(item => (
                        <div key={item.label} className="p-4 bg-muted/50 rounded-lg">
                            <p className="text-3xl font-bold text-primary">{item.metric}</p>
                            <p className="text-sm text-muted-foreground">{item.label}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          <div className="prose prose-lg max-w-none mx-auto">
              <h2 className="font-headline">The Challenge</h2>
              <p>{caseStudy.challenge}</p>
              
              <h2 className="font-headline">The Solution</h2>
              <p>{caseStudy.solution}</p>
              
              <h2 className="font-headline">The Results</h2>
              <p>{caseStudy.results}</p>
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
