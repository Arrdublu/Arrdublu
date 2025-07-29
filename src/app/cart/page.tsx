
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, Loader2 } from 'lucide-react';
import { createCheckoutSession } from '@/lib/actions';
import { loadStripe } from '@stripe/stripe-js';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

if (!stripePublishableKey) {
  console.error("Stripe publishable key is not set. Please check your .env.local file.");
}

const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

export default function CartPage() {
  const { cartItems, removeFromCart, getCartTotal, updateQuantity } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const total = getCartTotal();
  
  const handleCheckout = async () => {
    setIsLoading(true);

    if (!stripePromise) {
       toast({
        title: 'Configuration Error',
        description: 'Stripe is not configured. Please contact support.',
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    try {
      const checkoutItems = cartItems.map(item => ({
        id: item.service.id,
        quantity: item.quantity,
      }));

      const { url } = await createCheckoutSession(checkoutItems);
      
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('Could not create checkout session.');
      }

    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: 'Checkout Error',
        description: error instanceof Error ? error.message : 'An unexpected error occurred.',
        variant: 'destructive',
      });
       setIsLoading(false);
    }
  };

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
                    <div key={item.service.id} className="grid grid-cols-5 items-center p-6 gap-4">
                      <div className="relative h-24 w-24 col-span-1">
                        <Image
                          src={item.service.image}
                          alt={item.service.name}
                          fill
                          className="object-cover rounded-lg"
                          sizes="96px"
                          data-ai-hint={`${item.service.category.toLowerCase()} service`}
                        />
                      </div>
                      <div className="col-span-2">
                        <h2 className="font-headline text-lg font-semibold">{item.service.name}</h2>
                        <p className="text-muted-foreground text-sm">{item.service.category}</p>
                         <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.service.id)} className="text-destructive hover:bg-destructive/10 px-0 h-auto mt-1">
                          <Trash2 className="mr-1" />
                          Remove
                        </Button>
                      </div>
                       <div className="col-span-1 flex items-center justify-center gap-2">
                         <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.service.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                            <Minus />
                         </Button>
                         <span className="font-bold text-lg">{item.quantity}</span>
                         <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.service.id, item.quantity + 1)}>
                            <Plus />
                         </Button>
                      </div>
                      <div className="text-right col-span-1">
                        <p className="font-semibold text-lg">${(item.service.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-1">
            <Card className="sticky top-24">
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
                  <span className='text-muted-foreground'>Calculated at checkout</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleCheckout}
                  disabled={isLoading || !stripePromise}
                >
                  {isLoading && <Loader2 className="animate-spin mr-2" />}
                  {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
