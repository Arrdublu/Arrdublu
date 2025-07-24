
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SocialShare } from './SocialShare';

const articles = [
  {
    id: 'article-1',
    title: 'The Psychology of Color in Branding',
    category: 'Creative',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'color wheel branding',
    url: '/discover/arrdublu-mag/color-psychology',
  },
  {
    id: 'article-2',
    title: 'SEO in 2024: Navigating the AI Revolution',
    category: 'SEO',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'seo data analytics',
    url: '/discover/arrdublu-mag/seo-ai-revolution',
  },
  {
    id: 'article-3',
    title: 'Visual Storytelling for Lifestyle Brands',
    category: 'Lifestyle',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'lifestyle product photography',
    url: '/discover/arrdublu-mag/visual-storytelling',
  },
  {
    id: 'article-4',
    title: 'Beyond the Logo: Building a Resonant Brand Voice',
    category: 'Creative',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'brand voice design',
    url: '/discover/arrdublu-mag/building-brand-voice',
  },
];

export function ArticleGrid() {
  return (
    <section>
       <h2 className="text-3xl font-headline font-semibold mb-8 text-primary border-b pb-4">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <Card key={article.id} className="group overflow-hidden flex flex-col">
            <Link href={article.url}>
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={article.dataAiHint}
                />
              </div>
            </Link>
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">{article.category}</Badge>
              <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                <Link href={article.url}>{article.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-auto">
              <SocialShare url={article.url} title={article.title} />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
