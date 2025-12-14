
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
    id: 'lancome',
    title: 'Lancôme',
    subtitle: 'Holidays 2025',
    image: placeholderImageData.train.src,
    dataAiHint: placeholderImageData.train.dataAiHint,
  },
  {
    id: 'arrbrides',
    title: 'ArrBrides',
    subtitle: '',
    image: placeholderImageData.bride.src,
    dataAiHint: placeholderImageData.bride.dataAiHint,
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
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="relative text-center text-white drop-shadow-md">
                    <h2 className="text-4xl md:text-7xl font-headline font-bold">
                      {slide.title}
                    </h2>
                    {slide.subtitle && (
                      <p className="mt-2 text-lg md:text-xl">{slide.subtitle}</p>
                    )}
                  </div>
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
