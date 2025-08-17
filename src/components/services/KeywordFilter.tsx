
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const keywords = [
  'All',
  'SEO',
  'Creative',
  'Lifestyle',
  'Branding',
  'Logo',
  'Social Media',
  'Events',
  'Wedding',
  'Photography',
  'Videography',
  'Livestream',
  'Portraits',
  'Content Marketing',
];

export function KeywordFilter() {
  const [activeKeyword, setActiveKeyword] = useState('All');
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const scrollAmount = direction === 'left' ? -200 : 200;
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <div className="relative mb-12">
       <Button 
        variant="outline" 
        size="icon" 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 h-8 w-8 rounded-full hidden md:flex"
        onClick={() => handleScroll('left')}
        >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Scroll left</span>
        </Button>
      <ScrollArea className="w-full whitespace-nowrap">
        <div ref={scrollContainerRef} className="flex gap-2 pb-4">
          {keywords.map((keyword) => (
            <Button
              key={keyword}
              asChild
              variant={activeKeyword === keyword ? 'default' : 'outline'}
              className={cn(
                'rounded-full',
                activeKeyword === keyword &&
                  'bg-primary text-primary-foreground hover:bg-primary/90'
              )}
              onClick={() => setActiveKeyword(keyword)}
            >
              <Link
                href={
                  keyword === 'All' ? '/' : `/search?q=${encodeURIComponent(keyword)}`
                }
              >
                {keyword}
              </Link>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
       <Button 
        variant="outline" 
        size="icon" 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 h-8 w-8 rounded-full hidden md:flex"
        onClick={() => handleScroll('right')}
        >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Scroll right</span>
        </Button>
    </div>
  );
}
