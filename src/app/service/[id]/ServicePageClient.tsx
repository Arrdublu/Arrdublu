
'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ServiceActions } from '@/components/services/ServiceActions';
import type { Service, Currency, ExchangeRates } from '@/lib/types';
import { SocialShare } from '@/components/magazine/SocialShare';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/utils';
import { MOCK_RATES } from '@/lib/data';

interface ServicePageClientProps {
  service: Service;
}

export function ServicePageClient({ service }: ServicePageClientProps) {

  const getFormattedPrice = (amount: number, currency: Currency = 'USD') => {
    return formatCurrency(amount, currency, MOCK_RATES);
  };


  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Carousel className="w-full rounded-lg overflow-hidden shadow-lg">
            <CarouselContent>
              {[service.image, ...service.previews].map((img, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative">
                    <Image
                      src={img}
                      alt={`${service.name} preview ${index + 1}`}
                      fill
                      className="object-cover"
                      data-ai-hint={`${service.category.toLowerCase()} service preview`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-headline font-bold text-primary">{service.name}</h1>
          <p className="text-2xl font-semibold text-accent-foreground/80">
            {getFormattedPrice(service.price)}
            {service.unit === 'hr' && <span className="text-lg font-normal text-muted-foreground">/hr</span>}
            </p>
          <div className="prose prose-lg text-foreground/80 max-w-none whitespace-pre-wrap">
            <p>{service.description}</p>
          </div>
          <div className="mt-4">
             <SocialShare url={`/service/${service.id}`} title={service.name} />
          </div>
          <Separator className="my-2" />
          <ServiceActions service={service} />
        </div>
      </div>
    </div>
  );
}
