'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
  const { cartItems, removeFromCart, getCartTotal } = useCart();
  const total = getCartTotal();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">Your Shopping Bag</h1>
      {cartItems.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-xl text-muted-foreground mb-4">Your bag is empty.</p>
            <Button asChild>
              <Link href="/">Continue Browsing</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {cartItems.map((item) => (
                    <div key={item.service.id} className="flex items-center p-6 space-x-4">
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={item.service.image}
                          alt={item.service.name}
                          fill
                          className="object-cover"
                          sizes="96px"
                          data-ai-hint={`${item.service.category.toLowerCase()} service`}
                        />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-headline text-lg font-semibold">{item.service.name}</h2>
                        <p className="text-muted-foreground">{item.service.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-lg">${item.service.price.toFixed(2)}</p>
                        <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.service.id)} className="text-destructive hover:bg-destructive/10">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span>Calculated at checkout</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90">Proceed to Checkout</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
