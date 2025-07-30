
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { Service } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '../ui/button';
import { useCart } from '@/context/CartProvider';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = () => {
    addToCart(service);
    router.push('/cart');
  };

  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
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
            <p className="text-lg font-semibold text-primary">
                ${service.price}
            </p>
            <Button variant="outline" size="sm" onClick={handleBuyNow}>
                Buy Now
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
