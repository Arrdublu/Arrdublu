
'use client';

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ServiceActions } from '@/components/services/ServiceActions';
import type { Service, CaseStudy } from '@/lib/types';
import { SocialShare } from '@/components/magazine/SocialShare';
import { Separator } from '@/components/ui/separator';
import { useCurrency } from '@/context/CurrencyProvider';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';


interface ServicePageClientProps {
  service: Service;
  caseStudies: CaseStudy[];
}

export function ServicePageClient({ service, caseStudies }: ServicePageClientProps) {
  const { getFormattedPrice } = useCurrency();

  return (
    <>
    <header className="relative h-[50vh] w-full">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover"
          data-ai-hint={`${service.category.toLowerCase()} service`}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="container mx-auto px-4 absolute bottom-0 pb-12">
          <Badge variant="secondary" className="mb-4">{service.category}</Badge>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">
            {service.name}
          </h1>
        </div>
      </header>

    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-12">

            {service.previews && service.previews.length > 0 && (
              <Carousel className="w-full">
                <CarouselContent>
                  {service.previews.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <Image
                          src={src}
                          alt={`${service.name} preview ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                           data-ai-hint={`${service.category.toLowerCase()} service preview`}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            )}

            <div>
                 <h2 className="text-3xl font-headline font-semibold text-primary mb-4">Service Overview</h2>
                <div className="prose prose-lg text-foreground/80 max-w-none whitespace-pre-wrap">
                    <p>{service.description}</p>
                </div>
            </div>

            {service.whatsIncluded && service.whatsIncluded.length > 0 && (
                <div>
                    <h2 className="text-3xl font-headline font-semibold text-primary mb-6">What's Included</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {service.whatsIncluded.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-foreground/80 leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
            {caseStudies && caseStudies.length > 0 && (
                <div>
                    <h2 className="text-3xl font-headline font-semibold text-primary mb-6">Success Stories</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {caseStudies.map((study) => (
                           <Card key={study.id} className="group overflow-hidden">
                                <Link href={study.link}>
                                    <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={study.dataAiHint}
                                    />
                                    </div>
                                    <CardHeader>
                                    <Badge variant="secondary" className="w-fit mb-2">{study.category}</Badge>
                                    <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">
                                        {study.title}
                                    </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                    <p className="text-muted-foreground mb-4 text-sm">{study.description}</p>
                                    <div className="flex items-center text-sm font-semibold text-primary">
                                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                    </CardContent>
                                </Link>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

        </div>

        <div className="lg:sticky lg:top-24 space-y-6">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">
                        {getFormattedPrice(service.price)}
                        {service.unit === 'hr' && <span className="text-lg font-normal text-muted-foreground">/hr</span>}
                    </CardTitle>
                    <CardDescription>Ready to get started?</CardDescription>
                </CardHeader>
                <CardContent>
                     <ServiceActions service={service} />
                </CardContent>
            </Card>

            {service.goodToKnow && service.goodToKnow.length > 0 && (
                 <Card className="bg-muted/50 border-dashed">
                    <CardHeader>
                         <CardTitle className="text-lg font-semibold flex items-center">
                            <Info className="h-5 w-5 mr-2 text-primary"/>
                            Good to Know
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {service.goodToKnow.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2 mt-1">–</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
           
            <div className="mt-4">
             <SocialShare url={`/service/${service.id}`} title={service.name} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
