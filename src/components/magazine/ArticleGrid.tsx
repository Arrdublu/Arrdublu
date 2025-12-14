
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
    image: 'https://images.unsplash.com/photo-1558637845-c8b736844442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    dataAiHint: 'color wheel branding',
    url: '/discover/arrdublu-mag/color-psychology',
  },
  {
    id: 'article-2',
    title: 'SEO in 2024: Navigating the AI Revolution',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1611162617213-7d724e0f2241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    dataAiHint: 'seo data analytics',
    url: '/discover/arrdublu-mag/seo-ai-revolution',
  },
  {
    id: 'article-3',
    title: 'Visual Storytelling for Lifestyle Brands',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    dataAiHint: 'lifestyle product photography',
    url: '/discover/arrdublu-mag/visual-storytelling',
  },
  {
    id: 'article-4',
    title: 'Beyond the Logo: Building a Resonant Brand Voice',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1557852642-a5ae656a88e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
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
            <Link href={article.url} className="block">
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
            <CardContent className="mt-auto pt-4">
              <SocialShare url={article.url} title={article.title} />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
