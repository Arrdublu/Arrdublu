
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { Service } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/context/CurrencyProvider';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const router = useRouter();
  const { getFormattedPrice } = useCurrency();

  const handleBookNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (service.paymentLink && service.paymentLink !== '#') {
      window.open(service.paymentLink, '_blank', 'noopener,noreferrer');
    } else {
      router.push(`/service/${service.id}`);
    }
  };
  
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl group">
      <Link href={`/service/${service.id}`} className="block">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={`${service.category.toLowerCase()} service`}
          />
        </div>
      </Link>
      <CardHeader>
        <Link href={`/service/${service.id}`}>
          <CardTitle className="font-headline text-xl leading-tight hover:text-primary transition-colors">
            {service.name}
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardDescription className="flex-grow mb-4">
            {service.description.substring(0, 100)}...
        </CardDescription>
        <div className="flex justify-between items-center mt-auto pt-4 border-t">
            <p className="text-lg font-semibold text-primary dark:text-accent">
                {getFormattedPrice(service.price)}
                {service.unit === 'hr' && <span className="text-sm font-normal text-muted-foreground">/hr</span>}
            </p>
            <Button variant="outline" size="sm" onClick={handleBookNowClick}>
                Book Now
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
