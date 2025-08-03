
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartProvider';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { verifyDiscountCode } from '@/lib/discount-actions';
import type { Discount } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { CheckoutForm } from '@/components/checkout/CheckoutForm';
import { createPaymentIntent } from '@/lib/actions';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, type Stripe } from '@stripe/stripe-js';

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export default function CartPage() {
  const { cartItems, removeFromCart, getCartTotal, updateQuantity } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<Discount | null>(null);
  const [discountError, setDiscountError] = useState<string | null>(null);
  const [isVerifyingDiscount, setIsVerifyingDiscount] = useState(false);
  const { toast } = useToast();

  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  useEffect(() => {
    if (stripePublishableKey) {
      setStripePromise(loadStripe(stripePublishableKey));
    } else {
      console.error(
        'Stripe publishable key is not set. Please check your .env.local file.'
      );
    }
  }, []);

  const subtotal = getCartTotal();

  let discountAmount = 0;
  if (appliedDiscount) {
    if (appliedDiscount.type === 'percentage') {
      discountAmount = subtotal * (appliedDiscount.value / 100);
    } else {
      discountAmount = appliedDiscount.value;
    }
  }

  const total = Math.max(0, subtotal - discountAmount);

  const handleApplyDiscount = async () => {
    if (!discountCode) return;
    setIsVerifyingDiscount(true);
    setDiscountError(null);
    try {
      const discount = await verifyDiscountCode(discountCode);
      setAppliedDiscount(discount);
      toast({
        title: 'Discount Applied!',
        description: `Successfully applied code: ${discount.code}`,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An unknown error occurred.';
      setDiscountError(message);
      setAppliedDiscount(null);
    } finally {
      setIsVerifyingDiscount(false);
    }
  };

  const handleProceedToCheckout = async () => {
    setIsLoading(true);
    try {
      if (cartItems.length === 0) {
        throw new Error('Your cart is empty.');
      }
      
      const { clientSecret: newClientSecret } = await createPaymentIntent(cartItems, appliedDiscount?.code);
      setClientSecret(newClientSecret);
      setIsCheckoutVisible(true);

    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: 'Checkout Error',
        description:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-headline font-bold text-primary mb-8">
        Your Shopping Bag
      </h1>
      {cartItems.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <p className="text-xl text-muted-foreground mb-4">
              Your bag is empty.
            </p>
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
                    <div
                      key={item.service.id}
                      className="grid grid-cols-5 items-center p-6 gap-4"
                    >
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
                        <h2 className="font-headline text-lg font-semibold">
                          {item.service.name}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          {item.service.category}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.service.id)}
                          className="text-destructive hover:bg-destructive/10 px-0 h-auto mt-1"
                        >
                          <Trash2 className="mr-1" />
                          Remove
                        </Button>
                      </div>
                      <div className="col-span-1 flex items-center justify-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.service.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <Minus />
                        </Button>
                        <span className="font-bold text-lg">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.service.id, item.quantity + 1)
                          }
                        >
                          <Plus />
                        </Button>
                      </div>
                      <div className="text-right col-span-1">
                        <p className="font-semibold text-lg">
                          ${(item.service.price * item.quantity).toFixed(2)} USD
                        </p>
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
                <div className="space-y-2">
                  <label htmlFor="discount-code" className="text-sm font-medium">Discount Code</label>
                  <div className="flex space-x-2">
                    <Input
                      id="discount-code"
                      placeholder="Enter code"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
                      disabled={!!appliedDiscount}
                    />
                    <Button
                      onClick={handleApplyDiscount}
                      disabled={!discountCode || isVerifyingDiscount || !!appliedDiscount}
                    >
                      {isVerifyingDiscount && <Loader2 className="animate-spin" />}
                      {!isVerifyingDiscount && 'Apply'}
                    </Button>
                  </div>
                  {discountError && <p className="text-sm text-destructive">{discountError}</p>}
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)} USD</span>
                </div>
                {appliedDiscount && (
                   <div className="flex justify-between text-green-600">
                    <span>Discount <Badge variant="secondary" className="ml-1">{appliedDiscount.code}</Badge></span>
                    <span>-${discountAmount.toFixed(2)} USD</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span className="text-muted-foreground">
                    Calculated at checkout
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)} USD</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleProceedToCheckout}
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

    {isCheckoutVisible && clientSecret && stripePromise && (
      <Dialog open={isCheckoutVisible} onOpenChange={setIsCheckoutVisible}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Payment</DialogTitle>
            <DialogDescription>
              Enter your card details below to securely complete your purchase for ${total.toFixed(2)} USD.
            </DialogDescription>
          </DialogHeader>
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm totalAmount={total} />
          </Elements>
        </DialogContent>
      </Dialog>
    )}
    </>
  );
}
