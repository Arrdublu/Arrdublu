'use client';

import { useEffect } from 'react';
import { useCart } from '@/context/CartProvider';
import type { Service } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

interface ServiceActionsProps {
  service: Service;
}

export function ServiceActions({ service }: ServiceActionsProps) {
  const { addToCart, addViewedItem } = useCart();

  useEffect(() => {
    addViewedItem(service.id);
  }, [addViewedItem, service.id]);

  return (
    <div className="mt-4">
      <Button size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90" onClick={() => addToCart(service)}>
        <ShoppingBag className="mr-2 h-5 w-5" />
        Add to Bag
      </Button>
    </div>
  );
}
