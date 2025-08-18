
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/context/CurrencyProvider';

const prints = [
  {
    id: 'print-1',
    title: 'Serenity Bridge',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    dataAiHint: 'misty bridge landscape',
    paymentLink: 'https://buy.stripe.com/placeholder_print1'
  },
  {
    id: 'print-2',
    title: 'Urban Geometry',
    price: 55.00,
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    dataAiHint: 'tokyo street building',
    paymentLink: 'https://buy.stripe.com/placeholder_print2'
  },
  {
    id: 'print-3',
    title: 'Golden Hour Peaks',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    dataAiHint: 'mountain range sunset',
    paymentLink: 'https://buy.stripe.com/placeholder_print3'
  },
   {
    id: 'print-4',
    title: 'Ocean\'s Breath',
    price: 50.00,
    image: 'https://images.unsplash.com/photo-1542262868-cec49c3e41b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    dataAiHint: 'ocean wave aerial',
    paymentLink: 'https://buy.stripe.com/placeholder_print4'
  }
];


export function PrintsGrid() {
    const { getFormattedPrice } = useCurrency();

    const handleBuyNow = (paymentLink: string) => {
        window.open(paymentLink, '_blank', 'noopener,noreferrer');
    }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {prints.map((print) => (
        <Card key={print.id} className="group overflow-hidden">
            <div className="relative aspect-w-1 aspect-h-1">
            <Image
                src={print.image}
                alt={print.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={print.dataAiHint}
            />
            </div>
            <CardHeader>
                <CardTitle className="font-headline text-xl">
                    {print.title}
                </CardTitle>
            </CardHeader>
          <CardContent className="flex justify-between items-center">
            <p className="text-lg font-semibold text-primary">{getFormattedPrice(print.price)}</p>
            <Button onClick={() => handleBuyNow(print.paymentLink)}>Buy Now</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
