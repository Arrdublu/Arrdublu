'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import placeholderImageData from '@/lib/placeholder-images.json';

const slides = [
  {
    id: 'arrbrides',
    title: 'ArrBrides',
    image: placeholderImageData.bride.src,
    dataAiHint: placeholderImageData.bride.dataAiHint,
  },
  {
    id: 'watchrasta',
    title: 'watchRasta',
    image: placeholderImageData.culture.src,
    dataAiHint: placeholderImageData.culture.dataAiHint,
  },
];

export function HeroSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="p-1">
              <Card className="overflow-hidden border-0 rounded-xl">
                <CardContent className="relative flex aspect-[16/7] items-center justify-center p-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    data-ai-hint={slide.dataAiHint}
                    priority
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <h2 className="relative text-4xl md:text-7xl font-headline font-bold text-white text-center drop-shadow-md">
                    {slide.title}
                  </h2>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 md:left-8 h-8 w-8 md:h-12 md:w-12 text-white bg-white/20 hover:bg-white/30 border-white/50" />
      <CarouselNext className="absolute right-4 md:right-8 h-8 w-8 md:h-12 md:w-12 text-white bg-white/20 hover:bg-white/30 border-white/50" />
    </Carousel>
  );
}
