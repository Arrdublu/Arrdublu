
'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCurrency } from '@/context/CurrencyProvider';
import { useCart } from '@/context/CartProvider';
import type { Service } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

const usedEquipment: (Omit<Service, 'category' | 'description' | 'previews'> & { condition: 'Like New' | 'Excellent' | 'Good' | 'Used' })[] = [
  {
    id: 'used-gear-1',
    name: 'Canon EOS R5 Camera Body',
    price: 2800.00,
    image: 'https://images.unsplash.com/photo-1600045903262-1b634698a964?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    paymentLink: 'https://buy.stripe.com/placeholder_used_r5',
    condition: 'Excellent',
  },
  {
    id: 'used-gear-2',
    name: 'DJI Mavic 3 Drone',
    price: 1500.00,
    image: 'https://images.unsplash.com/photo-1618422168224-4b52a51446e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    paymentLink: 'https://buy.stripe.com/placeholder_used_mavic3',
    condition: 'Like New',
  },
  {
    id: 'used-gear-3',
    name: 'Sony FE 24-70mm f/2.8 GM Lens',
    price: 1350.00,
    image: 'https://images.unsplash.com/photo-1599422473855-84f046b0a1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    paymentLink: 'https://buy.stripe.com/placeholder_used_sony_lens',
    condition: 'Good',
  },
   {
    id: 'used-gear-4',
    name: 'Aputure Light Storm C300d II',
    price: 850.00,
    image: 'https://images.unsplash.com/photo-1639016140590-b6e5114704b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    paymentLink: 'https://buy.stripe.com/placeholder_used_aputure',
    condition: 'Used',
  }
];


export function UsedEquipmentGrid() {
    const { getFormattedPrice } = useCurrency();
    const { addToCart } = useCart();

    const handleAddToCart = (item: Omit<Service, 'category' | 'description' | 'previews'>) => {
        const serviceItem: Service = {
            ...item,
            category: 'Lifestyle',
            description: `Used Equipment: ${item.name}`,
            previews: [],
        };
        addToCart(serviceItem);
    }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {usedEquipment.map((item) => (
        <Card key={item.id} className="group overflow-hidden">
            <div className="relative aspect-w-1 aspect-h-1">
            <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint="used camera gear"
            />
             <Badge variant="secondary" className="absolute top-2 right-2">{item.condition}</Badge>
            </div>
            <CardHeader>
                <CardTitle className="font-headline text-xl">
                    {item.name}
                </CardTitle>
            </CardHeader>
          <CardContent className="flex justify-between items-center">
            <p className="text-lg font-semibold text-primary">{getFormattedPrice(item.price)}</p>
            <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
