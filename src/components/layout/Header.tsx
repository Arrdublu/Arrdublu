'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CartSheet } from '@/components/cart/CartSheet';
import { useCart } from '@/context/CartProvider';

export function SiteHeader() {
  const pathname = usePathname();
  const { cartCount } = useCart();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/orders', label: 'Orders' },
    { href: '/admin', label: 'Admin' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold font-headline text-lg text-primary">Arrdublu</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === item.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <CartSheet>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5 text-primary" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-xs text-accent-foreground font-bold">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Shopping Bag</span>
            </Button>
          </CartSheet>
        </div>
      </div>
    </header>
  );
}
