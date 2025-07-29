
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartProvider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Trash2 } from 'lucide-react';
import { Separator } from '../ui/separator';

export function CartSheet({ children }: { children: React.ReactNode }) {
  const { cartItems, removeFromCart, getCartTotal } = useCart();

  const total = getCartTotal();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-6">
          <SheetTitle className="font-headline">Shopping Bag</SheetTitle>
        </SheetHeader>
        <Separator />
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="my-4 flex-1 pr-6">
              <div className="flex flex-col gap-6">
                {cartItems.map((item) => (
                  <div key={item.service.id} className="flex items-center space-x-4">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.service.image}
                        alt={item.service.name}
                        fill
                        className="object-cover"
                        data-ai-hint={`${item.service.category.toLowerCase()} service`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-md">{item.service.name}</h3>
                      <p className="text-sm text-muted-foreground">${item.service.price.toFixed(2)}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.service.id)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Separator />
            <SheetFooter className="px-6 py-4">
                <div className="w-full space-y-4">
                    <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                        <Link href="/cart">Checkout</Link>
                    </Button>
                </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-4">
            <p className="text-lg text-muted-foreground">Your bag is empty.</p>
            <SheetTrigger asChild>
                <Button variant="outline">Continue Browsing</Button>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
