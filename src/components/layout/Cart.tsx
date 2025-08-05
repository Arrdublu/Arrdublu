
'use client';

import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartProvider';

export function Cart() {
  const { cartCount } = useCart();

  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href="/cart">
        <div className="relative">
          <ShoppingBag />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
        <span className="sr-only">Shopping Bag</span>
      </Link>
    </Button>
  );
}
