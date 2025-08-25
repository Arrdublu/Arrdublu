
'use client';

import type { Service } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartProvider';

interface ServiceActionsProps {
  service: Service;
}

export function ServiceActions({ service }: ServiceActionsProps) {
  const { addToCart } = useCart();

  const handleAddToCartClick = () => {
    addToCart(service);
  };
  
  const handleFastpayClick = () => {
    // This is a placeholder for Fastpay functionality
    console.log(`Fastpay clicked for ${service.name}`);
  }

  const handleBookNowClick = () => {
    if (service.paymentLink) {
      window.open(service.paymentLink, '_blank', 'noopener,noreferrer');
    }
  };

  // Special case for "Promotional Video Production"
  if (service.id === 'video-production') {
    return (
        <div className="mt-4 flex flex-col">
             <Button size="lg" className="w-full" onClick={handleBookNowClick}>
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
        </div>
    )
  }

    return (
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <Button size="lg" className="w-full sm:w-auto flex-grow bg-primary hover:bg-primary/90" onClick={handleAddToCartClick}>
                Add to Bag
                <ShoppingCart className="ml-2 h-5 w-5" />
            </Button>
             <Button size="lg" variant="secondary" className="w-full sm:w-auto flex-grow" onClick={handleFastpayClick}>
                Fastpay
                <Zap className="ml-2 h-5 w-5" />
            </Button>
        </div>
    )
}
